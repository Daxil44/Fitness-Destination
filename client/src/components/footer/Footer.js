import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom";
const Footer = () => {
    return (
    <>   
    <div className="footer-dark mt-5">
            <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className="gold">CUSTOMER SERVICE </h3>
                        <ul>
                            <li><Link to="/Customer">Customer Service</Link></li>
                            <li><a href="#">Delivery Information</a></li>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3 className="gold">ABOUT ON</h3>
                        <ul>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Team">Team</Link></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3 className="gold">Fitness Destination</h3>
                        <p></p>
                    </div>
                    <div className="col item social">
                    <a href="https://www.facebook.com/" target="_blank"><i className="icon ion-social-facebook"><img className="fimg" src=" https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"/></i></a>
                    <a href="https://twitter.com/?lang=en" target="_blank"><i className="icon ion-social-twitter"></i><img className="fimg" src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/twitter-512.png"/></a>
                    <a href="https://www.snapchat.com/" target="_blank"><i className="icon ion-social-snapchat"></i><img className="fimg" src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_snapchat-512.png"/></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="icon ion-social-instagram"></i><img className="fimg" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png"/></a></div>
                </div>
                <p className="copyright">Fitness Diestination © 2021</p>
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

</>
    )
}

export default Footer;