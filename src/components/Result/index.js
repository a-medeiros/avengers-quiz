import React from "react";
import styled from "styled-components";
import Image from "next/image";
import db from "../../../db.json";

const ResultContainer = styled.section`
  position: absolute;
  background-color: ${db.theme.colors.secondary};
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
    background-color: ${db.theme.colors.primary};
`;

ResultContainer.Content = styled.div`
  padding: 10px 20px;
  color: white;
`;

// eslint-disable-next-line react/prop-types
function Result({ score, totalQuestions }) {
  return (
    <ResultContainer>
      <ResultContainer.Header>
        <h3>Resultado</h3>
        <Image src="/os-vingadores.jpg" alt="Os Vingadores" width="350" height="200" objectFit="cover" />
      </ResultContainer.Header>
      <ResultContainer.Content>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p>Você acertou {score} de {totalQuestions}!</p>
        {
            score === totalQuestions ? (
              <div>
                <p>Tu é o bichão mesmo! Acertou tudo!</p>
              </div>
            ) : null
        }
        {
            score > totalQuestions / 2 && score < totalQuestions ? (
              <div>
                <p>Parabéns! Você acertou mais que a metade.</p>
              </div>
            ) : null
        }
        {
            score === totalQuestions / 2 ? (
              <div>
                <p>Você acertou a metade! Não foi tão mal assim...</p>
              </div>
            ) : null
        }
        {
            score < totalQuestions / 2 ? (
              <div>
                <p>Tu não sabe de nada! Acertou menos que a metade.</p>
              </div>
            ) : null
        }
      </ResultContainer.Content>
    </ResultContainer>
  );
}

export default Result;
