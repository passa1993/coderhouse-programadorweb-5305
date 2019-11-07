var email = $("#email")

email.blur(function() {
    let input = $(this) 
        if(input.val().indexOf('@') === -1 || 
        input.val().indexOf('.') === -1 ||
        input.val().indexOf() > 5
        ) {
            input.addClass("is-invalid")
        }
            else {
                input.removeClass("is-invalid");
                input.addClass("is-valid");
        }
    });
