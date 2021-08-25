import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss"


const List = ({items}: any) => (
    <>
        {items.length ? (
            <ul className={styles.wrapper}>
                {items.map((item: any) => (
                    <ListItem key={item.title} {...item}/>
                ))}
            </ul>
        ) : (
            <h2 className={styles.noItems}>List is empty, please add something</h2>
        )}
    </>

)

export default List;