var roll = Math.floor(Math.random() * models.length);

var godName = getGod(roll).name;
//JQUERY START
var $overlay = $('<div id="overlay">Hello World</div>');

$overlay.appendTo(document.body);
//
////Problem: Need Button to initiate roll
////Solution: Create a button for random god roll and implement.




////Problem 2: Overlay must appear after random number and god is generated.
////Solution:  Need to create overlay with God information/Builds/Guides including CSS.



////Add Overlay.

  //Attach overlay to randomly generated god selection.

//Add ReRoll button to Overlay that initiates function again.

//JQUERY END




  // Update Overlay with the image linked in the link.
  // Show the Overlay.
  $overlay.show();

  // Get child's alt attribute and set caption.










function getGod(randGod) {
 for (i = 0; i < models.length; i++) {
     if (roll === i) {
         return models[i];
        }
    }    
} 
getGod();
console.log(godName);
console.log(roll);
console.log(i);