import { useState } from 'react'
import signoMas from '../../assets/images/icon-plus.svg'
import signoMenos from '../../assets/images/icon-minus.svg'
import './AccordionItem.css'

// eslint-disable-next-line react/prop-types
const AccordionItem = ({pregunta, respuesta}) => {
    const [show, setShow] = useState(null)

    const handleShowClick = () => {
        show ? setShow(null) : setShow(true)
    }
    return (
        <section>
            <div 
                className="tituloContainer"
                onClick={handleShowClick}>
                <h2 className='titulo'>{pregunta}</h2>
                <img src={show ? signoMenos : signoMas} alt="" />
            </div>
            <p className={show ? "" : "none"}>{respuesta}</p>
        </section> 
    )
}

export default AccordionItem