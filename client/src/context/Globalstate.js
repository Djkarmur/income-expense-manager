import React, { createContext, useReducer } from 'react'
import axios from 'axios';
import Appreducer from './Appreducer';

const initialstate = {
   transactions:[ 
    
],error:null,loading:true
};

//create context

export const Globalcontext= createContext(initialstate);

//provider
export const Globalprovider = ({children}) =>{
    const [state,dispatch]= useReducer(Appreducer,initialstate)


    // actions
   async function gettransaction(){
     try { const res=await axios.get('/api/v1/transaction');
       dispatch({
           type:'get-trans',
           payload:res.data.data,
       });
    } catch(err){
        dispatch({
            type:'err-trans',
            payload:err.response.data.error,
       });
   }
}
    async function deletetransaction (id){
        
        try {
            await axios.delete(`/api/v1/transaction/${id}`);
            dispatch({
                type:"delete-trans",
                payload:id,
            });

        } catch (err) {
            dispatch({
                type:'err-trans',
                payload:err.response.data.error,
           });
        }
     
    }

    async function addtransaction (transaction){
        const config={
            Headers:{
                'Content-Type':'application/json',
            }
        }
        try {
            const res=await axios.post('/api/v1/transaction',transaction,config);
            dispatch({
                type:"add-trans",
                payload:res.data.data,
            });
            
        } catch (err) {
            dispatch({
                type:'err-trans',
                payload:err.response.data.error,
           });
        }
      
      }

    return(
        <>
        <Globalcontext.Provider value={{
            transactions:state.transactions,deletetransaction,addtransaction,gettransaction,error:state.error,loading:state.loading
        }}>
            {children}
        </Globalcontext.Provider>
        </>
    )
}
