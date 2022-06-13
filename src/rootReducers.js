import {combineReducers} from 'redux'

import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
    shop: cartReducer,
});

export default rootReducer;