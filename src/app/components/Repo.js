import React, { Component } from 'react'
import * as repos from '../constants/repos'

export default class Repo extends Component {

    static propTypes = {
        params: React.PropTypes.object,
        actions: React.PropTypes.object,
        repository: React.PropTypes.object
    }

    constructor (props) {
        super(props)
        this.state = {
            repoStatus: '',
            repoName: '',
            repoId: '',
            repoOwner: ''
        }
    }

    componentWillMount () {
        const { params } = this.props
        this.getRepoStatus(params.repoId.slice(1))

    }

    componentWillUpdate (nextProps) {
        if (nextProps.params.repoId !== this.props.params.repoId)
            this.getRepoStatus(nextProps.params.repoId.slice(1))
    }

    getRepoStatus (repoId) {
        const { actions } = this.props
        this.state.repoId = repoId
        for (let i in repos) {
            if (repos.hasOwnProperty(i)) {
                if (repos[i].repo === repoId) {
                    this.state.repoOwner = repos[i].owner
                    this.state.repoName = repos[i].name
                }
            }
        }
        actions.fetchRepoDetails(this.state.repoOwner, repoId)
    }

    render () {
        const { repository } = this.props
        this.state.repoStatus = repository.get(this.state.repoId) ? repository.get(this.state.repoId).status : ''

        return (<div className="repoContent">
                    <div className="repoName"> { this.state.repoName }</div>
                    <div className={this.state.repoStatus}> { this.state.repoStatus } </div>
                </div>

        )
    }
}
