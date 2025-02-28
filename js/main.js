document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  AOS.init();
  
  const formi = document.getElementById('Formi1');
  formi.addEventListener("submit", () => { 
    alert('Please enter');
  });
});
