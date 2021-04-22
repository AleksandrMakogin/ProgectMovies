import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	hendel_key = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	handler_filter = (event) => {
		this.setState(
			() => ({ type: event.target.dataset.type }),
			() => {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		);
	};

	render() {
		return (
			<div className="row">
				<div className="input-field col-12 ">
					<input
						id="search"
						type="search"
						placeholder="Search"
						className="validate"
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={this.hendel_key}
					/>

					<a
						onClick={() => this.props.searchMovies(this.state.search, this.state.search.type)}
						class="waves-effect waves-light btn-small"
					>
						Search
					</a>
				</div>
				<div className="col ">
					<label className="col s2 ">
						<input
							className="with-gap"
							name="type"
							type="radio"
							data-type="all"
							onChange={this.handler_filter}
							checked={this.state.type === 'all'}
						/>
						<span>All</span>
					</label>
					<label class="col s2  push-s3">
						<input
							className="with-gap"
							name="type"
							type="radio"
							data-type="movie"
							onChange={this.handler_filter}
							checked={this.state.type === 'movie'}
						/>
						<span>Movies only</span>
					</label>
					<label className="col s2 push-s6  ">
						<input
							className="with-gap"
							name="type"
							type="radio"
							data-type="series"
							onChange={this.handler_filter}
							checked={this.state.type === 'series'}
						/>
						<span>Series only</span>
					</label>
				</div>
			</div>
		);
	}
}

export { Search };
