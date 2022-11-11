import React, { Component } from 'react'
import logoSoloop from '../Media/Soloop-Logo.png'
import XD2000 from '../Media/XD2000.jpg'
import ProfilPick from '../Media/Profil-pick.jpg'
import '../DashBoard/DashBoard.css'

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
    
    // Hover effect text for the creat product part
    displayText() {
        let hoverText = document.querySelector('.hover-text');
        setTimeout(() => {
            hoverText.style.visibility = "visible";
        }, 50)
        setTimeout(() => {
            hoverText.style.visibility = "hidden";
        }, 5000)
    }
    hideText() {
        let hoverText = document.querySelector('.hover-text');
        hoverText.style.visibility = "hidden";
    }
        // ----------------------------------------
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
                        <li onClick={this.diplayUserInfo.bind(this)}><i class="fa-solid fa-users"></i>User's info</li>
                        <li onClick={this.diplayAddNewProduct.bind(this)}><i class="fa-solid fa-plus"></i>New product</li>
                        <li onClick={this.diplayPoductsList.bind(this)}><i class="fa-solid fa-pen-to-square"></i>Edite product</li>
                    </ul>
                </nav>
                <button className='Exite-btn'><i className="fa-solid fa-right-from-bracket"></i>Exite</button>
            </div>
            <div className="DashBoard-containt">
                <div className="all-users-info">
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className="user-informations">
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className="user-informations">
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                        <div className="AUser">
                            <div className='user-informations'>
                                <img className='user-avatar' src={ProfilPick} alt="user profile pick" />
                                <div className='user-details'>
                                    <p className='user-full-name'>Full name : Med Yassine Chaboun</p>
                                    <p className='user-email'>Mail : Chahbounmedyassine@gmail.com</p>
                                    <p className='userId'>ID : 432Bu7rX</p>
                                </div>
                            </div>
                            <div className="user-order">
                                <p>XD2000</p>
                            </div>
                        </div>
                </div>
                <div className='add-new-product'>
                    <div className='img-fild'>
                        <label htmlFor="product-img">Product Image</label>
                        <input type="file" id="product-img" accept="image/png, image/gif, image/jpeg" onMouseEnter={this.displayText.bind(this)} onMouseLeave={this.hideText.bind(this)} />
                        <p className='hover-text'>change image</p>
                    </div>
                    <div className='Product-details-filds'>
                        <div className='fild'>
                            <label htmlFor="product-name">Product Name</label>
                            <input type="text" id="product-name"/>
                        </div>
                        <div className='fild'>
                            <label htmlFor="product-price">Product Price</label>
                            <input type="text" id="product-price"/>
                        </div>
                        <div className='fild'>
                            <label htmlFor="product-description">Product Description</label>
                            <textarea id="" cols="30" rows="10" placeholder='Enter the description'></textarea>
                        </div>
                    </div>
                </div>
                <div className="edit-products">
                    <div className="poducts-list">
                        <div className='product'>
                            {/* <img src={productImg} alt={productName} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 1</p>
                                    <p className='price'>400$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 2</p>
                                    <p className='price'>600$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            {/* <img src={productImg} alt={product-Name} /> */}
                            <img className='existing-product-image' src={XD2000} alt="rolleur xd 2000" />
                            <div className='product-details'>
                                <div className='name-price'>
                                    <p className='name'>My Product 3</p>
                                    <p className='price'>900$</p>
                                </div>
                                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum odit mollitia quas fugit modi sequi dicta eligendi sint repellat deleniti,
                                tenetur veritatis maiores ullam fugiat? Aspernatur debitis mollitia, ipsa atque consequuntur excepturi deserunt ullam cupiditate beatae. Accusantium hic asperiores
                                vero!</p>
                                <div className="interactive-btn">
                                    <button className='interactive-btn-model delete-btn'>Delete</button>
                                    <button className='interactive-btn-model edit-btn'>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
