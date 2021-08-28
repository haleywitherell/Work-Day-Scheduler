// Set date/time variables 
var date = moment().format("dddd, MMMM Do, YYYY");
var rightNow = moment().format("HH");

// Today's Date 
$("#currentDay").text(date);

// Calendar per hour variable
var scheduleEvents = [
    { hour: 9, time: "09 AM", event: "" },
    { hour: 10, time: "10 AM", event: "" },
    { hour: 11, time: "11 AM", event: "" },
    { hour: 12, time: "12 PM", event: "" },
    { hour: 13, time: "1 PM", event: "" },
    { hour: 14, time: "2 PM", event: "" },
    { hour: 15, time: "3 PM", event: "" },
    { hour: 16, time: "4 PM", event: "" },
    { hour: 17, time: "5 PM", event: "" },
];

// Create rows loop
for(i=0; i< scheduleEvents.length; i++) {
    var newRow = $("<div>").addClass("row");
    var newP = $("<p>").attr("class", "col-2").addClass("hour").text(scheduleEvents[i].time);
    var newInput = $("<input>").attr("class", "col").addClass("timeBlock").text(scheduleEvents[i].event);
    var newButton = $("<button>").attr("class", "col-2").addClass("saveBtn");

    newRow.append(newP)
    newRow.append(newInput)
    newRow.append(newButton)

    var colorClass = getColorClass(scheduleEvents[i].hour)
    newInput.addClass(colorClass)

    $(".container").append(newRow)
}

getColorClass()

// // Row Color If Statement 
function getColorClass(hour) {  
var currentHour = moment().hour()
console.log(currentHour)
var hourDiff = currentHour - hour
 if (hourDiff === 0) {
     return ".present";

 } else if (hourDiff > 0 ) {
     return ".past";

 } else {
     return ".future";
 }
}


// Save Button
$(document).ready(function(){
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();

        var inputItem = $(this).siblings("newInput").val()
        var itemHour = $(this).siblings("newInput").attr("id")

        localStorage.setItem(itemHour, inputItem)
    })
})


 // Storage 
var newEvents = JSON.parse(localStorage.getItem("workDay"));
if (newEvents) {
    scheduleEvents = newEvents;
}




