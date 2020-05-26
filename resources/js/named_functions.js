(function(w, $) {
    let timeoutNames = {};
    let intervalNames = {};
    let ajaxNames = {};

    w.clearNamedTimeout = function(name) {
        if (timeoutNames[name] === undefined) {
            timeoutNames[name] = null;
        }

        if (timeoutNames[name] !== null) {
            clearTimeout(timeoutNames[name]);
            timeoutNames[name] = null;
        }
    };

    w.setNamedTimeout = function(name, callback, delay) {
        clearNamedTimeout(name);
        timeoutNames[name] = setTimeout(callback, delay);
    };

    w.clearNamedInterval = function(name) {
        if (intervalNames[name] === undefined) {
            intervalNames[name] = null;
        }

        if (intervalNames[name] !== null) {
            clearInterval(intervalNames[name]);
            intervalNames[name] = null;
        }
    };

    w.setNamedInterval = function(name, callback, delay) {
        clearNamedInterval(name);
        intervalNames[name] = setInterval(callback, delay);
    };

    if (typeof $ == 'function') {
        $.namedAjax = function(obj) {
            if (typeof obj !== 'object') {
                throw new Error ('obj is not an object');
            }
            if (typeof obj['name'] !== 'string') {
                throw new Error ('obj.name is not a string');
            }
            let name = obj['name'];
            delete obj['name'];

            if (ajaxNames[name] === undefined) {
                ajaxNames[name] = null;
            }
            if (ajaxNames[name] !== null) {
                ajaxNames[name].abort();
                ajaxNames[name] = null;
            }

            ajaxNames[name] = $.ajax(obj).done(function() {
                ajaxNames[name] = null;
            });
        };

        w.clearNamedAjax = function (name) {
            if (ajaxNames[name] === undefined) {
                ajaxNames[name] = null;
            }

            if (ajaxNames[name] !== null) {
                ajaxNames[name].abort();
                ajaxNames[name] = null;
            }
        };
    }

})(window, jQuery);