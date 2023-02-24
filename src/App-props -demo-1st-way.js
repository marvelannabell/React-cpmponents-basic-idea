
import './App.css';
import Movie from './components/Movie';



function App() {
	return (
		<div className="App">
			<h1>Movie List</h1>
			<Movie 
			title="Man of steel" 
			year="2008"
			cast={["Henry Cavil", "Pesho"]}
			isNew={false} //boolean
			isNewOne={true}
			isNewTwo//default true 
			/>
		</div>
	);
}

export default App;
