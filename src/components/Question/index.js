import styled from "styled-components";

const QuestionContainer = styled.section`
  position: absolute;
  top: 100px;
  left: 100px;
  background-color: #000;
`;

QuestionContainer.Header = styled.header`
  color: white;
`;

QuestionContainer.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default QuestionContainer;
