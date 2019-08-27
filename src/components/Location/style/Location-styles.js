import styled from 'styled-components';

export const MapWrapper = styled.div`
	height: 600px;
`;

export const WrapperLocation = styled.div`
  margin: 0 80px;
  h1 span{
    margin: 50px 0 20px 0;
    font-family: 'Old Standard TT', serif;
    display: inline-block;
    color: #949090;
  }
  .street span{
    margin-bottom 20px;
    display: inline-block;
    color: #949090;
  }
  .phone{
    margin-bottom: 20px;
    display: inline-block;
    color: #949090;
  }
  .socialWrapper{
    margin: 40px 0;
    text-align: center;
    a{
      font-size: 22px;
      margin: 0 10px;
    }
    svg{
      path{
        fill: #cdcdcd;
        }
    }
  }
`;