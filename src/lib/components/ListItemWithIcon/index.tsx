/**
 * 共通部品 ListItemIconText
 *  
 */

import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

interface IOwnProps {
  /**
   * material-uiのiconコンポーネント
   */
  icon?: React.ReactNode;
  /**
   * ListItemTextのタイトル
   */
  text: string;
  /**
   * onClick
   */
  onClick?: () => void;
  /**
   * ListItemのclassName
   */
  className?: string;
  /**
   * childNode
   */
  children?: React.ReactNode;
  /**
   * ListItem Props: selected
   */
  selected?: boolean;
}

type ListItemIconTextProps = IOwnProps;

/**
 * ListItem & ListItemIcon & ListItemText
 * @param props
 */
export default function ListItemIconText(props: ListItemIconTextProps) {
  return (
    <ListItem
      selected={props.selected}
      button
      className={props.className}
      onClick={props.onClick}
    >
      {props.icon === undefined ? (
        <React.Fragment />
      ) : (
        <ListItemIcon>
          <Icon children={props.icon} />
        </ListItemIcon>
      )}
      <ListItemText primary={props.text} />
      {props.children === undefined ? <React.Fragment /> : props.children}
    </ListItem>
  );
}
