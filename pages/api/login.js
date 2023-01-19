// posts.js

import mongoConnection from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await mongoConnection();
  const db = client.db("blog");

  // console.log("method", req.method);

  const Users = db.collection('users');
  
  // app.post('/api/login', async (req, res) => {
  // });

  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email, password });

    // console.log("users...", user);

    if (user) {
      res.send({ success: true, message: "Logged in successfully!", user });
    } else {
      throw new Error("Invalid login credentials!");
    }

  } catch (err) {
    res.send({ success: false, message: err.message });
  }

  // switch (req.method) {
  //   case "POST":
  //     let bodyObject = JSON.stringify(req.body);
  //     let user = await db.collection("admin").insertOne(bodyObject);
  //     res.json(user.ops[0]);
  //     break;
  //   case "GET":
  //     const allPosts = await db.collection("allPosts").find({}).toArray();
  //     res.json({ status: 200, data: allPosts });
  //     console.log("req", req.body);
  //     break;
  // }
}

// import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//    try {
//     const client = await clientPromise;
//     const db = client.db("blog");

//     const { email, password } = req.body;

//     console.log({email, password});

//     // console.log({res, req});

//     // console.log(db);

//     const movies = await db
//       .collection("movies")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(10)
//       .toArray();

//     console.log(movies);

//     res.json({ status: 200, data: movies, name: "joe" });
//    } catch (e) {
//     console.error(e);
//    }
// };
