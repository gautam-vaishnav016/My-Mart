import React from "react";

const Banner = () => {
  return (
    <div className="bg-zinc-100">
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] px-8">
            <p className="text-zinc-900">
              Starting At <span className="font-bold">$999.00</span>
            </p>
            <h2 className="text-zinc-900 font-bold text-2xl md:text-4xl">
              The best notebook collection 2024
            </h2>

            <h3 className="text-xl font-serif">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>

            <a
              className="inline-block bg-zinc-300 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
              href="#"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div>
          <img className="w-80 h-auto ml-28" src="/hero.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
