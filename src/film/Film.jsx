import './film.scss';

const Film = ({movie,key}) => {
    return(
        <div className="film" key={key} style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")` }}>
            <span className="title">{movie.title}</span>
        </div>
    )
}

export default Film;