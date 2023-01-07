import { Dispatch, createContext } from "react";

type contextType = {
    visible: boolean
    setVisible: Dispatch<boolean>
}
export const NavbarContext = createContext<null | contextType>(null)