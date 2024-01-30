const { pool } = require('../connection/postgresql');

const checkEmail = async(req,res, next)=>{
  
      const {email} = req.body;
  
      try{
          
       const query =  `SELECT * from users where email = '${email}'`;

      const result= await pool.query(query)
        if(result){
            next()
        }
        else{
            res.status(404).json("user already exist")
        }          
      }catch(error){
       res.status(500).json("server error")
      }
   }
   module.exports= checkEmail
  