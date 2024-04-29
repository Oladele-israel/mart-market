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
  const baseURL = import.meta.env.VITE_API_KEY;

  const loginUser = async (credentials) => {
    try {
      const response = await axios.post(`${baseURL}/user/login`, credentials, {
        withCredentials: true,
      });
      setLoading(true);
      setUserDetails(response.data.userDetails);
      setMessage(response.data.message);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    const baseURL = import.meta.env.VITE_API_KEY;
    try {
      await axios.post(`${baseURL}/user/logout`, {}, { withCredentials: true });
      setUserDetails(null);
      setMessage(""); // Clear message on logout
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // Set loading to false after login attempt (whether success or failure)
    }
  };

  useEffect(() => {
    const validResponse = async () => {
      try {
        const response = await axios.get(`${baseURL}/user/validateToken`, {
          withCredentials: true,
        });
        if (response?.data?.success) {
          setMessage(response.data.message);
          setUserDetails(response.data.userDetail);
        }
        if (!response.data) {
          setMessage("validation of token did not work");
        }
        setLoading(false);
      } catch (error) {
        if (error instanceof axios.AxiosError) {
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
