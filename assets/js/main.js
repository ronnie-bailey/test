// Initialize tag cloud interactivity
document.addEventListener('DOMContentLoaded', function() {
  // Anchor scrolling for tag links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Initialize related posts carousel
  const relatedPosts = document.querySelector('.related-posts');
  if (relatedPosts) {
    // Add carousel functionality here
  }
});
