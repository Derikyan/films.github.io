import { useEffect } from 'react'
import './filter.scss';

const Filter = ({ film, setFilteredFilm, activeGenre, setActiveGenre }) => {

    useEffect(() => {
        if(activeGenre === 0){
            setFilteredFilm(film);
            return;
        }

        const filtered = film?.filter((movie) => movie.genre_ids.includes(activeGenre));
        setFilteredFilm(filtered);

    }, [film, setFilteredFilm, activeGenre])

    return (
        <div className='filter-container'>
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)} >All</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
        </div>
    )
}

export default Filter;