// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("blog");

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.stringify(req.body);
      let user = await db.collection("admin").insertOne(bodyObject);
      res.json(user.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("allPosts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
  // console.log("req", req.body);
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
