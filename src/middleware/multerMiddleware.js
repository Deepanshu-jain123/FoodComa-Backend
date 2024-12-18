const multer = require('multer');
const path = require('path')
// path is node js module
const storageConfiguration = multer.diskStorage({
    destination : (req, file, next) => {
        next(null, 'uploads/')
    },
    filename: (req, file, next) =>{
        console.log(file)
        next(null,`${Date.now()}${path.extname(file.originalname)}` )
    }
})
// fetch extainsion using path.extname()
// create upload folder
// return uploader middleware
// filename is callback req object etc
// call next middle ware it used to save the file
const uploader = multer({storage: storageConfiguration});
module.exports = uploader;
// multer ko define kara file kha store honi chaiye or kis name se honi chahiye