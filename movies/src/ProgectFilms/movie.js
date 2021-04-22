function Movie(props) {
	const { Title: title, Year: yaer, imdbID: id, Type: type, Poster: poster } = props;

	return (
		<div id={id} className="card movie">
			<div className="card-image waves-effect waves-block waves-light">
				{poster === 'N/A' ? (
					<img
						className="activator"
						style={{ height: 380 }}
						src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png`}
					/>
				) : (
					<img className="activator" src={poster} />
				)}
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">
					{title}
					<i className="material-icons right">more_vert</i>
				</span>
				<p>
					{yaer} <span className="right">{type}</span>
				</p>
			</div>
		</div>
	);
}
export { Movie };
