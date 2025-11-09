// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize EmailJS
// Wait for EmailJS to be available
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("GN1pLLloZO4zSDhvc"); // EmailJS Public Key
        console.log('EmailJS initialized');
    } else {
        // Retry after a short delay if EmailJS isn't loaded yet
        setTimeout(initEmailJS, 100);
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailJS);
} else {
    initEmailJS();
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            alert('Email service is not available. Please refresh the page and try again.');
            return;
        }
        
        const submitButton = contactForm.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Send email using EmailJS
            const response = await emailjs.send(
                'service_dka6q1a',  // EmailJS Service ID
                'template_wyepgxc', // EmailJS Template ID
                {
                    from_name: name,
                    from_email: email,
                    message: message,
                    to_email: 'saeedg48@gmail.com' // Recipient email
                }
            );
            
            console.log('Email sent successfully:', response);
            
            // Success message
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = '#10b981';
            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.style.background = '';
            }, 3000);
            
        } catch (error) {
            console.error('Email sending failed:', error);
            console.error('Error details:', {
                status: error.status,
                text: error.text,
                message: error.message
            });
            
            submitButton.textContent = 'Failed to Send';
            submitButton.style.background = '#dc2626';
            
            // Show more detailed error message
            let errorMessage = 'Sorry, there was an error sending your message.';
            if (error.text) {
                errorMessage += `\n\nError: ${error.text}`;
            } else if (error.message) {
                errorMessage += `\n\nError: ${error.message}`;
            }
            errorMessage += '\n\nPlease check the browser console for more details.';
            alert(errorMessage);
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                submitButton.style.background = '';
            }, 3000);
        }
    });
}

// CTA button handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and stats
document.querySelectorAll('.service-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

