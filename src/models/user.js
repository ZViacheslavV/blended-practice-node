import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/* userSchema.pre('save', async function () {
  if (!this.userName) {
    this.userName = this.email;
  }
}); */

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const User = model('User', userSchema);
