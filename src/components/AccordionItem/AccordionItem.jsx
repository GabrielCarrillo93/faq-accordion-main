import signoMas from '../../assets/images/icon-plus.svg'
import signoMenos from '../../assets/images/icon-minus.svg'
import './AccordionItem.css'

// eslint-disable-next-line react/prop-types
const AccordionItem = ({pregunta, respuesta}) => {
    return (
        <>
            <div className="tituloContainer">
                <h2 className='titulo'>{pregunta}</h2>
                <img src={signoMas} alt="" />
            </div>
            <p>{respuesta}</p>
        </>
    )
}

export default AccordionItem