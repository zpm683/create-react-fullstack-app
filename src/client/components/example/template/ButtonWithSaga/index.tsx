import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface IOwnProps {
  onClick: any;
  //!!onChange is not a good way to update data (just test)
  onChange: any;
  //!!best way is uesd redux to watch the data
  data: string;
}
type ButtonWithSaga = IOwnProps;

export default (props: ButtonWithSaga) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Button
          size="large"
          onClick={props.onClick}
          variant="contained"
          color="secondary"
          children={"Click this Button will call post-api in redux-saga"}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          autoFocus
          label="post data"
          value={props.data}
          onChange={props.onChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography children="please open console to look this"/>
      </Grid>
    </Grid>
  );
};
