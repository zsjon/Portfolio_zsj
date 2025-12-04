const THEME_EVENT = "theme-change";
// initialTheme 함수의 경우 index.html에서 이미 처리하고 있으므로 주석 처리함.
// export function initialTheme() {
//     const savedTheme = localStorage.getItem("theme");
//
//     if (savedTheme === "dark") {
//         document.documentElement.classList.add("dark");
//     } else {
//         document.documentElement.classList.remove("dark");
//     }
//     window.dispatchEvent(new Event(THEME_EVENT));
// }

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
    window.dispatchEvent(new Event(THEME_EVENT));
}