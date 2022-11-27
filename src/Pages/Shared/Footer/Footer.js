import React from 'react';
import logo from '../../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-base-200 text-base-content">
            <div>
                <img src={logo} alt="" style={{height:'90px'}} />
                <p>IMMIGO Visa Consultancy<br />Providing the best Service since 2022</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover">Education Visa</a>
                <a href="/" className="link link-hover">Business Visa</a>
                <a href="/" className="link link-hover">Student Visa</a>
                <a href="/" className="link link-hover">Tourists Visa</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Immigration Country</a>
                <a href="/" className="link link-hover">Service Review</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;