import React, { useEffect, useState } from 'react'
import './WaitingResults.css'

const WaitingResults = ({isDark}) => {

	const [trends, setTrends] = useState([])

	useEffect(() => {
		let isMounted = true;      
		const giphyAPIKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
		const trendsUrl = `https://api.giphy.com/v1/gifs/trending?limit=15&api_key=${giphyAPIKey}`
		let request = fetch(trendsUrl)
		request
			.then(response => response.json())
			.then(data =>{
				if(isMounted){setTrends(data.data)}
				})

		return () => {isMounted = false}
		}, [trends])

		const trendsList = trends.map(gif =>{
			return(
				<a 
					key={gif.id}	
					href={gif.url} 
					target="_blank" 
					rel='noreferrer'> 
						<img 
							className='ResultsImages-img'
							src={gif.images.downsized.url} 
							alt={gif.title}
								
							loading='eager'
							/>
						</a>
					)
				})
	return (
		<main className='Results-trends'>
			<h3 className={`Results-title ${isDark && 'Results-title-dark'}`}>Los trending gifs más divertidos de hoy!</h3>
			<article className={`ResultsImages-list ${isDark && 'ResultsImages-list-dark'}`}>{trendsList}
			</article>
			

		</main>
	)
}

export default WaitingResults
