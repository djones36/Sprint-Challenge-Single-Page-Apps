import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterState, SetCharacter] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(`Character" ${res.data.results}`);
      SetCharacter(res.data.results);
    })
    .catch(err => console.log(err.response));
  }, []);
  
  if(!characterState)return <h3>loading...</h3>;

  return (
    <section className="character-list grid-view">
      {characterState.map((char) => {
        return(
          <CharacterCard key={char.id} char={char} />
        )
      })}
    </section>
  );
}
