import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGoodPrice } from '@/services/home'

const fetchGoodPrice = createAsyncThunk('home/goodPrice', async () => {
  const res = await getGoodPrice()

  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
  },
  reducers: {
    goodPriceAction(state, { payload }) {
      state.goodPrice = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGoodPrice.fulfilled, (state, action) => {
      state.goodPrice = action.payload
    })
  },
})

export default homeSlice.reducer
export { fetchGoodPrice }
// export const {} = homeSlice.actions
