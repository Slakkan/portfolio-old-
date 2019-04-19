import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Home from '../pages/Home'

const Router = () => (
    <BrowserRouter>
        <div id='router'>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
)

export default Router