import { Schema } from 'mongoose';

const sessionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: User },
});
