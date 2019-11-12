var firstName = $("#firstName");
var submitButton = $("#submitButton");


firstName.blur(function() {
    let input = $(this) 
    if(input.val().length > 0) {
        input.addClass("is-valid");
        input.removeClass("is-invalid");
    }
        else {
            input.removeClass("is-valid");
            input.addClass("is-invalid");
        }

        habilitarBoton();
    });

var email = $("#email")

email.blur(function() {
    let input = $(this) 
    if(input.val().indexOf('@') === -1 || 
        input.val().indexOf('.') === -1 ||
        input.val().indexOf() > 5
        ) {
            input.addClass("is-invalid");
            input.removeClass("is-valid");
        }
            else {
                input.removeClass("is-invalid");
                input.addClass("is-valid");
            }

            habilitarBoton();
    });

var comments = $("#comments")

 comments.blur(function() {
    let input = $(this) 
    if(input.val().length > 0) {
        input.addClass("is-valid")
        input.removeClass("is-invalid");
    }
    else {
        input.removeClass("is-valid");
        input.addClass("is-invalid");
        }

        habilitarBoton();
    });


function habilitarBoton(){
    if (firstName.hasClass('is-valid') &&
        email.hasClass('is-valid') &&
        comments.hasClass('is-valid')) {
        submitButton.attr('disabled', false)
    } 
    else {
        submitButton.attr('disabled', true)
    }
};