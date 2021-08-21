import React from 'react'
import './Navbar.css'

const Navbar = ({isDark, handleIsDark}) => {
	const refreshPage = () =>{
		window.location.reload(true)
	}

	return (
		<nav className='Navbar'>
			<img 
				className='Navbar-logo'
				onClick={refreshPage}
				src={isDark ? '/images/logo-black.svg': '/images/logo.svg'} 
				alt='Gifos' />;
			<button 
				onClick={handleIsDark} 
				className={`colorBtn ${isDark && 'colorBtn-dark'}`}>
					{isDark ? 'Modo Light' : 'Modo Dark'}
			</button>
		</nav>
	)
}

export default Navbar
