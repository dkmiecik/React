import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { createStore, renderDevTools } from './utils/devTools'
import routes from './utils/routes'

import repo from './app/reducers/repo'

const reducer = combineReducers(repo)
const store = createStore(reducer)

export default class Root extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    render () {
        const { history } = this.props
        return (
            <div>
                <Provider store={store}>
                    <Router history={history}>{routes}</Router>
                </Provider>
                { renderDevTools() }
            </div>
        )
    }
}
