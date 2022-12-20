import React, { memo } from 'react'

import IconLogo from '@/assets/svg/icon_logo'
import LeftWrapper from './style'

const index = memo(() => {
  return (
    <LeftWrapper>
      <h1 className="logo">
        <IconLogo />
        爱彼迎
      </h1>
    </LeftWrapper>
  )
})

export default index
