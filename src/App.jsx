import {index} from "./components/services/starshipServices";
import StarshipSearch from "./components/starshipSearch";
import StarshipList from "./components/starshipList";
import { useState, useEffect } from "react";
import "./App.css"

const App = () => {
  // State variable
  const [starships, setStarships] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [input, setInput] = useState("")
  
  useEffect(() => {

    // Function to get starships
    const getStarships = async () => {
      const starships = await index()
      setStarships(starships.results) 
      setLoaded(true) 
    }
    getStarships()
    
  },[])


  const getSearchValue = (value) => {
    return value
  }

 

  return (
    <>
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch searchValue={getSearchValue} setInput={setInput} input={input}/>
      {
        !loaded 
        ? (<h1>Loading...</h1>) 
        : <StarshipList  starships={starships} searchValue={input}/>
      }
    </main>
      
    </>
  );
}

export default App
