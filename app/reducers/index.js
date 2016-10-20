import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import comics from './Comics'

export default combineReducers({
    routing: routerReducer,
    comics
});