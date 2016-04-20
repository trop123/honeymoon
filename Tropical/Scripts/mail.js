$(document).ready(function () {
    $("#sendemailEnquiry").click(function (event) {
  
        var message = 'Hi';
        var data = JSON.stringify({
            obj: {
                Message: "this is test message",
                Name: $("#first_name").val(),
                Phone: $("#mobile").val(),
                Email: $("#email").val(),
                Date: $("#datepicker").val(),
                Days: $("#number_days").val(),
                packageSelected: packagename
            }
        });
        
        $.ajax({
            type: "POST", 
            url: "Default.aspx/GetTestJson",
           data: data, 
            contentType: "application/json;charset=utf-8", 
            dataType: "json",
            success: function (response) {
                alert('Email Sent');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Email could not be sent");
            }
        });
        event.preventDefault();
    });

    $("#callme").click(function (event) {
        var data = JSON.stringify({
            obj: {
                Phone: $("#callmenumber").val(),
            }
        });
        $.ajax({
            type: "POST",
            url: "Default.aspx/SendEmailNumber",
            data: data,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (response) {
                alert('Email Sent');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Email could not be sent");
            }
        });
        event.preventDefault();
    });

});