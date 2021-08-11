import React from "react";
import Image from "next/image";
import QuizBackground from "../src/components/QuizBackground";
import QuestionContainer from "../src/components/Question";
import db from "../db.json";

function Quiz() {
  return (
    <QuizBackground>
      <QuestionContainer>
        <QuestionContainer.Header>
          <h3>Pergunta 1 de 5</h3>
          <Image src={db.questions[0].img} width="350" height="200" objectFit="cover" alt={db.questions[0].alt} />
        </QuestionContainer.Header>
        <QuestionContainer.Content>
          <p>{db.questions[0].question}</p>
          <QuestionContainer.Options>
            <button type="button">Option 1</button>
            <button type="button">Option 2</button>
            <button type="button">Option 3</button>
            <button type="button">Option 4</button>
          </QuestionContainer.Options>
          <QuestionContainer.ButtonDiv>
            <button type="button">Confirmar</button>
          </QuestionContainer.ButtonDiv>
        </QuestionContainer.Content>
      </QuestionContainer>
    </QuizBackground>
  );
}

export default Quiz;
