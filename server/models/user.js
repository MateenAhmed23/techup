const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  // other fields as needed
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// const mongoose = require("mongoose");

// const User = new mongoose.Schema({
//   name: {type: String,required: true},
//   email: {type: String,required: true,unique: true},
//   password: {type: String,required: true},
//   role: {type: String, default: 'client'},
//   tokens: [String]
// }, {collection: 'user-data'});

// const model = mongoose.model("UserData", User);

// module.exports = model;
