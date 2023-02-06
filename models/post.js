// models/Posts.js

import mongoose from 'mongoose';
import { User } from '../models/user';

const MetaSchema = new mongoose.Schema({
  title: String,
  description: String,
  focusedKeywords: String,
  cononical: String,
  noIndex: Boolean,
  noFollow: Boolean,
  tags: Array,
  markup: Boolean
});

const PostSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  title: { type: String, required: true, },
  description: { type: String, required: true, },
  isPublished: Boolean,
  isStarred: Boolean,
  headings: Array,
  meta: MetaSchema,
  facebookMeta: {
    title: String,
    description: String,
  },
  twitterMeta: {
    title: String,
    description: String,
  },
  excerpt: String,
  featuredImageUrl: String,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // createdBy: mongoose.ObjectId
}, { timestamps: true });

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);
