import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    activeGame: {},
    activeUser: undefined
  },
  reducers: {
    loadGame: (state, action) => {
      if(JSON.stringify(state.activeGame) !== JSON.stringify(action.payload) ) {
        state.activeGame = action.payload
        if(state.activeUser) {
            action.payload.users.forEach(user => {
                if(user.name === state.activeUser.name) {
                    state.activeUser = user
                }
            });
        }
      }
    },
    setActiveUser: (state, action) => {
        state.activeUser = action.payload
    }
  },
})

export const { loadGame, setActiveUser } = gameSlice.actions

export default gameSlice.reducer