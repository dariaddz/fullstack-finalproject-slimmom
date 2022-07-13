import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
// import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import debounce from 'lodash.debounce';
import styles from './diaryAddProductForm.module.css';
// import MainButton from '../../common/MainButton'
import Button from '../Button';

import { getProducts, addProduct } from '../../redux/day/day_operation';
// import 'react-toastify/dist/ReactToastify.css'
// import { dateEatenProduct } from '../../redux/day/day_operation'
import { useSelector } from 'react-redux';
// import { dateEatenProducts } from '../../redux/day/day_selector'

const DiaryAddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productCkal, setProductCkal] = useState('');
  const [debouncedProduct, setDebouncedProduct] = useState([]);
  const dispatch = useDispatch();

  const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'error',
        background: 'orange',
        dismissible: true,
      },
    ],
  });

  // const date = useSelector(dateEatenProducts)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(
    debounce(() => {
      productName.length >= 3 &&
        getProducts(productName).then(products => {
          setDebouncedProduct(products);
        });
    }, 500),
    [productName]
  );
  const handleSearchProduct = event => {
    const { value } = event.target;
    setProductName(value);
    if (!debouncedProduct) {
      return null;
    }
    const foundArrayCkal = debouncedProduct?.find(el => el.title === value);
    const foundCkal = foundArrayCkal?.kcal;
    setProductCkal(foundCkal);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeWeight = useCallback(event => {
    const { value } = event.target;
    if (value > 5000) {
      setProductWeight('');
      return notyf.error('Введіть коректну вагу');
    }
    setProductWeight(Number(value));
  });

  const handleSubmit = event => {
    event.preventDefault();
    if (debouncedProduct.length === 0) {
      setProductName('');
      return notyf.error('Виберіть продукт зі списку');
    }
    const searchProduct = debouncedProduct?.find(
      el => el.title === productName
    );

    if (!searchProduct) {
      setProductName('');
      return notyf.error('Виберіть продукт зі списку');
    }
    // dispatch(dateEatenProduct(date))
    dispatch(
      addProduct({
        kcal: Number(productCkal),
        weight: Number(productWeight),
        title: productName,
      })
    );
    // dispatch(dateEatenProduct(date))

    clear();
  };
  const clear = () => {
    setProductName('');
    setProductWeight('');
  };

  const onlyWidth = useWindowWidth();
  return (
    <>
      <form
        className={onlyWidth >= 768 ? styles.form : styles.form_Mobile}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          list="cookies"
          name="product"
          value={productName}
          placeholder="Введіть назву продукту"
          type="text"
          autoComplete="off"
          onChange={handleSearchProduct}
          required
        />

        {debouncedProduct?.length > 0 && (
          <datalist id="cookies">
            {debouncedProduct.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </datalist>
        )}
        <input
          className={styles.input}
          name="weight"
          value={productWeight}
          placeholder="Грами"
          type="number"
          min="0"
          onChange={handleChangeWeight}
          required
        />
        {onlyWidth >= 768 ? (
          <button type="submit" className={styles.btn}></button>
        ) : (
          ''
        )}
        {onlyWidth < 768 ? (
          <Button type="submit" className={styles.btn_Add}>
            Додати
          </Button>
        ) : (
          ''
        )}
      </form>
    </>
  );
};

export default DiaryAddProductForm;
