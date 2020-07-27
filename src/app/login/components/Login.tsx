/**
 * login
 */
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// import LoginBackgroudImg from "../assets/img/back.png";
import LoginPanel from "./LoginPanel";
import Typography from "@material-ui/core/Typography";

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
      // backgroundImage: `url(${LoginBackgroudImg})`,
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
  })
);

export default function Login() {
  const classes = useStyles();
  return (
    <Box className={classes.loginRoot}>
      <Grid container className={classes.titleContainer}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h3">
            Login Demo
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
            Powered by create-react-fullstack-app
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
