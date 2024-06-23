import React from 'react'
import "./footer.css"
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";


const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-content'>
                <h3>Contact Us</h3>
                <p>Email: royalterestaurant@gmail.com</p>
                <p>Phone: +994 556106875</p>
                <p>Address: Baku,Azerbaijan</p>
            </div>
            <div className='footer-content'>
                <h3>Quick Links</h3>
                <ul className='list'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Blog</a></li>
                    <li><a href=''>Shop</a></li>
                </ul>
            </div>
            <div className='footer-content'>
                <h3>Follow Us</h3>
                <div className='social-icons'>
                <li><a href=''><i><FaTwitter /></i></a></li>
                <li><a href=''><i><IoLogoFacebook /></i></a></li>
                <li><a href=''><i><FaLinkedinIn /></i></a></li>
                <li><a href=''><i><TiSocialInstagram /></i></a></li>
                </div>
            </div>
        </div>
        <div className='bottom-bar'>
<p>@ 2018 DesignGalaxy8. Get The Theme</p>
        </div>
    </footer>
  )
}

export default Footer