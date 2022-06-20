import React, { Component } from 'react'
import Card from './Card'

class Cardlist extends Component {
    constructor(){
        super();
        this.state = {
            passengers: [],
        }

    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response=> response.json())
          .then(data => this.setState({ passengers: data.people}))
      }

  render() {
    const {passengers} = this.state;
    return (
      <div className='card-list'>
        {
          passengers.map((p, i)=>{
            return(
              <Card 
              key={i}
              name={passengers[i].name}
              craft={passengers[i].craft}
              image={[i]}
              />
            );
          })
        }
      </div>
    )
  }
}
export default Cardlist;
