/***** BASE IMPORTS *****/
import { createContext } from "use-context-selector";

/***** TYPE DEFINITIONS *****/
type PreviewCardContext = {
  isReady: boolean, // represents whether the preview card is ready to be displayed
  hovered: boolean, // null or id of the hovered card
  setHovered: React.Dispatch<React.SetStateAction<boolean>>,

  tabs: string[],
  setTabs: React.Dispatch<React.SetStateAction<string[]>>,

  activeTab: string | null,
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>
}

type PreviewCardTabContext = {
  id: string
}

const noop = () => {}

/***** CONTEXT START *****/
export const PreviewCardContext = createContext<PreviewCardContext>({
  hovered: false,
  isReady: false,
  setHovered: noop,
  tabs: [],
  setTabs: noop,
  activeTab: null,
  setActiveTab: noop
});

export const PreviewCardTabContext = createContext<PreviewCardTabContext>({
  id: ""
});