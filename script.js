 const themeButton = document.getElementById('theme-button');
  const body = document.querySelector('body');
  
  // function to update the button style based on the current theme
  function updateButtonStyle() {
    if (body.classList.contains('dark-mode')) {
      // if the current theme is dark mode, update the button style accordingly
      themeButton.style.backgroundColor = 'white';
      themeButton.style.color = 'black';
    } else {
      // if the current theme is light mode, revert the button style to the default
      themeButton.style.backgroundColor = 'black';
      themeButton.style.color = 'white';
    }
  }
  
  // initialize the button style on page load
  updateButtonStyle();
  
  // add an event listener to the button to toggle the theme and update the button style
  themeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode'); // toggle the 'dark-mode' class on the body element
    updateButtonStyle(); // update the button style based on the new theme
  });

const images = document.querySelectorAll('#picture img');
let index = 0;

function changeImage() {
  images[index].style.opacity = 0;
  index = (index + 1) % images.length;
  images[index].style.opacity = 1;
}

setInterval(changeImage, 5000);