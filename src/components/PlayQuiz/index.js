import styled from "styled-components";
import db from "../../../db.json";

const PlayQuiz = styled.div`
  background-color: ${db.theme.colors.secondary};
  width: 350px;
  margin-bottom: 30px;

  h1, h2, h3 {
    margin: 0;
    padding: 15px 20px;
  }

  @media (max-width: 600px) {
    width: 330px;
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
    width: 310px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: none;
  }

  input {
    width: 286px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid white;
    margin-bottom: 10px;
  }

  button {
    width: 310px;
    padding: 10px;
    background-color: #ffc107;
    border: 1px solid #ffc107;
    font-weight: 700;
    font-size: 16px;
    color: white;
    cursor: pointer;
    border-radius: 3px;
  }


  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    form {
      max-width: 300px;
    }

    input {
      width: 260px;
    }

    button {
      width: 281px;
    }

  }

`;

PlayQuiz.ErrorMessage = styled.div`
  color: #f57c00;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export default PlayQuiz;
