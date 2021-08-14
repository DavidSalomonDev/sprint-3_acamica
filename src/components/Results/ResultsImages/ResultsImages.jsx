import React from 'react'
import './ResultsImages.css'

const ResultsImages = ({isDark, gifsList, isSearching}) => {
	return (
		<main className="ResultsImages">
			<h3 className={`ResultsImages-title ${isDark && 'ResultsImages-title-dark'}`}>Resultados de la búsqueda</h3>
			<article className={`ResultsImages-list ${isDark && 'ResultsImages-list-dark'}`}>
				{
				typeof gifsList !== 'string' &&
				gifsList.map(gif =>{
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
					
				}
			</article>
		</main>
	)
}

export default ResultsImages
