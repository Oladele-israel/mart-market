import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EazymartLogo from "../components/home-page component/EazymartLogo";
import appleLogo from "../assets/images/loginComponet-images/apple-fill.png";
import google from "../assets/images/loginComponet-images/flat-color-icons_google.png";
import facebookLogo from "../assets/images/loginComponet-images/logos_facebook.png";
import vectorBg from "../assets/images/loginComponet-images/Vector 2.png";
import finegirl from "../assets/images/loginComponet-images/pngegg (98) 1@2x.png";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginForm = () => {
  const navigate = useNavigate();
  const base_url = "http://localhost:5000";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //axios with credentials4
  axios.defaults.withCredentials = true;

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${base_url}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("the login sussess response => ", res);
        if (res.data.success) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="bg-slate-50 w-[80vw] h-[90vh] m-auto mt-10 rounded-xl flex">
      <div className="w-[50%] h-[100%] overflow-y-hidden relative hidden sm:hidden md:block">
        <img src={vectorBg} alt="" className="" />
        <img src={finegirl} alt="" className="absolute top-52 " />
        {/* <img src={finegirl} alt="" /> */}
      </div>
      {/*second div for the form */}
      <div className=" flex flex-col items-center gap-2  w-[100%]  md:w-[50%]">
        <div className="mt-5 p-2 w-48  ml-[300px]">
          <EazymartLogo />
        </div>
        {/*form login section */}
        <form
          action=""
          className="mt-7 flex flex-col w-[80%]"
          onSubmit={handleSubmit}
        >
          <div className="text-2xl font-bold">Login</div>
          {/*this is the input field */}
          <div className="flex flex-col  gap-5 mt-7 w-[100%]">
            <div>
              <input
                type="email"
                placeholder="Email Here"
                required
                className="w-[100%] p-4 border placeholder:text-lg rounded-md outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex w-full items-center bg-white rounded-md p-2 border">
                <input
                  type="password"
                  placeholder="Password Here"
                  required
                  className="w-[100%] p-2 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLockPasswordFill className="text-2xl text-gray-700" />
              </div>
              <div htmlFor="" className="text-lg self-start mt-2">
                Forgot Passwords?
              </div>
            </div>
            <button
              className={
                isLoading
                  ? " bg-gray-300 px-5 py-2 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  : "w-[100%] p-3 bg-[#FF8831] text-white  rounded-md text-xl font-semibold"
              }
              type="submit"
            >
              {isLoading ? "loading...." : "Login"}
            </button>
          </div>
          {/*this is the query section */}
          <div className="flex flex-col mt-4 p-4 items-center gap-6">
            <div className="text-lg font-semibold">
              Dont have an account?
              <span className="text-[#FF8831]">
                <Link to="/register">Sign Up</Link>
              </span>
            </div>
            <div>Or login With</div>
            <div className="flex gap-2">
              <div className="flex items-center w-[130px] gap-1 border p-3 rounded-xl">
                <img src={facebookLogo} alt="" />
                <span className="text-lg font-semibold">Facebook</span>
              </div>
              <div className="flex items-center gap-1 border p-3 rounded-xl">
                <img src={google} alt="" />
                <span className="text-lg font-semibold">Google</span>
              </div>
              <div className="flex items-center gap-1 border p-3 rounded-xl">
                <img src={appleLogo} alt="" />
                <span className="text-lg font-semibold">Apple</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
//          <p className="text-orange-500 animate-pulse font-medium text-center my-20">
// Loading...
// </p>
