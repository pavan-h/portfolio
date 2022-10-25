import React from 'react'
import "../styles/footer.scss"



const Footer = () => {
    return (
        <>
        <footer>
        <nav className="social-media-nav">
            <ul>
                <li><a href="/#"><i className="uil uil-github-alt"></i></a></li>
                <li><a href="/#"><i className="uil uil-linkedin-alt"></i></a></li>
            </ul>
        </nav>
        <nav className="footer-nav">
            <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href='#contact'>contact</a></li>  
                {/* <li className="top-page"><a href="/#home"><i class="uil uil-arrow-circle-up"></i></a></li> */}
              </ul>
        </nav>
    </footer>
        </>
    )
} 

export default Footer;