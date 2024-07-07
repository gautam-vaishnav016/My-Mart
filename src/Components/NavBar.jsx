import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../redux/slices/cartSlice";

const NavBar = () => {
  const { cart, totalQuantity } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  return (
    <div className="pt-4 bg-white top-0 sticky shadow-lg">
      <div>
        {/* logo and log icon */}
        <div className="flex  justify-between items-center pb-2 pl-4">
          <Link to="/" className="flex relative left-4 hover:scale-105">
            <img src="shop.png" className="w-7 h-8 absolute bottom-5" />
            <h1 className="text-3xl font-semibold text-blue-600 pl-[40px]">
              My Mart
              <p className="text-xs text-red-400 pl-4 bg-yellow-200 rounded mt-1">
                Your shop🤝
              </p>
            </h1>
          </Link>

          {/* search icon */}
          <div className="lg:flex hidden w-full max-w-[500px]">
            <div className="bg-zinc-100 rounded-l text-white text-[26px] grid place-items-center px-4">
              <i className=" text-zinc-600  ri-search-line"></i>
            </div>
            <input
              className="bg-zinc-100 rounded-r outline-none px-6 py-2 w-full"
              type="text"
              placeholder="Search for Product Brand and More"
            />
          </div>

          {/* user icon */}
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 hidden">
              <Link
                to="/Login"
                className="rounded-full border-2 border-red-300 text-gray-500 text-[20px] w-[40px] h-[40px] grid place-items-center"
              >
                <p className="hover:scale-105 hover:text-green-500">🙍‍♂️</p>
              </Link>
              <div>
                <p className="text-gray-500 text-xs">Hello, Sing in</p>
                <p className="font-medium text-xs">Your Account</p>
              </div>
            </div>
          </div>

          {/* shopping icon */}
          <Link
            to="/Details"
            className="text-gray-500 text-[32px] relative mr-8 hover:text-blue-500 hover:scale-105"
          >
            <i className="ri-shopping-cart-line"></i>
            <div className="absolute top-[-9px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
              {totalQuantity}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
