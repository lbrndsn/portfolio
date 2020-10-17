import React, {useContext} from 'react';
import {useLocalStore} from 'mobx-react-lite';
import {storeContext} from './StoreProvider';
import {routes} from "../navigation/Router";

export const RouteStore = () => {
    const store = useLocalStore(() => ({
        activeRoute: routes[0].link,
        closure: () => null,
    }));

    return store;
};

export const useRouteStore = () => {
    const {routeStore} = useContext(storeContext);

    if (!routeStore) {
        throw new Error('RouteStore could not be used.');
    }

    return routeStore;
};
