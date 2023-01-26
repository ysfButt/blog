// Models
import User from '../../../models/user';

export default async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password }).select('_id email').exec();

    if (!user) throw new Error("Invalid login credentials!");
    
    res.send({ success: true, message: "Logged in successfully!", user });

  } catch (error) {
    res.status(400).json({ success: false, message: error?.message })
  }
}
