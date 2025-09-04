import React from "react";

import { DataContext } from "./DataContext";
import type { DataContextType } from "./DataContext";

type DataContextProviderProps = {
    children: React.ReactNode;
    props: DataContextType
};
export const DataContextProvider = ({ children, props }: DataContextProviderProps) => {
    return (
        <DataContext.Provider value={props}>
            {children}
        </DataContext.Provider>)
};