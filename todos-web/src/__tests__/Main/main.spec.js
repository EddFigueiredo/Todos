import React from 'react'
import { shallow } from 'enzyme'
import { Main } from 'containers/Main'

describe('<Main >/', () => {
  it('renders', () => {
    const editor = shallow(<Main />)
    console.log(editor)
    expect(editor.find('div').lenght).toEqual(1)
  })
})
