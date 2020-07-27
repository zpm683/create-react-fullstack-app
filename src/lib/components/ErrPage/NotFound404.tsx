/**
 * 404NotFound画面
 *  
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
      width: "50%",
      margin: "0 auto",
    },
  })
);

type Props = {};
export const NotFound404: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        ページが存在しません。
      </Typography>
      <br />
      <Link
        component="p"
        onClick={() => {
          window.history.back();
        }}
      >
        こちらをクリックして、前のページに戻ります。
      </Link>
    </Paper>
  );
}
