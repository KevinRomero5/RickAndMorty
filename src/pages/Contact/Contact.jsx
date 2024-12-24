import Navigation from '../../Components/Navigation/Navigation.jsx'
import '../Contact/Contact.css'


export default function Contact() {
    return (
        <div>

            <Navigation pageNAme={'Contact'} />

            <div className='contenedor container-fluid'>
                <div className='fondo-gris m-auto mt-5 w-75 h-75'>
                    <h2 className='Titulo-Contact row'>Contact</h2>
                    <h3 className='Leave row'>Leave us your information so we can contact you</h3>

                    <form className='Formulario-Contact g-3 p-4'>
                       <div className="container">
                        <div className="row">
                            <div className='col-12 col-md-6'>
                                    <label htmlFor='name' className='Name form-label'>Name</label>
                                    <input type='text' className='form-control  p-2' id='name' />
                                </div>
                                <div className='col-12 col-md-6'>
                                    <label htmlFor='email' className='Email form-label'>Email</label>
                                    <input type="email" className='form-control p-2' id='email' />
                                </div>
                        </div>
                 
                        <div className='Messege col-12'>
                            <label htmlFor='messege'>Messege</label>
                            <textarea id='messege'></textarea>  
                        </div>
                        <div className='send col-12'>
                            <input type='submit' value={"Send"} />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}