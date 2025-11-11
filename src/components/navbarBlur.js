const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    
    if (scrollPercentage > 0.1) { // Más del 10% de scroll
      nav.classList.add('blur');
    } else {
      nav.classList.remove('blur');
    }
});