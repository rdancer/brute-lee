(() => {

    let yandexInstance;

    Object.defineProperty(window, "smartCaptcha", {
        get: function () {
            return yandexInstance;
        },
        set: function (f) {
            yandexInstance = f;
        },
    });
})()
