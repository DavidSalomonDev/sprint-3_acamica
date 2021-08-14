import React from 'react'
import './Searchbar.css'

const Searchbar = () => {
	return (
		<div className='Searchbar'>
			<h2 className="Searchbar-title">¡Inspirate y busca los mejores <span>gifs!</span></h2>	
			<img src="/images/ilustra_header.svg" alt="Search header"></img>
			<div className='Searchbar-inputContainer'>
				<input className='Searchbar-input' type="text" placeholder='Busca gifs'></input>
				<button className='Searchbar-btn'><img src='/images/icon-search-mod-noc.svg' alt="submit"/></button>
			</div>
		</div>
	)
}

export default Searchbar
