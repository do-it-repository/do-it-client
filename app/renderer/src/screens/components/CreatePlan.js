import React from "react";
import TextField from "@mui/material/TextField"

const CreatePlan = ({ planname, onChange, onEnter }) => {
  return (
    <div onKeyDown={onEnter}>
      <TextField 
        id="PlanInput" 
        name="planname" 
        onChange={onChange} 
        value={planname} 
        autoComplete="off" 
        variant="standard" 
        color="warning" 
        size="small" 
        name="planname" 
        label="Plan creator" 
        placeholder="플랜을 입력하고 엔터" 
        focused 
      />
    </div>
  );
};

export default CreatePlan;