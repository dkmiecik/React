import '../../assets/stylesheets/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Repo from './containers/RepoContainer'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="repo/:repoId" component={Repo}/>
        </Route>
    </Router>
), document.getElementById('app'))
