window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleDropdown() {
    var x = document.querySelector(".bar-content");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        var targetPosition = section.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetPosition - currentPosition;
        var scrollSpeed = 7;
        var scrollStep = distance / (scrollSpeed * 10); 

        var scrollInterval = setInterval(function() {
            window.scrollTo(0, currentPosition);
            currentPosition += scrollStep;

          
            if ((distance >= 0 && currentPosition >= targetPosition) || (distance < 0 && currentPosition <= targetPosition)) {
                clearInterval(scrollInterval);
            }
}, 15);
}




function redirectToLink(url) {
    window.open(url, '_blank');
}