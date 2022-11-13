import React, { Component } from 'react'
import logoSoloop from '../Media/Soloop-Logo.png'
import ProfilPick from '../Media/Profil-pick.jpg'
import '../DashBoard/DashBoard.css'
import UserInfo from './UserInfo'
import NewProduct from './NewProduct'
import EditeProduct from './EditeProduct'

export default class DashBoard extends Component {
    
    diplayUserInfo() {
        let userInfo = document.querySelector('.all-users-info');
        let addNewProduct = document.querySelector('.add-new-product');
        let poductsList = document.querySelector('.poducts-list');
        userInfo.style.display = "flex";
        addNewProduct.style.display = "none";
        poductsList.style.display = "none";
    }
    
    diplayAddNewProduct() {
        let userInfo = document.querySelector('.all-users-info');
        let addNewProduct = document.querySelector('.add-new-product');
        let poductsList = document.querySelector('.poducts-list');
        userInfo.style.display = "none";
        addNewProduct.style.display = "flex";
        poductsList.style.display = "none";
    } 
    
    diplayPoductsList() {
        let userInfo = document.querySelector('.all-users-info');
        let addNewProduct = document.querySelector('.add-new-product');
        let poductsList = document.querySelector('.poducts-list');
        userInfo.style.display = "none";
        addNewProduct.style.display = "none";
        poductsList.style.display = "grid";
    }
    render() {
        return <div className='dashBoard-container'>
            <div className='Side-menue'>
                <img className='DashBoard-Soloop-Logo' src={logoSoloop} alt="Soloop logo" />
                <div className='user-info'>
                    {/* <img src="user-profile-pick" alt={userName + "'s profile pick"} /> */}
                    <img  className="user-profile-pick" src={ProfilPick} alt={"exemple" + "'s profile pick"} />
                    <p className='userName'>Med Yassine Chahboun</p>
                    <p className='user-statut'>CEO</p>
                </div>
                <nav>
                    <ul className='nav-list'>
                        <li onClick={this.diplayUserInfo.bind(this)}><i className="fa-solid fa-users"></i>User's info</li>
                        <li onClick={this.diplayAddNewProduct.bind(this)}><i className="fa-solid fa-plus"></i>New product</li>
                        <li onClick={this.diplayPoductsList.bind(this)}><i className="fa-solid fa-pen-to-square"></i>Edite product</li>
                    </ul>
                </nav>
                <button className='Exite-btn'><i className="fa-solid fa-right-from-bracket"></i>Exite</button>
            </div>
            <div className="DashBoard-containt">
                <UserInfo/>
                <NewProduct/>
                <EditeProduct/>
            </div>
        </div>
    }
}
