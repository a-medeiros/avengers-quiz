import styled from "styled-components";
import db from "../../../db.json";

const PlayQuiz = styled.div`
  background-color: #000;
  width: 360px;
  margin-bottom: 30px;

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 15px;
  }

  p {
    line-height: 1;
    padding-bottom: 20px;
    font-size: 16px;
    max-width: 310px;
  }

  input {
    width: 280px;
    outline: none;
    border-radius: 5px;
    border: 1px solid white;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

PlayQuiz.Header = styled.header`
  color: white;
  background-color: ${db.theme.colors.primary};
`;

PlayQuiz.Content = styled.div`
  color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  * {
    margin: 0;
  }

  button {
    width: 300px;
    padding: 10px;
    background-color: ${db.theme.colors.secondary};
    border: 1px solid ${db.theme.colors.secondary};
    font-weight: 700;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export default PlayQuiz;
