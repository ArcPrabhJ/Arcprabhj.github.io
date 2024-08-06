document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactForm.reset();
        alert('Your message has been sent!');
    });

    const resumeButton = document.getElementById('resumeButton');
    resumeButton.addEventListener('click', () => {
        window.open('path/to/your/resume.pdf', '_blank');
    });

    // Dropdown menu functionality
    function toggleDropdown() {
        document.getElementById("dropdown-content").classList.toggle("show");
    }
    
    // Add event listener for dropdown button
    const dropdownButton = document.querySelector('.dropbtn');
    if (dropdownButton) {
        dropdownButton.addEventListener('click', toggleDropdown);
    }else {
    console.log("Dropdown button not found");
}
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});
