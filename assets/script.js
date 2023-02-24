$(function () {

    //presents the current day ex: Friday, February 24th
    var currentDay = dayjs().format('dddd, MMMM Do');
    $('#currentDay').text(currentDay);

    //when you click save, it is stored in local storage
    $('.saveBtn').on('click', function (event) {
        event.preventDefault();

        var value = $(this).siblings(".description").val();
        var key = $(this).parent().attr("id");
        localStorage.setItem(key, value);

    });

    //when you refresh the page the text remains in description
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    //gets the current hour
    var currentHour = dayjs().get('hour');
    console.log(currentHour);

    //compares the hour to the div hour and adds past, present or future class and apply's css styles accordingly
    $(".time-block").each(function () {
        var divHour = $(this).attr("id").split("-")[1];
        if (currentHour == divHour) {
            $(this).addClass("present");
        } else if (currentHour > divHour) {
            $(this).addClass("past");
        } else if (currentHour < divHour) {
            $(this).addClass("future");
        }
    });
});

