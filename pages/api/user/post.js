// Models
import User from '../../../models/users';

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await User.findOne({ email, password }).exec();

    if (users) {
      res.send({ success: true, message: "Logged in successfully!", users });
    } else {
      throw new Error("Invalid login credentials!");
    }

    return;

  } catch (error) {
    res.status(400).json({ success: false })
  }
}
