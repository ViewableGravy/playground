import { _PreviewCard } from "./components/card";
import { _useIsPreviewCardActive, _useIsPreviewCardHovering } from "./hooks";
import { _PreviewCardImage } from "./components/image";
import { _PreviewCardOutlet } from "./components/outlet";
import { _PreviewCardTab } from "./components/tab";

export const PreviewCard = Object.assign(_PreviewCard, {
  Tab: Object.assign(_PreviewCardTab, {
    Image: _PreviewCardImage,
    Outlet: _PreviewCardOutlet
  }),
  useIsHovering: _useIsPreviewCardHovering,
  useIsActive: _useIsPreviewCardActive
});

