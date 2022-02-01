const Card = ({ movie }) => {
  return (
    <div className='relative block bg-black group w-36 h-56 m-2 transform transition duration-500 hover:scale-110'>
      <img
        className='absolute rounded inset-0 w-full transition-opacity  group-hover:opacity-50'
        src={movie.image}
        alt={movie.title}
      />
      <div className='relative p-8'>
        <div className='absolute'>
          <div className='relative bottom-0 left-0 right-0 transition-all transform translate-y-7 opacity-0  group-hover:opacity-100 group-hover:translate-y-0'>
            <h3 className='text-1xl font-bold text-white'>{movie.title}</h3>
            <span className='text-xl font-bold text-white'>{movie.year}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
