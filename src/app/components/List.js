import React, { Component } from 'react'
import { Link } from 'react-router'
import * as repos from '../constans/repos'

export default class List extends Component {

    constructor (props) {
        super(props)
    }

    render () {
        let listItems = []

        for (let i in repos) {
            let rep = repos[i].repo
            listItems.push(<li key={rep}><Link to={`/repo/:${rep}`}>{rep}</Link></li>)
        }

        return ( <div id="menu">
            <ul id="repoMenu">
                { listItems }
            </ul>
        </div>)
    }
}
