'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Outputs = function () {
    function Outputs() {
        _classCallCheck(this, Outputs);
    }

    _createClass(Outputs, null, [{
        key: 'm',
        value: function m(output) {
            return this.message(output);
        }
    }, {
        key: 'message',
        value: function message(output) {
            if (process.argv) {
                process.stdout.write(output);
            } else {
                var find = ['\t', '\n'];

                for (var i = 0; i < find.length; i++) {
                    output = output.replace(find[i], '');
                }

                console.log(output);
            }

            return this;
        }
    }, {
        key: 'cl',
        value: function cl() {
            return this.clearLine();
        }
    }, {
        key: 'clearLine',
        value: function clearLine() {
            // Remove previous output line.
            process.stdout.clearLine();
            process.stdout.cursorTo(0);

            return this;
        }
    }, {
        key: 'nl',
        value: function nl() {
            return this.newLine();
        }
    }, {
        key: 'newLine',
        value: function newLine() {
            return this.message('\n');
        }
    }]);

    return Outputs;
}();

exports.default = Outputs;