/**
 * StoryBook: common|components
 * @see https://github.com/storybookjs/storybook
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "@material-ui/core/Typography";

const Components = storiesOf("common|Components", module);
Components
  .add("ErrorBoundary", () => (
    <>
      <Typography>ErrorBoundaryは何ですか?</Typography>
      <Link
        target="_blank"
        href="https://zh-hans.reactjs.org/docs/error-boundaries.html"
      >
        See this DOC to learn!
      </Link>
    </>
  ));

// TODO
