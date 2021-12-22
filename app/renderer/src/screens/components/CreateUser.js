import React from "react";
import styles from "./App.modules.css";
const CreateUser = ({ username, onChange, onCreate, onEnter }) => {
  return (
    <div onKeyDown={onEnter}>
      <input
        className={styles.input}
        name="username"
        placeholder="태그를 입력하세요."
        onChange={onChange}
        value={username}
        autoComplete="off"
      />

      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default CreateUser;