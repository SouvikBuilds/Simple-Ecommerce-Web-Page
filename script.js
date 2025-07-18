document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeButton = document.getElementById("togglerButton")
    const toggleImagetag = document.getElementById("toggle-mode-btn")
    const body = document.getElementById("wholeBody")


    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
        body.classList.add("dark-mode")
        toggleImagetag.src = "sun.png"

    } else {
        body.classList.remove("dark-mode")
        toggleImagetag.src = "moon.png"

    }

    function toggleTheme() {
        body.classList.toggle("dark-mode")

        const isDark = body.classList.contains("dark-mode")
        localStorage.setItem("theme", isDark ? "dark" : "light")

        toggleImagetag.src = isDark
            ? "sun.png"
            : "moon.png"




    }

    toggleThemeButton.addEventListener("click", toggleTheme)
})
