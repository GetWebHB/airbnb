import React, { memo } from 'react'

import IconFooterLogo from '@/assets/svg/icon_footer'
import IconWB from '@/assets/svg/icon_wb'
import IconWX from '@/assets/svg/icon_wx'

import FooterWrapper from './style'
import { footerList } from '@/assets/data/index'

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrap_1080">
        <div className="foot">
          {footerList.map((item) => {
            const { title, list } = item
            return (
              <dl>
                <dt>{title}</dt>
                {list.map((item) => (
                  <dd>{item}</dd>
                ))}
              </dl>
            )
          })}
        </div>
        <div className="copyright">
          <div className="copyright-left">
            <IconFooterLogo />

            <div className="links">
              <div className="links-top">
                <a href="javaScript:;">京ICP备16017121号</a>
                <a href="javaScript:;">京ICP证 160773号 </a>
                <a href="javaScript:;">京公网安备 11010502032345号</a>
                <span>安彼迎网络（北京）有限公司</span>
                <a href="javaScript:;">营业执照</a>
              </div>
              <div className="links-btm">
                <span>© 2022 Airbnb, Inc. All rights reserved.</span>
                <a href="javaScript:;">条款</a>
                <a href="javaScript:;">· 隐私政策</a>
                <a href="javaScript:;"> · 网站地图</a>
                <a href="javaScript:;">· 全国旅游投诉渠道 12301</a>
              </div>
            </div>
          </div>
          <div className="copyright-right">
            <IconWB />
            <IconWX />
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default Footer
