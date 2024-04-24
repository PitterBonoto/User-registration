import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo1 from "../../assets/people-1.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
  Arrow1,
  LinkUser
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();


  //----------------------- ADICIONAR USUÁRIOS -------------------------
  async function addNewUser() {
    const { data: newUser } = await axios.post("https://first-project-node-rosy.vercel.app/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]); // ... => Spread operator - esparrama todos

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Logo1} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <Arrow1 alt="seta" src={Arrow} />
        </Button>

        <LinkUser href="./usuarios">Ir para Usuários</LinkUser>
      </ContainerItems>
    </Container>
  );
}

export default App;
