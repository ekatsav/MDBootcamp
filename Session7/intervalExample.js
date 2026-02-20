// const getFlights = () => {
//  // this would repeatedly run every 3 seconds while the window is open!!
//  const flightsInterval = setInterval(getFlightDetails, 3000);

//  clearInterval(flightsInterval);
// }

let flightsInterval;

const startFlights = () => {
  flightsInterval = setInterval(getFlightDetails, 3000);
};

const stopFlights = () => {
  clearInterval(flightsInterval);
};
