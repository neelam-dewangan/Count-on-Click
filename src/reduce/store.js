import {createStore, combineReducers} from 'redux'
import countReducer from './countReducer'

const rootReducer = combineReducers({
    countReducer
})

const store = createStore(rootReducer)

export default store;