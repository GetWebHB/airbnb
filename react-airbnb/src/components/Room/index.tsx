import React, { memo } from 'react'
import RoomWrapper from './style'
import { Rate } from 'antd'

import type { RoomData } from '@/views/Home/c-cpns/AreaRoom/types'

interface IProps {
  roomData: RoomData
}

const Room = memo(({ roomData }: IProps) => {
  const { picture_url, verify_info, name, price_format, star_rating = 5 } = roomData
  return (
    <RoomWrapper>
      <img src={picture_url} alt="" />
      <div className="room-info">
        <p className="desc">{verify_info.messages.join(' ')}</p>
        <h3>{name}</h3>
        <p className="price">{price_format}/晚</p>
        <Rate
          className="rate"
          disabled
          defaultValue={star_rating}
          allowHalf
          style={{ color: '#008489' }}
        />
      </div>
    </RoomWrapper>
  )
})

export default Room
