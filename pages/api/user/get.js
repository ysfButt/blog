// Models
import User from '../../../models/user';

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await User.findOne({ email, password }).exec();

    res.status(200).json({ success: true, data: users })
    
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
