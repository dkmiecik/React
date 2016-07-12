import Immutable from 'immutable'
import * as constants from '../constants/constants'

const initialState = Immutable.Map()

export default function repo (state = initialState, action) {
    switch (action.type) {
        case constants.SET_REPO_STATE:
            console.info('Store has been updated!')
            return state.set('status', action.state)
        case constants.CLEAR_STORE:
            console.info('Store has been cleaned!')
            let cleanStore = state.clear()
            return cleanStore
        default:
            return state
    }
}
