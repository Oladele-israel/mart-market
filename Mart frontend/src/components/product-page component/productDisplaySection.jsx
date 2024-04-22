import { useState } from "react";
import ProductCard from "./product-card";
import { useProductContext } from "../context/product-context";

const ProductDisplaySection = ({ selectValue, selectedOption }) => {
  const { product, loading } = useProductContext();
  const [sort, setSort] = useState("");
  const handleSort = () => {};

  return (
    <div className="flex flex-col gap-6 h-auto mt-40">
      <div className="flex justify-between items-center p-3 ">
        <p className="text-4xl font-bold text-center">
          {selectValue === null ? "All Product" : selectValue}
        </p>
        <button className="rounded-2 flex flex-row gap-10 items-center justify-center border-2 p-2 border-slate-300 rounded-lg w-[274px] h-[51px] text-lg">
          <span> sort by:</span>
          <span>
            <select name="" id="" value={sort} onChange={(e) => e.target.value}>
              <option value="relevance">relevance</option>
              <option value="alphabetical">A-Z</option>
            </select>
          </span>
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-24 w-24 border-3 border-t-4 border-b-4 border-orange-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-14 gap-y-6">
          {selectValue === null || selectedOption === null
            ? product
                .slice(0, 4)
                .map((productItem) => (
                  <ProductCard
                    imgUrl={productItem.photo}
                    name={productItem.name}
                    rating={productItem.rating}
                    key={productItem.id}
                    price={productItem.price}
                    id={productItem._id}
                  />
                ))
            : product
                .filter((productItem) => productItem.category === selectValue)
                .slice(0, 4)
                .map((productItem) => (
                  <ProductCard
                    imgUrl={productItem.photo}
                    name={productItem.name}
                    rating={productItem.rating}
                    key={productItem.id}
                    price={productItem.price}
                    id={productItem._id}
                  />
                ))}
        </div>
      )}
    </div>
  );
};

export default ProductDisplaySection;
