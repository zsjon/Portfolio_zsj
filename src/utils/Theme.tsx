export function initialTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

export function toggleTheme() {
    const root = document.documentElement;

    if (root.classList.contains("dark") || root.classList.contains("dark-from-html")) {
        root.classList.remove("dark");
        root.classList.remove("dark-from-html");
        localStorage.setItem("theme", "light");
    } else {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}