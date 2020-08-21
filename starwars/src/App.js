import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response);
        const characterList = response.data.results;
        console.log("Response DATA", characterList);
        setCharacters(characterList);
      })
      .catch((error) => {
        console.log("The data was not returned.", error);
      });
  }, []);


  return (
    <>
      <div className="Cards">
        {characters.map((obj) => {
          return (
            <Character
              key={obj.url}
              name={obj.name}
              eyecolor={obj.eye_color}
              skincolor={obj.skin_color}
              haircolor={obj.hair_color}
              gender={obj.gender}
              height={obj.height}
              mass={obj.mass}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
