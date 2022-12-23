import styled from 'styled-components'

const CenterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  border-radius: 40px;
  border: 1px solid #dddddd;
  cursor: pointer;
  ${(props) => props.theme.mixin.transBoxShadow};
  .text {
    padding: 0 16px 0 24px;
    font-weight: bold;
  }
  .search-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-right: 7px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgColor.primaryBg};
    svg {
      color: white;
    }
  }
`

export default CenterWrapper
