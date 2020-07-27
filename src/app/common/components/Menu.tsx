import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ListItemText from "@material-ui/core/ListItemText";
import { IRootMenu, IMenuInfo } from "common.memu";
import { useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

interface IOwnProps {
  menuList: IRootMenu[];
}

type MenuProps = IOwnProps;
/**
 * 菜单
 */
export const Menu: React.FC<MenuProps> = ({ menuList }) => {
  const history = useHistory();
  const classes = useStyles();
  const [listState, setListState] = React.useState(true);

  function onClickListItem() {
    const nextListState = !listState;
    setListState(nextListState);
  }

  function renderList(menuList: IMenuInfo[]) {
    return menuList.map((menu, i) => (
      <Tooltip key={i} title={menu.tip}>
        <ListItem
          button
          key={i}
          onClick={() => {
            history.push(`${menu.path}`);
          }}
          className={classes.nested}
        >
          <ListItemText primary={menu.text} />
        </ListItem>
      </Tooltip>
    ));
  }

  return (
    <React.Fragment>
      {menuList.map((menu, i) => {
        return (
          <React.Fragment key={i}>
            <ListItem button onClick={onClickListItem}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title} />
              {listState ? <ExpandMore /> : <ChevronRight />}
            </ListItem>
            <Collapse in={listState} timeout="auto" unmountOnExit>
              <List>{renderList(menu.list)}</List>
            </Collapse>
            <Divider />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
