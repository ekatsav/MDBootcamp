/*
Write a program for a car parking firm that calculates the cost of parking based on the time of day. It takes in hour as a parameter and returns cost of parking:

Hour 0 is deemed as midnight
  Hour 1 is 1am
  Hour 13 is 1pm

  - Hours between midnight to 5am costs 300
  - Hours between 5am to 10am costs 350
  - Hours between 10am to 3pm costs 500
  - Hours between 3pm to 8pm costs 700
  - Hours between 8pm to midnight costs 400

Extra: Account for the increase/decrease in prices during roll over times.*/

function costOfParkingByTimeslotAndDuration(timeParkedInMilitaryFormat, durationOfStayInHours) {
    let hoursOfDayArray = ["Midnight", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "Noon", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];
    let priceOfParkingTicket = 0;
    if (timeParkedInMilitaryFormat <= 5) {
        priceOfParkingTicket = (durationOfStayInHours * 300);
        console.log(`Your parking time is ${hoursOfDayArray[timeParkedInMilitaryFormat]}, you are staying ${durationOfStayInHours} hours. Your ticket price will be ${priceOfParkingTicket}.`);
    } else if (timeParkedInMilitaryFormat >= 6 && timeParkedInMilitaryFormat <= 10) {
        priceOfParkingTicket = (durationOfStayInHours * 350);
        console.log(`Your parking time is ${hoursOfDayArray[timeParkedInMilitaryFormat]}, you are staying ${durationOfStayInHours} hours. Your ticket price will be ${priceOfParkingTicket}.`);
    } else if (timeParkedInMilitaryFormat >= 11 && timeParkedInMilitaryFormat <= 15) {
        priceOfParkingTicket = (durationOfStayInHours * 500);
        console.log(`Your parking time is ${hoursOfDayArray[timeParkedInMilitaryFormat]}, you are staying ${durationOfStayInHours} hours. Your ticket price will be ${priceOfParkingTicket}.`);
    }  else if (timeParkedInMilitaryFormat >= 16 && timeParkedInMilitaryFormat <= 20) {
        priceOfParkingTicket = (durationOfStayInHours * 700);
        console.log(`Your parking time is ${hoursOfDayArray[timeParkedInMilitaryFormat]}, you are staying ${durationOfStayInHours} hours. Your ticket price will be ${priceOfParkingTicket}.`);
    } else {
        priceOfParkingTicket = (durationOfStayInHours * 400); //Only assuming they do not enter over 23, or this breaks the 24 hour logic. Fix later.
        console.log(`Your parking time is ${hoursOfDayArray[timeParkedInMilitaryFormat]}, you are staying ${durationOfStayInHours} hours. Your ticket price will be ${priceOfParkingTicket}.`);
    }
    return priceOfParkingTicket;
}

costOfParkingByTimeslotAndDuration(7, 10); //Parked at 4pm, till 8pm

/*Further additions:

-Reroute 24 to 0 so it still counts as midnight.
-Reject timeParked > 25.
-Reject negative int for either entry.

*/

/*
        How to account for layover?
        By using array? => Assign hourly value to each index of array (if index 5 (5pm), cost is 700 etc). But that doesn't allow for good conflation of multiples.
        Instead, create second array of just the price values per hour eg [300, 300, 300, 300, 300, 350, 350...] etc.
        Switch statement for if durationOfStay is longer than 1 hour.
        If it is say 5, create an algo that goes from start index, for duration of stay. Add those array values.

        Considerations from Dan: 
            >Instead of a second array, maybe have several seperate rates?
            >Would my current version work for someone who parks at 11pm, but stays till after midnight? How to loop back to array [0]?
*/