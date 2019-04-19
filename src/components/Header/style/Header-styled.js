import styled from 'styled-components';
//import imgShow from '../../../images/open-trades/show-content.jpg';

export const WrapHeader = styled.div`
  background: #000;
  color: #cdcdcd;
  border-bottom: 1px solid #333;
`;
export const HeaderText = styled.h1`
	padding: 0px 14px 10px 14px;
`;
export const WrapperLang = styled.div`
  display: block;
  text-align: right;
  div{
    display: inline-block;
    &:hover{
      cursor: pointer;
    }
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
