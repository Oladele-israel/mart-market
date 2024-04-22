import { useProductContext } from "../context/product-context";
import ProductCard from "../product-page component/product-card";

import { Link } from "react-router-dom";

const NewProduct = () => {
  //destructuring and getting the products  from the product context
  const { randomArray, loading } = useProductContext();

  return (
    <div className=" w-[100vw] h-auto ml-auto mr-auto flex flex-col justify-items-center bg-orange-500  mb-10">
      <div className="flex justify-between w-[90%] p-8 self-center items-center">
        <div className="text-xl md:text-3xl font-bold text-slate-50">
          New Product
        </div>
        <Link
          to={"products"}
          className="bg-white text-orange-500 p-3 text-lg md:p-4 w-24 md:w-[170px] rounded-lg text-center"
        >
          View all
        </Link>
      </div>
      {/*product display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center mt-2  w-[90%] self-center mb-10 ">
        {loading ? (
          <div className="flex items-center justify-center h-full w-screen ml-auto mr-auto ">
            <div className="animate-spin rounded-full h-24 w-24 border-10 border-t-4 border-b-4 border-white"></div>
          </div>
        ) : (
          randomArray
            .slice(5, 9)
            .map((newItem) => (
              <ProductCard
                imgUrl={newItem.photo}
                name={newItem.name}
                rating={newItem.rating}
                key={newItem._id}
                price={newItem.price}
                id={newItem._id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default NewProduct;
