import styled from "styled-components";

export const BoxCard = styled.div`
  width: 280px;
  margin-top: 32px;

  div:first-child {
    background-color: #f0f0f0;
    border-radius: 10px 10px 0px 0px;

    img {
      width: 100px;
      border-radius: 50%;
      position: relative;
      bottom: -50px;
    }
  }
  div:last-child {
    background: #ffffff;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0px 0px 10px 10px;
    padding-top: 90px;
    padding-bottom: 40px;

    h4 {
      color: #6278f7;
      font-size: 18px;
      line-height: 22px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    h5 {
      font-size: 18px;
      line-height: 22px;
      color: #212121;
      padding: 0 16px;
    }
  }
`;
