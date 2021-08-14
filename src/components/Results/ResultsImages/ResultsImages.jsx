import React from 'react'
import './ResultsImages.css'

const ResultsImages = ({isDark, gifsList, isSearching}) => {
	return (
		<main className="ResultsImages">
			<h3 className='ResultsImages-title'>Resultados de la búsqueda</h3>
			<article className={`ResultsImages-list ${isDark && 'ResultsImages-list-dark'}`}>
				{gifsList.length > 0 
					? gifsList.map(gif =>{
						return(
							<img 
								className='ResultsImages-img'
								src={gif.images.downsized.url} 
								alt={gif.title}
								key={gif.id}
								loading='eager'/>
						)
					})
					: isSearching && <div>Cargando...</div>
				}
			</article>
		</main>
	)
}

export default ResultsImages
