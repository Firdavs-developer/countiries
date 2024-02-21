let elThemeBtn = document.querySelector(".theme-btn");
let elModeText = document.querySelector(".mode-text");


elThemeBtn.addEventListener("click", () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark');
        elModeText.textContent = "Dark"
    } else {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark');
        elModeText.textContent = "Light"

      }      
      // Whenever the user explicitly chooses light mode
      
      // Whenever the user explicitly chooses dark mode
      
      // Whenever the user explicitly chooses to respect the OS preference
      
})
localStorage.removeItem('theme')