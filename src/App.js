import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import { Route, Link } from "react-router-dom"

import Home from "./components/Home"
import Quran from "./components/Quran"
import Hadith from "./components/Hadith"
import Books from "./components/Books"
import Charities from "./components/Charities"
import Apps from "./components/Apps"
import FivePillars from "./components/FivePillars"
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/quran" component={Quran} />
      <Route exact path="/hadith" component={Hadith} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/fivepillars" component={FivePillars} />
      <Route exact path="/apps" component={Apps} />
      <Route exact path="/Charities" component={Charities} />
      <Route exact path="/About" component={About} />
    </div>
  )
}

export default App
