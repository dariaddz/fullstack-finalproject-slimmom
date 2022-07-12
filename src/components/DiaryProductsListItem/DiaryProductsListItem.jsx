import React from 'react';
import s from './DiaryProductsListItem.module.css';
import { Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/day/day_operation';
import { date, dateId } from '../../redux/day/day_selector';

const DiaryProductsListItem = ({ product: { _id, title, weight, kcal } }) => {
  const dispatch = useDispatch();
  const dayId = useSelector(dateId);
  const currentDate = useSelector(date);

  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .split('T')[0];

  const handleClick = async () => {
    if (currentDate === today) {
      dispatch(deleteProduct(dayId, _id));
    }
  };

  const disabledIcon = currentDate === today ? null : s.disabled;

  return (
    <>
      <li className={s.item}>
        <div className={s.name}>{title}</div>
        <div className={s.weight}>{weight}</div>
        <div className={s.calories}>
          {kcal} <span>ккал</span>
        </div>
        <Close className={`${s.icon} ${disabledIcon}`} onClick={handleClick} />
      </li>
    </>
  );
};

export default DiaryProductsListItem;
