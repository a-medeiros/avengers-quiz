import styled from "styled-components";
import db from "../../../db.json";

const QuestionContainer = styled.section`
  position: absolute;
  background-color: ${db.theme.colors.secondary};
  top: 100px;
  left: 150px;
  width: 350px;

  h1, h2, h3 {
    margin: 0;
    padding: 15px 20px;
  }
`;

QuestionContainer.Header = styled.header`
  color: white;
  background-color: ${db.theme.colors.primary};
`;

QuestionContainer.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  p {
    color: white;
    margin: 0;
    width: 280px;
  }

  button {
    width: 280px;
    padding: 7px;
    color: white;
    font-weight: 700;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

`;

QuestionContainer.Options = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;

  * {
    margin: 7px;
    background-color: #5c6bc0;
    border: 1px solid #5c6bc0;
    color: white;
    text-align: left;
    cursor: pointer;
  }
`;

QuestionContainer.ButtonDiv = styled.div`
  margin-bottom: 10px;

  button {
    text-transform: uppercase;
    background-color: #9e9e9e;
    border: 1px solid #9e9e9e;
    cursor: pointer;
  }

`;

export default QuestionContainer;
