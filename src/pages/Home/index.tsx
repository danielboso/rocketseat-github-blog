import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Bio, Description, InputSearch, Link, Name, NameContainer, Post, PostCount, Posts, PostsNumberContainer, PostTitle, PostTitleContainer, Profile, ProfileInfo, Search, SocialInfo, Subtitle, Time, UserImage } from "./styles";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";


interface User {
  login: string;
  avatar_url: string;
  name: string;
  html_url: string;
  bio: string;
  followers: number;
  company: string;
}

interface Posts {
  items: {
    id: number;
    number: number;
    title: string;
    body: string;
    created_at: string;
  }[]
}

export function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [posts, setPosts] = useState<Posts>({} as Posts);
  const [querySearch, setQuerySearch] = useState('');

  useEffect(() => {
    axios.get<User>('https://api.github.com/users/danielboso').then(response => setUser(response.data))
  }, [])

  useEffect(() => {
    axios.get<Posts>(`https://api.github.com/search/issues?q=${querySearch}%20repo:danielboso/rocketseat-github-blog`).then(response => setPosts(response.data))
  }, [querySearch])

  return (
    <>
      <Profile>
        <UserImage src={user.avatar_url} alt="" />
        <ProfileInfo>
          <NameContainer>
            <Name>{user.name}</Name>
            <Link href={user.html_url}>github <FontAwesomeIcon icon={solid('arrow-up-right-from-square')} size="xs" /></Link>
          </NameContainer>
          <Bio>{user.bio}</Bio>
          <SocialInfo>
            <p><FontAwesomeIcon icon={brands('github')} /> {user.login}</p>
            <p><FontAwesomeIcon icon={solid('building')} /> {user.company}</p>
            <p><FontAwesomeIcon icon={solid('user-group')} /> {user.followers} seguidores</p>
          </SocialInfo>
        </ProfileInfo>
      </Profile>
      <Search>
        <PostsNumberContainer>
          <Subtitle>Publicações</Subtitle>
          <PostCount>6 publicações</PostCount>
        </PostsNumberContainer>
        <InputSearch placeholder="Buscar conteúdo" onChange={e => setQuerySearch(e.target.value)} />
      </Search>
      <Posts>
        {posts?.items?.map(post => (
          <Post key={post.id}>
            <PostTitleContainer>
              <Link href={`issues/${post.number}`}>
                <PostTitle>{post.title}</PostTitle>
              </Link>
              <Time>{formatRelative(new Date(post.created_at), new Date(), { locale: ptBR })}</Time>
            </PostTitleContainer>
            <Description>
              {post.body.substring(0, 150)}
              {post.body.length > 150 ? '...' : ''}
            </Description>
          </Post>
        ))}
      </Posts>
    </>
  )
}