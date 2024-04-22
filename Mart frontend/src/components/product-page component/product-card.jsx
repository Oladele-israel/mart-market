import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ imgUrl, price, name, rating, id }) => {
  //function that would render stars based on the rating
  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="text-sm text-orange-500" />);
    }
    return stars;
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-[#F9F5F5] w-[280px] h-[414px] p-4 flex flex-col gap-4 rounded-2xl hover:shadow-md transition hover:-translate-y-1 delay-100">
        <img
          src={imgUrl}
          alt=""
          className=" w-[293.89px] h-[283.2px] p-3 ml-auto mr-auto rounded-md"
        />
        <div>
          <div className="text-neutral-400 text-xl">{name}</div>
          <div className="flex justify-between mt-2 items-center">
            <div className="flex flex-col gap-1">
              <span className="text-lg text-orange-600 font-bold">
                #{price}
              </span>
              <span className="flex flex-row gap-2 items-center">
                <p className="text-lg text-gray-500">{rating}</p>
                {ratingStars()}
              </span>
            </div>
            {/**for the second add to cart div */}

            <div className="">
              <span className="flex flex-col items-center gap-1">
                <FaCartShopping className="text-xl text-gray-500" />
                <p className="text-lg capitalize text-gray-500">add to cart</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
//bg-neutral-800 rounded-2xl w-[100%] h-[70%] ml-auto mr-auto
