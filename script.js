const readMoreBtn = document.getElementById('read-more-btn');
const hiddenParagraph = document.getElementById('hidden-paragraph');

readMoreBtn.addEventListener('click', function() {
  if (hiddenParagraph.style.display === 'none') {
    hiddenParagraph.style.display = 'block';
    readMoreBtn.innerHTML = 'Read Less';
  } else {
    hiddenParagraph.style.display = 'none';
    readMoreBtn.innerHTML = 'Read More';
  }
});
// JavaScript code to handle the button clicks
const viewOriginalBtns = document.querySelectorAll('.view-original-btn');
const imageSrcs = [];

// Store the original image source URLs in an array
document.querySelectorAll('.image-container img').forEach(img => {
  imageSrcs.push(img.src);
});

// Event listener for the "View Original" button clicks
viewOriginalBtns.forEach((btn, index) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const imageSrc = imageSrcs[index];
    const originalWindow = window.open(imageSrc);
    originalWindow.focus();
  });
});

// Event listener for the "Download" button clicks
document.querySelectorAll('.download-btn').forEach((btn, index) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const imageSrc = imageSrcs[index];
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
