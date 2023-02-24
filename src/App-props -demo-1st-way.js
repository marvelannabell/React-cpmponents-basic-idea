
import './App.css';

import MovieList from './components/MovieList';

const movies = [
    { title: 'Man of steel', year: 2008, cast: ['Henry Cavil', 'Russel Crowe'] },
    { title: 'Harry Potter', year: 2008, cast: ['Daniel', 'Ema Watson'] },
    { title: 'Lord of the rings', year: 2008, cast: ['Orlando bloom', 'Russel Crowe'] },

]

function App() {
    return (
        <div className="App">
           <MovieList movies={movies}/>
        </div>
    );
}

export default App;

