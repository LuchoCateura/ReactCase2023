const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function getPosts() {
  var requestOptions = {
    headers: headers,
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `${process.env.REACT_APP_API_URL}/posts?page=1&perPage=10&sortBy=title&sortDirection=asc&searchPhrase=test ber&categoryId=1`,
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
