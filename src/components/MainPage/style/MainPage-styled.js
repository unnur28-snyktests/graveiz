import styled from 'styled-components';
import mainBan from '../../../images/desktop/women-1.jpg';
import mainBanMob from '../../../images/mobile/woman-1-mobile.jpg';
import secban from '../../../images/desktop/woman-2.jpg';
import secbanMob from '../../../images/mobile/woman-2-mobile.png';
import thirdBan from '../../../images/desktop/third.jpg';
import thirdBanMob from '../../../images/mobile/third-mobile.jpg';
import breakpoint from 'styled-components-breakpoint';

export const MainPageWrapper = styled.div`
    // margin: 0 80px;
    .wrapDiscover{
      position: absolute;
      right: 50%
    }
`;

export const MainBanner = styled.div`
  background: url(${mainBanMob}) no-repeat center;
  height: 100vh;
  background-size: cover;
  position: relative;
  .mianLogo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1{
      color: #fff;
      font-family: 'Old Standard TT', serif;
      font-size: 85px;
    }
    h2{
      color: #fff;
      font-family: 'Old Standard TT', serif;
    }
  }
    ${breakpoint('sm')`
      background: url(${mainBan}) no-repeat center;
  `}
`;

export const SecondBanner = styled.div`
  min-height: 680px;
  background: url(${secbanMob}) no-repeat center;
  background-size: cover;
  ${breakpoint('sm')`
    background: url(${secban}) no-repeat center;
  `}
`;

export const ThirdBanner = styled.div`
  min-height: 680px;
  background: url(${thirdBanMob}) no-repeat center;
  background-size: cover;
    ${breakpoint('sm')`
    background: url(${thirdBan}) no-repeat center;
  `}
`;

export const HeqaderText = styled.h1`
	
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
