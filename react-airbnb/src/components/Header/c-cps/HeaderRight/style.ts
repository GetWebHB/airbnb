import styled from 'styled-components'

const RightWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  > span {
    padding: 12px;
    font-weight: bold;
    border-radius: 22px;
    &:hover {
      cursor: pointer;
      background-color: #f7f7f7;
    }
  }
  .user-panel {
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 12px;
    border: 1px solid #dddddd;
    border-radius: 21px;
    margin-left: 8px;
    svg {
      &:first-child {
        color: #595959;
        margin-right: 12px;
      }
      &:last-child {
        color: #717171;
      }
    }
    &:hover {
      cursor: pointer;
      ${(props) => props.theme.mixin.transBoxShadow}
    }
  }
  .down-menu {
    position: absolute;
    width: 240px;
    background: white;
    top: 53px;
    box-shadow: 0 -2px 1px rgb(0 0 0 / 10%), 0 5px 12px rgb(0 0 0 / 6%);
    border-radius: 15px;
    .menu-top,
    .menu-bottom {
      padding: 10px 0;
    }
    .menu-top {
      border-bottom: 1px solid #dddddd;
      .register {
        font-weight: bold;
      }
    }
    .menu-bottom {
    }
    span {
      display: block;
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      color: #222;
      cursor: pointer;
      &:hover {
        background: #f7f7f7;
      }
    }
  }
`

export default RightWrapper
