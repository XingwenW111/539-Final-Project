// Function to handle the navbar shrink effect
function nav_shrink() {
    var distance = window.pageYOffset - document.getElementById("nav_content").getBoundingClientRect().top;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav_title").style.fontSize = "50px";
        document.getElementById("nav_content").style.fontSize = "24px";
        if (distance >= 300) {
            // Your existing code for adding styles when the navbar needs to shrink
            document.getElementById("nav_content").style.position = "fixed";
            document.getElementById("nav_content").style.top = "0";
            document.getElementById("nav_content").style.borderRadius = "10px";
            document.getElementById("nav_content").style.backgroundColor = "#B05868";
            document.getElementById("nav_content").style.paddingLeft = "100px";
            document.getElementById("nav_content").style.paddingRight = "100px";
            document.getElementById("nav_content").style.paddingTop = "5px";
            document.getElementById("nav_content").style.paddingBottom = "5px";
        }
        else {
            // Your existing code for resetting styles when the navbar should expand
            document.getElementById("nav_content").style.position = null;
            document.getElementById("nav_content").style.top = null;
            document.getElementById("nav_content").style.borderRadius = null;
            document.getElementById("nav_content").style.backgroundColor = null;
            document.getElementById("nav_content").style.paddingLeft = null;
            document.getElementById("nav_content").style.paddingRight = null;
            document.getElementById("nav_content").style.paddingTop = null;
            document.getElementById("nav_content").style.paddingBottom = null;
        }
    }
    else {
        document.getElementById("nav_title").style.fontSize = "64px";
        document.getElementById("nav_content").style.fontSize = "21px";
    }
}

// Function to handle the back-to-top button visibility
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// Combine both onscroll functions
window.onscroll = function() {
    nav_shrink();
    scrollFunction();
};

// Event listener for the back-to-top button click
document.getElementById('back-to-top').addEventListener('click', function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Attach event listeners for the play and pause buttons
// It's important to make sure that these buttons exist in the DOM before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('.play-button');
    var pauseButton = document.querySelector('.pause-button');

    if (playButton) {
        playButton.addEventListener('click', function() {
            console.log('Play the song!');
            // Your existing code to play music
        });
    }
    
    if (pauseButton) {
        pauseButton.addEventListener('click', function() {
            console.log('Pause the song!');
            // Your existing code to pause music
        });
    }

    // Your existing code for other player controls and Spotify integration, if any
});
  
function form_input_func() {
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var form_button = document.getElementById("form_button");
        if (email != "" && message != "") {
            form_button.style.backgroundColor = "#B05868";
        }
        else {
            form_button.style.backgroundColor = "";
        }
    }
    
    function form_submit_func() {
        confirm("You have submitted the form")
        // setTimeout(hide, 10000);
    }
  
    