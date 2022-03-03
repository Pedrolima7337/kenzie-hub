import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 779.73px;
  padding-bottom: 15px;
  @media (max-width: 810px) {
    width: 95%;
  } ;
`;

export const DivAdd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    width: 33px;
    height: 32px;
  }
`;

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  width: 100%;
  height: 416.37px;
  background: var(--Grey3);
  border-radius: 4px;
  margin-top: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Cardzin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 49px;
  background-color: var(--Grey4);
  border-radius: 4.06066px;
  margin: 16px 0 0px;
  padding: 12.182px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 24px;
    color: var(--Grey0);
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12.182px;
    line-height: 22px;
    text-align: right;
    color: var(--Grey1);
  }
  :hover {
    background-color: var(--Grey2);
    cursor: pointer;
    transition: 0.5s;
  }
`;
