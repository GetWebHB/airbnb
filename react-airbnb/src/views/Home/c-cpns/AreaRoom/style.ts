import styled from 'styled-components'

const AreaRoomWrapper = styled.div`
  width: 1032px;
  margin: 40px auto 0;
  color: #222;
  .head {
    padding-bottom: 24px;
    .tit {
      font-size: 22px;
      line-height: 25px;
      margin-bottom: 12px;
    }
    .sub-tit {
      font-size: 16px;
    }
  }
  .room-list {
    display: flex;
    margin-left: -8px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default AreaRoomWrapper
