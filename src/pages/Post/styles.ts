import styled from "styled-components"

export const Header = styled.div`
  background: ${props => props.theme.BASE_PROFILE};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 32px;
  margin-top: -80px;

  font-family: 'Nunito';
  font-style: normal;
`

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.BLUE};
  text-transform: uppercase;

  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  margin-bottom: 20px;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: ${props => props.theme.BASE_TITLE};
  margin-bottom: 8px;
`

export const Info = styled.div`
  color: ${props => props.theme.BASE_SPAN};
  display: flex;
  gap: 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6%;
`

export const IconContainer = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Body = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  padding: 40px 32px;
  color: ${props => props.theme.BASE_TEXT};

  & > p {
    margin: 20px 0;
  }
`