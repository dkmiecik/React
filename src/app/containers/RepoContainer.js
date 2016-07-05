import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Repo from '../components/Repo'
import * as repository from '../actions/repo'

@connect(state => ({
    repository: state.repo
}))

export default class RepoContainer extends Component {

    static propTypes = {
        children: PropTypes.any,
        dispatch: PropTypes.func.isRequired
    }

    render () {
        const { dispatch } = this.props
        const actions = bindActionCreators(repository, dispatch)

        return (
            <div>
                <Repo actions={actions} {...this.props} />
            </div>
        )
    }
}
