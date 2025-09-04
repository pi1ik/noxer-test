import React from "react";

type FiltersContextType = {
    activeFilter: number;
    changeActiveFilter: (sortOrder: number) => void
}

const initialContext = {
    activeFilter: NaN,
    changeActiveFilter: () => {}
}

export const FiltersContext = React.createContext<FiltersContextType>(initialContext);