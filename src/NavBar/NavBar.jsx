import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { auth } from '../config/config'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lougoutRedirection: "",
            displayDashboard: false,
        }
    }
    
    componentDidMount() {
        let User = this.props.user;
        auth.onAuthStateChanged(user => {
            if (User === "Med yassine chahboun") {
                this.setState({
                    displayDashboard: true,
                })
            }
            else {
                this.setState({
                    displayDashboard: false,
                })
            }
        })
    }
    
    logout() {
        auth.signOut().then(() => {
            this.setState({
                lougoutRedirection: "/Boutique/LoginPage",
            })
        })
    }
    
    render() {
        return (
            <div className='nav-bar'>
                <Link className='nav-link about-link' to="/Boutique/About">About Us</Link>
                <Link className='nav-link' id='DashBoard' style={{display: this.state.displayDashboard ? 'block' : 'none'}} to="/Boutique/DashBoard">DashBoard</Link>
                {/* no user connected */}
                {!this.props.user && <div className='conect-container'>
                    <Link className='nav-link' id='LoginPage' to="/Boutique/LoginPage">Login</Link>
                    <Link className='nav-link' id='SignIn' to="/Boutique/SignIn">sign in</Link>
                </div>}
                {/* user connected */}
                {this.props.user && <div className='nav-user-info-container'>
                    <span><Link to="/" className='nav-link'>{this.props.user}</Link></span>
                    <span><Link id='cart' to="/Boutique/cartproducts"><i class="fa-solid fa-cart-shopping"></i></Link></span>
                    <span><button className='lougout-btn' onClick={this.logout.bind(this)}>Logout</button></span>
                </div>}
                {this.state.lougoutRedirection && <Navigate to={this.state.lougoutRedirection}/>}
            </div>
        )
    }
}
