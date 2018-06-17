import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  GET_BOOKS,
  SELECT_BOOK,
  updateBooks,
} from '../actions/books';
import { showSpinner, hideSpinner, showError, orderInProgress } from '../actions/ui';
import { apiRequest } from '../actions/api';
import { createOrder } from '../actions/order';

export const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';

export const getBooksFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_BOOKS) {
    dispatch(apiRequest('GET', URL, null, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR));
    dispatch(showSpinner());
  }
};

export const processBookCollection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === FETCH_BOOKS_SUCCESS) {
    dispatch(updateBooks(action.payload.items));
    dispatch(hideSpinner());
  }
};

export const processErrorFetchBooks = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === FETCH_BOOKS_ERROR) {
    dispatch(hideSpinner());
    dispatch(showError(action.payload));
  }
};

export const selectBooksFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === SELECT_BOOK) {
    dispatch(orderInProgress());
    dispatch(createOrder(action.payload));
  }
};

export const booksMiddleware = [
  getBooksFlow,
  processBookCollection,
  processErrorFetchBooks,
  selectBooksFlow,
];
