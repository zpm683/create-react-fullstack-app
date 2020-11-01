/**
 * 505 SeverErr
 */

import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";
import { ERR_PAGE_KEYS as KEYS } from "../../common/i18n";
import { useGoRootPage } from "../middlewares/customHooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      width: "50%",
      margin: "0 auto",
    },
  }),
);
export const SevierErr500 = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const goRootPage = useGoRootPage();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3"></Typography>
      <br />
      <Link
        component="p"
        onClick={() => {
          goRootPage();
        }}
      >
        {t(KEYS.GO_TO_ROOT)}
      </Link>
    </Paper>
  );
};
