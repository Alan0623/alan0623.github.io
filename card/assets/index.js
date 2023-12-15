(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s => {
        for (const i of s)
            if (i.type === "childList")
                for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(s) {
        const i = {};
        return s.integrity && (i.integrity = s.integrity), s.referrerpolicy && (i.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? i.credentials = "include" : s.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = t(s);
        fetch(s.href, i)
    }
})();

function C() {}

function ol(n, e) {
    for (const t in e) n[t] = e[t];
    return n
}

function ll(n) {
    return n()
}

function vs() {
    return Object.create(null)
}

function Et(n) {
    n.forEach(ll)
}

function il(n) {
    return typeof n == "function"
}

function Ct(n, e) {
    return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function"
}
let pr;

function en(n, e) {
    return pr || (pr = document.createElement("a")), pr.href = e, n === pr.href
}

function zl(n) {
    return Object.keys(n).length === 0
}

function Jl(n, ...e) {
    if (n == null) return C;
    const t = n.subscribe(...e);
    return t.unsubscribe ? () => t.unsubscribe() : t
}

function Ne(n, e, t) {
    n.$$.on_destroy.push(Jl(e, t))
}

function Kl(n, e, t, r) {
    if (n) {
        const s = al(n, e, t, r);
        return n[0](s)
    }
}

function al(n, e, t, r) {
    return n[1] && r ? ol(t.ctx.slice(), n[1](r(e))) : t.ctx
}

function Xl(n, e, t, r) {
    if (n[2] && r) {
        const s = n[2](r(t));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const i = [],
                l = Math.max(e.dirty.length, s.length);
            for (let a = 0; a < l; a += 1) i[a] = e.dirty[a] | s[a];
            return i
        }
        return e.dirty | s
    }
    return e.dirty
}

function Ql(n, e, t, r, s, i) {
    if (s) {
        const l = al(e, t, r, i);
        n.p(l, s)
    }
}

function Yl(n) {
    if (n.ctx.length > 32) {
        const e = [],
            t = n.ctx.length / 32;
        for (let r = 0; r < t; r++) e[r] = -1;
        return e
    }
    return -1
}

function tn(n, e, t) {
    return n.set(t), e
}
const fl = typeof window < "u";
let Hs = fl ? () => window.performance.now() : () => Date.now(),
    ul = fl ? n => requestAnimationFrame(n) : C;
const vt = new Set;

function cl(n) {
    vt.forEach(e => {
        e.c(n) || (vt.delete(e), e.f())
    }), vt.size !== 0 && ul(cl)
}

function Zl(n) {
    let e;
    return vt.size === 0 && ul(cl), {
        promise: new Promise(t => {
            vt.add(e = {
                c: n,
                f: t
            })
        }),
        abort() {
            vt.delete(e)
        }
    }
}

function Y(n, e) {
    n.appendChild(e)
}

function m(n, e, t) {
    n.insertBefore(e, t || null)
}

function h(n) {
    n.parentNode.removeChild(n)
}

function ce(n, e) {
    for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e)
}

function O(n) {
    return document.createElement(n)
}

function hr(n) {
    return document.createElementNS("http://www.w3.org/2000/svg", n)
}

function oe(n) {
    return document.createTextNode(n)
}

function E() {
    return oe(" ")
}

function q() {
    return oe("")
}

function et(n, e, t, r) {
    return n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r)
}

function H(n, e, t) {
    t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t)
}

function xl(n) {
    return Array.from(n.childNodes)
}

function ks(n, e) {
    n.value = e == null ? "" : e
}

function Ee(n, e, t) {
    n.classList[t ? "add" : "remove"](e)
}
let Qt;

function Vt(n) {
    Qt = n
}

function ei() {
    if (!Qt) throw new Error("Function called outside component initialization");
    return Qt
}

function pl(n) {
    ei().$$.on_mount.push(n)
}
const Ut = [],
    Yt = [],
    _r = [],
    Tn = [],
    ti = Promise.resolve();
let $n = !1;

function ri() {
    $n || ($n = !0, ti.then(hl))
}

function On(n) {
    _r.push(n)
}

function ni(n) {
    Tn.push(n)
}
const rn = new Set;
let mr = 0;

function hl() {
    const n = Qt;
    do {
        for (; mr < Ut.length;) {
            const e = Ut[mr];
            mr++, Vt(e), si(e.$$)
        }
        for (Vt(null), Ut.length = 0, mr = 0; Yt.length;) Yt.pop()();
        for (let e = 0; e < _r.length; e += 1) {
            const t = _r[e];
            rn.has(t) || (rn.add(t), t())
        }
        _r.length = 0
    } while (Ut.length);
    for (; Tn.length;) Tn.pop()();
    $n = !1, rn.clear(), Vt(n)
}

function si(n) {
    if (n.fragment !== null) {
        n.update(), Et(n.before_update);
        const e = n.dirty;
        n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(On)
    }
}
const wr = new Set;
let rt;

function B() {
    rt = {
        r: 0,
        c: [],
        p: rt
    }
}

function F() {
    rt.r || Et(rt.c), rt = rt.p
}

function y(n, e) {
    n && n.i && (wr.delete(n), n.i(e))
}

function d(n, e, t, r) {
    if (n && n.o) {
        if (wr.has(n)) return;
        wr.add(n), rt.c.push(() => {
            wr.delete(n), r && (t && n.d(1), r())
        }), n.o(e)
    } else r && r()
}
const oi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;

function li(n, e) {
    d(n, 1, 1, () => {
        e.delete(n.key)
    })
}

function ii(n, e, t, r, s, i, l, a, o, f, c, _) {
    let S = n.length,
        w = i.length,
        k = S;
    const $ = {};
    for (; k--;) $[n[k].key] = k;
    const g = [],
        W = new Map,
        R = new Map;
    for (k = w; k--;) {
        const N = _(s, i, k),
            M = t(N);
        let D = l.get(M);
        D ? r && D.p(N, e) : (D = f(M, N), D.c()), W.set(M, g[k] = D), M in $ && R.set(M, Math.abs(k - $[M]))
    }
    const T = new Set,
        v = new Set;

    function A(N) {
        y(N, 1), N.m(a, c), l.set(N.key, N), c = N.first, w--
    }
    for (; S && w;) {
        const N = g[w - 1],
            M = n[S - 1],
            D = N.key,
            K = M.key;
        N === M ? (c = N.first, S--, w--) : W.has(K) ? !l.has(D) || T.has(D) ? A(N) : v.has(K) ? S-- : R.get(D) > R.get(K) ? (v.add(D), A(N)) : (T.add(K), S--) : (o(M, l), S--)
    }
    for (; S--;) {
        const N = n[S];
        W.has(N.key) || o(N, l)
    }
    for (; w;) A(g[w - 1]);
    return g
}

function ai(n, e) {
    const t = {},
        r = {},
        s = {
            $$scope: 1
        };
    let i = n.length;
    for (; i--;) {
        const l = n[i],
            a = e[i];
        if (a) {
            for (const o in l) o in a || (r[o] = 1);
            for (const o in a) s[o] || (t[o] = a[o], s[o] = 1);
            n[i] = a
        } else
            for (const o in l) s[o] = 1
    }
    for (const l in r) l in t || (t[l] = void 0);
    return t
}

function fi(n) {
    return typeof n == "object" && n !== null ? n : {}
}

function ui(n, e, t) {
    const r = n.$$.props[e];
    r !== void 0 && (n.$$.bound[r] = t, t(n.$$.ctx[r]))
}

function I(n) {
    n && n.c()
}

function G(n, e, t, r) {
    const {
        fragment: s,
        after_update: i
    } = n.$$;
    s && s.m(e, t), r || On(() => {
        const l = n.$$.on_mount.map(ll).filter(il);
        n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Et(l), n.$$.on_mount = []
    }), i.forEach(On)
}

function L(n, e) {
    const t = n.$$;
    t.fragment !== null && (Et(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = [])
}

function ci(n, e) {
    n.$$.dirty[0] === -1 && (Ut.push(n), ri(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function xt(n, e, t, r, s, i, l, a = [-1]) {
    const o = Qt;
    Vt(n);
    const f = n.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: C,
        not_equal: s,
        bound: vs(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (o ? o.$$.context : [])),
        callbacks: vs(),
        dirty: a,
        skip_bound: !1,
        root: e.target || o.$$.root
    };
    l && l(f.root);
    let c = !1;
    if (f.ctx = t ? t(n, e.props || {}, (_, S, ...w) => {
            const k = w.length ? w[0] : S;
            return f.ctx && s(f.ctx[_], f.ctx[_] = k) && (!f.skip_bound && f.bound[_] && f.bound[_](k), c && ci(n, _)), S
        }) : [], f.update(), c = !0, Et(f.before_update), f.fragment = r ? r(f.ctx) : !1, e.target) {
        if (e.hydrate) {
            const _ = xl(e.target);
            f.fragment && f.fragment.l(_), _.forEach(h)
        } else f.fragment && f.fragment.c();
        e.intro && y(n.$$.fragment), G(n, e.target, e.anchor, e.customElement), hl()
    }
    Vt(o)
}
class er {
    $destroy() {
        L(this, 1), this.$destroy = C
    }
    $on(e, t) {
        if (!il(t)) return C;
        const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return r.push(t), () => {
            const s = r.indexOf(t);
            s !== -1 && r.splice(s, 1)
        }
    }
    $set(e) {
        this.$$set && !zl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
}
const Zt = {
    host: "https://api.poktcg.io/v2"
};

function pi(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}

function hi(n) {
    var e = n.default;
    if (typeof e == "function") {
        var t = function() {
            return e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(n).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return n[r]
            }
        })
    }), t
}
var ml = {
        exports: {}
    },
    jn = {
        exports: {}
    },
    yl = function(e, t) {
        return function() {
            for (var s = new Array(arguments.length), i = 0; i < s.length; i++) s[i] = arguments[i];
            return e.apply(t, s)
        }
    },
    mi = yl,
    ot = Object.prototype.toString;

function Vn(n) {
    return ot.call(n) === "[object Array]"
}

function Rn(n) {
    return typeof n > "u"
}

function yi(n) {
    return n !== null && !Rn(n) && n.constructor !== null && !Rn(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n)
}

function di(n) {
    return ot.call(n) === "[object ArrayBuffer]"
}

function Si(n) {
    return typeof FormData < "u" && n instanceof FormData
}

function _i(n) {
    var e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && n.buffer instanceof ArrayBuffer, e
}

function wi(n) {
    return typeof n == "string"
}

function gi(n) {
    return typeof n == "number"
}

function dl(n) {
    return n !== null && typeof n == "object"
}

function gr(n) {
    if (ot.call(n) !== "[object Object]") return !1;
    var e = Object.getPrototypeOf(n);
    return e === null || e === Object.prototype
}

function bi(n) {
    return ot.call(n) === "[object Date]"
}

function vi(n) {
    return ot.call(n) === "[object File]"
}

function Hi(n) {
    return ot.call(n) === "[object Blob]"
}

function Sl(n) {
    return ot.call(n) === "[object Function]"
}

function ki(n) {
    return dl(n) && Sl(n.pipe)
}

function Wi(n) {
    return typeof URLSearchParams < "u" && n instanceof URLSearchParams
}

function Pi(n) {
    return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
}

function Ei() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function zn(n, e) {
    if (!(n === null || typeof n > "u"))
        if (typeof n != "object" && (n = [n]), Vn(n))
            for (var t = 0, r = n.length; t < r; t++) e.call(null, n[t], t, n);
        else
            for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && e.call(null, n[s], s, n)
}

function Nn() {
    var n = {};

    function e(s, i) {
        gr(n[i]) && gr(s) ? n[i] = Nn(n[i], s) : gr(s) ? n[i] = Nn({}, s) : Vn(s) ? n[i] = s.slice() : n[i] = s
    }
    for (var t = 0, r = arguments.length; t < r; t++) zn(arguments[t], e);
    return n
}

function Ci(n, e, t) {
    return zn(e, function(s, i) {
        t && typeof s == "function" ? n[i] = mi(s, t) : n[i] = s
    }), n
}

function Ai(n) {
    return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n
}
var ge = {
        isArray: Vn,
        isArrayBuffer: di,
        isBuffer: yi,
        isFormData: Si,
        isArrayBufferView: _i,
        isString: wi,
        isNumber: gi,
        isObject: dl,
        isPlainObject: gr,
        isUndefined: Rn,
        isDate: bi,
        isFile: vi,
        isBlob: Hi,
        isFunction: Sl,
        isStream: ki,
        isURLSearchParams: Wi,
        isStandardBrowserEnv: Ei,
        forEach: zn,
        merge: Nn,
        extend: Ci,
        trim: Pi,
        stripBOM: Ai
    },
    mt = ge;

function Ws(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var _l = function(e, t, r) {
        if (!t) return e;
        var s;
        if (r) s = r(t);
        else if (mt.isURLSearchParams(t)) s = t.toString();
        else {
            var i = [];
            mt.forEach(t, function(o, f) {
                o === null || typeof o > "u" || (mt.isArray(o) ? f = f + "[]" : o = [o], mt.forEach(o, function(_) {
                    mt.isDate(_) ? _ = _.toISOString() : mt.isObject(_) && (_ = JSON.stringify(_)), i.push(Ws(f) + "=" + Ws(_))
                }))
            }), s = i.join("&")
        }
        if (s) {
            var l = e.indexOf("#");
            l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
        }
        return e
    },
    Ti = ge;

function Er() {
    this.handlers = []
}
Er.prototype.use = function(e, t, r) {
    return this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1
};
Er.prototype.eject = function(e) {
    this.handlers[e] && (this.handlers[e] = null)
};
Er.prototype.forEach = function(e) {
    Ti.forEach(this.handlers, function(r) {
        r !== null && e(r)
    })
};
var $i = Er,
    Oi = ge,
    Ri = function(e, t) {
        Oi.forEach(e, function(s, i) {
            i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = s, delete e[i])
        })
    },
    wl = function(e, t, r, s, i) {
        return e.config = t, r && (e.code = r), e.request = s, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    },
    nn, Ps;

function gl() {
    if (Ps) return nn;
    Ps = 1;
    var n = wl;
    return nn = function(t, r, s, i, l) {
        var a = new Error(t);
        return n(a, r, s, i, l)
    }, nn
}
var sn, Es;

function Ni() {
    if (Es) return sn;
    Es = 1;
    var n = gl();
    return sn = function(t, r, s) {
        var i = s.config.validateStatus;
        !s.status || !i || i(s.status) ? t(s) : r(n("Request failed with status code " + s.status, s.config, null, s.request, s))
    }, sn
}
var on, Cs;

function Mi() {
    if (Cs) return on;
    Cs = 1;
    var n = ge;
    return on = n.isStandardBrowserEnv() ? function() {
        return {
            write: function(r, s, i, l, a, o) {
                var f = [];
                f.push(r + "=" + encodeURIComponent(s)), n.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()), n.isString(l) && f.push("path=" + l), n.isString(a) && f.push("domain=" + a), o === !0 && f.push("secure"), document.cookie = f.join("; ")
            },
            read: function(r) {
                var s = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
                return s ? decodeURIComponent(s[3]) : null
            },
            remove: function(r) {
                this.write(r, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }(), on
}
var ln, As;

function Gi() {
    return As || (As = 1, ln = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }), ln
}
var an, Ts;

function Li() {
    return Ts || (Ts = 1, an = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }), an
}
var fn, $s;

function Ii() {
    if ($s) return fn;
    $s = 1;
    var n = Gi(),
        e = Li();
    return fn = function(r, s) {
        return r && !n(s) ? e(r, s) : s
    }, fn
}
var un, Os;

function Bi() {
    if (Os) return un;
    Os = 1;
    var n = ge,
        e = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return un = function(r) {
        var s = {},
            i, l, a;
        return r && n.forEach(r.split(`
`), function(f) {
            if (a = f.indexOf(":"), i = n.trim(f.substr(0, a)).toLowerCase(), l = n.trim(f.substr(a + 1)), i) {
                if (s[i] && e.indexOf(i) >= 0) return;
                i === "set-cookie" ? s[i] = (s[i] ? s[i] : []).concat([l]) : s[i] = s[i] ? s[i] + ", " + l : l
            }
        }), s
    }, un
}
var cn, Rs;

function Fi() {
    if (Rs) return cn;
    Rs = 1;
    var n = ge;
    return cn = n.isStandardBrowserEnv() ? function() {
        var t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a"),
            s;

        function i(l) {
            var a = l;
            return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
            }
        }
        return s = i(window.location.href),
            function(a) {
                var o = n.isString(a) ? i(a) : a;
                return o.protocol === s.protocol && o.host === s.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }(), cn
}
var pn, Ns;

function Ms() {
    if (Ns) return pn;
    Ns = 1;
    var n = ge,
        e = Ni(),
        t = Mi(),
        r = _l,
        s = Ii(),
        i = Bi(),
        l = Fi(),
        a = gl();
    return pn = function(f) {
        return new Promise(function(_, S) {
            var w = f.data,
                k = f.headers,
                $ = f.responseType;
            n.isFormData(w) && delete k["Content-Type"];
            var g = new XMLHttpRequest;
            if (f.auth) {
                var W = f.auth.username || "",
                    R = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : "";
                k.Authorization = "Basic " + btoa(W + ":" + R)
            }
            var T = s(f.baseURL, f.url);
            g.open(f.method.toUpperCase(), r(T, f.params, f.paramsSerializer), !0), g.timeout = f.timeout;

            function v() {
                if (!!g) {
                    var N = "getAllResponseHeaders" in g ? i(g.getAllResponseHeaders()) : null,
                        M = !$ || $ === "text" || $ === "json" ? g.responseText : g.response,
                        D = {
                            data: M,
                            status: g.status,
                            statusText: g.statusText,
                            headers: N,
                            config: f,
                            request: g
                        };
                    e(_, S, D), g = null
                }
            }
            if ("onloadend" in g ? g.onloadend = v : g.onreadystatechange = function() {
                    !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(v)
                }, g.onabort = function() {
                    !g || (S(a("Request aborted", f, "ECONNABORTED", g)), g = null)
                }, g.onerror = function() {
                    S(a("Network Error", f, null, g)), g = null
                }, g.ontimeout = function() {
                    var M = "timeout of " + f.timeout + "ms exceeded";
                    f.timeoutErrorMessage && (M = f.timeoutErrorMessage), S(a(M, f, f.transitional && f.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", g)), g = null
                }, n.isStandardBrowserEnv()) {
                var A = (f.withCredentials || l(T)) && f.xsrfCookieName ? t.read(f.xsrfCookieName) : void 0;
                A && (k[f.xsrfHeaderName] = A)
            }
            "setRequestHeader" in g && n.forEach(k, function(M, D) {
                typeof w > "u" && D.toLowerCase() === "content-type" ? delete k[D] : g.setRequestHeader(D, M)
            }), n.isUndefined(f.withCredentials) || (g.withCredentials = !!f.withCredentials), $ && $ !== "json" && (g.responseType = f.responseType), typeof f.onDownloadProgress == "function" && g.addEventListener("progress", f.onDownloadProgress), typeof f.onUploadProgress == "function" && g.upload && g.upload.addEventListener("progress", f.onUploadProgress), f.cancelToken && f.cancelToken.promise.then(function(M) {
                !g || (g.abort(), S(M), g = null)
            }), w || (w = null), g.send(w)
        })
    }, pn
}
var me = ge,
    Gs = Ri,
    qi = wl,
    Di = {
        "Content-Type": "application/x-www-form-urlencoded"
    };

function Ls(n, e) {
    !me.isUndefined(n) && me.isUndefined(n["Content-Type"]) && (n["Content-Type"] = e)
}

function Ui() {
    var n;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = Ms()), n
}

function ji(n, e, t) {
    if (me.isString(n)) try {
        return (e || JSON.parse)(n), me.trim(n)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (t || JSON.stringify)(n)
}
var Cr = {
    transitional: {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    adapter: Ui(),
    transformRequest: [function(e, t) {
        return Gs(t, "Accept"), Gs(t, "Content-Type"), me.isFormData(e) || me.isArrayBuffer(e) || me.isBuffer(e) || me.isStream(e) || me.isFile(e) || me.isBlob(e) ? e : me.isArrayBufferView(e) ? e.buffer : me.isURLSearchParams(e) ? (Ls(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : me.isObject(e) || t && t["Content-Type"] === "application/json" ? (Ls(t, "application/json"), ji(e)) : e
    }],
    transformResponse: [function(e) {
        var t = this.transitional,
            r = t && t.silentJSONParsing,
            s = t && t.forcedJSONParsing,
            i = !r && this.responseType === "json";
        if (i || s && me.isString(e) && e.length) try {
            return JSON.parse(e)
        } catch (l) {
            if (i) throw l.name === "SyntaxError" ? qi(l, this, "E_JSON_PARSE") : l
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function(e) {
        return e >= 200 && e < 300
    }
};
Cr.headers = {
    common: {
        Accept: "application/json, text/plain, */*"
    }
};
me.forEach(["delete", "get", "head"], function(e) {
    Cr.headers[e] = {}
});
me.forEach(["post", "put", "patch"], function(e) {
    Cr.headers[e] = me.merge(Di)
});
var Jn = Cr,
    Vi = ge,
    zi = Jn,
    Ji = function(e, t, r) {
        var s = this || zi;
        return Vi.forEach(r, function(l) {
            e = l.call(s, e, t)
        }), e
    },
    hn, Is;

function bl() {
    return Is || (Is = 1, hn = function(e) {
        return !!(e && e.__CANCEL__)
    }), hn
}
var Bs = ge,
    mn = Ji,
    Ki = bl(),
    Xi = Jn;

function yn(n) {
    n.cancelToken && n.cancelToken.throwIfRequested()
}
var Qi = function(e) {
        yn(e), e.headers = e.headers || {}, e.data = mn.call(e, e.data, e.headers, e.transformRequest), e.headers = Bs.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Bs.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(s) {
            delete e.headers[s]
        });
        var t = e.adapter || Xi.adapter;
        return t(e).then(function(s) {
            return yn(e), s.data = mn.call(e, s.data, s.headers, e.transformResponse), s
        }, function(s) {
            return Ki(s) || (yn(e), s && s.response && (s.response.data = mn.call(e, s.response.data, s.response.headers, e.transformResponse))), Promise.reject(s)
        })
    },
    ye = ge,
    vl = function(e, t) {
        t = t || {};
        var r = {},
            s = ["url", "method", "data"],
            i = ["headers", "auth", "proxy", "params"],
            l = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
            a = ["validateStatus"];

        function o(S, w) {
            return ye.isPlainObject(S) && ye.isPlainObject(w) ? ye.merge(S, w) : ye.isPlainObject(w) ? ye.merge({}, w) : ye.isArray(w) ? w.slice() : w
        }

        function f(S) {
            ye.isUndefined(t[S]) ? ye.isUndefined(e[S]) || (r[S] = o(void 0, e[S])) : r[S] = o(e[S], t[S])
        }
        ye.forEach(s, function(w) {
            ye.isUndefined(t[w]) || (r[w] = o(void 0, t[w]))
        }), ye.forEach(i, f), ye.forEach(l, function(w) {
            ye.isUndefined(t[w]) ? ye.isUndefined(e[w]) || (r[w] = o(void 0, e[w])) : r[w] = o(void 0, t[w])
        }), ye.forEach(a, function(w) {
            w in t ? r[w] = o(e[w], t[w]) : w in e && (r[w] = o(void 0, e[w]))
        });
        var c = s.concat(i).concat(l).concat(a),
            _ = Object.keys(e).concat(Object.keys(t)).filter(function(w) {
                return c.indexOf(w) === -1
            });
        return ye.forEach(_, f), r
    };
const Yi = "axios",
    Zi = "0.21.4",
    xi = "Promise based HTTP client for the browser and node.js",
    ea = "index.js",
    ta = {
        test: "grunt test",
        start: "node ./sandbox/server.js",
        build: "NODE_ENV=production grunt build",
        preversion: "npm test",
        version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
        postversion: "git push && git push --tags",
        examples: "node ./examples/server.js",
        coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
        fix: "eslint --fix lib/**/*.js"
    },
    ra = {
        type: "git",
        url: "https://github.com/axios/axios.git"
    },
    na = ["xhr", "http", "ajax", "promise", "node"],
    sa = "Matt Zabriskie",
    oa = "MIT",
    la = {
        url: "https://github.com/axios/axios/issues"
    },
    ia = "https://axios-http.com",
    aa = {
        coveralls: "^3.0.0",
        "es6-promise": "^4.2.4",
        grunt: "^1.3.0",
        "grunt-banner": "^0.6.0",
        "grunt-cli": "^1.2.0",
        "grunt-contrib-clean": "^1.1.0",
        "grunt-contrib-watch": "^1.0.0",
        "grunt-eslint": "^23.0.0",
        "grunt-karma": "^4.0.0",
        "grunt-mocha-test": "^0.13.3",
        "grunt-ts": "^6.0.0-beta.19",
        "grunt-webpack": "^4.0.2",
        "istanbul-instrumenter-loader": "^1.0.0",
        "jasmine-core": "^2.4.1",
        karma: "^6.3.2",
        "karma-chrome-launcher": "^3.1.0",
        "karma-firefox-launcher": "^2.1.0",
        "karma-jasmine": "^1.1.1",
        "karma-jasmine-ajax": "^0.1.13",
        "karma-safari-launcher": "^1.0.0",
        "karma-sauce-launcher": "^4.3.6",
        "karma-sinon": "^1.0.5",
        "karma-sourcemap-loader": "^0.3.8",
        "karma-webpack": "^4.0.2",
        "load-grunt-tasks": "^3.5.2",
        minimist: "^1.2.0",
        mocha: "^8.2.1",
        sinon: "^4.5.0",
        "terser-webpack-plugin": "^4.2.3",
        typescript: "^4.0.5",
        "url-search-params": "^0.10.0",
        webpack: "^4.44.2",
        "webpack-dev-server": "^3.11.0"
    },
    fa = {
        "./lib/adapters/http.js": "./lib/adapters/xhr.js"
    },
    ua = "dist/axios.min.js",
    ca = "dist/axios.min.js",
    pa = "./index.d.ts",
    ha = {
        "follow-redirects": "^1.14.0"
    },
    ma = [{
        path: "./dist/axios.min.js",
        threshold: "5kB"
    }],
    ya = {
        name: Yi,
        version: Zi,
        description: xi,
        main: ea,
        scripts: ta,
        repository: ra,
        keywords: na,
        author: sa,
        license: oa,
        bugs: la,
        homepage: ia,
        devDependencies: aa,
        browser: fa,
        jsdelivr: ua,
        unpkg: ca,
        typings: pa,
        dependencies: ha,
        bundlesize: ma
    };
var Hl = ya,
    Kn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, e) {
    Kn[n] = function(r) {
        return typeof r === n || "a" + (e < 1 ? "n " : " ") + n
    }
});
var Fs = {},
    da = Hl.version.split(".");

function kl(n, e) {
    for (var t = e ? e.split(".") : da, r = n.split("."), s = 0; s < 3; s++) {
        if (t[s] > r[s]) return !0;
        if (t[s] < r[s]) return !1
    }
    return !1
}
Kn.transitional = function(e, t, r) {
    var s = t && kl(t);

    function i(l, a) {
        return "[Axios v" + Hl.version + "] Transitional option '" + l + "'" + a + (r ? ". " + r : "")
    }
    return function(l, a, o) {
        if (e === !1) throw new Error(i(a, " has been removed in " + t));
        return s && !Fs[a] && (Fs[a] = !0, console.warn(i(a, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(l, a, o) : !0
    }
};

function Sa(n, e, t) {
    if (typeof n != "object") throw new TypeError("options must be an object");
    for (var r = Object.keys(n), s = r.length; s-- > 0;) {
        var i = r[s],
            l = e[i];
        if (l) {
            var a = n[i],
                o = a === void 0 || l(a, i, n);
            if (o !== !0) throw new TypeError("option " + i + " must be " + o);
            continue
        }
        if (t !== !0) throw Error("Unknown option " + i)
    }
}
var _a = {
        isOlderVersion: kl,
        assertOptions: Sa,
        validators: Kn
    },
    Wl = ge,
    wa = _l,
    qs = $i,
    Ds = Qi,
    Ar = vl,
    Pl = _a,
    yt = Pl.validators;

function tr(n) {
    this.defaults = n, this.interceptors = {
        request: new qs,
        response: new qs
    }
}
tr.prototype.request = function(e) {
    typeof e == "string" ? (e = arguments[1] || {}, e.url = arguments[0]) : e = e || {}, e = Ar(this.defaults, e), e.method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
    var t = e.transitional;
    t !== void 0 && Pl.assertOptions(t, {
        silentJSONParsing: yt.transitional(yt.boolean, "1.0.0"),
        forcedJSONParsing: yt.transitional(yt.boolean, "1.0.0"),
        clarifyTimeoutError: yt.transitional(yt.boolean, "1.0.0")
    }, !1);
    var r = [],
        s = !0;
    this.interceptors.request.forEach(function(S) {
        typeof S.runWhen == "function" && S.runWhen(e) === !1 || (s = s && S.synchronous, r.unshift(S.fulfilled, S.rejected))
    });
    var i = [];
    this.interceptors.response.forEach(function(S) {
        i.push(S.fulfilled, S.rejected)
    });
    var l;
    if (!s) {
        var a = [Ds, void 0];
        for (Array.prototype.unshift.apply(a, r), a = a.concat(i), l = Promise.resolve(e); a.length;) l = l.then(a.shift(), a.shift());
        return l
    }
    for (var o = e; r.length;) {
        var f = r.shift(),
            c = r.shift();
        try {
            o = f(o)
        } catch (_) {
            c(_);
            break
        }
    }
    try {
        l = Ds(o)
    } catch (_) {
        return Promise.reject(_)
    }
    for (; i.length;) l = l.then(i.shift(), i.shift());
    return l
};
tr.prototype.getUri = function(e) {
    return e = Ar(this.defaults, e), wa(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
};
Wl.forEach(["delete", "get", "head", "options"], function(e) {
    tr.prototype[e] = function(t, r) {
        return this.request(Ar(r || {}, {
            method: e,
            url: t,
            data: (r || {}).data
        }))
    }
});
Wl.forEach(["post", "put", "patch"], function(e) {
    tr.prototype[e] = function(t, r, s) {
        return this.request(Ar(s || {}, {
            method: e,
            url: t,
            data: r
        }))
    }
});
var ga = tr,
    dn, Us;

function El() {
    if (Us) return dn;
    Us = 1;

    function n(e) {
        this.message = e
    }
    return n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, dn = n, dn
}
var Sn, js;

function ba() {
    if (js) return Sn;
    js = 1;
    var n = El();

    function e(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function(l) {
            r = l
        });
        var s = this;
        t(function(l) {
            s.reason || (s.reason = new n(l), r(s.reason))
        })
    }
    return e.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, e.source = function() {
        var r, s = new e(function(l) {
            r = l
        });
        return {
            token: s,
            cancel: r
        }
    }, Sn = e, Sn
}
var _n, Vs;

function va() {
    return Vs || (Vs = 1, _n = function(e) {
        return function(r) {
            return e.apply(null, r)
        }
    }), _n
}
var wn, zs;

function Ha() {
    return zs || (zs = 1, wn = function(e) {
        return typeof e == "object" && e.isAxiosError === !0
    }), wn
}
var Js = ge,
    ka = yl,
    br = ga,
    Wa = vl,
    Pa = Jn;

function Cl(n) {
    var e = new br(n),
        t = ka(br.prototype.request, e);
    return Js.extend(t, br.prototype, e), Js.extend(t, e), t
}
var ke = Cl(Pa);
ke.Axios = br;
ke.create = function(e) {
    return Cl(Wa(ke.defaults, e))
};
ke.Cancel = El();
ke.CancelToken = ba();
ke.isCancel = bl();
ke.all = function(e) {
    return Promise.all(e)
};
ke.spread = va();
ke.isAxiosError = Ha();
jn.exports = ke;
jn.exports.default = ke;
(function(n) {
    n.exports = jn.exports
})(ml);
const Al = pi(ml.exports);
var Ea = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            t = Symbol("test"),
            r = Object(t);
        if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
        var s = 42;
        e[t] = s;
        for (t in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var i = Object.getOwnPropertySymbols(e);
        if (i.length !== 1 || i[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var l = Object.getOwnPropertyDescriptor(e, t);
            if (l.value !== s || l.enumerable !== !0) return !1
        }
        return !0
    },
    Ks = typeof Symbol < "u" && Symbol,
    Ca = Ea,
    Aa = function() {
        return typeof Ks != "function" || typeof Symbol != "function" || typeof Ks("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Ca()
    },
    Ta = "Function.prototype.bind called on incompatible ",
    gn = Array.prototype.slice,
    $a = Object.prototype.toString,
    Oa = "[object Function]",
    Ra = function(e) {
        var t = this;
        if (typeof t != "function" || $a.call(t) !== Oa) throw new TypeError(Ta + t);
        for (var r = gn.call(arguments, 1), s, i = function() {
                if (this instanceof s) {
                    var c = t.apply(this, r.concat(gn.call(arguments)));
                    return Object(c) === c ? c : this
                } else return t.apply(e, r.concat(gn.call(arguments)))
            }, l = Math.max(0, t.length - r.length), a = [], o = 0; o < l; o++) a.push("$" + o);
        if (s = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
            var f = function() {};
            f.prototype = t.prototype, s.prototype = new f, f.prototype = null
        }
        return s
    },
    Na = Ra,
    Xn = Function.prototype.bind || Na,
    Ma = Xn,
    Ga = Ma.call(Function.call, Object.prototype.hasOwnProperty),
    z, kt = SyntaxError,
    Tl = Function,
    Ht = TypeError,
    bn = function(n) {
        try {
            return Tl('"use strict"; return (' + n + ").constructor;")()
        } catch {}
    },
    nt = Object.getOwnPropertyDescriptor;
if (nt) try {
    nt({}, "")
} catch {
    nt = null
}
var vn = function() {
        throw new Ht
    },
    La = nt ? function() {
        try {
            return arguments.callee, vn
        } catch {
            try {
                return nt(arguments, "callee").get
            } catch {
                return vn
            }
        }
    }() : vn,
    dt = Aa(),
    Ce = Object.getPrototypeOf || function(n) {
        return n.__proto__
    },
    bt = {},
    Ia = typeof Uint8Array > "u" ? z : Ce(Uint8Array),
    st = {
        "%AggregateError%": typeof AggregateError > "u" ? z : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? z : ArrayBuffer,
        "%ArrayIteratorPrototype%": dt ? Ce([][Symbol.iterator]()) : z,
        "%AsyncFromSyncIteratorPrototype%": z,
        "%AsyncFunction%": bt,
        "%AsyncGenerator%": bt,
        "%AsyncGeneratorFunction%": bt,
        "%AsyncIteratorPrototype%": bt,
        "%Atomics%": typeof Atomics > "u" ? z : Atomics,
        "%BigInt%": typeof BigInt > "u" ? z : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? z : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? z : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? z : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? z : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? z : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? z : FinalizationRegistry,
        "%Function%": Tl,
        "%GeneratorFunction%": bt,
        "%Int8Array%": typeof Int8Array > "u" ? z : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? z : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? z : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": dt ? Ce(Ce([][Symbol.iterator]())) : z,
        "%JSON%": typeof JSON == "object" ? JSON : z,
        "%Map%": typeof Map > "u" ? z : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !dt ? z : Ce(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? z : Promise,
        "%Proxy%": typeof Proxy > "u" ? z : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? z : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? z : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !dt ? z : Ce(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? z : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": dt ? Ce("" [Symbol.iterator]()) : z,
        "%Symbol%": dt ? Symbol : z,
        "%SyntaxError%": kt,
        "%ThrowTypeError%": La,
        "%TypedArray%": Ia,
        "%TypeError%": Ht,
        "%Uint8Array%": typeof Uint8Array > "u" ? z : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? z : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? z : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? z : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? z : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? z : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? z : WeakSet
    };
try {
    null.error
} catch (n) {
    var Ba = Ce(Ce(n));
    st["%Error.prototype%"] = Ba
}
var Fa = function n(e) {
        var t;
        if (e === "%AsyncFunction%") t = bn("async function () {}");
        else if (e === "%GeneratorFunction%") t = bn("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") t = bn("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var r = n("%AsyncGeneratorFunction%");
            r && (t = r.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var s = n("%AsyncGenerator%");
            s && (t = Ce(s.prototype))
        }
        return st[e] = t, t
    },
    Xs = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    rr = Xn,
    vr = Ga,
    qa = rr.call(Function.call, Array.prototype.concat),
    Da = rr.call(Function.apply, Array.prototype.splice),
    Qs = rr.call(Function.call, String.prototype.replace),
    Hr = rr.call(Function.call, String.prototype.slice),
    Ua = rr.call(Function.call, RegExp.prototype.exec),
    ja = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Va = /\\(\\)?/g,
    za = function(e) {
        var t = Hr(e, 0, 1),
            r = Hr(e, -1);
        if (t === "%" && r !== "%") throw new kt("invalid intrinsic syntax, expected closing `%`");
        if (r === "%" && t !== "%") throw new kt("invalid intrinsic syntax, expected opening `%`");
        var s = [];
        return Qs(e, ja, function(i, l, a, o) {
            s[s.length] = a ? Qs(o, Va, "$1") : l || i
        }), s
    },
    Ja = function(e, t) {
        var r = e,
            s;
        if (vr(Xs, r) && (s = Xs[r], r = "%" + s[0] + "%"), vr(st, r)) {
            var i = st[r];
            if (i === bt && (i = Fa(r)), typeof i > "u" && !t) throw new Ht("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: s,
                name: r,
                value: i
            }
        }
        throw new kt("intrinsic " + e + " does not exist!")
    },
    Qn = function(e, t) {
        if (typeof e != "string" || e.length === 0) throw new Ht("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof t != "boolean") throw new Ht('"allowMissing" argument must be a boolean');
        if (Ua(/^%?[^%]*%?$/, e) === null) throw new kt("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r = za(e),
            s = r.length > 0 ? r[0] : "",
            i = Ja("%" + s + "%", t),
            l = i.name,
            a = i.value,
            o = !1,
            f = i.alias;
        f && (s = f[0], Da(r, qa([0, 1], f)));
        for (var c = 1, _ = !0; c < r.length; c += 1) {
            var S = r[c],
                w = Hr(S, 0, 1),
                k = Hr(S, -1);
            if ((w === '"' || w === "'" || w === "`" || k === '"' || k === "'" || k === "`") && w !== k) throw new kt("property names with quotes must have matching quotes");
            if ((S === "constructor" || !_) && (o = !0), s += "." + S, l = "%" + s + "%", vr(st, l)) a = st[l];
            else if (a != null) {
                if (!(S in a)) {
                    if (!t) throw new Ht("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (nt && c + 1 >= r.length) {
                    var $ = nt(a, S);
                    _ = !!$, _ && "get" in $ && !("originalValue" in $.get) ? a = $.get : a = a[S]
                } else _ = vr(a, S), a = a[S];
                _ && !o && (st[l] = a)
            }
        }
        return a
    },
    $l = {
        exports: {}
    };
(function(n) {
    var e = Xn,
        t = Qn,
        r = t("%Function.prototype.apply%"),
        s = t("%Function.prototype.call%"),
        i = t("%Reflect.apply%", !0) || e.call(s, r),
        l = t("%Object.getOwnPropertyDescriptor%", !0),
        a = t("%Object.defineProperty%", !0),
        o = t("%Math.max%");
    if (a) try {
        a({}, "a", {
            value: 1
        })
    } catch {
        a = null
    }
    n.exports = function(_) {
        var S = i(e, s, arguments);
        if (l && a) {
            var w = l(S, "length");
            w.configurable && a(S, "length", {
                value: 1 + o(0, _.length - (arguments.length - 1))
            })
        }
        return S
    };
    var f = function() {
        return i(e, r, arguments)
    };
    a ? a(n.exports, "apply", {
        value: f
    }) : n.exports.apply = f
})($l);
var Ol = Qn,
    Rl = $l.exports,
    Ka = Rl(Ol("String.prototype.indexOf")),
    Xa = function(e, t) {
        var r = Ol(e, !!t);
        return typeof r == "function" && Ka(e, ".prototype.") > -1 ? Rl(r) : r
    };
const Qa = {},
    Ya = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qa
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Za = hi(Ya);
var Yn = typeof Map == "function" && Map.prototype,
    Hn = Object.getOwnPropertyDescriptor && Yn ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    kr = Yn && Hn && typeof Hn.get == "function" ? Hn.get : null,
    Ys = Yn && Map.prototype.forEach,
    Zn = typeof Set == "function" && Set.prototype,
    kn = Object.getOwnPropertyDescriptor && Zn ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    Wr = Zn && kn && typeof kn.get == "function" ? kn.get : null,
    Zs = Zn && Set.prototype.forEach,
    xa = typeof WeakMap == "function" && WeakMap.prototype,
    zt = xa ? WeakMap.prototype.has : null,
    ef = typeof WeakSet == "function" && WeakSet.prototype,
    Jt = ef ? WeakSet.prototype.has : null,
    tf = typeof WeakRef == "function" && WeakRef.prototype,
    xs = tf ? WeakRef.prototype.deref : null,
    rf = Boolean.prototype.valueOf,
    nf = Object.prototype.toString,
    sf = Function.prototype.toString,
    of = String.prototype.match,
    xn = String.prototype.slice,
    Le = String.prototype.replace,
    lf = String.prototype.toUpperCase,
    eo = String.prototype.toLowerCase,
    Nl = RegExp.prototype.test,
    to = Array.prototype.concat,
    Ae = Array.prototype.join,
    af = Array.prototype.slice,
    ro = Math.floor,
    Mn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    Wn = Object.getOwnPropertySymbols,
    Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Wt = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    de = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Wt ? "object" : "symbol") ? Symbol.toStringTag : null,
    Ml = Object.prototype.propertyIsEnumerable,
    no = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(n) {
        return n.__proto__
    } : null);

function so(n, e) {
    if (n === 1 / 0 || n === -1 / 0 || n !== n || n && n > -1e3 && n < 1e3 || Nl.call(/e/, e)) return e;
    var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof n == "number") {
        var r = n < 0 ? -ro(-n) : ro(n);
        if (r !== n) {
            var s = String(r),
                i = xn.call(e, s.length + 1);
            return Le.call(s, t, "$&_") + "." + Le.call(Le.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return Le.call(e, t, "$&_")
}
var Ln = Za,
    oo = Ln.custom,
    lo = Ll(oo) ? oo : null,
    ff = function n(e, t, r, s) {
        var i = t || {};
        if (Ge(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (Ge(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var l = Ge(i, "customInspect") ? i.customInspect : !0;
        if (typeof l != "boolean" && l !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (Ge(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (Ge(i, "numericSeparator") && typeof i.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var a = i.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Bl(e, i);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var o = String(e);
            return a ? so(e, o) : o
        }
        if (typeof e == "bigint") {
            var f = String(e) + "n";
            return a ? so(e, f) : f
        }
        var c = typeof i.depth > "u" ? 5 : i.depth;
        if (typeof r > "u" && (r = 0), r >= c && c > 0 && typeof e == "object") return In(e) ? "[Array]" : "[Object]";
        var _ = Ef(i, r);
        if (typeof s > "u") s = [];
        else if (Il(s, e) >= 0) return "[Circular]";

        function S(V, U, X) {
            if (U && (s = af.call(s), s.push(U)), X) {
                var J = {
                    depth: i.depth
                };
                return Ge(i, "quoteStyle") && (J.quoteStyle = i.quoteStyle), n(V, J, r + 1, s)
            }
            return n(V, i, r + 1, s)
        }
        if (typeof e == "function" && !io(e)) {
            var w = _f(e),
                k = yr(e, S);
            return "[Function" + (w ? ": " + w : " (anonymous)") + "]" + (k.length > 0 ? " { " + Ae.call(k, ", ") + " }" : "")
        }
        if (Ll(e)) {
            var $ = Wt ? Le.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Gn.call(e);
            return typeof e == "object" && !Wt ? qt($) : $
        }
        if (kf(e)) {
            for (var g = "<" + eo.call(String(e.nodeName)), W = e.attributes || [], R = 0; R < W.length; R++) g += " " + W[R].name + "=" + Gl(uf(W[R].value), "double", i);
            return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + eo.call(String(e.nodeName)) + ">", g
        }
        if (In(e)) {
            if (e.length === 0) return "[]";
            var T = yr(e, S);
            return _ && !Pf(T) ? "[" + Bn(T, _) + "]" : "[ " + Ae.call(T, ", ") + " ]"
        }
        if (pf(e)) {
            var v = yr(e, S);
            return !("cause" in Error.prototype) && "cause" in e && !Ml.call(e, "cause") ? "{ [" + String(e) + "] " + Ae.call(to.call("[cause]: " + S(e.cause), v), ", ") + " }" : v.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Ae.call(v, ", ") + " }"
        }
        if (typeof e == "object" && l) {
            if (lo && typeof e[lo] == "function" && Ln) return Ln(e, {
                depth: c - r
            });
            if (l !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (wf(e)) {
            var A = [];
            return Ys && Ys.call(e, function(V, U) {
                A.push(S(U, e, !0) + " => " + S(V, e))
            }), ao("Map", kr.call(e), A, _)
        }
        if (vf(e)) {
            var N = [];
            return Zs && Zs.call(e, function(V) {
                N.push(S(V, e))
            }), ao("Set", Wr.call(e), N, _)
        }
        if (gf(e)) return Pn("WeakMap");
        if (Hf(e)) return Pn("WeakSet");
        if (bf(e)) return Pn("WeakRef");
        if (mf(e)) return qt(S(Number(e)));
        if (df(e)) return qt(S(Mn.call(e)));
        if (yf(e)) return qt(rf.call(e));
        if (hf(e)) return qt(S(String(e)));
        if (!cf(e) && !io(e)) {
            var M = yr(e, S),
                D = no ? no(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                K = e instanceof Object ? "" : "null prototype",
                j = !D && de && Object(e) === e && de in e ? xn.call(Ie(e), 8, -1) : K ? "Object" : "",
                b = D || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Q = b + (j || K ? "[" + Ae.call(to.call([], j || [], K || []), ": ") + "] " : "");
            return M.length === 0 ? Q + "{}" : _ ? Q + "{" + Bn(M, _) + "}" : Q + "{ " + Ae.call(M, ", ") + " }"
        }
        return String(e)
    };

function Gl(n, e, t) {
    var r = (t.quoteStyle || e) === "double" ? '"' : "'";
    return r + n + r
}

function uf(n) {
    return Le.call(String(n), /"/g, "&quot;")
}

function In(n) {
    return Ie(n) === "[object Array]" && (!de || !(typeof n == "object" && de in n))
}

function cf(n) {
    return Ie(n) === "[object Date]" && (!de || !(typeof n == "object" && de in n))
}

function io(n) {
    return Ie(n) === "[object RegExp]" && (!de || !(typeof n == "object" && de in n))
}

function pf(n) {
    return Ie(n) === "[object Error]" && (!de || !(typeof n == "object" && de in n))
}

function hf(n) {
    return Ie(n) === "[object String]" && (!de || !(typeof n == "object" && de in n))
}

function mf(n) {
    return Ie(n) === "[object Number]" && (!de || !(typeof n == "object" && de in n))
}

function yf(n) {
    return Ie(n) === "[object Boolean]" && (!de || !(typeof n == "object" && de in n))
}

function Ll(n) {
    if (Wt) return n && typeof n == "object" && n instanceof Symbol;
    if (typeof n == "symbol") return !0;
    if (!n || typeof n != "object" || !Gn) return !1;
    try {
        return Gn.call(n), !0
    } catch {}
    return !1
}

function df(n) {
    if (!n || typeof n != "object" || !Mn) return !1;
    try {
        return Mn.call(n), !0
    } catch {}
    return !1
}
var Sf = Object.prototype.hasOwnProperty || function(n) {
    return n in this
};

function Ge(n, e) {
    return Sf.call(n, e)
}

function Ie(n) {
    return nf.call(n)
}

function _f(n) {
    if (n.name) return n.name;
    var e = of .call(sf.call(n), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Il(n, e) {
    if (n.indexOf) return n.indexOf(e);
    for (var t = 0, r = n.length; t < r; t++)
        if (n[t] === e) return t;
    return -1
}

function wf(n) {
    if (!kr || !n || typeof n != "object") return !1;
    try {
        kr.call(n);
        try {
            Wr.call(n)
        } catch {
            return !0
        }
        return n instanceof Map
    } catch {}
    return !1
}

function gf(n) {
    if (!zt || !n || typeof n != "object") return !1;
    try {
        zt.call(n, zt);
        try {
            Jt.call(n, Jt)
        } catch {
            return !0
        }
        return n instanceof WeakMap
    } catch {}
    return !1
}

function bf(n) {
    if (!xs || !n || typeof n != "object") return !1;
    try {
        return xs.call(n), !0
    } catch {}
    return !1
}

function vf(n) {
    if (!Wr || !n || typeof n != "object") return !1;
    try {
        Wr.call(n);
        try {
            kr.call(n)
        } catch {
            return !0
        }
        return n instanceof Set
    } catch {}
    return !1
}

function Hf(n) {
    if (!Jt || !n || typeof n != "object") return !1;
    try {
        Jt.call(n, Jt);
        try {
            zt.call(n, zt)
        } catch {
            return !0
        }
        return n instanceof WeakSet
    } catch {}
    return !1
}

function kf(n) {
    return !n || typeof n != "object" ? !1 : typeof HTMLElement < "u" && n instanceof HTMLElement ? !0 : typeof n.nodeName == "string" && typeof n.getAttribute == "function"
}

function Bl(n, e) {
    if (n.length > e.maxStringLength) {
        var t = n.length - e.maxStringLength,
            r = "... " + t + " more character" + (t > 1 ? "s" : "");
        return Bl(xn.call(n, 0, e.maxStringLength), e) + r
    }
    var s = Le.call(Le.call(n, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Wf);
    return Gl(s, "single", e)
}

function Wf(n) {
    var e = n.charCodeAt(0),
        t = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + lf.call(e.toString(16))
}

function qt(n) {
    return "Object(" + n + ")"
}

function Pn(n) {
    return n + " { ? }"
}

function ao(n, e, t, r) {
    var s = r ? Bn(t, r) : Ae.call(t, ", ");
    return n + " (" + e + ") {" + s + "}"
}

function Pf(n) {
    for (var e = 0; e < n.length; e++)
        if (Il(n[e], `
`) >= 0) return !1;
    return !0
}

function Ef(n, e) {
    var t;
    if (n.indent === "	") t = "	";
    else if (typeof n.indent == "number" && n.indent > 0) t = Ae.call(Array(n.indent + 1), " ");
    else return null;
    return {
        base: t,
        prev: Ae.call(Array(e + 1), t)
    }
}

function Bn(n, e) {
    if (n.length === 0) return "";
    var t = `
` + e.prev + e.base;
    return t + Ae.call(n, "," + t) + `
` + e.prev
}

function yr(n, e) {
    var t = In(n),
        r = [];
    if (t) {
        r.length = n.length;
        for (var s = 0; s < n.length; s++) r[s] = Ge(n, s) ? e(n[s], n) : ""
    }
    var i = typeof Wn == "function" ? Wn(n) : [],
        l;
    if (Wt) {
        l = {};
        for (var a = 0; a < i.length; a++) l["$" + i[a]] = i[a]
    }
    for (var o in n) !Ge(n, o) || t && String(Number(o)) === o && o < n.length || Wt && l["$" + o] instanceof Symbol || (Nl.call(/[^\w$]/, o) ? r.push(e(o, n) + ": " + e(n[o], n)) : r.push(o + ": " + e(n[o], n)));
    if (typeof Wn == "function")
        for (var f = 0; f < i.length; f++) Ml.call(n, i[f]) && r.push("[" + e(i[f]) + "]: " + e(n[i[f]], n));
    return r
}
var es = Qn,
    At = Xa,
    Cf = ff,
    Af = es("%TypeError%"),
    dr = es("%WeakMap%", !0),
    Sr = es("%Map%", !0),
    Tf = At("WeakMap.prototype.get", !0),
    $f = At("WeakMap.prototype.set", !0),
    Of = At("WeakMap.prototype.has", !0),
    Rf = At("Map.prototype.get", !0),
    Nf = At("Map.prototype.set", !0),
    Mf = At("Map.prototype.has", !0),
    ts = function(n, e) {
        for (var t = n, r;
            (r = t.next) !== null; t = r)
            if (r.key === e) return t.next = r.next, r.next = n.next, n.next = r, r
    },
    Gf = function(n, e) {
        var t = ts(n, e);
        return t && t.value
    },
    Lf = function(n, e, t) {
        var r = ts(n, e);
        r ? r.value = t : n.next = {
            key: e,
            next: n.next,
            value: t
        }
    },
    If = function(n, e) {
        return !!ts(n, e)
    },
    Bf = function() {
        var e, t, r, s = {
            assert: function(i) {
                if (!s.has(i)) throw new Af("Side channel does not contain " + Cf(i))
            },
            get: function(i) {
                if (dr && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return Tf(e, i)
                } else if (Sr) {
                    if (t) return Rf(t, i)
                } else if (r) return Gf(r, i)
            },
            has: function(i) {
                if (dr && i && (typeof i == "object" || typeof i == "function")) {
                    if (e) return Of(e, i)
                } else if (Sr) {
                    if (t) return Mf(t, i)
                } else if (r) return If(r, i);
                return !1
            },
            set: function(i, l) {
                dr && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new dr), $f(e, i, l)) : Sr ? (t || (t = new Sr), Nf(t, i, l)) : (r || (r = {
                    key: {},
                    next: null
                }), Lf(r, i, l))
            }
        };
        return s
    },
    Ff = String.prototype.replace,
    qf = /%20/g,
    En = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    rs = {
        default: En.RFC3986,
        formatters: {
            RFC1738: function(n) {
                return Ff.call(n, qf, "+")
            },
            RFC3986: function(n) {
                return String(n)
            }
        },
        RFC1738: En.RFC1738,
        RFC3986: En.RFC3986
    },
    Df = rs,
    Cn = Object.prototype.hasOwnProperty,
    tt = Array.isArray,
    Pe = function() {
        for (var n = [], e = 0; e < 256; ++e) n.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return n
    }(),
    Uf = function(e) {
        for (; e.length > 1;) {
            var t = e.pop(),
                r = t.obj[t.prop];
            if (tt(r)) {
                for (var s = [], i = 0; i < r.length; ++i) typeof r[i] < "u" && s.push(r[i]);
                t.obj[t.prop] = s
            }
        }
    },
    Fl = function(e, t) {
        for (var r = t && t.plainObjects ? Object.create(null) : {}, s = 0; s < e.length; ++s) typeof e[s] < "u" && (r[s] = e[s]);
        return r
    },
    jf = function n(e, t, r) {
        if (!t) return e;
        if (typeof t != "object") {
            if (tt(e)) e.push(t);
            else if (e && typeof e == "object")(r && (r.plainObjects || r.allowPrototypes) || !Cn.call(Object.prototype, t)) && (e[t] = !0);
            else return [e, t];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(t);
        var s = e;
        return tt(e) && !tt(t) && (s = Fl(e, r)), tt(e) && tt(t) ? (t.forEach(function(i, l) {
            if (Cn.call(e, l)) {
                var a = e[l];
                a && typeof a == "object" && i && typeof i == "object" ? e[l] = n(a, i, r) : e.push(i)
            } else e[l] = i
        }), e) : Object.keys(t).reduce(function(i, l) {
            var a = t[l];
            return Cn.call(i, l) ? i[l] = n(i[l], a, r) : i[l] = a, i
        }, s)
    },
    Vf = function(e, t) {
        return Object.keys(t).reduce(function(r, s) {
            return r[s] = t[s], r
        }, e)
    },
    zf = function(n, e, t) {
        var r = n.replace(/\+/g, " ");
        if (t === "iso-8859-1") return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(r)
        } catch {
            return r
        }
    },
    Jf = function(e, t, r, s, i) {
        if (e.length === 0) return e;
        var l = e;
        if (typeof e == "symbol" ? l = Symbol.prototype.toString.call(e) : typeof e != "string" && (l = String(e)), r === "iso-8859-1") return escape(l).replace(/%u[0-9a-f]{4}/gi, function(c) {
            return "%26%23" + parseInt(c.slice(2), 16) + "%3B"
        });
        for (var a = "", o = 0; o < l.length; ++o) {
            var f = l.charCodeAt(o);
            if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || i === Df.RFC1738 && (f === 40 || f === 41)) {
                a += l.charAt(o);
                continue
            }
            if (f < 128) {
                a = a + Pe[f];
                continue
            }
            if (f < 2048) {
                a = a + (Pe[192 | f >> 6] + Pe[128 | f & 63]);
                continue
            }
            if (f < 55296 || f >= 57344) {
                a = a + (Pe[224 | f >> 12] + Pe[128 | f >> 6 & 63] + Pe[128 | f & 63]);
                continue
            }
            o += 1, f = 65536 + ((f & 1023) << 10 | l.charCodeAt(o) & 1023), a += Pe[240 | f >> 18] + Pe[128 | f >> 12 & 63] + Pe[128 | f >> 6 & 63] + Pe[128 | f & 63]
        }
        return a
    },
    Kf = function(e) {
        for (var t = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], r = [], s = 0; s < t.length; ++s)
            for (var i = t[s], l = i.obj[i.prop], a = Object.keys(l), o = 0; o < a.length; ++o) {
                var f = a[o],
                    c = l[f];
                typeof c == "object" && c !== null && r.indexOf(c) === -1 && (t.push({
                    obj: l,
                    prop: f
                }), r.push(c))
            }
        return Uf(t), e
    },
    Xf = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Qf = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Yf = function(e, t) {
        return [].concat(e, t)
    },
    Zf = function(e, t) {
        if (tt(e)) {
            for (var r = [], s = 0; s < e.length; s += 1) r.push(t(e[s]));
            return r
        }
        return t(e)
    },
    ql = {
        arrayToObject: Fl,
        assign: Vf,
        combine: Yf,
        compact: Kf,
        decode: zf,
        encode: Jf,
        isBuffer: Qf,
        isRegExp: Xf,
        maybeMap: Zf,
        merge: jf
    },
    Dl = Bf,
    Fn = ql,
    Kt = rs,
    xf = Object.prototype.hasOwnProperty,
    fo = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, t) {
            return e + "[" + t + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    Me = Array.isArray,
    eu = String.prototype.split,
    tu = Array.prototype.push,
    Ul = function(n, e) {
        tu.apply(n, Me(e) ? e : [e])
    },
    ru = Date.prototype.toISOString,
    uo = Kt.default,
    he = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Fn.encode,
        encodeValuesOnly: !1,
        format: uo,
        formatter: Kt.formatters[uo],
        indices: !1,
        serializeDate: function(e) {
            return ru.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    nu = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    An = {},
    su = function n(e, t, r, s, i, l, a, o, f, c, _, S, w, k, $, g) {
        for (var W = e, R = g, T = 0, v = !1;
            (R = R.get(An)) !== void 0 && !v;) {
            var A = R.get(e);
            if (T += 1, typeof A < "u") {
                if (A === T) throw new RangeError("Cyclic object value");
                v = !0
            }
            typeof R.get(An) > "u" && (T = 0)
        }
        if (typeof o == "function" ? W = o(t, W) : W instanceof Date ? W = _(W) : r === "comma" && Me(W) && (W = Fn.maybeMap(W, function(Se) {
                return Se instanceof Date ? _(Se) : Se
            })), W === null) {
            if (i) return a && !k ? a(t, he.encoder, $, "key", S) : t;
            W = ""
        }
        if (nu(W) || Fn.isBuffer(W)) {
            if (a) {
                var N = k ? t : a(t, he.encoder, $, "key", S);
                if (r === "comma" && k) {
                    for (var M = eu.call(String(W), ","), D = "", K = 0; K < M.length; ++K) D += (K === 0 ? "" : ",") + w(a(M[K], he.encoder, $, "value", S));
                    return [w(N) + (s && Me(W) && M.length === 1 ? "[]" : "") + "=" + D]
                }
                return [w(N) + "=" + w(a(W, he.encoder, $, "value", S))]
            }
            return [w(t) + "=" + w(String(W))]
        }
        var j = [];
        if (typeof W > "u") return j;
        var b;
        if (r === "comma" && Me(W)) b = [{
            value: W.length > 0 ? W.join(",") || null : void 0
        }];
        else if (Me(o)) b = o;
        else {
            var Q = Object.keys(W);
            b = f ? Q.sort(f) : Q
        }
        for (var V = s && Me(W) && W.length === 1 ? t + "[]" : t, U = 0; U < b.length; ++U) {
            var X = b[U],
                J = typeof X == "object" && typeof X.value < "u" ? X.value : W[X];
            if (!(l && J === null)) {
                var ie = Me(W) ? typeof r == "function" ? r(V, X) : V : V + (c ? "." + X : "[" + X + "]");
                g.set(e, T);
                var pe = Dl();
                pe.set(An, g), Ul(j, n(J, ie, r, s, i, l, a, o, f, c, _, S, w, k, $, pe))
            }
        }
        return j
    },
    ou = function(e) {
        if (!e) return he;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var t = e.charset || he.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var r = Kt.default;
        if (typeof e.format < "u") {
            if (!xf.call(Kt.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            r = e.format
        }
        var s = Kt.formatters[r],
            i = he.filter;
        return (typeof e.filter == "function" || Me(e.filter)) && (i = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : he.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? he.allowDots : !!e.allowDots,
            charset: t,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : he.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? he.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : he.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : he.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : he.encodeValuesOnly,
            filter: i,
            format: r,
            formatter: s,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : he.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : he.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : he.strictNullHandling
        }
    },
    lu = function(n, e) {
        var t = n,
            r = ou(e),
            s, i;
        typeof r.filter == "function" ? (i = r.filter, t = i("", t)) : Me(r.filter) && (i = r.filter, s = i);
        var l = [];
        if (typeof t != "object" || t === null) return "";
        var a;
        e && e.arrayFormat in fo ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
        var o = fo[a];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var f = o === "comma" && e && e.commaRoundTrip;
        s || (s = Object.keys(t)), r.sort && s.sort(r.sort);
        for (var c = Dl(), _ = 0; _ < s.length; ++_) {
            var S = s[_];
            r.skipNulls && t[S] === null || Ul(l, su(t[S], S, o, f, r.strictNullHandling, r.skipNulls, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, c))
        }
        var w = l.join(r.delimiter),
            k = r.addQueryPrefix === !0 ? "?" : "";
        return r.charsetSentinel && (r.charset === "iso-8859-1" ? k += "utf8=%26%2310003%3B&" : k += "utf8=%E2%9C%93&"), w.length > 0 ? k + w : ""
    },
    Pt = ql,
    qn = Object.prototype.hasOwnProperty,
    iu = Array.isArray,
    ue = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Pt.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    au = function(n) {
        return n.replace(/&#(\d+);/g, function(e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    },
    jl = function(n, e) {
        return n && typeof n == "string" && e.comma && n.indexOf(",") > -1 ? n.split(",") : n
    },
    fu = "utf8=%26%2310003%3B",
    uu = "utf8=%E2%9C%93",
    cu = function(e, t) {
        var r = {},
            s = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
            l = s.split(t.delimiter, i),
            a = -1,
            o, f = t.charset;
        if (t.charsetSentinel)
            for (o = 0; o < l.length; ++o) l[o].indexOf("utf8=") === 0 && (l[o] === uu ? f = "utf-8" : l[o] === fu && (f = "iso-8859-1"), a = o, o = l.length);
        for (o = 0; o < l.length; ++o)
            if (o !== a) {
                var c = l[o],
                    _ = c.indexOf("]="),
                    S = _ === -1 ? c.indexOf("=") : _ + 1,
                    w, k;
                S === -1 ? (w = t.decoder(c, ue.decoder, f, "key"), k = t.strictNullHandling ? null : "") : (w = t.decoder(c.slice(0, S), ue.decoder, f, "key"), k = Pt.maybeMap(jl(c.slice(S + 1), t), function($) {
                    return t.decoder($, ue.decoder, f, "value")
                })), k && t.interpretNumericEntities && f === "iso-8859-1" && (k = au(k)), c.indexOf("[]=") > -1 && (k = iu(k) ? [k] : k), qn.call(r, w) ? r[w] = Pt.combine(r[w], k) : r[w] = k
            } return r
    },
    pu = function(n, e, t, r) {
        for (var s = r ? e : jl(e, t), i = n.length - 1; i >= 0; --i) {
            var l, a = n[i];
            if (a === "[]" && t.parseArrays) l = [].concat(s);
            else {
                l = t.plainObjects ? Object.create(null) : {};
                var o = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a,
                    f = parseInt(o, 10);
                !t.parseArrays && o === "" ? l = {
                    0: s
                } : !isNaN(f) && a !== o && String(f) === o && f >= 0 && t.parseArrays && f <= t.arrayLimit ? (l = [], l[f] = s) : o !== "__proto__" && (l[o] = s)
            }
            s = l
        }
        return s
    },
    hu = function(e, t, r, s) {
        if (!!e) {
            var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                l = /(\[[^[\]]*])/,
                a = /(\[[^[\]]*])/g,
                o = r.depth > 0 && l.exec(i),
                f = o ? i.slice(0, o.index) : i,
                c = [];
            if (f) {
                if (!r.plainObjects && qn.call(Object.prototype, f) && !r.allowPrototypes) return;
                c.push(f)
            }
            for (var _ = 0; r.depth > 0 && (o = a.exec(i)) !== null && _ < r.depth;) {
                if (_ += 1, !r.plainObjects && qn.call(Object.prototype, o[1].slice(1, -1)) && !r.allowPrototypes) return;
                c.push(o[1])
            }
            return o && c.push("[" + i.slice(o.index) + "]"), pu(c, t, r, s)
        }
    },
    mu = function(e) {
        if (!e) return ue;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var t = typeof e.charset > "u" ? ue.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? ue.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : ue.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : ue.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : ue.arrayLimit,
            charset: t,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : ue.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : ue.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : ue.decoder,
            delimiter: typeof e.delimiter == "string" || Pt.isRegExp(e.delimiter) ? e.delimiter : ue.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : ue.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : ue.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : ue.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : ue.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : ue.strictNullHandling
        }
    },
    yu = function(n, e) {
        var t = mu(e);
        if (n === "" || n === null || typeof n > "u") return t.plainObjects ? Object.create(null) : {};
        for (var r = typeof n == "string" ? cu(n, t) : n, s = t.plainObjects ? Object.create(null) : {}, i = Object.keys(r), l = 0; l < i.length; ++l) {
            var a = i[l],
                o = hu(a, r[a], t, typeof n == "string");
            s = Pt.merge(s, o, t)
        }
        return t.allowSparse === !0 ? s : Pt.compact(s)
    },
    du = lu,
    Su = yu,
    _u = rs,
    wu = {
        formats: _u,
        parse: Su,
        stringify: du
    };

function Pr() {
    return Pr = Object.assign || function(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
        }
        return n
    }, Pr.apply(this, arguments)
}
var Vl = function() {
        var e = {
            headers: {}
        };
        return Zt.apiKey && (e.headers["X-Api-Key"] = Zt.apiKey), e
    },
    co = function(e, t) {
        return Al.get(Zt.host + "/" + e + (t && "?" + wu.stringify(t)), Vl()).then(function(r) {
            return r.data
        })
    };
const St = function(n) {
    return {
        find: function(t) {
            return Al(Zt.host + "/" + n + "/" + t, Vl()).then(function(r) {
                return r.data.data
            })
        },
        where: function(t) {
            return co(n, t)
        },
        all: function(t, r) {
            t === void 0 && (t = {}), r === void 0 && (r = []);
            var s = function i(l, a) {
                var o = a.page ? a.page + 1 : 1;
                return co(l, Pr({}, a, {
                    page: o
                })).then(function(f) {
                    var c;
                    return (c = r).push.apply(c, f.data), !f.totalCount || f.pageSize * f.page >= f.totalCount ? r : i(l, Pr({}, a, {
                        page: o
                    }))
                }).catch(function(f) {
                    return console.error(f)
                })
            };
            return s(n, t)
        }
    }
};
var gu = function(e) {
    var t = e.apiKey;
    Zt.apiKey = t
};
const po = {
        configure: gu,
        card: St("cards"),
        set: St("sets"),
        type: St("types"),
        subtype: St("subtypes"),
        rarity: St("rarities"),
        supertype: St("supertypes")
    },
    _t = [];

function bu(n, e) {
    return {
        subscribe: ns(n, e).subscribe
    }
}

function ns(n, e = C) {
    let t;
    const r = new Set;

    function s(a) {
        if (Ct(n, a) && (n = a, t)) {
            const o = !_t.length;
            for (const f of r) f[1](), _t.push(f, n);
            if (o) {
                for (let f = 0; f < _t.length; f += 2) _t[f][0](_t[f + 1]);
                _t.length = 0
            }
        }
    }

    function i(a) {
        s(a(n))
    }

    function l(a, o = C) {
        const f = [a, o];
        return r.add(f), r.size === 1 && (t = e(s) || C), a(n), () => {
            r.delete(f), r.size === 0 && (t(), t = null)
        }
    }
    return {
        set: s,
        update: i,
        subscribe: l
    }
}
const jt = ns(void 0);

function vu(n) {
    let e, t;
    const r = n[4].default,
        s = Kl(r, n, n[3], null);
    return {
        c() {
            e = O("section"), s && s.c(), H(e, "class", "card-grid svelte-jmfqas"), Ee(e, "active", n[1])
        },
        m(i, l) {
            m(i, e, l), s && s.m(e, null), n[5](e), t = !0
        },
        p(i, [l]) {
            s && s.p && (!t || l & 8) && Ql(s, r, i, i[3], t ? Xl(r, i[3], l, null) : Yl(i[3]), null), (!t || l & 2) && Ee(e, "active", i[1])
        },
        i(i) {
            t || (y(s, i), t = !0)
        },
        o(i) {
            d(s, i), t = !1
        },
        d(i) {
            i && h(e), s && s.d(i), n[5](null)
        }
    }
}

function Hu(n, e, t) {
    let r, s;
    Ne(n, jt, f => t(2, s = f));
    let {
        $$slots: i = {},
        $$scope: l
    } = e, a;

    function o(f) {
        Yt[f ? "unshift" : "push"](() => {
            a = f, t(0, a)
        })
    }
    return n.$$set = f => {
        "$$scope" in f && t(3, l = f.$$scope)
    }, n.$$.update = () => {
        n.$$.dirty & 5 && t(1, r = a && a.contains(s))
    }, [a, r, s, l, i, o]
}
class ae extends er {
    constructor(e) {
        super(), xt(this, e, Hu, vu, Ct, {})
    }
}
const ku = ["swsh12pt5gg-GG35", "swsh12pt5gg-GG36", "swsh12pt5gg-GG37", "swsh12pt5gg-GG38", "swsh12pt5gg-GG39", "swsh12pt5gg-GG40", "swsh12pt5gg-GG41", "swsh12pt5gg-GG42", "swsh12pt5gg-GG43", "swsh12pt5gg-GG44", "swsh12pt5gg-GG45", "swsh12pt5gg-GG46", "swsh12pt5gg-GG47", "swsh12pt5gg-GG48", "swsh12pt5gg-GG49", "swsh12pt5gg-GG50", "swsh12pt5gg-GG51", "swsh12pt5gg-GG52", "swsh12pt5gg-GG53", "swsh12pt5gg-GG54", "swsh12pt5gg-GG55", "swsh12pt5gg-GG56", "swsh12-177", "swsh12-181", "swsh12-184", "swsh12-186", "swsh12tg-TG12", "swsh12tg-TG13", "swsh12tg-TG14", "swsh12tg-TG15", "swsh12tg-TG16", "swsh12tg-TG17", "swsh12tg-TG18", "swsh12tg-TG19", "swsh12tg-TG20", "swsh12tg-TG21", "swsh12tg-TG22", "swsh11-177", "swsh11-180", "swsh11-186", "swsh11tg-TG12", "swsh11tg-TG13", "swsh11tg-TG14", "swsh11tg-TG15", "swsh11tg-TG16", "swsh11tg-TG17", "swsh11tg-TG18", "swsh11tg-TG19", "swsh11tg-TG20", "swsh11tg-TG21", "swsh11tg-TG22", "pgo-72", "pgo-74", "swsh10-161", "swsh10-163", "swsh10-167", "swsh10-172", "swsh10-175", "swsh10-177", "swsh10tg-TG13", "swsh10tg-TG14", "swsh10tg-TG15", "swsh10tg-TG16", "swsh10tg-TG17", "swsh10tg-TG18", "swsh10tg-TG19", "swsh10tg-TG20", "swsh10tg-TG21", "swsh10tg-TG22", "swsh10tg-TG23", "swsh9-154", "swsh9-156", "swsh9-162", "swsh9-166", "swsh9tg-TG13", "swsh9tg-TG14", "swsh9tg-TG15", "swsh9tg-TG16", "swsh9tg-TG17", "swsh9tg-TG18", "swsh9tg-TG19", "swsh9tg-TG20", "swsh9tg-TG21", "swsh9tg-TG22", "swsh9tg-TG23", "swsh8-245", "swsh8-251", "swsh8-252", "swsh8-255", "swsh8-257", "swsh8-266", "swsh8-269", "swsh8-270", "swsh8-271", "swsh7-167", "swsh7-175", "swsh7-180", "swsh7-182", "swsh7-184", "swsh7-186", "swsh7-189", "swsh7-192", "swsh7-194", "swsh7-196", "swsh7-198", "swsh7-205", "swsh7-209", "swsh7-212", "swsh7-215", "swsh7-218", "swsh7-220", "swsh6-164", "swsh6-166", "swsh6-168", "swsh6-170", "swsh6-172", "swsh6-174", "swsh6-177", "swsh6-179", "swsh6-183", "swsh6-185", "swsh6-201", "swsh6-203", "swsh6-205", "swsh5-146", "swsh5-151", "swsh5-153", "swsh5-155", "swsh5-168", "swsh5-170", "swshp-SWSH179", "swshp-SWSH180", "swshp-SWSH181", "swshp-SWSH182", "swshp-SWSH183", "swshp-SWSH184", "swshp-SWSH204", "swshp-SWSH260", "swshp-SWSH261", "swshp-SWSH262"],
    Wu = {
        "swshp-SWSH001": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH002": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH003": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH004": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH005": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH006": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH007": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH008": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH009": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH010": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH011": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH012": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH013": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH014": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH015": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH016": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH017": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH018": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH019": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH020": {
            style: "FlatSilver",
            etch: "Holo"
        },
        "swshp-SWSH021": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH022": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH023": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH024": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH025": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH026": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH027": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH028": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH029": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH030": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH031": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH032": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH033": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH034": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH035": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH036": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH037": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH038": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH039": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH040": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH041": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH042": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH043": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH044": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH045": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH046": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH047": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH048": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH049": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH050": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH051": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH052": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH053": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH054": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH055": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH056": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH057": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH058": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH059": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH060": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH061": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH062": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH063": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH064": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH065": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH066": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH067": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH068": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH069": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH070": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH071": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH072": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH073": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH076": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH077": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH078": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH079": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH080": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH081": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH082": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH083": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH084": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH085": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH086": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH087": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH088": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH089": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH090": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH091": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH092": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH093": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH094": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH095": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH096": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH097": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH098": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH099": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH100": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH101": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH102": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH103": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH104": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH105": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH106": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH107": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH108": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH109": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH110": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH111": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH112": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH113": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH114": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH115": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH116": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH117": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH118": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH119": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH120": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH121": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH122": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH123": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH124": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH125": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH126": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH127": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH128": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH129": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH130": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH131": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH132": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH133": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH134": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH135": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH136": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH137": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH138": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH139": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH140": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH141": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH142": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH143": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH144": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH145": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH146": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH147": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH148": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH149": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH150": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH151": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH152": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH153": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH154": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH155": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH156": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH157": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH158": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH159": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH160": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH161": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH162": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH163": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH164": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH165": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH166": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH167": {
            style: "None",
            etch: "None"
        },
        "swshp-SWSH168": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH169": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH170": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH171": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH172": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH173": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH174": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH175": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH176": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH178": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH179": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH180": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH181": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH182": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH183": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH184": {
            style: "SwSecret",
            etch: "Etched"
        },
        "swshp-SWSH185": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH186": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH187": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH188": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH189": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH190": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH191": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH192": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH193": {
            style: "None",
            etch: "None"
        },
        "swshp-SWSH194": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH195": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH196": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH197": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH198": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH199": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH200": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH201": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH202": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH203": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH204": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH205": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH206": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH207": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH208": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH209": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH210": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH211": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH212": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH213": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH214": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH215": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH216": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH217": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH218": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH219": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH220": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH221": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH222": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH223": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH224": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH225": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH226": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH227": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH228": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH229": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH230": {
            style: "RadiantHolo",
            etch: "Etched"
        },
        "swshp-SWSH231": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH232": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH233": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH234": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH235": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH236": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH237": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH238": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH239": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH240": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH241": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH242": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH243": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH244": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH245": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH246": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH247": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH248": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH249": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH250": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH252": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH253": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH254": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH255": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH256": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH257": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH258": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH259": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH260": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH261": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH262": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH263": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH264": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH265": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH266": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH267": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH268": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH269": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH270": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH271": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH272": {
            style: "SwHolo",
            etch: "Holo"
        },
        "swshp-SWSH273": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH274": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH275": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH276": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH277": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH278": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH279": {
            style: "Cosmos",
            etch: "Holo"
        },
        "swshp-SWSH280": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH281": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH291": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH294": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH295": {
            style: "SunPillar",
            etch: "Holo"
        },
        "swshp-SWSH296": {
            style: "Rainbow",
            etch: "Holo"
        },
        "swshp-SWSH297": {
            style: "SunPillar",
            etch: "Etched"
        },
        "swshp-SWSH298": {
            style: "SunPillar",
            etch: "Etched"
        }
    };

function ho(n) {
    return Object.prototype.toString.call(n) === "[object Date]"
}

function Dn(n, e, t, r) {
    if (typeof t == "number" || ho(t)) {
        const s = r - t,
            i = (t - e) / (n.dt || 1 / 60),
            l = n.opts.stiffness * s,
            a = n.opts.damping * i,
            o = (l - a) * n.inv_mass,
            f = (i + o) * n.dt;
        return Math.abs(f) < n.opts.precision && Math.abs(s) < n.opts.precision ? r : (n.settled = !1, ho(t) ? new Date(t.getTime() + f) : t + f)
    } else {
        if (Array.isArray(t)) return t.map((s, i) => Dn(n, e[i], t[i], r[i]));
        if (typeof t == "object") {
            const s = {};
            for (const i in t) s[i] = Dn(n, e[i], t[i], r[i]);
            return s
        } else throw new Error(`Cannot spring ${typeof t} values`)
    }
}

function wt(n, e = {}) {
    const t = ns(n),
        {
            stiffness: r = .15,
            damping: s = .8,
            precision: i = .01
        } = e;
    let l, a, o, f = n,
        c = n,
        _ = 1,
        S = 0,
        w = !1;

    function k(g, W = {}) {
        c = g;
        const R = o = {};
        return n == null || W.hard || $.stiffness >= 1 && $.damping >= 1 ? (w = !0, l = Hs(), f = g, t.set(n = c), Promise.resolve()) : (W.soft && (S = 1 / ((W.soft === !0 ? .5 : +W.soft) * 60), _ = 0), a || (l = Hs(), w = !1, a = Zl(T => {
            if (w) return w = !1, a = null, !1;
            _ = Math.min(_ + S, 1);
            const v = {
                    inv_mass: _,
                    opts: $,
                    settled: !0,
                    dt: (T - l) * 60 / 1e3
                },
                A = Dn(v, f, n, c);
            return l = T, f = n, t.set(n = A), v.settled && (a = null), !v.settled
        })), new Promise(T => {
            a.promise.then(() => {
                R === o && T()
            })
        }))
    }
    const $ = {
        set: k,
        update: (g, W) => k(g(c, n), W),
        subscribe: t.subscribe,
        stiffness: r,
        damping: s,
        precision: i
    };
    return $
}
const Tr = function(n) {
        return n ? {
            alpha: n.alpha,
            beta: n.beta,
            gamma: n.gamma
        } : {
            alpha: 0,
            beta: 0,
            gamma: 0
        }
    },
    mo = n => {
        const e = Tr(n);
        return {
            absolute: e,
            relative: {
                alpha: e.alpha - Xt.alpha,
                beta: e.beta - Xt.beta,
                gamma: e.gamma - Xt.gamma
            }
        }
    };
let Un = !0,
    Xt = Tr();
const Pu = () => {
        Un = !0, Xt = Tr()
    },
    Eu = bu(mo(), function(e) {
        const t = function(r) {
            Un && (Un = !1, Xt = Tr(r));
            const s = mo(r);
            e(s)
        };
        return window.addEventListener("deviceorientation", t, !0),
            function() {
                window.removeEventListener("deviceorientation", t, !0)
            }
    }),
    He = (n, e = 3) => parseFloat(n.toFixed(e)),
    Dt = (n, e = 0, t = 100) => Math.min(Math.max(n, e), t),
    gt = (n, e, t, r, s) => He(r + (s - r) * (n - e) / (t - e));
const {
    window: Cu
} = oi;

function Au(n) {
    let e, t, r, s, i, l, a, o, f, c, _, S, w, k, $, g, W, R, T;
    return {
        c() {
            e = O("div"), t = O("div"), r = O("button"), s = O("img"), l = E(), a = O("div"), o = O("img"), _ = E(), S = O("div"), w = E(), k = O("div"), H(s, "class", "card__back"), en(s.src, i = n[19]) || H(s, "src", i), H(s, "alt", "The back of a Reading club Magic Card, a Pokeball in the center with Pok logo above and below"), H(s, "loading", "lazy"), H(s, "width", "660"), H(s, "height", "921"), en(o.src, f = n[10]) || H(o, "src", f), H(o, "alt", c = "Front design of the " + n[5] + " Reading club Magic Card, with the stats and info around the edge"), H(o, "loading", "lazy"), H(o, "width", "660"), H(o, "height", "921"), H(S, "class", "card__shine"), H(k, "class", "card__glare"), H(a, "class", "card__front"), H(a, "style", $ = n[28] + n[17]), H(r, "class", "card__rotator"), H(r, "aria-label", g = "Expand the Reading club Magic Card; " + n[5] + "."), H(r, "tabindex", "0"), H(t, "class", "card__translater"), H(e, "class", W = "card " + n[1] + " / interactive /"), H(e, "data-number", n[0]), H(e, "data-set", n[6]), H(e, "data-subtypes", n[2]), H(e, "data-supertype", n[3]), H(e, "data-rarity", n[4]), H(e, "data-trainer-gallery", n[9]), H(e, "style", n[18]), Ee(e, "active", n[11]), Ee(e, "interacting", n[12]), Ee(e, "loading", n[13]), Ee(e, "masked", !!n[7])
        },
        m(v, A) {
            m(v, e, A), Y(e, t), Y(t, r), Y(r, s), Y(r, l), Y(r, a), Y(a, o), Y(a, _), Y(a, S), Y(a, w), Y(a, k), n[43](e), R || (T = [et(Cu, "scroll", n[27]), et(o, "load", n[29]), et(r, "click", n[25]), et(r, "pointermove", n[23]), et(r, "mouseout", n[24]), et(r, "blur", n[26])], R = !0)
        },
        p(v, A) {
            A[0] & 1024 && !en(o.src, f = v[10]) && H(o, "src", f), A[0] & 32 && c !== (c = "Front design of the " + v[5] + " Reading club Magic Card, with the stats and info around the edge") && H(o, "alt", c), A[0] & 131072 && $ !== ($ = v[28] + v[17]) && H(a, "style", $), A[0] & 32 && g !== (g = "Expand the Reading club Magic Card; " + v[5] + ".") && H(r, "aria-label", g), A[0] & 2 && W !== (W = "card " + v[1] + " / interactive /") && H(e, "class", W), A[0] & 1 && H(e, "data-number", v[0]), A[0] & 64 && H(e, "data-set", v[6]), A[0] & 4 && H(e, "data-subtypes", v[2]), A[0] & 8 && H(e, "data-supertype", v[3]), A[0] & 16 && H(e, "data-rarity", v[4]), A[0] & 512 && H(e, "data-trainer-gallery", v[9]), A[0] & 262144 && H(e, "style", v[18]), A[0] & 2050 && Ee(e, "active", v[11]), A[0] & 4098 && Ee(e, "interacting", v[12]), A[0] & 8194 && Ee(e, "loading", v[13]), A[0] & 130 && Ee(e, "masked", !!v[7])
        },
        i: C,
        o: C,
        d(v) {
            v && h(e), n[43](null), R = !1, Et(T)
        }
    }
}

function Tu(n, e, t) {
    let r, s, i, l, a, o, f, c, _;
    Ne(n, Eu, P => t(35, s = P)), Ne(n, jt, P => t(36, i = P));
    let {
        id: S = ""
    } = e, {
        name: w = ""
    } = e, {
        number: k = ""
    } = e, {
        set: $ = ""
    } = e, {
        types: g = ""
    } = e, {
        subtypes: W = "basic"
    } = e, {
        supertype: R = "pok\xE9mon"
    } = e, {
        rarity: T = "common"
    } = e, {
        img: v = ""
    } = e, {
        back: A = "https://alan0623.github.io/card/images/sm115/0_hires.png"
    } = e, {
        foil: N = ""
    } = e, {
        mask: M = ""
    } = e, {
        showcase: D = !1
    } = e;
    const K = {
            x: Math.random(),
            y: Math.random()
        },
        j = {
            x: Math.floor(K.x * 734),
            y: Math.floor(K.y * 1280)
        };
    let b = !1,
        Q = A,
        V = "",
        U = v.startsWith("http") ? "" : "https://alan0623.github.io/card/images/",
        X, J, ie = !1,
        pe = !1,
        Se = !0,
        lt = !0,
        be = document.visibilityState === "visible";
    const _e = {
            stiffness: .066,
            damping: .25
        },
        Te = {
            stiffness: .033,
            damping: .45
        };
    let te = wt({
        x: 0,
        y: 0
    }, _e);
    Ne(n, te, P => t(41, c = P));
    let re = wt({
        x: 50,
        y: 50,
        o: 0
    }, _e);
    Ne(n, re, P => t(42, _ = P));
    let ne = wt({
        x: 50,
        y: 50
    }, _e);
    Ne(n, ne, P => t(39, o = P));
    let we = wt({
        x: 0,
        y: 0
    }, Te);
    Ne(n, we, P => t(40, f = P));
    let $e = wt({
        x: 0,
        y: 0
    }, Te);
    Ne(n, $e, P => t(37, l = P));
    let ve = wt(1, Te);
    Ne(n, ve, P => t(38, a = P));
    let Be, Fe, it, qe = D;
    const at = () => {
            qe && (clearTimeout(it), clearTimeout(Fe), clearInterval(Be), qe = !1)
        },
        Oe = P => {
            if (at(), !be || i && i !== X) return t(12, pe = !1);
            t(12, pe = !0), P.type === "touchmove" && (P.clientX = P.touches[0].clientX, P.clientY = P.touches[0].clientY);
            const Z = P.target.getBoundingClientRect(),
                x = {
                    x: P.clientX - Z.left,
                    y: P.clientY - Z.top
                },
                fe = {
                    x: Dt(He(100 / Z.width * x.x)),
                    y: Dt(He(100 / Z.height * x.y))
                },
                Ve = {
                    x: fe.x - 50,
                    y: fe.y - 50
                };
            je({
                x: gt(fe.x, 0, 100, 37, 63),
                y: gt(fe.y, 0, 100, 33, 67)
            }, {
                x: He(-(Ve.x / 3.5)),
                y: He(Ve.y / 2)
            }, {
                x: He(fe.x),
                y: He(fe.y),
                o: 1
            })
        },
        We = (P, se = 500) => {
            setTimeout(function() {
                t(12, pe = !1), t(14, te.stiffness = .01, te), t(14, te.damping = .06, te), te.set({
                    x: 0,
                    y: 0
                }, {
                    soft: 1
                }), t(15, re.stiffness = .01, re), t(15, re.damping = .06, re), re.set({
                    x: 50,
                    y: 50,
                    o: 0
                }, {
                    soft: 1
                }), t(16, ne.stiffness = .01, ne), t(16, ne.damping = .06, ne), ne.set({
                    x: 50,
                    y: 50
                }, {
                    soft: 1
                })
            }, se)
        },
        De = P => {
            i && i === X ? tn(jt, i = void 0, i) : (tn(jt, i = X, i), Pu(), gtag("event", "select_item", {
                item_list_id: "cards_list",
                item_list_name: "Reading club Magic Cards",
                items: [{
                    item_id: S,
                    item_name: w,
                    item_category: $,
                    item_category2: R,
                    item_category3: W,
                    item_category4: T
                }]
            }))
        },
        Tt = P => {
            We(), tn(jt, i = void 0, i)
        },
        ft = P => {
            clearTimeout(J), J = setTimeout(() => {
                i && i === X && ut()
            }, 300)
        },
        ut = () => {
            const P = X.getBoundingClientRect(),
                se = document.documentElement,
                Z = {
                    x: He(se.clientWidth / 2 - P.x - P.width / 2),
                    y: He(se.clientHeight / 2 - P.y - P.height / 2)
                };
            $e.set({
                x: Z.x,
                y: Z.y
            })
        },
        ct = () => {
            const P = X.getBoundingClientRect();
            let se = 100,
                Z = window.innerWidth / P.width * .9,
                x = window.innerHeight / P.height * .9,
                fe = 1.75;
            ut(), Se && (se = 1e3, we.set({
                x: 360,
                y: 0
            })), Se = !1, ve.set(Math.min(Z, x, fe)), We(null, se)
        },
        $t = () => {
            ve.set(1, {
                soft: !0
            }), $e.set({
                x: 0,
                y: 0
            }, {
                soft: !0
            }), we.set({
                x: 0,
                y: 0
            }, {
                soft: !0
            }), We(null, 100)
        },
        Re = () => {
            We(null, 0), ve.set(1, {
                hard: !0
            }), $e.set({
                x: 0,
                y: 0
            }, {
                hard: !0
            }), we.set({
                x: 0,
                y: 0
            }, {
                hard: !0
            }), te.set({
                x: 0,
                y: 0
            }, {
                hard: !0
            })
        };
    let pt = "";
    const Ue = `
    --seedx: ${K.x};
    --seedy: ${K.y};
    --cosmosbg: ${j.x}px ${j.y}px;
  `,
        Ot = P => {
            const se = P.relative.gamma,
                Z = P.relative.beta,
                x = {
                    x: 16,
                    y: 18
                },
                fe = {
                    x: Dt(se, -x.x, x.x),
                    y: Dt(Z, -x.y, x.y)
                };
            je({
                x: gt(fe.x, -x.x, x.x, 37, 63),
                y: gt(fe.y, -x.y, x.y, 33, 67)
            }, {
                x: He(fe.x * -1),
                y: He(fe.y)
            }, {
                x: gt(fe.x, -x.x, x.x, 0, 100),
                y: gt(fe.y, -x.y, x.y, 0, 100),
                o: 1
            })
        },
        je = (P, se, Z) => {
            t(16, ne.stiffness = _e.stiffness, ne), t(16, ne.damping = _e.damping, ne), t(14, te.stiffness = _e.stiffness, te), t(14, te.damping = _e.damping, te), t(15, re.stiffness = _e.stiffness, re), t(15, re.damping = _e.damping, re), ne.set(P), te.set(se), re.set(Z)
        };
    document.addEventListener("visibilitychange", P => {
        be = document.visibilityState === "visible", at(), Re()
    });
    const Rt = P => {
        t(13, lt = !1), (M || N) && t(17, pt = `
    --mask: url(${M});
    --foil: url(${N});
      `)
    };
    pl(() => {
        if (t(10, V = U + v), D && be) {
            let Z = 0;
            Fe = setTimeout(() => {
                if (t(12, pe = !0), t(11, ie = !0), t(14, te.stiffness = .02, te), t(14, te.damping = .5, te), t(15, re.stiffness = .02, re), t(15, re.damping = .5, re), t(16, ne.stiffness = .02, ne), t(16, ne.damping = .5, ne), be) Be = setInterval(function() {
                    Z += .05, te.set({
                        x: Math.sin(Z) * 25,
                        y: Math.cos(Z) * 25
                    }), re.set({
                        x: 55 + Math.sin(Z) * 55,
                        y: 55 + Math.cos(Z) * 55,
                        o: .8
                    }), ne.set({
                        x: 20 + Math.sin(Z) * 20,
                        y: 20 + Math.cos(Z) * 20
                    })
                }, 20), it = setTimeout(() => {
                    clearInterval(Be), We(null, 0)
                }, 4e3);
                else {
                    t(12, pe = !1), t(11, ie = !1);
                    return
                }
            }, 2e3)
        }
    });

    function ht(P) {
        Yt[P ? "unshift" : "push"](() => {
            X = P, t(8, X)
        })
    }
    return n.$$set = P => {
        "id" in P && t(30, S = P.id), "name" in P && t(5, w = P.name), "number" in P && t(0, k = P.number), "set" in P && t(6, $ = P.set), "types" in P && t(1, g = P.types), "subtypes" in P && t(2, W = P.subtypes), "supertype" in P && t(3, R = P.supertype), "rarity" in P && t(4, T = P.rarity), "img" in P && t(31, v = P.img), "back" in P && t(32, A = P.back), "foil" in P && t(33, N = P.foil), "mask" in P && t(7, M = P.mask), "showcase" in P && t(34, D = P.showcase)
    }, n.$$.update = () => {
        n.$$.dirty[0] & 256 | n.$$.dirty[1] & 32 && (i && i === X ? (ct(), t(11, ie = !0)) : ($t(), t(11, ie = !1))), n.$$.dirty[1] & 4032 && t(18, r = `
    --pointer-x: ${_.x}%;
    --pointer-y: ${_.y}%;
    --pointer-from-center: ${Dt(Math.sqrt((_.y-50)*(_.y-50)+(_.x-50)*(_.x-50))/50,0,1)};
    --pointer-from-top: ${_.y/100};
    --pointer-from-left: ${_.x/100};
    --card-opacity: ${_.o};
    --rotate-x: ${c.x+f.x}deg;
    --rotate-y: ${c.y+f.y}deg;
    --background-x: ${o.x}%;
    --background-y: ${o.y}%;
    --card-scale: ${a};
    --translate-x: ${l.x}px;
    --translate-y: ${l.y}px;
	`), n.$$.dirty[0] & 1073741855 && (t(4, T = T.toLowerCase()), t(3, R = R.toLowerCase()), t(0, k = k.toLowerCase()), t(9, b = !!k.match(/^[tg]g/i) || S === "swshp-SWSH076" || S === "swshp-SWSH077"), Array.isArray(g) && t(1, g = g.join(" ").toLowerCase()), Array.isArray(W) && t(2, W = W.join(" ").toLowerCase())), n.$$.dirty[0] & 256 | n.$$.dirty[1] & 48 && i && i === X && (t(12, pe = !0), Ot(s))
    }, [k, g, W, R, T, w, $, M, X, b, V, ie, pe, lt, te, re, ne, pt, r, Q, we, $e, ve, Oe, We, De, Tt, ft, Ue, Rt, S, v, A, N, D, s, i, l, a, o, f, c, _, ht]
}
class $u extends er {
    constructor(e) {
        super(), xt(this, e, Tu, Au, Ct, {
            id: 30,
            name: 5,
            number: 0,
            set: 6,
            types: 1,
            subtypes: 2,
            supertype: 3,
            rarity: 4,
            img: 31,
            back: 32,
            foil: 33,
            mask: 7,
            showcase: 34
        }, null, [-1, -1, -1])
    }
}

function Ou(n) {
    let e, t;
    const r = [n[0]];
    let s = {};
    for (let i = 0; i < r.length; i += 1) s = ol(s, r[i]);
    return e = new $u({
        props: s
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(i, l) {
            G(e, i, l), t = !0
        },
        p(i, [l]) {
            const a = l & 1 ? ai(r, [fi(i[0])]) : {};
            e.$set(a)
        },
        i(i) {
            t || (y(e.$$.fragment, i), t = !0)
        },
        o(i) {
            d(e.$$.fragment, i), t = !1
        },
        d(i) {
            L(e, i)
        }
    }
}

function ee(n) {
    return typeof n < "u" && n !== null
}

function Ru(n, e, t) {
    let {
        id: r = void 0
    } = e, {
        name: s = void 0
    } = e, {
        number: i = void 0
    } = e, {
        set: l = void 0
    } = e, {
        types: a = void 0
    } = e, {
        subtypes: o = void 0
    } = e, {
        supertype: f = void 0
    } = e, {
        rarity: c = void 0
    } = e, {
        isReverse: _ = !1
    } = e, {
        img: S = void 0
    } = e, {
        back: w = void 0
    } = e, {
        foil: k = void 0
    } = e, {
        mask: $ = void 0
    } = e, {
        showcase: g = !1
    } = e;
    const W = "https://alan0623.github.io/card/images",
        R = ee(i) && i.toLowerCase().startsWith("sv"),
        T = ee(i) && !!i.match(/^[tg]g/i),
        v = ee(r) && ku.includes(r) && !R && !T,
        A = ee(l) && l === "swshp";
    _ && (c = c + " Reverse Holo"), T && (ee(c) && c.startsWith("Trainer Gallery") && (c = c.replace(/Trainer Gallery\s*/, "")), ee(c) && c.includes("Rare Holo V") && ee(o) && o.includes("VMAX") && (c = "Rare Holo VMAX"), ee(c) && c.includes("Rare Holo V") && ee(o) && o.includes("VSTAR") && (c = "Rare Holo VSTAR")), A && (r === "swshp-SWSH076" || r === "swshp-SWSH077" ? c = "Rare Secret" : ee(o) && o.includes("V") ? c = "Rare Holo V" : ee(o) && o.includes("V-UNION") ? c = "Rare Holo VUNION" : ee(o) && o.includes("VMAX") ? c = "Rare Holo VMAX" : ee(o) && o.includes("VSTAR") ? c = "Rare Holo VSTAR" : ee(o) && o.includes("Radiant") && (c = "Radiant Rare"));

    function N() {
        return ee(S) ? S : ee(l) && ee(i) ? `https://alan0623.github.io/card/images/${l.toLowerCase()}/${i}_hires.png` : ""
    }

    function M(b, Q = "masks") {
        let V = "holo",
            U = "reverse",
            X = "webp";
        if (ee(b)) return b === !1 ? "" : b;
        if (!ee(c) || !ee(o) || !ee(f) || !ee(l) || !ee(i)) return "";
        const J = c.toLowerCase(),
            ie = i.toString().toLowerCase().replace("swsh", "").padStart(3, "0"),
            pe = l.toString().toLowerCase().replace(/(tg|gg|sv)/, "");
        if (J === "rare holo" && (U = "swholo"), J === "rare holo cosmos" && (U = "cosmos"), J === "radiant rare" && (V = "etched", U = "radiantholo"), (J === "rare holo v" || J === "rare holo vunion" || J === "basic v") && (V = "holo", U = "sunpillar"), (J === "rare holo vmax" || J === "rare ultra" || J === "rare holo vstar") && (V = "etched", U = "sunpillar"), (J === "amazing rare" || J === "rare rainbow" || J === "rare secret") && (V = "etched", U = "swsecret"), R && (V = "etched", U = "sunpillar", (J === "rare shiny v" || J === "rare holo v" && ie.startsWith("sv")) && t(1, c = "Rare Shiny V"), (J === "rare shiny vmax" || J === "rare holo vmax" && ie.startsWith("sv")) && (U = "swsecret", t(1, c = "Rare Shiny VMAX"))), T && (V = "holo", U = "rainbow", (J.includes("rare holo v") || J.includes("rare ultra")) && (V = "etched", U = "sunpillar"), J.includes("rare secret") && (V = "etched", U = "swsecret")), v && (V = "etched", o.includes("VMAX") ? (U = "swsecret", t(1, c = "Rare Rainbow Alt")) : U = "sunpillar"), A) {
            let Se = Wu[r];
            Se && (U = Se.style.toLowerCase(), V = Se.etch.toLowerCase(), U === "swholo" ? t(1, c = "Rare Holo") : U === "cosmos" && t(1, c = "Rare Holo Cosmos"))
        }
        return `${W}/foils/${pe}/${Q}/upscaled/${ie}_foil_${V}_${U}_2x.${X}`
    }

    function D() {
        return M(k, "foils")
    }

    function K() {
        return M($, "masks")
    }
    const j = {
        img: N(),
        back: w,
        foil: D(),
        mask: K(),
        id: r,
        name: s,
        number: i,
        set: l,
        types: a,
        subtypes: o,
        supertype: f,
        rarity: c,
        showcase: g
    };
    return n.$$set = b => {
        "id" in b && t(2, r = b.id), "name" in b && t(3, s = b.name), "number" in b && t(4, i = b.number), "set" in b && t(5, l = b.set), "types" in b && t(6, a = b.types), "subtypes" in b && t(7, o = b.subtypes), "supertype" in b && t(8, f = b.supertype), "rarity" in b && t(1, c = b.rarity), "isReverse" in b && t(9, _ = b.isReverse), "img" in b && t(10, S = b.img), "back" in b && t(11, w = b.back), "foil" in b && t(12, k = b.foil), "mask" in b && t(13, $ = b.mask), "showcase" in b && t(14, g = b.showcase)
    }, [j, c, r, s, i, l, a, o, f, _, S, w, k, $, g]
}
class le extends er {
    constructor(e) {
        super(), xt(this, e, Ru, Ou, Ct, {
            id: 2,
            name: 3,
            number: 4,
            set: 5,
            types: 6,
            subtypes: 7,
            supertype: 8,
            rarity: 1,
            isReverse: 9,
            img: 10,
            back: 11,
            foil: 12,
            mask: 13,
            showcase: 14
        })
    }
}

function yo(n, e, t) {
    const r = n.slice();
    return r[8] = e[t], r[10] = t, r
}

function So(n) {
    let e;
    return {
        c() {
            e = O("h3"), e.textContent = "Browse cards below, Or search for your favourite!", H(e, "class", "svelte-1leehxl")
        },
        m(t, r) {
            m(t, e, r)
        },
        d(t) {
            t && h(e)
        }
    }
}

function _o(n) {
    let e;
    return {
        c() {
            e = O("h3"), e.textContent = "Fetching Cards...", H(e, "class", "svelte-1leehxl")
        },
        m(t, r) {
            m(t, e, r)
        },
        d(t) {
            t && h(e)
        }
    }
}

function wo(n) {
    let e, t;
    return e = new ae({
        props: {
            $$slots: {
                default: [Nu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s & 2052 && (i.$$scope = {
                dirty: s,
                ctx: r
            }), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function go(n, e) {
    let t, r, s;
    return r = new le({
        props: {
            id: e[8].id,
            name: e[8].name,
            set: e[8].set,
            number: e[8].number,
            types: e[8].types,
            supertype: e[8].supertype,
            subtypes: e[8].subtypes,
            rarity: e[8].rarity,
            isReverse: e[8].isReverse
        }
    }), {
        key: n,
        first: null,
        c() {
            t = q(), I(r.$$.fragment), this.first = t
        },
        m(i, l) {
            m(i, t, l), G(r, i, l), s = !0
        },
        p(i, l) {
            e = i;
            const a = {};
            l & 4 && (a.id = e[8].id), l & 4 && (a.name = e[8].name), l & 4 && (a.set = e[8].set), l & 4 && (a.number = e[8].number), l & 4 && (a.types = e[8].types), l & 4 && (a.supertype = e[8].supertype), l & 4 && (a.subtypes = e[8].subtypes), l & 4 && (a.rarity = e[8].rarity), l & 4 && (a.isReverse = e[8].isReverse), r.$set(a)
        },
        i(i) {
            s || (y(r.$$.fragment, i), s = !0)
        },
        o(i) {
            d(r.$$.fragment, i), s = !1
        },
        d(i) {
            i && h(t), L(r, i)
        }
    }
}

function Nu(n) {
    let e = [],
        t = new Map,
        r, s, i = n[2];
    const l = a => a[8].id;
    for (let a = 0; a < i.length; a += 1) {
        let o = yo(n, i, a),
            f = l(o);
        t.set(f, e[a] = go(f, o))
    }
    return {
        c() {
            for (let a = 0; a < e.length; a += 1) e[a].c();
            r = q()
        },
        m(a, o) {
            for (let f = 0; f < e.length; f += 1) e[f].m(a, o);
            m(a, r, o), s = !0
        },
        p(a, o) {
            o & 4 && (i = a[2], B(), e = ii(e, o, l, 1, a, i, t, r.parentNode, li, go, r, yo), F())
        },
        i(a) {
            if (!s) {
                for (let o = 0; o < i.length; o += 1) y(e[o]);
                s = !0
            }
        },
        o(a) {
            for (let o = 0; o < e.length; o += 1) d(e[o]);
            s = !1
        },
        d(a) {
            for (let o = 0; o < e.length; o += 1) e[o].d(a);
            a && h(r)
        }
    }
}

function bo(n) {
    let e, t, r, s;
    return r = new ae({
        props: {
            $$slots: {
                default: [Mu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            e = O("h3"), e.textContent = "Error: No cards found with that name.", t = E(), I(r.$$.fragment), H(e, "class", "svelte-1leehxl")
        },
        m(i, l) {
            m(i, e, l), m(i, t, l), G(r, i, l), s = !0
        },
        i(i) {
            s || (y(r.$$.fragment, i), s = !0)
        },
        o(i) {
            d(r.$$.fragment, i), s = !1
        },
        d(i) {
            i && h(e), i && h(t), L(r, i)
        }
    }
}

function Mu(n) {
    let e, t;
    return e = new le({
        props: {
            id: "basep-16",
            name: "Computer Error",
            set: "basep",
            number: "16",
            img: "https://alan0623.github.io/card/images/sm115/1_hires.png",
            supertype: "Trainer",
            subtypes: "Rocket's Secret Machine",
            rarity: "Promo",
            isReverse: !1
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p: C,
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Gu(n) {
    let e, t, r, s, i, l, a, o, f, c, _, S, w, k, $, g = !n[0] && So(),
        W = n[4] && n[1] && _o(),
        R = n[4] && n[2].length && wo(n),
        T = (n[3] || n[4] && !n[1] && !n[2].length) && bo(n);
    return {
        c() {
            e = O("section"), t = O("input"), r = E(), s = hr("svg"), i = hr("path"), l = hr("path"), a = hr("path"), o = E(), g && g.c(), f = E(), W && W.c(), c = E(), R && R.c(), _ = E(), T && T.c(), S = q(), H(t, "type", "search"), H(t, "name", "search"), H(t, "id", "search"), H(t, "placeholder", "eg: Morpeko or Marnie"), H(t, "class", "svelte-1leehxl"), H(i, "stroke", "none"), H(i, "d", "M0 0h24v24H0z"), H(i, "fill", "none"), H(l, "d", "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"), H(a, "d", "M21 21l-6 -6"), H(s, "xmlns", "http://www.w3.org/2000/svg"), H(s, "class", "icon icon-tabler icon-tabler-search svelte-1leehxl"), H(s, "width", "24"), H(s, "height", "24"), H(s, "viewBox", "0 0 24 24"), H(s, "stroke-width", "1.25"), H(s, "stroke", "currentColor"), H(s, "fill", "none"), H(s, "stroke-linecap", "round"), H(s, "stroke-linejoin", "round"), H(e, "class", "search-area svelte-1leehxl")
        },
        m(v, A) {
            m(v, e, A), Y(e, t), ks(t, n[0]), Y(e, r), Y(e, s), Y(s, i), Y(s, l), Y(s, a), m(v, o, A), g && g.m(v, A), m(v, f, A), W && W.m(v, A), m(v, c, A), R && R.m(v, A), m(v, _, A), T && T.m(v, A), m(v, S, A), w = !0, k || ($ = et(t, "input", n[5]), k = !0)
        },
        p(v, [A]) {
            A & 1 && ks(t, v[0]), v[0] ? g && (g.d(1), g = null) : g || (g = So(), g.c(), g.m(f.parentNode, f)), v[4] && v[1] ? W || (W = _o(), W.c(), W.m(c.parentNode, c)) : W && (W.d(1), W = null), v[4] && v[2].length ? R ? (R.p(v, A), A & 20 && y(R, 1)) : (R = wo(v), R.c(), y(R, 1), R.m(_.parentNode, _)) : R && (B(), d(R, 1, 1, () => {
                R = null
            }), F()), v[3] || v[4] && !v[1] && !v[2].length ? T ? A & 30 && y(T, 1) : (T = bo(v), T.c(), y(T, 1), T.m(S.parentNode, S)) : T && (B(), d(T, 1, 1, () => {
                T = null
            }), F())
        },
        i(v) {
            w || (y(R), y(T), w = !0)
        },
        o(v) {
            d(R), d(T), w = !1
        },
        d(v) {
            v && h(e), v && h(o), g && g.d(v), v && h(f), W && W.d(v), v && h(c), R && R.d(v), v && h(_), T && T.d(v), v && h(S), k = !1, $()
        }
    }
}

function Lu(n, e, t) {
    let r, {
            query: s = ""
        } = e,
        i = !0,
        l, a = [],
        o = !1;
    po.configure({
        apiKey: {
            VITE_CDN: "https://alan0623.github.io/card/images",
            VITE_GA: "G-3SKXCY5997",
            BASE_URL: "/",
            MODE: "production",
            DEV: !1,
            PROD: !0
        }.VITE_API_KEY
    });
    const f = async () => {
        !r || (t(1, i = !0), clearTimeout(l), l = setTimeout(() => {
            po.card.where({
                q: `( set.id:swsh* AND name:"*${s}*" )`,
                select: "id,name,number,supertype,subtypes,rarity,images,types,set",
                orderBy: "-set.releaseDate,-number",
                pageSize: 36
            }).then(_ => {
                const S = _.data || [];
                t(2, a = []), t(3, o = !1);
                let w = S.slice(0, 36).map(k => ((k.rarity === "Common" || k.rarity === "Uncommon") && (k.isReverse = !!Math.round(Math.random())), k.set = k.set.id, k));
                t(2, a = [...w]), t(1, i = !1)
            }).catch((_, S, w) => {
                t(2, a = []), t(1, i = !1), t(3, o = !0)
            }), gtag("event", "search", {
                search_term: s
            })
        }, 666))
    };

    function c() {
        s = this.value, t(0, s)
    }
    return n.$$set = _ => {
        "query" in _ && t(0, s = _.query)
    }, n.$$.update = () => {
        n.$$.dirty & 1 && t(4, r = s.length > 2), n.$$.dirty & 1 && s && f()
    }, [s, i, a, o, r, c]
}
class Iu extends er {
    constructor(e) {
        super(), xt(this, e, Lu, Gu, Ct, {
            query: 0
        })
    }
}

function vo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Ho(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function ko(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Wo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Po(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Eo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Co(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Ao(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function To(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function $o(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Oo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Ro(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function No(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Mo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Go(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Lo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Io(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Bo(n, e, t) {
    const r = n.slice();
    return r[24] = e[t], r[26] = t, r
}

function Bu(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[0].id,
            name: n[0].name,
            set: n[0].set,
            number: n[0].number,
            types: n[0].types,
            supertype: n[0].supertype,
            subtypes: n[0].subtypes,
            rarity: n[0].rarity,
            isReverse: n[0].isReverse,
            showcase: !0
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 1 && (i.id = r[0].id), s[0] & 1 && (i.name = r[0].name), s[0] & 1 && (i.set = r[0].set), s[0] & 1 && (i.number = r[0].number), s[0] & 1 && (i.types = r[0].types), s[0] & 1 && (i.supertype = r[0].supertype), s[0] & 1 && (i.subtypes = r[0].subtypes), s[0] & 1 && (i.rarity = r[0].rarity), s[0] & 1 && (i.isReverse = r[0].isReverse), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Fu(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Fo(n) {
    let e, t, r, s, i, l, a, o, f, c, _, S, w, k, $, g, W, R, T, v, A, N, M, D, K, j, b, Q, V, U, X, J, ie, pe, Se, lt, be, _e, Te, te, re, ne, we, $e, ve, Be, Fe, it, qe, at, Oe, We, De, Tt, ft, ut, ct, $t, Re, pt, Ue, Ot, je, Rt, ht, P, se, Z, x, fe, Ve, $r, ze, Or, Nt, Rr, nr, Nr, sr, Mr, Je, Gr, Mt, Lr, or, Ir, Ke, Br, Gt, Fr, lr, qr, Xe, Dr, Lt, Ur, ir, jr, Qe, Vr, It, zr, ar, Jr, Ye, Kr, Bt, Xr, fr, Qr, Ze, Yr, Ft, Zr, ur, xr, xe, cr;
    return i = new ae({
        props: {
            $$slots: {
                default: [Uu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), _ = new ae({
        props: {
            $$slots: {
                default: [zu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), W = new ae({
        props: {
            $$slots: {
                default: [Xu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), K = new ae({
        props: {
            $$slots: {
                default: [Zu]
            },
            $$scope: {
                ctx: n
            }
        }
    }), X = new ae({
        props: {
            $$slots: {
                default: [tc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), be = new ae({
        props: {
            $$slots: {
                default: [sc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), we = new ae({
        props: {
            $$slots: {
                default: [ic]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Oe = new ae({
        props: {
            $$slots: {
                default: [uc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Re = new ae({
        props: {
            $$slots: {
                default: [hc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), se = new ae({
        props: {
            $$slots: {
                default: [dc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), ze = new ae({
        props: {
            $$slots: {
                default: [wc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Je = new ae({
        props: {
            $$slots: {
                default: [vc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Ke = new ae({
        props: {
            $$slots: {
                default: [Wc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Xe = new ae({
        props: {
            $$slots: {
                default: [Cc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Qe = new ae({
        props: {
            $$slots: {
                default: [$c]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Ye = new ae({
        props: {
            $$slots: {
                default: [Nc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), Ze = new ae({
        props: {
            $$slots: {
                default: [Lc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), xe = new ae({
        props: {
            $$slots: {
                default: [Fc]
            },
            $$scope: {
                ctx: n
            }
        }
    }), {
        c() {
            e = O("h2"), e.innerHTML = '<a href="#-common">奇幻風格</a>', t = E(), r = O("p"), r.innerHTML = `All cards get a 3d rotation with CSS based on the cursor position.<br/> The default basic
			non-holo cards simply apply a <mark>flare/glare effect</mark> to the card which follows the mouse.`, s = E(), I(i.$$.fragment), l = E(), 

        
            a = O("h2"), a.innerHTML = '<a href="#-reverse">BBB</a>', o = E(), f = O("p"), f.innerHTML = `Reverse holo cards come in <mark>many shapes and sizes</mark> (trainer, stage1, and different energy types). <br/> Therefore
			there are a few examples here to show the different variations. The <mark>background uses a foil and a mask layer</mark>
			along with a glare. I also <mark>clip the glare</mark> into the image window to treat the image and the holofoil differently.`, c = E(), I(_.$$.fragment), S = E(), 
            
            w = O("h2"), w.innerHTML = '<a href="#-holo">CCC</a>', k = E(), $ = O("p"), $.innerHTML = `Holo cards have an additional <mark>vertical beam holo effect</mark>. <br/> This uses a
			combintation of <mark>repeating gradients and filters</mark>, with <mark>clip-path</mark> to mask
			the holo areas for each stage. To get the holo effect to change while rotating the card I set the
			background-position of each gradient layer based on cursor.`, g = E(), I(W.$$.fragment), R = E(), 
            
            T = O("h2"), T.innerHTML = '<a href="#-galaxy">童趣類型</a>', v = E(), A = O("p"), A.innerHTML = `Similar to the Holofoil, but this uses a special image <mark>background of a galaxy effect</mark>
			with a <mark>gradient rainbow set to color-dodge &amp; color-burn</mark> on top.`, N = E(), M = O("h3"), M.textContent = "An instant classic for any PTCG fan!", D = E(), I(K.$$.fragment), j = E(), b = O("h2"), b.innerHTML = '<a href="#-amazing">可愛動物</a>', Q = E(), V = O("p"), V.innerHTML = `Amazing Rare cards have a <mark>very unique shiny foil</mark> that extends past the frame and is much shinier than
			a regular holo effect, and textured. We achieve this by using a mask and applying a glitter effect with a lighten filter.`, U = E(), I(X.$$.fragment), J = E(), ie = O("h2"), ie.innerHTML = '<a href="#-radiant">Radiant Holofoil</a>', pe = E(), Se = O("p"), Se.innerHTML = `The newest holofoil added to the series! <br/> The radiant effect proved
			<mark>very difficult to emulate</mark>
			without crazy math, so I settled with a <mark>criss-cross linear gradient pattern</mark> that moves
			across the card.`, lt = E(), I(be.$$.fragment), _e = E(), 
            
            Te = O("h2"), Te.innerHTML = '<a href="#-trainer-gallery-holo">其他風格</a>', te = E(), re = O("p"), re.innerHTML = `The effect for Trainer Gallery holofoils gives it a <mark>kind of metallic effect with iridescent shine</mark>. This is achieved with a <mark>large color dodge linear gradient</mark>, and a
			<mark>hard-light radial gradient</mark> on top, at the cursor position, to give the shimmer.`, ne = E(), I(we.$$.fragment), $e = E(), 
            
            ve = O("h2"), ve.innerHTML = '<a href="#-v">Pok V</a>', Be = E(), Fe = O("p"), Fe.innerHTML = `V cards have a <mark>diagonal holographic effect</mark> which that appears to travel in opposite
			directions when you tilt the card into the light.`, it = E(), qe = O("p"), qe.innerHTML = `This effect is achieved with <mark>multiple background gradients</mark> and I change the background
			positions based on the cursor x/y. The gradients are set to color-dodge, and there&#39;s a subtle svg
			noise effect.`, at = E(), I(Oe.$$.fragment), We = E(), 
            
            De = O("h2"), De.innerHTML = '<a href="#-v-full-art">Pok V <sup>(Full Art)</sup></a>', Tt = E(), ft = O("p"), ft.innerHTML = `Similar to the Pok V effect, Full-Art cards <mark>use diagonal gradients</mark>, but they
			have <mark>additional texture</mark> when looked at from certain angles. This is achieved with
			an <mark>additional background image with an exclusion filter</mark>. The effect is also more
			vibrant which adds to the metallic look.`, ut = E(), ct = O("p"), ct.textContent = `The texture effect is not identical to reality as the real cards each have a unique pattern that
			follows the art.`, $t = E(), I(Re.$$.fragment), pt = E(), Ue = O("h2"), Ue.innerHTML = '<a href="#-v-alternate-art">Pok V <sup>(Alternate Art)</sup></a>', Ot = E(), je = O("p"), je.innerHTML = "Alternate Art Pok V cards have <mark>practically the same holo effect as the Ultra Rare (Full Art) cards</mark>. The only difference is the pattern texture.", Rt = E(), ht = O("p"), ht.textContent = "The effect looks somewhat different though due to the type of artwork.", P = E(), I(se.$$.fragment), Z = E(), x = O("h2"), x.innerHTML = '<a href="#-v-max">VMax</a>', fe = E(), Ve = O("p"), Ve.innerHTML = `The gradient effect of Pok VMax is more subtle, using a <mark>larger background gradient</mark>
			which moves more slowly. But the <mark>texture effect is more pronounced</mark>.`, $r = E(), I(ze.$$.fragment), Or = E(), Nt = O("h2"), Nt.innerHTML = '<a href="#-v-max-alternate">VMax <sup>(Alternate/Rainbow)</sup></a>', Rr = E(), nr = O("p"), nr.innerHTML = `There&#39;s some VMax cards that show a <mark>full, or alternate artwork</mark>. These are
			<mark>classed as &quot;rainbow rare&quot;</mark>
			and have a similar effect to the rainbow cards. It&#39;s a really
			<mark>vibrant and glittery overlay</mark>.`, Nr = E(), sr = O("p"), sr.innerHTML = `This is achieved with a <mark>background image of glitter/sparkles</mark>, and a texture pattern
			background image, sandwiching the usual linear gradients.`, Mr = E(), I(Je.$$.fragment), Gr = E(), Mt = O("h2"), Mt.innerHTML = '<a href="#-v-star">VStar</a>', Lr = E(), or = O("p"), or.innerHTML = `Again back to the <mark>diagonal gradients overlaying a texture</mark>, VStar are quite
			<mark>similar to the Ultra Rare</mark>
			(Full/Alt) cards. The cards are generally <mark>brighter with a pastel hue</mark>, though, which
			makes the gradient and texture more subtle.`, Ir = E(), I(Ke.$$.fragment), Br = E(), Gt = O("h2"), Gt.innerHTML = '<a href="#-trainer-full-art">Trainer Holo <sup>(Full Art / Trainer Gallery)</sup></a>', Fr = E(), lr = O("p"), lr.innerHTML = `Again back to the <mark>diagonal gradients overlaying a texture</mark>, VStar are quite
			<mark>similar to the Ultra Rare</mark>
			(Full/Alt) cards. The cards are generally <mark>brighter with a pastel hue</mark>, though, which
			makes the gradient and texture more subtle.`, qr = E(), I(Xe.$$.fragment), Dr = E(), Lt = O("h2"), Lt.innerHTML = '<a href="#-rainbow-rare">Rainbow Rare <sup>(VMax, VStar)</sup></a>', Ur = E(), ir = O("p"), ir.innerHTML = `The Rainbow Rare is a <mark>super glittery effect on top of pastel gradients</mark>. This is
			achieved with a background image of glitter/sparkles and a
			<mark>color-burn/hard-light background blend</mark> for some pastel gradients.`, jr = E(), I(Qe.$$.fragment), Vr = E(), It = O("h2"), It.innerHTML = '<a href="#-secret-rare">Secret Rare <sup>(Gold)</sup></a>', zr = E(), ar = O("p"), ar.innerHTML = `<mark>GOLD!</mark> Here we apply two glitter layers on top of each other with a overlay effect and
		<mark>slide the two layers in opposite directions</mark>. We also <mark>mask the foil image</mark> with a gadient so
		that foil and glitter layers are mutually exclusive. The resulting effect is a shimmering glitter layer!`, Jr = E(), I(Ye.$$.fragment), Kr = E(), Bt = O("h2"), Bt.innerHTML = '<a href="#-trainer-gallery-v">Trainer Gallery <sup>(V / VMax)</sup></a>', Xr = E(), fr = O("p"), fr.textContent = `The V and VMax cards in the Trainer Gallery are generally quite similar to the normal V and VMax
			cards, so here I've just tweaked the values a little and added a different background texture.`, Qr = E(), I(Ze.$$.fragment), Yr = E(), Ft = O("h2"), Ft.innerHTML = '<a href="#-shiny-vault">Shiny Vault <sup>(Basic / Stage 1 / V / VMax)</sup></a>', Zr = E(), ur = O("p"), ur.textContent = `Shiny Vault cards have quite a unique effect in whereby the foil background is a shiny silver
			color. To achieve this we apply the foil image with some radial gradients to darken the foil
			over the background. This creates a slightly silver effect on top of the white card background.
			This effect works best in Firefox.`, xr = E(), I(xe.$$.fragment), H(e, "id", "-common"), H(a, "id", "-reverse"), H(w, "id", "-holo"), H(T, "id", "-galaxy"), H(b, "id", "-amazing"), H(ie, "id", "-radiant"), H(Te, "id", "-trainer-gallery-holo"), H(ve, "id", "-v"), H(De, "id", "-v-full-art"), H(Ue, "id", "-v-alternate-art"), H(x, "id", "-v-max"), H(Nt, "id", "-v-max-alternate"), H(Mt, "id", "-v-star"), H(Gt, "id", "-trainer-full-art"), H(Lt, "id", "-rainbow-rare"), H(It, "id", "-secret-rare"), H(Bt, "id", "-trainer-gallery-v"), H(Ft, "id", "-shiny-vault")
        },
        m(u, p) {
            m(u, e, p), m(u, t, p), m(u, r, p), m(u, s, p), G(i, u, p), m(u, l, p), m(u, a, p), m(u, o, p), m(u, f, p), m(u, c, p), G(_, u, p), m(u, S, p), m(u, w, p), m(u, k, p), m(u, $, p), m(u, g, p), G(W, u, p), m(u, R, p), m(u, T, p), m(u, v, p), m(u, A, p), m(u, N, p), m(u, M, p), m(u, D, p), G(K, u, p), m(u, j, p), m(u, b, p), m(u, Q, p), m(u, V, p), m(u, U, p), G(X, u, p), m(u, J, p), m(u, ie, p), m(u, pe, p), m(u, Se, p), m(u, lt, p), G(be, u, p), m(u, _e, p), m(u, Te, p), m(u, te, p), m(u, re, p), m(u, ne, p), G(we, u, p), m(u, $e, p), m(u, ve, p), m(u, Be, p), m(u, Fe, p), m(u, it, p), m(u, qe, p), m(u, at, p), G(Oe, u, p), m(u, We, p), m(u, De, p), m(u, Tt, p), m(u, ft, p), m(u, ut, p), m(u, ct, p), m(u, $t, p), G(Re, u, p), m(u, pt, p), m(u, Ue, p), m(u, Ot, p), m(u, je, p), m(u, Rt, p), m(u, ht, p), m(u, P, p), G(se, u, p), m(u, Z, p), m(u, x, p), m(u, fe, p), m(u, Ve, p), m(u, $r, p), G(ze, u, p), m(u, Or, p), m(u, Nt, p), m(u, Rr, p), m(u, nr, p), m(u, Nr, p), m(u, sr, p), m(u, Mr, p), G(Je, u, p), m(u, Gr, p), m(u, Mt, p), m(u, Lr, p), m(u, or, p), m(u, Ir, p), G(Ke, u, p), m(u, Br, p), m(u, Gt, p), m(u, Fr, p), m(u, lr, p), m(u, qr, p), G(Xe, u, p), m(u, Dr, p), m(u, Lt, p), m(u, Ur, p), m(u, ir, p), m(u, jr, p), G(Qe, u, p), m(u, Vr, p), m(u, It, p), m(u, zr, p), m(u, ar, p), m(u, Jr, p), G(Ye, u, p), m(u, Kr, p), m(u, Bt, p), m(u, Xr, p), m(u, fr, p), m(u, Qr, p), G(Ze, u, p), m(u, Yr, p), m(u, Ft, p), m(u, Zr, p), m(u, ur, p), m(u, xr, p), G(xe, u, p), cr = !0
        },
        p(u, p) {
            const ss = {};
            p[0] & 1048578 | p[1] & 8192 && (ss.$$scope = {
                dirty: p,
                ctx: u
            }), i.$set(ss);
            const os = {};
            p[0] & 1048580 | p[1] & 8192 && (os.$$scope = {
                dirty: p,
                ctx: u
            }), _.$set(os);
            const ls = {};
            p[0] & 1048584 | p[1] & 8192 && (ls.$$scope = {
                dirty: p,
                ctx: u
            }), W.$set(ls);
            const is = {};
            p[0] & 1048592 | p[1] & 8192 && (is.$$scope = {
                dirty: p,
                ctx: u
            }), K.$set(is);
            const as = {};
            p[0] & 1048608 | p[1] & 8192 && (as.$$scope = {
                dirty: p,
                ctx: u
            }), X.$set(as);
            const fs = {};
            p[0] & 1048640 | p[1] & 8192 && (fs.$$scope = {
                dirty: p,
                ctx: u
            }), be.$set(fs);
            const us = {};
            p[0] & 1048704 | p[1] & 8192 && (us.$$scope = {
                dirty: p,
                ctx: u
            }), we.$set(us);
            const cs = {};
            p[0] & 1048832 | p[1] & 8192 && (cs.$$scope = {
                dirty: p,
                ctx: u
            }), Oe.$set(cs);
            const ps = {};
            p[0] & 1049088 | p[1] & 8192 && (ps.$$scope = {
                dirty: p,
                ctx: u
            }), Re.$set(ps);
            const hs = {};
            p[0] & 1049600 | p[1] & 8192 && (hs.$$scope = {
                dirty: p,
                ctx: u
            }), se.$set(hs);
            const ms = {};
            p[0] & 1050624 | p[1] & 8192 && (ms.$$scope = {
                dirty: p,
                ctx: u
            }), ze.$set(ms);
            const ys = {};
            p[0] & 1052672 | p[1] & 8192 && (ys.$$scope = {
                dirty: p,
                ctx: u
            }), Je.$set(ys);
            const ds = {};
            p[0] & 1056768 | p[1] & 8192 && (ds.$$scope = {
                dirty: p,
                ctx: u
            }), Ke.$set(ds);
            const Ss = {};
            p[0] & 1064960 | p[1] & 8192 && (Ss.$$scope = {
                dirty: p,
                ctx: u
            }), Xe.$set(Ss);
            const _s = {};
            p[0] & 1081344 | p[1] & 8192 && (_s.$$scope = {
                dirty: p,
                ctx: u
            }), Qe.$set(_s);
            const ws = {};
            p[0] & 1114112 | p[1] & 8192 && (ws.$$scope = {
                dirty: p,
                ctx: u
            }), Ye.$set(ws);
            const gs = {};
            p[0] & 1179648 | p[1] & 8192 && (gs.$$scope = {
                dirty: p,
                ctx: u
            }), Ze.$set(gs);
            const bs = {};
            p[0] & 1310720 | p[1] & 8192 && (bs.$$scope = {
                dirty: p,
                ctx: u
            }), xe.$set(bs)
        },
        i(u) {
            cr || (y(i.$$.fragment, u), y(_.$$.fragment, u), y(W.$$.fragment, u), y(K.$$.fragment, u), y(X.$$.fragment, u), y(be.$$.fragment, u), y(we.$$.fragment, u), y(Oe.$$.fragment, u), y(Re.$$.fragment, u), y(se.$$.fragment, u), y(ze.$$.fragment, u), y(Je.$$.fragment, u), y(Ke.$$.fragment, u), y(Xe.$$.fragment, u), y(Qe.$$.fragment, u), y(Ye.$$.fragment, u), y(Ze.$$.fragment, u), y(xe.$$.fragment, u), cr = !0)
        },
        o(u) {
            d(i.$$.fragment, u), d(_.$$.fragment, u), d(W.$$.fragment, u), d(K.$$.fragment, u), d(X.$$.fragment, u), d(be.$$.fragment, u), d(we.$$.fragment, u), d(Oe.$$.fragment, u), d(Re.$$.fragment, u), d(se.$$.fragment, u), d(ze.$$.fragment, u), d(Je.$$.fragment, u), d(Ke.$$.fragment, u), d(Xe.$$.fragment, u), d(Qe.$$.fragment, u), d(Ye.$$.fragment, u), d(Ze.$$.fragment, u), d(xe.$$.fragment, u), cr = !1
        },
        d(u) {
            u && h(e), u && h(t), u && h(r), u && h(s), L(i, u), u && h(l), u && h(a), u && h(o), u && h(f), u && h(c), L(_, u), u && h(S), u && h(w), u && h(k), u && h($), u && h(g), L(W, u), u && h(R), u && h(T), u && h(v), u && h(A), u && h(N), u && h(M), u && h(D), L(K, u), u && h(j), u && h(b), u && h(Q), u && h(V), u && h(U), L(X, u), u && h(J), u && h(ie), u && h(pe), u && h(Se), u && h(lt), L(be, u), u && h(_e), u && h(Te), u && h(te), u && h(re), u && h(ne), L(we, u), u && h($e), u && h(ve), u && h(Be), u && h(Fe), u && h(it), u && h(qe), u && h(at), L(Oe, u), u && h(We), u && h(De), u && h(Tt), u && h(ft), u && h(ut), u && h(ct), u && h($t), L(Re, u), u && h(pt), u && h(Ue), u && h(Ot), u && h(je), u && h(Rt), u && h(ht), u && h(P), L(se, u), u && h(Z), u && h(x), u && h(fe), u && h(Ve), u && h($r), L(ze, u), u && h(Or), u && h(Nt), u && h(Rr), u && h(nr), u && h(Nr), u && h(sr), u && h(Mr), L(Je, u), u && h(Gr), u && h(Mt), u && h(Lr), u && h(or), u && h(Ir), L(Ke, u), u && h(Br), u && h(Gt), u && h(Fr), u && h(lr), u && h(qr), L(Xe, u), u && h(Dr), u && h(Lt), u && h(Ur), u && h(ir), u && h(jr), L(Qe, u), u && h(Vr), u && h(It), u && h(zr), u && h(ar), u && h(Jr), L(Ye, u), u && h(Kr), u && h(Bt), u && h(Xr), u && h(fr), u && h(Qr), L(Ze, u), u && h(Yr), u && h(Ft), u && h(Zr), u && h(ur), u && h(xr), L(xe, u)
        }
    }
}

function qu(n) {
    let e, t, r = n[1],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = qo(Bo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 2) {
                r = l[1];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Bo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = qo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Du(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function qo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            img: n[24].images.large,
            number: n[24].number,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 2 && (i.id = r[24].id), s[0] & 2 && (i.name = r[24].name), s[0] & 2 && (i.img = r[24].images.large), s[0] & 2 && (i.number = r[24].number), s[0] & 2 && (i.types = r[24].types), s[0] & 2 && (i.supertype = r[24].supertype), s[0] & 2 && (i.subtypes = r[24].subtypes), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Uu(n) {
    let e, t, r, s;
    const i = [Du, qu],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function ju(n) {
    let e, t, r = n[2],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Do(Io(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 4) {
                r = l[2];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Io(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Do(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Vu(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Do(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity,
            isReverse: !0
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 4 && (i.id = r[24].id), s[0] & 4 && (i.name = r[24].name), s[0] & 4 && (i.number = r[24].number), s[0] & 4 && (i.set = r[24].set), s[0] & 4 && (i.types = r[24].types), s[0] & 4 && (i.supertype = r[24].supertype), s[0] & 4 && (i.subtypes = r[24].subtypes), s[0] & 4 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function zu(n) {
    let e, t, r, s;
    const i = [Vu, ju],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Ju(n) {
    let e, t, r = n[3],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Uo(Lo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 8) {
                r = l[3];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Lo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Uo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Ku(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Uo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 8 && (i.id = r[24].id), s[0] & 8 && (i.name = r[24].name), s[0] & 8 && (i.number = r[24].number), s[0] & 8 && (i.set = r[24].set), s[0] & 8 && (i.types = r[24].types), s[0] & 8 && (i.supertype = r[24].supertype), s[0] & 8 && (i.subtypes = r[24].subtypes), s[0] & 8 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Xu(n) {
    let e, t, r, s;
    const i = [Ku, Ju],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Qu(n) {
    let e, t, r = n[4],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = jo(Go(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 16) {
                r = l[4];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Go(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = jo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Yu(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function jo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 16 && (i.id = r[24].id), s[0] & 16 && (i.name = r[24].name), s[0] & 16 && (i.number = r[24].number), s[0] & 16 && (i.set = r[24].set), s[0] & 16 && (i.types = r[24].types), s[0] & 16 && (i.supertype = r[24].supertype), s[0] & 16 && (i.subtypes = r[24].subtypes), s[0] & 16 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Zu(n) {
    let e, t, r, s;
    const i = [Yu, Qu],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function xu(n) {
    let e, t, r = n[5],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Vo(Mo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 32) {
                r = l[5];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Mo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Vo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function ec(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Vo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 32 && (i.id = r[24].id), s[0] & 32 && (i.name = r[24].name), s[0] & 32 && (i.number = r[24].number), s[0] & 32 && (i.set = r[24].set), s[0] & 32 && (i.types = r[24].types), s[0] & 32 && (i.supertype = r[24].supertype), s[0] & 32 && (i.subtypes = r[24].subtypes), s[0] & 32 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function tc(n) {
    let e, t, r, s;
    const i = [ec, xu],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function rc(n) {
    let e, t, r = n[6],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = zo(No(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 64) {
                r = l[6];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = No(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = zo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function nc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function zo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 64 && (i.id = r[24].id), s[0] & 64 && (i.name = r[24].name), s[0] & 64 && (i.number = r[24].number), s[0] & 64 && (i.set = r[24].set), s[0] & 64 && (i.types = r[24].types), s[0] & 64 && (i.supertype = r[24].supertype), s[0] & 64 && (i.subtypes = r[24].subtypes), s[0] & 64 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function sc(n) {
    let e, t, r, s;
    const i = [nc, rc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function oc(n) {
    let e, t, r = n[7],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Jo(Ro(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 128) {
                r = l[7];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Ro(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Jo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function lc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Jo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 128 && (i.id = r[24].id), s[0] & 128 && (i.name = r[24].name), s[0] & 128 && (i.number = r[24].number), s[0] & 128 && (i.set = r[24].set), s[0] & 128 && (i.types = r[24].types), s[0] & 128 && (i.supertype = r[24].supertype), s[0] & 128 && (i.subtypes = r[24].subtypes), s[0] & 128 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function ic(n) {
    let e, t, r, s;
    const i = [lc, oc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function ac(n) {
    let e, t, r = n[8],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Ko(Oo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 256) {
                r = l[8];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Oo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Ko(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function fc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Ko(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 256 && (i.id = r[24].id), s[0] & 256 && (i.name = r[24].name), s[0] & 256 && (i.number = r[24].number), s[0] & 256 && (i.set = r[24].set), s[0] & 256 && (i.types = r[24].types), s[0] & 256 && (i.supertype = r[24].supertype), s[0] & 256 && (i.subtypes = r[24].subtypes), s[0] & 256 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function uc(n) {
    let e, t, r, s;
    const i = [fc, ac],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function cc(n) {
    let e, t, r = n[9],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Xo($o(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 512) {
                r = l[9];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = $o(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Xo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function pc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Xo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 512 && (i.id = r[24].id), s[0] & 512 && (i.name = r[24].name), s[0] & 512 && (i.number = r[24].number), s[0] & 512 && (i.set = r[24].set), s[0] & 512 && (i.types = r[24].types), s[0] & 512 && (i.supertype = r[24].supertype), s[0] & 512 && (i.subtypes = r[24].subtypes), s[0] & 512 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function hc(n) {
    let e, t, r, s;
    const i = [pc, cc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function mc(n) {
    let e, t, r = n[10],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Qo(To(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 1024) {
                r = l[10];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = To(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Qo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function yc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Qo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 1024 && (i.id = r[24].id), s[0] & 1024 && (i.name = r[24].name), s[0] & 1024 && (i.number = r[24].number), s[0] & 1024 && (i.set = r[24].set), s[0] & 1024 && (i.types = r[24].types), s[0] & 1024 && (i.supertype = r[24].supertype), s[0] & 1024 && (i.subtypes = r[24].subtypes), s[0] & 1024 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function dc(n) {
    let e, t, r, s;
    const i = [yc, mc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Sc(n) {
    let e, t, r = n[11],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Yo(Ao(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 2048) {
                r = l[11];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Ao(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Yo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function _c(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Yo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 2048 && (i.id = r[24].id), s[0] & 2048 && (i.name = r[24].name), s[0] & 2048 && (i.number = r[24].number), s[0] & 2048 && (i.set = r[24].set), s[0] & 2048 && (i.types = r[24].types), s[0] & 2048 && (i.supertype = r[24].supertype), s[0] & 2048 && (i.subtypes = r[24].subtypes), s[0] & 2048 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function wc(n) {
    let e, t, r, s;
    const i = [_c, Sc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function gc(n) {
    let e, t, r = n[12],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = Zo(Co(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 4096) {
                r = l[12];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Co(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = Zo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function bc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function Zo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 4096 && (i.id = r[24].id), s[0] & 4096 && (i.name = r[24].name), s[0] & 4096 && (i.number = r[24].number), s[0] & 4096 && (i.set = r[24].set), s[0] & 4096 && (i.types = r[24].types), s[0] & 4096 && (i.supertype = r[24].supertype), s[0] & 4096 && (i.subtypes = r[24].subtypes), s[0] & 4096 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function vc(n) {
    let e, t, r, s;
    const i = [bc, gc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Hc(n) {
    let e, t, r = n[13],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = xo(Eo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 8192) {
                r = l[13];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Eo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = xo(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function kc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function xo(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 8192 && (i.id = r[24].id), s[0] & 8192 && (i.name = r[24].name), s[0] & 8192 && (i.number = r[24].number), s[0] & 8192 && (i.set = r[24].set), s[0] & 8192 && (i.types = r[24].types), s[0] & 8192 && (i.supertype = r[24].supertype), s[0] & 8192 && (i.subtypes = r[24].subtypes), s[0] & 8192 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Wc(n) {
    let e, t, r, s;
    const i = [kc, Hc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Pc(n) {
    let e, t, r = n[14],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = el(Po(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 16384) {
                r = l[14];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Po(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = el(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Ec(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function el(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 16384 && (i.id = r[24].id), s[0] & 16384 && (i.name = r[24].name), s[0] & 16384 && (i.number = r[24].number), s[0] & 16384 && (i.set = r[24].set), s[0] & 16384 && (i.types = r[24].types), s[0] & 16384 && (i.supertype = r[24].supertype), s[0] & 16384 && (i.subtypes = r[24].subtypes), s[0] & 16384 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Cc(n) {
    let e, t, r, s;
    const i = [Ec, Pc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Ac(n) {
    let e, t, r = n[15],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = tl(Wo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 32768) {
                r = l[15];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Wo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = tl(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Tc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function tl(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 32768 && (i.id = r[24].id), s[0] & 32768 && (i.name = r[24].name), s[0] & 32768 && (i.number = r[24].number), s[0] & 32768 && (i.set = r[24].set), s[0] & 32768 && (i.types = r[24].types), s[0] & 32768 && (i.supertype = r[24].supertype), s[0] & 32768 && (i.subtypes = r[24].subtypes), s[0] & 32768 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function $c(n) {
    let e, t, r, s;
    const i = [Tc, Ac],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Oc(n) {
    let e, t, r = n[16],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = rl(ko(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 65536) {
                r = l[16];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = ko(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = rl(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Rc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function rl(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 65536 && (i.id = r[24].id), s[0] & 65536 && (i.name = r[24].name), s[0] & 65536 && (i.number = r[24].number), s[0] & 65536 && (i.set = r[24].set), s[0] & 65536 && (i.types = r[24].types), s[0] & 65536 && (i.supertype = r[24].supertype), s[0] & 65536 && (i.subtypes = r[24].subtypes), s[0] & 65536 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Nc(n) {
    let e, t, r, s;
    const i = [Rc, Oc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Mc(n) {
    let e, t, r = n[17],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = nl(Ho(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 131072) {
                r = l[17];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = Ho(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = nl(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Gc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function nl(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 131072 && (i.id = r[24].id), s[0] & 131072 && (i.name = r[24].name), s[0] & 131072 && (i.number = r[24].number), s[0] & 131072 && (i.set = r[24].set), s[0] & 131072 && (i.types = r[24].types), s[0] & 131072 && (i.supertype = r[24].supertype), s[0] & 131072 && (i.subtypes = r[24].subtypes), s[0] & 131072 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Lc(n) {
    let e, t, r, s;
    const i = [Gc, Mc],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function Ic(n) {
    let e, t, r = n[18],
        s = [];
    for (let l = 0; l < r.length; l += 1) s[l] = sl(vo(n, r, l));
    const i = l => d(s[l], 1, 1, () => {
        s[l] = null
    });
    return {
        c() {
            for (let l = 0; l < s.length; l += 1) s[l].c();
            e = q()
        },
        m(l, a) {
            for (let o = 0; o < s.length; o += 1) s[o].m(l, a);
            m(l, e, a), t = !0
        },
        p(l, a) {
            if (a[0] & 262144) {
                r = l[18];
                let o;
                for (o = 0; o < r.length; o += 1) {
                    const f = vo(l, r, o);
                    s[o] ? (s[o].p(f, a), y(s[o], 1)) : (s[o] = sl(f), s[o].c(), y(s[o], 1), s[o].m(e.parentNode, e))
                }
                for (B(), o = r.length; o < s.length; o += 1) i(o);
                F()
            }
        },
        i(l) {
            if (!t) {
                for (let a = 0; a < r.length; a += 1) y(s[a]);
                t = !0
            }
        },
        o(l) {
            s = s.filter(Boolean);
            for (let a = 0; a < s.length; a += 1) d(s[a]);
            t = !1
        },
        d(l) {
            ce(s, l), l && h(e)
        }
    }
}

function Bc(n) {
    let e;
    return {
        c() {
            e = oe("loading...")
        },
        m(t, r) {
            m(t, e, r)
        },
        p: C,
        i: C,
        o: C,
        d(t) {
            t && h(e)
        }
    }
}

function sl(n) {
    let e, t;
    return e = new le({
        props: {
            id: n[24].id,
            name: n[24].name,
            number: n[24].number,
            set: n[24].set,
            types: n[24].types,
            supertype: n[24].supertype,
            subtypes: n[24].subtypes,
            rarity: n[24].rarity
        }
    }), {
        c() {
            I(e.$$.fragment)
        },
        m(r, s) {
            G(e, r, s), t = !0
        },
        p(r, s) {
            const i = {};
            s[0] & 262144 && (i.id = r[24].id), s[0] & 262144 && (i.name = r[24].name), s[0] & 262144 && (i.number = r[24].number), s[0] & 262144 && (i.set = r[24].set), s[0] & 262144 && (i.types = r[24].types), s[0] & 262144 && (i.supertype = r[24].supertype), s[0] & 262144 && (i.subtypes = r[24].subtypes), s[0] & 262144 && (i.rarity = r[24].rarity), e.$set(i)
        },
        i(r) {
            t || (y(e.$$.fragment, r), t = !0)
        },
        o(r) {
            d(e.$$.fragment, r), t = !1
        },
        d(r) {
            L(e, r)
        }
    }
}

function Fc(n) {
    let e, t, r, s;
    const i = [Bc, Ic],
        l = [];

    function a(o, f) {
        return o[20] ? 0 : 1
    }
    return e = a(n), t = l[e] = i[e](n), {
        c() {
            t.c(), r = q()
        },
        m(o, f) {
            l[e].m(o, f), m(o, r, f), s = !0
        },
        p(o, f) {
            let c = e;
            e = a(o), e === c ? l[e].p(o, f) : (B(), d(l[c], 1, 1, () => {
                l[c] = null
            }), F(), t = l[e], t ? t.p(o, f) : (t = l[e] = i[e](o), t.c()), y(t, 1), t.m(r.parentNode, r))
        },
        i(o) {
            s || (y(t), s = !0)
        },
        o(o) {
            d(t), s = !1
        },
        d(o) {
            l[e].d(o), o && h(r)
        }
    }
}

function qc(n) {
    let e, t, r, s, i, l, a, o, f, c, _, S, w, k, $, g, W, R, T, v;
    const A = [Fu, Bu],
        N = [];

    function M(b, Q) {
        return b[0] ? 1 : 0
    }
    c = M(n), _ = N[c] = A[c](n);

    function D(b) {
        n[21](b)
    }
    let K = {};
    n[19] !== void 0 && (K.query = n[19]), $ = new Iu({
        props: K
    }), Yt.push(() => ui($, "query", D));
    let j = n[19].length < 3 && Fo(n);
    return {
        c() {
            e = O("main"), t = O("header"), r = O("h1"), r.innerHTML = "Reading club Magic Cards <sup>V2</sup>", s = E(), i = O("p"), i.innerHTML = `By <a href="https://twitter.com/simeydotme"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg> @simeydotme</a> |
			<em><a href="https://github.com/simeydotme/pok-cards-css"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg> Simon Goellner</a></em>`, l = E(), a = O("section"), a.innerHTML = `<p>A collection of <mark>advanced CSS</mark> styles to create
				<mark>realistic-looking effects</mark> for the faces of Reading club Magic Cards. 
				The cards use <mark>3d transforms</mark>, <mark>filters</mark>, <mark>blend modes</mark>,
				<mark>css gradients</mark> and interactions to provide a unique experience when taking a closer look!</p>`, o = E(), f = O("div"), _.c(), S = E(), w = O("section"), w.innerHTML = `<h2>Click on a Card to take a Closer look!</h2> 

			<hr/> 

			<p class="small">I&#39;m using SvelteJS to handle interactivity and state; <strong>assigning values to css custom properties</strong> (variables) which 
					in-turn drive the effects and 3d transforms. 
					<br/> 
					<a href="https://github.com/simeydotme/pok-cards-css">Source code is in the repository</a>.</p>`, k = E(), I($.$$.fragment), W = E(), j && j.c(), R = E(), T = O("div"), T.innerHTML = '<a href="#-common" class="svelte-71964w" title="回最上面">回最上面</a>', H(r, "id", "-top"), H(i, "class", "author"), H(a, "class", "intro"), H(a, "id", "-intro"), H(f, "class", "showcase"), H(w, "class", "info"), H(T, "class", "back-to-top svelte-71964w")
        },
        m(b, Q) {
            m(b, e, Q), Y(e, t), Y(t, r), Y(t, s), Y(t, i), Y(t, l), Y(t, a), Y(t, o), Y(t, f), N[c].m(f, null), Y(t, S), Y(t, w), Y(e, k), G($, e, null), Y(e, W), j && j.m(e, null), m(b, R, Q), m(b, T, Q), v = !0
        },
        p(b, Q) {
            let V = c;
            c = M(b), c === V ? N[c].p(b, Q) : (B(), d(N[V], 1, 1, () => {
                N[V] = null
            }), F(), _ = N[c], _ ? _.p(b, Q) : (_ = N[c] = A[c](b), _.c()), y(_, 1), _.m(f, null));
            const U = {};
            !g && Q[0] & 524288 && (g = !0, U.query = b[19], ni(() => g = !1)), $.$set(U), b[19].length < 3 ? j ? (j.p(b, Q), Q[0] & 524288 && y(j, 1)) : (j = Fo(b), j.c(), y(j, 1), j.m(e, null)) : j && (B(), d(j, 1, 1, () => {
                j = null
            }), F())
        },
        i(b) {
            v || (y(_), y($.$$.fragment, b), y(j), v = !0)
        },
        o(b) {
            d(_), d($.$$.fragment, b), d(j), v = !1
        },
        d(b) {
            b && h(e), N[c].d(), L($), j && j.d(), b && h(R), b && h(T)
        }
    }
}

function Dc(n, e, t) {
    let r, s, i, l, a, o, f, c, _, S, w, k, $, g, W, R, T, v, A, N = "",
        M = !0;
    const D = async () => await (await fetch("https://alan0623.github.io/card/data/cards.json")).json(), K = async () => D().then(b => {
        window.cards = b, t(0, r = b[0]), t(1, s = b.slice(1, 4)), t(2, i = [...b.slice(4, 7), ...b.slice(70, 76)]), t(3, l = b.slice(7, 13)), t(4, a = b.slice(13, 16)), t(5, o = b.slice(76, 85)), t(6, f = b.slice(16, 19)), t(7, c = b.slice(19, 22)), t(8, _ = b.slice(22, 25)), t(9, S = b.slice(25, 28)), t(10, w = b.slice(28, 34)), t(11, k = b.slice(37, 40)), t(12, $ = b.slice(40, 43)), t(13, g = b.slice(43, 46)), t(14, W = b.slice(46, 52)), t(15, R = b.slice(52, 58)), t(16, T = b.slice(58, 64)), t(17, v = b.slice(64, 70)), t(18, A = b.slice(85, 91)), t(20, M = !1)
    });
    pl(() => {
        K();
        const Q = [...document.querySelectorAll("h1,h2,h3")].filter(V => {
            var J, ie;
            const U = (J = V.getAttribute("id")) == null ? void 0 : J.replace(/^.*?-/g, ""),
                X = (ie = window.location.hash) == null ? void 0 : ie.replace(/^.*?-/g, "");
            return U === X
        })[0];
        Q && setTimeout(() => {
            Q.scrollIntoView()
        }, 100)
    });

    function j(b) {
        N = b, t(19, N)
    }
    return [r, s, i, l, a, o, f, c, _, S, w, k, $, g, W, R, T, v, A, N, M, j]
}
class Uc extends er {
    constructor(e) {
        super(), xt(this, e, Dc, qc, Ct, {}, null, [-1, -1])
    }
}
new Uc({
    target: document.getElementById("app")
});