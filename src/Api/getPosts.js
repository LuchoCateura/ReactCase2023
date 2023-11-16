const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function getPosts(setLatestPosts, params) {
  var requestOptions = {
    headers: headers,
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `${process.env.REACT_APP_API_URL}/posts?page=${params.page}&perPage=${params.perPage}&sortDirection=${params.sortDirection}`,
    requestOptions
  )
    .then(response => response.json())
    .then(result => {
      setLatestPosts(result.data);
    })
    .catch(error => console.log('error', error));
}
