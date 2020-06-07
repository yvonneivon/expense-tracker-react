import React, { useState } from 'react'

//Hooks happened here
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label>Text</label>
                    {/* Hooks */}
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label
                    >Amount <br />
                    (negative - expense, positive - income)</label
                    >
                    {/* Hooks */}
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
