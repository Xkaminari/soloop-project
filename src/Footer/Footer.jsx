import React, { Component } from 'react'
import '../Footer/Footer.css'

export default class Footer extends Component {
    render() {
        return <>
            <footer>
                <div className='more-info'>
                    <div className='social-medias'>
                        <h2 className='footer-titles'>Nous suivre</h2>
                        <div className='social-medias-links'>
                            <a href="https://www.facebook.com/soloopboutique"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/soloop_boutique/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCPXnFImxBHWE2a659au6opg"><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className='separation horizental'></div>
                    <div className='contact-section'>
                        <h2 className='footer-titles'>Nous contacter</h2>
                        <div className='contact'>
                            <a href="mailto:solooproller@gmail.com">solooproller@gmail.com</a>
                            <a href="tel:07-80-49-06-34">07 80 49 06 34</a>
                        </div>
                    </div>
                </div>
                <div className='separation vertical'></div>
                <p className='Copyright'>Copyright &copy; 2020 Soloop tous droits réservés</p>
            </footer>
        </>
    }
}
