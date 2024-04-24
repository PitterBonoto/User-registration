import styled from "styled-components";
import Background2 from "../../assets/background-2.svg";

export const Container = styled.div`
  background: url("${Background2}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 20px;
  height: 180px;
  width: 250px;
`;

export const Ul = styled.ul`
  height: 40vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Arrow1 = styled.img`
  width: 16px;
  transform: rotateY(180deg);
`;

export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  margin-top: 10px;

  p {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 80%;
  }
`;
