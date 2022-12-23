import React, { memo } from 'react'
import IconSearch from '@/assets/svg/icon_search'
import CenterWrapper from './style'

const index = memo(() => {
  return <CenterWrapper>
    <span className='text'>搜索房源和体验</span>
    <div className="search-btn">
      <IconSearch />
    </div>
  </CenterWrapper>
})

export default index
