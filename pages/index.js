import styled from "styled-components";
import PlayQuiz from "../src/components/PlayQuiz";
import MoreQuizes from "../src/components/MoreQuizes";
import QuizBackground from "../src/components/QuizBackground";

const QuizContainer = styled.section`
  position: absolute;
  top: 100px;
  left: 100px;
`;

export default function Home() {
  return (
    <QuizBackground>
      <QuizContainer>
        <PlayQuiz>
          <PlayQuiz.Header>
            <h2>Avengers</h2>
          </PlayQuiz.Header>
          <PlayQuiz.Content>
            <p>Teste os seus conhecimentos sobre os Vingadores</p>
            <input placeholder='Diz aí o seu nome para jogar :)' />
            <button>JOGAR</button>
          </PlayQuiz.Content>
        </PlayQuiz>
        <MoreQuizes>
          <MoreQuizes.Header>
            <h3>Quizes da Galera</h3>
          </MoreQuizes.Header>
          <MoreQuizes.Content>
            <p>Dá uma olhada nesses Quizes incríveis...</p>
            <button>Quiz1</button>
            <button>Quiz2</button>
            <button>Quiz3</button>
          </MoreQuizes.Content>
        </MoreQuizes>
      </QuizContainer>
    </QuizBackground>
  );
}
