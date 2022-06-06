import React, { useContext } from 'react'
import { Globalcontext } from './context/Globalstate';
import { numwithcomma } from './formatting/format';

const Transaction = ({transaction}) => {
    const {deletetransaction} = useContext(Globalcontext);
    const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <>
    <li className={transaction.amount >0 ? 'plus':"minus"}> 
          {transaction.text} <span>{sign}₹{numwithcomma(Math.abs(transaction.amount))}</span> <button className='delete-btn' onClick={ () =>deletetransaction(transaction._id)}>x</button>
        </li>

    </>
  )
}

export default Transaction