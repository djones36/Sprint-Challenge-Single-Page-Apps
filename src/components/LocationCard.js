import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return(
    <Card>
    <Card.Content>
      <Card.Header>{loc.name}</Card.Header>
      <Card.Meta>{loc.type}</Card.Meta>
      <Card.Description>
       {loc.dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <p>{loc.residents}</p>
    </Card.Content>
  </Card>
  )
}
