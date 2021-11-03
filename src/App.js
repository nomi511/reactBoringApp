
import Navigation from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./components/Home"
import Like from "./components/Like"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import { useState } from "react"


function App() {

  const [arr, array] = useState([])
  

  


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
              <Like arr={arr} />
            </Route>

          </Switch>

        </div>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
