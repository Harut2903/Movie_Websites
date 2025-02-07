import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getFilms } from "../../store/Slices/filmsSlice";

export type FilmObj = {
    page : number,
    language : string
}


const Home = () => {

    const dispatch = useAppDispatch();
    const {language} = useAppSelector((state) => state.globalData);
    const {results} = useAppSelector((state) => state.filmsData);
  


    let obj : FilmObj = {page : 1, language}

    useEffect(() => {
    dispatch(getFilms(obj))
  }, []);

  return <div>Home</div>;
};

export default Home;
