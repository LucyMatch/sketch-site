import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

//console log updates to redux store - for debugging purposes... 
//logger middle wear is better.. 
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

export default store;