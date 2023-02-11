CaptchaProcessors.register({

    captchaType: "lemin",

    canBeProcessed: function(widget, config) {
        if (!config.enabledForLemin) return false;

        return true;
    },

    attachButton: function(widget, config, button) {
        let helper = this.getHelper(widget);
        if (helper.find('.captcha-solver').length !== 0) {
            return;
        }

        button.css({
            width: helper.outerWidth() + "px"
        });

        button[0].dataset.disposable = true;

        helper.append(button);

        if (config.autoSolveLemin) button.click();
    },

    getParams: function(widget, config) {
        let params = {
            url: location.href,
            captchaId: widget.captchaId,
            divId: widget.divId
        };

        if (widget.apiServer) {
            params.apiServer = widget.apiServer;
        }

        return params;
    },

    onSolved: function(widget, answer) {
        let helper = this.getHelper(widget);
        let answer_res = {};
        try {
            answer_res = JSON.parse(answer);
        } catch (e) {
            console.log(e);
        }

        helper.find("input[name=lemin_challenge_id]").val(answer_res.challenge_id);
        helper.find("input[name=lemin_answer]").val(answer_res.answer);
    },

    getForm: function(widget) {
        return this.getHelper(widget).closest("form");
    },

    getCallback: function(widget) {
        return null;
    },

    getHelper: function(widget) {
        let container = $("#" + widget.divId);
        return container.parent();
    },

});
