// Define an async function to fetch weather data from the Weatherbit API
let weatherbitApi = async (geoData) => {
  // Extract latitude and longitude from the geoData object
  const lat = geoData.lat;
  const lng = geoData.lng;
  
  // API key for Weatherbit
  const weatherbitApiKey = "dcdfff4ecfb4441689e7d1532ddd4999";
  
  // Construct the request URL for the Weatherbit API using the latitude, longitude, and API key
  const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;

  // Fetch data from the Weatherbit API
  const res = await fetch(weatherbitApiReqURL);

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

// Export the weatherbitApi function for use in other modules
export { weatherbitApi };

  