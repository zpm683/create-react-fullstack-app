/**
 * StoryBook: common|Components
 * @author FXS)zhang.puming
 */

import React, { ComponentProps } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Calendar } from "../../../app/common/components";
import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    calendar: {
      width: 330,
    },
  }),
);

export default {
  title: "common/components/Calendar",
  component: Calendar,
  parameters: { actions: { argTypesRegex: "^on.*" } },
} as Meta;

type TemplateProps = Story<ComponentProps<typeof Calendar>>;
const Template: TemplateProps = (args) => {
  const classes = useStyles();
  return <Calendar baseClassName={classes.calendar} {...args} />;
};

export const base = Template.bind({});
export const withFooter = Template.bind({});

withFooter.args = {
  renderFooter: () => (
    <Button variant="contained" color="primary">
      任何组件
    </Button>
  ),
};
