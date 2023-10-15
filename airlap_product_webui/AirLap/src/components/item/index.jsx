import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { GlobalContext } from "../../providers";
export default function Item({
  ele,
  name,
  rating,
  price,
  saleDiscount,
  image,
  brand,
}) {
  return (
    <div className="rounded-lg max-h-sm h-full max-w-sm dark:bg-gray-800 dark:border-gray-700 box-shadow">
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img className="rounded-t-lg p-4" src={image} alt="product image" style={{height:"50%", width:"50%"}} />
      </div>
      <div className="px-5 pb-4">
        <div>
          <h3 className="text-left text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {name}
          </h3>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-7 h-6 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
