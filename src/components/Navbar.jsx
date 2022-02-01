import { Notifications, ArrowDropDown } from '@material-ui/icons'
import Search from './Search'

const Navbar = ({ handleOnSubmit, handleOnChange, searchTerm }) => {
  return (
    <div className='text-white'>
      <div className='flex items-center justify-between h-16 w-full fixed zIndex: 999 bg-black top-0 mb-9'>
        <div className='flex items-center'>
          <img
            className='h-6 m-10'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt='Netflix'
          />
          <span className='mr-5 cursor-pointer'>Inicio</span>
          <span className='mr-5 cursor-pointer'>Series</span>
          <span className='mr-5 cursor-pointer'>Peliculas</span>
          <span className='mr-5 cursor-pointer'>Novedades Populares</span>
          <span className='mr-5 cursor-pointer'>Mi Lista</span>
        </div>
        <div className='flex items-center'>
          <div className='container flex mx-auto bg-black'>
            <div className='flex border-2   h-7 rounded-sm mr-5'>
              <button className='flex items-center  px-4 border-r'>
                <svg
                  className='w-5 h-5 text-gray-600 '
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z'></path>
                </svg>
              </button>
              <Search
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}
                searchTerm={searchTerm}
              />
            </div>
          </div>
          <span className='mt-0 mr-5 cursor-pointer'>Ninos</span>
          <Notifications className='mt-0 mr-5 cursor-pointer' />
          <img
            className='w-8 h-8 mr-2 rounded-sm object-cover cursor-pointer'
            src='https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg'
            alt='Avatar'
          />
          <div className=''>
            <ArrowDropDown className='mt-0 mr-5 cursor-pointer' />
            <div className='hidden bg-black'>
              <span className='p-2.5 cursor-pointer'>Settings</span>
              <span className='p-2.5 cursor-pointer'>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
