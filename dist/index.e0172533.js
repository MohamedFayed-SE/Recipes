// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8qUak":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6c456fd1e0172533";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"biuh3":[function(require,module,exports) {
var global = arguments[3];
/*
 Copyright (C) Federico Zivolo 2020
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function() {
    'use strict';
    function e1(e) {
        return e && '[object Function]' === ({
        }).toString.call(e);
    }
    function t1(e, t) {
        if (1 !== e.nodeType) return [];
        var o = e.ownerDocument.defaultView, n = o.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function o1(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }
    function n1(e) {
        if (!e) return document.body;
        switch(e.nodeName){
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t1(e), r = i.overflow, p = i.overflowX, s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n1(o1(e));
    }
    function i1(e) {
        return e && e.referenceNode ? e.referenceNode : e;
    }
    function r1(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe;
    }
    function p1(e) {
        if (!e) return document.documentElement;
        for(var o = r1(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling;)n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== [
            'TH',
            'TD',
            'TABLE'
        ].indexOf(n.nodeName) && 'static' === t1(n, 'position') ? p1(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function s1(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p1(e.firstElementChild) === e);
    }
    function d1(e) {
        return null === e.parentNode ? e : d1(e.parentNode);
    }
    function a1(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e : t, i = o ? t : e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s1(l) ? l : p1(l);
        var f = d1(e);
        return f.host ? a1(f.host, t) : a1(e, d1(t).host);
    }
    function l1(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top', o = 'top' === t ? 'scrollTop' : 'scrollLeft', n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i;
            return r[o];
        }
        return e[o];
    }
    function f1(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l1(t, 'top'), i = l1(t, 'left'), r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
    }
    function m1(e, t) {
        var o = 'x' === t ? 'Left' : 'Top', n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width']) + parseFloat(e['border' + n + 'Width']);
    }
    function h1(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r1(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0);
    }
    function c1(e) {
        var t = e.body, o = e.documentElement, n = r1(10) && getComputedStyle(o);
        return {
            height: h1('Height', t, o, n),
            width: h1('Width', t, o, n)
        };
    }
    function g1(e) {
        return le({
        }, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function u1(e) {
        var o = {
        };
        try {
            if (r1(10)) {
                o = e.getBoundingClientRect();
                var n = l1(e, 'top'), i = l1(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i;
            } else o = e.getBoundingClientRect();
        } catch (t) {
        }
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }, s = 'HTML' === e.nodeName ? c1(e.ownerDocument) : {
        }, d = s.width || e.clientWidth || p.width, a = s.height || e.clientHeight || p.height, f = e.offsetWidth - d, h = e.offsetHeight - a;
        if (f || h) {
            var u = t1(e);
            f -= m1(u, 'x'), h -= m1(u, 'y'), p.width -= f, p.height -= h;
        }
        return g1(p);
    }
    function b1(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r1(10), s = 'HTML' === o.nodeName, d = u1(e), a = u1(o), l = n1(e), m = t1(o), h = parseFloat(m.borderTopWidth), c = parseFloat(m.borderLeftWidth);
        i && s && (a.top = ee(a.top, 0), a.left = ee(a.left, 0));
        var b = g1({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var w = parseFloat(m.marginTop), y = parseFloat(m.marginLeft);
            b.top -= h - w, b.bottom -= h - w, b.left -= c - y, b.right -= c - y, b.marginTop = w, b.marginLeft = y;
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f1(b, o)), b;
    }
    function w1(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b1(e, o), i = ee(o.clientWidth, window.innerWidth || 0), r = ee(o.clientHeight, window.innerHeight || 0), p = t ? 0 : l1(o), s = t ? 0 : l1(o, 'left'), d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g1(d);
    }
    function y1(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) return !1;
        if ('fixed' === t1(e, 'position')) return !0;
        var i = o1(e);
        return !!i && y1(i);
    }
    function E1(e) {
        if (!e || !e.parentElement || r1()) return document.documentElement;
        for(var o = e.parentElement; o && 'none' === t1(o, 'transform');)o = o.parentElement;
        return o || document.documentElement;
    }
    function v1(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], d = {
            top: 0,
            left: 0
        }, l = s ? E1(e) : a1(e, i1(t));
        if ('viewport' === p) d = w1(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n1(o1(t)), 'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b1(f, l, s);
            if ('HTML' === f.nodeName && !y1(l)) {
                var h = c1(e.ownerDocument), g = h.height, u = h.width;
                d.top += m.top - m.marginTop, d.bottom = g + m.top, d.left += m.left - m.marginLeft, d.right = u + m.left;
            } else d = m;
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0, d.top += v ? r : r.top || 0, d.right -= v ? r : r.right || 0, d.bottom -= v ? r : r.bottom || 0, d;
    }
    function x(e) {
        var t = e.width, o = e.height;
        return t * o;
    }
    function O(e2, t2, o, n2, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e2.indexOf('auto')) return e2;
        var p = v1(o, n2, r, i), s = {
            top: {
                width: p.width,
                height: t2.top - p.top
            },
            right: {
                width: p.right - t2.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t2.bottom
            },
            left: {
                width: t2.left - p.left,
                height: p.height
            }
        }, d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), a = d.filter(function(e) {
            var t = e.width, n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight;
        }), l = 0 < a.length ? a[0].key : d[0].key, f = e2.split('-')[1];
        return l + (f ? '-' + f : '');
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, r = n ? E1(t) : a1(t, i1(o));
        return b1(o, r, n);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView, o = t.getComputedStyle(e), n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0), i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0), r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r;
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e), i = {
            width: n.width,
            height: n.height
        }, r = -1 !== [
            'right',
            'left'
        ].indexOf(o), p = r ? 'top' : 'left', s = r ? 'left' : 'top', d = r ? 'height' : 'width', a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e3, t, o) {
        if (Array.prototype.findIndex) return e3.findIndex(function(e) {
            return e[t] === o;
        });
        var n = D(e3, function(e) {
            return e[t] === o;
        });
        return e3.indexOf(n);
    }
    function P(t3, o, n3) {
        var i = void 0 === n3 ? t3 : t3.slice(0, N(t3, 'name', n3));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e1(n) && (o.offsets.popper = g1(o.offsets.popper), o.offsets.reference = g1(o.offsets.reference), o = n(o, t));
        }), o;
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {
                },
                arrowStyles: {
                },
                attributes: {
                },
                flipped: !1,
                offsets: {
                }
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
    }
    function W(e4, t) {
        return e4.some(function(e) {
            var o = e.name, n = e.enabled;
            return n && o === t;
        });
    }
    function B(e) {
        for(var t = [
            !1,
            'ms',
            'Webkit',
            'Moz',
            'O'
        ], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++){
            var i = t[n], r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r;
        }
        return null;
    }
    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n1(p.parentNode), t, o, i), i.push(p);
    }
    function F(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n1(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function R(e5, t) {
        return A(e5).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== [
                'width',
                'height',
                'top',
                'right',
                'bottom',
                'left'
            ].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
        });
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }
    function q(e6, t) {
        var o = e6.offsets, n = o.popper, i = o.reference, r = $, p = function(e) {
            return e;
        }, s = r(i.width), d = r(n.width), a = -1 !== [
            'left',
            'right'
        ].indexOf(e6.placement), l = -1 !== e6.placement.indexOf('-'), f = t ? a || l || s % 2 == d % 2 ? r : Z : p, m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        };
    }
    function K(e7, t, o2) {
        var n = D(e7, function(e) {
            var o = e.name;
            return o === t;
        }), i = !!n && e7.some(function(e) {
            return e.name === o2 && e.enabled && e.order < n.order;
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o2 + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
        }
        return i;
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = he.indexOf(e), n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n;
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = +i[1], p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch(p){
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = n;
            }
            var d = g1(s);
            return d[t] / 100 * r;
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
        }
        return r;
    }
    function X(e8, t4, o3, n4) {
        var i2 = [
            0,
            0
        ], r = -1 !== [
            'right',
            'left'
        ].indexOf(n4), p2 = e8.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), s = p2.indexOf(D(p2, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        p2[s] && -1 === p2[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ? [
            p2
        ] : [
            p2.slice(0, s).concat([
                p2[s].split(d)[0]
            ]),
            [
                p2[s].split(d)[1]
            ].concat(p2.slice(s + 1))
        ];
        return a = a.map(function(e9, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width', p = !1;
            return e9.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== [
                    '+',
                    '-'
                ].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return _(e, i, t4, o3);
            });
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i2[t] += o * ('-' === e[n - 1] ? -1 : 1));
            });
        }), i2;
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [
            +n,
            0
        ] : X(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
    }
    var Q = Math.min, Z = Math.floor, $ = Math.round, ee = Math.max, te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator, oe = function() {
        for(var e = [
            'Edge',
            'Trident',
            'Firefox'
        ], t = 0; t < e.length; t += 1)if (te && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
        return 0;
    }(), ne = te && window.Promise, ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e();
            }));
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, oe));
        };
    }, re = te && !!(window.MSInputMethodContext && document.documentMode), pe = te && /MSIE 10/.test(navigator.userAgent), se = function(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }, de = function() {
        function e10(e, t) {
            for(var o, n = 0; n < t.length; n++)o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
        return function(t, o, n) {
            return o && e10(t.prototype, o), n && e10(t, n), t;
        };
    }(), ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o, e;
    }, le = Object.assign || function(e) {
        for(var t, o = 1; o < arguments.length; o++)for(var n in t = arguments[o], t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
    }, fe = te && /Firefox/i.test(navigator.userAgent), me = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start'
    ], he = me.slice(3), ce = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }, ge = function() {
        function t5(o, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {
            };
            se(this, t5), this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update);
            }, this.update = ie(this.update.bind(this)), this.options = le({
            }, t5.Defaults, r), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {
            }, Object.keys(le({
            }, t5.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({
                }, t5.Defaults.modifiers[e] || {
                }, r.modifiers ? r.modifiers[e] : {
                });
            }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e]);
            }).sort(function(e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function(t) {
                t.enabled && e1(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
            }), this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }
        return de(t5, [
            {
                key: 'update',
                value: function() {
                    return k.call(this);
                }
            },
            {
                key: 'destroy',
                value: function() {
                    return H.call(this);
                }
            },
            {
                key: 'enableEventListeners',
                value: function() {
                    return I.call(this);
                }
            },
            {
                key: 'disableEventListeners',
                value: function() {
                    return U.call(this);
                }
            }
        ]), t5;
    }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ge.placements = me, ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {
        },
        onUpdate: function() {
        },
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !== [
                            'bottom',
                            'top'
                        ].indexOf(o), d = s ? 'left' : 'top', a = s ? 'width' : 'height', l = {
                            start: ae({
                            }, d, r[d]),
                            end: ae({
                            }, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({
                        }, p, l[n]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e11, t) {
                    var o4 = t.boundariesElement || p1(e11.instance.popper);
                    e11.instance.reference === o4 && (o4 = p1(o4));
                    var n5 = B('transform'), i = e11.instance.popper.style, r = i.top, s = i.left, d = i[n5];
                    i.top = '', i.left = '', i[n5] = '';
                    var a = v1(e11.instance.popper, e11.instance.reference, t.padding, o4, e11.positionFixed);
                    i.top = r, i.left = s, i[n5] = d, t.boundaries = a;
                    var l = t.priority, f = e11.offsets.popper, m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])), ae({
                            }, e, o);
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top', n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({
                            }, o, n);
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === [
                            'left',
                            'top'
                        ].indexOf(e) ? 'secondary' : 'primary';
                        f = le({
                        }, f, m[t](e));
                    }), e11.offsets.popper = f, e11;
                },
                priority: [
                    'left',
                    'right',
                    'top',
                    'bottom'
                ],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !== [
                        'top',
                        'bottom'
                    ].indexOf(i), s = p ? 'right' : 'bottom', d = p ? 'left' : 'top', a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !== [
                        'left',
                        'right'
                    ].indexOf(r), l = a ? 'height' : 'width', f = a ? 'Top' : 'Left', m = f.toLowerCase(), h = a ? 'left' : 'top', c = a ? 'bottom' : 'right', u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g1(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2, w = t1(e.instance.popper), y = parseFloat(w['margin' + f]), E = parseFloat(w['border' + f + 'Width']), v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {
                    }, ae(n, m, $(v)), ae(n, h, ''), n), e;
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v1(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p = [];
                    switch(t.behavior){
                        case ce.FLIP:
                            p = [
                                n,
                                i
                            ];
                            break;
                        case ce.CLOCKWISE:
                            p = G(n);
                            break;
                        case ce.COUNTERCLOCKWISE:
                            p = G(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, w = -1 !== [
                            'top',
                            'bottom'
                        ].indexOf(n), y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u), E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g), v = y || E;
                        (m || b || v) && (e.flipped = !0, (m || b) && (n = p[d + 1]), v && (r = z(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({
                        }, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
                    }), e;
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !== [
                        'left',
                        'right'
                    ].indexOf(o), s = -1 === [
                        'top',
                        'left'
                    ].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g1(i), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e12) {
                    if (!K(e12.instance.modifiers, 'hide', 'preventOverflow')) return e12;
                    var t = e12.offsets.reference, o = D(e12.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name;
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e12.hide) return e12;
                        e12.hide = !0, e12.attributes['x-out-of-boundaries'] = '';
                    } else {
                        if (!1 === e12.hide) return e12;
                        e12.hide = !1, e12.attributes['x-out-of-boundaries'] = !1;
                    }
                    return e12;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e13, t) {
                    var o = t.x, n = t.y, i = e13.offsets.popper, r = D(e13.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name;
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p1(e13.instance.popper), f = u1(l), m = {
                        position: i.position
                    }, h = q(e13, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top, s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1, y = 'right' == g ? -1 : 1;
                        m[c] = d * w, m[g] = s * y, m.willChange = c + ', ' + g;
                    }
                    var E = {
                        "x-placement": e13.placement
                    };
                    return e13.attributes = le({
                    }, E, e13.attributes), e13.styles = le({
                    }, m, e13.styles), e13.arrowStyles = le({
                    }, e13.offsets.arrow, e13.arrowStyles), e13;
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e;
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }), o;
                },
                gpuAcceleration: void 0
            }
        }
    }, ge;
});

},{}]},["8qUak","biuh3"], "biuh3", "parcelRequiree88c")

//# sourceMappingURL=index.e0172533.js.map
