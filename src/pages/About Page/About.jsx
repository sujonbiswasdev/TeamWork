import Hero from "./Hero"
import SquareUp from "./SquareUp"
import Story from "./Story"
import Today from "./Today"

const About = () => {
  return (
    <div className='bg-black min-h-screen overflow-hidden'>

      <Hero/>
      <SquareUp/>
      <Story/>
      <Today/>

      <button  className='font-Barlow text-white bg-primary ' >Button</button>

    </div>
  )
}

export default About