// Define an async function to fetch data from the Pixabay API
let pixabayApi = async (cityName) => {
  // API key for Pixabay
  const pixabayApiKey = "45205487-884b8bb23e0c34fe935c88d4f";
  // Construct the request URL for the Pixabay API using the city name and API key
  const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;

  // Fetch data from the Pixabay API
  const res = await fetch(pixabayApiReqURL);

  // Initialize an empty object to hold the result
  let result = {};

  try {
      // Attempt to parse the response as JSON
      result = await res.json();
  } catch (error) {
      // Log any errors that occur during the fetch or JSON parsing
      console.log("error:", error);
  }

  // Return the result (either the parsed JSON or an empty object if an error occurred)
  return result;
};

// Export the pixabayApi function for use in other modules
export { pixabayApi };
