import { createActions } from 'redux-actions';
import { getActionName } from './actionUtils';

export const CREATE_ORDER = getActionName('order', 'Create');
export const UPDATE_ORDER = getActionName('order', 'Update');
export const SUBMIT_ORDER = getActionName('order', 'Complete');

export const { orderCreate, orderUpdate, orderSubmit } = createActions(
  CREATE_ORDER,
  UPDATE_ORDER,
  SUBMIT_ORDER,
);
