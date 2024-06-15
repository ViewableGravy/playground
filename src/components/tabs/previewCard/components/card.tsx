/***** BASE IMPORTS *****/
import classNames from "classnames";
import { useEffect, useLayoutEffect, useState } from "react";

/***** UTILITIES *****/
import { useStyle } from "../../../../utilities/hooks/useStyle";

/***** IMPORTS *****/
import { PreviewCardContext } from "../context";

/***** TYPE IMPORTS *****/
import type { ValueOf } from "src/global";

/***** CONSTS *****/
import '../_PreviewCard.scss'

/***** TYPE DEFINITIONS *****/
type PreviewCard = React.FC<{
  children: React.ReactNode
  className?: string
  width?: ValueOf<ReturnType<typeof useStyle>>
  height?: ValueOf<ReturnType<typeof useStyle>>
}>

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

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

  const style = useStyle({ height, width })

  /***** RENDER HELPERS *****/
  const classes = {
    inner: classNames("PreviewCard"),
    hover: classNames("PreviewCard__HoverOutline", className, {
      "PreviewCard__HoverOutline--hovered": hovered
    })
  }

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