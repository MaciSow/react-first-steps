import React from "react";
import styles from "./Tittle.module.scss";

const Title = ({children}: any) => (
    <h2 className={styles.title}>{children}</h2>
)

export default Title