// models/Posts.js

import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  // _id: mongoose.ObjectId,
  title: String,
  content: String,
  // isPublished: Boolean,
  // isStarred: Boolean,
  // checkboxes: Object,
  // meta: Object,
  // socialMediaMeta: Object,
  // excerpt: String,
  // featuredImageUrl: String,
  // createdAt: Boolean,
  // updatedAt: Boolean,
  // createdBy: Boolean
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)