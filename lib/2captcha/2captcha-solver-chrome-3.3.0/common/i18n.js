/*
 * Translate text elements
 */
$("[data-lang]").each(function() {
    let el = $(this);

    let key = el.attr("data-lang");

    let strings = [];

    for (let i = 0; i < this.attributes.length; i++){
        let attr = this.attributes[i];

        if (attr.nodeName.match(/^data-lang-string/)) {
            strings.push(attr.nodeValue);
        }
    }

    let message = chrome.i18n.getMessage(key, strings);

    if (message.length === 0) {
        message = key;
    }

    el.html(message);
});

/*
 * Translate links
 */
$("[data-lang-link]").each(function() {
    let el = $(this);

    let path = el.attr("data-lang-link");
    let lang = chrome.i18n.getUILanguage();

    if (!["en", "en-US", "en-GB"].includes(lang)) {
        path = "/" + lang + (path === "/" ? "" : path);
    }

    $(this).attr("href", "https://2captcha.com" + path);
});
