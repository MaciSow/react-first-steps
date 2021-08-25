import React from "react";
import styles from './Radio.module.scss'
import PropTypes from "prop-types"

const Radio = ({children,id, checked, changeFn }: any) => (

    <label htmlFor={id} className={styles.radio}>
        <input
            id={id}
            type="radio"
            checked={checked}
            onChange={changeFn}
        />
        <div className={styles.radioButton}/>
        {children}
    </label>

)

Radio.propTypes = {
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    changeFn: PropTypes.any.isRequired
}

Radio.defaultProp = {
    label: ''
}

export default Radio