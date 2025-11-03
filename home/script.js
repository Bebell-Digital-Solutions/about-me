
document.addEventListener('DOMContentLoaded', function() {
    // Video Modal Functionality
    const playButton = document.getElementById('play-video-btn');
    const videoModal = document.getElementById('video-modal');
    const closeModalButton = document.getElementById('video-modal-close');
    const youtubeIframe = document.getElementById('youtube-video');
    const videoSrc = "https://www.youtube.com/embed/w2fBzH71BWw?si=Tw9Qk1XM9v6ydwCa";

    // Function to open video modal
    function openVideoModal() {
        if (youtubeIframe && videoModal) {
            youtubeIframe.src = videoSrc + "&autoplay=1";
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    }

    // Function to close video modal
    function closeVideoModal() {
        if (videoModal) {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        if (youtubeIframe) {
            youtubeIframe.src = ""; // Stop video playback
        }
    }

    // Event Listeners
    if (playButton) {
        playButton.addEventListener('click', openVideoModal);
    }

    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeVideoModal);
    }

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.style.display === 'flex') {
            closeVideoModal();
        }
    });

    // Remove the undefined function call
    // updateButtonVisibility(); // This function doesn't exist - removed
});
