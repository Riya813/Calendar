var local_img = ["image/1.jpeg", "image/2.jpeg", "image/3.jpeg", "image/4.jpeg", "image/5.jpeg", "image/6.jpeg"];
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
const currDate = (new Date().getDate());
const currMonth = (new Date().getMonth());
const back_Img = document.getElementById("img");
const day_div = document.getElementById("day");
const header = document.getElementById("header");
var a;
function changeImg(){ 
    var i = Math.floor(Math.random()*6);
    back_Img.style.backgroundImage = 'url("' + local_img[i] + '")';
}

setInterval(changeImg, 2000);
// var day = days[now.getDay()];
if(currDate == "1" || currDate == "21" || currDate == "31"){
    a = "st";
}else if(currDate == "2" || currDate == "22"){
    a = "nd";
}else if(currDate == "3"){
    a = "rd";
}else{
    a = "th";
}
document.getElementById("year").innerHTML = (new Date().getFullYear());
document.getElementById("weekday").innerHTML = days[new Date().getDay()] + ",";
document.getElementById("date").innerHTML = currDate + a + " " + month[currMonth];

function changeCol(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var a = 0.8;
    var a_a = 1;

    day_div.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    // header.style.backgroundColor = "rgba(" + r + "," + g + "," + b + "," + a_a + ")";
}

setInterval(changeCol, 2000);

