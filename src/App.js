
import Navigation from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./components/Home"
import Like from "./components/Like"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>

      <div className="App">

        <Navigation />

        <div className="pbody">

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Like">
              <Like />
            </Route>

          </Switch>

        </div>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
