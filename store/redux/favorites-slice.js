import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    ids: []
  },
  reducers: {
    addFavorite: (state, action) => {
      // @ts-ignore
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      // @ts-ignore
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  },
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;