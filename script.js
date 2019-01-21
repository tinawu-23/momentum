$.getJSON("quotes/quotes.json", function (quotes) {
    console.log(quotes);
    var randomNum = Math.floor(Math.random() * Object.keys(quotes).length);
    console.log(randomNum);
    document.getElementById("quote").innerHTML = quotes[randomNum];
});