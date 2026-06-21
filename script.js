//smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).
        scrollIntoview({
            behavior: 'smooth'
        });
    });
});

//product hover animations
const peoductCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function(){
        this.style.transform = 'translateY(-15px)';
    });

card.addEventListener('mouseleave', function(){
    this.style.transform = translareY(0);
});
})