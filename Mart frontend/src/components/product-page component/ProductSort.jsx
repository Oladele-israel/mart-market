import stars from "../../assets/images/stars.png";

const ProductSort = ({
  selectValue,
  handleCheckboxChange,
  handleIsChecked,
  handleOptionChange,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <>
      <div className="flex flex-col p-5 gap-2 ">
        {/*browsing categories */}
        <div className="flex flex-col gap-2 ">
          <span className="text-2xl font-bold capitalize text-gray-600">
            Market current category
          </span>
          <span className="capitalize font-semibold text-xl text-slate-600">
            browse other categories
          </span>
        </div>
        {/*browsing oth categories */}
        <form className="flex flex-col gap-2 mt-4" onSubmit={handleIsChecked}>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="computers"
              id="computers"
              className="w-5 h-5 "
              checked={selectValue === "computers"}
              onChange={() => handleCheckboxChange("computers")}
            />
            <label
              htmlFor="computers"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              computers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="phones"
              className="w-5 h-5 "
              checked={selectValue === "phones"}
              onChange={() => handleCheckboxChange("phones")}
            />
            <label
              htmlFor="phones"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              phones
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="clothing"
              className="w-5 h-5 "
              checked={selectValue === "clothing"}
              onChange={() => handleCheckboxChange("clothing")}
            />
            <label
              htmlFor="clothing"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              clothing
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="shoes"
              className="w-5 h-5 "
              checked={selectValue === "shoes"}
              onChange={() => handleCheckboxChange("shoes")}
            />
            <label
              htmlFor="shoes"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              shoes
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="accessories"
              className="w-5 h-5 "
              checked={selectValue === "accessories"}
              onChange={() => handleCheckboxChange("accessories")}
            />
            <label
              htmlFor="accessories"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              Accessories
            </label>
          </div>
          <button
            className="border p-2 text-center capitalize text-xl bg-orange-400 rounded-xl text-white"
            type="submit"
          >
            Clear
          </button>
        </form>
        {/*browsing with prices */}
        <div className="border border-t-gray-300 border-r-0 border-l-0 p-2 mt-4">
          <div className="capitalize font-semibold text-xl text-slate-600 mt-6">
            Prices
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              id="price1"
              className="w-5 h-5"
              value="#1000 - #10,000"
              checked={selectedOption === "#1000 - #10,000"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="price1"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              #1000 - #10,000
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              id="price2"
              className="w-5 h-5"
              value="#20,000 - #30,000"
              checked={selectedOption === "#20,000 - #30,000"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="price2"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              #20,000 - #30,000
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              id="price3"
              className="w-5 h-5"
              value="#30,000 - #40,000"
              checked={selectedOption === "#30,000 - #40,000"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="price3"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              #30,000 - #40,000
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              id="price4"
              className="w-5 h-5"
              value="#40,000 above..."
              checked={selectedOption === "#40,000 above..."}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="price4"
              className="text-lg capitalize text-slate-600 font-semibold"
            >
              #40,000 above...
            </label>
          </div>
        </div>
        {/*browsing with stars */}
        <div className=" border border-t-0 border-r-0 border-l-0 p-2 mt-4">
          <div className="capitalize font-semibold text-xl text-slate-600 mt-6 ">
            Rating
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input type="radio" name="" id="red" className="w-5 h-5 " />
            <img src={stars} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="blue" className="w-5 h-5 " />
            <img src={stars} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="black" className="w-5 h-5 " />
            <img src={stars} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" name="" id="grey" className="w-5 h-5 " />
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSort;
