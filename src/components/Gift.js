import React, { Component } from 'react'
import{ Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap'

class Gift extends Component {
  constructor() {
    super()
    this.state = {
      person: '',
      present: ''
    }
  }

  handlePersonChange = (event) => {
    this.setState({
      person: event.target.value
    })
  }

  handlePresentChange = (event) => {
    this.setState({
      present: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl className="input-person" onChange={this.handlePersonChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl className="input-present" onChange={this.handlePresentChange} />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Gift