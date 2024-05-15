import multer from "multer";
import { nanoid } from "nanoid";
import { v2 as cloudinary } from "cloudinary";
import express, { Express, Request, Response } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

function getExtension(filename: string) {
  const names = filename.split(".");
  if (names.length > 1) {
    return `.${names.pop()}`;
  }
  return "";
}

const upload = multer({
  storage: multer.diskStorage({
    destination: "imageFieldAPI/uploads",
    filename: function (req, file, cb) {
      const filename = `${nanoid()}${getExtension(file.originalname)}`;
      cb(null, filename);
    },
  }),
});

const app: Express = express();
const port = process.env.PORT || 4000;

app.post(
  "/upload",
  upload.single("file"),
  async (req: Request, res: Response) => {
    // req.file
    const filePath = req.file?.path;

    if (filePath) {
      const result = await cloudinary.uploader.upload(filePath);
      console.log(result);
      res.json({ url: result.secure_url });
    }
  }
);
