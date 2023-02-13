/*
 * Show options page after installation
 */
chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == 'install') {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            self.open(chrome.runtime.getURL('options/options.html'));
        }
    }
});


var API;

Config.getAll().then(config => {
    if (config.apiKey) {
        initApiClient(config.apiKey);
        if (config.valute === "RUB") {
            API.service = "rucaptcha.com";
        }
    }
});

function initApiClient(apiKey) {
    API = new TwoCaptcha({
        apiKey: apiKey,
        service: "2captcha.com",
        defaultTimeout: 300,
        pollingInterval: 5,
        softId: 2834,
    });
}


/*
 * Manage message passing
 */
chrome.runtime.onConnect.addListener(function(port) {

    //console.log(port.name + ' connected');
    //console.log(port);

    port.onMessage.addListener(function (msg) {
        //console.log(port.name + ' send message: ', msg);

        let messageHandler = port.name + '_' + msg.action;

        if (self[messageHandler] === undefined) return;

        self[messageHandler](msg)
            .then((response) => {
                //console.log('response to [' + messageHandler + ']: ', response);
                port.postMessage({action: msg.action, request: msg, response});
            })
            .catch(error => {
                //console.log('return error to [' + messageHandler + ']: ', error.message);
                port.postMessage({action: msg.action, request: msg, error: error.message});
            });
    });

});


/*
 * Message handlers
 */

async function popup_login(msg) {
    initApiClient(msg.apiKey);

    let info = await API.userInfo();

    if (info.key_type !== "customer") {
        throw new Error("You entered worker key! Switch your account into \"customer\" mode to get right API-KEY");
    }

    info.valute = info.valute.toUpperCase();

    if (info.valute === "RUB") {
        API.service = "rucaptcha.com";
    }

    Config.set({
        apiKey: msg.apiKey,
        email:  info.email,
        valute: info.valute,
    });

    return info;
}

async function popup_logout(msg) {
    Config.set({apiKey: null});

    return {};
}

async function popup_getAccountInfo(msg) {
    let config = await Config.getAll();

    if (!config.apiKey) throw new Error("No apiKey");

    let info = await API.userInfo();

    info.valute = info.valute.toUpperCase();

    return info;
}

async function content_solve(msg) {
    return await API[msg.captchaType](msg.params);
}
