export default (state,action) =>{
    switch(action.type){
        case "delete-trans":
            return{
                ...state,
                 transactions:state.transactions.filter(transactions => (transactions._id !== action.payload))
            }
        case "add-trans":
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        case 'get-trans':
            return{
                ...state,
                loading:false,
                transactions:action.payload,  
            }    
        case 'err-trans':
            return{
                ...state,
                error:action.payload,
            }
           
        default:
            return state;
    }
}