import 'raf-polyfill'
import { useFakeTimers } from 'sinon'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

require('regenerator-runtime/runtime')

global.console.warn = () => { }
global.console.error = () => { }

global.clock = useFakeTimers()
global.navigator = { language: 'en-US' }
