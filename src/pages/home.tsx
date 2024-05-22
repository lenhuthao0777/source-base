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

  debug(process.env.API_ENDPOINT)

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <div>
      <ul className='grid grid-cols-4 gap-2'>
        {data?.map((item) => {
          return (
            <li key={item.id} className='text-gray-500 px-2 py-2'>
              <div className='bg-white shadow-md rounded-lg p-4 flex flex-col'>
                <img src={'/icon.svg'} alt='name' className='w-full h-40 object-fill rounded-t-lg' />
                <h3 className='text-xl font-semibold text-gray-800 mt-2'>{item.name}</h3>
                <p className='text-gray-600 text-sm mb-2'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero repudiandae sint nobis porro nostrum
                  quo repellendus reprehenderit quasi deleniti beatae.
                </p>
                {/* Add more elements and styles as needed */}
              </div>
            </li>
          )
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
