$(document).ready(function () {
    // console.log("oh hey");
    //Date counter//
    $("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do"));
   
    // variables 
  

    var saveBtn = $(".saveBtn");
    //Function Definitions


    //Function Calls
    //Function to determine the hour and past, present, future css styling //
    function hourDisplay() {
        //get current hour
        var currentHour = moment().hour();
        
       

    }

    function makePlans() {



    }

    //Event Listeners
    saveBtn.on("click", function () {
        //  console.log("button clicked");
        // console.log(this);
    })


});




