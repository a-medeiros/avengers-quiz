import styled from "styled-components";

const QuizBackground = styled.div`
  height: 100vh;
  background-image: ${(props) => `url(${props.bg})`};
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
