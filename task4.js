function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function debouncedSearch(query) {
    console.log("Searching for:", query);
}

const debouncedSearchHandler = debounce(debouncedSearch, 600);

document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById("search-input");
    if (inputElement) {
        inputElement.addEventListener("input", event => {
            debouncedSearchHandler(event.target.value);
        });
    }
});
