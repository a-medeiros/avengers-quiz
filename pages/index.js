import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import PlayQuiz from "../src/components/PlayQuiz";
import MoreQuizes from "../src/components/MoreQuizes";
import QuizBackground from "../src/components/QuizBackground";
import db from "../db.json";

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
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const router = useRouter();

  return (
    <QuizBackground bg={db.bg}>
      <Head>
        <title>Avengers Quiz</title>
      </Head>
      <QuizContainer>
        <PlayQuiz
          as={motion.section}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <PlayQuiz.Header>
            <h2>Avengers</h2>
          </PlayQuiz.Header>
          <PlayQuiz.Content>
            <p>Teste os seus conhecimentos sobre os Vingadores</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (name === "") {
                setIsNameEmpty(true);
              } else {
                router.push(`/quiz?name=${name}`);
              }
            }}
            >
              <input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Diz aí o seu nome para jogar :)" />
              {
                isNameEmpty ? (
                  <PlayQuiz.ErrorMessage>
                    <span>Digite o seu nome!</span>
                  </PlayQuiz.ErrorMessage>
                ) : null
              }
              <button type="submit">JOGAR</button>
            </form>
          </PlayQuiz.Content>
        </PlayQuiz>
        <MoreQuizes
          as={motion.section}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <MoreQuizes.Content>
            <p>Dá uma olhada nesses Quizes incríveis...</p>
            <ul>
              { db.external.map((quizLink) => {
                const link = quizLink
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "");
                return (
                  <li key={quizLink}>
                    <MoreQuizes.Topic href={`/quiz/${link}`}>{link}</MoreQuizes.Topic>
                  </li>
                );
              })}
            </ul>
          </MoreQuizes.Content>
        </MoreQuizes>
      </QuizContainer>
    </QuizBackground>
  );
}
