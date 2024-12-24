import { useState, useEffect, useContext } from 'react';
import { charactersContext } from '../../Context/index.jsx';

import Navigation from '../../Components/Navigation/Navigation.jsx'
import '../Characters/Characters.css'
import Card from '../../Components/Card/Card.jsx'
import Filter from '../../Components/Filter/Filter.jsx'


export default function Characters() {
    let [data, setData] = useState([])
    let [dataCompleta, setDataCompleta] = useState([])
    let [filtrosAplicados, setFiltrosAplicados] = useState([])
    let [show, setShow] = useState(false)

    let filterName = ["Character Alive", "Character Dead", "Female", "Male", "Origin Unknown"]

    const mostrarData = async () => {

        let infoApi = await fetch("https://rickandmortyapi.com/api/character")

            .then((resp) => { return resp.json() })
            .catch((error) => console.log("error:" + error));

        setDataCompleta(infoApi.results);
        setData(infoApi.results)
    }

    const filtrar = (inputData) => {


        let pulsado = inputData.checked;

        let filtroPulsado = inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)


        if (pulsado) {
            setFiltrosAplicados([...filtrosAplicados, filtroPulsado])

        } else {
            setData(dataCompleta)
            let filtrosActualizado = filtrosAplicados.filter((fil) => { return fil !== filtroPulsado })
            setFiltrosAplicados(filtrosActualizado)
        }

    }

    useEffect(() => {

        filtrosAplicados.forEach((filtro) => {
            let nuevaLista;

            switch (filtro) {
                case "Character Alive":
                    nuevaLista = data.filter((personaje) => { return personaje.status === "Alive" })
                    break;

                case "Character Dead":
                    nuevaLista = data.filter((personaje) => { return personaje.status === "Dead" })
                    break;

                case "Female":
                    nuevaLista = data.filter((personaje) => { return personaje.gender === "Female" })
                    break;

                case "Male":
                    nuevaLista = data.filter((personaje) => { return personaje.gender === "Male" })
                    break;

                case "Origin Unknown":
                    nuevaLista = data.filter((personaje) => { return personaje.origin.name == "unknown" })
                    break;

            }
            setData(nuevaLista)

        })
    }, [filtrosAplicados])


    useEffect(() => {
        mostrarData()
    }, [])


    return (
        <div>
            <Navigation pageNAme={'Characters'} />

            <h2 className='Titulo-2'>Filters</h2>
            <div className='Filtro-Respon d-flex gap-3 my-3' >
                <h2 className='Filters ' >Filters</h2>
                 <svg className='Filter-Icon btn btn-primary' data-bs-toggle="collapse" href="#formulario2" role="button" aria-expanded="false" aria-controls="formulario2"  width="60" height="50" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3.5" x2="40" y2="3.5" stroke="#6ECCAF" />
                    <line y1="14.5" x2="40" y2="14.5" stroke="#6ECCAF" />
                    <line y1="26.5" x2="40" y2="26.5" stroke="#6ECCAF" />
                    <circle cx="33.5" cy="3.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                    <circle cx="20.5" cy="26.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                    <circle cx="7.5" cy="14.5" r="3" fill="#344D67" stroke="#6ECCAF" />
                </svg>

            </div>
            <div className='formulario2 collapse multi-collapse' id='formulario2'>
         <form className={'formulario2 row gap-2'}>
                    {
                        filterName.map((filter) => {
                            return <Filter key={filter} title={filter} filtar={filtrar} />
                        })
                    }
                </form>
                
            </div>

            <section className='Tarjetas-Completas d-flex gap-2 flex-wrap'>
                {

                    data.length !== 0 ?
                        data.map((personaje) => {
                            return <Card key={personaje.id} personaje={personaje} />
                        })
                        :
                        <div className='Aviso' >
                            <p className='alert'>
                                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
                        </div>
                }

            </section>
        </div>

    )
}