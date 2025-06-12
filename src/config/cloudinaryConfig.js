const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('./serverConfig');

// import { v2 as cloudinary } from 'cloudinary';

// configuring cloudinary

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key : CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

module.exports = cloudinary;

// api key config in cloudinary object
// then cloudinary object is used to upload files
// upload object and multer function call with parameter