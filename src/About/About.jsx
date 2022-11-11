import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return <>
        <div className="main1">
            <section className='left-section'>
                <h4>ABOVE AND BEYOND</h4>
                <h2>SOLOOP STORY</h2>
                <p>SOLOOP, c'est d'abord un rêve de "gosse". C'est 
                    aujourd'hui une jeune entreprise bretonne, moderne et dynamique créée pour vous offrir le meilleur !</p>
                <h2>Ludivine MALLE</h2>
                <p>Derrière ce rêve se cache une passionnée, multiple championne de France, en Equipe de France et
                    toujours patineuse avec un objectif, celui de partager !
                </p>
            </section>
            <div className="gradient-div1"></div>
            <section className='right-section'></section>
        </div>
        </>
    }
}
