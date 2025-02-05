import { useEffect,} from 'react'
import './Header.css'
import { getGenres } from '../../store/Slices/genresSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'



const Header = () => {
    const dispatch = useAppDispatch()
   const {genres} = useAppSelector((state) => state.genresData)

useEffect(() => {
    dispatch(getGenres())
}, [])

  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

export default Header
