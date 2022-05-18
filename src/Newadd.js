import React, {  useContext, useState } from 'react'
import { Globalcontext } from './context/Globalstate';


const Newadd = () => {
  const [text,settext] = useState();
  const [amount,setamount] = useState(0);
  const {addtransaction} = useContext(Globalcontext);
 
  
  const onsubmit = () =>{
   
    const  newtrans ={
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:Number(amount)

    }

    addtransaction(newtrans);
  }

  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={(e)=>{
      e.preventDefault()
      onsubmit()
    }}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text"  placeholder="Enter text..." onChange={(e)=>{
          settext(e.target.value)
        }}/>
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number"   placeholder="Enter amount..." onChange={(e)=>{
          setamount(e.target.value)}}/>
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </>
  )
}

export default Newadd