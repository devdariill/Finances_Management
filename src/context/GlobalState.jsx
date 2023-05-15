import { createContext, useContext, useReducer } from "react";
import ReducerState from "./reducerState";

export const Context = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useGlobalState () {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useGlobalState debe estar dentro del proveedor GlobalState");
    }
    return context;
}

const initalState = {
    transactions: []
}

// eslint-disable-next-line react/prop-types
export function GlobalProvider  ({ children }) {
    const [state, dispatch] = useReducer(ReducerState,initalState)
    return (
        <Context.Provider
            value={{
                transactions: state.transactions,
            }}
        >
            {children}
        </Context.Provider>
    );
}
