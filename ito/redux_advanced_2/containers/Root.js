import React, { Componet } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store'
import asyncApp from './AsyncApp'

const store = configureStore()

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}