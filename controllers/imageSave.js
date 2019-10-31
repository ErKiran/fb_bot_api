const fs = require('fs');
const path = require('path');
const axios = require('axios')
const saveImageFromUrlToDisk = async (url,localPath)=>{
    try{
    if (!fs.existsSync(localPath)){
        fs.mkdirSync(localPath,{recursive: true});
    }
    const file = fs.createWriteStream(localPath);
    const fileupload = await axios.get(url);

    return fileupload.data.pipe(file)
}
catch(e){
    throw new Error(e)
}
  }

  exports.fetchSavedImageFromDisk = (pageId,imageURL) =>{
    const uploadDir = `./public/uploads${pageId}/profileImage`;
    const dir = path.join(__dirname,'../',uploadDir)
    const receivedData = saveImageFromUrlToDisk(imageURL,dir);
    console.log(receivedData)
    return receivedData;
  }