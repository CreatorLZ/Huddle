import React from 'react'
import { StyledCard } from './Cardstyles'

const Card = ({item}) => {
  return (
    <StyledCard layout={item.id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div>
        <img src={`./images/${item.image}`} alt='' />
      </div>
      </StyledCard>
  )
}

export default Card
