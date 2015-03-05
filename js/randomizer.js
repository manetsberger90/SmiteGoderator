var roll = Math.floor(Math.random() * models.length);

var godName = getGod(roll).name;
var godRole = getGod(roll).role;

var $overlay = $('<div id="overlay"><p class="godOverlay">' + godName + '<br>' + godRole + '</p></div>');

//JQUERY START



////Problem: Need Overlayed/Lightbox Button to initiate roll
////Solution: Create a button for random god roll and implement.



    $(window).load(function() {

      // Initialize the plugin
      $('#first_popup').popup();
      $('.first_popup_open').click();
    
    });

$(".roll-button").click(function(event){
    event.preventDefault();
    console.log(getGod());
    $(this).hide();
    $overlay.show();    
    });

$("body").append($overlay);


////Problem 2: Close Button Overlay and replace with overlay containing information about randomly selected god.

////Solution: Need to create overlay with God information/Builds/Guides styled with CSS including CSS.



////Add Overlay.

  //Attach overlay to randomly generated god selection.

//Add ReRoll button to Overlay that initiates function again.



  // Update Overlay with the image linked in the link.
  // Show the Overlay.


  // Get child's alt attribute and set caption.



function getGod(randGod) {
 for (i = 0; i < models.length; i++) {
     if (roll === i) {
         return models[i];
        }
    }    
} 