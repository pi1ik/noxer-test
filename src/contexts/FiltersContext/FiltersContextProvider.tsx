import React from "react";

import { FiltersContext } from "./FiltersContext";

type FiltersContextProviderProps = {
    children: React.ReactNode;
};

export const FiltersContextProvider = ({ children }: FiltersContextProviderProps) => {

    const [activeFilter, setActiveFilter] = React.useState<number>(NaN);
    const changeActiveFilter = (sortOrder: number) => {
        setActiveFilter(sortOrder);
    }

    return (
        <FiltersContext.Provider value={{ activeFilter, changeActiveFilter }}>
            {children}
        </FiltersContext.Provider>
    )
};