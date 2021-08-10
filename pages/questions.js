import styled from "styled-components";
import QuizBackground from "../src/components/QuizBackground";
import QuestionContainer from "../src/components/Question";
import db from "../db.json";

function Questions() {
  return (
    <QuizBackground>
      <QuestionContainer>
        <QuestionContainer.Header>
          <p>Pergunta 1 de 5</p>
          <img src='' alt='movie image' />
        </QuestionContainer.Header>
        <QuestionContainer.Content>
          <p></p>
          <button>Option</button>
          <button>Option</button>
          <button>Option</button>
          <button>Option</button>
          {/* Display something weather answer is right or wrong */}
        </QuestionContainer.Content>
      </QuestionContainer>
    </QuizBackground>
  );
}

export default Questions;
