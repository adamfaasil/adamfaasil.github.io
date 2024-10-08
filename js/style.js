
// Splash Screen
document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById("splash-screen");
    const hero = document.getElementById("hero");

    // Hide navbar and dark mode toggle
    hero.classList.add('hidden');

    // Wait for 3 seconds or until the content is loaded
    setTimeout(() => {
        splashScreen.style.opacity = "0"; // Start fading out
        setTimeout(() => {
            splashScreen.style.display = "none"; // Remove it from the view after fade out
            hero.classList.remove('hidden'); // Show Header again
        }, 500); // Match with the CSS transition duration
    }, 4000); // Change this time as needed
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode toggle

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('dark-mode-switch');
  const toggleIcon = document.getElementById('toggle-icon');
  const body = document.body;

  // Check if user has a previously selected theme
  const currentTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(currentTheme);

  // Update the toggle switch based on current theme
  toggleSwitch.checked = currentTheme === 'dark-mode';

  // Update the icon based on current theme
  toggleIcon.textContent = currentTheme === 'dark-mode' ? 'brightness_7' : 'brightness_4';

  // Toggle theme on switch change
  toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
          body.classList.replace('light-mode', 'dark-mode');
          toggleIcon.textContent = 'brightness_7'; // Change icon to bright
          localStorage.setItem('theme', 'dark-mode');
      } else {
          body.classList.replace('dark-mode', 'light-mode');
          toggleIcon.textContent = 'brightness_4'; // Change icon to dark
          localStorage.setItem('theme', 'light-mode');
      }
  });
});

// Hide/Show Navbar on Scroll

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '1.5%'; // Set to your desired distance from the top
    } else {
        // Scrolling up
        navbar.style.top = '1.5%'; // Keep it at the same distance
    }
    lastScrollTop = scrollTop;
});

// Collapsable Menu
document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isVisible = content.style.display === 'block';

        // Toggle display
        content.style.display = isVisible ? 'none' : 'block';
    });
});





