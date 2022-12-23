import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/features/counterSlice'
import type { RootState } from '@/store'

import Banner from './c-cpns/Banner'
import HomeWrapper from './style'

const Home = memo(() => {
  const { counter } = useSelector(
    (state: RootState) => ({
      counter: state.counter.counter,
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()

  return (
    <HomeWrapper>
      <Banner />
    </HomeWrapper>
  )
})

export default Home
