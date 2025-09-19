import Hero from "./Hero"
import SquareUp from "./SquareUp"
import Story from "./Story"
import Today from "./Today"

const About = () => {
  return (
    <div className='bg-black min-h-screen overflow-hidden z-30'>

      <Hero/>
      <SquareUp/>
      <Story/>
      <Today/>
    </div>
  )
}

export default About