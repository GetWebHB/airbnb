import React, { memo } from 'react'
import Room from '@/components/Room'
import AreaRoomWrapper from './style'
import type { RoomData } from './types'

interface IProps {
  dataItem: any
}

const AreaRoom = memo(({ dataItem }: IProps) => {
  const { title, subTittle, list } = dataItem
  return (
    <AreaRoomWrapper>
      <div className="head">
        <h3 className="tit">{title}</h3>
        <p className="sub-tit">{subTittle}</p>
      </div>
      <div className="room-list">
        {list?.slice(0, 8)?.map((item: RoomData) => {
          return <Room key={item.id} roomData={item} />
        })}
      </div>
    </AreaRoomWrapper>
  )
})

export default AreaRoom
