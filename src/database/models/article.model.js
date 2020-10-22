import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const articleModel = mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: '',
  },
  comments: [
    {
      text: String,
      postedBy: {
        type: ObjectId,
        ref: 'User',
      },
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Article', articleModel);
