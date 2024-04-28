import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        credentials,
        { withCredentials: true }
      );
      setLoading(true);
      setUserDetails(response.data.userDetails);
      setMessage(response.data.message);
      console.log("this is the  user detail => ", userDetails);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      setError(error);
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/user/logout",
        {},
        { withCredentials: true }
      );
      setUserDetails(null);
      setMessage(""); // Clear message on logout
      setLoading(false);
    } catch (error) {
      console.error("Logout failed:", error);
      setError(error);
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  useEffect(() => {
    const validResponse = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/validateToken",
          { withCredentials: true }
        );
        console.log("the response from valid => ", response);
        if (response?.data?.success) {
          setMessage(response.data.message);
          setUserDetails(response.data.userDetail);
        }
        if (!response.data) {
          setMessage("validation of token did not work");
        }
        setLoading(false);
      } catch (error) {
        console.log("the validation error => ", error);
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
          setError(error.response.data.success);
        }
        setLoading(false);
      }
    };
    validResponse();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
        loading,
        loginUser,
        logoutUser,
        error,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
