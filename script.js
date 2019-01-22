$.getJSON("quotes/quotes.json", function (quotes) {
    console.log(quotes);
    var randomNum = Math.floor(Math.random() * Object.keys(quotes).length);
    console.log(randomNum);
    document.getElementById("quote").innerHTML = quotes[randomNum];
});

$(function () {
    var d = new Date();
    var hour = d.getHours();
    if (4 < hour && hour < 12){
        msg = "Good morning, Tina";
        emoji = "<i class='em em-sunny'></i>";
        document.getElementById("greetingmsg").style.color = "#ff4c00";
        document.getElementById("quote").style.color = "#ed7741";

    } else if (12 < hour && hour <=16){
        msg = "Good afternoon, Tina";
        emoji = "<i class='em em-computer'></i>";
        document.getElementById("greetingmsg").style.color = "#ff6b6b";
        document.getElementById("quote").style.color = "#f27b7b";
    
    } else if (16 < hour && hour <21){
        msg = "Good evening, Tina";
        emoji = "<i class='em em-cityscape'></i>";
        document.getElementById("greetingmsg").style.color = "#d33d83"; 
        document.getElementById("quote").style.color = "#ef39b5";

    } else {
        msg = "Good night, Tina";
        emoji = "<i class='em em-first_quarter_moon_with_face'></i>";
        document.getElementById("greetingmsg").style.color = "#1449DA";
        document.getElementById("quote").style.color = "#246FDC";
    }

    document.getElementById("greetingmsg").innerHTML = msg + emoji;
});