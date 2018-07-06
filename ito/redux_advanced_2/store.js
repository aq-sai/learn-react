import { creatStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { creatLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return creatStore(
        rootReducer,
        preloadedState,
        applyMiddlewar(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}