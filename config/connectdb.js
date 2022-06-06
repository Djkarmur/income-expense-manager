const mongoose =require('mongoose');

const connectdb = async()=>{
  try{
      const conn= await mongoose.connect(process.env.MONGO_URL,{
         
      }); 
  console.log(`mongoDB connected : ${conn.connection.host}`)
  }catch (err){
   console.log(`error:${err.message}`);
   process.exit(1);
  }
}

module.exports=connectdb;