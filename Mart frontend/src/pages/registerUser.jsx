import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EazymartLogo from "../components/home-page component/EazymartLogo";
import appleLogo from "../assets/images/loginComponet-images/apple-fill.png";
import google from "../assets/images/loginComponet-images/flat-color-icons_google.png";
import facebookLogo from "../assets/images/loginComponet-images/logos_facebook.png";
import vectorBg from "../assets/images/loginComponet-images/Vector 2.png";
import finegirl from "../assets/images/loginComponet-images/pngegg (98) 1@2x.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState();

  console.log("this is the user phone =>", phone);

  //axios with credentials
  axios.defaults.withCredentials = true;

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/user/signup", {
        name: name,
        username: userName,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("the signup sussess response => ", res);
        navigate("/login");
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="bg-slate-50 w-[90vw] h-[95vh] m-auto mt-1 rounded-xl flex">
      <div className=" w-[100%] md:w-[50%] h-[100%] overflow-y-hidden relative hidden sm:hidden md:block">
        <img src={vectorBg} alt="" className="" />
        <img src={finegirl} alt="" className="absolute top-52 " />
        {/* <img src={finegirl} alt="" /> */}
      </div>
      {/*second div for the form */}
      <div className=" w-[100%]  md:w-[50%] flex flex-col items-center gap-2 ">
        <div className="mt-5 p-2 w-48  ml-[300px]">
          <EazymartLogo />
        </div>
        {/*form login section */}
        <form
          action=""
          className="mt-2 flex flex-col w-[80%]"
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col  ">
            <span className="text-2xl font-bold">Sign Up</span>
            <span className="text-lg font-semi-bold mt-2 w-96">
              Creating an account gives you a more apealing shopping experience
            </span>
          </div>
          {/*this is the input field */}
          <div className="flex flex-col  gap-2 mt-7 w-[100%]">
            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Full Names Here"
                required
                className="w-[100%] p-2 outline-none "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <IoMdContact className="text-2xl text-gray-700" />
            </div>

            <div className="flex justify-between">
              <input
                type="email"
                placeholder="Enter Email Here"
                required
                className="w-[40%] outline-none border p-4  rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="number"
                placeholder="+234"
                required
                className="w-[40%] p-4 outline-none border rounded-lg "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Enter User Name"
                required
                className="w-[100%] p-2 outline-none "
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="flex w-full items-center bg-white rounded-md p-2 border">
                <input
                  type="password"
                  placeholder="Password Here"
                  required
                  className="w-[100%] p-2 outline-none "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLockPasswordFill className="text-2xl text-gray-700" />
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
              {isLoading ? "loading...." : "Create Account"}
            </button>
          </div>
          {/*this is the query section */}
          <div className="flex flex-col -mt-1 p-4 items-center gap-3">
            <div className="text-lg font-semibold">
              Already have an account?
              <span className="text-[#FF8831]">
                <Link to="/login">Login</Link>
              </span>
            </div>
            <div>Or Sign up With</div>
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

export default RegisterUser;

// <div className="max-w-2xl mx-auto py-20">
// <div className=" bg-white drop-shadow-md p-5 w-full">
//   <h1 className="text-center font-semibold">Registration Form</h1>
//   <form className="space-y-3" onSubmit={handleSubmit}>
//     <div className="flex flex-col space-y-1">
//       <label htmlFor="">name</label>
//       <input
//         type="text"
//         placeholder="full name"
//         required
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
//       />
//     </div>

//     <div className="flex flex-col space-y-1">
//       <label htmlFor="">user name</label>
//       <input
//         type="text"
//         placeholder="user name"
//         required
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
//       />
//     </div>
//     <div className="flex flex-col space-y-1">
//       <label htmlFor="">Email</label>
//       <input
//         type="email"
//         placeholder="Email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
//       />
//     </div>
//     <div className="flex flex-col space-y-1 w-full">
//       <label htmlFor="">Password</label>
//       <input
//         type="password"
//         placeholder="Password"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full px-3 py-2 outline-none border border-gray-400 rounded-md"
//       />
//     </div>
//     <button
//       type="submit"
//       className="bg-gray-300 px-5 py-2 rounded-md font-medium disabled:opacity-40 disabled:cursor-not-allowed"
//     >
//       Login
//     </button>
//   </form>
// </div>
