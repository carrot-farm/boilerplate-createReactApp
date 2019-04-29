import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Menu, Person, Add, Send } from "@material-ui/icons";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

// ===== 헤더
class TradeHeader extends Component {
  render() {
    const {} = this.props;
    return <>header</>;
  }
}

export default withStyles({})(TradeHeader);
