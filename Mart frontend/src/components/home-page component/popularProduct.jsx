import { useProductContext } from "../context/product-context";
import ProductCard from "../product-page component/product-card";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  //destructuring and getting the products  from the product context
  const { randomArray, loading } = useProductContext();
  return (
    <div className=" w-[90vw] ml-auto mr-auto flex flex-col justify-items-center mb-10 -mt-[3rem] ">
      <div className="flex justify-between items-center w-[100%] p-8">
        <div className="text-xl md:text-4xl font-bold">Popular Product</div>
        <Link
          to={"products"}
          className="bg-orange-500 text-white text-base p-3 hover:bg-orange-600 md:w-[170px] w-24 rounded-lg text-center"
        >
          View all
        </Link>
      </div>
      {/*product display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center mt-4 ">
        {loading ? (
          <div className="flex items-center justify-center h-full w-screen ml-auto mr-auto ">
            <div className="animate-spin rounded-full h-24 w-24 border-10 border-t-4 border-b-4 border-orange-400"></div>
          </div>
        ) : (
          randomArray
            .slice(0, 4)
            .map((item) => (
              <ProductCard
                imgUrl={item.photo}
                name={item.name}
                rating={item.rating}
                key={item._id}
                price={item.price}
                id={item._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default PopularProduct;
