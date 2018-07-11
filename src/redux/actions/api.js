import { createAction } from 'redux-actions';
import { getActionName } from './actionUtils';

export const API_REQUEST = getActionName('app', 'API Request');

export const apiRequest = createAction(API_REQUEST, ({ body }) => body, ({ meta }) => meta);
