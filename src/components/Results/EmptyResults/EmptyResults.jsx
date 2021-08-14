import React from 'react'
import './EmptyResults.css'

const EmptyResults = ({isDark}) => {
	return (
		<main className='Results'>
			<h3 className={`Results-title ${isDark && 'Results-title-dark'}`}>Realiza tu búsqueda</h3>
		</main>
	)
}

export default EmptyResults
