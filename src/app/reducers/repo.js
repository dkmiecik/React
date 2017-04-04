import Immutable from 'immutable'
import * as constants from '../constants/constants'

const initialState = Immutable.Map()

export default function repo (state = initialState, action) {
    if (!action.payload || !action.type)
        return state

    switch (action.type) {
        case constants.SET_REPO_STATE:
            console.info('Store has been updated!')
            let newState = Object.assign(new Immutable.Map, state)
            return newState.set(action.payload.id, { 'status': action.payload.state })
        case constants.CLEAR_STORE:
            console.info('Store has been cleaned!')
            let cleanStore = Object.assign(new Immutable.Map, state)
            return cleanStore.clear()
        default:
            return state
    }
}
