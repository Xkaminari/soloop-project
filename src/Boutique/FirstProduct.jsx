import React, { Component } from 'react'
import prdct1 from '../Media/product1.jpg'
import product1profile from '../Media/product1profile.jpg'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import "./FirstProduct.css"

export default class FirstProduct extends Component {
    render() {
        return <>
        <div className="flex">
            <section className='main-sec'>
                <div className="title-b">
                    <h2>BOUTIQUE</h2>
                </div>
                <div className="prdct-img">
                    <img src={prdct1} alt="" />
                </div>
            </section>
            <section className='details-sec'>
                <div className="prdctname">
                    <p>Rondo Silver Angel</p>
                </div>
                <div className="price">
                    <p>$399,00</p>
                </div>
                <hr />
                <Popup contentStyle={{width: "300px", border: '1px solid', borderRadius: '0px'}} trigger={<button>ADD TO SHOPPING BAG</button> } 
                    position="left center">
                        <div><p className='pop-title'>Shopping Bag</p></div>
                        <hr></hr>
                        <div className='pop-flex'>
                            <div>
                                <img className='pop-img' src={product1profile}/>
                            </div>
                            <div>
                            <small>
                                <p className='pop-name'>Rondo Silver Angel</p>
                                <p className='pop-price'>Price: $399,00</p>
                                <p className='pop-available'>AVAILABLE</p>
                            </small>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='total'>
                            <small>
                                <p>SUB TOTAL</p>
                            </small>
                            <p className='tot-price'>$399,00</p>
                        </div>
                        <hr></hr>
                        <Link to="checkout">
                            <button >CHECKOUT</button>
                        </Link>
                </Popup>
                <small><p desc>Great for the rink or the streets comes the Rondo Silver Angel skates. These skates have been built from the ground up with 62mm wheels with ABEC 5 bearings that provide skaters with a great roll on both indoor and outdoor surfaces. The Rondo Silver Angel was designed with comfort in mind with its wide fitting, padded boot that provides a secure and comfortable fit with its Velcro power strap and lace closure system. Get the ride of your life in the Rondo Silver Angel roller skate.</p></small>            
                <small>
                <ul>
                    <li>- Comfort-Fit Boot</li>
                    <li>- Adjustable Toe Stops</li>
                    <li>- Velcro Speed Strap and Lace Closure</li>
                    <li>- Fiber Reinforced Composite Skate Plate</li>
                    <li>- Alloy Trucks</li>
                    <li>- 62mm Wheels with 93A Wheel Durometer</li>
                    <li>- ABEC 5 Bearings</li>
                    <li>- Model Number: Z32</li>
                </ul>
                </small>
            </section>
        </div>
        </>
    }
}
