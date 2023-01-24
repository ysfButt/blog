// api/users.js

import dbConnect from '../../lib/dbConnect';
import User from '../../models/users';

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  const { email, password } = req.body;

  switch (method) {
    case 'GET': {
      try {
        const users = await User.findOne({ email, password }).exec();

        res.status(200).json({ success: true, data: users })
        
      } catch (error) {
        res.status(400).json({ success: false })
      }
    }
    break
    case 'POST': {
      try {
        const users = await User.findOne({ email, password }).exec();

        if (users) {
          res.send({ success: true, message: "Logged in successfully!", users });
        } else {
          throw new Error("Invalid login credentials!");
        }

      } catch (error) {
        res.status(400).json({ success: false })
      }
    }
    break
    default: {
      res.status(400).json({ success: false })
    }
    break
  }
}
