import React from 'react';
import './App.scss';
import Navigation from "./navigation/Router";
import {StoreProvider} from "./stores/StoreProvider";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    return (
        <div className="App">
            <StoreProvider>
                <Navigation/>
            </StoreProvider>
        </div>
    );
});

export default App;
