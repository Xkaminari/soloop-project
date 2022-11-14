import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Boutique/Boutique.css'
import LudivineMalleDancing from '../Media/Ludivine-Malle-Dancing.jpg'
import Footer from "../Footer/Footer";
import { Products } from './Products';

export default class Boutique extends Component {
    render() {
        return <>
        <div className="main">
            <span id="circle" className="circle"></span>
            <div className='boutique-header'>
                <div className="gradient"></div>
                <img className='ludivine-boutique-img' src={LudivineMalleDancing} alt="Ludivine Malle performing" />
                <h2 className='boutique-title'>BOUTIQUE</h2>
                <Link className='about-link' to="/Boutique/About">About Us</Link>
                <Link className='about-link' id='DashBoard' to="/Boutique/DashBoard">DashBoard</Link>
                <div className='conect-container'>
                    <Link className='about-link' id='LoginPage' to="/Boutique/LoginPage">Login</Link>
                    <Link className='about-link' id='SignIn' to="/Boutique/SignIn">sign in</Link>
                </div>
            </div>
            <Products/>
            <Footer/>
        </div>
        </>
    }
}
