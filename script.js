$(document).ready(function () {
  // console.log("oh hey");
  //Date counter//
  $("#currentDay").text(
    moment().format("dddd") + ", " + moment().format("MMMM Do")
  );

  // variables
  var block = $(".time-block");
  var saveBtn = $(".saveBtn");

  // Function Calls //
  // Make Plans //
  function makePlans() {
    block.each(function () {
      var id = $(this).attr("id");
      var plans = localStorage.getItem(id);

      if (plans !== null) {
        $(this).children(".description").val(plans);
      }
    });
  }
  makePlans();

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

  //Event Listeners
  saveBtn.on("click", function () {
    //  console.log("button clicked");
    // console.log(this);
    // define variables for desc. and time //
    var time = $(this).parent().attr("id");
    var plans = $(this).siblings(".description").val();
    // console.log(time, plans);
    //save in local storage
    localStorage.setItem(time, plans);
    
  });
});
