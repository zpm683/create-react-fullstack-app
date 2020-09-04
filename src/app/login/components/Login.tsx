import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LoginPanel from "./LoginPanel";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";
import { LOGIN_KEYS as KEYS } from "../../common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textAlign: "center",
      color: "#ffffff",
    },
    loginRoot: {
      minHeight: "100%",
      width: "100%",
      height: "auto",
      position: "absolute",
      backgroundColor: "#282c34",
    },
    titleContainer: {
      marginTop: 120,
    },
    panelContainer: {
      flexGrow: 1,
      marginTop: 80,
    },
    informationItem: {},
    loginPanelItem: {},
    footerContainer: {
      position: "fixed",
      width: "100%",
      bottom: 0,
    },
    footer: {
      textAlign: "center",
      color: "#ffffff",
    },
  }),
);

export default function Login() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className={classes.loginRoot}>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h3">
            {t(KEYS.HELLO)}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        className={classes.panelContainer}
      >
        <Grid item xs={3} className={classes.loginPanelItem}>
          <LoginPanel />
        </Grid>
      </Grid>
      <Grid container className={classes.footerContainer}>
        <Grid item xs={12}>
          <Typography className={classes.footer} variant="subtitle2">
            DEMO Powered by{" "}
            <Link
              href="https://github.com/zpm683/create-react-fullstack-app"
              target="_blank"
            >
              create-react-fullstack-app
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
