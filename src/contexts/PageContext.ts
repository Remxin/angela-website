import { Dispatch, createContext } from "react";
type contextType = {
    currentUrl: string
    setCurrentUrl: Dispatch<string>
}

export const PageContext = createContext<contextType | null>(null)