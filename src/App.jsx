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
import { auth, db } from "./config/config";
import {CartContextProvider} from "./global/CartContext";
import Cart from "./Boutique/Cart";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }
  
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else {
        this.setState({
          user: null,
        })
      }
    })
  }
  
  render() {
    return <>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Boutique" element={<Boutique user={this.state.user}/>}/>
            <Route path="/Boutique/FirstProduct" element={<FirstProduct/>}/>
            <Route path="/Boutique/DashBoard" element={<DashBoard user={this.state.user}/>}/>
            <Route path="/Boutique/About" element={<About/>}/>
            <Route path="/Boutique/LoginPage" element={<LoginPage/>}/>
            <Route path="/Boutique/SignIn" element={<SignInPage/>}/>
            <Route path="/Boutique/Cartproducts" element={<Cart user={this.state.user}/>}/>
          </Routes>
          </CartContextProvider>
      </ProductsContextProvider>
    </>;
  }
}

