import { CREATE_ORDER, SUBMIT_ORDER, orderUpdate } from '../actions/order';
import { uiOrderComplete } from '../actions/ui';

export const bookOrder = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === CREATE_ORDER) {
    dispatch(orderUpdate({ date: new Date(), bookId: action.payload }));
  }
};

export const completeOrder = ({ dispatch }) => next => action => {
  next(action);
  if (action.type === SUBMIT_ORDER) {
    dispatch(orderUpdate({ email: action.payload }));
    dispatch(uiOrderComplete());
  }
};

export const orderMiddleware = [bookOrder, completeOrder];
