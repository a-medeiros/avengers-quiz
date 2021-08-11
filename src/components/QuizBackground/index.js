import styled from "styled-components";
import db from "../../../db.json";

const QuizBackground = styled.div`
  height: 100vh;
  background-image: url(${db.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default QuizBackground;
