import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

////DISK STORAGE METHOD FOR UPLOADING PHOTOS////
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname;
//     cb(null, fileName);
//   },
// });

//const upload = multer({ storage });

export default upload;
