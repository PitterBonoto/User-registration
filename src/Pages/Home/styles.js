import styled from "styled-components";
import Background1 from "../../assets/background-1.svg";

export const Container = styled.div`
  background: url("${Background1}");
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

export const InputLabel = styled.p`
  color: #eee;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  margin-left: 20px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  margin-bottom: 15px;

  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;

export const Arrow1 = styled.img`
  width: 16px;
`;

export const LinkUser = styled.a`
  text-decoration: none;
  color: #eee;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.408px;
  font-weight: 100;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
`;
