import React, { useRef, useState } from "react";
import PlanList from "./PlanList";
import CreatePlan from "./CreatePlan.js";

export default function Plan() {
  const [inputs, setInputs] = useState({
    id: '',
    planname: ""
  });

  const { planname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [plans, setPlans] = useState([
    {
      id: 1,
      planname: "Styled Components 조사 및 공부"
    },
    {
      id: 2,
      planname: "ICT 기획 및 설계 복습"
    },
    {
      id: 3,
      planname: "Baekjoon 세 문제 풀기"
    }
  ]);

  const nextId = useRef(4);

  const onEnterCreate = (e) => {
    if (e.key === "Enter") {
      if (e.target === null){
        
      }
      const plan = {
        id: nextId.current,
        planname
      };

      setPlans(plans.concat(plan));

      setInputs({
        planname: ""
      });
      nextId.current += 1;
    }
  };

  const onRemove = (id) => {
    // plan.id가 파라미터로 일치하지 않은 원소만 추출해서 새로운 배열을 만듦
    // = plan.id가 id인 것을 제거함
    setPlans(plans.filter((plan) => plan.id !== id));
  };


  return (
    <>
      <CreatePlan
        planname={planname}
        onChange={onChange}
        onEnter={onEnterCreate}
      />
      <br />
      <PlanList plans={plans} onRemove={onRemove} />
    </>
  );
}
