import {INCREMENT} from '../constants/actionTypes.js'
import dispatcher from '../dispatcher'

export function increment() {
  dispatcher.dispatch({
    type: INCREMENT
  })
}
