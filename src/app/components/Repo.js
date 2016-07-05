import React, { Component } from 'react'

export default class Repo extends Component {

    static propTypes = {
        params: React.PropTypes.object
    }

    constructor (props) {
        super(props)
        console.log(props)
        this.state = {
            repoId: props.params.repoId
        }
    }

    render () {
        return (
            <h1> { this.state.repoId } </h1>
        )
    }
}
