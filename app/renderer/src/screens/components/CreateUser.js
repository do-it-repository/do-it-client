import React from "react";
import styles from "./App.modules.css";
import TextField from "@mui/material/TextField"


const CreateUser = ({ username, onChange, onCreate, onEnter }) => {
  return (
    <div onKeyDown={onEnter}>
      <TextField id="TagInput" name="username" onChange={onChange} value={username} autoComplete="off" variant="standard" color="warning" size="small" name="username" label="Plan creator" placeholder="플랜을 입력하고 엔터" focused />
    </div>
  );
};

export default CreateUser;