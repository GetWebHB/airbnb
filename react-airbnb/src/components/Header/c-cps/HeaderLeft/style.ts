import styled from 'styled-components'

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  .logo {
    font-size: 0;
    svg {
      cursor: pointer;
      color: ${(props) => props.theme.bgColor.primaryBg};
    }
  }
`

export default LeftWrapper
