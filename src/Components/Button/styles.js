import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.color};
  height: 48px;
  border-radius: 4px;
  border: 0;
  margin-top: 24px;
  width: 100%;
  font-size: 20px;
  color: #fff;
  :hover {
    filter: brightness(0.8);
  }
`;
