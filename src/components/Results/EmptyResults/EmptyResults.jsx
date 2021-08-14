import React from 'react'
import './EmptyResults.css'

const EmptyResults = ({isDark}) => {
	return (
		<main className='EmptyResults'>
			
			<h3 className={`EmptyResults-title ${isDark && 'EmptyResults-title-dark'}`}><span>😢</span> Lo siento, no encontré ningun Gif con ese nombre <span>😢</span> </h3>
		</main>
	)
}

export default EmptyResults
