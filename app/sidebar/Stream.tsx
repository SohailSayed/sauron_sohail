import styles from "./sidebar.module.css";
import React from "react";

const Stream = () => {
  return (
    <div className={styles.stream}>
        <img className={styles.streamImg} src={'/sampleStream.jpg'}/>
    </div>
  );
}

export default Stream;
