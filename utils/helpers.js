export const Post = async ({ path = '', data, method = '', }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  let results = await fetch(`/api/${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'token': user?._id?.toString(),
    },
    body: JSON.stringify(data)
  });
  
  return await results.json();
};

export const Get = async (path) => {
  // const user = JSON.parse(localStorage.getItem('user'));
  let results = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/${path}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      // 'token': user?._id?.toString(),
    },
  });
  
  return await results.json();
};
