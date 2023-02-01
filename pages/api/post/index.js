// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/post';

export default async (req, res) => {
  const { method, headers } = req;
  
  // if (!headers.token) return res.status(400).json({ success: false, message: 'User not authorised!' });
  
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const post = await Post.find();
        res.status(200).json({ success: true, data: post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break 
    case 'POST':
      try {
        if (req?.body?.postId) {
          const id = { _id: req?.body?.postId };
          const post = await Post.findOneAndUpdate(id, req?.body, { new: true });
          res.send({ success: true, message: "Post updated successfully!", data: post });
        } else if (req?.body?._id) {
          const id = { _id: req?.body?._id };
          const post = await Post.findOneAndUpdate(id, req?.body, { new: true });
          res.send({ success: true, message: "Post updated successfully!", data: post });
        } else {
          const post = await Post.create({ ...req?.body, createdBy: headers?.token });
          res.send({ success: true, message: "Post created successfully!", data: post });
        }
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break
    case 'DELETE':
      try {
        const id = { _id: req?.body };
        const post = await Post.deleteOne(id);
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
