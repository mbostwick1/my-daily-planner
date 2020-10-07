$(document).ready(function () {
  // console.log("oh hey");
  //Date counter//
  $("#currentDay").text(
    moment().format("dddd") + ", " + moment().format("MMMM Do")
  );

  // variables
  var block = $(".time-block");
  var saveBtn = $(".saveBtn");

  //Function Calls
  //Function to determine the hour and past, present, future css styling //
  function hourDisplay() {
    //get current hour
    var currentTime = moment().hour();
    $(block).each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        // console.log(currentTime, blockTime);
        if (currentTime === blockTime) {
          $(this).addClass("present");
        } else if (currentTime > blockTime) {
          $(this).addClass("past");
        } else {
          $(this).addClass("future");
        }
      });
   
  }
  hourDisplay();

  function makePlans() {}

  //Event Listeners
  saveBtn.on("click", function () {
    //  console.log("button clicked");
    // console.log(this);
  });
});
