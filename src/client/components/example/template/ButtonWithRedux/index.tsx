import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface IOwnProps {
    title:string;
    onClick: any;
}
type ButtonWithReduxProps = IOwnProps;

export default (props:ButtonWithReduxProps) => {
  return (
    <React.Fragment>
    <Typography>Click this Button to Change Title String (be used Redux to update)</Typography>
    <Button
      size="large"
      variant="outlined"
      color="primary"
      children={props.title}
      onClick={props.onClick}
    />
    </React.Fragment>
  );
};
