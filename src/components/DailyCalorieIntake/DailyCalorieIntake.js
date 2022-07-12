import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import OrangeButton from '../../theme';
import s from './dailyCalorieIntake.module.css';

const DailyCalorieIntake = () => {
  const userData = useSelector(state => {
    return state.userData.user;
  });

  const getMeRandomProducts = (sourceArray, neededElements) => {
    let result = [];
    for (var i = 0; i < neededElements; i += 1) {
      result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
    }
    return result;
  };

  return (
    <>
      <p className={s.title}>
        Ваша рекомендована добова норма калорій становить
      </p>

      {userData && (
        <div className={s.dataResult}>
          {userData.kcal} <span className={s.dataResultText}>калорій</span>
        </div>
      )}

      <hr />
      <div className={s.products}>
        <p className={s.description}>Продукти, які вам не варто вживати</p>

        <ol className={s.productList}>
          {getMeRandomProducts(userData.productsNotRecommended, 7).map(
            product => (
              <li key={uuidv4()} className={s.productItem}>
                {product}
              </li>
            )
          )}
        </ol>
      </div>

      <div className={s.button}>
        <Link to={`/register`}>
          <OrangeButton>Почати худнути</OrangeButton>
        </Link>
      </div>
    </>
  );
};

export default DailyCalorieIntake;
