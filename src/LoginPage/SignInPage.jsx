import React, { Component } from 'react'
import { auth, db } from '../config/config';
import './SignInPage.css'
import bgImgLoginPage from '../Media/Ludivine-Malle-Dancing.jpg'
import { Navigate} from "react-router-dom";

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            mail:'',
            password:'',
            confirmedPassword:'',
            error:'',
        }
        document.title = "ContactMe"
    }
    
    Signup(e) {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.mail, this.state.password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: this.state.name,
                Email: this.state.mail,
                Password: this.state.password
            }).then(() => {
                this.setState({
                    name:'',
                    mail:'',
                    password:'',
                    confirmedPassword:'',
                });
            }).catch(err => this.setState({error: err.message}));
        }).catch(err => this.setState({error: err.message}));
    }
    
    // ----------------------------------------forme imputs Values----------------------------------------
    
    errorMsg(theMsg, pId) {
        let p = document.querySelector(pId);
        p.style.color = "#FFFFFF";
        p.innerText = theMsg;
        setTimeout(() => {
            p.innerText = "";
        }, 10000)
    }
    
    goodAnswer(pId) {
        let p = document.querySelector(pId);
        p.style.color = "#FFFFFF";
        p.innerText = "";
    }
    
    checkNameValidity() {
        if (this.state.name.length < 2) {
            this.errorMsg("Too short !", ".errorName");
            return false;
        }
        else if (this.state.name.match(/\d/)) {
            this.errorMsg("A name can not contain digits !", ".errorName");
            return false;
        }
        else {
            this.goodAnswer(".errorName");
            return true
        }
    }
    
    checkEmailValidity() {
        if (this.state.mail.endsWith("@gmail.com")) {
            this.goodAnswer(".errorMail");
            return true
        }
        else {
            this.errorMsg("Entre a valid email adresse !", ".errorMail");
            return false;
        }
    }
    
    checkPasswordValidity() {
        if (this.state.password.length < 2) {
            this.errorMsg("A password must contain at least 8 characters !", ".errorPassword");
            return false;
        }
        else if (this.state.password.match(/\d/) === null) {
            this.errorMsg("The passeword should contain at least a nuber !", ".errorPassword");
            return false;
        }
        else if (this.state.password.match(/\W|_/g) === null) {
            this.errorMsg("The passeword should contain at least special character !", ".errorPassword");
            return false;
        }
        else {
            this.goodAnswer(".errorPassword");
            return true
        }
    }
    
    checkConfirmPassword(confirmPasswordInput, passwordInput) {
        if (confirmPasswordInput.value === passwordInput) {
            this.goodAnswer(".errorConfirmPassword");
            return true
        }
        else {
            this.errorMsg("Passwords are not the same!", ".errorConfirmPassword");
            return false;
        }
    }

    checkFormValidity() {
        if (this.checkNameValidity()
            && this.checkEmailValidity()
            && this.checkPasswordValidity()
            && this.checkConfirmPassword(this.state.confirmedPassword ,this.state.password)) {
                this.goodAnswer(".errorConfirmPassword");
            }
        else {
            this.errorMsg("a field was not properly filled in !", ".errorForm");
        }
    }
    
    handleChage(e) {
        let nameInput = e.target.id
        this.setState({
            [nameInput] : e.target.value
        })
        if (e.target.type === "text") {
            this.checkNameValidity(e.target);
        }
        else if (e.target.type === "email"){
            this.checkEmailValidity(e.target);
        }
        else if (e.target.id === "password"){
            this.checkPasswordValidity(e.target);
        }
        else if (e.target.id === "confirmedPassword"){
            this.checkConfirmPassword(e.target, this.state.password);
        }
    }
    
    // --------------------------------------------------------------------------------------------------
    
    render() {
        return <div className='login-page-container'>
            <img className='bgImgLoginPage' src={bgImgLoginPage} alt="Ludivine Malle performing rollers" />
            <form className='singIn-form' autoComplete='off' onSubmit={this.Signup.bind(this)}>
                <div className="login-fild">
                    <label htmlFor="first_name">Full Name: *</label>
                    <input value={this.state.name} onChange={this.handleChage.bind(this)} type="text" id="name"/>
                    <p className='errorName'></p>
                </div>
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
                <div className="login-fild">
                    <label htmlFor="confirmedPassword">Confirm Password: *</label>
                    <input value={this.state.confirmedPassword} onChange={this.handleChage.bind(this)}  type="password" id="confirmedPassword"/>
                    <p className='errorConfirmPassword'></p>
                </div>
                <button onClick={this.checkFormValidity.bind(this)} className="register_buttom" type="submit">Register</button>
                <p className='errorForm'>{this.state.error && <span>{this.state.error}</span>}</p>
            </form>
        </div>
    }
}