const fs = require('fs');
const path = require('path');
const https = require('https')
const saveImageFromUrlToDisk = (url, localPath, fname, lname) => {
  try {
    if (!fs.existsSync(localPath)) {
      fs.mkdirSync(localPath, { recursive: true });
    }
    const file = fs.createWriteStream(`${localPath}/${fname}_${lname}.png`);
    https.get(url, function (response) {
      response.pipe(file);
    });

    if (fs.existsSync(`${localPath}/${fname}_${lname}.png`)) {
      const imageURL = `${localPath}/${fname}_${lname}.png`
      return imageURL;
    }
  }
  catch (e) {
    throw new Error(e)
  }
}

exports.fetchSavedImageFromDisk = (pageId, imageURL, firstname, lastname) => {
  const uploadDir = `./public/uploads${pageId}/profileImage`;
  const dir = path.join(__dirname, '../', uploadDir)
  const receivedData = saveImageFromUrlToDisk(imageURL, dir, firstname, lastname);
  return receivedData;
}