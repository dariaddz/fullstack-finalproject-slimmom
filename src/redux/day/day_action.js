import { createAction } from '@reduxjs/toolkit';

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

export const reset = createAction('products/resetDayInfo');
