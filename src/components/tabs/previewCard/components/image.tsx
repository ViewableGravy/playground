import classNames from "classnames";
import { _useIsPreviewCardHovering } from "../hooks";

export const _PreviewCardImage = ({ className, ...props }: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  //hook into context, when on the right tab and hovered, zoom in the image
  const isHovered = _useIsPreviewCardHovering()

  const classes = classNames("PreviewCard__TabImage", className, {
    "PreviewCard__TabImage--hovered": isHovered
  });

  return <img {...props} className={classes} />
}