import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  h1 {
    margin-bottom: 20px;
    color: var(--Color-primary);
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--Grey3);
  width: 369px;
  height: 550px;
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
export const IrCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  span {
    color: var(--Grey1);
  }
  button {
    width: 100%;
  }
`;
