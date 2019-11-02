import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import AirlineSeatFlatOutlined from "@material-ui/icons/AirlineSeatFlatOutlined";
import AirplanemodeActiveTwoTone from "@material-ui/icons/AirplanemodeActiveTwoTone";
import A from "@material-ui/icons/Fingerprint";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    background: props =>
      props.color === "red"
        ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        : "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === "red"
        ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
        : "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: 8,
    textDecoration: props => (props.completed ? "line-through" : "none"),
    "&:hover": {
      margin: 10
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  red: {
    color: ""
  }
}));

const Todo = props => {
  const classes = useStyles(props);

  const chooseIconByText = text => {
    // https://material-ui.com/zh/components/material-icons/
    if (text.includes("plane")) {
      return (
        <ListItemIcon className={classes.red}>
          <AirplanemodeActiveTwoTone />
        </ListItemIcon>
      );
    }

    if (text.includes("aaiillop  klls;llddddkj ")) {
      return (
        <ListItemIcon className={classes.red}>
          {/* <AirlineSeatFlatOutlined /> */}
          <A></A>
        </ListItemIcon>
      );
    }

    return (
      <ListItemIcon className={classes.blue}>
        <SendIcon />
      </ListItemIcon>
    );
  };

  return (
    <ListItem className={classes.root} onClick={props.onClick}>
      {chooseIconByText(props.text)}
      <ListItemText primary={props.text} />
    </ListItem>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
