import React from "react"
import Formulario from "../componentes/Formulario"
import {BrowserRouter as Router,Switch} from "react-router-dom"
import "./Principal.css"

export default function Principal() {
    return (
        <Router>
            <Switch>
            <img className="title-img" src="https://i.imgur.com/at1b1Yr.png" height="200" width="200"/>
            </Switch>
            <Formulario />
        </Router>

    )
}