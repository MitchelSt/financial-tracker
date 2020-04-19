import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


export default function Balance() {
    const { transactions } = useContext(GlobalContext)

    const total = Math.abs(transactions
        .reduce((acc, obj) => acc + obj.amount, 0))
        .toFixed(2)

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>€{total}</h1>
        </div>
    )
}