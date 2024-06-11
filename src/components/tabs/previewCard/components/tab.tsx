import { useContextSelector } from "use-context-selector";
import { PreviewCardContext, PreviewCardTabContext } from "../context";
import { useEffect, useId } from "react";
import classNames from "classnames";
import { _useIsPreviewCardActive } from "../hooks";
import { _PreviewCardImage } from "./image";

type PreviewCardTab = React.FC<{
  image: string | React.ReactElement,
  children?: React.ReactNode
}>

export const _PreviewCardTab: PreviewCardTab = ({ children, image }) => {
  const id = useId();
  const setTabs = useContextSelector(PreviewCardContext, ({ setTabs }) => setTabs);

  useEffect(() => {
    setTabs((tabs) => [...tabs, id])

    return () => {
      setTabs((tabs) => tabs.filter((tab) => tab !== id))
    }
  }, [])

  const className = classNames("PreviewCard__Tab", {
    "PreviewCard__Tab--active": _useIsPreviewCardActive(id)
  });

  return (
    <PreviewCardTabContext.Provider value={{ id }}>
      <div className={className}>
        <div className="PreviewCard__ImageContainer">
          {typeof image === "string" ? <_PreviewCardImage src={image} alt="Preview" /> : image}
        </div>
        <div className="PreviewCard__TabContent">
          {children}
        </div>
      </div>
    </PreviewCardTabContext.Provider>
  )
}