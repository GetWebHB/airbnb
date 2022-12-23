import styled from 'styled-components'

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 48px;
  border-radius: 40px;
  border: 1px solid #dddddd;
  cursor: pointer;
  ${(props) => props.theme.mixin.transBoxShadow};
  .text {
    font-size: 14px;
    color: #222;
    padding: 0 16px 0 24px;
  }
`

export default CenterWrapper
