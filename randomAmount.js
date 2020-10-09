function randomAmount(min = 1.1, max = 999999.99) {
    /*
    Min and Max are positive numbers with ...
        min >= 1 and 
        1 < max <= 1 million 
    */    

    const styleObj = {
        style: "currency",
        currency: "USD"
    }

    let rndAmount = (Math.random() * (max - min + 1) + min);
    rndAmount = rndAmount.toLocaleString("en-US", styleObj);
    return rndAmount;

};

//console.log(randomAmount(10, 100));
