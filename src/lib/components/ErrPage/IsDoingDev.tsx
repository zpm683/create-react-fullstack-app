/**
 * IsDoingDev
 */

import React from "react";
import { useHistory } from "react-router-dom";
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
export const IsDoingDev: React.FC<Props> = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        未実装
      </Typography>
      <br />
      <Link
        component="p"
        onClick={() => {
          history.goBack();
        }}
      >
        戻る
      </Link>
    </Paper>
  );
};
