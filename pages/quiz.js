import React, { useState } from "react";
import Image from "next/image";
import QuizBackground from "../src/components/QuizBackground";
import QuestionContainer from "../src/components/Question";
import Result from "../src/components/Result";
import db from "../db.json";

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const [hasAlternativeSelected, setHasAlternativeSelected] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const totalQuestions = db.questions.length;
  const currentQuestion = db.questions[questionIndex];

  function getUserAnswer(e) {
    setUserAnswer(e.target.value);
    setHasAlternativeSelected(true);
  }

  function checkUserAnswer(e) {
    e.preventDefault();
    setIsQuestionSubmited(true);
    if (userAnswer === currentQuestion.answer) {
      setIsCorrect(true);
      setScore(score + 1);
      setTimeout(() => {
        setUserAnswer("");
        setIsCorrect(false);
        setIsQuestionSubmited(false);
        setHasAlternativeSelected(false);
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
        setUserAnswer("");
        setIsCorrect(null);
        setIsQuestionSubmited(false);
        setHasAlternativeSelected(false);
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
              <QuestionContainer.Form onSubmit={checkUserAnswer}>
                {
                  currentQuestion.options.map((option, index) => (
                    <QuestionContainer.Option htmlFor={index}>
                      <input id={index} name="option" value={option} type="radio" onChange={getUserAnswer} />
                      {option}
                    </QuestionContainer.Option>
                  ))
                }
                { isQuestionSubmited === false ? (
                  <QuestionContainer.Button type="submit" disabled={!hasAlternativeSelected}>
                    Confirmar
                  </QuestionContainer.Button>
                ) : null }
              </QuestionContainer.Form>
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
          <Result score={score} totalQuestions={totalQuestions} />
        ) : null
      }
    </QuizBackground>
  );
}

export default Quiz;
