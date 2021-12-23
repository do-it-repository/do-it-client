import React from "react";
import styles from "./App.modules.css";
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"


function User({ user, onRemove }) {
  return (
    <span>
      <Chip id={user.id} onClick={() => onRemove(user.id)} label={user.username} size="small" color="warning" draggable/>
    </span>
  );
}

function UserList({ users, onRemove }) {
  return (
    <Stack direction="row" spacing={0.5}>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </Stack>
  );
}

export default UserList;
