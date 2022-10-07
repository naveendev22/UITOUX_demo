const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "post_best_seller",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("image");
module.exports = upload;
