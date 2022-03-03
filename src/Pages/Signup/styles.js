import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  h1 {
    margin-bottom: 20px;
    color: var(--Color-primary);
  }
  .divLogo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 25px;
    width: 370px;
    h1 {
      margin: 0;
    }
    button {
      margin: 0;
      width: 67.49px;
      height: 32px;
      left: 837px;
      top: 48px;
      background: #212529;
      border-radius: 4px;
      font-size: 12px;
    }
    @media (max-width: 393px) {
      width: 90%;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--Grey3);
  width: 369px;
  height: 711px;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media (max-width: 393px) {
    width: 95%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 40px;
    width: 90%;
    text-align: center;
    span {
      margin-bottom: 20px;
      color: var(--Grey1);
    }
    h1 {
      padding-top: 35px;
    }
  }
  h1 {
    margin-bottom: 32px;
    color: var(--Grey0);
    color: #f8f9fa;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
  }
`;
