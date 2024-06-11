import classNames from "classnames";
import { _useIsPreviewCardActive, _useIsPreviewCardHovering } from "../hooks";

type OutletItem = React.FC<{
  id: string
}>

export const OutletItem: OutletItem = ({ id }) => {
  const isHovered = _useIsPreviewCardHovering();
  const isActive = _useIsPreviewCardActive(id);

  const classes = classNames("PreviewCard__OutletItem", {
    "PreviewCard__OutletItem--hovered": isHovered,
    "PreviewCard__OutletItem--active": isActive
  });

  return <div className={classes} />
}