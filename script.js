document.querySelectorAll('img-container').forEach(item => {
    item.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            document.querySelectorAll('img-container.active').forEach(openItem => {
                openItem.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
    });
const track = document.getElementById('track');
let speed = 1;
let scrollAmount = 0;
let isPaused = false;

function animate() {
    if (!isPaused && window.innerWidth > 768) {
        scrollAmount += speed;
        track.style.transform = `translateX(-${scrollAmount}px)`;

        const firstItem = track.firstElementChild;
        const firstItemWidth = firstItem.offsetWidth + parseInt(window.getComputedStyle(track).gap);

        if (scrollAmount >= firstItemWidth) {
            track.appendChild(firstItem);
            scrollAmount = 0;
            track.style.transform = `translateX(0px)`;
        }
    }
    requestAnimationFrame(animate);
}

animate();

track.addEventListener('mouseenter', () => isPaused = true);
track.addEventListener('mouseleave', () => isPaused = false);
track.addEventListener('wheel' , (e) => e.preventDefault(), { passive: false });

function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

const hamburger = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.menu-wrapper');

// Toggle the menu when clicking the hamburger
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close the menu when a link is clicked
document.querySelectorAll('.menu-wrapper a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});