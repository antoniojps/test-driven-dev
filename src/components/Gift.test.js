import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'
import toJson from "enzyme-to-json";

describe('Gift', () => {
  const gift = shallow(<Gift />)

  it('renders correctly', () => {
    expect(toJson(gift)).toMatchSnapshot()
  })

  it('initializes a persona and present in `state`', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: ''
    })
  })

  describe('when typing into the person input', () => {
    const personInputString = 'Dad'
    beforeEach(() => {
      gift.find('.input-person').simulate('change', {
        target: {
          value: personInputString
        }
      })
    })

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(personInputString)
    })
  })

  describe('when typing into the present input', () => {
    const presentInputValue = 'Surfboard'
    beforeEach(() => {
      gift.find('.input-present').simulate('change', {
        target: {
          value: presentInputValue
        }
      })
    })

    it('updates the person in `state`', () => {
      expect(gift.state().present).toEqual(presentInputValue)
    })
  })
})