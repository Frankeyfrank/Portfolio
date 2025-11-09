document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
    
    // Copy contact info functionality
    const copyableItems = document.querySelectorAll('.contact-item.copyable');
    
    copyableItems.forEach(item => {
        item.addEventListener('click', function() {
            const textToCopy = this.querySelector('span').textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = this.querySelector('span').textContent;
                this.querySelector('span').textContent = 'Copied!';
                this.style.opacity = '0.7';
                
                setTimeout(() => {
                    this.querySelector('span').textContent = originalText;
                    this.style.opacity = '1';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    });
    
    // Initialize first section
    document.querySelector('.nav-btn.active').click();
});