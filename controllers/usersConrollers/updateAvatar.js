const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");
const tempDir = path.join(__dirname, "../../", "temp")

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname: originalName } = req.file;
  const extention = originalName.split(".").pop();
  if (extention !== "png" && extention !== "jpeg" && extention !== "jpg") {
    await fs.unlink(`${tempDir}/${originalName}`, (err => {
      if (err) console.log(err);}))
    throw RequestError (401, "Wrong format! You need use files with extention .png .jpg .jpeg")
  } 
  const avatarName = `${_id}.${extention}`;
  const resultUpload = path.join(avatarDir, avatarName);
  await fs.rename(tempUpload, resultUpload);
  await Jimp.read(resultUpload)
    .then((avatar) => {
      return avatar.resize(250, 250).write(resultUpload);
    })
    .catch((error) => {
      console.log(error);
    });
  const avatarURL = `http://localhost:${process.env.PORT}/avatars/${avatarName}`;
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = updateAvatar;
