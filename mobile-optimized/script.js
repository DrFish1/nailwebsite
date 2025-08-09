// Mobile-Optimized JavaScript for Leanna's Nail Art
// Preserving all core functionality while optimizing for mobile UX

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Rotating Text Animation
    const rotatingTextElement = document.querySelector('.rotating-text');
    const texts = ['Amazing', 'Stunning', 'Beautiful', 'Gorgeous', 'Incredible', 'Spectacular', 'Fabulous', 'Breathtaking'];
    let currentTextIndex = 0;

    function rotateText() {
        if (rotatingTextElement) {
            rotatingTextElement.style.opacity = '0';
            setTimeout(() => {
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                rotatingTextElement.textContent = texts[currentTextIndex];
                rotatingTextElement.style.opacity = '1';
            }, 300);
        }
    }

    // Start text rotation
    setInterval(rotateText, 2500);

    // Booking System State
    let bookingState = {
        step: 1,
        selectedService: null,
        selectedDate: null,
        selectedTime: null,
        customerInfo: {
            name: '',
            email: '',
            phone: '',
            notes: ''
        }
    };

    // Booking System Navigation
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const bookingSteps = document.querySelectorAll('.booking-step');

    function updateBookingStep(step) {
        bookingState.step = step;
        
        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            const stepNumber = index + 1;
            if (stepNumber <= step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update visible step
        bookingSteps.forEach((stepElement, index) => {
            const stepNumber = index + 1;
            if (stepNumber === step) {
                stepElement.classList.add('active');
            } else {
                stepElement.classList.remove('active');
            }
        });

        // Scroll to booking section
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Service Selection
    const serviceOptions = document.querySelectorAll('.service-option');
    const nextStep1Button = document.getElementById('next-step1');

    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Store selection
            bookingState.selectedService = {
                name: this.dataset.service,
                price: parseInt(this.dataset.price)
            };
            
            // Enable next button
            nextStep1Button.disabled = false;
            
            // Add haptic feedback for mobile
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    nextStep1Button.addEventListener('click', function() {
        if (bookingState.selectedService) {
            updateBookingStep(2);
        }
    });

    // Date and Time Selection
    const appointmentDateInput = document.getElementById('appointment-date');
    const timeSlots = document.querySelectorAll('.time-slot');
    const nextStep2Button = document.getElementById('next-step2');
    const backStep2Button = document.getElementById('back-step2');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    appointmentDateInput.min = today;

    appointmentDateInput.addEventListener('change', function() {
        bookingState.selectedDate = this.value;
        checkStep2Completion();
    });

    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            // Remove previous selection
            timeSlots.forEach(s => s.classList.remove('selected'));
            
            // Add selection to clicked slot
            this.classList.add('selected');
            
            // Store selection
            bookingState.selectedTime = this.dataset.time;
            
            // Check if step can proceed
            checkStep2Completion();
            
            // Add haptic feedback
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    });

    function checkStep2Completion() {
        if (bookingState.selectedDate && bookingState.selectedTime) {
            nextStep2Button.disabled = false;
        } else {
            nextStep2Button.disabled = true;
        }
    }

    nextStep2Button.addEventListener('click', function() {
        if (bookingState.selectedDate && bookingState.selectedTime) {
            updateBookingStep(3);
        }
    });

    backStep2Button.addEventListener('click', function() {
        updateBookingStep(1);
    });

    // Step 3: Customer Information
    const backStep3Button = document.getElementById('back-step3');
    const confirmBookingButton = document.getElementById('confirm-booking');
    const customerNameInput = document.getElementById('customer-name');
    const customerEmailInput = document.getElementById('customer-email');
    const customerPhoneInput = document.getElementById('customer-phone');
    const customerNotesInput = document.getElementById('customer-notes');

    backStep3Button.addEventListener('click', function() {
        updateBookingStep(2);
    });

    confirmBookingButton.addEventListener('click', function() {
        if (validateBookingForm()) {
            submitBooking();
        }
    });

    function validateBookingForm() {
        const name = customerNameInput.value.trim();
        const email = customerEmailInput.value.trim();
        const phone = customerPhoneInput.value.trim();

        if (!name || !email || !phone) {
            alert('Please fill in all required fields.');
            return false;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // Store customer info
        bookingState.customerInfo = {
            name: name,
            email: email,
            phone: phone,
            notes: customerNotesInput.value.trim()
        };

        return true;
    }

    function submitBooking() {
        // Simulate booking submission
        const bookingSummary = {
            service: bookingState.selectedService,
            date: bookingState.selectedDate,
            time: bookingState.selectedTime,
            customer: bookingState.customerInfo,
            timestamp: new Date().toISOString()
        };

        console.log('Booking submitted:', bookingSummary);

        // Show success message
        showSuccessModal('Booking Confirmed!', 
            `Thank you ${bookingState.customerInfo.name}! Your appointment for ${bookingState.selectedService.name} on ${formatDate(bookingState.selectedDate)} at ${bookingState.selectedTime} has been confirmed. I'll send you a confirmation email shortly.`
        );

        // Reset booking state
        resetBookingForm();
    }

    function resetBookingForm() {
        // Reset state
        bookingState = {
            step: 1,
            selectedService: null,
            selectedDate: null,
            selectedTime: null,
            customerInfo: {
                name: '',
                email: '',
                phone: '',
                notes: ''
            }
        };

        // Reset UI
        serviceOptions.forEach(opt => opt.classList.remove('selected'));
        timeSlots.forEach(slot => slot.classList.remove('selected'));
        appointmentDateInput.value = '';
        customerNameInput.value = '';
        customerEmailInput.value = '';
        customerPhoneInput.value = '';
        customerNotesInput.value = '';
        
        nextStep1Button.disabled = true;
        nextStep2Button.disabled = true;
        
        updateBookingStep(1);
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('contact-name').value.trim(),
            email: document.getElementById('contact-email').value.trim(),
            message: document.getElementById('contact-message').value.trim()
        };

        if (validateContactForm(formData)) {
            submitContactForm(formData);
        }
    });

    function validateContactForm(data) {
        if (!data.name || !data.email || !data.message) {
            alert('Please fill in all fields.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    function submitContactForm(data) {
        // Simulate form submission
        console.log('Contact form submitted:', data);
        
        showSuccessModal('Message Sent!', 
            `Thank you ${data.name}! Your message has been sent successfully. I'll get back to you soon.`
        );

        // Reset form
        contactForm.reset();
    }

    // Modal Functions
    const successModal = document.getElementById('success-modal');
    const successMessage = document.getElementById('success-message');

    function showSuccessModal(title, message) {
        const modalTitle = successModal.querySelector('h3');
        modalTitle.textContent = title;
        successMessage.textContent = message;
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Utility Functions
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.service-card, .booking-container');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Performance optimizations
    let ticking = false;

    function updateScrollEffects() {
        // Add any scroll-based effects here
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });

    // Touch gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Detect swipe gestures
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                // Swipe right - could be used for navigation
            } else {
                // Swipe left - could be used for navigation
            }
        }
    }, { passive: true });

    // Lazy loading for better performance
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        img.classList.add('lazy-load');
        imageObserver.observe(img);
    });

    // PWA-like features
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Service worker could be registered here for offline functionality
        });
    }

    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // ESC key closes modals
        if (e.key === 'Escape') {
            if (successModal.classList.contains('active')) {
                closeModal();
            }
            if (mobileMenu.classList.contains('active')) {
                menuToggle.click();
            }
        }
    });

    // Form auto-save (for better UX)
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            // Could implement auto-save functionality here
            // localStorage.setItem(`form_${this.id}`, this.value);
        });
    });

    console.log('✨ Leanna\'s Nail Art - Mobile Experience Loaded Successfully');
});