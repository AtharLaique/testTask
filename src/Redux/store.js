import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Redducer/index';

const middleware=[thunk];
const initailState={};
const store=createStore(
    RootReducer,
    initailState,
    compose(applyMiddleware(...middleware) ) 
                    );
export default store;