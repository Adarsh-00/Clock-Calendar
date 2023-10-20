//script for clock
setInterval(
    function() {
        d = new Date();
        hor = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        calHour = 30*hor + min/2;
        calMins = 6*min;
        calSec = 6*sec;
        
        hour.style.transform = `rotate(${calHour}deg)`;
        minute.style.transform = `rotate(${calMins}deg)`;
        second.style.transform = `rotate(${calSec}deg)`;
    }, 1000
)
//script for calender
let monthList = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let weekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var week = date.getDay();
document.getElementById("yr").innerHTML = year;
document.getElementById("mnt").innerHTML = monthList[month];
document.getElementById("dt").innerHTML = day;
document.getElementById("day").innerHTML = weekList[week];