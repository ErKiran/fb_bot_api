const fs = require('fs');
const path = require('path');
const https = require('https')
const saveImageFromUrlToDisk = async (url,localPath)=>{
    try{
    if (!fs.existsSync(localPath)){
        fs.mkdirSync(localPath,{recursive:true});
    }
    const file = fs.createWriteStream(`${localPath}/profile.png`);
    const request = https.get(url, function(response) {
    response.pipe(file);
    });
    return request
}
catch(e){
    return e
}
  }

  exports.fetchSavedImageFromDisk = (pageId,imageURL) =>{
    const uploadDir = `./public/uploads${pageId}/profileImage`;
    const dir = path.join(__dirname,'../',uploadDir)
    const receivedData = saveImageFromUrlToDisk(imageURL,dir);
    console.log(receivedData)
    return receivedData;
  }