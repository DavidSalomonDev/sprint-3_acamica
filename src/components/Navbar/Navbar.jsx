import React from 'react'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className="Navbar">
			<img src='/images/logo-desktop.svg' alt='Gifos' />;
			<button className='colorBtn'>Modo Dark</button>
		</nav>
	)
}

export default Navbar
