import React from 'react';
import './csssubcomponents/footer.css';
import recruit from"./csssubcomponents/logowhite .png"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaInfoCircle, FaWrench, FaAddressCard, FaNewspaper } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footermainsub">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <img src={recruit}  className="footer-logo"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 contractetc">
                        <h4 className="contact-header">Contact Us</h4>
                        <p><FaMapMarkerAlt className="contact-icon" /> 123 Main St., City, Country</p>
                        <p><FaPhone className="contact-icon" /> +123456789</p>
                        <p><FaEnvelope className="contact-icon" /> email@company.com</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4 className="links-header">Quick Links</h4>
                        <ul className="footer-links">
                            <li><FaInfoCircle className="link-icon" /><a href="#about">About Us</a></li>
                            <li><FaWrench className="link-icon" /><a href="#services">Services</a></li>
                            <li><FaAddressCard className="link-icon" /><a href="#contact">Contact</a></li>
                            <li><FaNewspaper className="link-icon" /><a href="#blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4 className="subscribe-header">Subscribe to Our Newsletter</h4>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email..." />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 social-wrap">
                        <h4 className="follow-header">Follow Us</h4>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FaFacebook className="social-icon facebook-icon" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <FaInstagram className="social-icon instagram-icon" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                            <FaTwitter className="social-icon twitter-icon" />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <FaYoutube className="social-icon youtube-icon" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="social-icon linkedin-icon" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <p className="footer-text">© 2023 Tech-Up. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
