const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const pauseButton = document.querySelector('.pause-btn');
const playButton = document.querySelector('.play-btn');

let currentIndex = 0;
let intervalId = null; // Track the rotation interval
const intervalTime = 10000; // Define interval time (10 seconds)

// Function to update carousel position
function updateCarousel() {
    const offset = -currentIndex * 100; // Moves the carousel by 100% per item
    carousel.style.transform = `translateX(${offset}%)`;
}

// Function to start auto-rotation
function startAutoRotate() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }, intervalTime); // Use the defined intervalTime

        // Show pause button and hide play button
        pauseButton.style.display = 'block';
        playButton.style.display = 'none';
    }
}

// Function to stop auto-rotation
function stopAutoRotate() {
    clearInterval(intervalId);
    intervalId = null;

    // Show play button and hide pause button
    pauseButton.style.display = 'none';
    playButton.style.display = 'block';
}

// Event Listeners for Pause and Play Buttons
pauseButton.addEventListener('click', stopAutoRotate);
playButton.addEventListener('click', startAutoRotate);

// Event Listeners for Manual Navigation
leftArrow.addEventListener('click', () => {
    stopAutoRotate(); // Stop auto-rotation on manual interaction
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    stopAutoRotate(); // Stop auto-rotation on manual interaction
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
});

// Start auto-rotation on page load
startAutoRotate();
 //section4//
  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('#interactive-section');
    const light = section.querySelector('.light');
    const cursorIcon = section.querySelector('.custom-cursor');
    const images = section.querySelectorAll('img');
    const header = section.querySelector('h2');

    // Initialize light and cursor positions
    light.style.top = '-150px';
    light.style.left = '-150px';
    cursorIcon.style.top = '-40px';
    cursorIcon.style.left = '-40px';

    // Hide the light and cursor initially
    light.style.display = 'none';
    cursorIcon.style.display = 'none';

    // Track if the cursor is inside the section
    let isCursorInside = false;

    // Mousemove event to move the light and cursor dynamically
    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        const offsetX = e.clientX - rect.left; // Adjust X relative to section
        const offsetY = e.clientY - rect.top; // Adjust Y relative to section

        // If the cursor is inside the section, show the light and cursor
        if (e.clientX > rect.left && e.clientX < rect.right && e.clientY > rect.top && e.clientY < rect.bottom) {
            if (!isCursorInside) {
                light.style.display = 'block'; // Show the light
                cursorIcon.style.display = 'block'; // Show the cursor icon
                isCursorInside = true;
            }

            // Move the light effect
            light.style.top = `${offsetY}px`;
            light.style.left = `${offsetX}px`;

            // Move the custom cursor icon
            cursorIcon.style.top = `${offsetY}px`;
            cursorIcon.style.left = `${offsetX}px`;

            // Reveal images within the light's radius
            images.forEach((img) => {
                const imgRect = img.getBoundingClientRect();
                const imgCenterX = imgRect.left + imgRect.width / 2 - rect.left;
                const imgCenterY = imgRect.top + imgRect.height / 2 - rect.top;

                const distance = Math.sqrt(
                    (imgCenterX - offsetX) ** 2 + (imgCenterY - offsetY) ** 2
                );

                if (distance < 75) {
                    img.classList.add('reveal'); // Show image
                } else {
                    img.classList.remove('reveal'); // Hide image
                }
            });
        }
    });

    // Mouseleave event to hide the light and cursor icon, and reset positions
    section.addEventListener('mouseleave', () => {
        light.style.display = 'none'; // Hide the light
        cursorIcon.style.display = 'none'; // Hide the cursor icon
        isCursorInside = false; // Track that cursor left the section
    });
});

/* Section 5*/
document.addEventListener('DOMContentLoaded', () => {
    const carousel5 = document.querySelector('.carousel-content-5');
    const items5 = document.querySelectorAll('.carousel-item-5');
    const nextBtn5 = document.querySelector('.next-btn-5');
    const prevBtn5 = document.querySelector('.prev-btn-5');
    const playBtn5 = document.querySelector('.play-btn');
    const infoTitle = document.getElementById('carousel-info-title');
    const infoText = document.getElementById('carousel-info-text');

    let currentIndex5 = 0;
    let autoRotate5;
    const intervalTime5 = 10000;

    const slideInfo = [
        { title: "Title for Slide 1", text: "Description for slide 1" },
        { title: "Title for Slide 2", text: "Description for Slide 2" },
        { title: "Title for Slide 3", text: "Description for Slide 3" },
    ];

    function updateCarousel5(index) {
        items5.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        carousel5.style.transform = `translateX(-${index * 100}%)`;
        infoTitle.textContent = slideInfo[index].title;
        infoText.textContent = slideInfo[index].text;
    }

    function startAutoRotate5() {
        stopAutoRotate5();
        autoRotate5 = setInterval(() => {
            currentIndex5 = (currentIndex5 + 1) % items5.length;
            updateCarousel5(currentIndex5);
        }, intervalTime5);
        playBtn5.textContent = "⏸";
    }

    function stopAutoRotate5() {
        clearInterval(autoRotate5);
        playBtn5.textContent = "▶";
    }

    nextBtn5.addEventListener('click', () => {
        currentIndex5 = (currentIndex5 + 1) % items5.length;
        updateCarousel5(currentIndex5);
    });

    prevBtn5.addEventListener('click', () => {
        currentIndex5 = (currentIndex5 - 1 + items5.length) % items5.length;
        updateCarousel5(currentIndex5);
    });

    playBtn5.addEventListener('click', () => {
        if (playBtn5.textContent === "▶") {
            startAutoRotate5();
        } else {
            stopAutoRotate5();
        }
    });

    updateCarousel5(currentIndex5);
    startAutoRotate5();
});
