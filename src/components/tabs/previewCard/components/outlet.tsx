import classNames from "classnames"
import { Switch } from "../../../conditionalRender"
import { useContextSelector } from "use-context-selector"
import { PreviewCardContext } from "../context"
import { OutletItem } from "./item"

/***** TYPE DEFINITIONS *****/
type PreviewCardOutlet = React.FC<{
  className?: string
  children?: (tabs: string[]) => React.ReactElement
}>

export const _PreviewCardOutlet: PreviewCardOutlet = ({ className, children }) => {
  /***** HOOKS *****/
  const tabs = useContextSelector(PreviewCardContext, ({ tabs }) => tabs)

  /***** RENDER HELPERS *****/
  const outerClass = classNames("PreviewCard__Outlet", className);

  /***** RENDER *****/
  return (
    <Switch 
      state={typeof children} 
      onState={{ 
        function: typeof children === 'function' ? children(tabs) : null,
        undefined: (
          <div className={outerClass}>
            {tabs.map((tab) => <OutletItem key={tab} id={tab} />)}
          </div>
        )
      }} 
    />
  )
}