const { findById } = require('../modals/transact');
const transaction=require('../modals/transact');

exports.gettrans= async (req,res,next)=>{
    try{
    const transactions=await transaction.find();
  return res.status(200).json(
      {
          success:true,
          count:transactions.length,
          data:transactions,
      }
  );
    } catch(err){
       return res.status(500).json(
           {
               success:false,
               error:'server error'
           }
       );
    }
}

exports.addtrans=async(req,res,next)=>{
   try {
     const { text,amount }=req.body;
     const transactions=await  transaction.create(req.body);
     return  res.status(201).json({
         success:true,
         data:transactions
     });
   } catch (err) {
     if(err.name==='validationError'){
         const messages=Object.values(err.errors).map(val=>val.message);
         return res.status(400).json({
             success:false,
             error:messages
         })
     } else{
         return res.status(500).json({
            
                success:false,
                error:'server error'

         })
     }
   }
}

exports.deletetrans= async(req,res,next)=>{
    try{
        const transactions=await transaction.findById(req.params.id);

        if(!transactions){
            return res.status(404).json({
                success:false,
                error:'no transaction found'
            })
        }
        await transactions.remove();
        return res.status(200).json({
            success:true,
            data:[],
        })

    } catch(err){
        return res.status(500).json({       
            success:false,
            error:'server error'
     })
    }
   
}