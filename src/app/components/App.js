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
        console.log('aaaaaaaaaaaaaaaaa')
        console.log(this.props)
        return ( <div>
            <List />
            {this.props.children}
        </div>)
    }
}
