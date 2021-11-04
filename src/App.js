
import Navigation from "./components/Navbar"

import Home from "./components/Home"
import Like from "./components/Like"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import { useState, useEffect } from "react"


function App() {

  const [arr, array] = useState()

  useEffect ( ()=> {

    let ldata = JSON.parse(localStorage.getItem("Tasks"))

    array(ldata)

  }, [] )


  return (
    <Router>

      <div className="App">

        <Navigation />

        <div className="pbody">

          <Switch>

            <Route exact path="/">
              <Home arr={arr} array = { array } />
            </Route>

            <Route path="/Like">
              <Like arr={arr} array={array} />
            </Route>

          </Switch>

        </div>

        

      </div>

    </Router>
  );
}

export default App;
