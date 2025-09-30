feather.replace();

    const toggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
      htmlEl.classList.remove('dark');
      toggleBtn.textContent = '🌙';
    } else {
      htmlEl.classList.add('dark');
      toggleBtn.textContent = '☀️';
    }

    // Toggle theme
    toggleBtn.addEventListener('click', () => {
      htmlEl.classList.toggle('dark');
      if (htmlEl.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙';
      }
    });