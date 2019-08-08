import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import './App.scss'

import Main from './pages/Main'
import Sub from './pages/Sub'

import { Subscribe } from 'unstated'
import { AppContainer } from './providers/containers'

class App extends Component {
    render() {
        return (
            <Subscribe to={[ AppContainer ]}>
            { (app) => (
                <div className='App'>

                    <Switch>
                        <Route exact path='/' component={ Main } />
                        <Route exact path='/sub/:no' component={ Sub } />
                        <Redirect to='/'/>
                    </Switch>

                </div>
            ) }
            </Subscribe>
        )
    }
}

export default withRouter(App)