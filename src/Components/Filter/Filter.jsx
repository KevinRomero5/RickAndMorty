import '../Filter/Filter.css'
export default function Filter({title,filtar}){


    return(

        <div className='filtro form-check form-switch col-2 bd-highlight'>
            <input className='checkbox form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
            <label className='filtro-2 form-check-label' htmlFor={title}>{title}</label>
        </div>

    )
}