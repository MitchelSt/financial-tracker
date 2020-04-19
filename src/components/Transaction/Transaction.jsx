import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const [sign, setSign] = useState('')

    useEffect(() => {
        if (transaction.amount > 0) {
            return setSign('+')
        } else if (transaction.amount < 0) {
            return setSign('-')
        } else {
            return setSign('')
        }
    }, [transaction.amount])

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text}
                <span>{sign}€{Math.abs(transaction.amount)}</span>
                <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
                >x</button>
            </li>
        </div>
    )
}