import React from "react";
import classNames from "classnames";
import Zoom from "react-medium-image-zoom";

import "./Image.scss";

type ImageProps = {} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image = ({ className, alt, ...restProps }: ImageProps) => {
  return (
    <Zoom>
      <img
        className={classNames(className, "image")}
        {...{ alt, ...restProps }}
      />
    </Zoom>
  );
};

export default Image;
