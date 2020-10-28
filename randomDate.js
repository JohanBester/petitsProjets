/*
    Write a file of random dates
    Start and End values must be comma separated 
    and in the format of (yyyy, m, d), (yyyy, m, d)
    Start and End values are optional
    start and end values can be omitted by using "0"
    If omitted start defaults to January 1, 1970, UTC
    End value will default to current date
    Times is the number of times to run this function
    Times is optional and the default is 1 time
*/

function randomDate(start, end, times = 1) {
  const fs = require("fs");
  let i = 1;
  let data = "";
  let file = "randomDates.txt";

  !start ? (start = new Date(0)) : (start = new Date(start));
  !end ? (end = new Date()) : (end = new Date(end));

  while (i < times + 1) {
    let rndDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    !data == "" ? (data += "\n" + rndDate) : (data = rndDate);
    i++;
  }

  let writeData = function writeDataFile(data, file) {
    // Write data in to 'file'
    fs.writeFile(file, data, (err) => {
      // In case of a error throw err.
      if (err) throw err;
    });
  };

  return writeData(data, file);
}

randomDate((1966, 3, 6), 0, 2);

/*
    console.log("This is the random date : ", rndDate);
    console.log("Display the date as a string : ", rndDate.toDateString());
    console.log("Display local date string : ", rndDate.toLocaleDateString());
    console.log("Display the time as a string. : ", rndDate.toTimeString());
    console.log("Display local time string : ", rndDate.toLocaleTimeString());
  */
