// const upcoming = document.querySelectorAll('.upcoming-item');
// const news = document.querySelectorAll('.news-item');

// let upcomingIndex = 0;
// let newsIndex = 0;

// let upcomingInterval; // To store the interval reference
// let newsInterval;

// function toggleUpcoming() {
//     upcoming.forEach(item => item.classList.remove('show'));
//     upcoming[upcomingIndex].classList.add('show');
//     upcomingIndex = (upcomingIndex + 1) % upcoming.length;
// }

// function toggleNews() {
//     news.forEach(item => item.classList.remove('show'));
//     news[newsIndex].classList.add('show');
//     newsIndex = (newsIndex + 1) % news.length;
// }


// // Start the animation
// function startUpcoming() {
//     upcomingInterval = setInterval(toggleUpcoming, 3000);
// }
// // Stop the animation
// function stopUpcoming() {
//     clearInterval(upcomingInterval);
// }

// function startNews(){
//     newsInterval = setInterval(toggleNews, 5000);
// }

// function stopNews() {
//     clearInterval(newsInterval);
// }


// // Add event listeners to pause on hover
// upcoming.forEach(item => {
//     item.addEventListener('mouseenter', stopUpcoming); // Pause on hover
//     item.addEventListener('mouseleave', startUpcoming); // Resume on mouse leave
// });

// news.forEach(item => {
//     item.addEventListener('mouseenter', stopNews); // Pause on hover
//     item.addEventListener('mouseleave', startNews); // Resume on mouse leave
// });


// // Start the animation initially
// startUpcoming();
// startNews();


const upcoming = document.querySelectorAll('.upcoming-item');
const news = document.querySelectorAll('.news-item');

let upcomingIndex = 0;
let newsIndex = 0;

let upcomingInterval;
let newsInterval;

// Variables for touch event swipe detection
let startTouchX = 0;
let endTouchX = 0;
const swipeThreshold = 90; // Minimum distance to consider it a swipe

function toggleUpcoming() {
    upcoming.forEach(item => item.classList.remove('show'));
    upcoming[upcomingIndex].classList.add('show');
    upcomingIndex = (upcomingIndex + 1) % upcoming.length;
}

function toggleNews() {
    news.forEach(item => item.classList.remove('show'));
    news[newsIndex].classList.add('show');
}

function moveNewsForward() {
    newsIndex = (newsIndex + 1) % news.length; // Move forward
    toggleNews();
    resetNewsInterval(); // Reset interval on manual interaction
}

function moveNewsBackward() {
    newsIndex = (newsIndex === 0) ? news.length - 1 : newsIndex - 1; // Move backward
    toggleNews();
    resetNewsInterval(); // Reset interval on manual interaction
}

// Start the animation
function startUpcoming() {
    upcomingInterval = setInterval(toggleUpcoming, 3000);
}

function stopUpcoming() {
    clearInterval(upcomingInterval);
}

function startNews() {
    newsInterval = setInterval(moveNewsForward, 5000);
}

function stopNews() {
    clearInterval(newsInterval);
}

// Detect swipe direction for news items
function detectSwipe() {
    const swipeDistance = endTouchX - startTouchX;
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe to the right (go backward)
            moveNewsBackward();
        } else {
            // Swipe to the left (go forward)
            moveNewsForward();
        }
    }
}

// Add event listeners to pause on hover for upcoming items
upcoming.forEach(item => {
    item.addEventListener('mouseenter', stopUpcoming);
    item.addEventListener('mouseleave', startUpcoming);
});

// Add event listeners to pause on hover for news items
news.forEach(item => {
    item.addEventListener('mouseenter', stopNews);
    item.addEventListener('mouseleave', startNews);
});

// Touch events for detecting swipe for news
document.querySelector('.news-sec').addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].clientX;
});

document.querySelector('.news-sec').addEventListener('touchend', (e) => {
    endTouchX = e.changedTouches[0].clientX;
    detectSwipe();
});


function resetNewsInterval() {
    stopNews();
    startNews();
}

// Start the animation initially
startUpcoming();
startNews();