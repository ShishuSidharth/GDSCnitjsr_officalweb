const cloudinary=require("cloudinary").v2
// otenv"
// dotenv.config()
          
cloudinary.config({ 
  cloud_name:"dmo1egafg", 
  api_key: "179955851864828", 
  api_secret:"_yi7Ev9EyvfjCuye__J65BQPdbA"
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
