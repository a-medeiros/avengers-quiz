import styled from 'styled-components';
import db from '../../../db.json';

const QuizBackground = styled.div`
  height: 100vh;
  background-image: url(${db.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default QuizBackground;
