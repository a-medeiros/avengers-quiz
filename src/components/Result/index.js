import React from "react";
import styled from "styled-components";

const ResultContainer = styled.section`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mainBg};
  top: 70px;
  left: 150px;
  width: 350px;

  h1, h2, h3 {
    margin: 0;
    padding: 15px 20px;
  }

  @media (max-width: 700px) {
    position: static;
  }

  @media (max-width: 600px) {
    width: 330px;
  }
`;

ResultContainer.Header = styled.header`
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
`;

ResultContainer.Content = styled.div`
  padding: 10px 20px;
  color: white;
`;

// eslint-disable-next-line react/prop-types
function Result({ score, totalQuestions, name }) {
  const username = name === undefined ? "Anônimo" : name;
  return (
    <ResultContainer>
      <ResultContainer.Header>
        <h3>Resultado</h3>
      </ResultContainer.Header>
      <ResultContainer.Content>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p>Você acertou {score} de {totalQuestions}!</p>
        {
            score === totalQuestions ? (
              <div>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <p>Tu é o bichão mesmo, {username}! Acertou tudo!</p>
              </div>
            ) : null
        }
        {
            score > totalQuestions / 2 && score < totalQuestions ? (
              <div>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <p>Mandou bem, {username}! Você acertou mais que a metade.</p>
              </div>
            ) : null
        }
        {
            score === totalQuestions / 2 ? (
              <div>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <p>Parabéns, {username}! Você acertou a metade das perguntas.</p>
              </div>
            ) : null
        }
        {
            score < totalQuestions / 2 && score !== 0 ? (
              <div>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <p>{username}, você acertou menos que a metade.</p>
              </div>
            ) : null
        }
        {
          score === 0 ? (
            <div>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <p>{username}, você não acertou nenhuma das perguntas.</p>
            </div>
          ) : null
        }
      </ResultContainer.Content>
    </ResultContainer>
  );
}

export default Result;
