$.getJSON("quotes/quotes.json", function (quotes) {
    console.log(quotes);
    var randomNum = Math.floor(Math.random() * Object.keys(quotes).length);
    console.log(randomNum);
    document.getElementById("quote").innerHTML = quotes[randomNum];
});

$(function () {
    var d = new Date();
    var imagesmorning = ['pics/bakery-breakfast.jpg', 'pics/coffee-book.jpg', 'pics/grass-cloud.jpg',];
    var images = ['pics/pic.jpg', 'pics/alpine.jpg', 'pics/beach-broadwalk.jpg', 'pics/girl-mountain.jpg', 'pics/grass-cloud.jpg', 'pics/work-computer.jpg'];
    var imagenight = ['pics/aurora.jpg', 'pics/night-city.jpg', 'pics/string-light.jpg' ];
   
    var hour = d.getHours();
    if (4 < hour && hour < 12){
        msg = "Good morning, Tina";
        emoji = "<i class='em em-sunny'></i>";
        document.getElementById("greetingmsg").style.color = "#ff4c00";
        document.getElementById("quote").style.color = "#ed7741";
        document.getElementsByClassName('greeting')[0].style.backgroundImage = 'url(' + imagesmorning[Math.floor(Math.random() * imagesmorning.length)] + ')';

    } else if (12 < hour && hour <=16){
        msg = "Good afternoon, Tina";
        emoji = "<i class='em em-computer'></i>";
        document.getElementById("greetingmsg").style.color = "#ff6b6b";
        document.getElementById("quote").style.color = "#f27b7b";
        document.getElementsByClassName('greeting')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
    
    } else if (16 < hour && hour <21){
        msg = "Good evening, Tina";
        emoji = "<i class='em em-cityscape'></i>";
        document.getElementById("greetingmsg").style.color = "#d33d83"; 
        document.getElementById("quote").style.color = "#ef39b5";
        document.getElementsByClassName('greeting')[0].style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';


    } else {
        msg = "Good night, Tina";
        emoji = "<i class='em em-first_quarter_moon_with_face'></i>";
        document.getElementById("greetingmsg").style.color = "#1449DA";
        document.getElementById("quote").style.color = "#246FDC";
        document.getElementsByClassName('greeting')[0].style.backgroundImage = 'url(' + imagenight[Math.floor(Math.random() * imagenight.length)] + ')';

    }

    document.getElementById("greetingmsg").innerHTML = msg + emoji;
});