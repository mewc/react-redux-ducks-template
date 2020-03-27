export const timeoutPromise = (ms, callback) => {
    return new Promise(function (resolve, reject) {
        callback(resolve, reject);
        setTimeout(function () {
            reject('Promise timed out after ' + ms + ' ms');
        }, ms);
    });
}