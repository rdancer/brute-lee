captchaObj.getValidate = function () {
    return {
        geetest_challenge: document.querySelector("input[name=geetest_challenge]").value,
        geetest_validate: document.querySelector("input[name=geetest_validate]").value,
        geetest_seccode: document.querySelector("input[name=geetest_seccode]").value,
    };
}

if (window.captchaObjEvents.onSuccessCallback !== undefined) {
    window.captchaObjEvents.onSuccessCallback(captchaObj);
}