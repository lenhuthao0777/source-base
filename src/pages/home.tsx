import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <input type='text' />
      <button
        onClick={() =>
          navigate('/about#abc=1', {
            replace: true,
            state: {
              name: 'test'
            }
          })
        }
      >
        click
      </button>
    </div>
  )
}

export default Home
