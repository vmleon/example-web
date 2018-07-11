import { createActions } from 'redux-actions';
import { getActionName } from './actionUtils';

export const GET_BOOKS = getActionName('books', 'GET');
export const FETCH_BOOKS_SUCCESS = getActionName('books', 'Fetch success');
export const FETCH_BOOKS_ERROR = getActionName('books', 'Fetch error');
export const UPDATE_BOOKS = getActionName('books', 'Update');
export const SELECT_BOOK = getActionName('books', 'Select');

export const { booksGet, booksUpdate, booksSelect } = createActions(
  GET_BOOKS,
  UPDATE_BOOKS,
  SELECT_BOOK,
);
