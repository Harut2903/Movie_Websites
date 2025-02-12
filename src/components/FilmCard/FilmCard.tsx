import { NavLink } from 'react-router-dom'
import { FilmsType } from '../../types'
import './FilmCard.css'

export const imgUrl = "https://image.tmdb.org/t/p/w500/"

type FilmCardPropsType = {
    film: FilmsType
}

const FilmCard = ({ film }: FilmCardPropsType) => {
    return (
        <NavLink to={`/film/${film.id}`} className="film-card">
            <div className="film-card__image">
                <img src={imgUrl + film.poster_path} alt={film.title} />
            </div>
            <h2 className="film-card__title">{film.title}</h2>
        </NavLink>
    )
}

export default FilmCard
