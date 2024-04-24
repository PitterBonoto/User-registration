import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  background:${props => props.transparentButton ? 'transparent' : 'var(--Templates-5-Color-1, rgba(0, 0, 0, 0.8))'};
  padding: 18px 0;
  border: ${props => props.transparentButton ? '1px solid #ffffff' : 'none'};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-top: 8vh;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }


`;