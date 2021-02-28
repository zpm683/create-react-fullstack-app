import { FC, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IMG_LOGO from "../../assets/img/logo.png";
import { useTranslation } from "react-i18next";
import { LOGIN_KEYS as KEYS } from "../../../@common/i18n";
import { LoginInfo } from "login.params";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      // maxWidth: 345,
    },
    media: {
      width: "192px",
      height: "192px",
      margin: "auto",
      marginTop: "10px",
    },
    textField: {
      width: "100%",
    },
  }),
);

type LoginPanelProps = {
  loginInfo: LoginInfo;
  onLogin: () => void;
};
export const LoginPanel: FC<LoginPanelProps> = ({ loginInfo, onLogin }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [userId, changeUserId] = useState(loginInfo.userId);
  const [password, changePassword] = useState(loginInfo.password);

  function inputChecker() {
    if (userId.length !== 0 && password.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  function doLogin() {
    if (inputChecker()) {
      onLogin();
    } else {
      alert("plase input ID && PASS");
    }
  }

  function doEnter(keyCode: number) {
    if (keyCode !== 13) return;
    doLogin();
  }

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="login"
          image={IMG_LOGO}
          title="login"
          className={classes.media}
        />
        <CardContent>
          <TextField
            className={classes.textField}
            label={t(KEYS.USER_NAME)}
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
            label={t(KEYS.PASSWORD)}
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
            {t(KEYS.FORGET_PASSWORD)}
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
            {t(KEYS.REGIST)}
          </Link>
        </CardContent>
        <CardActions title={t(KEYS.LOGIN)}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={doLogin}
            onKeyPress={(e) => doEnter(e.which)}
          >
            {t(KEYS.LOGIN)}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
