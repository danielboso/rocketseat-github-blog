import styled from "styled-components";

export const Profile = styled.div`
  background: ${props => props.theme.BASE_PROFILE};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 32px;
  padding: 32px 32px 32px 40px;
`

export const UserImage = styled.img`
  max-width: 142px;
  max-height: 142px;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NameContainer = styled.h1`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: ${props => props.theme.BASE_SUBTITLE};

  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 8px;

  & > svg {
    color: ${props => props.theme.BASE_LABEL};
  }
`;

export const Link = styled.a`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => props.theme.BLUE};

  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
`;

export const Name = styled.div``;

export const Bio = styled.p`
  margin-top: 8px;
  color: ${props => props.theme.BASE_TEXT};
`;

export const SocialInfo = styled.div`
  display: flex;
  gap: 24px;
  color: ${props => props.theme.BASE_SUBTITLE};
  margin-top: 24px;
`;

export const Search = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-family: 'Nunito';
  font-style: normal;
  line-height: 160%;
`;

export const PostsNumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  color: ${props => props.theme.BASE_SUBTITLE};
`

export const PostCount = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.theme.BASE_SPAN};
`
export const InputSearch = styled.input`
  font-weight: 400;
  font-size: 16px;
  padding: 12px 16px;
  background-color: ${props => props.theme.BASE_INPUT};
  border: 1px solid ${props => props.theme.BASE_BORDER};
  color: ${props => props.theme.BASE_LABEL};
  border-radius: 6px;

  &:focus {
    outline: none;
    background: ${props => props.theme.BASE_INPUT};
    border-color: ${props => props.theme.BLUE};
    color: ${props => props.theme.BASE_TEXT};
  }
`;

export const Posts = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 32px;
`

export const Post = styled.div`
  background: ${props => props.theme.BASE_POST};
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
`

export const PostTitle = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: #E7EDF4 ${props => props.theme.BASE_TITLE};
`

export const Time = styled.span`
  flex-shrink: 0;
  max-width: 60px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #7B96B2 ${props => props.theme.BASE_SPAN};
`

export const Description = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #AFC2D4 ${props => props.theme.BASE_TEXT};
`

