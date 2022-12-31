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
          {footerList.map((item, idx) => {
            const { title, list } = item
            return (
              <dl key={idx}>
                <dt>{title}</dt>
                {list.map((item, idy) => (
                  <dd key={idy}>{item}</dd>
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
                <span>京ICP备16017121号</span>
                <span>京ICP证 160773号 </span>
                <span>京公网安备 11010502032345号</span>
                <i>安彼迎网络（北京）有限公司</i>
                <span>营业执照</span>
              </div>
              <div className="links-btm">
                <i>© 2022 Airbnb, Inc. All rights reserved.</i>
                <span>条款</span>
                <span>· 隐私政策</span>
                <span> · 网站地图</span>
                <span>· 全国旅游投诉渠道 12301</span>
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
