import React from 'react'
import './Passengers'
import './Cardlist'

const Card = (props) => {
  return (
    <div className='passenger-card'>
        <img src='https://robohash.org/joe/?size=200x200' alt={'passenger'}/>
        <div className='passenger-card-textbox'>
            <h4>{props.name}</h4>
            <h6>is in</h6>
            <h5>{props.craft}</h5>
        </div>
    </div>
  )
}

export default Card;