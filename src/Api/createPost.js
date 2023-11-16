const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  'Content-Type': 'application/json',
  token: `${process.env.REACT_APP_TOKEN}`,
};

export default function createPost(formValues) {
  console.log(formValues);
  var formdata = new FormData();
  formdata.append('title', formValues.title);
  formdata.append('content', formValues.content);
  formdata.append('category_id', formValues.categorieId);
  formdata.append('image', formValues.image, formValues.image.name);

  var requestOptions = {
    headers: headers,
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch(`${process.env.REACT_APP_API_URL}/posts`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
