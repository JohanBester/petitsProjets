function randomDate(start, end) {

/*
    Start and End values must be comma separated and in the format of...
    (yyyy, m, d), (yyyy, m, d)
    End value is optional
    If omitted End value will default to current date
*/

    start = new Date(start);
    !end ? end  = new Date() : end  = new Date(end);
    let rndDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    return rndDate;

    /*
    console.log("This is the random date : ", rndDate);
    console.log("Display the date as a string : ", rndDate.toDateString());
    console.log("Display local date string : ", rndDate.toLocaleDateString());
    console.log("Display the time as a string. : ", rndDate.toTimeString());
    console.log("Display local time string : ", rndDate.toLocaleTimeString());
    */
};


// console.log(randomDate((1966, 3, 6)));

