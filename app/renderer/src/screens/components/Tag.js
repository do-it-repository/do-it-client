import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

import styles from "./App.modules.css";

export default function Tag() {
  const [inputs, setInputs] = useState({
    username: ""
  });

  const { username } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert"
    },
    {
      id: 2,
      username: "tester"
    },
    {
      id: 3,
      username: "liz"
    }
  ]);

  const nextId = useRef(4);

  const onEnterCreate = (e) => {
    if (e.key === "Enter") {
      const user = {
        id: nextId.current,
        username
      };

      setUsers(users.concat(user));

      setInputs({
        username: ""
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    // user.id가 파라미터로 일치하지 않은 원소만 추출해서 새로운 배열을 만듦
    // = user.id가 id인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        onChange={onChange}
        onEnter={onEnterCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}
