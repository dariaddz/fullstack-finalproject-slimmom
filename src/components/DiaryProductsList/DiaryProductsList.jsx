import React from 'react';
import { useSelector } from 'react-redux';
import DiaryProductsListItem from '../DiaryProductsListItem';
import s from './DiaryProductsList.module.css';
import { eatenProducts } from '../../redux/day/day_selector';

function DiaryProductsList() {
  const products = useSelector(eatenProducts);
  return (
    <div className={s.wrapper}>
      <ul className={s.container}>
        {products.length > 0 &&
          products.map(product => (
            <DiaryProductsListItem key={product._id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default DiaryProductsList;
