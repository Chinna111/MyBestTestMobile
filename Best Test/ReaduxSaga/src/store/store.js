// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
//import rootReducer from '../../redux-saga-demo-master/reducers/index';
import rootReducer from '../reducers/index';

// Imports: Redux Root Saga
//import { rootSaga } from '../../redux-saga-demo-master/sagas/index';
import { rootSaga } from '../sagas/index'

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger(),
  ),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store,
}