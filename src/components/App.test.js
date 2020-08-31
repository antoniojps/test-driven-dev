import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import toJson from "enzyme-to-json";

const app = shallow(<App />)

afterEach(() => {
  app.setState({
    gifts: []
  })
})

describe('App', () => {
  it('renders correctly', () => {
    expect(toJson(app)).toMatchSnapshot()
  })

  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click')
    })

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])
    })

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })
})