var roll = Math.floor(Math.random() * models.length);

var godName = getGod(roll).name;
var godRole = getGod(roll).role;
var godBuildLink = getGod(roll).buildLink;
var godGuide = getGod(roll).guideLink;

    var $overlayGod = $('<div id="overlay">' + '<h1 class="godOverlay id=godOverlay">' + '</hi>' + '<p id="name">' + godName + "</p>" + '<p id="role">' + godRole + '</p>' + '<p id="buildLink">' + '<a href="' + godBuildLink + '"> Recommended Build' + '</a></p>' + '</h1></div>');

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
    $(this).hide();
if (event) {
 $overlayGod.show();   
}
});



$("body").append($overlayGod);




function getGod(randGod) {
 for (i = 0; i < models.length; i++) {
     if (roll === i) {
         return models[i];
        }
    }    
} 