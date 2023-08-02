import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  //instance method created in UserModel
  //converting user to JSON b/c converted to Obj in instance method so password can be removed
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user });
};

const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  // make sure that password is not shown
  delete newUser.password;

  if (req.file) {
    const res = await cloudinary.v2.uploader.upload(req.file.path);
    //removes file if file is successfully uploaded to cloudinary
    await fs.unlink(req.file.path);
    newUser.avatar = res.secure_url;
    newUser.avatarPublicId = res.public_id;
  }

  const oldUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && oldUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(oldUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "update user" });
};

export { getCurrentUser, getApplicationStats, updateUser };
