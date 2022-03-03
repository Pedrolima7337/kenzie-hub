import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Grey4);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  align-items: center;
  h1 {
    color: var(--Color-primary);
    font-size: 20px;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--Grey3);
  width: 100%;
  height: 118px;
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
  }
  h3 {
    color: var(--Grey0);
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
  }
  span {
    color: var(--Grey1);
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
  }
`;
