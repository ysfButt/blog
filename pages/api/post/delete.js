// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/post';

export default async (req, res) => {
  const { method, headers } = req;
  
  // if (!headers.token) return res.status(400).json({ success: false, message: 'User not authorised!' });
  
  await dbConnect();

  switch (method) {
    case 'DELETE':
      try {
        console.log("delete", req.body);
        const id = { _id: req?.body };
        const post = await Post.deleteOne(id);
        console.log("delete post", post);
        res.send({ success: true, message: "Post deleted successfully!", data: post });
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break;
    default:
      res.status(400).json({ success: false })
      break
  }
}
