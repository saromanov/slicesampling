"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var mathjs = _interopRequire(require("mathjs"));

var SliceSampling = exports.SliceSampling = (function () {
    function SliceSampling() {
        _classCallCheck(this, SliceSampling);
    }

    _createClass(SliceSampling, {
        fit: {
            value: function fit(q, x, w) {
                var n = arguments[3] === undefined ? 1000 : arguments[3];

                for (var i = 0; i < n; ++i) {
                    var u = Math.random();
                    var udot = las_st + mathjs.log(Math.random());
                    var xmin = x - udot * w;
                    var xmax = xmin + wl;
                }
            }
        }
    });

    return SliceSampling;
})();