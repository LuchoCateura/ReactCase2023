const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function createPost() {
  var formdata = new FormData();
  formdata.append('title', 'Test');
  formdata.append('content', 'Dit is een test bericht');
  formdata.append('category_id', '1');
  formdata.append('image', '', 'wp2324982.jpg');

  var requestOptions = {
    headers: headers,
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch(`${process.env.REACT_APP_API_URL}/posts`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
