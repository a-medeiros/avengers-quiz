import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import QuizBackground from "../src/components/QuizBackground";
import QuestionContainer from "../src/components/Question";
import Result from "../src/components/Result";
import db from "../db.json";
import AlternativesForm from "../src/components/AlternativesForm";

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const totalQuestions = db.questions.length;
  const currentQuestion = db.questions[questionIndex];

  const { query } = useRouter();
  const { name } = query;

  function checkUserAnswer(e) {
    e.preventDefault();
    setIsQuestionSubmited(true);
    if (currentQuestion.options[selectedAlternative] === currentQuestion.answer) {
      setIsCorrect(true);
      setScore(score + 1);
      setTimeout(() => {
        setIsCorrect(false);
        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
        e.target.reset();
        if (questionIndex < totalQuestions - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          setIsQuizFinished(true);
        }
      }, 2000);
    } else {
      setIsCorrect(false);
      setTimeout(() => {
        setIsCorrect(null);
        setIsQuestionSubmited(false);
        setSelectedAlternative(undefined);
        e.target.reset();
        if (questionIndex < totalQuestions - 1) {
          setQuestionIndex(questionIndex + 1);
        } else {
          setIsQuizFinished(true);
        }
      }, 2000);
    }
  }

  return (
    <QuizBackground>
      {
        isQuizFinished === false ? (
          <QuestionContainer>
            <QuestionContainer.Header>
              <h3>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Pergunta {currentQuestion.id} de {totalQuestions}
              </h3>
              <Image src={currentQuestion.img} width="350" height="200" objectFit="cover" alt={db.questions[0].alt} />
            </QuestionContainer.Header>
            <QuestionContainer.Content>
              <p>{currentQuestion.question}</p>
              <AlternativesForm onSubmit={checkUserAnswer}>
                {
                  currentQuestion.options.map((option, index) => {
                    const userAnswer = isCorrect ? "SUCCESS" : "ERROR";
                    // eslint-disable-next-line max-len
                    const correctAnswer = currentQuestion.options[index] === currentQuestion.answer;
                    const isSelected = selectedAlternative === index;
                    return (
                      <QuestionContainer.Option as="label" htmlFor={index} data-selected={isSelected} data-status={isQuestionSubmited && userAnswer} data-correct-answer={isQuestionSubmited && correctAnswer}>
                        <input style={{ display: "none" }} id={index} name="option" type="radio" onChange={() => setSelectedAlternative(index)} />
                        {option}
                      </QuestionContainer.Option>
                    );
                  })
                }
                { isQuestionSubmited === false ? (
                  <QuestionContainer.Button type="submit">
                    Confirmar
                  </QuestionContainer.Button>
                ) : null }
              </AlternativesForm>
              { isQuestionSubmited && isCorrect === true ? (
                <QuestionContainer.Message color={db.theme.colors.success}>
                  <i className="fas fa-check-circle" />
                </QuestionContainer.Message>
              ) : null }
              { isQuestionSubmited && isCorrect === false ? (
                <QuestionContainer.Message color={db.theme.colors.wrong}>
                  <i className="fas fa-times-circle" />
                </QuestionContainer.Message>
              ) : null }
            </QuestionContainer.Content>
          </QuestionContainer>
        ) : null
      }
      {
        isQuizFinished === true ? (
          <Result name={name} score={score} totalQuestions={totalQuestions} />
        ) : null
      }
    </QuizBackground>
  );
}

export default Quiz;
