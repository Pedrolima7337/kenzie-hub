import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  .spanDiv {
    margin-bottom: 10px;
    font-size: 12.182px;
    color: var(--Grey0);
  }
`;
export const SelectContainer = styled.div`
  background-color: var(--Grey2);
  border: 1.3px solid var(--Grey0);
  border-radius: 4px;
  color: var(--Grey0);
  padding: 1rem;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  Select {
    background-color: transparent;
    align-items: center;
    flex: 1;
    width: 100%;
    border: 0;
    color: var(--Grey0);
    font-size: 14px;
    option {
      background-color: var(--Grey2);
      color: var(--Grey0);
      font-size: 15px;
    }
  }
`;
