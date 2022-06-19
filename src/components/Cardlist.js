import React, { Component } from 'react'
import Card from './Card'

class Cardlist extends Component {
    constructor(){
        super();
        this.state = {
            passengers: ''
        }

    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response=> response.json())
          .then(data => {this.setState({ passengers: data.people})})
      }

  render() {
    const {passengers} = this.state;
    console.log(passengers[1])
    return (
      <div>
        <Card />
      </div>
    )
  }
}
export default Cardlist;
