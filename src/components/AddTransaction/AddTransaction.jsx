import React, { useState, useEffect, useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import newId from '../../utils/newId'


export const AddTransaction = (newId) => {
    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

        const newTransaction = {
            id: Math.random(),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)

        setText('')
        setAmount('')
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input
                type="text"
                placeholder="Enter text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                autoFocus
                />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input
                type="number"
                placeholder="Enter amount..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                />
                </div>
                <button
                className="btn">Add transaction</button>
            </form>
        </div>
    )
}