import lastBanner from "../../assets/images/miloBanner.png";
import { useProductContext } from "../context/product-context";
import ProductCard from "../product-page component/product-card";

const SpecialProduct = () => {
  const { randomArray, loading } = useProductContext();
  return (
    <div className=" w-[100vw] ml-auto mr-auto flex flex-col justify-items-center bg-slate-50 mb-32 ">
      <div className="flex justify-between gap-x-3  w-[90%] p-8 self-center">
        <div className="text-2xl md:text-4xl font-bold text-black">
          Special Offer | up to 60% off
        </div>
      </div>
      {/*product display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-4 justify-items-center mt-2  w-[90%] self-center ">
        {loading ? (
          <div className="flex items-center justify-center h-full w-screen ml-auto mr-auto ">
            <div className="animate-spin rounded-full h-24 w-24 border-10 border-t-4 border-b-4 border-orange-400"></div>
          </div>
        ) : (
          randomArray
            .slice(10, 14)
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
      {/**last add banner
       */}
      <div className="mb-40 mt-20 w-[90vw] h-10 ml-auto mr-auto">
        <img src={lastBanner} alt="" className="h-[20rem] md:w-[200rem] " />
      </div>
    </div>
  );
};

export default SpecialProduct;
//<div
