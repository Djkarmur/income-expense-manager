
export function numwithcomma(x){
    var res= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return res;
}


