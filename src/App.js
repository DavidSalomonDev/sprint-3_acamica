import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import EmptyResults from './components/Results/EmptyResults/EmptyResults';
import ResultsImages from './components/Results/ResultsImages/ResultsImages';

const App = () => {
	const [searchValue, setSearchValue] = useState("")
	const [isSearching, setIsSearching] = useState(false)
	const [gifsList, setGifsList] = useState([])

	useEffect(() => {
		const giphyAPIKey = 'NJ9tSPN3FIDxmPY3DGf2MdZgjTz7wlKS'
		const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchValue)}&limit=12&api_key=${giphyAPIKey}`
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

	const handleSearchValue = e => setSearchValue(e.target.value)
	const handleIsSearching = () => setIsSearching(true)


  return (
    <div className="App">
      <Navbar />
	  <Searchbar 
	  	value={searchValue} 
		handleSearchValue={handleSearchValue}
		handleIsSearching={handleIsSearching}/>
		{
			gifsList.length > 0 
				? <ResultsImages 
					gifsList={gifsList}
					isSearching={isSearching}/>
				: <EmptyResults /> 
		}
	  
    </div>
  );
}

export default App;
