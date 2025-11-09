document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons and content sections
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target section ID from data attribute
            const targetId = this.getAttribute('data-target');
            
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show the target section
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Initialize the first section as active
    document.querySelector('.nav-btn.active').click();
});