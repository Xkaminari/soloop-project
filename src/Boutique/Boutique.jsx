import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Boutique/Boutique.css'
import product1 from '../Media/product1.jpg'
import product2 from '../Media/product2.png'
import LudivineMalleDancing from '../Media/Ludivine-Malle-Dancing.jpg'
import Footer from "../Footer/Footer";

export default class Boutique extends Component {
    render() {
        return <>
        <div className="main">
            <div className='boutique-header'>
                <div className="gradient"></div>
                <img className='ludivine-boutique-img' src={LudivineMalleDancing} alt="Ludivine Malle performing" />
                <h2 className='boutique-title'>BOUTIQUE</h2>
            </div>
            <section className='boutique-products'>
                <div className="prod-items">
                    <div className="item">
                        <Link to="FirstProduct">
                            <img src={product1} alt="" />
                        </Link>
                        <p className='pros-name'>Rondo Silver Angel</p>
                        <p className='price'>$399,00</p>
                    </div>
                    <div className="item">
                        <Link to="FirstProduct">
                            <img src={product1} alt="" />
                        </Link>
                        <p className='pros-name'>Rondo Silver Angel</p>
                        <p className='price'>$399,00</p>
                    </div>
                    <div className="item">
                        <Link to="FirstProduct">
                            <img src={product1} alt="" />
                        </Link>
                        <p className='pros-name'>Rondo Silver Angel</p>
                        <p className='price'>$399,00</p>
                    </div>
                    <div className="item">
                        <Link to="second-product">
                            <img src={product2} alt="" />
                        </Link>
                        <p className='pros-name'>Esordio-Silver016-Angel</p>
                        <p className='price'>$499,00</p>
                    </div>
                    <div className="item">
                        <Link to="second-product">
                            <img src={product2} alt="" />
                        </Link>
                        <p className='pros-name'>Esordio-Silver016-Angel</p>
                        <p className='price'>$499,00</p>
                    </div>
                    <div className="item">
                        <Link to="second-product">
                            <img src={product2} alt="" />
                        </Link>
                        <p className='pros-name'>Esordio-Silver016-Angel</p>
                        <p className='price'>$499,00</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        </>
    }
}
