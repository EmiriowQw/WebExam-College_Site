// Engineering College - Main JavaScript
// Smooth Scroll Navigation & Back-to-Top Button

// ================================
// Smooth Scroll Navigation
// ================================
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignore empty href or href="#"
      if (href === '#' || href === '') {
        return;
      }

      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ================================
  // Back to Top Button
  // ================================
  const backToTopButton = document.getElementById('backToTop');
  
  if (backToTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Keyboard accessibility
    backToTopButton.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }

  // ================================
  // Contact Form Validation
  // ================================
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    const captchaInput = document.getElementById('captchaAnswer');
    
    // Validation functions
    function validateName() {
      const value = nameInput.value.trim();
      if (value.length < 2) {
        setInvalid(nameInput, 'Name must be at least 2 characters long');
        return false;
      } else {
        setValid(nameInput);
        return true;
      }
    }

    function validateEmail() {
      const value = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setInvalid(emailInput, 'Please enter a valid email address');
        return false;
      } else {
        setValid(emailInput);
        return true;
      }
    }

    function validateSubject() {
      const value = subjectInput.value.trim();
      if (value.length < 3) {
        setInvalid(subjectInput, 'Subject must be at least 3 characters long');
        return false;
      } else {
        setValid(subjectInput);
        return true;
      }
    }

    function validateMessage() {
      const value = messageInput.value.trim();
      if (value.length < 10) {
        setInvalid(messageInput, 'Message must be at least 10 characters long');
        return false;
      } else {
        setValid(messageInput);
        return true;
      }
    }

    function validateCaptcha() {
      const value = parseInt(captchaInput.value);
      if (value !== 8) {
        setInvalid(captchaInput, 'Incorrect answer. Please try again.');
        return false;
      } else {
        setValid(captchaInput);
        return true;
      }
    }

    function setInvalid(element, message) {
      element.classList.remove('is-valid');
      element.classList.add('is-invalid');
      const feedback = element.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
      }
    }

    function setValid(element) {
      element.classList.remove('is-invalid');
      element.classList.add('is-valid');
    }

    // Add event listeners
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    captchaInput.addEventListener('blur', validateCaptcha);

    // Form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Validate all fields
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isSubjectValid = validateSubject();
      const isMessageValid = validateMessage();
      const isCaptchaValid = validateCaptcha();

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid && isCaptchaValid) {
        // Show success message
        const successAlert = document.getElementById('contactSuccess');
        const errorAlert = document.getElementById('contactError');
        
        if (successAlert) {
          successAlert.classList.add('show');
          errorAlert.classList.remove('show');
          
          // Reset form
          contactForm.reset();
          
          // Remove validation classes
          contactForm.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
          });

          // Scroll to success message
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          // Hide success message after 5 seconds
          setTimeout(() => {
            successAlert.classList.remove('show');
          }, 5000);
        }
      } else {
        // Show error message
        const errorAlert = document.getElementById('contactError');
        if (errorAlert) {
          errorAlert.classList.add('show');
          errorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  }

  // ================================
  // Registration Form Validation
  // ================================
  const registrationForm = document.getElementById('registrationForm');
  
  if (registrationForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const programInput = document.getElementById('program');
    const studyModeInputs = document.getElementsByName('studyMode');
    const intakeInput = document.getElementById('intake');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsInput = document.getElementById('terms');
    const submitButton = registrationForm.querySelector('button[type="submit"]');

    // Validation functions
    function validateFullName() {
      const value = fullNameInput.value.trim();
      if (value.length < 3) {
        setInvalid(fullNameInput, 'Full name must be at least 3 characters long');
        return false;
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        setInvalid(fullNameInput, 'Full name should only contain letters and spaces');
        return false;
      } else {
        setValid(fullNameInput);
        return true;
      }
    }

    function validateRegEmail() {
      const value = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setInvalid(emailInput, 'Please enter a valid email address');
        return false;
      } else {
        setValid(emailInput);
        return true;
      }
    }

    function validatePhone() {
      const value = phoneInput.value.trim();
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (value.length < 10) {
        setInvalid(phoneInput, 'Phone number must be at least 10 digits');
        return false;
      } else if (!phoneRegex.test(value)) {
        setInvalid(phoneInput, 'Please enter a valid phone number');
        return false;
      } else {
        setValid(phoneInput);
        return true;
      }
    }

    function validateProgram() {
      if (programInput.value === '') {
        setInvalid(programInput, 'Please select a program');
        return false;
      } else {
        setValid(programInput);
        return true;
      }
    }

    function validateStudyMode() {
      let isChecked = false;
      studyModeInputs.forEach(input => {
        if (input.checked) isChecked = true;
      });
      
      const container = document.querySelector('.study-mode-container');
      if (!isChecked) {
        if (container) container.classList.add('is-invalid');
        return false;
      } else {
        if (container) container.classList.remove('is-invalid');
        return true;
      }
    }

    function validateIntake() {
      if (intakeInput.value === '') {
        setInvalid(intakeInput, 'Please select an intake date');
        return false;
      } else {
        setValid(intakeInput);
        return true;
      }
    }

    function validatePassword() {
      const value = passwordInput.value;
      const strengthBar = document.querySelector('.password-strength-bar');
      const strengthText = document.querySelector('.password-strength-text');
      
      if (value.length < 8) {
        setInvalid(passwordInput, 'Password must be at least 8 characters long');
        if (strengthBar) {
          strengthBar.className = 'password-strength-bar';
          strengthText.textContent = '';
        }
        return false;
      } else {
        // Check password strength
        let strength = 0;
        if (value.length >= 8) strength++;
        if (value.length >= 12) strength++;
        if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
        if (/\d/.test(value)) strength++;
        if (/[^a-zA-Z\d]/.test(value)) strength++;

        if (strengthBar && strengthText) {
          if (strength <= 2) {
            strengthBar.className = 'password-strength-bar weak';
            strengthText.textContent = 'Weak password';
            strengthText.style.color = 'var(--danger-color)';
          } else if (strength <= 4) {
            strengthBar.className = 'password-strength-bar medium';
            strengthText.textContent = 'Medium password';
            strengthText.style.color = '#ffc107';
          } else {
            strengthBar.className = 'password-strength-bar strong';
            strengthText.textContent = 'Strong password';
            strengthText.style.color = 'var(--success-color)';
          }
        }

        setValid(passwordInput);
        
        // Revalidate confirm password if it has a value
        if (confirmPasswordInput.value) {
          validateConfirmPassword();
        }
        
        return true;
      }
    }

    function validateConfirmPassword() {
      const value = confirmPasswordInput.value;
      const passwordValue = passwordInput.value;
      
      if (value === '') {
        setInvalid(confirmPasswordInput, 'Please confirm your password');
        return false;
      } else if (value !== passwordValue) {
        setInvalid(confirmPasswordInput, 'Passwords do not match');
        return false;
      } else {
        setValid(confirmPasswordInput);
        return true;
      }
    }

    function validateTerms() {
      if (!termsInput.checked) {
        return false;
      } else {
        return true;
      }
    }

    function checkFormValidity() {
      const isValid = validateFullName() && validateRegEmail() && validatePhone() && 
                     validateProgram() && validateStudyMode() && validateIntake() && 
                     validatePassword() && validateConfirmPassword() && validateTerms();
      
      submitButton.disabled = !isValid;
      return isValid;
    }

    // Add event listeners
    fullNameInput.addEventListener('blur', () => {
      validateFullName();
      checkFormValidity();
    });
    
    emailInput.addEventListener('blur', () => {
      validateRegEmail();
      checkFormValidity();
    });
    
    phoneInput.addEventListener('blur', () => {
      validatePhone();
      checkFormValidity();
    });
    
    programInput.addEventListener('change', () => {
      validateProgram();
      checkFormValidity();
    });
    
    studyModeInputs.forEach(input => {
      input.addEventListener('change', () => {
        validateStudyMode();
        checkFormValidity();
      });
    });
    
    intakeInput.addEventListener('change', () => {
      validateIntake();
      checkFormValidity();
    });
    
    passwordInput.addEventListener('input', () => {
      validatePassword();
      checkFormValidity();
    });
    
    confirmPasswordInput.addEventListener('blur', () => {
      validateConfirmPassword();
      checkFormValidity();
    });
    
    termsInput.addEventListener('change', checkFormValidity);

    // Form submission
    registrationForm.addEventListener('submit', function(e) {
      e.preventDefault();

      if (checkFormValidity()) {
        // Show success message
        const successAlert = document.getElementById('registrationSuccess');
        const formContainer = document.querySelector('.form-container');
        
        if (successAlert && formContainer) {
          formContainer.style.display = 'none';
          successAlert.classList.add('show');
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });

    // Initial check
    submitButton.disabled = true;
  }
});

