import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard"; 

export default function EpisodeList() {
    const [episodeState, SetEpisode] = useState([])
    useEffect(() => {
      axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(`Epispode: ${res.data.results}`);
        SetEpisode(res.data.results);
      })
      .catch(err => console.log(err.response));
    }, []);
    
    if(!episodeState)return <h3>loading...</h3>;
  
    return (
      <section className="episode-list grid-view">
        {episodeState.map((epi) => {
          return(
            <EpisodeCard key={epi.id} epi={epi} />
          )
        })}
      </section>
    );
}