// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  //code to display the current date in the header of the page.
  var today = dayjs(); 
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  //listener for click events on the save button
  $(".saveBtn").on('click', function() {
      var time = $(this).parent().attr("id");
      var entry = $(this).siblings(".description").val();
    
      localStorage.setItem(time, entry); 
  });

  // Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  function timeBlockColor() {
    //code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    for (var i = 9; i <= 17; i++) {
      $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i ));
    }

    var currentHour = dayjs().hour();

    $(".time-block").each(function() {
    var scheduledTime = parseInt($(this).attr('id').split('-')[1]);
      console.log(`schedule time: ${scheduledTime}, current hour: ${currentHour}`);

      if (scheduledTime < currentHour) {
          $(this).addClass("past");
      } else if (scheduledTime === currentHour) {
          $(this).addClass("present");
      } else if (scheduledTime > currentHour) {
          $(this).addClass("future");
      }

    })
  };

  
  
  timeBlockColor();
  
  
});


