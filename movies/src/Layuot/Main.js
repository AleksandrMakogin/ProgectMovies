import React from 'react';
import { Movies } from '../ProgectFilms/movies';
import { Movie } from '../ProgectFilms/movie';
import { Prelouder } from './Prelouder';
import { Search } from './Search';

// REACT_APP_API_KEY=ffce2b23

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=ffce2b23&s=matrix`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true });
		fetch(`http://www.omdbapi.com/?apikey=ffce2b23&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	};
	render() {
		const { movies, loading } = this.state;
		return (
			<main className="container content">
				<Search searchMovies={this.searchMovies} />
				{loading ? <Prelouder /> : <Movies movies={movies} />}
			</main>
		);
	}
}
export { Main };
