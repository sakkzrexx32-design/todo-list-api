// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            // FIX: was "scrollIntoview" — wrong casing
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Product hover animations
// FIX: was "peoductCards" typo
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function() {
        // FIX: was translareY(0) — missing quotes, typo
        this.style.transform = 'translateY(0)';
    });
});

// Add to cart buttons
const cartButtons = document.querySelectorAll(".add-cart");
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Coffee added to cart!");
    });
});
