import { useEffect, ChangeEvent, useState } from "react";
import "./Header.css";
import { getGenres } from "../../store/slices/genresSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BTN from "../UI/BTN";
import { changeLanguage } from "../../store/slices/globalSlice";
import { changeStateText, searchFilms } from "../../store/slices/filmsSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.genresData);
  const { language } = useAppSelector((state) => state.globalData);
  const { text, search_results } = useAppSelector((state) => state.filmsData);

  useEffect(() => {
    dispatch(getGenres(language));
  }, [language]);

  useEffect(() => {
    if (text.length >= 2) {
      dispatch(searchFilms(text));
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [text]);

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStateText(e.target.value));
  };

  const closeSearch = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h2>Logo</h2>
      </div>

      <nav className="header__nav">
        {genres.map((genre) => (
          <BTN key={genre.id} genre={genre} />
        ))}
      </nav>

      <div className="header__search">
        <input
          className="header__search-input"
          value={text}
          onChange={changeText}
          placeholder="Search for films..."
          onFocus={() => setOpen(true)}
        />
        <div className={`header__search-results ${open ? "show" : ""}`}>
          {open &&
            (search_results.length > 0 ? (
              search_results.map((film) => (
                <NavLink
                  className="header__search-result"
                  onClick={closeSearch}
                  to={`/film/${film.id}`}
                  key={film.id}
                >
                  {film.title}
                </NavLink>
              ))
            ) : (
              <div className="header__search-no-results">No results found</div>
            ))}
        </div>
      </div>

      <select
        className="header__language-select"
        value={language}
        onChange={(e) => dispatch(changeLanguage(e.target.value))}
      >
        <option value="en-US">EN</option>
        <option value="ru-RU">RU</option>
      </select>
    </header>
  );
};

export default Header;
