import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Comics from './containers/comics/'

export default (
    <Route path="/" title="ICDb">
        <IndexRoute component={Comics} title="Comics"/>
    </Route>
);