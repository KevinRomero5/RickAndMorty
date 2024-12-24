import { useState } from "react"
import '../Card/Card.css'

export default function Card({ personaje }) {
    let [ocultar, setOcultar] = useState(true)
    return (
        <div className='tarjeta d-flex gap-2'>
            <div className="tarjeta2">
                <div className="img-character">
                    <img src={personaje.image} />
                </div>
                <h2 className="Name-character">{personaje.name}</h2>
                <button
                    onClick={() => setOcultar(false)}
                    className={ocultar ? "boton btn" : "d-none"}>Know More</button>
            </div>
            {ocultar ? '' :
                <div className="info-tarjeta px-5 py-2" >
                    <button onClick={() => setOcultar(true)}>X</button>
                    <ul className="Lista-Info">
                        <li className="status"><p>Character Status {personaje.status} </p></li>
                        <li className="species"><h4> Species</h4> <p>{personaje.species}</p></li>
                    <li className="origin"><h4>Origin </h4><p>{personaje.origin.name}</p></li>
                    <li className="gender"><h4>Gender</h4> <p>{personaje.gender}</p></li>
                </ul>
                </div>}

        </div >
    )
}