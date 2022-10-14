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
})({"fA0o9":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    bundle.hotData = {};
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _storeViewJs = require("./views/storeView.js");
var _storeViewJsDefault = parcelHelpers.interopDefault(_storeViewJs);
var _headerViewJs = require("./views/headerView.js");
var _headerViewJsDefault = parcelHelpers.interopDefault(_headerViewJs);
var _navigationViewJs = require("./views/navigationView.js");
var _navigationViewJsDefault = parcelHelpers.interopDefault(_navigationViewJs);
var _cartViewJs = require("./views/cartView.js");
var _cartViewJsDefault = parcelHelpers.interopDefault(_cartViewJs);
var _modalViewJs = require("./views/modalView.js");
var _modalViewJsDefault = parcelHelpers.interopDefault(_modalViewJs);
const controlAddItem = function(btn, stid) {
    console.log("calling controlAddItem");
    console.log(btn, stid);
    const shapeType = stid;
    console.log(_modelJs.state.store);
    const storeIndex = _modelJs.state.store.findIndex((item)=>item.name === shapeType);
    console.log("i + type " + shapeType, storeIndex); // these work
    const cartObject = _modelJs.createCartObject(shapeType, storeIndex);
    if (_modelJs.state.store[storeIndex].quantity > 0) {
        if (_modelJs.state.cart.some((item)=>item.name === shapeType)) {
            const itemIndex = _modelJs.state.cart.findIndex((item)=>item.name === shapeType);
            if (itemIndex > -1) _modelJs.state.cart[itemIndex].quantity++;
        } else _modelJs.state.cart.push(cartObject);
        for (const item of _modelJs.state.store)if (item.name === shapeType && item.quantity > 0) {
            item.quantity--;
            break;
        }
    }
    (0, _storeViewJsDefault.default).update(_modelJs.state.store);
    (0, _headerViewJsDefault.default).render(_modelJs.state.cart);
    populateCart(_modelJs.state.cart);
    console.log(_modelJs.state.store[storeIndex].quantity);
};
const controlRemoveItem = function(btn, stid) {
    console.log("calling controlRemoveItem");
    console.log(btn, stid);
    const shapeType = stid;
    for (const item of _modelJs.state.store)if (item.name === shapeType && item.quantity < 1000) {
        item.quantity++;
        break;
    }
    console.log(_modelJs.state.store);
    (0, _storeViewJsDefault.default).update(_modelJs.state.store);
    if (_modelJs.state.cart.some((item)=>item.name === shapeType)) {
        const itemIndex = _modelJs.state.cart.findIndex((item)=>item.name === shapeType);
        console.log(itemIndex);
        if (itemIndex > -1 && _modelJs.state.cart[itemIndex].quantity > 0) {
            _modelJs.state.cart[itemIndex].quantity--;
            if (_modelJs.state.cart[itemIndex].quantity === 0) _modelJs.state.cart = _modelJs.state.cart.filter((item)=>item.name !== shapeType);
        }
    }
    (0, _headerViewJsDefault.default).render(_modelJs.state.cart);
    populateCart(_modelJs.state.cart);
    // NTS, remove object if it is the last instance of the item which is removed
    console.log(_modelJs.state.cart);
};
const controlDeleteItem = function(stid) {
    const shapeType = stid;
    const itemIndex = _modelJs.state.cart.findIndex((item)=>item.name === shapeType);
    const itemStoreIndex = _modelJs.state.store.findIndex((item)=>item.name === shapeType);
    _modelJs.state.store[itemStoreIndex].quantity = _modelJs.state.store[itemStoreIndex].quantity + _modelJs.state.cart[itemIndex].quantity;
    console.log("delete " + shapeType, itemIndex);
    _modelJs.state.cart = _modelJs.state.cart.filter(function(item) {
        return item.name !== shapeType;
    });
    (0, _cartViewJsDefault.default).render(_modelJs.state.cart);
    (0, _storeViewJsDefault.default).render(_modelJs.state.store);
    (0, _headerViewJsDefault.default).render(_modelJs.state.cart);
};
const populateStore = function(data) {
    console.log(data);
    (0, _storeViewJsDefault.default).render(data);
};
const populateCart = function(data) {
    console.log("popCartfunc");
    (0, _cartViewJsDefault.default).render(data);
};
const controlVisibility = function(element) {
    _modelJs.toggleVisibility(element);
};
const controlModal = function(element) {
    (0, _modalViewJsDefault.default).render();
    controlVisibility(element);
};
const controlMainNavigation = function(element) {
    controlVisibility(element);
};
const init = function() {
    (0, _headerViewJsDefault.default).addHandlerToggleCart(controlVisibility);
    (0, _navigationViewJsDefault.default).addHandlerToggleMenu(controlMainNavigation);
    (0, _storeViewJsDefault.default).addHandlerAddItem(controlAddItem);
    (0, _storeViewJsDefault.default).addHandlerRemoveItem(controlRemoveItem);
    (0, _cartViewJsDefault.default).addHandlerAddItem(controlAddItem);
    (0, _cartViewJsDefault.default).addHandlerRemoveItem(controlRemoveItem);
    (0, _cartViewJsDefault.default).addHandlerDeleteItem(controlDeleteItem);
    (0, _cartViewJsDefault.default).addHandlerToCheckout(controlModal);
    (0, _cartViewJsDefault.default).addHandlerCloseCart(controlVisibility);
    (0, _modalViewJsDefault.default).addHandlerExitModal(controlVisibility);
    populateStore(_modelJs.state.store);
    populateCart(_modelJs.state.cart);
};
init();

},{"./model.js":"Y4A21","./views/storeView.js":"gJbkE","./views/cartView.js":"IaDwG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/headerView.js":"1wq1u","./views/modalView.js":"8QpnA","./views/navigationView.js":"it1BP"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "createCartObject", ()=>createCartObject);
parcelHelpers.export(exports, "toggleVisibility", ()=>toggleVisibility);
const state = {
    login: true,
    shape: {
        name: "",
        price: 1
    },
    cart: [],
    store: [
        {
            name: "White kintsugi tea bowl",
            quantityOriginal: 120,
            quantity: 120,
            description: "Unique gold restoration, urushi, ceramic.",
            price: 140,
            imageUrl: "3.png"
        },
        {
            name: "Kintsugi tea bowl",
            quantityOriginal: 100,
            quantity: 100,
            description: "Blue wabi sabi, 22K gold.",
            price: 139,
            imageUrl: "4.png"
        },
        {
            name: "Deep dark green restored bowl",
            quantityOriginal: 40,
            quantity: 40,
            description: "Kintsugi, restored with real 22K gold, perfect for a wedding gift",
            price: 409,
            imageUrl: "5.png"
        },
        {
            name: "Beige wabi sabi bowl",
            quantityOriginal: 32,
            quantity: 32,
            description: "22K gold restoration with the Japanese Kintsukuroi technique.",
            price: 509,
            imageUrl: "6.png"
        },
        {
            name: "Kintsugi wabi sabi bowl",
            quantityOriginal: 80,
            quantity: 80,
            description: "Relief decoration, restoration in gold.",
            price: 399,
            imageUrl: "7.png"
        },
        {
            name: "Kintsugi low serving bowl",
            quantityOriginal: 42,
            quantity: 42,
            description: "Contemporary light gray bowl, gold, ceramic, urushi.",
            price: 310,
            imageUrl: "8.png"
        },
        {
            name: "Kintsugi bowl",
            quantityOriginal: 72,
            quantity: 72,
            description: "Restoration in real gold, small wabi sabi ceramic bowl.",
            price: 389,
            imageUrl: "9.png"
        },
        {
            name: "Kintsugi couples gift",
            quantityOriginal: 12,
            quantity: 12,
            description: "Set of two small bowls restored with 22K gold.",
            price: 340,
            imageUrl: "10.png"
        },
        {
            name: "Kintsugi vase",
            quantityOriginal: 57,
            quantity: 57,
            description: "Unique gift representative of resilience, perfect for those who already have everything.",
            price: 509,
            imageUrl: "11.png"
        },
        {
            name: "Kintsugi saucer",
            quantityOriginal: 68,
            quantity: 68,
            description: "Contemporary ceramic restored with real gold. Sentimental gift to celebrate a rebirth or a change.",
            price: 249,
            imageUrl: "12.png"
        }, 
    ]
};
function createCartObject(shapetype, storeindex) {
    return {
        name: shapetype,
        quantity: 1,
        price: state.store[storeindex].price
    };
}
const toggleVisibility = function(currentActor) {
    const menuActor = document.querySelector(".main_navigation");
    const cartActor = document.querySelector(".shopping_cart");
    const cartShader = document.querySelector(".content_shader");
    if (currentActor === menuActor) {
        cartActor.classList.remove("active");
        cartShader.classList.remove("active");
        currentActor.classList.toggle("active");
        return;
    }
    if (currentActor === cartActor) {
        menuActor.classList.remove("active");
        currentActor.classList.toggle("active");
        cartShader.classList.toggle("active");
        return;
    }
    currentActor.classList.toggle("active");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gJbkE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseViewJs = require("./baseView.js");
var _baseViewJsDefault = parcelHelpers.interopDefault(_baseViewJs);
class storeView extends (0, _baseViewJsDefault.default) {
    _parentElement = document.querySelector(".store_wrapper");
    _message = "";
    addHandlerAddItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const shapeType = e.target.closest(".store_item");
            const stid = shapeType?.dataset.type;
            console.log(stid);
            const btn = e.target.closest(".add_item");
            if (!btn) return;
            console.log(e.target);
            handler(btn, stid);
        });
    }
    addHandlerRemoveItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const shapeType = e.target.closest(".store_item");
            const stid = shapeType?.dataset.type;
            const btn = e.target.closest(".remove_item");
            if (!btn) return;
            console.log(e.target);
            handler(btn, stid);
        });
    }
    _generateMarkup() {
        return this._data.map((item)=>`
        <div class="store_item" data-type="${item.name}">
            
            <h2 class="title">${item.name}s</h2>
            <div class="item_info_block">
              <div class="desc_block">  
                <div class="price"><span class="amount">価格 ${item.price}€</span></div>  
                <div class="item_image"><img src="${item.imageUrl}"/></div>
                </div>
                <div class="details_block">
                
                <div class="description"><p>${item.description}</p></div>
                <div class="quantity_available">In stock: ${item.quantity}</div>
              </div>
            </div>
            <div class="controls">
              <button class="add_item"><span class="text_wrapper">Add to cart</span></button>
              <div class="in_cart">In cart: ${item.quantityOriginal - item.quantity}</div>
            </div>
        </div>
        `).join("");
    }
}
exports.default = new storeView();

},{"./baseView.js":"1AGkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1AGkP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class baseView {
    _data;
    render(data, render = true) {
        console.log(data);
        // if (!data || (Array.isArray(data) && data.length === 0))
        //   return this.renderError();
        // Alkuun hyvä idea mutta aiheuttaa lähinnä ongelmia, mm. laskiessa ostoskorin totaalia etc., siksi nyt toistaiseksi pois. NTS: palaa tähän myöhemmin.
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // console.log(curEl, newEl.isEqualNode(curEl));
            // Updates changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") // console.log('💥', newEl.firstChild.nodeValue.trim());
            curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = baseView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"IaDwG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseViewJs = require("./baseView.js");
var _baseViewJsDefault = parcelHelpers.interopDefault(_baseViewJs);
class cartView extends (0, _baseViewJsDefault.default) {
    _parentElement = document.querySelector(".shopping_cart");
    _message = "";
    addHandlerAddItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const shapeType = e.target.closest(".cart_item");
            const stid = shapeType?.dataset.type;
            console.log(stid);
            const btn = e.target.closest(".add_item");
            if (!btn) return;
            console.log(btn, stid);
            console.log(e.target);
            handler(btn, stid);
        });
    }
    addHandlerRemoveItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const shapeType = e.target.closest(".cart_item");
            const stid = shapeType?.dataset.type;
            const btn = e.target.closest(".remove_item");
            if (!btn) return;
            console.log(btn, stid);
            handler(btn, stid);
        });
    }
    addHandlerDeleteItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const shapeType = e.target.closest(".cart_item");
            const stid = shapeType?.dataset.type;
            const btn = e.target.closest(".delete_item");
            if (!btn) return;
            console.log(btn, stid);
            handler(stid);
        });
    }
    addHandlerToCheckout(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn_checkout");
            if (!btn) return;
            const targetElement = document.querySelector(".modal");
            handler(targetElement);
        });
    }
    addHandlerCloseCart(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".close_cart");
            if (!btn) return;
            const currentActor = document.querySelector(".shopping_cart");
            handler(currentActor);
        });
    }
    _generateMarkup() {
        console.log("generating cart");
        console.log(this._data);
        const totalPrice = this._data.reduce((acc, item)=>{
            console.log(item.price);
            return acc + item.price * item.quantity;
        }, 0);
        console.log(totalPrice);
        if (this._data.length === 0) return `<div class="message">You have no items in your cart.</div>`;
        else return this._data.map((item)=>`
      <div class="cart_item" data-type="${item.name}">
          <div class="item_name"><p>${item.name}</p></div>
          <div class="item_quantity">
            <button class="cart_button add_item">+</button>
            <p>${item.quantity}</p>
            <button class="cart_button remove_item">-</button>
            <button class="delete_item"><img src="delete_x.png"/></button>
          </div>
      </div>
      `).join("").concat(`
        <div class="cart_footer">
          <div class="total_price">
            Total: <span class="price">${totalPrice}</span>€
          </div>
          <div class="checkout">
            <button class="btn_checkout"><span class="text_wrapper">Checkout</span></button>
          </div>
          <div class="close">
            <button class="close_cart"><img src="close_dark.png"/></button>
          </div>
        </div>`);
    }
}
exports.default = new cartView();

},{"./baseView.js":"1AGkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wq1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseViewJs = require("./baseView.js");
var _baseViewJsDefault = parcelHelpers.interopDefault(_baseViewJs);
class headerView extends (0, _baseViewJsDefault.default) {
    _parentElement = document.querySelector(".shop_btn");
    addHandlerToggleCart(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".shop_btn");
            if (!btn) return;
            console.log("this is cart toggle handler called by controller");
            const currentActor = document.querySelector(".shopping_cart");
            handler(currentActor);
        });
    }
    _generateMarkup() {
        console.log(this);
        const totalAmount = this._data.reduce((acc, item)=>{
            return acc + item.quantity;
        }, 0);
        console.log(totalAmount);
        return `
   
      <img src="cart.png" /><span class="item_total">${totalAmount}</span>

    `;
    }
}
exports.default = new headerView();

},{"./baseView.js":"1AGkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QpnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseView = require("./baseView");
var _baseViewDefault = parcelHelpers.interopDefault(_baseView);
class modalView extends (0, _baseViewDefault.default) {
    _parentElement = document.querySelector(".modal");
    addHandlerExitModal(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".close");
            if (!btn) return;
            const targetElement = document.querySelector(".modal");
            handler(targetElement);
        });
    }
    _generateMarkup() {
        return `
        <div class="message">
            <p>Giev job pls :)</p>
            <button class="close"><img src="close.png"/></button>
        </div>
    `;
    }
}
exports.default = new modalView();

},{"./baseView":"1AGkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"it1BP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseView = require("./baseView");
var _baseViewDefault = parcelHelpers.interopDefault(_baseView);
class navigationView extends (0, _baseViewDefault.default) {
    _parentElement = document.querySelector("header");
    addHandlerToggleMenu(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".menu_btn");
            const currentActor = document.querySelector(".main_navigation");
            if (!btn) return;
            handler(currentActor);
        });
    }
}
exports.default = new navigationView();

},{"./baseView":"1AGkP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequirea3b4")

//# sourceMappingURL=index.e37f48ea.js.map
