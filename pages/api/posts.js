// api/users.js

import dbConnect from '../../lib/dbConnect';
import Post from '../../models/posts';

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  const { title, content } = req.body;

  switch (method) {
    case 'GET':
      try {
        const post = await Post.find({})
        res.status(200).json({ success: true, data: post })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log(title, content);
        const post = await Post.create(req.body);
        console.log("post 1",post);

        if (title) {
          res.send({ success: true, message: "Posts page Visible!" });
        } else {
          throw new Error("Posts page not Visible!");
        }

      } catch (error) {
        res.status(400).json({ success: false, message: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }

  // switch (method) {
  //   case 'POST': {
  //     try {
  //       console.log("inner", req.body);
  //       const posts = await Post.create(req.body);

  //       console.log("posts", posts);

  //       res.status(200).json({ success: true, data: posts });
        
  //     } catch (error) {
  //       res.status(400).json({ success: false })
  //     }
  //   }
  //   break
  //   // case 'POST': {
  //   //   try {
  //   //     const posts = await Post.findOne().exec();

  //   //     res.status(200).json({ success: true, data: posts });

  //   //   } catch (error) {
  //   //     res.status(400).json({ success: false })
  //   //   }
  //   // }
  //   // break
  //   default: {
  //     res.status(400).json({ success: false })
  //   }
  //   break
  // }
}
