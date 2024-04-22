import nikeShoe from "../../assets/images/nikeShoe.png";
import nikeTagLine from "../../assets/images/nikeTagline.png";

const ProductHero = () => {
  return (
    <div className="  w-[95%] md:w-[100%] bg-[#75FD75] h-[350px] flex flex-col md:flex-row items-center p-10 ">
      <div className=" w-[50%] p-3 flex flex-col gap-[1.5rem]">
        <p className="  text-2xl  sm:ml-2 w-[300px] md:w-[400px] md:text-[45px] text-left font-extrabold capitalize leading-tight">
          mouth-watering deals on men's <br /> shoes
        </p>
        <button className="text-2xl bg-slate-50 w-[15rem] uppercase font-bold p-7 rounded-xl">
          shop now
        </button>
      </div>
      <div className=" md:w-[50%] md:h-full">
        <img
          src={nikeShoe}
          alt="nike trainer shoes"
          className=" hidden lg:block  mt-[-2.3rem] -ml-24 w-[26rem]"
        />
        <img
          src={nikeTagLine}
          alt="the_tagline"
          className="hidden lg:block  w-[12rem] h-[8rem] mt-[-8rem] ml-[12rem]"
        />
      </div>
    </div>
  );
};

export default ProductHero;
