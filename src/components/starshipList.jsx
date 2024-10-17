import StarshipCard from "./starshipCard"

const StarshipList = ({starships, searchValue}) => {
    console.log(searchValue)
    const displayStarships = starships.map(starship => {
        return (
             <StarshipCard  key={starship.name} data={starship}/>
        )
      })
  return (
    <section>
        <h3>Starships</h3>
        <p>Number of results: {displayStarships.length}</p>
        <ul>
        {displayStarships}
        </ul>
    </section>
  )
}

export default StarshipList
