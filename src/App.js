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
	const [autocomplete, setAutocomplete] = useState([])

	useEffect(() => {
		const giphyAPIKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
		const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchValue)}&limit=15&api_key=${giphyAPIKey}`
		if(isSearching){
			let request = fetch(url)
			request
				.then(response => response.json())
				.then(data =>{
					setGifsList(data.data)
					setIsSearching(false)
				})
		}
		
	}, [isSearching, searchValue])

	const handleSearchValue = e => {
		setSearchValue(e.target.value)
		
	}
	const handleIsSearching = e => {
		e.preventDefault()
		setIsSearching(true)
	}
	const handleIsDark = () => setIsDark(!isDark)


  return (
	  <div className={`App-container ${isDark && 'App-container-dark'}`}>
		<div className={`App ${isDark && 'App-dark'}`}>
			<Navbar isDark={isDark} handleIsDark={handleIsDark}/>
			<Searchbar 
				value={searchValue} 
				handleSearchValue={handleSearchValue}
				handleIsSearching={handleIsSearching}
				isDark={isDark}
				autocomplete={autocomplete}
				setAutocomplete={setAutocomplete}/>
				{gifsList === 'waiting' && <WaitingResults isDark={isDark}/> }
				{
					gifsList.length > 0 && searchValue.length > 0 && typeof gifsList === 'object'
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
