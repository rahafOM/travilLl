// Define the updateUi function that takes geoData as a parameter
const updateUi = (geoData) => {
  // Get the element with an ID of "title"
  const content = document.getElementById("title");

  // Insert new HTML content, populated with data from geoData, immediately after the "title" element
  content.insertAdjacentHTML(
    "afterend",
    `
      <div id="content">
        <div id="content-text">
          <h3 id="destination">Destination: ${geoData.name}</h3>
          <p id="countdown">Days Until: ${geoData.daysUntil}</p>
          <p id="current-weather">Current Weather: ${geoData.currentTemp} C° <img id="icon" src="https://www.weatherbit.io/static/img/icons/${geoData.weatherIcon}.png" alt="weather icon"/></p>
        </div>
        <img id="city-image" src=${geoData.image} alt="image of your destination"/>
      </div>
    `
  );
};

// Export the updateUi function for use in other modules
export { updateUi };

  