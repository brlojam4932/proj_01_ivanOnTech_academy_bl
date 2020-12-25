$(document).ready(function() {

  function registerFunc() {
    $('#registration').submit(function() {
    
      if($('#registration input[name=email]').val() == '')
      {
        alert('missing email');
        //return false; // keeps it from leaving the site
      }
      else if($('#registration input[name=password]').val() == '')
      {
        alert('missing password');
        //return false;
      }
      else if($('#registration input[name=confirmation]').val() != $('#registration input[name=password]').val())
      {
        alert('password does not match')
        //return false;
      }
      else if(!$('#registration input[name=agreement]').is(':checked'))
      {
        alert('checkbox unchecked')
        //return false;
      }
      else if($('#registration input[name=agreement]').is(':checked'))
      { 
        $('#youAreRegistered').append("You are registered!").show().delay(50).fadeOut(3000);
        console.log('You are registered!')
        //return false;
      }

  
      return true;
    })

    
  }

  registerFunc();
  

  // PASSWORD LENGTH CHECK:
  $("#registration").click(function() {
    this_sel  =   $(this);
    minlength =   this_sel.attr('minlength');
      if (this_sel.val() >= minlength) {
        console.log("success");
      
      } else if(this_sel.val() <= minlength) {
        console.log("invalid");
      
      }

    });

  
  
})


