import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../stylesheets/containers/Clearfix/index.js";

const useStyles = makeStyles(styles);

export default function Clearfix() {
  const classes = useStyles();
  return <div className={classes.clearfix} />;
}

Clearfix.propTypes = {};
