import React from "react";
import { ThemeProvider } from "styled-components";
import Quiz from "../../src/screens/Quiz";

/* eslint react/prop-types: 0 */
function QuizDaGalera({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <Quiz questions={dbExterno.questions} bg={dbExterno.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const quizName = context.query.id;
  const res = await fetch(`https://${quizName}.vercel.app/api/db`);
  const dbExterno = await res.json();
  return {
    props: {
      dbExterno,
    },
  };
}

export default QuizDaGalera;
