import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'

import reducers from './reducers'

const middleware = routerMiddleware(browserHistory);
const store = createStore(
    reducers,
    applyMiddleware(middleware)
);

export default store;