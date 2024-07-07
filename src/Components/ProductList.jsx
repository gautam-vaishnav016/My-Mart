import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../redux/slices/cartSlice";
import SingleProduct from "./SingleProduct";
import Footer from "./Footer";
import Banner from "./Banner";
import axios from "axios";

const ProductList = () => {
  const getData = () => {
    const item = localStorage.getItem("products");
    if (item) {
      return JSON.parse(item);
    } else {
      return products;
    }
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartReducer.products);

  const GetResult = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      dispatch(loadProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetResult();
  }, []);

  return (
    <div>
      <div>
        <Banner />
        <div className="sm:flex justify-between items-center px-4">
          <h2 className="text-4xl font-medium pl-2">Trending Products</h2>

          <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
            <div className="text-black">New</div>
            <div>Featured</div>
            <div>Top Sellers</div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mt-6 mx-4">
          {products.map((product) => (
            <>
              <SingleProduct key={product.id} product={product} />
            </>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};
{
}

export default ProductList;
