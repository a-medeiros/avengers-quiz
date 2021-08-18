import styled from "styled-components";

const AlternativesForm = styled.form`
  width: 300px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;

  label {
    width: 270px; 
    &[data-selected="true"] { 
      background-color: ${({ theme }) => theme.colors.primary};

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success}
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong}
      }
    }

    &[data-correct-answer="true"] {
      background-color: ${({ theme }) => theme.colors.success}
    }
  }

  button {
    width: 290px;
  }

`;

export default AlternativesForm;
