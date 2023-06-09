// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/post';

export default async (req, res) => {
  const { method, headers } = req;
  
  // if (!headers.token) return res.status(400).json({ success: false, message: 'User not authorised!' });
  
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const post = await Post.create({ ...req?.body, createdBy: headers?.token, isPublished: false, isStarred: false });
        res.send({ success: true, message: "Post created successfully!", data: post });
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message });
      }
      break
    default:
      res.status(400).json({ success: false });
      break
  }
}
