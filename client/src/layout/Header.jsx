import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
const Header = () => {
    const [searchIconOpen, setSearchIconOpen] = useState(false)
    const showSearch = () => {
        setSearchIconOpen(!searchIconOpen)
    }
    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className='Top'>
            <div className='head-top-black'>
                <div>
                    logo
                </div>
                <div>
                    <button className='BuyBiletBtn'>Buy now</button>
                </div>
            </div>
            <div className='SearchBox' style={{ display: searchIconOpen ? 'flex' : 'none' }}>
                <IoSearch />
                {searchIconOpen && (
                    <input type="text" className='SearchInp' placeholder="Search..." />
                )}
            </div>
            <header>
                <button className=' nav-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
                <div>
                    <h1>LOGO</h1>
                </div>
                <div>
                    <nav ref={navRef}>
                        <ul>
                            <li><NavLink to={'/'} className={(navData) => navData.isActive ? "active" : ""}>Home</NavLink></li>
                            <li><NavLink to={'/pages'} className={(navData) => navData.isActive ? "active" : ""}>Pages</NavLink></li>
                            <li><NavLink to={'/destinations'} className={(navData) => navData.isActive ? "active" : ""}>Destinations</NavLink></li>
                            <li><NavLink to={'/shop'} className={(navData) => navData.isActive ? "active" : ""}>Shop</NavLink></li>
                            <li><NavLink to={'/elements'} className={(navData) => navData.isActive ? "active" : ""}>Elements</NavLink></li>
                            <li><NavLink className={(navData) => navData.isActive ? "active" : ""} to={'/register'}><FaRegUser /></NavLink></li>
                            <li>
                                <button className=' nav-btn nav-close-btn' onClick={showNavbar}>
                                    <FaTimes />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='SearchIconBox'>
                    <button onClick={showSearch}><IoMdSearch /></button>
                </div>
            </header>

        </div>
    )
}

export default Header
