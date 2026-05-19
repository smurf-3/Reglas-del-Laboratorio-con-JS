window.addEventListener('load', function() {
  alert('Bienvenido a nuestro laboratorio');

  const container = document.querySelector('.container');
  if (container) {
    const chip = document.createElement('div');
    chip.className = 'status-chip';
    chip.textContent = '25 reglas activas';
    container.prepend(chip);
  }

  const items = document.querySelectorAll('ol li');
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-18px)';
    item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }, 90 * index);
  });
});
