import React, {useReducer} from 'react';
import {BoosterDispatchContext, BoosterStateContext} from './BoosterContext';
import boosterReducer from "./boosterReducer";

export default function BoosterContextProvider({children}) {
    const [state, dispatch] = useReducer(boosterReducer, {
        boosterItems: [],
        fetchStatus: undefined,
    });

    return (
        <BoosterStateContext.Provider value={state}>
            <BoosterDispatchContext.Provider value={dispatch}>
                {children}
            </BoosterDispatchContext.Provider>
        </BoosterStateContext.Provider>
    );
}
