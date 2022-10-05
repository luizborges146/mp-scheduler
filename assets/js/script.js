var date = moment().format("MM/DD/YYYY");
var time = moment().format("HH:mm:ss")
var displayTime =  document.getElementById("timer");


var updateTime = function () {
    var currentTime = moment().format('h:mm:ss')
    $("#timer").text(currentTime)
}
updateTime()
setInterval(updateTime, 1000);

