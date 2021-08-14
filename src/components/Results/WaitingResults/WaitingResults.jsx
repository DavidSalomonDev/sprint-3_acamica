import React from 'react'
import './WaitingResults.css'

const WaitingResults = ({isDark}) => {
	return (
		<main className='Results'>
			<h3 className={`Results-title ${isDark && 'Results-title-dark'}`}>Los trending gifs más divertidos de hoy!</h3>

		</main>
	)
}

export default WaitingResults
