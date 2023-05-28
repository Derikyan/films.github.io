import { useEffect, useState } from 'react';
import './films.scss';
import Film from '../film/Film';
import Filter from '../filter/Filter';

const Films = () => {

    const [film,setFilm] = useState(null);
    const [filteredFilm,setFilteredFilm] = useState(null);
    const [search,setSearch] = useState('');
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(()=>{
        fetchFilms();
    },[])

    const fetchFilms = async() => {
        const film = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=5503f91f557746ba3ac3cbbfc5cba872&language=en-US&page=1");
        const result = await film.json();
        setFilteredFilm(result.results);
        setFilm(result.results);
    }

    const searchFilm = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div className='kino'>
            <div className="kinoSearch">
                <Filter film={film} setFilteredFilm={setFilteredFilm}  activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
                <input type='text' onChange={(e)=>{searchFilm(e)}} value={search}/>
            </div>
            <div className="content">
                {filteredFilm != null && 
                filteredFilm
                .filter((item)=>{
                    return item.title.toLowerCase().includes(search.toLowerCase())
                })
                .map((movie,i)=>{
                    return <Film movie={movie} key={i} />
                })}
            </div>
            
        </div>
    )
}

export default Films;