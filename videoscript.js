document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('#video');
    
    const resizer = document.querySelector('.resizer');
    const videoPopup = document.getElementById('video-popup');
  
    let isResizing = false;
  
    // Handle mouse down event for resizing
    resizer.addEventListener('mousedown', function(event) {
      isResizing = true;
      document.addEventListener('mousemove', resizeVideo);
      document.addEventListener('mouseup', stopResizing);
    });
  
    function resizeVideo(event) {
      if (isResizing) {
        const newWidth = event.clientX - videoContainer.getBoundingClientRect().left;
        if (newWidth > 200) { // Minimum width to prevent collapsing
          videoContainer.style.width = newWidth + 'px';
          video.style.width = newWidth + 'px'; // Match iframe width
          video.style.height = (newWidth * 9 / 16) + 'px'; // Maintain 16:9 aspect ratio
        }
      }
    }
  
    function stopResizing() {
      isResizing = false;
      document.removeEventListener('mousemove', resizeVideo);
      document.removeEventListener('mouseup', stopResizing);
    }
  
    // Show and hide the popup on hover
    video.addEventListener('mouseover', function() {
      videoPopup.style.display = 'block';
    });
  
    video.addEventListener('mouseout', function() {
      videoPopup.style.display = 'none';
    });

    // Set initial video size
  //video.style.width = '80%';
  //video.style.height = 'auto';
  });