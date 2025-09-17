(function () {
  try {
    var theme = localStorage.getItem('portfolio-theme');
    // Default to dark if nothing stored
    if (!theme) {
      theme = 'dark';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch {
    document.documentElement.classList.add('dark');
  }
})();
