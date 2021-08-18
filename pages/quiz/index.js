import React from "react";
import { ThemeProvider } from "styled-components";
import db from "../../db.json";
import Quiz from "../../src/screens/Quiz";

/* eslint react/prop-types: 0 */
function QuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <Quiz questions={db.questions} bg={db.bg} />
    </ThemeProvider>
  );
}

export default QuizPage;
