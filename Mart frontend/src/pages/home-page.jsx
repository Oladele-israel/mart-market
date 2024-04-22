import HeroSection from "../components/home-page component/HeroSection";
import NewProduct from "../components/home-page component/newproduct";
import PopularProduct from "../components/home-page component/popularProduct";
import ShopCollection from "../components/home-page component/shopfromCollection";
import SpecialProduct from "../components/home-page component/specialOffer";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <PopularProduct />
      <NewProduct />
      <SpecialProduct />
      <ShopCollection />
    </div>
  );
};

export default HomePage;
