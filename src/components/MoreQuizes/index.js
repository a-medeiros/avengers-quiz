import styled from "styled-components";
import db from "../../../db.json";

const MoreQuizes = styled.div`
  background-color: ${db.theme.colors.secondary};
  width: 350px;

  h1, h2, h3 {
    margin: 0;
    padding: 15px;
  }

  @media (max-width: 600px) {
    width: 330px;
  }
`;

MoreQuizes.Header = styled.header`
  color: white;
  background-color: ${db.theme.colors.primary};
`;

MoreQuizes.Content = styled.div`
  color: white;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  p {
    line-height: 1;
    padding-bottom: 10px;
    font-size: 16px;
    max-width: 310px;
  }


`;

export default MoreQuizes;
