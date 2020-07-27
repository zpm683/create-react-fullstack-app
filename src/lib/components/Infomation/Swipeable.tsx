/**
 * ログイン画面の案内コンポーネント
 *  
 */
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {},
    media: {
      // width: "400px",
      // height: "500px",
      // margin: "auto",
    },
  })
);

interface stepInfo {
  label: string;
  imgPath: string;
}
interface IOwnProps {
  stepsList: stepInfo[];
}
type SwipeableProps = IOwnProps;
export const Swipeable: React.FC<SwipeableProps> = ({ stepsList }) => {
  const classes = useStyles({});
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = stepsList.length;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step: number) {
    setActiveStep(step);
  }

  return (
    <Card>
      <CardHeader
        title={<Typography>{stepsList[activeStep].label}</Typography>}
        className={classes.header}
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {stepsList.map((step, index) => (
          <CardMedia
            key={index}
            component="img"
            alt={step.label}
            className={classes.media}
            height={window.screen.height * 0.35}
            src={step.imgPath}
            title="お疲れ様です"
          />
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Card>
  );
};
