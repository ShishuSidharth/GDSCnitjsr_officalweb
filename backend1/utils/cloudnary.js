const cloudinary=require("cloudinary").v2
// otenv"
// dotenv.config()
require('dotenv').config({path:'../.env'});        
cloudinary.config({ 
<<<<<<< HEAD
  cloud_name: process.env.cLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
=======
  cloud_name:"dmo1egafg", 
  api_key: "179955851864828", 
  api_secret:"_yi7Ev9EyvfjCuye__J65BQPdbA"
>>>>>>> 87b60025a0fa906bef7c23d660b27b53f68d77ca
});


//hellow 

// const uploadOncloudinary=async (localFilePath)=>{
//   try {if(!localFilePath) return null
//   const response=await  cloudinary.uploader.upload(localFilePath,{
//         resource_type:"auto"

//     })
//     console.log("file is uploaded on cloudinary",response.url)
//     return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath)
//     return null
//   }
// }
    module.exports=cloudinary



// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });
