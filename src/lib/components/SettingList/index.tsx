/**
 * XXXX設定
 *  
 */

import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";

interface IOwnProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
}
type SettingListProps = IOwnProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
    }
  })
);

export default function SettingList(props: SettingListProps) {
  const classes = useStyles({});

  return (
    <List
      style={{ backgroundColor: props.backgroundColor }}
      component="nav"
      aria-labelledby={props.id}
      subheader={
        <ListSubheader component="div" id={props.id}>
          {props.title}
        </ListSubheader>
      }
      className={classes.root}
    >
      {props.children}
    </List>
  );
}
