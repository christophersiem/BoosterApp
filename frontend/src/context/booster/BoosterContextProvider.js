import React, { useReducer } from 'react';
import { BoosterStateContext, BoosterDispatchContext } from './BoosterContext';
import boosterReducer from "./boosterReducer";

export default function BoosterProvider({ children }) {
    const [state, dispatch] = useReducer(boosterReducer, {
        booster: [],
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
