import styled from "styled-components";

export const BoxRodape = styled.div`
  background-color: #6278f7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;

  div:first-child {
    display: flex;
    width: 200px;
    justify-content: space-around;
  }

  div:last-child {
    p {
      color: white;
      font-size: 18px;
    }
  }
`;
