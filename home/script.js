


// Video Modal

            const playButton = document.getElementById('play-video-btn');
            const videoModal = document.getElementById('video-modal');
            const closeModalButton = document.getElementById('video-modal-close');
            const youtubeIframe = document.getElementById('youtube-video');
            const videoSrc = "https://www.youtube.com/embed/w2fBzH71BWw?si=Tw9Qk1XM9v6ydwCa";

            if (playButton) {
                playButton.addEventListener('click', () => {
                    youtubeIframe.src = videoSrc + "?autoplay=1";
                    videoModal.style.display = 'flex';
                });
            }

            function closeVideoModal() {
                if(videoModal) videoModal.style.display = 'none';
                if(youtubeIframe) youtubeIframe.src = "";
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


