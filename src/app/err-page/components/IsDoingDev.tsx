/**
 * IsDoingDev
 */

import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { ERR_PAGE_KEYS } from "../../@common/i18n";
import { useTranslation } from "react-i18next";
import { useNextPage } from "../../@common/middlewares";
import { cleanToken } from "../../login";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      width: "50%",
      margin: "0 auto",
    },
  }),
);

export const IsDoingDev = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const nextPage = useNextPage();
  const dispatch = useDispatch();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {t(ERR_PAGE_KEYS.IS_DEVING)}
      </Typography>
      <br />
      <Link
        component="p"
        onClick={() => {
          dispatch(cleanToken());
          nextPage("ROOT");
        }}
      >
        {t(ERR_PAGE_KEYS.GO_TO_ROOT)}
      </Link>
    </Paper>
  );
};
