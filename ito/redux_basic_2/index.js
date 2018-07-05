import React from 'react'
import {render} from 'react-dom'
import {provider} from 'react-redux'
import {creatStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = creatStore(todoApp)

render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
