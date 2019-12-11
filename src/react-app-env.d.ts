/// <reference types="react-scripts" />
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

declare module "react-swipeable-views-utils" {
  const content: {
    autoPlay: Function;
  };
  export = content;
}
