let url = "https://jsonplaceholder.typicode.com/users";

function doFetch(data) {
  fetch(data)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

doFetch(url);
