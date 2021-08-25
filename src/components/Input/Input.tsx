import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss"

const Input = ({tag: Tag, name, label, maxLength, onChange, value}: any) => {
    const inputClass = Tag === 'input' ? styles.input : styles.textarea;
    const require = !['image', 'link'].find((item) => name === item);
    return (
        <Tag
            className={inputClass}
            placeholder={label}
            name={name}
            maxLength={maxLength}
            onChange={onChange}
            value={value}
            required={require}
        />
    );
}


Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.any,
    value: PropTypes.any,
    maxLength: PropTypes.number
}

Input.defaultProps = {
    tag: 'input',
    maxLength: 300
}

export default Input;