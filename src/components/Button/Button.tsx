import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({children, href, secondary, onClick, ...props}: any) => {
    const buttonClass = secondary ? styles.secondary : styles.button;

    return href ? (
        <a className={buttonClass} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>

    ) : (
        <button className={buttonClass} onClick={onClick} type="submit">
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string,
    secondary: PropTypes.bool,
    onClick: PropTypes.any,
    props: PropTypes.any
}

Button.defaultTypes = {
    href: false,
    secondary: false
}


export default Button;