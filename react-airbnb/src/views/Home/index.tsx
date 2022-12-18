import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/features/counterSlice'
import type { RootState } from '@/store'

const Home = memo(() => {
  const { counter } = useSelector(
    (state: RootState) => ({
      counter: state.counter.counter,
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment(10))}>+10</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
    </div>
  )
})

export default Home
