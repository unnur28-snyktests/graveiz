import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
//import imgShow from '../../../images/open-trades/show-content.jpg';

export const WrapHeader = styled.div`
  background: #000;
  color: #cdcdcd;
  border-bottom: 1px solid #333; 
  font-size: 0.55rem;
  letter-spacing: .10em;
  text-transform: uppercase;
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
export const HeaderText = styled.h1`
	
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
`;

export const WrapLang = styled.div` 
  padding: 0 12px;
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
