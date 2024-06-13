fetch("https://randomuser.me/api")
  .then((response) => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Handle the data received
    console.log(data);
  })
  .catch((error) => {
    // Handle errors
    console.error("There was a problem with the fetch operation:", error);
  });
