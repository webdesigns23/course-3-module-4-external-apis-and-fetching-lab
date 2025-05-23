
// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'ae24a4464ac239b942ef6e6f3e15dc01';
const city = 'denver'; // Example city; in a real application, this could be dynamic

//Step 1: Fetch Data from the API
// Create a function fetchWeatherData(city)
async function fetchWeatherData(city) {
    try {
        //fetch to retrieve weather data
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${apiKey}`);
        //turn in to json data
        const data = await response.json();
        //console.log(data);
        displayWeather(data)

    }catch (error) {
        console.error('Error fetching user data:', error);
    }
};

// Step 2: Display Weather Data on the Page
// - Create a function `displayWeather(data)`
function displayWeather(data) {
//Dynamically update the DOM with weather details (e.g., temperature-object, humidity-object, weatherDescription-array)
    const weatherDisplay = document.querySelector("#weather-display");

    //weather details
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;

    //add to html
    const tempDetails = document.createElement('li');
    tempDetails.textContent = (`Temperature: ${temperature}°F`);

    const humidityDetails = document.createElement('li');
    humidityDetails.textContent = (`Humidity: ${humidity}`);

    const weatherDescriptionDetails = document.createElement('li');
    weatherDescriptionDetails.textContent =(`Description: ${weatherDescription}`);

    //append weather details
    weatherDisplay.append(tempDetails, humidityDetails, weatherDescriptionDetails);
};


// Step 3: Handle User Input
function getUserInput() {
    const button = document.querySelector("#fetch-weather");
    const cityInput = document.querySelector("#city-input")

//Add an event listener to the button to capture user input
button.addEventListener("click" , () => {
    //Retrieve the value from the input field
    //Call `fetchWeatherData(city)` with the user-provided city name
    fetchWeatherData(cityInput.value)
})
};

getUserInput();

// // Step 4: Implement Error Handling 
// // - Create a function `displayError(message)`
// // - Handle invalid city names or network issues

function displayError(message) {
    // - Dynamically display error messages in a dedicated section of the page
    const errorMessage = document.querySelector("#error-message");
    errorMessage.textContent = "Failed to load weather data. Please try again later";
};
        




//Add During Break Bonus Practice!
// BONUS: Loading Indicator
// - Optionally, add a loading spinner or text while the API request is in progress

// BONUS: Additional Features
// - Explore adding more features, such as displaying additional weather details (e.g., wind speed, sunrise/sunset)
// - Handle edge cases, such as empty input or API rate limits

// Event Listener for Fetch Button
// - Attach the main event listener to the button to start the process
