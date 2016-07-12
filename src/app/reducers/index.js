import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import repo from './repo'

const rootReducer = combineReducers({
    repo,
    routing
})

export default rootReducer
