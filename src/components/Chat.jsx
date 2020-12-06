import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import NoProfile from "../assets/img/no-profile.png";
import Torahack from "../assets/img/torahack.png";

const Chat = (props) => {
    const isQuesion = props.type === "question";
    const classes = isQuesion ? "p-chat__row" : "p-chat__reserse";

    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuesion ? (
                    <Avatar alt="icon" src={Torahack} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    );
};

export default Chat;
