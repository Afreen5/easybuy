const multer=require("multer")
let dir=".././uploads"
let storage=multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "dir");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage})
module.exports=upload
