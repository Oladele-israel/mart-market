import CollectionCard from "./collectionCard";
import phones from "../../assets/images/phones.png";
import accessories from "../../assets/images/accessoris.png";
import clothing from "../../assets/images/clothing.png";
import computers from "../../assets/images/computers.png";

const ShopCollection = () => {
  return (
    <div className=" flex flex-col mt-5 h-auto mb-12">
      <div className="flex justify-between w-[90%] p-8 self-center items-center">
        <div className="text-2xl md:text-4xl font-bold text-black">
          Shop from our Collection
        </div>
        <button className="bg-orange-500 text-white text-xl p-3 w-[170px] rounded-lg font-extrabold">
          SHOP NOW
        </button>
      </div>
      {/*product display */}
      <div className="bg-orange-50 grid gap-y-3 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center ml-auto mr-auto">
        <CollectionCard imgSrc={phones} colname="phones" />
        <CollectionCard imgSrc={accessories} colname="Accessories" />
        <CollectionCard imgSrc={computers} colname="Computers" />
        <CollectionCard imgSrc={clothing} colname="Clothing" />
      </div>
    </div>
  );
};

export default ShopCollection;
