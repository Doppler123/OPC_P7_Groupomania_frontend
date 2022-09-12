import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"

import Home from "./pages/Home"
import Authentification from "./pages/Authentification"
import Feed from "./pages/Feed"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/authentification">
          <Authentification />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
