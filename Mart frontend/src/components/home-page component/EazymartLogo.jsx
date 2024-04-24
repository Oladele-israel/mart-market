import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EazymartLogo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center font-bold gap-1">
        <FaCartShopping className="text-orange-400 text-4xl md:text-4xl" />
        <p className="text-[#575454] text-lg  md:text-3xl">Easy.Mart</p>
      </div>
    </Link>
  );
};

export default EazymartLogo;
