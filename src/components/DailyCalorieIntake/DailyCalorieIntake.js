import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import OrangeButton from '../../theme';
import s from './DailyCalorieIntake.module.css'

const DailyCalorieIntake = () => {
  const userData = useSelector(state => {
    return state.userData.user;
  });

  console.log('userData :', userData);

  return (
    <>
    <p className={s.title}>Ваша рекомендована добова норма калорій становить</p>
  
      {userData && <div className={s.dataResult}>{userData.kcal} <span className={s.dataResultText}>калорій</span></div>}
      
      <hr/>
<div className={s.products}>
      <p className={s.description}>Продукти, які вам не варто вживати</p>
      
      <ol type="disc" className={s.productList}>{userData.productsNotRecommended.map(product=> (
        <li key={uuidv4()} >{product}</li>))}</ol>
        </div>

        <div className={s.button}>
      <OrangeButton>Почати худнути</OrangeButton>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
