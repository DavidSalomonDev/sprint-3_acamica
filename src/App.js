import Navbar from './components/Navbar/Navbar'
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
//import EmptyResults from './components/Results/EmptyResults/EmptyResults';
import ResultsImages from './components/Results/ResultsImages/ResultsImages';

function App() {
  return (
    <div className="App">
      <Navbar />
	  <Searchbar />
	  {/* <EmptyResults /> */}
	  <ResultsImages />
    </div>
  );
}

export default App;
