// Import functions from local modules
import { formHandler } from "./js/formHandler"; // Handles form submission
import { updateUi } from "./js/updateUi"; // Updates the user interface with data
import { geonamesApi } from "./js/callGeonamesApi"; // Calls the Geonames API for location data
import { pixabayApi } from "./js/callPixabayApi"; // Calls the Pixabay API for image data
import { weatherbitApi } from "./js/callWeatherbitApi"; // Calls the Weatherbit API for weather data

// Import main stylesheet
import "./styles/style.scss"; // Styles for the application

// Add event listener to the "generate" button
// When clicked, it triggers the formHandler function
document.getElementById("generate").addEventListener("click", formHandler);

// Export functions for use in other modules
export { formHandler, updateUi, geonamesApi, pixabayApi, weatherbitApi };
