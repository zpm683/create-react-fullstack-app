import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { TEXT } from "../../../../common/i18n/keys";

//css in js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      textAlign: "center"
    }
  })
);

export default () => {
  const { t } = useTranslation();
  const classes = useStyles({});
  return (
    <Typography className={classes.title}>
      {`this Typography uesd i18n:${t(TEXT.HELLO)}`}
    </Typography>
  );
};
