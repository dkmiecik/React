import React, { Component } from 'react'
import List from './List'

export default class App extends Component {

    static propTypes = {
        children: React.PropTypes.any
    }

    constructor (props, context) {
        super(props, context)
    }

    render () {
        return ( <div className="appContent">
            <List />
            {this.props.children}
            <span className="author">Autor: Damian Kmiecik.</span>
        </div>)
    }
}
