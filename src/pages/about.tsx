import { useLocation } from 'react-router-dom'

const About = () => {
  const location = useLocation()

  console.log(location)

  return <h2>About</h2>
}

export default About
