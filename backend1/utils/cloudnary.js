import { v2 as cloudinary } from "cloudinary";
// otenv"
// dotenv.config()
          
cloudinary.config({ 
  cloud_name: 'dijgjfbjt', 
  api_key: '731835933899935', 
  api_secret: 'TjqVL3LomnHV7LBxd-WgMQ9ToOE'
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
    export defaultcloudinary



// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });