import React from "react";
import Link from "@material-ui/core/Link";
import { RouteComponentProps, withRouter } from "react-router";

interface IOwnProps {}
type LinkWithRouterProps = IOwnProps & RouteComponentProps;
export default withRouter((props: LinkWithRouterProps) => {
  return (
    <Link
      component="p"
      onClick={() => {
        props.history.push("/404NotFound");
      }}
    >
      click this Link to jump in 404Page(be used react-router)
    </Link>
  );
});
