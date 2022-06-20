import React from 'react'
import './Passengers'
import './Cardlist'

const Card = ({name, craft, image}) => {
  return (
    <div className='passenger-card'>
        <img src={`https://robohash.org/${image}?size=200x200`} alt={'passenger'}/>
        <div className='passenger-card-textbox'>
            <h4>{name}</h4>
            <h6>is in</h6>
            <h5>{craft}</h5>
        </div>
    </div>
  )
}

export default Card;