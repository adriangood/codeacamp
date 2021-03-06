!function (e, t, n) {
    function r(e, t) {
        return typeof e === t;
    }
    function a() {
        var e, t, n, a, o, s, i;
        for (var d in b)
            if (b.hasOwnProperty(d)) {
                if (e = [], t = b[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (a = r(t.fn, 'function') ? t.fn() : t.fn, o = 0; o < e.length; o++)
                    s = e[o], i = s.split('.'), 1 === i.length ? Modernizr[i[0]] = a : (!Modernizr[i[0]] || Modernizr[i[0]] instanceof Boolean || (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])), Modernizr[i[0]][i[1]] = a), y.push((a ? '' : 'no-') + i.join('-'));
            }
    }
    function o(e) {
        var t = w.className, n = Modernizr._config.classPrefix || '';
        if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
            t = t.replace(r, '$1' + n + 'js$2');
        }
        Modernizr._config.enableClasses && (t += ' ' + n + e.join(' ' + n), S ? w.className.baseVal = t : w.className = t);
    }
    function s() {
        return 'function' != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0]) : t.createElement.apply(t, arguments);
    }
    function i(e, t) {
        return !!~('' + e).indexOf(t);
    }
    function d() {
        var e = t.body;
        return e || (e = s(S ? 'svg' : 'body'), e.fake = !0), e;
    }
    function c(e, n, r, a) {
        var o, i, c, u, l = 'modernizr', f = s('div'), p = d();
        if (parseInt(r, 10))
            for (; r--;)
                c = s('div'), c.id = a ? a[r] : l + (r + 1), f.appendChild(c);
        return o = s('style'), o.type = 'text/css', o.id = 's' + l, (p.fake ? p : f).appendChild(o), p.appendChild(f), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), f.id = l, p.fake && (p.style.background = '', p.style.overflow = 'hidden', u = w.style.overflow, w.style.overflow = 'hidden', w.appendChild(p)), i = n(f, e), p.fake ? (p.parentNode.removeChild(p), w.style.overflow = u, w.offsetHeight) : f.parentNode.removeChild(f), !!i;
    }
    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase();
        }).replace(/^-/, '');
    }
    function l(e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }
    function f(e, t, n) {
        var a;
        for (var o in e)
            if (e[o] in t)
                return n === !1 ? e[o] : (a = t[e[o]], r(a, 'function') ? l(a, n || t) : a);
        return !1;
    }
    function p(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return '-' + t.toLowerCase();
        }).replace(/^ms-/, '-ms-');
    }
    function m(t, r) {
        var a = t.length;
        if ('CSS' in e && 'supports' in e.CSS) {
            for (; a--;)
                if (e.CSS.supports(p(t[a]), r))
                    return !0;
            return !1;
        }
        if ('CSSSupportsRule' in e) {
            for (var o = []; a--;)
                o.push('(' + p(t[a]) + ':' + r + ')');
            return o = o.join(' or '), c('@supports (' + o + ') { #modernizr { position: absolute; } }', function (e) {
                return 'absolute' == getComputedStyle(e, null).position;
            });
        }
        return n;
    }
    function g(e, t, a, o) {
        function d() {
            l && (delete I.style, delete I.modElem);
        }
        if (o = r(o, 'undefined') ? !1 : o, !r(a, 'undefined')) {
            var c = m(e, a);
            if (!r(c, 'undefined'))
                return c;
        }
        for (var l, f, p, g, v, h = [
                    'modernizr',
                    'tspan'
                ]; !I.style;)
            l = !0, I.modElem = s(h.shift()), I.style = I.modElem.style;
        for (p = e.length, f = 0; p > f; f++)
            if (g = e[f], v = I.style[g], i(g, '-') && (g = u(g)), I.style[g] !== n) {
                if (o || r(a, 'undefined'))
                    return d(), 'pfx' == t ? g : !0;
                try {
                    I.style[g] = a;
                } catch (y) {
                }
                if (I.style[g] != v)
                    return d(), 'pfx' == t ? g : !0;
            }
        return d(), !1;
    }
    function v(e, t, n, a, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1), i = (e + ' ' + O.join(s + ' ') + s).split(' ');
        return r(t, 'string') || r(t, 'undefined') ? g(i, t, a, o) : (i = (e + ' ' + k.join(s + ' ') + s).split(' '), f(i, t, n));
    }
    function h(e, t, r) {
        return v(e, n, n, t, r);
    }
    var y = [], b = [], T = {
            _version: '3.3.1',
            _config: {
                classPrefix: '',
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e]);
                }, 0);
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                });
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                });
            }
        }, Modernizr = function () {
        };
    Modernizr.prototype = T, Modernizr = new Modernizr(), Modernizr.addTest('applicationcache', 'applicationCache' in e), Modernizr.addTest('history', function () {
        var t = navigator.userAgent;
        return -1 === t.indexOf('Android 2.') && -1 === t.indexOf('Android 4.0') || -1 === t.indexOf('Mobile Safari') || -1 !== t.indexOf('Chrome') || -1 !== t.indexOf('Windows Phone') ? e.history && 'pushState' in e.history : !1;
    }), Modernizr.addTest('postmessage', 'postMessage' in e), Modernizr.addTest('svg', !!t.createElementNS && !!t.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect), Modernizr.addTest('websockets', 'WebSocket' in e && 2 === e.WebSocket.CLOSING), Modernizr.addTest('localstorage', function () {
        var e = 'modernizr';
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    }), Modernizr.addTest('sessionstorage', function () {
        var e = 'modernizr';
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
        } catch (t) {
            return !1;
        }
    }), Modernizr.addTest('websqldatabase', 'openDatabase' in e), Modernizr.addTest('webworkers', 'Worker' in e);
    var x = T._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : [
        '',
        ''
    ];
    T._prefixes = x;
    var w = t.documentElement, S = 'svg' === w.nodeName.toLowerCase(), C = 'Moz O ms Webkit', k = T._config.usePrefixes ? C.toLowerCase().split(' ') : [];
    T._domPrefixes = k;
    var P = function () {
        function e(e, t) {
            var a;
            return e ? (t && 'string' != typeof t || (t = s(t || 'div')), e = 'on' + e, a = e in t, !a && r && (t.setAttribute || (t = s('div')), t.setAttribute(e, ''), a = 'function' == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), a) : !1;
        }
        var r = !('onblur' in t.documentElement);
        return e;
    }();
    T.hasEvent = P, Modernizr.addTest('hashchange', function () {
        return P('hashchange', e) === !1 ? !1 : t.documentMode === n || t.documentMode > 7;
    }), Modernizr.addTest('audio', function () {
        var e = s('audio'), t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''), t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ''), t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ''), t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''), t.m4a = (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;')).replace(/^no$/, ''));
        } catch (n) {
        }
        return t;
    }), Modernizr.addTest('canvas', function () {
        var e = s('canvas');
        return !(!e.getContext || !e.getContext('2d'));
    }), Modernizr.addTest('canvastext', function () {
        return Modernizr.canvas === !1 ? !1 : 'function' == typeof s('canvas').getContext('2d').fillText;
    }), Modernizr.addTest('video', function () {
        var e = s('video'), t = !1;
        try {
            (t = !!e.canPlayType) && (t = new Boolean(t), t.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ''), t.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ''), t.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ''), t.vp9 = e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ''), t.hls = e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ''));
        } catch (n) {
        }
        return t;
    }), Modernizr.addTest('cssgradients', function () {
        for (var e, t = 'background-image:', n = 'gradient(linear,left top,right bottom,from(#9f9),to(white));', r = '', a = 0, o = x.length - 1; o > a; a++)
            e = 0 === a ? 'to ' : '', r += t + x[a] + 'linear-gradient(' + e + 'left top, #9f9, white);';
        Modernizr._config.usePrefixes && (r += t + '-webkit-' + n);
        var i = s('a'), d = i.style;
        return d.cssText = r, ('' + d.backgroundImage).indexOf('gradient') > -1;
    }), Modernizr.addTest('multiplebgs', function () {
        var e = s('a').style;
        return e.cssText = 'background:url(https://),url(https://),red url(https://)', /(url\s*\(.*?){3}/.test(e.background);
    }), Modernizr.addTest('opacity', function () {
        var e = s('a').style;
        return e.cssText = x.join('opacity:.55;'), /^0.55$/.test(e.opacity);
    }), Modernizr.addTest('rgba', function () {
        var e = s('a').style;
        return e.cssText = 'background-color:rgba(150,255,150,.5)', ('' + e.backgroundColor).indexOf('rgba') > -1;
    });
    var _ = s('input'), E = 'autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '), z = {};
    Modernizr.input = function (t) {
        for (var n = 0, r = t.length; r > n; n++)
            z[t[n]] = !!(t[n] in _);
        return z.list && (z.list = !(!s('datalist') || !e.HTMLDataListElement)), z;
    }(E), Modernizr.addTest('hsla', function () {
        var e = s('a').style;
        return e.cssText = 'background-color:hsla(120,40%,100%,.5)', i(e.backgroundColor, 'rgba') || i(e.backgroundColor, 'hsla');
    });
    var R = 'CSS' in e && 'supports' in e.CSS, A = 'supportsCSS' in e;
    Modernizr.addTest('supports', R || A);
    var O = T._config.usePrefixes ? C.split(' ') : [];
    T._cssomPrefixes = O;
    var $ = T.testStyles = c;
    Modernizr.addTest('touchevents', function () {
        var n;
        if ('ontouchstart' in e || e.DocumentTouch && t instanceof DocumentTouch)
            n = !0;
        else {
            var r = [
                '@media (',
                x.join('touch-enabled),('),
                'heartz',
                ')',
                '{#modernizr{top:9px;position:absolute}}'
            ].join('');
            $(r, function (e) {
                n = 9 === e.offsetTop;
            });
        }
        return n;
    });
    var N = function () {
        var e = navigator.userAgent, t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1), n = e.match(/w(eb)?osbrowser/gi), r = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9, a = 533 > t && e.match(/android/gi);
        return n || a || r;
    }();
    N ? Modernizr.addTest('fontface', !1) : $('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
        var r = t.getElementById('smodernizr'), a = r.sheet || r.styleSheet, o = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || '' : '', s = /src/i.test(o) && 0 === o.indexOf(n.split(' ')[0]);
        Modernizr.addTest('fontface', s);
    });
    var B = function (t) {
        var r, a = x.length, o = e.CSSRule;
        if ('undefined' == typeof o)
            return n;
        if (!t)
            return !1;
        if (t = t.replace(/^@/, ''), r = t.replace(/-/g, '_').toUpperCase() + '_RULE', r in o)
            return '@' + t;
        for (var s = 0; a > s; s++) {
            var i = x[s], d = i.toUpperCase() + '_' + r;
            if (d in o)
                return '@-' + i.toLowerCase() + '-' + t;
        }
        return !1;
    };
    T.atRule = B;
    var L = { elem: s('modernizr') };
    Modernizr._q.push(function () {
        delete L.elem;
    });
    var I = { style: L.elem.style };
    Modernizr._q.unshift(function () {
        delete I.style;
    });
    var j = T.testProp = function (e, t, r) {
        return g([e], n, t, r);
    };
    Modernizr.addTest('textshadow', j('textShadow', '1px 1px')), T.testAllProps = v, T.testAllProps = h, Modernizr.addTest('cssanimations', h('animationName', 'a', !0)), Modernizr.addTest('backgroundsize', h('backgroundSize', '100%', !0)), Modernizr.addTest('borderimage', h('borderImage', 'url() 1', !0)), Modernizr.addTest('borderradius', h('borderRadius', '0px', !0)), Modernizr.addTest('boxshadow', h('boxShadow', '1px 1px', !0)), function () {
        Modernizr.addTest('csscolumns', function () {
            var e = !1, t = h('columnCount');
            try {
                (e = !!t) && (e = new Boolean(e));
            } catch (n) {
            }
            return e;
        });
        for (var e, t, n = [
                    'Width',
                    'Span',
                    'Fill',
                    'Gap',
                    'Rule',
                    'RuleColor',
                    'RuleStyle',
                    'RuleWidth',
                    'BreakBefore',
                    'BreakAfter',
                    'BreakInside'
                ], r = 0; r < n.length; r++)
            e = n[r].toLowerCase(), t = h('column' + n[r]), ('breakbefore' === e || 'breakafter' === e || 'breakinside' == e) && (t = t || h(n[r])), Modernizr.addTest('csscolumns.' + e, t);
    }(), Modernizr.addTest('flexbox', h('flexBasis', '1px', !0)), Modernizr.addTest('cssreflections', h('boxReflect', 'above', !0)), Modernizr.addTest('csstransforms', function () {
        return -1 === navigator.userAgent.indexOf('Android 2.') && h('transform', 'scale(1)', !0);
    }), Modernizr.addTest('csstransforms3d', function () {
        var e = !!h('perspective', '1px', !0), t = Modernizr._config.usePrefixes;
        if (e && (!t || 'webkitPerspective' in w.style)) {
            var n, r = '#modernizr{width:0;height:0}';
            Modernizr.supports ? n = '@supports (perspective: 1px)' : (n = '@media (transform-3d)', t && (n += ',(-webkit-transform-3d)')), n += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}', $(r + n, function (t) {
                e = 7 === t.offsetWidth && 18 === t.offsetHeight;
            });
        }
        return e;
    }), Modernizr.addTest('csstransitions', h('transition', 'all', !0));
    var W, q = T.prefixed = function (e, t, n) {
            return 0 === e.indexOf('@') ? B(e) : (-1 != e.indexOf('-') && (e = u(e)), t ? v(e, t, n) : v(e, 'pfx'));
        };
    try {
        W = q('indexedDB', e);
    } catch (M) {
    }
    Modernizr.addTest('indexeddb', !!W), W && Modernizr.addTest('indexeddb.deletedatabase', 'deleteDatabase' in W), a(), o(y), delete T.addTest, delete T.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++)
        Modernizr._q[D]();
    e.Modernizr = Modernizr;
}(window, document);
//# sourceMappingURL=modernizr.min.js-vflQFX2B2.map
