import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/root'
import rootReducer from './reducers';

render(
    <Root />,
    document.getElementById('root')
)