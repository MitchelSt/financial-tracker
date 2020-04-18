import React, { createContext, useReducer } from 'react'
import AppReducer from '../reducers/AppReducer'


const initialState = {
    transactions: [
        { id: 1, text: 'AirBnB', amount: -475 },
        { id: 2, text: 'Airline Ticket', amount: -250 },
        { id: 3, text: 'Ski Pass', amount: -230 }
    ]
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>)
}