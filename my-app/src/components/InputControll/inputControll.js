import React from 'react';
import styles from "./inputControll.module.css";

function inputControll(props) {
  return (
     <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props} />
     </div>
  );
}

export default inputControll