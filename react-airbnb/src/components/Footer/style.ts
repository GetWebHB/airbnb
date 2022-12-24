import styled from 'styled-components'

const FooterWrapper = styled.div`
  border-top: 1px solid #ebebeb;
  .wrap_1080 {
    width: 1080px;
    padding: 48px 24px;
    margin: 0 auto;
    .foot {
      display: flex;
      > dl {
        flex: 1;
        font-weight: bold;
        dt {
          margin-bottom: 16px;
        }
        dd {
          height: 18px;
          line-height: 18px;
          margin-bottom: 4px;
          color: #767676;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
    .copyright {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid #ebebeb;
      .copyright-left {
        display: flex;
        align-items: center;
        color: #767676;
        svg {
          width: 21px;
          height: 21px;
        }
        .links {
          padding-left: 10px;
          span {
            padding-right: 5px;
          }
          a {
            padding-right: 5px;
            font-weight: 500;
            color: #767676;
          }
        }
      }
      .copyright-right {
        display: flex;
        svg {
          margin: 0 8px;
        }
      }
    }
  }
`

export default FooterWrapper
