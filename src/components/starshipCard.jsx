const StarshipCard = ({data}) => {
  
  return (
      <li>
        <h2>{data.name}</h2>
        <p>Class: {data.starship_class}</p>
        <p>Manufacturer: {data.manufacturer}</p>
        <p>Model: {data.model}</p>
      </li>
  )
}

export default StarshipCard
