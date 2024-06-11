import { useContextSelector } from "use-context-selector";
import { PreviewCardContext } from "./context";


export const _useIsPreviewCardHovering = () => {
  return useContextSelector(PreviewCardContext, ({ hovered }) => hovered);
}

export const _useIsPreviewCardActive = (id: string) => {
  const activeTab = useContextSelector(PreviewCardContext, ({ activeTab }) => activeTab);
  return activeTab === id;
}