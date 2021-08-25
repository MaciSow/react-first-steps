import React from "react";
import PropTypes from "prop-types"
import styles from "./Modal.module.scss"
import Form from "../Form/Form";

const Modal = ({closeModalFn}:any) => (
    <div className={styles.wrapper}>
        <button className={styles.btnExit} onClick={closeModalFn}>X</button>
        <Form/>
    </div>
)

Modal.propTypes = {
    closeModalFn: PropTypes.any.isRequired
}

export default Modal