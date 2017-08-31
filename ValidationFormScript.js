$( document ).ready(function() {
    console.log( "ready!" );
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$('#form1').validate({
    rules:{
    Username:
            {
            required:true
            },
    password:
            {
            required:true,
            minlength:3,
            maxlength:10
            },
    password_again:{
            equalTo:"#password"

            }
          },

          highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');

        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }

})
});

//$('#loginButton').click(function() {
//    window.location.href = 'TASAindex.html';
  //  return false;
//});
