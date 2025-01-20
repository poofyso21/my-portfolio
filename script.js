// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.innerText = '↑ Top';
document.body.appendChild(backToTopButton);

// Add styling for the button
const style = document.createElement('style');
style.innerText = `
    #back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        font-size: 14px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: none;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: opacity 0.3s;
    }

    #back-to-top:hover {
        background-color: #0056b3;
    }
`;
document.head.appendChild(style);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
