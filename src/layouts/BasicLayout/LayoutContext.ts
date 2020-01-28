import {createContext} from "react";

interface LayoutContext {
    collapsed: boolean;
    dispatchCollapsed: () => void;
}

const LayoutContext = createContext({} as LayoutContext)

export const LayoutContextProvider = LayoutContext.Provider
export const LayoutContextConsumer = LayoutContext.Consumer

export default LayoutContext
