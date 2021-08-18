import styled from "styled-components";

const MoreQuizes = styled.section`
  background-color: ${({ theme }) => theme.colors.mainBg};
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
  background-color: ${({ theme }) => theme.colors.primary};
`;

MoreQuizes.Content = styled.div`
  margin: 0;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  p {
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    list-style: none;
  }

`;

MoreQuizes.Topic = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  display: block;
  background-color: ${({ theme }) => theme.colors.primary}
`;

export default MoreQuizes;
