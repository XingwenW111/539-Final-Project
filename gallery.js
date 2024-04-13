document.addEventListener('DOMContentLoaded', function() {
    var filterSelect = document.getElementById('filter');
    var images = document.querySelectorAll('.gallery .img-4'); // All images in the gallery

    filterSelect.addEventListener('change', function() {
        var selectedCategory = this.value;
        
        // Show all images if 'All' is selected
        if (selectedCategory === 'all') {
            images.forEach(function(image) {
                image.style.display = '';
            });
        } else {
            images.forEach(function(image) {
                // Check if the image's data-category matches the selected value
                if (image.getAttribute('data-category') === selectedCategory) {
                    image.style.display = ''; // Show the image
                } else {
                    image.style.display = 'none'; // Hide the image
                }
            });
        }
    });
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById('back-to-top').addEventListener('click', function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
