/*
    Create a list of random customer names using...
    a random honorific, initials, and last name

*/
function randomCustomerNames(times) {
  let lastNamesList = [];

  // get the list of 1000 last names
  let lst = function fetch() {
    fs = require("fs");
    let nameFile = "lastNames.txt";
    // Reading last name data
    fs.readFile(nameFile, "utf8", function (err, data) {
      if (err) throw err;
      let lstNms = data;
      lastNamesList = lstNms.toString().split("\r\n");
    });
  };
  let nameList = lst();

  function selectLastName(lastNamesList) {
    let lstnm = lastNamesList[rand(1, 1000) - 1];
    return lstnm;
  }

  function selectHonorific() {
    // honorific inputs
    const honorificArr = [
      "Mr",
      "Mrs",
      "Miss",
      "Ms",
      "Mx",
      "Sir",
      "Madam",
      "Hon",
      "Dr",
      "Lady",
      "Lord",
    ];

    let hnrfc = honorificArr[rand(1, 11) - 1];
    return hnrfc;
  }

  function selectInitials() {
    // initials inputs
    const initialArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let ntls = "";
    // Select random number of initials up to 3
    let times = rand(1, 3);
    for (let i = 0; i <= times; i++) {
      let letter = rand(1, 26) - 1;
      ntls += initialArr[letter];
    }
    return ntls;
  }

  // Randomizer for all the functions
  const rand = function randomNumber(min = 1.1, max = 99.99) {
    let numba = Math.floor(Math.random() * (max - min) + min);
    return numba;
  };

  // create collection of random customer names
  let randomCustomerNames = [];

  let t = 0;
  // loop for number of names in collection
  while (t <= times - 1) {
    let honorific = selectHonorific().toString();
    let initials = selectInitials().toString();
    let lastName = selectLastName(lastNamesList);

    let fullName = `${honorific} ${initials} ${lastName}`;
    // ${lastName}
    randomCustomerNames.push(fullName);
    t++;
  }
  console.log(randomCustomerNames);
}

// console.log(randomCustomerNames(2));
