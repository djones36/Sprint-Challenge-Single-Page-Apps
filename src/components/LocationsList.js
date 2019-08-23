import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"; 

export default function LocationsList() {
    const [locationState, SetLocation] = useState({})
    useEffect(() => {
      axios
    //   .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        SetLocation(res.data.results);
      })
      .catch(err => console.log(err.response));
    }, []);
    
    if(!LocationState)return <h3>loading...</h3>;
  
    return (
      <section className="location-list grid-view">
        {locationState.map((loc) => {
          return(
            <LocationCard key={loc.id} loc={loc} />
          )
        })}
      </section>
    );
}
