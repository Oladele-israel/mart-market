import { useState } from "react";
import ProductHero from "./product-hero";
import ProductDisplaySection from "./productDisplaySection";
import ProductSort from "./ProductSort";

const ProductLayout = () => {
  //for selectValue for the categories
  const [selectValue, setSelectValue] = useState(null);
  // console.log(selectValue);
  const handleCheckboxChange = (value) => {
    setSelectValue(value);
  };
  //for the price select
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  const handleIsChecked = (e) => {
    e.preventDefault();
    console.log(selectValue);
    setSelectValue(null);
    setSelectedOption("");
  };

  //for the select value for price

  return (
    <div className="h-100vh w-[100%] flex flex-row gap-9">
      <div className=" w-[22vw] h-[600px] ">
        <ProductSort
          selectValue={selectValue}
          handleCheckboxChange={handleCheckboxChange}
          handleIsChecked={handleIsChecked}
          handleOptionChange={handleOptionChange}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div className="flex flex-col w-[70vw] gap-10">
        <ProductHero />
        <ProductDisplaySection selectValue={selectValue} />
      </div>
    </div>
  );
};

export default ProductLayout;
