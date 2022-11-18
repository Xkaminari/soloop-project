import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import '../Boutique/Boutique.css'
import LudivineMalleDancing from '../Media/Ludivine-Malle-Dancing.jpg'
import Footer from "../Footer/Footer";
import { Products } from './Products';
import NavBar from '../NavBar/NavBar';
import { auth } from '../config/config';

export default class Boutique extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lougoutRedirection: "",
        }
    }
    
    componentDidMount() {
        let User = this.props.user;
        auth.onAuthStateChanged(user => {
            if (!User) {
                this.setState({
                    lougoutRedirection: "/Boutique/LoginPage",
                })
            }
        })
    }
    
    render() {
        return <>
        <div className="main">
            <span id="circle" className="circle"></span>
            <div className='boutique-header'>
                <NavBar user={this.props.user}/>
                <div className="gradient"></div>
                <img className='ludivine-boutique-img' src={LudivineMalleDancing} alt="Ludivine Malle performing" />
                <h2 className='boutique-title'>BOUTIQUE</h2>
            </div>
            <Products/>
            <Footer/>
            {this.state.lougoutRedirection && <Navigate to={this.state.lougoutRedirection}/>}
        </div>
        </>
    }
}
