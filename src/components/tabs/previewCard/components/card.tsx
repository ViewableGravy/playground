/***** BASE IMPORTS *****/
import classNames from "classnames";
import { CSSProperties, useEffect, useState } from "react";

/***** IMPORTS *****/
import { PreviewCardContext } from "../context";
import '../_PreviewCard.scss'

/***** TYPE DEFINITIONS *****/
type PreviewCard = React.FC<{
  children: React.ReactNode
  className?: string
  width?: number
  height?: number
}>

/***** COMPONENT START *****/
export const _PreviewCard: PreviewCard = ({ children, className, width, height }) => {
  /***** STATE *****/
  const [tabs, setTabs] = useState<string[]>([]);
  const [hovered, setHovered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  /***** EFFECTS *****/
  useEffect(() => {
    const callback = () => setActiveTab((activeTab) => {
      const index = tabs.indexOf(activeTab ?? tabs[0]);
      return tabs[(index + 1) % tabs.length]
    });

    callback();
    const interval = setInterval(callback, 5000);

    return () => clearInterval(interval);
  }, [tabs])

  /***** RENDER HELPERS *****/
  const classes = {
    inner: classNames("PreviewCard"),
    hover: classNames("PreviewCard__HoverOutline", className, {
      "PreviewCard__HoverOutline--hovered": hovered
    })
  }

  const style = {
    '--height': height ? `${height}px` : undefined,
    '--width': width ? `${width}px` : undefined
  } as CSSProperties

  const context = {
    hovered,
    activeTab,
    setActiveTab,
    setHovered,
    tabs,
    setTabs,
    isReady: true
  }

  /***** RENDER *****/
  return (
    <PreviewCardContext.Provider value={context}>
      <div className={classes.hover}>
        <div className={classes.inner} style={style} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {children}
        </div>
      </div>
    </PreviewCardContext.Provider>
  )
}