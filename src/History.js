import React from 'react'
import { useContext } from 'react';
import { Globalcontext } from './context/Globalstate';
import Transaction from './Transaction';

const History = () => {

  const {transactions} = useContext(Globalcontext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction,i) =>(
          <Transaction  key={i} transaction={transaction}/>
        ))}
        
      </ul>
    </>
  )
}

export default History