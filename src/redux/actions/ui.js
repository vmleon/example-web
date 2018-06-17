export const SHOW_SPINNER = '[ui] Show spinner';
export const HIDE_SPINNER = '[ui] Hide spinner';
export const SHOW_ERROR = '[ui] Show error';
export const ORDER_IN_PROGRESS = '[ui] Order in progress';
export const ORDER_COMPLETE = '[ui] Order complete';

export const showSpinner = () => ({ type: SHOW_SPINNER });
export const hideSpinner = () => ({ type: HIDE_SPINNER });
export const showError = error => ({ type: SHOW_ERROR, payload: error });
export const orderInProgress = () => ({ type: ORDER_IN_PROGRESS });
export const orderComplete = () => ({ type: ORDER_COMPLETE });
