/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundblendmode-canvas-cssanimations-csscalc-cssfilters-cssgradients-cssremunit-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-flexboxtweener-flexwrap-svg-touchevents-video-setclasses !*/


 !(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, a, s, i;
    for (var c in x)
      if (x.hasOwnProperty(c)) {
        if (
          ((e = []),
          (n = x[c]),
          n.name &&
            (e.push(n.name.toLowerCase()),
            n.options && n.options.aliases && n.options.aliases.length))
        )
          for (t = 0; t < n.options.aliases.length; t++)
            e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)
          (s = e[a]),
            (i = s.split(".")),
            1 === i.length
              ? (Modernizr[i[0]] = o)
              : (!Modernizr[i[0]] ||
                  Modernizr[i[0]] instanceof Boolean ||
                  (Modernizr[i[0]] = new Boolean(Modernizr[i[0]])),
                (Modernizr[i[0]][i[1]] = o)),
            h.push((o ? "" : "no-") + i.join("-"));
      }
  }
  function a(e) {
    var n = w.className,
      t = Modernizr._config.classPrefix || "";
    if ((b && (n = n.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)),
      b ? (w.className.baseVal = n) : (w.className = n));
  }
  function s() {
    return "function" != typeof n.createElement
      ? n.createElement(arguments[0])
      : b
      ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0])
      : n.createElement.apply(n, arguments);
  }
  function i(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function c() {
    var e = n.body;
    return e || ((e = s(b ? "svg" : "body")), (e.fake = !0)), e;
  }
  function l(e, t, r, o) {
    var a,
      i,
      l,
      d,
      f = "modernizr",
      u = s("div"),
      p = c();
    if (parseInt(r, 10))
      for (; r--; )
        (l = s("div")), (l.id = o ? o[r] : f + (r + 1)), u.appendChild(l);
    return (
      (a = s("style")),
      (a.type = "text/css"),
      (a.id = "s" + f),
      (p.fake ? p : u).appendChild(a),
      p.appendChild(u),
      a.styleSheet
        ? (a.styleSheet.cssText = e)
        : a.appendChild(n.createTextNode(e)),
      (u.id = f),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (d = w.style.overflow),
        (w.style.overflow = "hidden"),
        w.appendChild(p)),
      (i = t(u, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (w.style.overflow = d), w.offsetHeight)
        : u.parentNode.removeChild(u),
      !!i
    );
  }
  function d(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function f(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function u(e, n, t) {
    var o;
    for (var a in e)
      if (e[a] in n)
        return t === !1
          ? e[a]
          : ((o = n[e[a]]), r(o, "function") ? f(o, t || n) : o);
    return !1;
  }
  function p(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function m(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var a = []; o--; ) a.push("(" + p(n[o]) + ":" + r + ")");
      return (
        (a = a.join(" or ")),
        l(
          "@supports (" + a + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return t;
  }
  function v(e, n, o, a) {
    function c() {
      f && (delete j.style, delete j.modElem);
    }
    if (((a = r(a, "undefined") ? !1 : a), !r(o, "undefined"))) {
      var l = m(e, o);
      if (!r(l, "undefined")) return l;
    }
    for (
      var f, u, p, v, g, y = ["modernizr", "tspan", "samp"];
      !j.style && y.length;

    )
      (f = !0), (j.modElem = s(y.shift())), (j.style = j.modElem.style);
    for (p = e.length, u = 0; p > u; u++)
      if (
        ((v = e[u]),
        (g = j.style[v]),
        d(v, "-") && (v = i(v)),
        j.style[v] !== t)
      ) {
        if (a || r(o, "undefined")) return c(), "pfx" == n ? v : !0;
        try {
          j.style[v] = o;
        } catch (h) {}
        if (j.style[v] != g) return c(), "pfx" == n ? v : !0;
      }
    return c(), !1;
  }
  function g(e, n, t, o, a) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      i = (e + " " + z.join(s + " ") + s).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? v(i, n, o, a)
      : ((i = (e + " " + $.join(s + " ") + s).split(" ")), u(i, n, t));
  }
  function y(e, n, r) {
    return g(e, t, t, n, r);
  }
  var h = [],
    x = [],
    T = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        x.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        x.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = T),
    (Modernizr = new Modernizr()),
    Modernizr.addTest(
      "svg",
      !!n.createElementNS &&
        !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    );
  var w = n.documentElement,
    b = "svg" === w.nodeName.toLowerCase();
  Modernizr.addTest("audio", function () {
    var e = s("audio"),
      n = !1;
    try {
      (n = !!e.canPlayType) &&
        ((n = new Boolean(n)),
        (n.ogg = e
          .canPlayType('audio/ogg; codecs="vorbis"')
          .replace(/^no$/, "")),
        (n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, "")),
        (n.opus =
          e.canPlayType('audio/ogg; codecs="opus"') ||
          e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
        (n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
        (n.m4a = (
          e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
        ).replace(/^no$/, "")));
    } catch (t) {}
    return n;
  }),
    Modernizr.addTest("canvas", function () {
      var e = s("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("cssremunit", function () {
      var e = s("a").style;
      try {
        e.fontSize = "3rem";
      } catch (n) {}
      return /rem/.test(e.fontSize);
    });
  var C = T._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (T._prefixes = C),
    Modernizr.addTest("csscalc", function () {
      var e = "width:",
        n = "calc(10px);",
        t = s("a");
      return (t.style.cssText = e + C.join(n + e)), !!t.style.length;
    }),
    Modernizr.addTest("cssgradients", function () {
      for (
        var e,
          n = "background-image:",
          t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          r = "",
          o = 0,
          a = C.length - 1;
        a > o;
        o++
      )
        (e = 0 === o ? "to " : ""),
          (r += n + C[o] + "linear-gradient(" + e + "left top, #9f9, white);");
      Modernizr._config.usePrefixes && (r += n + "-webkit-" + t);
      var i = s("a"),
        c = i.style;
      return (c.cssText = r), ("" + c.backgroundImage).indexOf("gradient") > -1;
    });
  var S = "CSS" in e && "supports" in e.CSS,
    P = "supportsCSS" in e;
  Modernizr.addTest("supports", S || P);
  var _ = (T.testStyles = l);
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch))
      t = !0;
    else {
      var r = [
        "@media (",
        C.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      _(r, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  });
  var E = "Moz O ms Webkit",
    z = T._config.usePrefixes ? E.split(" ") : [];
  T._cssomPrefixes = z;
  var k = function (n) {
    var r,
      o = C.length,
      a = e.CSSRule;
    if ("undefined" == typeof a) return t;
    if (!n) return !1;
    if (
      ((n = n.replace(/^@/, "")),
      (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in a)
    )
      return "@" + n;
    for (var s = 0; o > s; s++) {
      var i = C[s],
        c = i.toUpperCase() + "_" + r;
      if (c in a) return "@-" + i.toLowerCase() + "-" + n;
    }
    return !1;
  };
  T.atRule = k;
  var $ = T._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  T._domPrefixes = $;
  var N = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var j = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete j.style;
  }),
    Modernizr.addTest("video", function () {
      var e = s("video"),
        n = !1;
      try {
        (n = !!e.canPlayType) &&
          ((n = new Boolean(n)),
          (n.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (n.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (n.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")),
          (n.vp9 = e
            .canPlayType('video/webm; codecs="vp9"')
            .replace(/^no$/, "")),
          (n.hls = e
            .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
            .replace(/^no$/, "")));
      } catch (t) {}
      return n;
    }),
    (T.testAllProps = g),
    (T.testAllProps = y),
    Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
    Modernizr.addTest("cssfilters", function () {
      if (Modernizr.supports) return y("filter", "blur(2px)");
      var e = s("a");
      return (
        (e.style.cssText = C.join("filter:blur(2px); ")),
        !!e.style.length && (n.documentMode === t || n.documentMode > 9)
      );
    }),
    Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)),
    Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)),
    Modernizr.addTest("flexwrap", y("flexWrap", "wrap", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        y("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransforms3d", function () {
      var e = !!y("perspective", "1px", !0),
        n = Modernizr._config.usePrefixes;
      if (e && (!n || "webkitPerspective" in w.style)) {
        var t,
          r = "#modernizr{width:0;height:0}";
        Modernizr.supports
          ? (t = "@supports (perspective: 1px)")
          : ((t = "@media (transform-3d)"),
            n && (t += ",(-webkit-transform-3d)")),
          (t +=
            "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
          _(r + t, function (n) {
            e = 7 === n.offsetWidth && 18 === n.offsetHeight;
          });
      }
      return e;
    }),
    Modernizr.addTest("csstransitions", y("transition", "all", !0));
  var A = (T.prefixed = function (e, n, t) {
    return 0 === e.indexOf("@")
      ? k(e)
      : (-1 != e.indexOf("-") && (e = i(e)), n ? g(e, n, t) : g(e, "pfx"));
  });
  Modernizr.addTest("backgroundblendmode", A("backgroundBlendMode", "text")),
    o(),
    a(h),
    delete T.addTest,
    delete T.addAsyncTest;
  for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
  e.Modernizr = Modernizr;
})(window, document);
