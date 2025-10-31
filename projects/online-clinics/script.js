  <!-- ANIMATIONS -->

        // Scroll fade-in animation
        const sections = document.querySelectorAll('.fade-section');
        const options = { threshold: 0.1 };
        let counterAnimated = false;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('animate-fadeInUp');

                    if (entry.target.id === 'results' && !counterAnimated) {
                        counterAnimated = true;
                        
                        const counters = document.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            const updateCount = () => {
                                const target = +counter.getAttribute('data-target');
                                const count = +counter.innerText;
                                const increment = target / 100;
                                
                                if(count < target){
                                    let newCount = Math.ceil(count + increment);
                                    if (newCount > target) {
                                        newCount = target;
                                    }
                                    counter.innerText = newCount;
                                    setTimeout(updateCount, 40);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCount();
                        });
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        // Back to top functionality
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('back-to-top');
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
