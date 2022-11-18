import React, { Component } from 'react'
import { auth } from '../config/config';
import './SignInPage.css'
import bgImgLoginPage from '../Media/Ludivine-Malle-Dancing.jpg'
import { Link, Navigate } from 'react-router-dom';

export default class SignInPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            mail:'',
            password:'',
            error:'',
            redirectionPath:'',
        }
        document.title = "ContactMe"
    }
    
    login(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.mail, this.state.password).then(() => {
            this.setState({
                mail:'',
                password:'',
                redirectionPath:'/Boutique',
            });
        }).catch(err => this.setState({error: err.message}));
    }
    
    handleChage(e) {
        let nameInput = e.target.id
        this.setState({
            [nameInput] : e.target.value
        })
    }
    
    render() {
        return  <div className='login-page-container'>
        <div className="login-page-imgbg-container">
            <img className='bgImgLoginPage' src={bgImgLoginPage} alt="Ludivine Malle performing rollers" />
            <div className="gradient-div1 sign-in-gradient"></div>
        </div>
        <form className='singIn-form login-form' autoComplete='off' onSubmit={this.login.bind(this)}>
            <div class="login-fild">
                <label htmlFor="email">Email: *</label>
                <input value={this.state.mail} onChange={this.handleChage.bind(this)} type="email" id="mail" placeholder="exemple@gmail.com"/>
                <p className='errorMail'></p>
            </div>
            <div className="login-fild">
                <label htmlFor="password">Password: *</label>
                <input value={this.state.password} onChange={this.handleChage.bind(this)}  type="password" id="password" placeholder="exemple: Uj4D/8hjz$"/>
                <p className='errorPassword'></p>
            </div>
            <button className="register_buttom" type="submit">Login</button>
            <Link className="login-btn-to-signIn" to="/Boutique/SignIn">don't have an account ?  create one !</Link>
            <p>{this.state.error && <span className='connection-error'>Email or password incorect</span>}</p>
        </form>
        {this.state.redirectionPath && <Navigate to={this.state.redirectionPath}/>}
    </div>
    }
}