import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_ERROR,
  ORDER_IN_PROGRESS,
  ORDER_COMPLETE,
} from '../actions/ui';

const initUi = {
  pending: false,
  orderInProcess: false,
  error: null,
};

export function uiReducer(state = initUi, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, pending: true };
    case HIDE_SPINNER:
      return { ...state, pending: false };
    case SHOW_ERROR:
      return { ...state, error: action.payload };
    case ORDER_IN_PROGRESS:
      return { ...state, orderInProcess: true };
    case ORDER_COMPLETE:
      return { ...state, orderInProcess: false };
    default:
      return state;
  }
}
