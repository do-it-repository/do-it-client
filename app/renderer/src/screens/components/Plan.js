import React, { useRef, useState } from "react";
import PlanList from "./PlanList";
import CreatePlan from "./CreatePlan.js";

export default function Plan() {
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
      username: "Styled Components 조사 및 공부"
    },
    {
      id: 2,
      username: "ICT 기획 및 설계 복습"
    },
    {
      id: 3,
      username: "Baekjoon 세 문제 풀기"
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
      <CreatePlan
        username={username}
        onChange={onChange}
        onEnter={onEnterCreate}
      />
      <br />
      <PlanList users={users} onRemove={onRemove} />
    </>
  );
}
