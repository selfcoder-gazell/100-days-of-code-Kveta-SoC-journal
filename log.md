# 100 Days Of Code - KVETA'S LOG


### DAY 14: SEPTEMBER 21, THURSDAY, 2023 (NESTED DATA STRUCTURE)

** Today's PROGRESS**:

** THOUGHTS:**

** CODE FROM SoC Coaches: 
JS FILE
fetchTest.js
// Write a simple function to test the Dad Jokes API
async function fetchJoke() {
  console.log("The fetch function works!");
​
  // Make a HTTP GET request with the fetch method
  // HTTP METHOD: GET
  // Address: https://icanhazdadjoke.com/
  // Header: Accept: application/json
​
  // Declare a variable to store the HTTP response
  const response = await fetch("https://icanhazdadjoke.com/fake123", {
    headers: {
      Accept: "application/json",
    },
  });
​
  // If the request fails log out an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
​
  // Use the json method that parses the reponses body as JSON.
  const data = await response.json();
​
  // Log out our parsed data
  console.log(typeof data, data);
  alert(data.joke);
}
​
fetchJoke();

HTML FILE
fetch.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Testing Fetch</title>
  </head>
  <body>
    <h1>Testing Fetch</h1>
    <script src="fetchTest.js"></script>
  </body>
</html>

Here is the example of using the fetch API to give my app access to jokes from the external API. 
// Asynchronously retrieves a joke and displays it
async function getAndDisplayNewJoke() {
  const joke = await retrieveJoke();
  displayJoke(joke);
}
​
// Function to asynchronously retrieve a random joke from an API
async function retrieveJoke() {
  // Send a GET request to the dad joke API. Await the response.
  // Declare a variable to store the HTTP response
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
​
  // Check if the response failed, and if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }
​
  // return the parsed JSON from the response (which contains the joke object)
  const data = await response.json();
  return data;
}
​
// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke.joke;
}
​
// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);
​
// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");
​
// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);

** LINK TO WORK:
Classroom link for this morning: https://classroom.github.com/a/BBZFWYx3
Here is the app/workshop: https://classroom.github.com/a/Qp9AvG-m
Here are the docs for the API: https://icanhazdadjoke.com/api

Helpful resources covering what we've talked about today:
https://www.youtube.com/watch?v=rivBfgaEyWQ
https://www.w3schools.com/js/js_api_fetch.asp
https://javascript.info/fetch


### DAY 15: SEPTEMBER 22, FRIDAY, 2023 (HACKATHLON - W3 - TEAM 31 - )

** Today's PROGRESS**:

** THOUGHTS:**

** LINK TO WORK:

### DAY 16: SEPTEMBER 23, SATURDAY, 2023 ()

** Today's PROGRESS**:

** THOUGHTS:**

** LINK TO WORK:

### DAY 17: SEPTEMBER 24, SUNDAY, 2023 ()

** Today's PROGRESS**:

** THOUGHTS:**

** LINK TO WORK:
