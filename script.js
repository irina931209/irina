document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 30 ? '0 5px 20px rgba(115, 180, 210, .15)' : 'none';
  });
  document.querySelectorAll('.btn, .contact-item').forEach(item => {
    item.addEventListener('click', () => {
      item.style.transform = 'scale(.97)';
      window.setTimeout(() => item.style.transform = '', 160);
    });
  });
});
