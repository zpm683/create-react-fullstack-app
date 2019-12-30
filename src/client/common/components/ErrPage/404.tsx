/**
 * 404NotFound
 */

import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      width:"50%",
      margin:"0 auto"
    }
  })
);

export default () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        404 Not Found !!!
      </Typography>
      <br/>
      <Link
        component="p"
        onClick={() => {
          window.history.back();
        }}
      >
        click here 
      </Link>
    </Paper>
  );
}
