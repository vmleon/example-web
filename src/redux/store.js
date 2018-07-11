import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { reducers } from './reducers';
import { booksMiddleware } from './middleware/books';
import { orderMiddleware } from './middleware/order';
import { api } from './middleware/api';
import routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const { reducer, middleware, enhancer } = routerForBrowser({
  routes,
});

export const store = createStore(
  combineReducers({ router: reducer, app: reducers }),
  composeEnhancers(
    enhancer,
    applyMiddleware(middleware, ...booksMiddleware, ...orderMiddleware, api),
  ),
);
