import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Snackbar from "@material-ui/core/Snackbar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IMG_LOGO from "../assets/img/logo.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectLoginInfo, loginActions, doLoginApi } from "../redux/loginSlice";
import { AppPaths, selectLoading } from "../../../common";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      // maxWidth: 345,
    },
    media: {
      width: "140px",
      height: "65px",
      margin: "auto",
      marginTop: "10px",
    },
    textField: {
      width: "100%",
    },
  })
);

export default function LoginPanel() {
  const classes = useStyles();
  const loginInfo = useSelector(selectLoginInfo);
  const { errMsg, isLoading } = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const [userId, changeUserId] = useState(loginInfo.userId);
  const [password, changePassword] = useState(loginInfo.password);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (token !== "") {
      history.push(AppPaths.MAINMENU);
    }
    // tslint:disable-next-line:align
  }, [token]);

  function inputChecker() {
    if (userId.length !== 0 && password.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function doLogin() {
    if (inputChecker()) {
      dispatch(doLoginApi({ user: userId, pass: password }));
      // doLoginAction({ userId, password });
    } else {
      alert("密码不正确");
    }
  }

  function doEnter(keyCode: number) {
    if (keyCode != 13) return;
    doLogin();
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  React.useEffect(() => {
    if (errMsg !== "") {
      setOpenSnackbar(true);
    } else {
      setOpenSnackbar(false);
    }
  }, [errMsg]);

  console.log("render LoginPanel");
  return (
    <>
      <Card className={classes.card}>
        <CardMedia component="img" alt="FUJITSU" image={IMG_LOGO} title="FUJITSU" className={classes.media} />
        <CardContent>
          <TextField
            className={classes.textField}
            label="用户名"
            variant="outlined"
            value={userId}
            onChange={(e) => changeUserId(e.target.value)}
            onKeyPress={(e) => doEnter(e.which)}
          />
          <br />
          <br />
          <TextField
            type="password"
            className={classes.textField}
            label="密码"
            variant="outlined"
            value={password}
            onChange={(e) => changePassword(e.target.value)}
            onKeyPress={(e) => doEnter(e.which)}
          />
        </CardContent>
        <CardContent>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              alert("Click-Test");
            }}
          >
            忘记密码
          </Link>
          <br />
          <br />
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              alert("Click-Test");
            }}
          >
            注册
          </Link>
        </CardContent>
        <CardActions title="登录">
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={doLogin}
            onKeyPress={(e) => doEnter(e.which)}
          >
            {isLoading ? "登录中 ..." : "登录"}
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errMsg}
      />
    </>
  );
}
