import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, SetCharacter] = useState({})
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .post("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res.data.results);
      SetCharacter(res.data.results);
    })
    .catch(err => console.log(err.response));
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
