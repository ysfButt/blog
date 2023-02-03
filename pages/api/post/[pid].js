// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/post';

export default async (req, res) => {
  const { method, headers } = req;
  const { pid } = req.query;
  
  // if (!headers.token) return res.status(400).json({ success: false, message: 'User not authorised!' });
  
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const _id = pid;
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
