import { Link } from 'react-router'
import '../Navigation/nav.css';


export default function Navigation({ pageName }) {
    return (
        <nav >

            <h2 className='Rick-Morty'> <Link to="/">Rick & Morty</Link></h2>
         
                <div className='Menu-Burguer' >
                    <svg className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="hamburguesa" aria-expanded="false" aria-controls="hamburguesa" xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="#6ECCAF" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>

                </div>
                <div className='Lista'>
                    <ul className='lista collapse' id="hamburguesa">
                        <li className='collapse'><Link to="/Characters" className={pageName === "Characters" ? "activo p-2" : 'p-2'}>Characters</Link></li>
                        <li className='collapse'><Link to="/Contact" className={pageName === "Contact" ? "activo p-2" : 'p-2'}>Contact</Link></li>
                    </ul>
                </div>

        </nav>
    )
}