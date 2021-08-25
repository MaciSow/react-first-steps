import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const NotesView = () => (
    <AppContext.Consumer>
        {(context) => (
// @ts-ignore
            <List items={context.note}/>
        )}
    </AppContext.Consumer>
);
export default NotesView;