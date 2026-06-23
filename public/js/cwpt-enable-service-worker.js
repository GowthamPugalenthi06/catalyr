if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/sw.js')
            .then((registration) => {
                console.log('CWPT SW registered', registration);
            })
            .catch((error) => {
                console.error('CWPT SW failed', error);
            });
    });
}