import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EazymartLogo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center font-bold gap-1 text-2xl">
        <FaCartShopping className="text-orange-600" />
        <p className="text-[#575454] text-2xl">Easy.Mart</p>
      </div>
    </Link>
  );
};

export default EazymartLogo;
