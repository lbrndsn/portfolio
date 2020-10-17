import React from 'react';
import { RouteStore } from './RouteStore';

export const storeContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
    const storeContainer = {
        routeStore: RouteStore(),
    };

    return <storeContext.Provider value={storeContainer}>{children}</storeContext.Provider>;
};
