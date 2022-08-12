import React from 'react'
import './Passengers'
import './Cardlist'

const Card = ({name, craft, image, phone}) => {
  return (
    <div className='passenger-card'>
        <img src={`https://robohash.org/${image}?size=200x200`} alt={'passenger'}/>
        <div className='passenger-card-textbox'>
            <h4>{name}</h4>
            <h6>{craft}</h6>
            <h6>{phone}</h6>
        </div>
    </div>
  )
}

export default Card;