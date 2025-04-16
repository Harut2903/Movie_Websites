import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getOneFilm } from "../../store/slices/filmsSlice";
import "./Film.css";

const Film = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.globalData);
  const { film } = useAppSelector((state) => state.filmsData);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?language=${language}`);
    dispatch(getOneFilm({ id, language }));
  }, [id]);

  return (
    <div className="film">
      <div
        className="film__background"
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_IMG_URL + film?.backdrop_path
          })`,
        }}
      >
        <div className="film__content">
          <img
            className="film__poster"
            src={import.meta.env.VITE_IMG_URL + film?.poster_path}
            alt={film?.title}
          />
          <div className="film__info">
            <h2 className="film__title">{film?.title}</h2>
            <p className="film__tagline">{film?.tagline}</p>
            <p className="film__description">{film?.overview}</p>

            {film?.genres && (
              <div className="film__genres">
                <strong>Genres:</strong>{" "}
                {film.genres.map((genre) => genre.name).join(", ")}
              </div>
            )}

            <ul className="film__details">
              <li>
                <strong>Release Date:</strong> {film?.release_date}
              </li>
              <li>
                <strong>Runtime:</strong> {film?.runtime} min
              </li>
              <li>
                <strong>Budget:</strong> ${film?.budget.toLocaleString()}
              </li>
              <li>
                <strong>Revenue:</strong> ${film?.revenue.toLocaleString()}
              </li>
              <li>
                <strong>Language:</strong>{" "}
                {film?.original_language.toUpperCase()}
              </li>
              <li>
                <strong>IMDb:</strong>{" "}
                <a
                  href={`https://www.imdb.com/title/${film?.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {film?.imdb_id}
                </a>
              </li>
              <li>
                <strong>Popularity:</strong> {film?.popularity}
              </li>
              <li>
                <div className="film__vote">
                  <div className="film__vote-circle">
                    <svg viewBox="0 0 36 36" className="circle">
                      <path
                        className="circle-background"
                        fill="none"
                        stroke="#f1f1f1"
                        strokeWidth="3"
                        d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                      />
                      <path
                        className="circle-progress"
                        fill="none"
                        stroke="#ff9800"
                        strokeWidth="3"
                        strokeDasharray="100, 100"
                        strokeDashoffset={100 - (film?.vote_average || 0) * 10}
                        d="M18 2 a16 16 0 1 1 0 32 a16 16 0 1 1 0 -32"
                      />
                    </svg>
                    <div className="film__vote-text">
                      <span>{film?.vote_average}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
