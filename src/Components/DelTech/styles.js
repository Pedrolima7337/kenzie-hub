import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ContentPoPup = styled.div`
  width: 100%;
  max-width: 369px;
  height: 342px;
  margin: 10% auto;
  background-color: var(--Grey3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (max-width: 360px) {
    width: 95%;
  }

  .btt-fechar {
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    color: var(--Grey1);
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  }
  .header {
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 20px 20px;
    width: 100%;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    margin-bottom: 25px;
    span {
      font-weight: bold;
      font-size: 14px;
    }
  }
  form {
    width: 80%;
    padding-bottom: 50px;
    input {
      color: #868e96;
    }
    select {
      color: #868e96;
    }
    .div-btts {
      display: flex;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      button + button {
        width: 40%;
        margin-left: 22px;
      }
    }
  }
`;
