const Post = async ({ path = '', data, method = '', }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  let results = await fetch(`/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'token': user?._id?.toString(),
    },
    body: JSON.stringify(data)
  });

  console.log("results", results);
  console.log("detail", path, data, method);

  await results.json();

  return { data };
};

export default Post;
