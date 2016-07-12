import React from 'react'
import { Route } from 'react-router'

import * as containers from '../app/containers'
import * as components from '../app/components'

const { App, Info } = components
const { RepoContainer } = containers
export default (
    <Route component={App}>
        <Route path="/" component={Info}/>
        <Route path="/repo/:repoId" component={RepoContainer}/>
    </Route>
)
