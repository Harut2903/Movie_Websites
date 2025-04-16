
import { GenresType } from '../../types'
import './ui.css'

type BTNPropsType = {
    genre: GenresType
}
const BTN = ({ genre }: BTNPropsType) => {
    return (
        <button className='genres-btn'>
            {
                genre.name
            }
        </button>
    )
}

export default BTN