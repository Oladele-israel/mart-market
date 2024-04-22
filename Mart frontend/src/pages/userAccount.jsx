import { useState, useEffect } from "react";
import pnegg from "../assets/images/clothing.png";
import axios from "axios";
const listArray = [
  {
    text: "Profile",
    path: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z",
  },
  {
    text: "Notifications",
    path: "M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z",
  },
  {
    text: "Account Settings",
    path: "M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z",
  },
];
const UserAccount = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/validateToken",
          {
            withCredentials: true,
          }
        );


        console.log("the response from valid => ", response);
        if (response?.data?.valid) {
          setMessage(response.data.message);
          setUserDetails(response.data.details);
        }
        if (!response.data) {
          setMessage("validation of token did not work");
        }
      } catch (error) {
        console.log(error);
      }
    };
    allProducts();
  }, []);

  return (
    <div id="user" className="flex">
      <div className=" left-0 w-screen md:w-[25vw] bg-[rgba(249,249,249,1)] flex flex-col ">
        <ul className="w-full py-2 flex flex-col gap-4">
          {listArray.map((list, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`w-3/4 mx-auto hover:cursor-pointer flex gap-2 hover:bg-[rgba(255,218,191,0.52)]  text-center items-center justify-center font-medium text-lg p-2 bg-[rgba(255,255,255,1)] rounded-lg ${
                index === active ? "text-[rgba(255,136,49,1)]" : "text-black"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill={active === index ? "rgba(255,136,49,1)" : "black"}
              >
                <path d={list.path} />
              </svg>
              {list.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[15vw] text-center">
        <img
          src={pnegg}
          alt="image"
          className=" mx-auto w-36 h-36 rounded-full"
        />
        <p className=" text-lg font-bold">James Mccauly</p>
        <p className=" text-md font-semibold">Abuja, Nigeria</p>
      </div>
      <div className=" w-auto">
        <form
          method="post"
          className="flex w-full gap-8 flex-wrap justify-evenly"
        >
          <div className=" flex flex-col gap-1">
            <label htmlFor="name" className="text-md text-md text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className=" outline-none border text-black text-lg font-semibold border-black w-[22vw] py-2 rounded-lg pl-2 "
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label htmlFor="number" className="text-md text-md text-gray-300">
              Full Name
            </label>
            <input
              id="number"
              type="number"
              placeholder="000-121-111"
              className=" outline-none border text-black text-lg font-semibold border-black w-[22vw] py-2 rounded-lg pl-2 "
            />
          </div>
          <div>
            <label htmlFor="adress">Address</label>
            <input
              type="text"
              id="address"
              placeholder="plot 9. sumton"
              className=" w border border-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default UserAccount;
