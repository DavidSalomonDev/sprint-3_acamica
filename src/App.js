import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import EmptyResults from './components/Results/EmptyResults/EmptyResults';
import ResultsImages from './components/Results/ResultsImages/ResultsImages';
import WaitingResults from './components/Results/WaitingResults/WaitingResults';

const App = () => {
	const [searchValue, setSearchValue] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const [gifsList, setGifsList] = useState('waiting')
	const [isDark, setIsDark] = useState(false)
	const [suggestions, setSuggestions] = useState([])
	const [searchResult, setSearchResult] = useState('')
	

	// Use effect to fetch Gifs
	useEffect(() => {
		const giphyAPIKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
		const gifsUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchResult)}&limit=15&api_key=${giphyAPIKey}`
		if(isSearching){
			let request = fetch(gifsUrl)
			request
				.then(response => response.json())
				.then(data =>{
					setGifsList(data.data)
					setIsSearching(false)
				})
		}
		
	}, [isSearching, searchResult])

	// Use effect for gifs
	useEffect(() => {
		let isMounted = true;      
		const giphyAPIKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
		const suggestionsUrl = `https://api.giphy.com/v1/gifs/search/tags?api_key=${giphyAPIKey}&q=${searchValue}`

		let request = fetch(suggestionsUrl)
			request
				.then(response => response.json())
				.then(data =>{
					if(isMounted){setSuggestions(data.data)}
					})
				
			return () => {isMounted = false}
			
		
		}, [searchValue, setSuggestions, isSearching]
	)

	const handleSuggestion = e => {
		setIsSearching(true)
		setSearchResult(e.target.innerText)
		setSearchValue('')
	}

	const handleSearchValue = e => {
		setSearchValue(e.target.value)
		setSearchResult(e.target.value)
	}
	
	const handleIsSearching = e => {
		e.preventDefault()
		setIsSearching(true)
		setSearchValue('')

	}
	const handleIsDark = () => setIsDark(!isDark)


  return (
	  <div className={`App-container ${isDark && 'App-container-dark'}`}>
		<div className={`App ${isDark && 'App-dark'}`}>
			<Navbar isDark={isDark} handleIsDark={handleIsDark}/>
			<Searchbar 
				value={searchValue} 
				handleSearchValue={handleSearchValue}
				handleSuggestion={handleSuggestion}
				handleIsSearching={handleIsSearching}
				setSuggestions={setSuggestions}
				setSearchValue={setSearchValue}
				suggestions={suggestions}
				isDark={isDark}/>
				{gifsList === 'waiting' && <WaitingResults isDark={isDark}/> }
				{
					gifsList.length > 0 && searchResult.length > 0 && typeof gifsList === 'object'
						? <ResultsImages 
							gifsList={gifsList}
							isSearching={isSearching}
							isDark={isDark}/>
						:   typeof gifsList === 'object' && <EmptyResults />
				}
		</div>
	  </div>
    
  );
}

export default App;
