/**
 * StoryBook: common|components
 * @see https://github.com/storybookjs/storybook
 */

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Link, Typography } from "@material-ui/core";

const Components = storiesOf("common|Components", module);
Components.addDecorator(withKnobs)
  .add("ErrorBoundary", () => (
    <>
      <Typography>What is ErrorBoundary?</Typography>
      <Link
        target="_blank"
        href="https://zh-hans.reactjs.org/docs/error-boundaries.html"
      >
        See this DOC to learn!
      </Link>
    </>
  ));

// TODO
