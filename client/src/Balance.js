import React, { useContext } from 'react'
import { Globalcontext } from './context/Globalstate'
import { numwithcomma } from './formatting/format';

const Balance = () => {
  const {transactions} = useContext(Globalcontext);
  
  const amount = transactions.map(transactions =>transactions.amount);
  const total = amount.reduce((acc,item)=>(acc=acc+item),0).toFixed(2);
  return (
      <>
    <h3>Your Balance</h3>
    <h1>₹{ numwithcomma(total)}</h1>
    </>

  )
}

export default Balance