import { useEffect,} from 'react'
import './Header.css'
import { getGenres } from '../../store/Slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import BTN from '../UI/BTN'
import { changeLanguage } from '../../store/Slices/globalSlice'
import { useNavigate } from 'react-router-dom'



const Header = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
   const { genres } = useAppSelector((state) => state.genresData)
    const { language } =  useAppSelector((state) => state.globalData )
    
useEffect(() => {
    dispatch(getGenres(language))
    navigate(`?${language}`)
}, [language])

  return (
    <header className="header">
    <div className="logo">
      <h1>Logo</h1>
    </div>
    <nav>
     {
      genres.map((genre) => {
        return <BTN key={genre.id} genre={genre}/>
      })
     }
    </nav>
    <div className="search">
      <input className="search-input" type="text" placeholder="Search..." />
      <select name={language} onChange={(e) => {dispatch(changeLanguage(e.target.value))}}>
        <option value="en-EN">EN</option>
        <option value="ru-RU">RU</option>
      </select>
    </div>
     
  </header>
  
  )
}

export default Header
