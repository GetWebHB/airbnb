import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state, { payload }) {
      state.counter += payload
    },
    decrement(state, { payload }) {
      state.counter -= payload
    },
  },
})

export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
