import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import PlayQuiz from "../src/components/PlayQuiz";
import MoreQuizes from "../src/components/MoreQuizes";
import QuizBackground from "../src/components/QuizBackground";

const QuizContainer = styled.section`
  position: absolute;
  top: 100px;
  left: 150px;
  font-family: "Lato", sans-serif;

  @media (max-width: 700px) {
    position: static; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`;

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <QuizBackground>
      <Head>
        <title>Avengers Quiz</title>
      </Head>
      <QuizContainer>
        <PlayQuiz>
          <PlayQuiz.Header>
            <h2>Avengers</h2>
          </PlayQuiz.Header>
          <PlayQuiz.Content>
            <p>Teste os seus conhecimentos sobre os Vingadores</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (name === "") {
                alert("Name cannot be empty!");
              } else {
                router.push(`/quiz?name=${name}`);
              }
            }}
            >
              <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Diz aí o seu nome para jogar :)" />
              <button type="submit">JOGAR</button>
            </form>
          </PlayQuiz.Content>
        </PlayQuiz>
        <MoreQuizes>
          <MoreQuizes.Header>
            <h3>Quizes da Galera</h3>
          </MoreQuizes.Header>
          <MoreQuizes.Content>
            <p>Dá uma olhada nesses Quizes incríveis...</p>
          </MoreQuizes.Content>
        </MoreQuizes>
      </QuizContainer>
    </QuizBackground>
  );
}
