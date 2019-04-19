import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'

import Home from '../pages/Home'

const Router = () => (
    <BrowserRouter>
        <div id='router'>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Router