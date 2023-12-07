/* eslint-disable react/no-unescaped-entities */
import './App.css'
import brillitos from './assets/images/icon-star.svg'
import Accordion from './components/Accordion/Accordion'

function App() {
  
  return (
    <div className='contenedor'>
        <div className='tituloprincipal'>
            <img src={brillitos} alt="" />
            <h1>FAQs</h1>
        </div>
        <Accordion/>
        <footer>
            <p>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://github.com/GabrielCarrillo93" target='_blank' rel='noreferrer'>GabrielCarrillo93</a>.
            </p>
        </footer>
    </div>
  )
}

export default App
