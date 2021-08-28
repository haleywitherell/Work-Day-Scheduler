// Set date/time variables 
var date = moment().format("dddd, MMMM Do");
var rightNow = moment().format("H A");

// Today's Date 
$("#currentDay").text(date);

// Calendar per hour variable
var scheduleEvents = [
    { time: "8 AM", event: "" },
    { time: "9 AM", event: "" },
    { time: "10 AM", event: "" },
    { time: "11 AM", event: "" },
    { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
    { time: "2 PM", event: "" },
    { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
    { time: "6 PM", event: "" },
];

// Create rows loop
for(i=0; i< scheduleEvents.length; i++) {
    var newRow = $("<div>").attr("class", "row").addClass("row");
    var newP = $("<p>").attr("class", "col-2").addClass("hour").text(scheduleEvents[i].time);
    var newInput = $("<input>").attr("class", "col").addClass("timeBlock").text(scheduleEvents[i].event);
    var newButton = $("<button>").attr("class", "col-2").addClass("saveBtn");

    newRow.append(newP)
    newRow.append(newInput)
    newRow.append(newButton)

    $(".container").append(newRow)
}


// // Row Color If Statement 
// function changeColor(time) {  

//  if () {
//      return ".present";

//  } else if () {
//      return ".past";

//  } else {
//      return ".future";
//  }
// }


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




