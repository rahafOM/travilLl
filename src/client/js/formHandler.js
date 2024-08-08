
// Define the base URL for the Geonames API and the API key
const geoURL = "http://api.geonames.org/searchJSON?q=";
const apiKey = "&maxRows=10&username=pduoebsi1";

// Initialize an empty object to hold geo data
let geoData = {};

// Define the formHandler function
function formHandler() {
  
  // Get the city name and departure date from the form inputs
  let cityName = document.getElementById("zip").value;
  let departure = document.getElementById("date").value;

  // Calculate the countdown to the departure date
  let countDownDate = Date.parse(departure);
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  // Store the calculated days until departure in geoData
  geoData.daysUntil = daysUntil;

  // Call the geonamesApi function with the city name and API key
  Client.geonamesApi(geoURL, cityName, apiKey)
    .then((res) => {
      // Extract relevant data from the Geonames API response and store it in geoData
      geoData.name = res.geonames[0].name;
      geoData.lat = res.geonames[0].lat;
      geoData.lng = res.geonames[0].lng;
      geoData.countryCode = res.geonames[0].countryCode;

      // Call the weatherbitApi function with the geo data
      Client.weatherbitApi(geoData).then((res) => {
        // Extract relevant weather data from the Weatherbit API response and store it in geoData
        geoData.currentTemp = res.data[0].temp;
        geoData.weatherIcon = res.data[0].weather.icon;

        // Call the pixabayApi function with the city name
        Client.pixabayApi(cityName).then((res) => {
          // Extract the image URL from the Pixabay API response and store it in geoData
          geoData.image = res.hits[0].webformatURL;
          console.log(geoData);

          // Update the UI with the collected geoData
          Client.updateUi(geoData);
        });
      });
    })
    // Catch and log any errors that occur during the API calls
    .catch((err) => {
      console.log(err);
    });
}

// Export the formHandler function for use in other modules
export { formHandler };
