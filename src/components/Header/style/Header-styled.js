import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
// import logoIcon from '../../../images/logo_icon.png';

export const WrapHeader = styled.div`
  background: #000;
  color: #cdcdcd;
  border-bottom: 1px solid #333; 
  font-size: 8.6px;
  font-weight: 300;
  letter-spacing: .10em;
  text-transform: uppercase;
  letter-spacing: 2.125px;
`;
export const WrapperIconLogo = styled.a`
  display: inline-block;
  width: 25px;
`;
export const LogoIcon = styled.img`
  width: 100%;
`;

export const InnerHeader = styled.div`
  ${breakpoint('lg') `
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1370px;
  `}
`;
export const WrapperMenuHeader = styled.div`
  display: block;
  text-align: right;
  div{
    display: inline-block;
    &:hover{
      cursor: pointer;
    }
  }
  .contactUs{
    margin: 0 20px
  }
`;

export const WrapLang = styled.div` 
  padding: 0 12px;
  margin: 17px 0;
  span{
    padding: 0 4px;
  }
`;

export const WrapSocial = styled.div`
  a {
    color: #cdcdcd;
    text-decoration: none;
    padding: 0 12px;
  }
`;
export const SocialPopup = styled.div`
  width: 100%;
  height: 100%;    
  background-color: rgba(0,0,0,.8);
  position: absolute;
  top: 0;
  left: 0;
  cursor: initial !important;
  span {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
        svg {
            width: 15px !important;
            height: 15px;
            background: #fff;
            padding: 7px;
            border-radius: 50%;
            cursor: pointer;
          path{
            fill: #000;
          }
        }
      }
    }
`;
export const WrapPhoneHeader = styled.div`
  a{
    color: #cdcdcd;
    text-decoration: none;
    padding: 0 12px;
  }
`;

// export const StrikeDirection = styled.span`
//   display: inline-block;
//   margin-right: 8px;
//   width: 10px;
//   height: 10px;
//   background: url(${imgStrike}) no-repeat center;
//   &.Down{
//   	transform: rotate(-180deg);
//   }
// `;
