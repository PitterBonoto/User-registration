import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo2 from "../../assets/people-2.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItens";
import Button from "../../components/Button";

import {
  Container,
  Image,
  Ul,
  User,
  Arrow1,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //----------------- CARREGAR USUÁRIOS AO INICIAR --------------------
  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers();
  }, []);

  //------------------------ DELETAR USUÁRIOS --------------------------
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Logo2} />
      <ContainerItems>
        <H1>Usuários</H1>
        <Ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age} Anos</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lixeira" />
              </button>
            </User>
          ))}
        </Ul>

        <Button transparentButton={true} onClick={goBackPage}>
          <Arrow1 alt="seta" src={Arrow} />
          Voltar
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default Users;
