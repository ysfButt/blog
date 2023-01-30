// api/users.js

import dbConnect from '../../../lib/dbConnect';
import Post from '../../../models/post';

export default async (req, res) => {
  const { method, headers } = req;
  
  // if (!headers.token) return res.status(400).json({ success: false, message: 'User not authorised!' });
  
  await dbConnect();

  console.log(method);

  switch (method) {
    case 'GET':
      try {
        const post = await Post.find();
    
        res.status(200).json({ success: true, data: post })
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break 
    case "PUT": 
      try {
        if(req.body._id) {
          const post = await Post.findOneAndUpdate({ _id }).exec();
          // console.log(post);
        } else {
          throw new Error("Invalid ID!");
        }
        
      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break
    case 'POST':
      try {
        const post = await Post.create(req.body);

        res.send({ success: true, message: "Post created successfully!", data: post });

      } catch (error) {
        res.status(400).json({ success: false, message: error?.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }

}
