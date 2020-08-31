import React, { Component } from 'react'
import Gift from './Gift'
import { Button } from 'react-bootstrap'

class App extends Component {

  constructor() {
    super()

    this.state = {
      gifts: []
    }
  }

  addGift = () => {
    const { gifts } = this.state

    const ids = gifts.map(gift => gift.id)
    const nextId = ids.length > 0 ? Math.max(...ids) + 1 : 1

    this.setState({
      gifts: [
        ...gifts,
        {
          id: nextId ,
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => (
            <Gift key={gift.id}></Gift>
          ))}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App