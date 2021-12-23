import React from "react";
import TextField from "@mui/material/TextField"

const CreatePlan = ({ username, onChange, onEnter }) => {
  return (
    <div onKeyDown={onEnter}>
      <TextField className="planList" id="PlanInput" name="username" onChange={onChange} value={username} autoComplete="off" variant="standard" color="warning" size="small" name="username" label="Plan creator" placeholder="플랜을 입력하고 엔터" focused />
    </div>
  );
};

export default CreatePlan;