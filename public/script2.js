fetch("https://jsonplaceholder.typicode.com/posts").then(async (response) => {
  console.log(await response.json());
});
