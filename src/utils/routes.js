import React from 'react'
import { Route } from 'react-router'

//import RepoContainer from '../app/containers/RepoContainer'
import App from '../app/components/App'
import Repo from '../app/components/Repo'
import Info from '../app/components/Info'

export default (
    <Route component={App}>
        <Route path="/" component={Info}/>
        <Route path="/repo/:repoId" component={Repo}/>
    </Route>
)
