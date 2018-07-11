import { createActions } from 'redux-actions';
import { getActionName } from './actionUtils';

export const SHOW_SPINNER = getActionName('ui', 'Show spinner');
export const HIDE_SPINNER = getActionName('ui', 'Hide spinner');
export const SHOW_ERROR = getActionName('ui', 'Show error');
export const ORDER_IN_PROGRESS = getActionName('ui', 'Order in progress');
export const ORDER_COMPLETE = getActionName('ui', 'Order complete');

export const {
  showSpinner,
  hideSpinner,
  uiShowError,
  uiOrderInProgress,
  uiOrderComplete,
} = createActions(
  {
    SHOW_SPINNER: () => true,
    HIDE_SPINNER: () => false,
  },
  SHOW_ERROR,
  ORDER_IN_PROGRESS,
  ORDER_COMPLETE,
);
