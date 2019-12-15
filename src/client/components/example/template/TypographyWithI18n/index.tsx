import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { TEXT } from "../../../../common/i18n/keys";

interface IOwnProps {}
type TypographyWithI18nProps = IOwnProps;

export default function TypographyWithI18n(props: TypographyWithI18nProps) {

  const { t } = useTranslation();
  return (
  <Typography>{`this text is used i18n: ${t(TEXT.HELLO)}`}</Typography>
  );
}
