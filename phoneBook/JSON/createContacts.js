$(document).ready(function() {

  window.onbeforeunload = function() { // ALERTS USER THEY WILL BE LEAVING THIS SITE
    return 'You have unsaved changes!';
}

  // INPUT FIELD SUBMIT BUTTON
  $("#addContactsBtn").click(function() {
    // ID GENERATOR
      var myRandNum = (Math.floor(Math.random() * 1000000000));

      if ( myRandNum < 1000 && myRanNum < 9000 ) {
       console.log("too short or too long");
      } else {
        $('#results').append( "User ID: " + myRandNum + " " + "<br>");
        console.log("Random ID number: " + myRandNum);
      }
    // SERIALIZE ARRAY / ADD CONTACTS
      function serializeArray() {
        const inputs = $("#usrForm").serializeArray();

        $.each(inputs, function(i, field) {
          $("#results").append(field.name + ":" + field.value + " " + "<br>");

          //var inputsCopy = [...inputs];
          //console.log(inputsCopy);
          console.log(inputs);
        
        });

        // SEARCH CONTACTS FUNCTION HERE
        
        $("#searchButton").click(function(){
          //ev.preventDefault()// cancel form submission
          //if($(this).attr("value") === "findSubmitBtn"){
              //do button 1 thing
              function contactsLookUp(mySearch, prop) {

                //var myResults = $('#results');
                var mySearch = $('#searchInputId').val();
                
      
                for(var i = 0; i < inputs.length; i++) {
                  if(inputs[i].firstName == mySearch) {

                    return inputs[i][prop] || "No such property";
                  }
                }
                return "No such contract";
              };
              // I AM TRYING TO FIND THE NUMBER HERE
              const theNumber = $('#theNumber').val();
              const data = contactsLookUp(inputs, theNumber);

              //document.getElementById("returnNumber").innerHTML = inputs[1].firstName + " " + inputs[1].lastName; // trying this as an alt to ouput to html

              $.each(inputs, function(i, field) {
              $("#returnNumber").append(field.name + ":" + field.value + " " + "<br>");
              $("#returnNumber").append(data).val(); // trying another way 
              console.log("return" + data);
              });

              contactsLookUp();
          }
         // $("#foundSubmitid").submit(); // "submit the form" leaves the session
          
        );
        
      }; 

      serializeArray();
    
    });
  
  });

  // ======================FIND CONTACT NAME FUNCTION======================

  $(function() {
    $('#searchBtn').on("click", function() {
        findNum();
    });
  });
   
  

  // ======================REGISTRATION INPUT EFFECTS -- SENDS A MESSAGE ONCE PASSWORD LOG IN FORMS ARE CHECKED======================
  $(function() {
        $('#regSubmit').on("click", function() {
          registerFunc();
      });
  });



