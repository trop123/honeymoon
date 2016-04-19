$('#first_name').focus();
$(document).ready(function () {
    
    $("#packageform").submit(function (event) {
        $('#loading').show();
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
                $('#loading').hide();
                bootbox.dialog({
                    title: "<h3 class=\"classic-title\" style=\"color:#ff5a5f;margin-bottom: 0px;padding-left: 23px;font-weight: bold;border-bottom: none;\">Thank you for your interest in Andaman Honeymoons !! </h3>",
                    message: '<div class="row">  ' +
                        '<div class="col-md-12"> ' +
                        '<p>We have received your request. Our team will get in touch with you shortly !!</p>' +
                        '<p>You can contact us between 9 A.M to 5 P.M on </p><b>+91-9790714424</b>' +
                         '<p>or email us your queries on</p><b>bookings@tropicalandamans.com</b>' +
                        '</div>  </div>',
                    buttons: {
                        success: {
                            label: "Alright",
                            className: "btn-success",

                        }
                    }
                }
         );
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#loading').hide();
                bootbox.dialog({
                    title: "<h3 class=\"classic-title\" style=\"color:#ff5a5f;margin-bottom: 0px;padding-left: 23px;font-weight: bold;border-bottom: none;\">Oops!! Something is not right! Try again !!  </h3>",
                 
                    buttons: {
                        success: {
                            label: "Alright",
                            className: "btn-danger",

                        }
                    }
                }
         );
            }
        });
        event.preventDefault();
    });

    $("#callmeform").submit(function (event) {
        $('#loading').show();
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
                $('#loading').hide();
                bootbox.dialog({
                    title: "<h3 class=\"classic-title\" style=\"color:#ff5a5f;margin-bottom: 0px;padding-left: 23px;font-weight: bold;border-bottom: none;\">Thank you for your interest in Andaman Honeymoons !! </h3>",
                    message: '<div class="row">  ' +
                        '<div class="col-md-12"> ' +
                        '<p>We have received your request. Our team will get in touch with you shortly !!</p>' +
                        '</div>  </div>',
                    buttons: {
                        success: {
                            label: "Alright",
                            className: "btn-success",

                        }
                    }
                }
    );

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('#loading').hide();
                bootbox.dialog({
                    title: "<h3 class=\"classic-title\" style=\"color:#ff5a5f;margin-bottom: 0px;padding-left: 23px;font-weight: bold;border-bottom: none;\">Oops!! Something is not right! Try again !!  </h3>",

                    buttons: {
                        success: {
                            label: "Alright",
                            className: "btn-danger",

                        }
                    }
                }
        );
           
        },
        });
        event.preventDefault();

    });

});