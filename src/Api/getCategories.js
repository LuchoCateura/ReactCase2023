const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function getCategories(setCategories) {
  var requestOptions = {
    headers: headers,
    method: 'GET',
    redirect: 'follow',
  };

  fetch(`${process.env.REACT_APP_API_URL}/categories`, requestOptions)
    .then(response => response.json())
    .then(result => {
      setCategories(result);
    })
    .catch(error => console.log('error', error));
}
