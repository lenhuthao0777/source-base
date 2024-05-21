import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { debug } from '../lib/debug'
import Book from '../apis/book'

type TBook = { name: string; author: string; topic: string; id: number | string }

const Home = () => {
  const navigate = useNavigate()

  const book = new Book()

  const { data, isLoading } = useQuery<TBook[]>({
    queryKey: ['books'],
    queryFn: () => {
      return book.index()
    }
  })

  debug(data)

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <div>
      <ul>
        {data?.map((item) => {
          return <li key={item.id} className='text-gray-500 px-2 py-2'>{item.name}</li>
        })}
      </ul>
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
        click1
      </button>
    </div>
  )
}

export default Home
