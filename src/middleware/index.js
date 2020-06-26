import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux-thunk'

export default applyMiddleware(
  thunk,
  logger,
  checker,

)