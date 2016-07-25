import dispatcher from '../dispatcher'
import {INCREMENT} from '../constants/actionTypes.js'
import {EventEmitter} from 'events'

let _count = 0

function getState() {
  return _count
}

function setState() {
  _count++
  countStore.emitChange()
}

let countStore = Object.assign(EventEmitter.prototype, {
  getState: getState,
  emitChange: function () {
    this.emit('CHANGE')
  },
  addListener: function(cb) {
    this.on('CHANGE', cb)
  }
})

export default countStore

dispatcher.register((action) => {
  switch(action.type) {
    case INCREMENT:
      setState()
      break
  }
})
