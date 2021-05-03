const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const hash = await bcrypt.hashSync(this.password, 8);
  this.password = hash;

  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  const dataPassword = `${this.getUpdate().password}`;

  if (dataPassword < 50) {
    this.getUpdate().password = bcrypt.hashSync(dataPassword, 8);
  }

  next();
});

module.exports = mongoose.model('User', UserSchema);
