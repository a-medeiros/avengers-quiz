import styled from "styled-components";
import db from "../../../db.json";

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
      background-color: #ffc107;

      &[data-status="SUCCESS"] {
        background-color: ${db.theme.colors.success}
      }

      &[data-status="ERROR"] {
        background-color: ${db.theme.colors.wrong}
      }
    }

    &[data-correct-answer="true"] {
      background-color: ${db.theme.colors.success}
    }
  }

  button {
    width: 290px;
  }

`;

export default AlternativesForm;
