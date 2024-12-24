import { Link } from 'react-router'
import '../Navigation/nav.css';

export default function Navigation({ pageName }) {
    return (
        <nav >
          
                <h2 className='Rick-Morty'> <Link to="/">Rick & Morty</Link></h2>
<div className='Prueba'>
             <div className='Menu-Burguer navbar-toggler collapsed' onClick={() => { setShow(!show) }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#6ECCAF" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

</div>
<div className='Lista'>
                    <ul className='lista'>
                        <li  className='personajes'><Link to="/Characters" className={pageName === "Characters" ? "activo p-2" : 'p-2'}>Characters</Link></li>
                        <li className='contacto'><Link to="/Contact" className={pageName === "Contact" ? "activo p-2" : 'p-2'}>Contact</Link></li>
                    </ul>
                    </div>
                    </div>
        </nav>
    )
}