import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { LoginPanel } from "./LoginPanel";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useTranslation } from "react-i18next";
import { LOGIN_KEYS as KEYS } from "../../common/i18n";

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
      marginTop: "20px",
      textAlign: "center",
      color: "#ffffff",
    },
  }),
);

export const Login = () => {
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
        direction="column"
        justify="space-evenly"
        alignItems="center"
        className={classes.panelContainer}
      >
        <Grid item className={classes.loginPanelItem}>
          <LoginPanel />
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={classes.footer} variant="subtitle2">
          DEMO Powered by{" "}
          <Link
            // color="inherit"
            variant="subtitle1"
            href="https://github.com/zpm683/create-react-fullstack-app"
            target="_blank"
          >
            create-react-fullstack-app
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
};
