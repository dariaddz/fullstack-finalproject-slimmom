import React from "react";
import { Close } from "@mui/icons-material";
import s from "./DiaryProductsListItem.module.css";

function DiaryProductsListItem({ product: { _id, title, weight, kcal } }) {
  const handleClick = () => {};

  return (
    <>
      <li className={s.item}>
        <div className={s.name}>{title}</div>
        <div className={s.weight}>{weight} </div>
        <div className={s.calories}>
          {kcal} <span>ккал</span>
        </div>
        <Close className={s.icon} onClick={handleClick} />
      </li>
    </>
  );
}

export default DiaryProductsListItem;
