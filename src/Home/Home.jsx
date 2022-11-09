import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homeBgVideo from '../Media/homeBgVideo.mp4'
import SoloopLogo from '../Media/Soloop-Logo.png'
import TeaserBoutiqueVideo from '../Media/TeaserBoutique.mp4'
import TeaserBoutiqueVideoMobile from '../Media/soloopMainVideoMobilVS.mp4.mp4'

export default class Home extends Component {
    displayBtn() {
        let discoverBtn = document.querySelector('.discover-boutique-btn');
        discoverBtn.style.display = "block";
        setTimeout(() => {
            discoverBtn.style.opacity = "1";
        }, 100)
    }
    
    render() {
        return <>
        <span id="circle" className="circle"></span>
        <section className='Home-start'>
            <img className='soloopLogoVideo' src={SoloopLogo} alt="Soloop's Logo" />
            <Link className='Boutique-link'>Boutique</Link>
            <div className='start-video-container'>
                <video className='start-video' width="100%" autoPlay muted loop src={homeBgVideo}></video>
                <video className='start-video-Mobile' width="100%" autoPlay muted loop src={TeaserBoutiqueVideoMobile}></video>
            </div>
            <div className='Gradiant-div'></div>
        </section>
        <section className='Home-section2'>
            <img className='soloopMainLogo' src={SoloopLogo} alt="Soloop's Logo" />
            <div className='Slogan'>
                <p>Les meilleurs rollers</p>
                <p>pour faire votre art.</p>
            </div>
        </section>
        <section className='Home-section3'>
            <div className='teaser-video-container'>
                <video width="100%" className='teaser-video' src={TeaserBoutiqueVideo} autoPlay muted onEnded={this.displayBtn.bind(this)}></video>
                <Link className='discover-boutique-btn-link'><button className='discover-boutique-btn'>Discover</button></Link>
            </div>
        </section>
        </>
    }
}