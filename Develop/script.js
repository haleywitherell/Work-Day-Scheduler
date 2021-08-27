// Date/time Variables 
var date = moment().format("dddd, MMMM Do");
var rightNow = moment().format("H A");

// Calendar per Hour Variable
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

// Today's Date 
$("#currentDay").text(date);

for(i=0; i< scheduleEvents.length; i++) {
    var newRow = $("<div>").attr("class", "row")

    var newP = $("<p>").attr("class", "col-2").text(scheduleEvents[i].time)

    newRow.append(newP)
    //newRow.append(inputTagCreatedByAHumanBeing)

    $(".container").append(newRow)
}

// Create rows

scheduleEvents.forEach(function(timeBlock, index) {
 var timeLabel = timeBlock.time;
 var blockColor = colorRow(timeLabel);
 var row =
     '<div class="time-block" id="' +
     index +
     '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
     timeLabel +
     '</div><textarea class="form-control ' +
     blockColor +
     '">' +
     timeBlock.event +
     '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

 /* Adding rows to container div */
 $(".container").append(row);
});


// /* Color rows based on current time */
function colorRow(time) {
 var planNow = moment(rightNow, "H A");
 var planEntry = moment(time, "H A");
 if (planNow.isBefore(planEntry) === true) {
     return "future";
 } else if (planNow.isAfter(planEntry) === true) {
     return "past";
 } else {
     return "present";
 }
}

/* Save Events */
$(".saveBtn").on("click", function() {
 var blockID = parseInt(
     $(this)
         .closest(".time-block")
         .attr("id")
 );
 var userEntry = $.trim(
     $(this)
         .parent()
         .siblings("textarea")
         .val()
 );
 scheduleEvents[blockID].event = userEntry;

 /* Set local storage */
 localStorage.setItem("workDay", JSON.stringify(scheduleEvents));
});

// /* Local Storage check */
var workEvents = JSON.parse(localStorage.getItem("workDay"));
if (workEvents) {
    scheduleEvents = workEvents;
}