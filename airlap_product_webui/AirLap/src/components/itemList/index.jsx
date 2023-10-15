import React from "react";
import { Link } from "react-router-dom";
import Item from '../item';

export default function ItemList({ filterProduct }) {
  return (
    <div className="w-full h-full flex flex-wrap justify-around p-4 md:gap-4">
      {filterProduct.map((ele) => (
        <Link to={`/item/${ele.id}`} key={ele.id}>
          <Item
            ele = {ele}
            name={ele.name}
            rating={ele.rating}
            price={ele.price}
            saleDiscount={ele.saleDiscount}
            image={ele.image}
            brand={ele.brand}
          />
         </Link>
      ))}
    </div>
  );
}
