import { FaCartShopping } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaCcPaypal } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#171616]">
        {/**footer section1 */}
        <div className="bg-slate-100 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-4 gap-x-5 items-center p-8">
          <div className="flex items-center font-bold gap-1 text-2xl">
            <FaCartShopping className="text-orange-600" />
            <p className="text-[#575454] text-2xl">Easy.Mart</p>
          </div>

          <div className="flex items-center gap-3">
            <MdMarkEmailUnread className="text-3xl text-gray-600" />
            <div className="text-justify">
              <div className="text-lg font-medium uppercase text-stone-700">
                Email support
              </div>
              <div className="text-sm text-stone-700">
                everythingMart@gmail.com
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-medium uppercase text-stone-700">
              GET NOFIVATION ON LATEST DEALS
            </div>
            <div className="text-sm text-stone-700">
              our best promotions to your inbox
            </div>
          </div>

          <div>
            <input type="text" placeholder="Email Address" className="p-2" />
            <button className="bg-orange-500 p-2 w-[120px] text-slate-50 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>

        {/**footer section2 */}
        <div className="grid gap-10 items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 text-slate-100 justify-around">
          {/**about line */}
          <ul className="space-y-3">
            <li className="text-lg"> ABOUT</li>
            <li> About Us</li>
            <li> Our Services</li>
            <li> Terms & Conditions</li>
            <li> Flash sales</li>
          </ul>
          {/**Need help section */}
          <ul className="space-y-3">
            <li className="text-lg"> NEED HELP?</li>
            <li> chat with us</li>
            <li> disputes & report</li>
            <li> Buyer Protection</li>
            <li> integrity Compliance</li>
          </ul>
          {/**follow us*/}
          <ul className="space-y-3">
            <li className="text-lg"> FOLLOW US</li>
            <li>
              <TiSocialFacebook className="text-xl" />
            </li>
            <li>
              <FaXTwitter className="text-xl" />
            </li>
            <li>
              <FaInstagram className="text-xl" />
            </li>
            <li>
              <FaLinkedin className="text-xl" />
            </li>
          </ul>
          {/**download app */}
          <ul className="space-y-3">
            <li className="text-lg"> DOWNLOAD APP</li>
            <div className="flex items-center bg-slate-100 text-slate-950 rounded-xl justify-center gap-3 px-5">
              <FaApple className="text-2xl" />
              <div className="flex flex-col">
                <span>Get on</span>
                <span>App Store</span>
              </div>
            </div>
            {/**play store  <IoLogoGooglePlaystore />*/}
            <div className="flex items-center bg-slate-100 text-slate-950 rounded-xl justify-center gap-3 px-5">
              <IoLogoGooglePlaystore className="text-2xl" />
              <div className="flex flex-col">
                <span>Get on</span>
                <span>PlayStore</span>
              </div>
            </div>
          </ul>
        </div>
        {/**third footer section  */}
        <div className="ml-32 space-y-2 mt-8">
          <div className="text-slate-100">
            PAYMENT METHODS & DELIVERY PATTERNS
          </div>
          {/**payment icons */}
          <div className="flex text-5xl gap-4 text-gray-100">
            <FaCcPaypal />
            <FaCcMastercard />
            <FaCcVisa />
            <FaGooglePay />
          </div>
        </div>
        {/**last section of the landing page the user attribute part*/}
        <div className="text-zinc-400 text-center mt-12 p-7">
          {" "}
          copyright ©2024 EasyMart.com. All rights reserved
        </div>
      </footer>
    </>
  );
};
export default Footer;
