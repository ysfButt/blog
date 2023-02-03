const Get = async (path) => {
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

export default Get;
