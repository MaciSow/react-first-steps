import React from "react";
import AppContext from "../../context";
import List from "../../components/List/List";

const TwittersView = () => (
    <AppContext.Consumer>
        {(context) => (
// @ts-ignore
            <List items={context.twitter}/>
        )}
    </AppContext.Consumer>
);

export default TwittersView;