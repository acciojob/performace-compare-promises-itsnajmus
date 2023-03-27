// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
function fetchApiData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function fetchDataWithPromiseAll() {
  const startTime = performance.now();
  Promise.all(apiUrls.map(fetchApiData))
    .then(data => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-all").innerHTML = `Promise.all took ${timeTaken} milliseconds`;
      console.log(data);
    });
}

function fetchDataWithPromiseAny() {
  const startTime = performance.now();
  Promise.any(apiUrls.map(fetchApiData))
    .then(data => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;
      document.getElementById("output-any").innerHTML = `Promise.any took ${timeTaken} milliseconds`;
      console.log(data);
    });
}

fetchDataWithPromiseAll();
fetchDataWithPromiseAny();
// You can write your code here
