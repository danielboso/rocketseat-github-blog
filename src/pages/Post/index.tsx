import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "../Home/styles";
import ReactMarkdown from 'react-markdown'
import { Body, Header, IconContainer, Info, PageActions, Title } from "./styles";

interface Issue {
  title: string;
  body: string;
}

export function Post() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue>();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://api.github.com/repos/danielboso/rocketseat-github-blog/issues/${id}`).then(response => setIssue(response.data))
  }, [])

  return (
    <>
      <Header>
        <PageActions>
          <Link href="/"><FontAwesomeIcon icon={solid('chevron-left')} size="xs" /> voltar</Link>
          <Link href="#">ver no github <FontAwesomeIcon icon={solid('arrow-up-right-from-square')} size="xs" /></Link>
        </PageActions>
        <Title>{issue?.title}</Title>
        <Info>
          <IconContainer>
            <FontAwesomeIcon icon={brands('github')} size="xs" />
            <span>cameronwll</span>
          </IconContainer>
          <IconContainer>
            <FontAwesomeIcon icon={solid('calendar')} size="xs" />
            <span>Há 1 dia</span>
          </IconContainer>
          <IconContainer>
            <FontAwesomeIcon icon={solid('comment')} size="xs" />
            <span>5 comentários</span>
          </IconContainer>
        </Info>
      </Header>
      <Body>
        {issue?.body && <ReactMarkdown children={issue?.body} />}
      </Body>
    </>
  )
}