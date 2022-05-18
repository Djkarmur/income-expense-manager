import React, { createContext, useReducer } from 'react'
import Appreducer from './Appreducer';
const initialstate = {
   transactions:[ 
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
]
};

//create context

export const Globalcontext= createContext(initialstate);

//provider
export const Globalprovider = ({children}) =>{
    const [state,dispatch]= useReducer(Appreducer,initialstate)


    // actions
    function deletetransaction (id){
      dispatch({
          type:"delete-trans",
          payload:id,
      });
    }

    function addtransaction (transaction){
        dispatch({
            type:"add-trans",
            payload:transaction,
        });
      }

    return(
        <>
        <Globalcontext.Provider value={{
            transactions:state.transactions,deletetransaction,addtransaction
        }}>
            {children}
        </Globalcontext.Provider>
        </>
    )
}
