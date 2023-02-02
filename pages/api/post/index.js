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
        const _id = req?.body?.postId;
        const post = await Post.findOne({ _id }).exec();
        res.send({ success: true, message: "Post get successfully!", post });
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
