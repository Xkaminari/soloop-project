import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Boutique from "./Boutique/Boutique";
import FirstProduct from "./Boutique/FirstProduct";
import Home from "./Home/Home";
import About from "./About/About";

export default class App extends Component {
  render() {
    return <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Boutique" element={<Boutique/>}/>
        <Route path="/Boutique/FirstProduct" element={<FirstProduct/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>;
}
}

