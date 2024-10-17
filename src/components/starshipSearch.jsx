const StarshipSearch = ({searchValue, setInput, input}) =>  {

  const handleChange = (e) => {
    setInput(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    searchValue(input)
    setInput("")

  }

  return (
    <div>
      <h3>Search</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Term</label>
        <input onChange={handleChange} type="text" name="search" value={input} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default StarshipSearch
