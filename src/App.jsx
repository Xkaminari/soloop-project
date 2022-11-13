import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Boutique from "./Boutique/Boutique";
import FirstProduct from "./Boutique/FirstProduct";
import Home from "./Home/Home";
import About from "./About/About";
import LoginPage from "./LoginPage/LoginPage";
import {ProductsContextProvider} from './global/ProductsContext'
import SignInPage from "./LoginPage/SignInPage";

export default class App extends Component {
  render() {
    return <>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Boutique" element={<Boutique/>}/>
          <Route path="/Boutique/FirstProduct" element={<FirstProduct/>}/>
          <Route path="/Boutique/DashBoard" element={<DashBoard/>}/>
          <Route path="/Boutique/About" element={<About/>}/>
          <Route path="/Boutique/LoginPage" element={<LoginPage/>}/>
          <Route path="/Boutique/SignIn" element={<SignInPage/>}/>
        </Routes>
      </ProductsContextProvider>
    </>;
}
}

