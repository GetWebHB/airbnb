import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { fetchGoodPrice } from '@/store/features/homeSlice'
import type { AppDispatch, RootState } from '@/store'

import Banner from './c-cpns/Banner'
import AreaRoom from './c-cpns/AreaRoom'
import HomeWrapper from './style'

const Home = memo(() => {
  const { goodPrice } = useSelector(
    (state: RootState) => ({ goodPrice: state.home.goodPrice }),
    shallowEqual,
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchGoodPrice())
  }, [dispatch])

  return (
    <HomeWrapper>
      <Banner />
      <AreaRoom dataItem={goodPrice} />
    </HomeWrapper>
  )
})

export default Home
