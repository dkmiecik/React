import React, { Component } from 'react'
import { Link } from 'react-router'
import * as repos from '../constants/repos'

export default class List extends Component {

    constructor (props) {
        super(props)
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick (e) {
        let a = document.getElementsByTagName('a')

        for (let i in a)
            if (a[i].className === 'active')
                a[i].className = ''
        e.target.className = 'active'
    }

    render () {
        let listItems = []

        for (let i in repos) {
            let rep = repos[i].repo
            listItems.push(<li key={rep}><Link onClick={this._handleClick}
                                               to={`/repo/:${rep}`}>{repos[i].name.toString().toUpperCase()}</Link>
            </li>)
        }

        return (<div className="menu">
            <ul className="repoMenu">
                <li className="info" key="info"><Link className="active" onClick={this._handleClick}
                                                      to="/">INFO</Link></li>
                { listItems }
            </ul>
        </div>)
    }
}
