import React, { useState, useEffect } from 'react'


export default function Transaction({ transaction }) {
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
            <li className='minus'>
                {transaction.text}
                <span>{sign}${Math.abs(transaction.amount)}</span>
                <button className="delete-btn">x</button>
            </li>
        </div>
    )
}