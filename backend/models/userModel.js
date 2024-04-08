const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto=require("crypto")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  age: {
    type: String,
    required: [true, "Please Enter Your Age"],
  },
  gender: {
    type: String,
    required: [true, "Please Enter Your Gender"],
  },
  Batch: {
    type: String,
    // required: [true, "Please Enter Your Gender"],
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  mobileNumber: {
    type: String,
    unique: true,
    required: [true, "Please Enter Your Mobile Number"],
  },
  mobileNumberParent: {
    type: String,
    unique: true,
    // required: [true, "Please Enter Your Parent Mobile Number"],
  },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
          role: {
            type: String,
            default: "user",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
          school: {
            type: String,
            required: true,
        },
        
          resetPasswordToken: String,
          resetPasswordExpire: Date,
    
  });

  userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

   // JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}

// compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getresetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};



  module.exports = mongoose.model("User", userSchema);