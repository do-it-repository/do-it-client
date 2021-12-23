import React, {useState} from "react";
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import "./App.css"



function User({ plan, onRemove }) {
  let [Plan,setPlan] = useState('plan')

  return (
    <span>
      <Chip id={plan.id} 
      className={Plan}
      onClick={() => {
        setPlan('unplan')
        setTimeout(() => {onRemove(plan.id)},50)
      }}
      label={plan.planname} 
      size="small" 
      color="warning" 
      draggable
      />
    </span>
  );
}

function PlanList({ plans, onRemove }) {
  return (
    <Stack direction="column" spacing={0.3}>
      {plans.map((plan) => (
        <User plan={plan} key={plan.id} onRemove={onRemove} />
      ))}
    </Stack>
  );
}

export default PlanList;
