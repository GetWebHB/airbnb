import styled from 'styled-components'

const hoverPointer = '&:hover {cursor: pointer};'

const RoomWrapper = styled.div`
  width: 25%;
  padding: 0 8px 12px;
  img {
    width: 100%;
    height: 183px;
    ${hoverPointer}
  }
  .room-info {
    margin-top: 5px;
    .desc {
      color: rgb(118, 118, 118);
      line-height: 20px;
      ${hoverPointer}
    }
    h3 {
      line-height: 22px;
      font-size: 16px;
      color: #484848;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      ${hoverPointer}
    }
    .price {
      line-height: 20px;
    }
    .rate {
      .ant-rate-star {
        margin-inline-end: 0;
      }
      svg {
        width: 9px;
        height: 9px;
      }
    }
  }
`

export default RoomWrapper
