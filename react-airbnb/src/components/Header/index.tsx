import React, { memo } from 'react'

import HeaderLeft from './c-cps/HeaderLeft'
import HeaderCenter from './c-cps/HeaderCenter'
import HeaderRight from './c-cps/HeaderRight'
import HeaderWrapper from './style'

const index = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default index
