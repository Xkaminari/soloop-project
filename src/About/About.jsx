import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './About.css'

export default class About extends Component {
    render() {
        return <>
        <div className="main1">
            <span id="circle" className="circle"></span>
            <section className='left-section'>
                <Link className='return-btn' to="/Boutique"><i class="fa-solid fa-arrow-left"></i></Link>
                <h4>ABOVE AND BEYOND</h4>
                <h2>SOLOOP STORY</h2>
                <p>SOLOOP, c'est d'abord un rêve de "gosse". C'est 
                    aujourd'hui une jeune entreprise bretonne, moderne et dynamique créée pour vous offrir le meilleur !</p>
                <h2>Ludivine MALLE</h2>
                <p>Derrière ce rêve se cache une passionnée, multiple championne de France, en Equipe de France et
                    toujours patineuse avec un objectif, celui de partager !
                </p>
            </section>
            <section className='right-section'>
                <div className="gradient-div1"></div>
                <div className="gradient-div1 gradient-2"></div>
            </section>
        </div>
        <Footer/>
        </>
    }
}
