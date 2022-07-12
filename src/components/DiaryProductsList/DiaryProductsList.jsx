import React from 'react';
import { Close } from '@mui/icons-material';
import s from './diaryProductsListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { date, dateId } from '../../redux/day/day_selector';
import { deleteProduct } from '../../redux/day/day_operation';

function DiaryProductsListItem({
  product: { _id = 1234567, title, weight, kcal },
}) {
  const dispatch = useDispatch();
  const dayId = useSelector(dateId);
  const currentDate = useSelector(date); // Текущий день из базы

  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .split('T')[0]; // Текущий день локально с учётом временных зон
  const handleClick = async () => {
    if (currentDate === today) {
      dispatch(deleteProduct(dayId, _id));
    }
  };

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
