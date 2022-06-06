import React, { useContext } from 'react'
import { Globalcontext } from './context/Globalstate'
import { numwithcomma } from './formatting/format';

const Inexpense = () => {
  const {transactions} = useContext(Globalcontext);
  const amount = transactions.map(transactions=>transactions.amount);
  const income = amount.filter((item)=>item>0).reduce((acc,item)=>(acc=acc+item),0).toFixed(2);

  const expense= amount.filter((item)=>item<0).reduce((acc,item)=>(acc=acc+item),0).toFixed(2);
  
  return (
    <>
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">₹{numwithcomma(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">₹{numwithcomma(expense)}</p>
        </div>
      </div>
    </>
  )
}

export default Inexpense