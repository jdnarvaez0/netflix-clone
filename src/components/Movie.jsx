import Card from './Card'

const Movie = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? (
        <div className='flex flex-wrap'>
          {data.map((pelicula) => {
            return (
              <div key={pelicula.id}>
                <Card movie={pelicula} />
              </div>
            )
          })}
        </div>
      ) : (
        <div className='text-white text-xl'>Cargando...</div>
      )}
    </div>
  )
}

export default Movie
