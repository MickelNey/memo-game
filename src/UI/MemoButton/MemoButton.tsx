import React from 'react';
import styles from "./MemoButton.module.scss"

const MemoButton = ( { children, ...props }: any) => {
    return (
        <button {...props} className={styles.MemoButton}>
            { children }
        </button>
    )
}

export default MemoButton


