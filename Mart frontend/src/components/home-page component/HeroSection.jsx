import HeroBanner from "../../assets/images/HeroBanner.png";

const HeroSection = () => {
  return (
    // <div
    //   className="w-[90vw] h-[40vh] md:h-[90vh] flex ml-auto mr-auto bg-cover md:bg-cover bg-no-repeat mb-14 md:mt-14"
    //   style={{ backgroundImage: `url(${HeroBanner})` }}
    // ></div>
    <div className="w-[90vw] ml-auto mr-auto mt-12 md:mt-20 h-full">
      <img
        src={HeroBanner}
        alt="Your Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroSection;
