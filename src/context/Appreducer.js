export default (state,action) =>{
    switch(action.type){
        case "delete-trans":
            return{
                ...state,
                 transactions:state.transactions.filter(transactions => (transactions.id !== action.payload))
            }
        case "add-trans":
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state;
    }
}