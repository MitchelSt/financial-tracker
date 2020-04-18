import React, { useState, useEffect } from 'react'


export default function Main() {
    const [username, setUsername] = useState('John')

    return (
        <div>
            <First
                render={() => (
                    <Second>
                        <Third>
                            console.log(username)
                            
                        </Third>
                    </Second>
                )}
            >
            </First>
        </div>
    )
}

function First() {
    return (
        <div>
            First
        </div>
    )
}

function Second() {
    return (
        <div>
            Second
        </div>
    )
}

function Third() {
    return (
        <div>
            Third
        </div>
    )
}