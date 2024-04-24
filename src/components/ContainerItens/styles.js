import styled from "styled-components";

export const ContainerItems = styled.div`
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(45px);
  border-radius: 51px 51px 0px 0px;
  padding: 36px 36px 0 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 340px;

  @media screen and (max-width: 450px) {
    
    width: 100vw;

  }

`;

