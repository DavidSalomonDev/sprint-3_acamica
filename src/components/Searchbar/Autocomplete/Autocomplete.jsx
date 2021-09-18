import React from 'react'
import './Autocomplete.css'

const Autocomplete = ({isDark, suggestions, handleSuggestion}) => {
	


	const suggestionsList = suggestions.map((suggestion, idx) => {
		return <li key={idx} onClick={handleSuggestion}><img src="/images/icon-search.svg" alt="scope" /> {suggestion.name}</li>
	})

	return (
		<div className={`Autocomplete ${isDark ? 'dark' : ''} ${suggestionsList.length > 0 ? '' : 'hide'}`}>
			<ul>
				{suggestionsList}
			</ul>
		</div>
	)
}

export default Autocomplete
