//var roll = Math.floor(Math.random() * models.length);
var roll = 0;

var godName = getGod(roll).name;
var godRole = getGod(roll).role;
var godBuildLink = getGod(roll).buildLink;
var godGuide = getGod(roll).guideLink;
var godImage = getGod(roll).imageLink;

var $overlayGod = $('<div id="overlay">' + '<h1 class="godOverlay id=godOverlay">' + '</hi>' + '<p id="name">' + godName + "</p>" + '<p id="role">' + godRole + '</p>' + '<p id="buildLink">' + '<a href="' + godBuildLink + '"> Recommended Build' + '</a></p>' + '<img src="' + godImage + '">' + '</h1></div>');


$(window).load(function() {

    // Show popup
    $('#first_popup').popup();
    $('.first_popup_open').click();
    
    $('#god-result').popup();
    
});

$(".roll-button").click(function(event) {
    // When the button is clicked, hide the roll button
    $overlayGod.show();
});

// create second popup with overlay elements



// TODO: Find a better place to put this
$("#god-result").append($overlayGod);


function getGod(randGod) {
 for (i = 0; i < models.length; i++) {
     if (roll === i) {
         return models[i];
        }
    }    
} 