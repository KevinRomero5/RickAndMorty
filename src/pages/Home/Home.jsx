import ButtonsHome from '../../Components/ButtonsHome/ButtonsHome.jsx'
import '../Home/Home.css'

export default function Home() {
    return (
        <section className='interior-contenedor container-fluid d-flex flex-column'>
            <div className='fondo-blanco d-flex flex-column justify-content-center'>
                <h1 className='Tittle-Proyect row' >Proyect Rick & Morty</h1>
                <h2 className='Helcome'>Helcome to Rick & Morty Proyect!</h2>
                <p className='p-home '>This proyect was made for practising React and to made a functional website</p>

                <p className='p-home '>In this website you can know information of the characters of this animated series.</p>

                <p className='p-home'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                <h3 className='Lets-go'>Lets go!</h3>
            
              <div className='Buttons-Home'>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                        </div>
            </div>
       </section>
    )
}
