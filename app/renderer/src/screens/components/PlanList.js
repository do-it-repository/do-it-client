import React, {useState} from "react";
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import "./App.css"



function User({ user, onRemove }) {
  let [Plan,setPlan] = useState('plan')

  return (
    <span>
      <Chip id={user.id} 
      className={Plan}
      onClick={() => {
        setPlan('unplan')
        setTimeout(() => {onRemove(user.id)},50)
      }}
      label={user.username} 
      size="small" 
      color="warning" 
      draggable
      />
    </span>
  );
}

function PlanList({ users, onRemove }) {
  return (
    <Stack direction="column" spacing={0.3}>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </Stack>
  );
}

export default PlanList;
