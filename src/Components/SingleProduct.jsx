import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(product));
    toast.success("Added to Cart");
  };

  return (
    <div className="card bg-white mb-5 p-2 rounded border shadow-lg  h-[50vh] ml- flex flex-col">
      <div
        className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-2 hover:scale-105"
        style={{
          backgroundImage: `url(${product.image})`,
        }}
      ></div>

      <div>
        <p className="hover:text-blue-300 text-[16px]">{product.title}</p>
        <div className="mt-3 flex  items-center]">
          <i className="text-[#ffb21d] ri-star-fill"></i>
          <i className="text-[#ffb21d] ri-star-fill"></i>
          <i className="text-[#ffb21d] ri-star-fill"></i>
          <i className="text-[#ffb21d] ri-star-line"></i>
          <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-medium text-blue-600 text-xl">
            ${product.price}
          </h2>
          <div
            className="flex gap-2 items-center bg-pink-600 text-sm text-white px-[6px] py-2 cursor-pointer
               hover:bg-blue-600"
            onClick={add}
          >
            <i className="ri-shopping-cart-line"></i> Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
