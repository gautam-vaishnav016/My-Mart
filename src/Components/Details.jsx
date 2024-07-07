import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCartTotal,
  increaseItemQuantity,
  removeItem,
} from "../redux/slices/cartSlice";

const Details = () => {
  const { cart, totalQuantity, totalAmount } = useSelector(
    (state) => state.cartReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section className="py-8">
        <div className="mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-full">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <div>
                  <h5>Cart - {cart.length} items</h5>
                  <hr className="border-zinc-300 my-2" />
                </div>
                {cart.map((data) => (
                  <div>
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th className="text-left pb-4 font-semibold">
                            Product
                          </th>
                          <th className=" text-left pl-3 pb-4 font-semibold">
                            Quantity
                          </th>
                          <th className="text-left pb-4 font-semibold">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="flex  gap-4">
                            <div className="flex items-center w-[72%]">
                              <img
                                className="h-20 w-16 mr-4 rounded"
                                src={data.image}
                                alt="Product image"
                              />
                              <div>
                                <p className="font-semibold">{data.title}</p>

                                <button
                                  className="border mx-2 text-sm rounded-md py-1 px-3 shadow-xl bg-blue-500 hover:bg-blue-600"
                                  onClick={() => dispatch(removeItem(data))}
                                >
                                  <i class="ri-delete-bin-7-fill text-white"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 w-[18%]">
                            <div>
                              <button
                                onClick={() =>
                                  dispatch(decreaseItemQuantity(data))
                                }
                                className="border text-sm rounded-md py-1 px-3 mr-2  shadow-xl bg-blue-500 hover:bg-blue-600"
                              >
                                -
                              </button>
                              <span className="text-center w-8">
                                {data.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(increaseItemQuantity(data))
                                }
                                className="border text-sm rounded-md py-1 px-3 ml-2 shadow-xl bg-blue-500 hover:bg-blue-600"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 w-[10%]">${data.price}</td>
                        </tr>
                      </tbody>
                    </table>
                    <hr className="border-zinc-400 my-4" />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-[35%] mb-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg  font-semibold mb-4"> Order Summary</h2>
                <hr className="my-2 border-zinc-400" />
                <div className="flex justify-between mb-2">
                  <span>Total Qauntity</span>
                  <span>{totalQuantity}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total Amount</span>
                  <span className="font-semibold">${totalAmount}</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 shadow-xl text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
