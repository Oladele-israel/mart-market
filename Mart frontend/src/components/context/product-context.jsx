//product context...
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [randomArray, setRandom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product/all", {
          withCredentials: true,
        });

        const productData = response.data.products;
        //shuffle the array to display product randomly and not orderly
        const shuffledArray = [...productData];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));

          [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
          ];
        }
        setProduct(productData);
        setRandom(shuffledArray);
      } catch (error) {
        console.log("Error:", error.response?.data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        randomArray,
        setRandom,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
