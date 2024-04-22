import HeroBanner from "../../assets/images/HeroBanner.png";

const HeroSection = () => {
  return (
    <div
      className="w-[90vw] h-[40vh] md:h-[90vh] flex ml-auto mr-auto bg-cover md:bg-cover bg-no-repeat mb-14"
      style={{ backgroundImage: `url(${HeroBanner})` }}
    ></div>
  );
};

export default HeroSection;
