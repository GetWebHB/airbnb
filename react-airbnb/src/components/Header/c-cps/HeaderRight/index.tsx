import React, { useState, useEffect, memo } from 'react'
import IconMenu from '@/assets/svg/icon_menu'
import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'
import RightWrapper from './style'

const index = memo(() => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const hideDownMenu = () => {
      setIsShow(false)
    }
    window.addEventListener('click', hideDownMenu, true)

    return () => {
      window.removeEventListener('click', hideDownMenu)
    }
  }, [])

  return (
    <RightWrapper>
      <span className="login">登录</span>
      <span className="register">注册</span>
      <span className="lang">
        <IconGlobal />
      </span>
      <div className="user-panel" onClick={() => setIsShow(true)}>
        <IconMenu />
        <IconAvatar />
      </div>
      {isShow && (
        <div className="down-menu">
          <div className="menu-top">
            <span className="register">注册</span>
            <span>登录</span>
          </div>
          <div className="menu-bottom">
            <span>来爱彼迎发布房源</span>
            <span>开展体验</span>
            <span>帮助</span>
          </div>
        </div>
      )}
    </RightWrapper>
  )
})

export default index
