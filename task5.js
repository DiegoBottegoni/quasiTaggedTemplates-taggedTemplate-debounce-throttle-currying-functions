function throttle(func, interval) {
    let lastExecutedTime = null;
    let timeout;

    return function(...args) {
        const now = Date.now();

        const executeFunction = () => {
            lastExecutedTime = now;
            timeout = null;
            func.apply(this, args);
        };

        if (lastExecutedTime && (now - lastExecutedTime) < interval) {
            clearTimeout(timeout);
            timeout = setTimeout(executeFunction, interval - (now - lastExecutedTime));
        } else {
            executeFunction();
        }
    };
}

function onScroll(event) {
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
