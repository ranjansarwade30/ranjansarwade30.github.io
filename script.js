document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => document.querySelector(link.getAttribute('href'))?.focus?.());
});
