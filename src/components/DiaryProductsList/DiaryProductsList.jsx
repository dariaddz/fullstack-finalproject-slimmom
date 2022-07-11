import React from "react";
import DiaryProductsListItem from "../DiaryProductsListItem";
import s from "./DiaryProductsList.module.css";

function DiaryProductsList({ products }) {
  return (
    <div className={s.wrapper}>
      <ul ul className={s.container}>
        {products.length > 0 &&
          products.map((product) => (
            <DiaryProductsListItem key={product._id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default DiaryProductsList;
