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
        if (req?.body?._id) {
          const id = { _id: req?.body?._id };
          const post = await Post.findOneAndUpdate(id, req?.body, { new: true });
          res.send({ success: true, message: "Post item successfully!", data: post });
        } else {
          const id = { _id: req?.body?.postId };
          const post = await Post.findOneAndUpdate(id, req?.body, { new: true });
          res.send({ success: true, message: "Post updated successfully!", data: post });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
