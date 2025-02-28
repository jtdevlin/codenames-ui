import { configureStore } from '@reduxjs/toolkit'
import gameReducer from './redux/gameReducer'

export default configureStore({
  reducer: {
    gameReducer: gameReducer
  }
})