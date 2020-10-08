import { createStore } from 'redux'
import { rootReducer, initialState } from './store/Date/index'

export const store = createStore(rootReducer, initialState)