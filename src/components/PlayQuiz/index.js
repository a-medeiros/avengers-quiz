import styled from "styled-components";
import db from "../../../db.json";

const PlayQuiz = styled.div`
  background-color: ${db.theme.colors.secondary};
  width: 350px;
  margin-bottom: 30px;

  h1,
  h2,
  h3 {
    margin: 0;
    padding: 15px 20px;
  }

  input {
    width: 270px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;

  * {
    margin: 0;
  }

  div {
    width: 310px;
  }

  p {
    line-height: 1;
    padding: 0px 10px;
    padding-bottom: 15px;
    font-size: 16px;
  }

  form {
    max-width: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 291px;
    padding: 10px;
    background-color: #ffc107;
    border: 1px solid #ffc107;
    font-weight: 700;
    font-size: 16px;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export default PlayQuiz;
