import React from "react";
import QuizBackground from "../src/components/QuizBackground";
import QuestionContainer from "../src/components/Question";

function Quiz() {
  return (
    <QuizBackground>
      <QuestionContainer>
        <QuestionContainer.Header>
          <p>Pergunta 1 de 5</p>
          <img src="" alt="movie" />
        </QuestionContainer.Header>
        <QuestionContainer.Content>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>
          {/* Display something weather answer is right or wrong */}
        </QuestionContainer.Content>
      </QuestionContainer>
    </QuizBackground>
  );
}

export default Quiz;
