import '../../assets/stylesheets/index.css'
import React from 'react'
import { browserHistory } from 'react-router'
import Root from '../Root'

React.render(<Root history={browserHistory} />, document.getElementById('app'))
