import styled from "styled-components";

const QuestionContainer = styled.section`
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

QuestionContainer.Header = styled.header`
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
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
`;

QuestionContainer.Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0px;
`;

QuestionContainer.Option = styled.label`
  display: flex;
  margin: 7px;
  font-size: 15px;
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  color: white;
  padding: 10px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

QuestionContainer.Button = styled.button`
  padding: 10px;
  margin: 5px;
  color: white;
  margin-top: 15px;
  text-transform: uppercase;
  background-color: #9e9e9e;
  border: 1px solid #9e9e9e;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

QuestionContainer.Message = styled.div`
  padding: 6px;
  padding-bottom: 10px;
  i {
    font-size: 40px;
  }

  color: ${(props) => props.color}
`;

export default QuestionContainer;
