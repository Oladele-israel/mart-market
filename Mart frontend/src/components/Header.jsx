import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import EazymartLogo from "./home-page component/EazymartLogo";
import { useAuthContext } from "./context/auth-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const { userDetails, error, message } = useAuthContext();
  const [isToggle, setIsToggle] = useState(false);
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true; //i.e with cookie sent along
  const handleSelectChange = (e) => {
    const selectedLink = e.target.value;
    setLink(selectedLink);
    if (selectedLink === "login") {
      navigate("/login");
    }
    if (selectedLink === "dashBoard") {
      navigate("/admin");
    }
    if (selectedLink === "logout") {
      axios
        .post("http://localhost:5000/user/logout")
        .then((res) => {
          console.log("this is the response", res);
          if (res.data.success) {
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          // Check if the error is an Axios error and log the response data
          if (axios.isAxiosError(error)) {
            console.log("Error response data:", error.response.data);
          }
        });
    }
  };

  //getting the values of the the user and their navigation to the  respevtive pages
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="w-screen h-[5rem]">
      <header className="bg-slate-50 p-5 md:p-7">
        <div className="flex items items-center md:justify-evenly ">
          <EazymartLogo />
          {/**this is the search bar */}
          <div className="flex items-center ml-4 border-0 md:border-2 md:border-slate-300 rounded-lg w-[14rem] sm:w-[20rem] md:w-[30rem] md:p-3 justify-between">
            <input
              type="text"
              placeholder="search"
              className="bg-transparent md:w-[80%] border-none outline-none hidden md:block "
            />
            <FaSearch className="text-orange-400 text-2xl hidden md:block" />
          </div>
          {/**this is the account section */}
          <div className="flex gap-x-2  justify-evenly w-[40%]">
            <div className="flex items-center gap-3 bg-slate-100 rounded-lg w-40 p-2">
              <IoPersonOutline className="text-2xl md:text-4xl" />
              {message === "Authorized" && userDetails.isAdmin === false ? (
                <select onChange={handleSelectChange}>
                  <option value="">Account</option>
                  <option value="logout">logout</option>
                </select>
              ) : message === "Authorized" && userDetails.isAdmin === true ? (
                <select
                  className="text-xl p-3 bg-transparent outline-none"
                  onChange={handleSelectChange}
                >
                  <option value="">Hi {userDetails.name}</option>
                  <option value="dashBoard">Dashboard</option>
                  <option value="logout">LogOut</option>
                </select>
              ) : (
                <select
                  className="bg-transparent text-xl bol outline-none"
                  onChange={handleSelectChange}
                >
                  <option value="Account">Account</option>
                  <option value="login">login</option>
                </select>
              )}
            </div>
            {/**this is the favourite list section */}
            <div className="flex items-center gap-1  ">
              <p className="font-semibold text-[#575454] text-[1.2rem] hidden md:block">
                favourites
              </p>
              <FaRegHeart className="text-xl hidden md:block md:text-4xl" />
            </div>
            {/**this is the cart section */}
            <div className="flex items-center gap-1">
              <p className="font-semibold text-[#575454] text-[1.2rem] hidden md:block">
                cart-List
              </p>
              <div className="flex">
                <IoCartOutline className="text-xl md:text-4xl" />
                <p className="text-xl font-bold text-orange-400 bg-black rounded-full h-7 w-7 text-center">1</p>
              </div>
            </div>
          </div>

          {/**this is the toggle part of the hamburger header */}
          <div>
            <div className="flex items-center gap-1  ">
              {isToggle ? (
                <AiOutlineClose
                  className="text-3xl text-[#575454] md:hidden"
                  onClick={handleToggle}
                />
              ) : (
                <TiThMenu
                  className="text-4xl ml-2 text-[#575454] md:hidden"
                  onClick={handleToggle}
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <nav className=" p-4 shadow-md">
        <ul
          className={`flex flex-col h-screen w-screen md:h-14 backdrop-sepia bg-white gap-5 ${
            isToggle ? "flex " : "hidden"
          } md:flex md:flex-row md:justify-evenly items-center capitalize font-semibold text-black text-[1.1rem]`}
        >
          <li className="hover:bg-slate-400 md:hover:bg-white w-full text-center p-2">
            all categories
          </li>

          <li className="hover:bg-slate-400 hover:cursor-pointer  md:hover:bg-white w-full text-center p-2">
            phones
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            clothing
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer  md:hover:bg-white w-full text-center p-2">
            computers
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            accessories
          </li>
          <li className="hover:bg-slate-400 hover:cursor-pointer md:hover:bg-white  w-full text-center p-2">
            shoes
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
