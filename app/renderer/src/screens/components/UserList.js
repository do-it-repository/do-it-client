import React from "react";
import styles from "./App.modules.css";

function User({ user, onRemove }) {
  return (
    <div className={styles.Tag} id={user.id} onClick={() => onRemove(user.id)}>
      <span className={styles.Box}>{user.username}</span>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div className={styles.Tag}>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
