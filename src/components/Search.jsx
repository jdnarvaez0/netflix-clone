const Search = ({ handleOnSubmit, handleOnChange, searchTerm }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className=' h-5 flex-col  bg-transparent p-1'
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
  )
}

export default Search
