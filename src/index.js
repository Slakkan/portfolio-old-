import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import Router from './router/Router'
import configureStore from './store/configureStore'
import database from './firebase/firebase'

const store = configureStore()

const Index = (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(Index, document.getElementById('app'))


import { load } from './actions/form'

database.ref('projects')
    .on('value', (snapshot) => {
        const projects = []

        snapshot.forEach((childSnapshot) => {
            projects.push({
                title: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        store.dispatch(load(projects))
    })
