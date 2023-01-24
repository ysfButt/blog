// Connection
import dbConnect from '../../../lib/dbConnect';

// Methods
import Post from './post';
import Get from './get';

export default async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET': return Get(req, res);
    case 'POST': return Post(req, res);
    default: res.status(400).json({ success: false });
  }
}

