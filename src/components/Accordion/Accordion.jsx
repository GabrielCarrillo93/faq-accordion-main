
import AccordionItem from '../AccordionItem/AccordionItem'

const Accordion = () => {
    
  return (
    <>
        <AccordionItem 
            pregunta="What is Frontend Mentor, and how will it help me?"
            respuesta="Frontend Mentor offers realistic coding challenges to help developers improve their 
            frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
            all levels and ideal for portfolio building."
            />
        <AccordionItem 
            pregunta="Is Frontend Mentor free?"
            respuesta="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
            option providing access to a range of projects suitable for all skill levels."
            />
        <AccordionItem 
            pregunta="Can I use Frontend Mentor projects in my portfolio?"
            respuesta="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
            way to showcase your skills to potential employers!"
            />
        <AccordionItem 
            pregunta="How can I get help if I'm stuck on a Frontend Mentor challenge?"
            respuesta="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
            channel where you can ask questions and seek support from other community members."
            />
    </>
  )
}

export default Accordion