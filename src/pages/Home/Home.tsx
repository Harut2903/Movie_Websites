import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { changePage, getFilms } from "../../store/slices/filmsSlice"
import { useNavigate } from "react-router-dom"
import './index.css'
import FilmCard from "../../components/FilmCard/FilmCard"
import { FetchFilmsType } from "../../types"


const Home = () => {
  const [isScroll, setIsScroll] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { language } = useAppSelector((state) => state.globalData)

  const { results, page, total_results } = useAppSelector((state) => state.filmsData)

  let obj: FetchFilmsType = { page, language }

  useEffect(() => {
    navigate(`?page=${page}&language=${language}`)
    dispatch(getFilms(obj))
  }, [language, page])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
  }, [])


  useEffect(() => {
    if (isScroll) {
      dispatch(changePage())
    }
  }, [isScroll])

  const handleScroll = (e: any) => {


    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }
  return (
    <div className="home">
      <div className="films-block">
        {
          results.map((film) => {
            return <FilmCard key={film.id} film={film} />
          })
        }
      </div>
      <div className="scroll-button">
        <button className="scroll-button"> {total_results} </button>
      </div>
    </div>
  )
}

export default Home