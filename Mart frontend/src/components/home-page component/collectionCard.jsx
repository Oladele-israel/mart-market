import bg from "../../assets/images/bg-concept.png";

const CollectionCard = ({ imgSrc, colname }) => {
  return (
    <div
      className="w-[20rem] h-[24rem] overflow-hidden bg-contain bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img
        src={imgSrc}
        alt="accessories"
        className="object-contain w-[90%] mt-16"
      />
      <div className="bg-white text-center text-lg capitalize text-neutral-500 w-[95.5%]">
        {colname}
      </div>
    </div>
  );
};

export default CollectionCard;
