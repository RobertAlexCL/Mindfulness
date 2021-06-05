import React from 'react'
import { Route, Switch } from 'react-router'
import Free from '../pages/Free'
import Home from '../pages/HomePage'
import Tasks from '../pages/Tasks'
import Topics from '../pages/Topics'

const Router = () => {

    return (<Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/tareas">
            <Tasks />
        </Route>
        <Route exact path="/temas-carrera">
            <Topics />
        </Route>
        <Route exact path="/temas-interes">
            <Free />
        </Route>
    </Switch>)
}

export default Router