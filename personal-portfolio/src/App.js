import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import {Banner} from './Components/Banner'
import {Skills} from "./Components/Skills"
import {Project} from "./Components/Project"

import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
    </div>
  );
}

export default App;
