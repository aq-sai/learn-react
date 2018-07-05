import { combineReducer } from 'redux'
import todos from './todos'
import vidibilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter
})