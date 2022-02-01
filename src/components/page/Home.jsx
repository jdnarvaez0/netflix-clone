import { useEffect, useState } from 'react'
import Movie from '../Movie.jsx'
import Navbar from '../Navbar.jsx'
// import Header from '../Header'


// const API = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=3f61aaeb'
// const SEACRH_API = 'http://www.omdbapi.com/?apikey=3f61aaeb&s='
const API = 'https://imdb-api.com/en/API/Top250Movies/k_1eg8be61'
const SEACRH_API = 'https://imdb-api.com/en/API/Search/k_1eg8be61/'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items)
        // console.log(data.items)
      })
  }, [])

  function handleOnSubmit(e) {
    e.preventDefault()

    fetch(SEACRH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
        // console.log(data.results)
      })
  }

  function handleOnChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Navbar
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        searchTerm={searchTerm}
      />
      {/* <Header /> */}
      <div className='bg-black m-20'>
        <h1 className='text-white font-bold text-2xl p-4'>Peliculas</h1>
        <Movie data={movies} />
      </div>
    </>
  )
}

export default Home
