import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import rootReducer from './ducks/rootReducer';
import thunk from 'redux-thunk';
import * as Immutable from 'immutable';


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      serialize: {
        immutable: Immutable,
      },
    }) :
    compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  )
);

export const configureStore = () => createStore(rootReducer(), enhancer);

export default configureStore();


