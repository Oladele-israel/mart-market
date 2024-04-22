import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const SingleProductPage = () => {
  // const { product } = useProductContext();
  const { productId } = useParams();
  console.log("the params => ", productId);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/product/${productId}`
      );
      const productData = response.data.product;
      console.log("this is the single product ", productData);
      setProduct(productData);
    };

    fetchProduct();
  }, []);

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="products">
      {/* this is the product image section*/}
      <div className="  mx-auto p-8 flex flex-col md:flex-row gap-24 w-screen md:w-[80vw]">
        <img src={product.photo} alt="Product" className="w-[30vw] mx-auto " />
        {/* This is the checkout details section */}
        <div className="flex flex-col gap-6 px-2 w-auto text-left">
          <h2 className=" text-3xl font-semibold text-gray-700 text-left text-wrap">
            {product.name}
          </h2>
          <hr />
          <h1 className="text-2xl font-bold text-orange-500">
            {product.price}
          </h1>
          <s className="-mt-2 font-semibold text-gray-500">NGN 6,000.54</s>
          <hr />
          <section className=" flex gap-6">
            <label className="text-gray-500">Quantity</label>
            {/* This is the quantity selection section */}
            <div className="flex gap-0 shadow-xl ">
              <button
                className="w-8 rounded-l-lg text-center py-1 px-1 text-gray-500 bg-gray-100 hover:bg-gray-300"
                onClick={() => {
                  quantity > 1 && setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <p className="w-8  text-center  py-1 px-1 text-gray-500 bg-gray-100">
                {quantity}
              </p>
              <button
                className="w-8 rounded-r-lg text-center py-1 px-1 text-gray-500 bg-gray-100 hover:bg-gray-300"
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
            </div>
          </section>
          <div className=" bg-[rgba(238,204,180,0.77)] w-fit py-1 px-2 md:py-3 md:px-5 rounded-xl">
            <p>Contact us for bulk purchases:</p>
            <p>0111111111</p>
          </div>
          <div className="w-full h-16 rounded-xl hover:cursor-pointer hover:bg-[rgba(300,136,49,0.9)] bg-[rgba(255,136,49,1)] flex items-center text-center">
            <Link className=" w-full m-auto font-semibold text-2xl flex justify-center text-white">
              <svg
                className=""
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 -960 960 960"
                width="32"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
      {/**this is the detail section */}
    </div>
  );
};

export default SingleProductPage;
