import React, { Component, PropTypes } from 'react'
import List from './List'

export default class App extends Component {

    static propTypes = {
        children: PropTypes.any
    }

    constructor (props, context) {
        super(props, context)
    }

    render () {
        return ( <div>
            <List />
            {this.props.children}
            </div>)
    }
}
