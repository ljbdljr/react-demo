import React from "react"
import "./App.css"

import { Router, Switch, Route } from "react-router-dom"
import { MainLayout } from "./pages/common"
import { createBrowserHistory } from "history"

const App = () => {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/" component={MainLayout} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
