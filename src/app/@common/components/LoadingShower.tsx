import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import { useOnline } from "../middlewares/hooks";
import { selectLoading } from "../redux";
import { useSelector } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }),
);

/**
 * Show Snackbar & Backdrop
 *
 * @see @common/middlewares/withLoading.ts
 */
export const LoadingShower = () => {
  const classes = useStyles();
  const isOnline = useOnline();
  const { isLoading, errMsg } = useSelector(selectLoading);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  useEffect(() => {
    console.log(`isOnline:${isOnline}`);
    if (!isOnline) {
      setSnackbarMsg("offline!");
      setOpenSnackbar(true);
    }
  }, [isOnline]);

  useEffect(() => {
    if (errMsg !== "") {
      setSnackbarMsg(`エーラ:${errMsg}`);
      setOpenSnackbar(true);
    }
  }, [errMsg]);
  return (
    <>
      <Snackbar
        data-testid="LoadingShower-Snackbar"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMsg}
      />
      <Backdrop
        data-testid="LoadingShower-Backdrop"
        className={classes.backdrop}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
