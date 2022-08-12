import React, { Component } from 'react'
import Card from './Card'
const Endpoint = 'https://jsonplaceholder.typicode.com/users'
class Cardlist extends Component {
    constructor(){
        super();
        this.state = {
            passengers: [],
        }
    }
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(data => this.setState({ passengers: data}))
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
              craft={passengers[i].email}
              phone={passengers[i].phone}
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
