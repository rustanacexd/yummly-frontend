export default function delayPromise(duration) {
    return function (...args) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(...args);
            }, duration);
        });
    };
}
