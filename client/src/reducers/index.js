import { combineReducers } from 'redux'
import addReducer from './addReducer'
import getReducer from './getReducer'

const allReducers = combineReducers({
    add: addReducer,
    post: getReducer
   
})

export default allReducers