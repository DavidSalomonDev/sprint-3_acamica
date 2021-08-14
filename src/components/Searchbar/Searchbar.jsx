import React from 'react'
import './Searchbar.css'

const Searchbar = ({searchValue, handleSearchValue, handleIsSearching, isDark}) => {
	return (
		<div className='Searchbar'>
			<h2 className={`Searchbar-title ${isDark && 'Searchbar-title-dark'}`}>¡Inspirate y busca los mejores <span>gifs!</span></h2>	
			<img src="/images/ilustra_header.svg" alt="Search header"></img>
			<form className='Searchbar-inputContainer'>
				<input 
					className={`Searchbar-input ${isDark && 'Searchbar-input-dark'}`} 
					type="text" 
					placeholder='Busca gifs' 
					value={searchValue}
					onChange={handleSearchValue}></input>
				<button 
					type='submit'
					className={`Searchbar-btn ${isDark && 'Searchbar-btn-dark'}`}
					onClick={handleIsSearching}>
						<img src='/images/icon-search-mod-noc.svg' alt="submit"/>
				</button>
			</form>
		</div>
	)
}

export default Searchbar
