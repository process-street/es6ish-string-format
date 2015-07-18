if (!String.prototype.format) {
    (function() {
        'use strict';

        var defineProperty = (function () {
            // IE 8 only supports `Object.defineProperty` on DOM elements
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                var result = $defineProperty(object, object, object) && $defineProperty;
            } catch(error) {}
            return result;
        })();

        var TEMPLATE_REGEXP = /\${\s*((?:[$_a-z][$_a-z0-9\.]*)?)\s*}/ig;
        function format(env) {
            env = env || {};
            return this.replace(TEMPLATE_REGEXP, function (_, path) {

                if (path === '') {
                    throw new SyntaxError('Unexpected token }');
                }

                return path.split('.').reduce(function (object, key) {
                    if (!(key in object)) {
                        throw new ReferenceError(key + ' is not defined');
                    }
                    return object[key];
                }, env);

            });
        }

        if (defineProperty) {
            defineProperty(String.prototype, 'format', {
                'value': format,
                'configurable': true,
                'writable': true
            });
        } else {
            String.prototype.format = format;
        }
    })();
}