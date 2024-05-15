import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { debug } from '../lib/debug'
import Book from '../api/book'

const Home = () => {
  const navigate = useNavigate()

  const book = new Book()

  useEffect(() => {
    const fetchApi = async () => {
      const res = await book.index()
      debug(res)
    }

    fetchApi()
  }, [])
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
