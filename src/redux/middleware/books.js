import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  GET_BOOKS,
  SELECT_BOOK,
  booksUpdate,
} from '../actions/books';
import { showSpinner, hideSpinner, uiShowError, uiOrderInProgress } from '../actions/ui';
import { apiRequest } from '../actions/api';
import { orderCreate } from '../actions/order';

export const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';

export const getBooksFlow = ({ dispatch }) => next => action => {
  next(action);

  if (action.type === GET_BOOKS) {
    dispatch(
      apiRequest({
        body: null,
        meta: {
          method: 'GET',
          url: URL,
          onSuccess: FETCH_BOOKS_SUCCESS,
          onError: FETCH_BOOKS_ERROR,
        },
      }),
    );
    dispatch(showSpinner());
  }
};

export const processBookCollection = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === FETCH_BOOKS_SUCCESS) {
    dispatch(booksUpdate(action.payload.items));
    dispatch(hideSpinner());
  }
};

export const processErrorFetchBooks = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === FETCH_BOOKS_ERROR) {
    dispatch(hideSpinner());
    dispatch(uiShowError(action.payload));
  }
};

export const selectBooksFlow = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === SELECT_BOOK) {
    dispatch(uiOrderInProgress());
    dispatch(orderCreate(action.payload));
  }
};

export const booksMiddleware = [
  getBooksFlow,
  processBookCollection,
  processErrorFetchBooks,
  selectBooksFlow,
];
