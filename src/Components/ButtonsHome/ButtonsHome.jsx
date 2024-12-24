import './button.css'
import {Link} from 'react-router'

export default function ButtonsHome({contenido}) {

    return(
       
        <Link to={contenido} className="buttonHome btn col-4 ">{contenido}</Link>
    )
}