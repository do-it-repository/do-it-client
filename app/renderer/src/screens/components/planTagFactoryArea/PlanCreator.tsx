import React, { useRef, useState } from 'react'
import PlanList from './PlanList'
import CreatePlan from './CreatePlan'

import defaultPlanTags from './constant'

export default function PlanCreator() {
  const [inputs, setInputs] = useState({
    id: '',
    planname: '',
  })

  const { planname } = inputs

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const [plans, setPlans] = useState(defaultPlanTags)

  const nextId = useRef(4)

  const onEnterCreate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const plan = {
        id: nextId.current,
        planname,
      }

      setPlans(plans.concat(plan))

      setInputs({
        id: '',
        planname: '',
      })
      nextId.current += 1
    }
  }

  const onRemove = (id: any) => {
    // plan.id가 파라미터로 일치하지 않은 원소만 추출해서 새로운 배열을 만듦
    // = plan.id가 id인 것을 제거함
    setPlans(plans.filter((plan) => plan.id !== id))
  }

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
  )
}
