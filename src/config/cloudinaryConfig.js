const { CLOUDINATY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./serverConfig');

const cloudinary = require('cloudinary').v2;


// configuring cloudinary

cloudinary.config({
    cloud_name: CLOUDINATY_CLOUD_NAME,
    api_key : CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

module.exports = cloudinary;

// api key config in cloudinary object
// then cloudinary object is used to upload files