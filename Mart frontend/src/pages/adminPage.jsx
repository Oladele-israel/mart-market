import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const AdminPage = () => {
  const [productName, setProductName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [rating, setRating] = useState();
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");

  // const userId = useParams()
  //consolelog to check

  //   console.log(productName);
  //   console.log(rating);
  //   console.log(price);
  //   console.log(photo);
  //   console.log(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://eazy-market-server.onrender.com/product/", {
        name: productName,
        rating: rating,
        price: price,
        photo: photo,
        color: productColor,
        category: category,
      })
      .then((res) => {
        console.log("the product added response => ", res);
        setProductName("");
        setRating("");
        setPrice("");
        setPhoto("");
        setCategory("");
        setProductColor("");
      })
      .catch((error) => {
        if (error instanceof axios.AxiosError) {
          console.log("the error => ", error?.response?.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="bg-slate-100 w-[50vw] pb-40 ml-auto self-center mr-auto mt-24 p-4 rounded-md">
        {/*form login section */}
        <form
          action=""
          className="mt-2 flex flex-col w-[100%]"
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col">
            <span className="text-2xl font-bold">Hi Admin </span>
            <span className="text-lg font-semi-bold mt-2 w-96">
              Here you can add your products
            </span>
          </div>
          {/*this is the input field */}
          <div className="flex flex-col  gap-2 mt-7 w-[100%]">
            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Full Product Name Here"
                required
                className="w-[100%] p-2 outline-none "
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Image url here:"
                required
                className="w-[100%] p-2 outline-none "
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <select
                name=""
                id=""
                className="w-[100%] p-2 text-slate-400 capitalize"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={null}>categories</option>
                <option value="computers">computers</option>
                <option value="phones">phones</option>
                <option value="clothing">clothing</option>
                <option value="accessories">accessories</option>
                <option value="shoes">shoes</option>
              </select>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Enter Price"
                required
                className="w-[40%] outline-none border p-4  rounded-lg"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <input
                type="number"
                placeholder=" rating 1-5"
                required
                className="w-[40%] p-4 outline-none border rounded-lg "
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <div className="flex w-full items-center bg-white rounded-md p-2 border">
              <input
                type="text"
                placeholder="Product color here:"
                required
                className="w-[100%] p-2 outline-none "
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div>

            <button
              className={
                isLoading
                  ? "w-[100%] p-3 bg-slate-700 cursor-not-allowed text-white  rounded-md text-xl font-semibold"
                  : " w-[100%] p-3 bg-[#FF8831] text-white  rounded-md text-xl font-semibold"
              }
              type="submit"
            >
              Create product
            </button>
          </div>
          {/*this is the query section */}
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
