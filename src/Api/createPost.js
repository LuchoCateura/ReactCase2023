const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function createPost(formValues) {
  var formdata = new FormData();

  formdata.append('title', formValues.title);
  formdata.append('content', formValues.content);
  formdata.append('category_id', formValues.categorie_id);
  formdata.append('image', formValues.image);

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
