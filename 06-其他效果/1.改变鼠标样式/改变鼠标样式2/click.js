/**
 * Combined by jsDelivr.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! pace 1.0.2 */
;(function () {
  var a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X = [].slice,
    Y = {}.hasOwnProperty,
    Z = function (a, b) {
      function c() {
        this.constructor = a
      }
      for (var d in b) Y.call(b, d) && (a[d] = b[d])
      return (
        (c.prototype = b.prototype),
        (a.prototype = new c()),
        (a.__super__ = b.prototype),
        a
      )
    },
    $ =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b
        return -1
      }
  for (
    u = {
      catchupTime: 100,
      initialRate: 0.03,
      minTime: 250,
      ghostTime: 100,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: !0,
      restartOnPushState: !0,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: { checkInterval: 100, selectors: ['body'] },
      eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 },
      ajax: { trackMethods: ['GET'], trackWebSockets: !0, ignoreURLs: [] }
    },
      C = function () {
        var a
        return null !=
          (a =
            'undefined' != typeof performance &&
            null !== performance &&
            'function' == typeof performance.now
              ? performance.now()
              : void 0)
          ? a
          : +new Date()
      },
      E =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame,
      t = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
      null == E &&
        ((E = function (a) {
          return setTimeout(a, 50)
        }),
        (t = function (a) {
          return clearTimeout(a)
        })),
      G = function (a) {
        var b, c
        return (
          (b = C()),
          (c = function () {
            var d
            return (
              (d = C() - b),
              d >= 33
                ? ((b = C()),
                  a(d, function () {
                    return E(c)
                  }))
                : setTimeout(c, 33 - d)
            )
          })()
        )
      },
      F = function () {
        var a, b, c
        return (
          (c = arguments[0]),
          (b = arguments[1]),
          (a = 3 <= arguments.length ? X.call(arguments, 2) : []),
          'function' == typeof c[b] ? c[b].apply(c, a) : c[b]
        )
      },
      v = function () {
        var a, b, c, d, e, f, g
        for (
          b = arguments[0],
            d = 2 <= arguments.length ? X.call(arguments, 1) : [],
            f = 0,
            g = d.length;
          g > f;
          f++
        )
          if ((c = d[f]))
            for (a in c)
              Y.call(c, a) &&
                ((e = c[a]),
                null != b[a] &&
                'object' == typeof b[a] &&
                null != e &&
                'object' == typeof e
                  ? v(b[a], e)
                  : (b[a] = e))
        return b
      },
      q = function (a) {
        var b, c, d, e, f
        for (c = b = 0, e = 0, f = a.length; f > e; e++)
          (d = a[e]), (c += Math.abs(d)), b++
        return c / b
      },
      x = function (a, b) {
        var c, d, e
        if (
          (null == a && (a = 'options'),
          null == b && (b = !0),
          (e = document.querySelector('[data-pace-' + a + ']')))
        ) {
          if (((c = e.getAttribute('data-pace-' + a)), !b)) return c
          try {
            return JSON.parse(c)
          } catch (f) {
            return (
              (d = f),
              'undefined' != typeof console && null !== console
                ? console.error('Error parsing inline pace options', d)
                : void 0
            )
          }
        }
      },
      g = (function () {
        function a() {}
        return (
          (a.prototype.on = function (a, b, c, d) {
            var e
            return (
              null == d && (d = !1),
              null == this.bindings && (this.bindings = {}),
              null == (e = this.bindings)[a] && (e[a] = []),
              this.bindings[a].push({ handler: b, ctx: c, once: d })
            )
          }),
          (a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0)
          }),
          (a.prototype.off = function (a, b) {
            var c, d, e
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
              if (null == b) return delete this.bindings[a]
              for (c = 0, e = []; c < this.bindings[a].length; )
                this.bindings[a][c].handler === b
                  ? e.push(this.bindings[a].splice(c, 1))
                  : e.push(c++)
              return e
            }
          }),
          (a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i
            if (
              ((c = arguments[0]),
              (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
              null != (g = this.bindings) ? g[c] : void 0)
            ) {
              for (e = 0, i = []; e < this.bindings[c].length; )
                (h = this.bindings[c][e]),
                  (d = h.handler),
                  (b = h.ctx),
                  (f = h.once),
                  d.apply(null != b ? b : this, a),
                  f ? i.push(this.bindings[c].splice(e, 1)) : i.push(e++)
              return i
            }
          }),
          a
        )
      })(),
      j = window.Pace || {},
      window.Pace = j,
      v(j, g.prototype),
      D = j.options = v({}, u, window.paceOptions, x()),
      U = ['ajax', 'document', 'eventLag', 'elements'],
      Q = 0,
      S = U.length;
    S > Q;
    Q++
  )
    (K = U[Q]), D[K] === !0 && (D[K] = u[K])
  ;(i = (function (a) {
    function b() {
      return (V = b.__super__.constructor.apply(this, arguments))
    }
    return Z(b, a), b
  })(Error)),
    (b = (function () {
      function a() {
        this.progress = 0
      }
      return (
        (a.prototype.getElement = function () {
          var a
          if (null == this.el) {
            if (((a = document.querySelector(D.target)), !a)) throw new i()
            ;(this.el = document.createElement('div')),
              (this.el.className = 'pace pace-active'),
              (document.body.className = document.body.className.replace(
                /pace-done/g,
                ''
              )),
              (document.body.className += ' pace-running'),
              (this.el.innerHTML =
                '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
              null != a.firstChild
                ? a.insertBefore(this.el, a.firstChild)
                : a.appendChild(this.el)
          }
          return this.el
        }),
        (a.prototype.finish = function () {
          var a
          return (
            (a = this.getElement()),
            (a.className = a.className.replace('pace-active', '')),
            (a.className += ' pace-inactive'),
            (document.body.className = document.body.className.replace(
              'pace-running',
              ''
            )),
            (document.body.className += ' pace-done')
          )
        }),
        (a.prototype.update = function (a) {
          return (this.progress = a), this.render()
        }),
        (a.prototype.destroy = function () {
          try {
            this.getElement().parentNode.removeChild(this.getElement())
          } catch (a) {
            i = a
          }
          return (this.el = void 0)
        }),
        (a.prototype.render = function () {
          var a, b, c, d, e, f, g
          if (null == document.querySelector(D.target)) return !1
          for (
            a = this.getElement(),
              d = 'translate3d(' + this.progress + '%, 0, 0)',
              g = ['webkitTransform', 'msTransform', 'transform'],
              e = 0,
              f = g.length;
            f > e;
            e++
          )
            (b = g[e]), (a.children[0].style[b] = d)
          return (
            (!this.lastRenderedProgress ||
              this.lastRenderedProgress | (0 !== this.progress) | 0) &&
              (a.children[0].setAttribute(
                'data-progress-text',
                '' + (0 | this.progress) + '%'
              ),
              this.progress >= 100
                ? (c = '99')
                : ((c = this.progress < 10 ? '0' : ''),
                  (c += 0 | this.progress)),
              a.children[0].setAttribute('data-progress', '' + c)),
            (this.lastRenderedProgress = this.progress)
          )
        }),
        (a.prototype.done = function () {
          return this.progress >= 100
        }),
        a
      )
    })()),
    (h = (function () {
      function a() {
        this.bindings = {}
      }
      return (
        (a.prototype.trigger = function (a, b) {
          var c, d, e, f, g
          if (null != this.bindings[a]) {
            for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++)
              (c = f[d]), g.push(c.call(this, b))
            return g
          }
        }),
        (a.prototype.on = function (a, b) {
          var c
          return (
            null == (c = this.bindings)[a] && (c[a] = []),
            this.bindings[a].push(b)
          )
        }),
        a
      )
    })()),
    (P = window.XMLHttpRequest),
    (O = window.XDomainRequest),
    (N = window.WebSocket),
    (w = function (a, b) {
      var c, d, e
      e = []
      for (d in b.prototype)
        try {
          null == a[d] && 'function' != typeof b[d]
            ? 'function' == typeof Object.defineProperty
              ? e.push(
                  Object.defineProperty(a, d, {
                    get: function () {
                      return b.prototype[d]
                    },
                    configurable: !0,
                    enumerable: !0
                  })
                )
              : e.push((a[d] = b.prototype[d]))
            : e.push(void 0)
        } catch (f) {
          c = f
        }
      return e
    }),
    (A = []),
    (j.ignore = function () {
      var a, b, c
      return (
        (b = arguments[0]),
        (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
        A.unshift('ignore'),
        (c = b.apply(null, a)),
        A.shift(),
        c
      )
    }),
    (j.track = function () {
      var a, b, c
      return (
        (b = arguments[0]),
        (a = 2 <= arguments.length ? X.call(arguments, 1) : []),
        A.unshift('track'),
        (c = b.apply(null, a)),
        A.shift(),
        c
      )
    }),
    (J = function (a) {
      var b
      if ((null == a && (a = 'GET'), 'track' === A[0])) return 'force'
      if (!A.length && D.ajax) {
        if ('socket' === a && D.ajax.trackWebSockets) return !0
        if (((b = a.toUpperCase()), $.call(D.ajax.trackMethods, b) >= 0))
          return !0
      }
      return !1
    }),
    (k = (function (a) {
      function b() {
        var a,
          c = this
        b.__super__.constructor.apply(this, arguments),
          (a = function (a) {
            var b
            return (
              (b = a.open),
              (a.open = function (d, e, f) {
                return (
                  J(d) && c.trigger('request', { type: d, url: e, request: a }),
                  b.apply(a, arguments)
                )
              })
            )
          }),
          (window.XMLHttpRequest = function (b) {
            var c
            return (c = new P(b)), a(c), c
          })
        try {
          w(window.XMLHttpRequest, P)
        } catch (d) {}
        if (null != O) {
          window.XDomainRequest = function () {
            var b
            return (b = new O()), a(b), b
          }
          try {
            w(window.XDomainRequest, O)
          } catch (d) {}
        }
        if (null != N && D.ajax.trackWebSockets) {
          window.WebSocket = function (a, b) {
            var d
            return (
              (d = null != b ? new N(a, b) : new N(a)),
              J('socket') &&
                c.trigger('request', {
                  type: 'socket',
                  url: a,
                  protocols: b,
                  request: d
                }),
              d
            )
          }
          try {
            w(window.WebSocket, N)
          } catch (d) {}
        }
      }
      return Z(b, a), b
    })(h)),
    (R = null),
    (y = function () {
      return null == R && (R = new k()), R
    }),
    (I = function (a) {
      var b, c, d, e
      for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
        if (((b = e[c]), 'string' == typeof b)) {
          if (-1 !== a.indexOf(b)) return !0
        } else if (b.test(a)) return !0
      return !1
    }),
    y().on('request', function (b) {
      var c, d, e, f, g
      return (
        (f = b.type),
        (e = b.request),
        (g = b.url),
        I(g)
          ? void 0
          : j.running || (D.restartOnRequestAfter === !1 && 'force' !== J(f))
          ? void 0
          : ((d = arguments),
            (c = D.restartOnRequestAfter || 0),
            'boolean' == typeof c && (c = 0),
            setTimeout(function () {
              var b, c, g, h, i, k
              if (
                (b =
                  'socket' === f
                    ? e.readyState < 2
                    : 0 < (h = e.readyState) && 4 > h)
              ) {
                for (
                  j.restart(), i = j.sources, k = [], c = 0, g = i.length;
                  g > c;
                  c++
                ) {
                  if (((K = i[c]), K instanceof a)) {
                    K.watch.apply(K, d)
                    break
                  }
                  k.push(void 0)
                }
                return k
              }
            }, c))
      )
    }),
    (a = (function () {
      function a() {
        var a = this
        ;(this.elements = []),
          y().on('request', function () {
            return a.watch.apply(a, arguments)
          })
      }
      return (
        (a.prototype.watch = function (a) {
          var b, c, d, e
          return (
            (d = a.type),
            (b = a.request),
            (e = a.url),
            I(e)
              ? void 0
              : ((c = 'socket' === d ? new n(b) : new o(b)),
                this.elements.push(c))
          )
        }),
        a
      )
    })()),
    (o = (function () {
      function a(a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h = this
        if (((this.progress = 0), null != window.ProgressEvent))
          for (
            c = null,
              a.addEventListener(
                'progress',
                function (a) {
                  return a.lengthComputable
                    ? (h.progress = (100 * a.loaded) / a.total)
                    : (h.progress = h.progress + (100 - h.progress) / 2)
                },
                !1
              ),
              g = ['load', 'abort', 'timeout', 'error'],
              d = 0,
              e = g.length;
            e > d;
            d++
          )
            (b = g[d]),
              a.addEventListener(
                b,
                function () {
                  return (h.progress = 100)
                },
                !1
              )
        else
          (f = a.onreadystatechange),
            (a.onreadystatechange = function () {
              var b
              return (
                0 === (b = a.readyState) || 4 === b
                  ? (h.progress = 100)
                  : 3 === a.readyState && (h.progress = 50),
                'function' == typeof f ? f.apply(null, arguments) : void 0
              )
            })
      }
      return a
    })()),
    (n = (function () {
      function a(a) {
        var b,
          c,
          d,
          e,
          f = this
        for (
          this.progress = 0, e = ['error', 'open'], c = 0, d = e.length;
          d > c;
          c++
        )
          (b = e[c]),
            a.addEventListener(
              b,
              function () {
                return (f.progress = 100)
              },
              !1
            )
      }
      return a
    })()),
    (d = (function () {
      function a(a) {
        var b, c, d, f
        for (
          null == a && (a = {}),
            this.elements = [],
            null == a.selectors && (a.selectors = []),
            f = a.selectors,
            c = 0,
            d = f.length;
          d > c;
          c++
        )
          (b = f[c]), this.elements.push(new e(b))
      }
      return a
    })()),
    (e = (function () {
      function a(a) {
        ;(this.selector = a), (this.progress = 0), this.check()
      }
      return (
        (a.prototype.check = function () {
          var a = this
          return document.querySelector(this.selector)
            ? this.done()
            : setTimeout(function () {
                return a.check()
              }, D.elements.checkInterval)
        }),
        (a.prototype.done = function () {
          return (this.progress = 100)
        }),
        a
      )
    })()),
    (c = (function () {
      function a() {
        var a,
          b,
          c = this
        ;(this.progress =
          null != (b = this.states[document.readyState]) ? b : 100),
          (a = document.onreadystatechange),
          (document.onreadystatechange = function () {
            return (
              null != c.states[document.readyState] &&
                (c.progress = c.states[document.readyState]),
              'function' == typeof a ? a.apply(null, arguments) : void 0
            )
          })
      }
      return (
        (a.prototype.states = { loading: 0, interactive: 50, complete: 100 }), a
      )
    })()),
    (f = (function () {
      function a() {
        var a,
          b,
          c,
          d,
          e,
          f = this
        ;(this.progress = 0),
          (a = 0),
          (e = []),
          (d = 0),
          (c = C()),
          (b = setInterval(function () {
            var g
            return (
              (g = C() - c - 50),
              (c = C()),
              e.push(g),
              e.length > D.eventLag.sampleCount && e.shift(),
              (a = q(e)),
              ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold
                ? ((f.progress = 100), clearInterval(b))
                : (f.progress = 100 * (3 / (a + 3)))
            )
          }, 50))
      }
      return a
    })()),
    (m = (function () {
      function a(a) {
        ;(this.source = a),
          (this.last = this.sinceLastUpdate = 0),
          (this.rate = D.initialRate),
          (this.catchup = 0),
          (this.progress = this.lastProgress = 0),
          null != this.source && (this.progress = F(this.source, 'progress'))
      }
      return (
        (a.prototype.tick = function (a, b) {
          var c
          return (
            null == b && (b = F(this.source, 'progress')),
            b >= 100 && (this.done = !0),
            b === this.last
              ? (this.sinceLastUpdate += a)
              : (this.sinceLastUpdate &&
                  (this.rate = (b - this.last) / this.sinceLastUpdate),
                (this.catchup = (b - this.progress) / D.catchupTime),
                (this.sinceLastUpdate = 0),
                (this.last = b)),
            b > this.progress && (this.progress += this.catchup * a),
            (c = 1 - Math.pow(this.progress / 100, D.easeFactor)),
            (this.progress += c * this.rate * a),
            (this.progress = Math.min(
              this.lastProgress + D.maxProgressPerFrame,
              this.progress
            )),
            (this.progress = Math.max(0, this.progress)),
            (this.progress = Math.min(100, this.progress)),
            (this.lastProgress = this.progress),
            this.progress
          )
        }),
        a
      )
    })()),
    (L = null),
    (H = null),
    (r = null),
    (M = null),
    (p = null),
    (s = null),
    (j.running = !1),
    (z = function () {
      return D.restartOnPushState ? j.restart() : void 0
    }),
    null != window.history.pushState &&
      ((T = window.history.pushState),
      (window.history.pushState = function () {
        return z(), T.apply(window.history, arguments)
      })),
    null != window.history.replaceState &&
      ((W = window.history.replaceState),
      (window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments)
      })),
    (l = { ajax: a, elements: d, document: c, eventLag: f }),
    (B = function () {
      var a, c, d, e, f, g, h, i
      for (
        j.sources = L = [],
          g = ['ajax', 'elements', 'document', 'eventLag'],
          c = 0,
          e = g.length;
        e > c;
        c++
      )
        (a = g[c]), D[a] !== !1 && L.push(new l[a](D[a]))
      for (
        i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length;
        f > d;
        d++
      )
        (K = i[d]), L.push(new K(D))
      return (j.bar = r = new b()), (H = []), (M = new m())
    })(),
    (j.stop = function () {
      return (
        j.trigger('stop'),
        (j.running = !1),
        r.destroy(),
        (s = !0),
        null != p && ('function' == typeof t && t(p), (p = null)),
        B()
      )
    }),
    (j.restart = function () {
      return j.trigger('restart'), j.stop(), j.start()
    }),
    (j.go = function () {
      var a
      return (
        (j.running = !0),
        r.render(),
        (a = C()),
        (s = !1),
        (p = G(function (b, c) {
          var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w
          for (
            l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length;
            u > q;
            i = ++q
          )
            for (
              K = L[i],
                o = null != H[i] ? H[i] : (H[i] = []),
                h = null != (w = K.elements) ? w : [K],
                k = t = 0,
                v = h.length;
              v > t;
              k = ++t
            )
              (g = h[k]),
                (n = null != o[k] ? o[k] : (o[k] = new m(g))),
                (f &= n.done),
                n.done || (e++, (p += n.tick(b)))
          return (
            (d = p / e),
            r.update(M.tick(b, d)),
            r.done() || f || s
              ? (r.update(100),
                j.trigger('done'),
                setTimeout(function () {
                  return r.finish(), (j.running = !1), j.trigger('hide')
                }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0))))
              : c()
          )
        }))
      )
    }),
    (j.start = function (a) {
      v(D, a), (j.running = !0)
      try {
        r.render()
      } catch (b) {
        i = b
      }
      return document.querySelector('.pace')
        ? (j.trigger('start'), j.go())
        : setTimeout(j.start, 50)
    }),
    'function' == typeof define && define.amd
      ? define(['pace'], function () {
          return j
        })
      : 'object' == typeof exports
      ? (module.exports = j)
      : D.startOnPageLoad && j.start()
}.call(this))

;(function (f) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = f()
  } else if (typeof define === 'function' && define.amd) {
    define([], f)
  } else {
    var g
    if (typeof window !== 'undefined') {
      g = window
    } else if (typeof global !== 'undefined') {
      g = global
    } else if (typeof self !== 'undefined') {
      g = self
    } else {
      g = this
    }
    g.Pjax = f()
  }
})(function () {
  var define, module, exports
  return (function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = 'function' == typeof require && require
            if (!f && c) return c(i, !0)
            if (u) return u(i, !0)
            var a = new Error("Cannot find module '" + i + "'")
            throw ((a.code = 'MODULE_NOT_FOUND'), a)
          }
          var p = (n[i] = { exports: {} })
          e[i][0].call(
            p.exports,
            function (r) {
              var n = e[i][1][r]
              return o(n || r)
            },
            p,
            p.exports,
            r,
            e,
            n,
            t
          )
        }
        return n[i].exports
      }
      for (
        var u = 'function' == typeof require && require, i = 0;
        i < t.length;
        i++
      )
        o(t[i])
      return o
    }
    return r
  })()(
    {
      1: [
        function (require, module, exports) {
          var executeScripts = require('./lib/execute-scripts')
          var forEachEls = require('./lib/foreach-els')
          var parseOptions = require('./lib/parse-options')
          var switches = require('./lib/switches')
          var newUid = require('./lib/uniqueid')
          var on = require('./lib/events/on')
          var trigger = require('./lib/events/trigger')
          var clone = require('./lib/util/clone')
          var contains = require('./lib/util/contains')
          var extend = require('./lib/util/extend')
          var noop = require('./lib/util/noop')
          var Pjax = function (options) {
            this.state = { numPendingSwitches: 0, href: null, options: null }
            this.options = parseOptions(options)
            this.log('Pjax options', this.options)
            if (
              this.options.scrollRestoration &&
              'scrollRestoration' in history
            ) {
              history.scrollRestoration = 'manual'
            }
            this.maxUid = this.lastUid = newUid()
            this.parseDOM(document)
            on(
              window,
              'popstate',
              function (st) {
                if (st.state) {
                  var opt = clone(this.options)
                  opt.url = st.state.url
                  opt.title = st.state.title
                  opt.history = false
                  opt.scrollPos = st.state.scrollPos
                  if (st.state.uid < this.lastUid) {
                    opt.backward = true
                  } else {
                    opt.forward = true
                  }
                  this.lastUid = st.state.uid
                  this.loadUrl(st.state.url, opt)
                }
              }.bind(this)
            )
          }
          Pjax.switches = switches
          Pjax.prototype = {
            log: require('./lib/proto/log'),
            getElements: function (el) {
              return el.querySelectorAll(this.options.elements)
            },
            parseDOM: function (el) {
              var parseElement = require('./lib/proto/parse-element')
              forEachEls(this.getElements(el), parseElement, this)
            },
            refresh: function (el) {
              this.parseDOM(el || document)
            },
            reload: function () {
              window.location.reload()
            },
            attachLink: require('./lib/proto/attach-link'),
            attachForm: require('./lib/proto/attach-form'),
            forEachSelectors: function (cb, context, DOMcontext) {
              return require('./lib/foreach-selectors').bind(this)(
                this.options.selectors,
                cb,
                context,
                DOMcontext
              )
            },
            switchSelectors: function (selectors, fromEl, toEl, options) {
              return require('./lib/switches-selectors').bind(this)(
                this.options.switches,
                this.options.switchesOptions,
                selectors,
                fromEl,
                toEl,
                options
              )
            },
            latestChance: function (href) {
              window.location = href
            },
            onSwitch: function () {
              trigger(window, 'resize scroll')
              this.state.numPendingSwitches--
              if (this.state.numPendingSwitches === 0) {
                this.afterAllSwitches()
              }
            },
            loadContent: function (html, options) {
              if (typeof html !== 'string') {
                trigger(document, 'pjax:complete pjax:error', options)
                return
              }
              var tmpEl = document.implementation.createHTMLDocument('pjax')
              var htmlRegex = /<html[^>]+>/gi
              var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi
              var matches = html.match(htmlRegex)
              if (matches && matches.length) {
                matches = matches[0].match(htmlAttribsRegex)
                if (matches.length) {
                  matches.shift()
                  matches.forEach(function (htmlAttrib) {
                    var attr = htmlAttrib.trim().split('=')
                    if (attr.length === 1) {
                      tmpEl.documentElement.setAttribute(attr[0], true)
                    } else {
                      tmpEl.documentElement.setAttribute(
                        attr[0],
                        attr[1].slice(1, -1)
                      )
                    }
                  })
                }
              }
              tmpEl.documentElement.innerHTML = html
              this.log(
                'load content',
                tmpEl.documentElement.attributes,
                tmpEl.documentElement.innerHTML.length
              )
              if (
                document.activeElement &&
                contains(
                  document,
                  this.options.selectors,
                  document.activeElement
                )
              ) {
                try {
                  document.activeElement.blur()
                } catch (e) {}
              }
              this.switchSelectors(
                this.options.selectors,
                tmpEl,
                document,
                options
              )
            },
            abortRequest: require('./lib/abort-request'),
            doRequest: require('./lib/send-request'),
            handleResponse: require('./lib/proto/handle-response'),
            loadUrl: function (href, options) {
              options =
                typeof options === 'object'
                  ? extend({}, this.options, options)
                  : clone(this.options)
              this.log('load href', href, options)
              this.abortRequest(this.request)
              trigger(document, 'pjax:send', options)
              this.request = this.doRequest(
                href,
                options,
                this.handleResponse.bind(this)
              )
            },
            afterAllSwitches: function () {
              var autofocusEl = Array.prototype.slice
                .call(document.querySelectorAll('[autofocus]'))
                .pop()
              if (autofocusEl && document.activeElement !== autofocusEl) {
                autofocusEl.focus()
              }
              this.options.selectors.forEach(function (selector) {
                forEachEls(document.querySelectorAll(selector), function (el) {
                  executeScripts(el)
                })
              })
              var state = this.state
              if (state.options.history) {
                if (!window.history.state) {
                  this.lastUid = this.maxUid = newUid()
                  window.history.replaceState(
                    {
                      url: window.location.href,
                      title: document.title,
                      uid: this.maxUid,
                      scrollPos: [0, 0]
                    },
                    document.title
                  )
                }
                this.lastUid = this.maxUid = newUid()
                window.history.pushState(
                  {
                    url: state.href,
                    title: state.options.title,
                    uid: this.maxUid,
                    scrollPos: [0, 0]
                  },
                  state.options.title,
                  state.href
                )
              }
              this.forEachSelectors(function (el) {
                this.parseDOM(el)
              }, this)
              trigger(document, 'pjax:complete pjax:success', state.options)
              if (typeof state.options.analytics === 'function') {
                state.options.analytics()
              }
              if (state.options.history) {
                var a = document.createElement('a')
                a.href = this.state.href
                if (a.hash) {
                  var name = a.hash.slice(1)
                  name = decodeURIComponent(name)
                  var curtop = 0
                  var target =
                    document.getElementById(name) ||
                    document.getElementsByName(name)[0]
                  if (target) {
                    if (target.offsetParent) {
                      do {
                        curtop += target.offsetTop
                        target = target.offsetParent
                      } while (target)
                    }
                  }
                  window.scrollTo(0, curtop)
                } else if (state.options.scrollTo !== false) {
                  if (state.options.scrollTo.length > 1) {
                    window.scrollTo(
                      state.options.scrollTo[0],
                      state.options.scrollTo[1]
                    )
                  } else {
                    window.scrollTo(0, state.options.scrollTo)
                  }
                }
              } else if (
                state.options.scrollRestoration &&
                state.options.scrollPos
              ) {
                window.scrollTo(
                  state.options.scrollPos[0],
                  state.options.scrollPos[1]
                )
              }
              this.state = { numPendingSwitches: 0, href: null, options: null }
            }
          }
          Pjax.isSupported = require('./lib/is-supported')
          if (Pjax.isSupported()) {
            module.exports = Pjax
          } else {
            var stupidPjax = noop
            for (var key in Pjax.prototype) {
              if (
                Pjax.prototype.hasOwnProperty(key) &&
                typeof Pjax.prototype[key] === 'function'
              ) {
                stupidPjax[key] = noop
              }
            }
            module.exports = stupidPjax
          }
        },
        {
          './lib/abort-request': 2,
          './lib/events/on': 4,
          './lib/events/trigger': 5,
          './lib/execute-scripts': 6,
          './lib/foreach-els': 7,
          './lib/foreach-selectors': 8,
          './lib/is-supported': 9,
          './lib/parse-options': 10,
          './lib/proto/attach-form': 11,
          './lib/proto/attach-link': 12,
          './lib/proto/handle-response': 13,
          './lib/proto/log': 14,
          './lib/proto/parse-element': 15,
          './lib/send-request': 16,
          './lib/switches': 18,
          './lib/switches-selectors': 17,
          './lib/uniqueid': 19,
          './lib/util/clone': 20,
          './lib/util/contains': 21,
          './lib/util/extend': 22,
          './lib/util/noop': 23
        }
      ],
      2: [
        function (require, module, exports) {
          var noop = require('./util/noop')
          module.exports = function (request) {
            if (request && request.readyState < 4) {
              request.onreadystatechange = noop
              request.abort()
            }
          }
        },
        { './util/noop': 23 }
      ],
      3: [
        function (require, module, exports) {
          module.exports = function (el) {
            var code = el.text || el.textContent || el.innerHTML || ''
            var src = el.src || ''
            var parent =
              el.parentNode ||
              document.querySelector('head') ||
              document.documentElement
            var script = document.createElement('script')
            if (code.match('document.write')) {
              if (console && console.log) {
                console.log(
                  'Script contains document.write. Can’t be executed correctly. Code skipped ',
                  el
                )
              }
              return false
            }
            script.type = 'text/javascript'
            script.id = el.id
            if (src !== '') {
              script.src = src
              script.async = false
            }
            if (code !== '') {
              try {
                script.appendChild(document.createTextNode(code))
              } catch (e) {
                script.text = code
              }
            }
            parent.appendChild(script)
            if (
              (parent instanceof HTMLHeadElement ||
                parent instanceof HTMLBodyElement) &&
              parent.contains(script)
            ) {
              parent.removeChild(script)
            }
            return true
          }
        },
        {}
      ],
      4: [
        function (require, module, exports) {
          var forEachEls = require('../foreach-els')
          module.exports = function (els, events, listener, useCapture) {
            events = typeof events === 'string' ? events.split(' ') : events
            events.forEach(function (e) {
              forEachEls(els, function (el) {
                el.addEventListener(e, listener, useCapture)
              })
            })
          }
        },
        { '../foreach-els': 7 }
      ],
      5: [
        function (require, module, exports) {
          var forEachEls = require('../foreach-els')
          module.exports = function (els, events, opts) {
            events = typeof events === 'string' ? events.split(' ') : events
            events.forEach(function (e) {
              var event
              event = document.createEvent('HTMLEvents')
              event.initEvent(e, true, true)
              event.eventName = e
              if (opts) {
                Object.keys(opts).forEach(function (key) {
                  event[key] = opts[key]
                })
              }
              forEachEls(els, function (el) {
                var domFix = false
                if (!el.parentNode && el !== document && el !== window) {
                  domFix = true
                  document.body.appendChild(el)
                }
                el.dispatchEvent(event)
                if (domFix) {
                  el.parentNode.removeChild(el)
                }
              })
            })
          }
        },
        { '../foreach-els': 7 }
      ],
      6: [
        function (require, module, exports) {
          var forEachEls = require('./foreach-els')
          var evalScript = require('./eval-script')
          module.exports = function (el) {
            if (el.tagName.toLowerCase() === 'script') {
              evalScript(el)
            }
            forEachEls(el.querySelectorAll('script'), function (script) {
              if (
                !script.type ||
                script.type.toLowerCase() === 'text/javascript'
              ) {
                if (script.parentNode) {
                  script.parentNode.removeChild(script)
                }
                evalScript(script)
              }
            })
          }
        },
        { './eval-script': 3, './foreach-els': 7 }
      ],
      7: [
        function (require, module, exports) {
          module.exports = function (els, fn, context) {
            if (
              els instanceof HTMLCollection ||
              els instanceof NodeList ||
              els instanceof Array
            ) {
              return Array.prototype.forEach.call(els, fn, context)
            }
            return fn.call(context, els)
          }
        },
        {}
      ],
      8: [
        function (require, module, exports) {
          var forEachEls = require('./foreach-els')
          module.exports = function (selectors, cb, context, DOMcontext) {
            DOMcontext = DOMcontext || document
            selectors.forEach(function (selector) {
              forEachEls(DOMcontext.querySelectorAll(selector), cb, context)
            })
          }
        },
        { './foreach-els': 7 }
      ],
      9: [
        function (require, module, exports) {
          module.exports = function () {
            return (
              window.history &&
              window.history.pushState &&
              window.history.replaceState &&
              !navigator.userAgent.match(
                /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
              )
            )
          }
        },
        {}
      ],
      10: [
        function (require, module, exports) {
          var defaultSwitches = require('./switches')
          module.exports = function (options) {
            options = options || {}
            options.elements = options.elements || 'a[href], form[action]'
            options.selectors = options.selectors || ['title', '.js-Pjax']
            options.switches = options.switches || {}
            options.switchesOptions = options.switchesOptions || {}
            options.history =
              typeof options.history === 'undefined' ? true : options.history
            options.analytics =
              typeof options.analytics === 'function' ||
              options.analytics === false
                ? options.analytics
                : defaultAnalytics
            options.scrollTo =
              typeof options.scrollTo === 'undefined' ? 0 : options.scrollTo
            options.scrollRestoration =
              typeof options.scrollRestoration !== 'undefined'
                ? options.scrollRestoration
                : true
            options.cacheBust =
              typeof options.cacheBust === 'undefined'
                ? true
                : options.cacheBust
            options.debug = options.debug || false
            options.timeout = options.timeout || 0
            options.currentUrlFullReload =
              typeof options.currentUrlFullReload === 'undefined'
                ? false
                : options.currentUrlFullReload
            if (!options.switches.head) {
              options.switches.head = defaultSwitches.switchElementsAlt
            }
            if (!options.switches.body) {
              options.switches.body = defaultSwitches.switchElementsAlt
            }
            return options
          }
          function defaultAnalytics() {
            if (window._gaq) {
              _gaq.push(['_trackPageview'])
            }
            if (window.ga) {
              ga('send', 'pageview', {
                page: location.pathname,
                title: document.title
              })
            }
          }
        },
        { './switches': 18 }
      ],
      11: [
        function (require, module, exports) {
          var on = require('../events/on')
          var clone = require('../util/clone')
          var attrState = 'data-pjax-state'
          var formAction = function (el, event) {
            if (isDefaultPrevented(event)) {
              return
            }
            var options = clone(this.options)
            options.requestOptions = {
              requestUrl: el.getAttribute('action') || window.location.href,
              requestMethod: el.getAttribute('method') || 'GET'
            }
            var virtLinkElement = document.createElement('a')
            virtLinkElement.setAttribute(
              'href',
              options.requestOptions.requestUrl
            )
            var attrValue = checkIfShouldAbort(virtLinkElement, options)
            if (attrValue) {
              el.setAttribute(attrState, attrValue)
              return
            }
            event.preventDefault()
            if (el.enctype === 'multipart/form-data') {
              options.requestOptions.formData = new FormData(el)
            } else {
              options.requestOptions.requestParams = parseFormElements(el)
            }
            el.setAttribute(attrState, 'submit')
            options.triggerElement = el
            this.loadUrl(virtLinkElement.href, options)
          }
          function parseFormElements(el) {
            var requestParams = []
            var formElements = el.elements
            for (var i = 0; i < formElements.length; i++) {
              var element = formElements[i]
              var tagName = element.tagName.toLowerCase()
              if (
                !!element.name &&
                element.attributes !== undefined &&
                tagName !== 'button'
              ) {
                var type = element.attributes.type
                if (
                  !type ||
                  (type.value !== 'checkbox' && type.value !== 'radio') ||
                  element.checked
                ) {
                  var values = []
                  if (tagName === 'select') {
                    var opt
                    for (var j = 0; j < element.options.length; j++) {
                      opt = element.options[j]
                      if (opt.selected && !opt.disabled) {
                        values.push(
                          opt.hasAttribute('value') ? opt.value : opt.text
                        )
                      }
                    }
                  } else {
                    values.push(element.value)
                  }
                  for (var k = 0; k < values.length; k++) {
                    requestParams.push({
                      name: encodeURIComponent(element.name),
                      value: encodeURIComponent(values[k])
                    })
                  }
                }
              }
            }
            return requestParams
          }
          function checkIfShouldAbort(virtLinkElement, options) {
            if (
              virtLinkElement.protocol !== window.location.protocol ||
              virtLinkElement.host !== window.location.host
            ) {
              return 'external'
            }
            if (
              virtLinkElement.hash &&
              virtLinkElement.href.replace(virtLinkElement.hash, '') ===
                window.location.href.replace(location.hash, '')
            ) {
              return 'anchor'
            }
            if (
              virtLinkElement.href ===
              window.location.href.split('#')[0] + '#'
            ) {
              return 'anchor-empty'
            }
            if (
              options.currentUrlFullReload &&
              virtLinkElement.href === window.location.href.split('#')[0]
            ) {
              return 'reload'
            }
          }
          var isDefaultPrevented = function (event) {
            return event.defaultPrevented || event.returnValue === false
          }
          module.exports = function (el) {
            var that = this
            el.setAttribute(attrState, '')
            on(el, 'submit', function (event) {
              formAction.call(that, el, event)
            })
          }
        },
        { '../events/on': 4, '../util/clone': 20 }
      ],
      12: [
        function (require, module, exports) {
          var on = require('../events/on')
          var clone = require('../util/clone')
          var attrState = 'data-pjax-state'
          var linkAction = function (el, event) {
            if (isDefaultPrevented(event)) {
              return
            }
            var options = clone(this.options)
            var attrValue = checkIfShouldAbort(el, event)
            if (attrValue) {
              el.setAttribute(attrState, attrValue)
              return
            }
            event.preventDefault()
            if (
              this.options.currentUrlFullReload &&
              el.href === window.location.href.split('#')[0]
            ) {
              el.setAttribute(attrState, 'reload')
              this.reload()
              return
            }
            el.setAttribute(attrState, 'load')
            options.triggerElement = el
            this.loadUrl(el.href, options)
          }
          function checkIfShouldAbort(el, event) {
            if (
              event.which > 1 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            ) {
              return 'modifier'
            }
            if (
              el.protocol !== window.location.protocol ||
              el.host !== window.location.host
            ) {
              return 'external'
            }
            if (
              el.hash &&
              el.href.replace(el.hash, '') ===
                window.location.href.replace(location.hash, '')
            ) {
              return 'anchor'
            }
            if (el.href === window.location.href.split('#')[0] + '#') {
              return 'anchor-empty'
            }
          }
          var isDefaultPrevented = function (event) {
            return event.defaultPrevented || event.returnValue === false
          }
          module.exports = function (el) {
            var that = this
            el.setAttribute(attrState, '')
            on(el, 'click', function (event) {
              linkAction.call(that, el, event)
            })
            on(
              el,
              'keyup',
              function (event) {
                if (event.keyCode === 13) {
                  linkAction.call(that, el, event)
                }
              }.bind(this)
            )
          }
        },
        { '../events/on': 4, '../util/clone': 20 }
      ],
      13: [
        function (require, module, exports) {
          var clone = require('../util/clone')
          var newUid = require('../uniqueid')
          var trigger = require('../events/trigger')
          module.exports = function (responseText, request, href, options) {
            options = clone(options || this.options)
            options.request = request
            if (responseText === false) {
              trigger(document, 'pjax:complete pjax:error', options)
              return
            }
            var currentState = window.history.state || {}
            window.history.replaceState(
              {
                url: currentState.url || window.location.href,
                title: currentState.title || document.title,
                uid: currentState.uid || newUid(),
                scrollPos: [
                  document.documentElement.scrollLeft ||
                    document.body.scrollLeft,
                  document.documentElement.scrollTop || document.body.scrollTop
                ]
              },
              document.title,
              window.location.href
            )
            var oldHref = href
            if (request.responseURL) {
              if (href !== request.responseURL) {
                href = request.responseURL
              }
            } else if (request.getResponseHeader('X-PJAX-URL')) {
              href = request.getResponseHeader('X-PJAX-URL')
            } else if (request.getResponseHeader('X-XHR-Redirected-To')) {
              href = request.getResponseHeader('X-XHR-Redirected-To')
            }
            var a = document.createElement('a')
            a.href = oldHref
            var oldHash = a.hash
            a.href = href
            if (oldHash && !a.hash) {
              a.hash = oldHash
              href = a.href
            }
            this.state.href = href
            this.state.options = options
            try {
              this.loadContent(responseText, options)
            } catch (e) {
              trigger(document, 'pjax:error', options)
              if (!this.options.debug) {
                if (console && console.error) {
                  console.error('Pjax switch fail: ', e)
                }
                return this.latestChance(href)
              } else {
                throw e
              }
            }
          }
        },
        { '../events/trigger': 5, '../uniqueid': 19, '../util/clone': 20 }
      ],
      14: [
        function (require, module, exports) {
          module.exports = function () {
            if (this.options.debug && console) {
              if (typeof console.log === 'function') {
                console.log.apply(console, arguments)
              } else if (console.log) {
                console.log(arguments)
              }
            }
          }
        },
        {}
      ],
      15: [
        function (require, module, exports) {
          var attrState = 'data-pjax-state'
          module.exports = function (el) {
            switch (el.tagName.toLowerCase()) {
              case 'a':
                if (!el.hasAttribute(attrState)) {
                  this.attachLink(el)
                }
                break
              case 'form':
                if (!el.hasAttribute(attrState)) {
                  this.attachForm(el)
                }
                break
              default:
                throw 'Pjax can only be applied on <a> or <form> submit'
            }
          }
        },
        {}
      ],
      16: [
        function (require, module, exports) {
          var updateQueryString = require('./util/update-query-string')
          module.exports = function (location, options, callback) {
            options = options || {}
            var queryString
            var requestOptions = options.requestOptions || {}
            var requestMethod = (
              requestOptions.requestMethod || 'GET'
            ).toUpperCase()
            var requestParams = requestOptions.requestParams || null
            var formData = requestOptions.formData || null
            var requestPayload = null
            var request = new XMLHttpRequest()
            var timeout = options.timeout || 0
            request.onreadystatechange = function () {
              if (request.readyState === 4) {
                if (request.status === 200) {
                  callback(request.responseText, request, location, options)
                } else if (request.status !== 0) {
                  callback(null, request, location, options)
                }
              }
            }
            request.onerror = function (e) {
              console.log(e)
              callback(null, request, location, options)
            }
            request.ontimeout = function () {
              callback(null, request, location, options)
            }
            if (requestParams && requestParams.length) {
              queryString = requestParams
                .map(function (param) {
                  return param.name + '=' + param.value
                })
                .join('&')
              switch (requestMethod) {
                case 'GET':
                  location = location.split('?')[0]
                  location += '?' + queryString
                  break
                case 'POST':
                  requestPayload = queryString
                  break
              }
            } else if (formData) {
              requestPayload = formData
            }
            if (options.cacheBust) {
              location = updateQueryString(location, 't', Date.now())
            }
            request.open(requestMethod, location, true)
            request.timeout = timeout
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
            request.setRequestHeader('X-PJAX', 'true')
            request.setRequestHeader(
              'X-PJAX-Selectors',
              JSON.stringify(options.selectors)
            )
            if (requestPayload && requestMethod === 'POST' && !formData) {
              request.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
              )
            }
            request.send(requestPayload)
            return request
          }
        },
        { './util/update-query-string': 24 }
      ],
      17: [
        function (require, module, exports) {
          var forEachEls = require('./foreach-els')
          var defaultSwitches = require('./switches')
          module.exports = function (
            switches,
            switchesOptions,
            selectors,
            fromEl,
            toEl,
            options
          ) {
            var switchesQueue = []
            selectors.forEach(function (selector) {
              var newEls = fromEl.querySelectorAll(selector)
              var oldEls = toEl.querySelectorAll(selector)
              if (this.log) {
                this.log('Pjax switch', selector, newEls, oldEls)
              }
              if (newEls.length !== oldEls.length) {
                throw (
                  'DOM doesn’t look the same on new loaded page: ’' +
                  selector +
                  '’ - new ' +
                  newEls.length +
                  ', old ' +
                  oldEls.length
                )
              }
              forEachEls(
                newEls,
                function (newEl, i) {
                  var oldEl = oldEls[i]
                  if (this.log) {
                    this.log('newEl', newEl, 'oldEl', oldEl)
                  }
                  var callback = switches[selector]
                    ? switches[selector].bind(
                        this,
                        oldEl,
                        newEl,
                        options,
                        switchesOptions[selector]
                      )
                    : defaultSwitches.outerHTML.bind(
                        this,
                        oldEl,
                        newEl,
                        options
                      )
                  switchesQueue.push(callback)
                },
                this
              )
            }, this)
            this.state.numPendingSwitches = switchesQueue.length
            switchesQueue.forEach(function (queuedSwitch) {
              queuedSwitch()
            })
          }
        },
        { './foreach-els': 7, './switches': 18 }
      ],
      18: [
        function (require, module, exports) {
          var on = require('./events/on')
          module.exports = {
            outerHTML: function (oldEl, newEl) {
              oldEl.outerHTML = newEl.outerHTML
              this.onSwitch()
            },
            innerHTML: function (oldEl, newEl) {
              oldEl.innerHTML = newEl.innerHTML
              if (newEl.className === '') {
                oldEl.removeAttribute('class')
              } else {
                oldEl.className = newEl.className
              }
              this.onSwitch()
            },
            switchElementsAlt: function (oldEl, newEl) {
              oldEl.innerHTML = newEl.innerHTML
              if (newEl.hasAttributes()) {
                var attrs = newEl.attributes
                for (var i = 0; i < attrs.length; i++) {
                  oldEl.attributes.setNamedItem(attrs[i].cloneNode())
                }
              }
              this.onSwitch()
            },
            replaceNode: function (oldEl, newEl) {
              oldEl.parentNode.replaceChild(newEl, oldEl)
              this.onSwitch()
            },
            sideBySide: function (oldEl, newEl, options, switchOptions) {
              var forEach = Array.prototype.forEach
              var elsToRemove = []
              var elsToAdd = []
              var fragToAppend = document.createDocumentFragment()
              var animationEventNames =
                'animationend webkitAnimationEnd MSAnimationEnd oanimationend'
              var animatedElsNumber = 0
              var sexyAnimationEnd = function (e) {
                if (e.target !== e.currentTarget) {
                  return
                }
                animatedElsNumber--
                if (animatedElsNumber <= 0 && elsToRemove) {
                  elsToRemove.forEach(function (el) {
                    if (el.parentNode) {
                      el.parentNode.removeChild(el)
                    }
                  })
                  elsToAdd.forEach(function (el) {
                    el.className = el.className.replace(
                      el.getAttribute('data-pjax-classes'),
                      ''
                    )
                    el.removeAttribute('data-pjax-classes')
                  })
                  elsToAdd = null
                  elsToRemove = null
                  this.onSwitch()
                }
              }.bind(this)
              switchOptions = switchOptions || {}
              forEach.call(oldEl.childNodes, function (el) {
                elsToRemove.push(el)
                if (el.classList && !el.classList.contains('js-Pjax-remove')) {
                  if (el.hasAttribute('data-pjax-classes')) {
                    el.className = el.className.replace(
                      el.getAttribute('data-pjax-classes'),
                      ''
                    )
                    el.removeAttribute('data-pjax-classes')
                  }
                  el.classList.add('js-Pjax-remove')
                  if (
                    switchOptions.callbacks &&
                    switchOptions.callbacks.removeElement
                  ) {
                    switchOptions.callbacks.removeElement(el)
                  }
                  if (switchOptions.classNames) {
                    el.className +=
                      ' ' +
                      switchOptions.classNames.remove +
                      ' ' +
                      (options.backward
                        ? switchOptions.classNames.backward
                        : switchOptions.classNames.forward)
                  }
                  animatedElsNumber++
                  on(el, animationEventNames, sexyAnimationEnd, true)
                }
              })
              forEach.call(newEl.childNodes, function (el) {
                if (el.classList) {
                  var addClasses = ''
                  if (switchOptions.classNames) {
                    addClasses =
                      ' js-Pjax-add ' +
                      switchOptions.classNames.add +
                      ' ' +
                      (options.backward
                        ? switchOptions.classNames.forward
                        : switchOptions.classNames.backward)
                  }
                  if (
                    switchOptions.callbacks &&
                    switchOptions.callbacks.addElement
                  ) {
                    switchOptions.callbacks.addElement(el)
                  }
                  el.className += addClasses
                  el.setAttribute('data-pjax-classes', addClasses)
                  elsToAdd.push(el)
                  fragToAppend.appendChild(el)
                  animatedElsNumber++
                  on(el, animationEventNames, sexyAnimationEnd, true)
                }
              })
              oldEl.className = newEl.className
              oldEl.appendChild(fragToAppend)
            }
          }
        },
        { './events/on': 4 }
      ],
      19: [
        function (require, module, exports) {
          module.exports = (function () {
            var counter = 0
            return function () {
              var id = 'pjax' + new Date().getTime() + '_' + counter
              counter++
              return id
            }
          })()
        },
        {}
      ],
      20: [
        function (require, module, exports) {
          module.exports = function (obj) {
            if (null === obj || 'object' !== typeof obj) {
              return obj
            }
            var copy = obj.constructor()
            for (var attr in obj) {
              if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr]
              }
            }
            return copy
          }
        },
        {}
      ],
      21: [
        function (require, module, exports) {
          module.exports = function contains(doc, selectors, el) {
            for (var i = 0; i < selectors.length; i++) {
              var selectedEls = doc.querySelectorAll(selectors[i])
              for (var j = 0; j < selectedEls.length; j++) {
                if (selectedEls[j].contains(el)) {
                  return true
                }
              }
            }
            return false
          }
        },
        {}
      ],
      22: [
        function (require, module, exports) {
          module.exports = function (target) {
            if (target == null) {
              return null
            }
            var to = Object(target)
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              if (source != null) {
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    to[key] = source[key]
                  }
                }
              }
            }
            return to
          }
        },
        {}
      ],
      23: [
        function (require, module, exports) {
          module.exports = function () {}
        },
        {}
      ],
      24: [
        function (require, module, exports) {
          module.exports = function (uri, key, value) {
            var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
            var separator = uri.indexOf('?') !== -1 ? '&' : '?'
            if (uri.match(re)) {
              return uri.replace(re, '$1' + key + '=' + value + '$2')
            } else {
              return uri + separator + key + '=' + value
            }
          }
        },
        {}
      ]
    },
    {},
    [1]
  )(1)
})

/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/whatwg-fetch@3.4.0/dist/fetch.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e((t.WHATWGFetch = {}))
})(this, function (t) {
  'use strict'
  var e =
      ('undefined' != typeof globalThis && globalThis) ||
      ('undefined' != typeof self && self) ||
      (void 0 !== e && e),
    r = {
      searchParams: 'URLSearchParams' in e,
      iterable: 'Symbol' in e && 'iterator' in Symbol,
      blob:
        'FileReader' in e &&
        'Blob' in e &&
        (function () {
          try {
            return new Blob(), !0
          } catch (t) {
            return !1
          }
        })(),
      formData: 'FormData' in e,
      arrayBuffer: 'ArrayBuffer' in e
    }
  if (r.arrayBuffer)
    var o = [
        '[object Int8Array]',
        '[object Uint8Array]',
        '[object Uint8ClampedArray]',
        '[object Int16Array]',
        '[object Uint16Array]',
        '[object Int32Array]',
        '[object Uint32Array]',
        '[object Float32Array]',
        '[object Float64Array]'
      ],
      n =
        ArrayBuffer.isView ||
        function (t) {
          return t && o.indexOf(Object.prototype.toString.call(t)) > -1
        }
  function i(t) {
    if (
      ('string' != typeof t && (t = String(t)),
      /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || '' === t)
    )
      throw new TypeError('Invalid character in header field name')
    return t.toLowerCase()
  }
  function s(t) {
    return 'string' != typeof t && (t = String(t)), t
  }
  function a(t) {
    var e = {
      next: function () {
        var e = t.shift()
        return { done: void 0 === e, value: e }
      }
    }
    return (
      r.iterable &&
        (e[Symbol.iterator] = function () {
          return e
        }),
      e
    )
  }
  function h(t) {
    ;(this.map = {}),
      t instanceof h
        ? t.forEach(function (t, e) {
            this.append(e, t)
          }, this)
        : Array.isArray(t)
        ? t.forEach(function (t) {
            this.append(t[0], t[1])
          }, this)
        : t &&
          Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e])
          }, this)
  }
  function f(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError('Already read'))
    t.bodyUsed = !0
  }
  function u(t) {
    return new Promise(function (e, r) {
      ;(t.onload = function () {
        e(t.result)
      }),
        (t.onerror = function () {
          r(t.error)
        })
    })
  }
  function c(t) {
    var e = new FileReader(),
      r = u(e)
    return e.readAsArrayBuffer(t), r
  }
  function d(t) {
    if (t.slice) return t.slice(0)
    var e = new Uint8Array(t.byteLength)
    return e.set(new Uint8Array(t)), e.buffer
  }
  function y() {
    return (
      (this.bodyUsed = !1),
      (this._initBody = function (t) {
        var e
        ;(this.bodyUsed = this.bodyUsed),
          (this._bodyInit = t),
          t
            ? 'string' == typeof t
              ? (this._bodyText = t)
              : r.blob && Blob.prototype.isPrototypeOf(t)
              ? (this._bodyBlob = t)
              : r.formData && FormData.prototype.isPrototypeOf(t)
              ? (this._bodyFormData = t)
              : r.searchParams && URLSearchParams.prototype.isPrototypeOf(t)
              ? (this._bodyText = t.toString())
              : r.arrayBuffer &&
                r.blob &&
                (e = t) &&
                DataView.prototype.isPrototypeOf(e)
              ? ((this._bodyArrayBuffer = d(t.buffer)),
                (this._bodyInit = new Blob([this._bodyArrayBuffer])))
              : r.arrayBuffer &&
                (ArrayBuffer.prototype.isPrototypeOf(t) || n(t))
              ? (this._bodyArrayBuffer = d(t))
              : (this._bodyText = t = Object.prototype.toString.call(t))
            : (this._bodyText = ''),
          this.headers.get('content-type') ||
            ('string' == typeof t
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : r.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(t) &&
                this.headers.set(
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8'
                ))
      }),
      r.blob &&
        ((this.blob = function () {
          var t = f(this)
          if (t) return t
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
          if (this._bodyFormData)
            throw new Error('could not read FormData body as blob')
          return Promise.resolve(new Blob([this._bodyText]))
        }),
        (this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            var t = f(this)
            return (
              t ||
              (ArrayBuffer.isView(this._bodyArrayBuffer)
                ? Promise.resolve(
                    this._bodyArrayBuffer.buffer.slice(
                      this._bodyArrayBuffer.byteOffset,
                      this._bodyArrayBuffer.byteOffset +
                        this._bodyArrayBuffer.byteLength
                    )
                  )
                : Promise.resolve(this._bodyArrayBuffer))
            )
          }
          return this.blob().then(c)
        })),
      (this.text = function () {
        var t,
          e,
          r,
          o = f(this)
        if (o) return o
        if (this._bodyBlob)
          return (
            (t = this._bodyBlob),
            (e = new FileReader()),
            (r = u(e)),
            e.readAsText(t),
            r
          )
        if (this._bodyArrayBuffer)
          return Promise.resolve(
            (function (t) {
              for (
                var e = new Uint8Array(t), r = new Array(e.length), o = 0;
                o < e.length;
                o++
              )
                r[o] = String.fromCharCode(e[o])
              return r.join('')
            })(this._bodyArrayBuffer)
          )
        if (this._bodyFormData)
          throw new Error('could not read FormData body as text')
        return Promise.resolve(this._bodyText)
      }),
      r.formData &&
        (this.formData = function () {
          return this.text().then(b)
        }),
      (this.json = function () {
        return this.text().then(JSON.parse)
      }),
      this
    )
  }
  ;(h.prototype.append = function (t, e) {
    ;(t = i(t)), (e = s(e))
    var r = this.map[t]
    this.map[t] = r ? r + ', ' + e : e
  }),
    (h.prototype.delete = function (t) {
      delete this.map[i(t)]
    }),
    (h.prototype.get = function (t) {
      return (t = i(t)), this.has(t) ? this.map[t] : null
    }),
    (h.prototype.has = function (t) {
      return this.map.hasOwnProperty(i(t))
    }),
    (h.prototype.set = function (t, e) {
      this.map[i(t)] = s(e)
    }),
    (h.prototype.forEach = function (t, e) {
      for (var r in this.map)
        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
    }),
    (h.prototype.keys = function () {
      var t = []
      return (
        this.forEach(function (e, r) {
          t.push(r)
        }),
        a(t)
      )
    }),
    (h.prototype.values = function () {
      var t = []
      return (
        this.forEach(function (e) {
          t.push(e)
        }),
        a(t)
      )
    }),
    (h.prototype.entries = function () {
      var t = []
      return (
        this.forEach(function (e, r) {
          t.push([r, e])
        }),
        a(t)
      )
    }),
    r.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries)
  var p = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
  function l(t, e) {
    if (!(this instanceof l))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      )
    var r,
      o,
      n = (e = e || {}).body
    if (t instanceof l) {
      if (t.bodyUsed) throw new TypeError('Already read')
      ;(this.url = t.url),
        (this.credentials = t.credentials),
        e.headers || (this.headers = new h(t.headers)),
        (this.method = t.method),
        (this.mode = t.mode),
        (this.signal = t.signal),
        n || null == t._bodyInit || ((n = t._bodyInit), (t.bodyUsed = !0))
    } else this.url = String(t)
    if (
      ((this.credentials = e.credentials || this.credentials || 'same-origin'),
      (!e.headers && this.headers) || (this.headers = new h(e.headers)),
      (this.method =
        ((r = e.method || this.method || 'GET'),
        (o = r.toUpperCase()),
        p.indexOf(o) > -1 ? o : r)),
      (this.mode = e.mode || this.mode || null),
      (this.signal = e.signal || this.signal),
      (this.referrer = null),
      ('GET' === this.method || 'HEAD' === this.method) && n)
    )
      throw new TypeError('Body not allowed for GET or HEAD requests')
    if (
      (this._initBody(n),
      !(
        ('GET' !== this.method && 'HEAD' !== this.method) ||
        ('no-store' !== e.cache && 'no-cache' !== e.cache)
      ))
    ) {
      var i = /([?&])_=[^&]*/
      if (i.test(this.url))
        this.url = this.url.replace(i, '$1_=' + new Date().getTime())
      else {
        this.url +=
          (/\?/.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
  function b(t) {
    var e = new FormData()
    return (
      t
        .trim()
        .split('&')
        .forEach(function (t) {
          if (t) {
            var r = t.split('='),
              o = r.shift().replace(/\+/g, ' '),
              n = r.join('=').replace(/\+/g, ' ')
            e.append(decodeURIComponent(o), decodeURIComponent(n))
          }
        }),
      e
    )
  }
  function m(t, e) {
    if (!(this instanceof m))
      throw new TypeError(
        'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
      )
    e || (e = {}),
      (this.type = 'default'),
      (this.status = void 0 === e.status ? 200 : e.status),
      (this.ok = this.status >= 200 && this.status < 300),
      (this.statusText = 'statusText' in e ? e.statusText : ''),
      (this.headers = new h(e.headers)),
      (this.url = e.url || ''),
      this._initBody(t)
  }
  ;(l.prototype.clone = function () {
    return new l(this, { body: this._bodyInit })
  }),
    y.call(l.prototype),
    y.call(m.prototype),
    (m.prototype.clone = function () {
      return new m(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new h(this.headers),
        url: this.url
      })
    }),
    (m.error = function () {
      var t = new m(null, { status: 0, statusText: '' })
      return (t.type = 'error'), t
    })
  var w = [301, 302, 303, 307, 308]
  ;(m.redirect = function (t, e) {
    if (-1 === w.indexOf(e)) throw new RangeError('Invalid status code')
    return new m(null, { status: e, headers: { location: t } })
  }),
    (t.DOMException = e.DOMException)
  try {
    new t.DOMException()
  } catch (e) {
    ;(t.DOMException = function (t, e) {
      ;(this.message = t), (this.name = e)
      var r = Error(t)
      this.stack = r.stack
    }),
      (t.DOMException.prototype = Object.create(Error.prototype)),
      (t.DOMException.prototype.constructor = t.DOMException)
  }
  function v(o, n) {
    return new Promise(function (i, a) {
      var f = new l(o, n)
      if (f.signal && f.signal.aborted)
        return a(new t.DOMException('Aborted', 'AbortError'))
      var u = new XMLHttpRequest()
      function c() {
        u.abort()
      }
      ;(u.onload = function () {
        var t,
          e,
          r = {
            status: u.status,
            statusText: u.statusText,
            headers:
              ((t = u.getAllResponseHeaders() || ''),
              (e = new h()),
              t
                .replace(/\r?\n[\t ]+/g, ' ')
                .split(/\r?\n/)
                .forEach(function (t) {
                  var r = t.split(':'),
                    o = r.shift().trim()
                  if (o) {
                    var n = r.join(':').trim()
                    e.append(o, n)
                  }
                }),
              e)
          }
        r.url =
          'responseURL' in u ? u.responseURL : r.headers.get('X-Request-URL')
        var o = 'response' in u ? u.response : u.responseText
        setTimeout(function () {
          i(new m(o, r))
        }, 0)
      }),
        (u.onerror = function () {
          setTimeout(function () {
            a(new TypeError('Network request failed'))
          }, 0)
        }),
        (u.ontimeout = function () {
          setTimeout(function () {
            a(new TypeError('Network request failed'))
          }, 0)
        }),
        (u.onabort = function () {
          setTimeout(function () {
            a(new t.DOMException('Aborted', 'AbortError'))
          }, 0)
        }),
        u.open(
          f.method,
          (function (t) {
            try {
              return '' === t && e.location.href ? e.location.href : t
            } catch (e) {
              return t
            }
          })(f.url),
          !0
        ),
        'include' === f.credentials
          ? (u.withCredentials = !0)
          : 'omit' === f.credentials && (u.withCredentials = !1),
        'responseType' in u &&
          (r.blob
            ? (u.responseType = 'blob')
            : r.arrayBuffer &&
              f.headers.get('Content-Type') &&
              -1 !==
                f.headers
                  .get('Content-Type')
                  .indexOf('application/octet-stream') &&
              (u.responseType = 'arraybuffer')),
        !n || 'object' != typeof n.headers || n.headers instanceof h
          ? f.headers.forEach(function (t, e) {
              u.setRequestHeader(e, t)
            })
          : Object.getOwnPropertyNames(n.headers).forEach(function (t) {
              u.setRequestHeader(t, s(n.headers[t]))
            }),
        f.signal &&
          (f.signal.addEventListener('abort', c),
          (u.onreadystatechange = function () {
            4 === u.readyState && f.signal.removeEventListener('abort', c)
          })),
        u.send(void 0 === f._bodyInit ? null : f._bodyInit)
    })
  }
  ;(v.polyfill = !0),
    e.fetch ||
      ((e.fetch = v), (e.Headers = h), (e.Request = l), (e.Response = m)),
    (t.Headers = h),
    (t.Request = l),
    (t.Response = m),
    (t.fetch = v),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
/*
 * anime.js v3.2.0
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!(function (n, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : (n.anime = e())
})(this, function () {
  'use strict'
  var n = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      timelineOffset: 0
    },
    e = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: 'easeOutElastic(1, .5)',
      round: 0
    },
    r = [
      'translateX',
      'translateY',
      'translateZ',
      'rotate',
      'rotateX',
      'rotateY',
      'rotateZ',
      'scale',
      'scaleX',
      'scaleY',
      'scaleZ',
      'skew',
      'skewX',
      'skewY',
      'perspective',
      'matrix',
      'matrix3d'
    ],
    t = { CSS: {}, springs: {} }
  function a(n, e, r) {
    return Math.min(Math.max(n, e), r)
  }
  function o(n, e) {
    return n.indexOf(e) > -1
  }
  function u(n, e) {
    return n.apply(null, e)
  }
  var i = {
    arr: function (n) {
      return Array.isArray(n)
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), 'Object')
    },
    pth: function (n) {
      return i.obj(n) && n.hasOwnProperty('totalLength')
    },
    svg: function (n) {
      return n instanceof SVGElement
    },
    inp: function (n) {
      return n instanceof HTMLInputElement
    },
    dom: function (n) {
      return n.nodeType || i.svg(n)
    },
    str: function (n) {
      return 'string' == typeof n
    },
    fnc: function (n) {
      return 'function' == typeof n
    },
    und: function (n) {
      return void 0 === n
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)
    },
    rgb: function (n) {
      return /^rgb/.test(n)
    },
    hsl: function (n) {
      return /^hsl/.test(n)
    },
    col: function (n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n)
    },
    key: function (r) {
      return (
        !n.hasOwnProperty(r) &&
        !e.hasOwnProperty(r) &&
        'targets' !== r &&
        'keyframes' !== r
      )
    }
  }
  function c(n) {
    var e = /\(([^)]+)\)/.exec(n)
    return e
      ? e[1].split(',').map(function (n) {
          return parseFloat(n)
        })
      : []
  }
  function s(n, e) {
    var r = c(n),
      o = a(i.und(r[0]) ? 1 : r[0], 0.1, 100),
      u = a(i.und(r[1]) ? 100 : r[1], 0.1, 100),
      s = a(i.und(r[2]) ? 10 : r[2], 0.1, 100),
      f = a(i.und(r[3]) ? 0 : r[3], 0.1, 100),
      l = Math.sqrt(u / o),
      d = s / (2 * Math.sqrt(u * o)),
      p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
      h = 1,
      v = d < 1 ? (d * l - f) / p : -f + l
    function g(n) {
      var r = e ? (e * n) / 1e3 : n
      return (
        (r =
          d < 1
            ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r))
            : (h + v * r) * Math.exp(-r * l)),
        0 === n || 1 === n ? n : 1 - r
      )
    }
    return e
      ? g
      : function () {
          var e = t.springs[n]
          if (e) return e
          for (var r = 0, a = 0; ; )
            if (1 === g((r += 1 / 6))) {
              if (++a >= 16) break
            } else a = 0
          var o = r * (1 / 6) * 1e3
          return (t.springs[n] = o), o
        }
  }
  function f(n) {
    return (
      void 0 === n && (n = 10),
      function (e) {
        return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n)
      }
    )
  }
  var l,
    d,
    p = (function () {
      var n = 11,
        e = 1 / (n - 1)
      function r(n, e) {
        return 1 - 3 * e + 3 * n
      }
      function t(n, e) {
        return 3 * e - 6 * n
      }
      function a(n) {
        return 3 * n
      }
      function o(n, e, o) {
        return ((r(e, o) * n + t(e, o)) * n + a(e)) * n
      }
      function u(n, e, o) {
        return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e)
      }
      return function (r, t, a, i) {
        if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
          var c = new Float32Array(n)
          if (r !== t || a !== i)
            for (var s = 0; s < n; ++s) c[s] = o(s * e, r, a)
          return function (n) {
            return r === t && a === i
              ? n
              : 0 === n || 1 === n
              ? n
              : o(f(n), t, i)
          }
        }
        function f(t) {
          for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s) i += e
          var l = i + ((t - c[--s]) / (c[s + 1] - c[s])) * e,
            d = u(l, r, a)
          return d >= 0.001
            ? (function (n, e, r, t) {
                for (var a = 0; a < 4; ++a) {
                  var i = u(e, r, t)
                  if (0 === i) return e
                  e -= (o(e, r, t) - n) / i
                }
                return e
              })(t, l, r, a)
            : 0 === d
            ? l
            : (function (n, e, r, t, a) {
                for (
                  var u, i, c = 0;
                  (u = o((i = e + (r - e) / 2), t, a) - n) > 0
                    ? (r = i)
                    : (e = i),
                    Math.abs(u) > 1e-7 && ++c < 10;

                );
                return i
              })(t, i, i + e, r, a)
        }
      }
    })(),
    h =
      ((l = {
        linear: function () {
          return function (n) {
            return n
          }
        }
      }),
      (d = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2)
          }
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n)
          }
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2)
          }
        },
        Bounce: function () {
          return function (n) {
            for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - r) -
              7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
            )
          }
        },
        Elastic: function (n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = 0.5)
          var r = a(n, 1, 10),
            t = a(e, 0.1, 2)
          return function (n) {
            return 0 === n || 1 === n
              ? n
              : -r *
                  Math.pow(2, 10 * (n - 1)) *
                  Math.sin(
                    ((n - 1 - (t / (2 * Math.PI)) * Math.asin(1 / r)) *
                      (2 * Math.PI)) /
                      t
                  )
          }
        }
      }),
      ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2)
          }
        }
      }),
      Object.keys(d).forEach(function (n) {
        var e = d[n]
        ;(l['easeIn' + n] = e),
          (l['easeOut' + n] = function (n, r) {
            return function (t) {
              return 1 - e(n, r)(1 - t)
            }
          }),
          (l['easeInOut' + n] = function (n, r) {
            return function (t) {
              return t < 0.5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2
            }
          })
      }),
      l)
  function v(n, e) {
    if (i.fnc(n)) return n
    var r = n.split('(')[0],
      t = h[r],
      a = c(n)
    switch (r) {
      case 'spring':
        return s(n, e)
      case 'cubicBezier':
        return u(p, a)
      case 'steps':
        return u(f, a)
      default:
        return u(t, a)
    }
  }
  function g(n) {
    try {
      return document.querySelectorAll(n)
    } catch (n) {
      return
    }
  }
  function m(n, e) {
    for (
      var r = n.length,
        t = arguments.length >= 2 ? arguments[1] : void 0,
        a = [],
        o = 0;
      o < r;
      o++
    )
      if (o in n) {
        var u = n[o]
        e.call(t, u, o, n) && a.push(u)
      }
    return a
  }
  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e)
    }, [])
  }
  function b(n) {
    return i.arr(n)
      ? n
      : (i.str(n) && (n = g(n) || n),
        n instanceof NodeList || n instanceof HTMLCollection
          ? [].slice.call(n)
          : [n])
  }
  function x(n, e) {
    return n.some(function (n) {
      return n === e
    })
  }
  function M(n) {
    var e = {}
    for (var r in n) e[r] = n[r]
    return e
  }
  function w(n, e) {
    var r = M(n)
    for (var t in n) r[t] = e.hasOwnProperty(t) ? e[t] : n[t]
    return r
  }
  function k(n, e) {
    var r = M(n)
    for (var t in e) r[t] = i.und(n[t]) ? e[t] : n[t]
    return r
  }
  function O(n) {
    return i.rgb(n)
      ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = n)))
        ? 'rgba(' + r[1] + ',1)'
        : e
      : i.hex(n)
      ? ((t = n.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          function (n, e, r, t) {
            return e + e + r + r + t + t
          }
        )),
        (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)),
        'rgba(' +
          parseInt(a[1], 16) +
          ',' +
          parseInt(a[2], 16) +
          ',' +
          parseInt(a[3], 16) +
          ',1)')
      : i.hsl(n)
      ? (function (n) {
          var e,
            r,
            t,
            a =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            o = parseInt(a[1], 10) / 360,
            u = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1
          function s(n, e, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6
                ? n + 6 * (e - n) * r
                : r < 0.5
                ? e
                : r < 2 / 3
                ? n + (e - n) * (2 / 3 - r) * 6
                : n
            )
          }
          if (0 == u) e = r = t = i
          else {
            var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
              l = 2 * i - f
            ;(e = s(l, f, o + 1 / 3)),
              (r = s(l, f, o)),
              (t = s(l, f, o - 1 / 3))
          }
          return (
            'rgba(' + 255 * e + ',' + 255 * r + ',' + 255 * t + ',' + c + ')'
          )
        })(n)
      : void 0
    var e, r, t, a
  }
  function C(n) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        n
      )
    if (e) return e[1]
  }
  function B(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n
  }
  function P(n, e) {
    return n.getAttribute(e)
  }
  function I(n, e, r) {
    if (x([r, 'deg', 'rad', 'turn'], C(e))) return e
    var a = t.CSS[e + r]
    if (!i.und(a)) return a
    var o = document.createElement(n.tagName),
      u =
        n.parentNode && n.parentNode !== document ? n.parentNode : document.body
    u.appendChild(o), (o.style.position = 'absolute'), (o.style.width = 100 + r)
    var c = 100 / o.offsetWidth
    u.removeChild(o)
    var s = c * parseFloat(e)
    return (t.CSS[e + r] = s), s
  }
  function T(n, e, r) {
    if (e in n.style) {
      var t = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || '0'
      return r ? I(n, a, r) : a
    }
  }
  function D(n, e) {
    return i.dom(n) && !i.inp(n) && (P(n, e) || (i.svg(n) && n[e]))
      ? 'attribute'
      : i.dom(n) && x(r, e)
      ? 'transform'
      : i.dom(n) && 'transform' !== e && T(n, e)
      ? 'css'
      : null != n[e]
      ? 'object'
      : void 0
  }
  function E(n) {
    if (i.dom(n)) {
      for (
        var e,
          r = n.style.transform || '',
          t = /(\w+)\(([^)]*)\)/g,
          a = new Map();
        (e = t.exec(r));

      )
        a.set(e[1], e[2])
      return a
    }
  }
  function F(n, e, r, t) {
    var a,
      u = o(e, 'scale')
        ? 1
        : 0 +
          (o((a = e), 'translate') || 'perspective' === a
            ? 'px'
            : o(a, 'rotate') || o(a, 'skew')
            ? 'deg'
            : void 0),
      i = E(n).get(e) || u
    return (
      r && (r.transforms.list.set(e, i), (r.transforms.last = e)),
      t ? I(n, i, t) : i
    )
  }
  function N(n, e, r, t) {
    switch (D(n, e)) {
      case 'transform':
        return F(n, e, t, r)
      case 'css':
        return T(n, e, r)
      case 'attribute':
        return P(n, e)
      default:
        return n[e] || 0
    }
  }
  function A(n, e) {
    var r = /^(\*=|\+=|-=)/.exec(n)
    if (!r) return n
    var t = C(n) || 0,
      a = parseFloat(e),
      o = parseFloat(n.replace(r[0], ''))
    switch (r[0][0]) {
      case '+':
        return a + o + t
      case '-':
        return a - o + t
      case '*':
        return a * o + t
    }
  }
  function L(n, e) {
    if (i.col(n)) return O(n)
    if (/\s/g.test(n)) return n
    var r = C(n),
      t = r ? n.substr(0, n.length - r.length) : n
    return e ? t + e : t
  }
  function j(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2))
  }
  function S(n) {
    for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
      var o = r.getItem(a)
      a > 0 && (t += j(e, o)), (e = o)
    }
    return t
  }
  function q(n) {
    if (n.getTotalLength) return n.getTotalLength()
    switch (n.tagName.toLowerCase()) {
      case 'circle':
        return (o = n), 2 * Math.PI * P(o, 'r')
      case 'rect':
        return 2 * P((a = n), 'width') + 2 * P(a, 'height')
      case 'line':
        return j(
          { x: P((t = n), 'x1'), y: P(t, 'y1') },
          { x: P(t, 'x2'), y: P(t, 'y2') }
        )
      case 'polyline':
        return S(n)
      case 'polygon':
        return (
          (r = (e = n).points),
          S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0))
        )
    }
    var e, r, t, a, o
  }
  function $(n, e) {
    var r = e || {},
      t =
        r.el ||
        (function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); )
            e = e.parentNode
          return e
        })(n),
      a = t.getBoundingClientRect(),
      o = P(t, 'viewBox'),
      u = a.width,
      c = a.height,
      s = r.viewBox || (o ? o.split(' ') : [0, 0, u, c])
    return {
      el: t,
      viewBox: s,
      x: s[0] / 1,
      y: s[1] / 1,
      w: u / s[2],
      h: c / s[3]
    }
  }
  function X(n, e) {
    function r(r) {
      void 0 === r && (r = 0)
      var t = e + r >= 1 ? e + r : 0
      return n.el.getPointAtLength(t)
    }
    var t = $(n.el, n.svg),
      a = r(),
      o = r(-1),
      u = r(1)
    switch (n.property) {
      case 'x':
        return (a.x - t.x) * t.w
      case 'y':
        return (a.y - t.y) * t.h
      case 'angle':
        return (180 * Math.atan2(u.y - o.y, u.x - o.x)) / Math.PI
    }
  }
  function Y(n, e) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      t = L(i.pth(n) ? n.totalLength : n, e) + ''
    return {
      original: t,
      numbers: t.match(r) ? t.match(r).map(Number) : [0],
      strings: i.str(n) || e ? t.split(r) : []
    }
  }
  function Z(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, r) {
      return r.indexOf(n) === e
    })
  }
  function Q(n) {
    var e = Z(n)
    return e.map(function (n, r) {
      return { target: n, id: r, total: e.length, transforms: { list: E(n) } }
    })
  }
  function V(n, e) {
    var r = M(e)
    if ((/^spring/.test(r.easing) && (r.duration = s(r.easing)), i.arr(n))) {
      var t = n.length
      2 === t && !i.obj(n[0])
        ? (n = { value: n })
        : i.fnc(e.duration) || (r.duration = e.duration / t)
    }
    var a = i.arr(n) ? n : [n]
    return a
      .map(function (n, r) {
        var t = i.obj(n) && !i.pth(n) ? n : { value: n }
        return (
          i.und(t.delay) && (t.delay = r ? 0 : e.delay),
          i.und(t.endDelay) &&
            (t.endDelay = r === a.length - 1 ? e.endDelay : 0),
          t
        )
      })
      .map(function (n) {
        return k(n, r)
      })
  }
  function z(n, e) {
    var r = [],
      t = e.keyframes
    for (var a in (t &&
      (e = k(
        (function (n) {
          for (
            var e = m(
                y(
                  n.map(function (n) {
                    return Object.keys(n)
                  })
                ),
                function (n) {
                  return i.key(n)
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n
              }, []),
              r = {},
              t = function (t) {
                var a = e[t]
                r[a] = n.map(function (n) {
                  var e = {}
                  for (var r in n)
                    i.key(r) ? r == a && (e.value = n[r]) : (e[r] = n[r])
                  return e
                })
              },
              a = 0;
            a < e.length;
            a++
          )
            t(a)
          return r
        })(t),
        e
      )),
    e))
      i.key(a) && r.push({ name: a, tweens: V(e[a], n) })
    return r
  }
  function H(n, e) {
    var r
    return n.tweens.map(function (t) {
      var a = (function (n, e) {
          var r = {}
          for (var t in n) {
            var a = B(n[t], e)
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return B(n, e)
                })).length &&
              (a = a[0]),
              (r[t] = a)
          }
          return (
            (r.duration = parseFloat(r.duration)),
            (r.delay = parseFloat(r.delay)),
            r
          )
        })(t, e),
        o = a.value,
        u = i.arr(o) ? o[1] : o,
        c = C(u),
        s = N(e.target, n.name, c, e),
        f = r ? r.to.original : s,
        l = i.arr(o) ? o[0] : f,
        d = C(l) || C(s),
        p = c || d
      return (
        i.und(u) && (u = f),
        (a.from = Y(l, p)),
        (a.to = Y(A(u, l), p)),
        (a.start = r ? r.end : 0),
        (a.end = a.start + a.delay + a.duration + a.endDelay),
        (a.easing = v(a.easing, a.duration)),
        (a.isPath = i.pth(o)),
        (a.isColor = i.col(a.from.original)),
        a.isColor && (a.round = 1),
        (r = a),
        a
      )
    })
  }
  var G = {
    css: function (n, e, r) {
      return (n.style[e] = r)
    },
    attribute: function (n, e, r) {
      return n.setAttribute(e, r)
    },
    object: function (n, e, r) {
      return (n[e] = r)
    },
    transform: function (n, e, r, t, a) {
      if ((t.list.set(e, r), e === t.last || a)) {
        var o = ''
        t.list.forEach(function (n, e) {
          o += e + '(' + n + ') '
        }),
          (n.style.transform = o)
      }
    }
  }
  function R(n, e) {
    Q(n).forEach(function (n) {
      for (var r in e) {
        var t = B(e[r], n),
          a = n.target,
          o = C(t),
          u = N(a, r, o, n),
          i = A(L(t, o || C(u)), u),
          c = D(a, r)
        G[c](a, r, i, n.transforms, !0)
      }
    })
  }
  function W(n, e) {
    return m(
      y(
        n.map(function (n) {
          return e.map(function (e) {
            return (function (n, e) {
              var r = D(n.target, e.name)
              if (r) {
                var t = H(e, n),
                  a = t[t.length - 1]
                return {
                  type: r,
                  property: e.name,
                  animatable: n,
                  tweens: t,
                  duration: a.end,
                  delay: t[0].delay,
                  endDelay: a.endDelay
                }
              }
            })(n, e)
          })
        })
      ),
      function (n) {
        return !i.und(n)
      }
    )
  }
  function J(n, e) {
    var r = n.length,
      t = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0
      },
      a = {}
    return (
      (a.duration = r
        ? Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration
            })
          )
        : e.duration),
      (a.delay = r
        ? Math.min.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.delay
            })
          )
        : e.delay),
      (a.endDelay = r
        ? a.duration -
          Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration - n.endDelay
            })
          )
        : e.endDelay),
      a
    )
  }
  var K = 0
  var U,
    _ = [],
    nn = [],
    en = (function () {
      function n() {
        U = requestAnimationFrame(e)
      }
      function e(e) {
        var r = _.length
        if (r) {
          for (var t = 0; t < r; ) {
            var a = _[t]
            if (a.paused) {
              var o = _.indexOf(a)
              o > -1 && (_.splice(o, 1), (r = _.length))
            } else a.tick(e)
            t++
          }
          n()
        } else U = cancelAnimationFrame(U)
      }
      return n
    })()
  function rn(r) {
    void 0 === r && (r = {})
    var t,
      o = 0,
      u = 0,
      i = 0,
      c = 0,
      s = null
    function f(n) {
      var e =
        window.Promise &&
        new Promise(function (n) {
          return (s = n)
        })
      return (n.finished = e), e
    }
    var l,
      d,
      p,
      h,
      v,
      g,
      y,
      b,
      x =
        ((d = w(n, (l = r))),
        (p = w(e, l)),
        (h = z(p, l)),
        (v = Q(l.targets)),
        (g = W(v, h)),
        (y = J(g, p)),
        (b = K),
        K++,
        k(d, {
          id: b,
          children: [],
          animatables: v,
          animations: g,
          duration: y.duration,
          delay: y.delay,
          endDelay: y.endDelay
        }))
    f(x)
    function M() {
      var n = x.direction
      'alternate' !== n &&
        (x.direction = 'normal' !== n ? 'normal' : 'reverse'),
        (x.reversed = !x.reversed),
        t.forEach(function (n) {
          return (n.reversed = x.reversed)
        })
    }
    function O(n) {
      return x.reversed ? x.duration - n : n
    }
    function C() {
      ;(o = 0), (u = O(x.currentTime) * (1 / rn.speed))
    }
    function B(n, e) {
      e && e.seek(n - e.timelineOffset)
    }
    function P(n) {
      for (var e = 0, r = x.animations, t = r.length; e < t; ) {
        var o = r[e],
          u = o.animatable,
          i = o.tweens,
          c = i.length - 1,
          s = i[c]
        c &&
          (s =
            m(i, function (e) {
              return n < e.end
            })[0] || s)
        for (
          var f = a(n - s.start - s.delay, 0, s.duration) / s.duration,
            l = isNaN(f) ? 1 : s.easing(f),
            d = s.to.strings,
            p = s.round,
            h = [],
            v = s.to.numbers.length,
            g = void 0,
            y = 0;
          y < v;
          y++
        ) {
          var b = void 0,
            M = s.to.numbers[y],
            w = s.from.numbers[y] || 0
          ;(b = s.isPath ? X(s.value, l * M) : w + l * (M - w)),
            p && ((s.isColor && y > 2) || (b = Math.round(b * p) / p)),
            h.push(b)
        }
        var k = d.length
        if (k) {
          g = d[0]
          for (var O = 0; O < k; O++) {
            d[O]
            var C = d[O + 1],
              B = h[O]
            isNaN(B) || (g += C ? B + C : B + ' ')
          }
        } else g = h[0]
        G[o.type](u.target, o.property, g, u.transforms),
          (o.currentValue = g),
          e++
      }
    }
    function I(n) {
      x[n] && !x.passThrough && x[n](x)
    }
    function T(n) {
      var e = x.duration,
        r = x.delay,
        l = e - x.endDelay,
        d = O(n)
      ;(x.progress = a((d / e) * 100, 0, 100)),
        (x.reversePlayback = d < x.currentTime),
        t &&
          (function (n) {
            if (x.reversePlayback) for (var e = c; e--; ) B(n, t[e])
            else for (var r = 0; r < c; r++) B(n, t[r])
          })(d),
        !x.began && x.currentTime > 0 && ((x.began = !0), I('begin')),
        !x.loopBegan &&
          x.currentTime > 0 &&
          ((x.loopBegan = !0), I('loopBegin')),
        d <= r && 0 !== x.currentTime && P(0),
        ((d >= l && x.currentTime !== e) || !e) && P(e),
        d > r && d < l
          ? (x.changeBegan ||
              ((x.changeBegan = !0),
              (x.changeCompleted = !1),
              I('changeBegin')),
            I('change'),
            P(d))
          : x.changeBegan &&
            ((x.changeCompleted = !0),
            (x.changeBegan = !1),
            I('changeComplete')),
        (x.currentTime = a(d, 0, e)),
        x.began && I('update'),
        n >= e &&
          ((u = 0),
          x.remaining && !0 !== x.remaining && x.remaining--,
          x.remaining
            ? ((o = i),
              I('loopComplete'),
              (x.loopBegan = !1),
              'alternate' === x.direction && M())
            : ((x.paused = !0),
              x.completed ||
                ((x.completed = !0),
                I('loopComplete'),
                I('complete'),
                !x.passThrough && 'Promise' in window && (s(), f(x)))))
    }
    return (
      (x.reset = function () {
        var n = x.direction
        ;(x.passThrough = !1),
          (x.currentTime = 0),
          (x.progress = 0),
          (x.paused = !0),
          (x.began = !1),
          (x.loopBegan = !1),
          (x.changeBegan = !1),
          (x.completed = !1),
          (x.changeCompleted = !1),
          (x.reversePlayback = !1),
          (x.reversed = 'reverse' === n),
          (x.remaining = x.loop),
          (t = x.children)
        for (var e = (c = t.length); e--; ) x.children[e].reset()
        ;((x.reversed && !0 !== x.loop) ||
          ('alternate' === n && 1 === x.loop)) &&
          x.remaining++,
          P(x.reversed ? x.duration : 0)
      }),
      (x.set = function (n, e) {
        return R(n, e), x
      }),
      (x.tick = function (n) {
        ;(i = n), o || (o = i), T((i + (u - o)) * rn.speed)
      }),
      (x.seek = function (n) {
        T(O(n))
      }),
      (x.pause = function () {
        ;(x.paused = !0), C()
      }),
      (x.play = function () {
        x.paused &&
          (x.completed && x.reset(), (x.paused = !1), _.push(x), C(), U || en())
      }),
      (x.reverse = function () {
        M(), (x.completed = !x.reversed), C()
      }),
      (x.restart = function () {
        x.reset(), x.play()
      }),
      x.reset(),
      x.autoplay && x.play(),
      x
    )
  }
  function tn(n, e) {
    for (var r = e.length; r--; ) x(n, e[r].animatable.target) && e.splice(r, 1)
  }
  return (
    'undefined' != typeof document &&
      document.addEventListener('visibilitychange', function () {
        document.hidden
          ? (_.forEach(function (n) {
              return n.pause()
            }),
            (nn = _.slice(0)),
            (rn.running = _ = []))
          : nn.forEach(function (n) {
              return n.play()
            })
      }),
    (rn.version = '3.2.0'),
    (rn.speed = 1),
    (rn.running = _),
    (rn.remove = function (n) {
      for (var e = Z(n), r = _.length; r--; ) {
        var t = _[r],
          a = t.animations,
          o = t.children
        tn(e, a)
        for (var u = o.length; u--; ) {
          var i = o[u],
            c = i.animations
          tn(e, c), c.length || i.children.length || o.splice(u, 1)
        }
        a.length || o.length || t.pause()
      }
    }),
    (rn.get = N),
    (rn.set = R),
    (rn.convertPx = I),
    (rn.path = function (n, e) {
      var r = i.str(n) ? g(n)[0] : n,
        t = e || 100
      return function (n) {
        return { property: n, el: r, svg: $(r), totalLength: q(r) * (t / 100) }
      }
    }),
    (rn.setDashoffset = function (n) {
      var e = q(n)
      return n.setAttribute('stroke-dasharray', e), e
    }),
    (rn.stagger = function (n, e) {
      void 0 === e && (e = {})
      var r = e.direction || 'normal',
        t = e.easing ? v(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = 'first' === u,
        s = 'center' === u,
        f = 'last' === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        h = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0
      return function (n, e, i) {
        if (
          (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length)
        ) {
          for (var v = 0; v < i; v++) {
            if (a) {
              var b = s ? (a[0] - 1) / 2 : u % a[0],
                x = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                M = b - (v % a[0]),
                w = x - Math.floor(v / a[0]),
                k = Math.sqrt(M * M + w * w)
              'x' === o && (k = -M), 'y' === o && (k = -w), m.push(k)
            } else m.push(Math.abs(u - v))
            y = Math.max.apply(Math, m)
          }
          t &&
            (m = m.map(function (n) {
              return t(n / y) * y
            })),
            'reverse' === r &&
              (m = m.map(function (n) {
                return o ? (n < 0 ? -1 * n : -n) : Math.abs(y - n)
              }))
        }
        return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h
      }
    }),
    (rn.timeline = function (n) {
      void 0 === n && (n = {})
      var r = rn(n)
      return (
        (r.duration = 0),
        (r.add = function (t, a) {
          var o = _.indexOf(r),
            u = r.children
          function c(n) {
            n.passThrough = !0
          }
          o > -1 && _.splice(o, 1)
          for (var s = 0; s < u.length; s++) c(u[s])
          var f = k(t, w(e, n))
          f.targets = f.targets || n.targets
          var l = r.duration
          ;(f.autoplay = !1),
            (f.direction = r.direction),
            (f.timelineOffset = i.und(a) ? l : A(a, l)),
            c(r),
            r.seek(f.timelineOffset)
          var d = rn(f)
          c(d), u.push(d)
          var p = J(u, n)
          return (
            (r.delay = p.delay),
            (r.endDelay = p.endDelay),
            (r.duration = p.duration),
            r.seek(0),
            r.reset(),
            r.autoplay && r.play(),
            r
          )
        }),
        r
      )
    }),
    (rn.easing = v),
    (rn.penner = h),
    (rn.random = function (n, e) {
      return Math.floor(Math.random() * (e - n + 1)) + n
    }),
    rn
  )
})

/*! algoliasearch-lite.umd.js | 4.9.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).algoliasearch = t())
})(this, function () {
  'use strict'
  function e(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = r),
      e
    )
  }
  function t(e, t) {
    var r = Object.keys(e)
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e)
      t &&
        (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
  }
  function r(r) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {}
      n % 2
        ? t(Object(o), !0).forEach(function (t) {
            e(r, t, o[t])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : t(Object(o)).forEach(function (e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
          })
    }
    return r
  }
  function n(e, t) {
    if (null == e) return {}
    var r,
      n,
      o = (function (e, t) {
        if (null == e) return {}
        var r,
          n,
          o = {},
          a = Object.keys(e)
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r])
        return o
      })(e, t)
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e)
      for (n = 0; n < a.length; n++)
        (r = a[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]))
    }
    return o
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        if (
          !(
            Symbol.iterator in Object(e) ||
            '[object Arguments]' === Object.prototype.toString.call(e)
          )
        )
          return
        var r = [],
          n = !0,
          o = !1,
          a = void 0
        try {
          for (
            var u, i = e[Symbol.iterator]();
            !(n = (u = i.next()).done) &&
            (r.push(u.value), !t || r.length !== t);
            n = !0
          );
        } catch (e) {
          ;(o = !0), (a = e)
        } finally {
          try {
            n || null == i.return || i.return()
          } finally {
            if (o) throw a
          }
        }
        return r
      })(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      })()
    )
  }
  function a(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t]
          return r
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e)
      })(e) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance')
      })()
    )
  }
  function u(e) {
    var t,
      r = 'algoliasearch-client-js-'.concat(e.key),
      n = function () {
        return void 0 === t && (t = e.localStorage || window.localStorage), t
      },
      a = function () {
        return JSON.parse(n().getItem(r) || '{}')
      }
    return {
      get: function (e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
                miss: function () {
                  return Promise.resolve()
                }
              }
        return Promise.resolve()
          .then(function () {
            var r = JSON.stringify(e),
              n = a()[r]
            return Promise.all([n || t(), void 0 !== n])
          })
          .then(function (e) {
            var t = o(e, 2),
              n = t[0],
              a = t[1]
            return Promise.all([n, a || r.miss(n)])
          })
          .then(function (e) {
            return o(e, 1)[0]
          })
      },
      set: function (e, t) {
        return Promise.resolve().then(function () {
          var o = a()
          return (
            (o[JSON.stringify(e)] = t), n().setItem(r, JSON.stringify(o)), t
          )
        })
      },
      delete: function (e) {
        return Promise.resolve().then(function () {
          var t = a()
          delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t))
        })
      },
      clear: function () {
        return Promise.resolve().then(function () {
          n().removeItem(r)
        })
      }
    }
  }
  function i(e) {
    var t = a(e.caches),
      r = t.shift()
    return void 0 === r
      ? {
          get: function (e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {
                      miss: function () {
                        return Promise.resolve()
                      }
                    },
              n = t()
            return n
              .then(function (e) {
                return Promise.all([e, r.miss(e)])
              })
              .then(function (e) {
                return o(e, 1)[0]
              })
          },
          set: function (e, t) {
            return Promise.resolve(t)
          },
          delete: function (e) {
            return Promise.resolve()
          },
          clear: function () {
            return Promise.resolve()
          }
        }
      : {
          get: function (e, n) {
            var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {
                    miss: function () {
                      return Promise.resolve()
                    }
                  }
            return r.get(e, n, o).catch(function () {
              return i({ caches: t }).get(e, n, o)
            })
          },
          set: function (e, n) {
            return r.set(e, n).catch(function () {
              return i({ caches: t }).set(e, n)
            })
          },
          delete: function (e) {
            return r.delete(e).catch(function () {
              return i({ caches: t }).delete(e)
            })
          },
          clear: function () {
            return r.clear().catch(function () {
              return i({ caches: t }).clear()
            })
          }
        }
  }
  function s() {
    var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : { serializable: !0 },
      t = {}
    return {
      get: function (r, n) {
        var o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {
                  miss: function () {
                    return Promise.resolve()
                  }
                },
          a = JSON.stringify(r)
        if (a in t)
          return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a])
        var u = n(),
          i =
            (o && o.miss) ||
            function () {
              return Promise.resolve()
            }
        return u
          .then(function (e) {
            return i(e)
          })
          .then(function () {
            return u
          })
      },
      set: function (r, n) {
        return (
          (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
          Promise.resolve(n)
        )
      },
      delete: function (e) {
        return delete t[JSON.stringify(e)], Promise.resolve()
      },
      clear: function () {
        return (t = {}), Promise.resolve()
      }
    }
  }
  function c(e) {
    for (var t = e.length - 1; t > 0; t--) {
      var r = Math.floor(Math.random() * (t + 1)),
        n = e[t]
      ;(e[t] = e[r]), (e[r] = n)
    }
    return e
  }
  function l(e, t) {
    return t
      ? (Object.keys(t).forEach(function (r) {
          e[r] = t[r](e)
        }),
        e)
      : e
  }
  function f(e) {
    for (
      var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      r[n - 1] = arguments[n]
    var o = 0
    return e.replace(/%s/g, function () {
      return encodeURIComponent(r[o++])
    })
  }
  var h = { WithinQueryParameters: 0, WithinHeaders: 1 }
  function d(e, t) {
    var r = e || {},
      n = r.data || {}
    return (
      Object.keys(r).forEach(function (e) {
        ;-1 ===
          [
            'timeout',
            'headers',
            'queryParameters',
            'data',
            'cacheable'
          ].indexOf(e) && (n[e] = r[e])
      }),
      {
        data: Object.entries(n).length > 0 ? n : void 0,
        timeout: r.timeout || t,
        headers: r.headers || {},
        queryParameters: r.queryParameters || {},
        cacheable: r.cacheable
      }
    )
  }
  var m = { Read: 1, Write: 2, Any: 3 },
    p = 1,
    v = 2,
    y = 3
  function g(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p
    return r(r({}, e), {}, { status: t, lastUpdate: Date.now() })
  }
  function b(e) {
    return 'string' == typeof e
      ? { protocol: 'https', url: e, accept: m.Any }
      : {
          protocol: e.protocol || 'https',
          url: e.url,
          accept: e.accept || m.Any
        }
  }
  var O = 'GET',
    P = 'POST'
  function q(e, t) {
    return Promise.all(
      t.map(function (t) {
        return e.get(t, function () {
          return Promise.resolve(g(t))
        })
      })
    ).then(function (e) {
      var r = e.filter(function (e) {
          return (function (e) {
            return e.status === p || Date.now() - e.lastUpdate > 12e4
          })(e)
        }),
        n = e.filter(function (e) {
          return (function (e) {
            return e.status === y && Date.now() - e.lastUpdate <= 12e4
          })(e)
        }),
        o = [].concat(a(r), a(n))
      return {
        getTimeout: function (e, t) {
          return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t
        },
        statelessHosts:
          o.length > 0
            ? o.map(function (e) {
                return b(e)
              })
            : t
      }
    })
  }
  function j(e, t, n, o) {
    var u = [],
      i = (function (e, t) {
        if (e.method === O || (void 0 === e.data && void 0 === t.data)) return
        var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data)
        return JSON.stringify(n)
      })(n, o),
      s = (function (e, t) {
        var n = r(r({}, e.headers), t.headers),
          o = {}
        return (
          Object.keys(n).forEach(function (e) {
            var t = n[e]
            o[e.toLowerCase()] = t
          }),
          o
        )
      })(e, o),
      c = n.method,
      l = n.method !== O ? {} : r(r({}, n.data), o.data),
      f = r(
        r(r({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), l),
        o.queryParameters
      ),
      h = 0,
      d = function t(r, a) {
        var l = r.pop()
        if (void 0 === l)
          throw {
            name: 'RetryError',
            message:
              'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
            transporterStackTrace: A(u)
          }
        var d = {
            data: i,
            headers: s,
            method: c,
            url: S(l, n.path, f),
            connectTimeout: a(h, e.timeouts.connect),
            responseTimeout: a(h, o.timeout)
          },
          m = function (e) {
            var t = { request: d, response: e, host: l, triesLeft: r.length }
            return u.push(t), t
          },
          p = {
            onSuccess: function (e) {
              return (function (e) {
                try {
                  return JSON.parse(e.content)
                } catch (t) {
                  throw (function (e, t) {
                    return {
                      name: 'DeserializationError',
                      message: e,
                      response: t
                    }
                  })(t.message, e)
                }
              })(e)
            },
            onRetry: function (n) {
              var o = m(n)
              return (
                n.isTimedOut && h++,
                Promise.all([
                  e.logger.info('Retryable failure', x(o)),
                  e.hostsCache.set(l, g(l, n.isTimedOut ? y : v))
                ]).then(function () {
                  return t(r, a)
                })
              )
            },
            onFail: function (e) {
              throw (
                (m(e),
                (function (e, t) {
                  var r = e.content,
                    n = e.status,
                    o = r
                  try {
                    o = JSON.parse(r).message
                  } catch (e) {}
                  return (function (e, t, r) {
                    return {
                      name: 'ApiError',
                      message: e,
                      status: t,
                      transporterStackTrace: r
                    }
                  })(o, n, t)
                })(e, A(u)))
              )
            }
          }
        return e.requester.send(d).then(function (e) {
          return (function (e, t) {
            return (function (e) {
              var t = e.status
              return (
                e.isTimedOut ||
                (function (e) {
                  var t = e.isTimedOut,
                    r = e.status
                  return !t && 0 == ~~r
                })(e) ||
                (2 != ~~(t / 100) && 4 != ~~(t / 100))
              )
            })(e)
              ? t.onRetry(e)
              : 2 == ~~(e.status / 100)
              ? t.onSuccess(e)
              : t.onFail(e)
          })(e, p)
        })
      }
    return q(e.hostsCache, t).then(function (e) {
      return d(a(e.statelessHosts).reverse(), e.getTimeout)
    })
  }
  function w(e) {
    var t = {
      value: 'Algolia for JavaScript ('.concat(e, ')'),
      add: function (e) {
        var r = '; '
          .concat(e.segment)
          .concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '')
        return (
          -1 === t.value.indexOf(r) && (t.value = ''.concat(t.value).concat(r)),
          t
        )
      }
    }
    return t
  }
  function S(e, t, r) {
    var n = T(r),
      o = ''
        .concat(e.protocol, '://')
        .concat(e.url, '/')
        .concat('/' === t.charAt(0) ? t.substr(1) : t)
    return n.length && (o += '?'.concat(n)), o
  }
  function T(e) {
    return Object.keys(e)
      .map(function (t) {
        return f(
          '%s=%s',
          t,
          ((r = e[t]),
          '[object Object]' === Object.prototype.toString.call(r) ||
          '[object Array]' === Object.prototype.toString.call(r)
            ? JSON.stringify(e[t])
            : e[t])
        )
        var r
      })
      .join('&')
  }
  function A(e) {
    return e.map(function (e) {
      return x(e)
    })
  }
  function x(e) {
    var t = e.request.headers['x-algolia-api-key']
      ? { 'x-algolia-api-key': '*****' }
      : {}
    return r(
      r({}, e),
      {},
      {
        request: r(
          r({}, e.request),
          {},
          { headers: r(r({}, e.request.headers), t) }
        )
      }
    )
  }
  var N = function (e) {
      var t = e.appId,
        n = (function (e, t, r) {
          var n = { 'x-algolia-api-key': r, 'x-algolia-application-id': t }
          return {
            headers: function () {
              return e === h.WithinHeaders ? n : {}
            },
            queryParameters: function () {
              return e === h.WithinQueryParameters ? n : {}
            }
          }
        })(void 0 !== e.authMode ? e.authMode : h.WithinHeaders, t, e.apiKey),
        a = (function (e) {
          var t = e.hostsCache,
            r = e.logger,
            n = e.requester,
            a = e.requestsCache,
            u = e.responsesCache,
            i = e.timeouts,
            s = e.userAgent,
            c = e.hosts,
            l = e.queryParameters,
            f = {
              hostsCache: t,
              logger: r,
              requester: n,
              requestsCache: a,
              responsesCache: u,
              timeouts: i,
              userAgent: s,
              headers: e.headers,
              queryParameters: l,
              hosts: c.map(function (e) {
                return b(e)
              }),
              read: function (e, t) {
                var r = d(t, f.timeouts.read),
                  n = function () {
                    return j(
                      f,
                      f.hosts.filter(function (e) {
                        return 0 != (e.accept & m.Read)
                      }),
                      e,
                      r
                    )
                  }
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable))
                  return n()
                var a = {
                  request: e,
                  mappedRequestOptions: r,
                  transporter: {
                    queryParameters: f.queryParameters,
                    headers: f.headers
                  }
                }
                return f.responsesCache.get(
                  a,
                  function () {
                    return f.requestsCache.get(a, function () {
                      return f.requestsCache
                        .set(a, n())
                        .then(
                          function (e) {
                            return Promise.all([f.requestsCache.delete(a), e])
                          },
                          function (e) {
                            return Promise.all([
                              f.requestsCache.delete(a),
                              Promise.reject(e)
                            ])
                          }
                        )
                        .then(function (e) {
                          var t = o(e, 2)
                          t[0]
                          return t[1]
                        })
                    })
                  },
                  {
                    miss: function (e) {
                      return f.responsesCache.set(a, e)
                    }
                  }
                )
              },
              write: function (e, t) {
                return j(
                  f,
                  f.hosts.filter(function (e) {
                    return 0 != (e.accept & m.Write)
                  }),
                  e,
                  d(t, f.timeouts.write)
                )
              }
            }
          return f
        })(
          r(
            r(
              {
                hosts: [
                  { url: ''.concat(t, '-dsn.algolia.net'), accept: m.Read },
                  { url: ''.concat(t, '.algolia.net'), accept: m.Write }
                ].concat(
                  c([
                    { url: ''.concat(t, '-1.algolianet.com') },
                    { url: ''.concat(t, '-2.algolianet.com') },
                    { url: ''.concat(t, '-3.algolianet.com') }
                  ])
                )
              },
              e
            ),
            {},
            {
              headers: r(
                r(r({}, n.headers()), {
                  'content-type': 'application/x-www-form-urlencoded'
                }),
                e.headers
              ),
              queryParameters: r(r({}, n.queryParameters()), e.queryParameters)
            }
          )
        )
      return l(
        {
          transporter: a,
          appId: t,
          addAlgoliaAgent: function (e, t) {
            a.userAgent.add({ segment: e, version: t })
          },
          clearCache: function () {
            return Promise.all([
              a.requestsCache.clear(),
              a.responsesCache.clear()
            ]).then(function () {})
          }
        },
        e.methods
      )
    },
    C = function (e) {
      return function (t) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { transporter: e.transporter, appId: e.appId, indexName: t }
        return l(n, r.methods)
      }
    },
    k = function (e) {
      return function (t, n) {
        var o = t.map(function (e) {
          return r(r({}, e), {}, { params: T(e.params || {}) })
        })
        return e.transporter.read(
          {
            method: P,
            path: '1/indexes/*/queries',
            data: { requests: o },
            cacheable: !0
          },
          n
        )
      }
    },
    J = function (e) {
      return function (t, o) {
        return Promise.all(
          t.map(function (t) {
            var a = t.params,
              u = a.facetName,
              i = a.facetQuery,
              s = n(a, ['facetName', 'facetQuery'])
            return C(e)(t.indexName, {
              methods: { searchForFacetValues: F }
            }).searchForFacetValues(u, i, r(r({}, o), s))
          })
        )
      }
    },
    E = function (e) {
      return function (t, r, n) {
        return e.transporter.read(
          {
            method: P,
            path: f('1/answers/%s/prediction', e.indexName),
            data: { query: t, queryLanguages: r },
            cacheable: !0
          },
          n
        )
      }
    },
    I = function (e) {
      return function (t, r) {
        return e.transporter.read(
          {
            method: P,
            path: f('1/indexes/%s/query', e.indexName),
            data: { query: t },
            cacheable: !0
          },
          r
        )
      }
    },
    F = function (e) {
      return function (t, r, n) {
        return e.transporter.read(
          {
            method: P,
            path: f('1/indexes/%s/facets/%s/query', e.indexName, t),
            data: { facetQuery: r },
            cacheable: !0
          },
          n
        )
      }
    },
    R = 1,
    D = 2,
    W = 3
  function H(e, t, n) {
    var o,
      a = {
        appId: e,
        apiKey: t,
        timeouts: { connect: 1, read: 2, write: 30 },
        requester: {
          send: function (e) {
            return new Promise(function (t) {
              var r = new XMLHttpRequest()
              r.open(e.method, e.url, !0),
                Object.keys(e.headers).forEach(function (t) {
                  return r.setRequestHeader(t, e.headers[t])
                })
              var n,
                o = function (e, n) {
                  return setTimeout(function () {
                    r.abort(), t({ status: 0, content: n, isTimedOut: !0 })
                  }, 1e3 * e)
                },
                a = o(e.connectTimeout, 'Connection timeout')
              ;(r.onreadystatechange = function () {
                r.readyState > r.OPENED &&
                  void 0 === n &&
                  (clearTimeout(a),
                  (n = o(e.responseTimeout, 'Socket timeout')))
              }),
                (r.onerror = function () {
                  0 === r.status &&
                    (clearTimeout(a),
                    clearTimeout(n),
                    t({
                      content: r.responseText || 'Network request failed',
                      status: r.status,
                      isTimedOut: !1
                    }))
                }),
                (r.onload = function () {
                  clearTimeout(a),
                    clearTimeout(n),
                    t({
                      content: r.responseText,
                      status: r.status,
                      isTimedOut: !1
                    })
                }),
                r.send(e.data)
            })
          }
        },
        logger:
          ((o = W),
          {
            debug: function (e, t) {
              return R >= o && console.debug(e, t), Promise.resolve()
            },
            info: function (e, t) {
              return D >= o && console.info(e, t), Promise.resolve()
            },
            error: function (e, t) {
              return console.error(e, t), Promise.resolve()
            }
          }),
        responsesCache: s(),
        requestsCache: s({ serializable: !1 }),
        hostsCache: i({
          caches: [u({ key: ''.concat('4.9.0', '-').concat(e) }), s()]
        }),
        userAgent: w('4.9.0').add({ segment: 'Browser', version: 'lite' }),
        authMode: h.WithinQueryParameters
      }
    return N(
      r(
        r(r({}, a), n),
        {},
        {
          methods: {
            search: k,
            searchForFacetValues: J,
            multipleQueries: k,
            multipleSearchForFacetValues: J,
            initIndex: function (e) {
              return function (t) {
                return C(e)(t, {
                  methods: {
                    search: I,
                    searchForFacetValues: F,
                    findAnswers: E
                  }
                })
              }
            }
          }
        }
      )
    )
  }
  return (H.version = '4.9.0'), H
})
/*! InstantSearch.js 4.21.0 | © Algolia, Inc. and contributors; MIT License | https://github.com/algolia/instantsearch.js */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).instantsearch = t())
})(this, function () {
  'use strict'
  function d(e) {
    return (d =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(e)
  }
  function k(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function L(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e
  }
  function j(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n),
      e
    )
  }
  function h() {
    return (h =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  function i(t, e) {
    var n = Object.keys(t)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t)
      e &&
        (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
  }
  function D(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? i(Object(n), !0).forEach(function (e) {
            j(t, e, n[e])
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : i(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
    }
    return t
  }
  function M(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function')
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 }
    })),
      t && n(e, t)
  }
  function a(e) {
    return (a = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
  }
  function n(e, t) {
    return (n =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e
      })(e, t)
  }
  function O(e, t) {
    if (null == e) return {}
    var n,
      r,
      i = (function (e, t) {
        if (null == e) return {}
        var n,
          r,
          i = {},
          a = Object.keys(e)
        for (r = 0; r < a.length; r++)
          (n = a[r]), 0 <= t.indexOf(n) || (i[n] = e[n])
        return i
      })(e, t)
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e)
      for (r = 0; r < a.length; r++)
        (n = a[r]),
          0 <= t.indexOf(n) ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
    }
    return i
  }
  function A(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  function H(r) {
    var i = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1
      if (Reflect.construct.sham) return !1
      if ('function' == typeof Proxy) return !0
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        )
      } catch (e) {
        return !1
      }
    })()
    return function () {
      var e,
        t = a(r)
      if (i) {
        var n = a(this).constructor
        e = Reflect.construct(t, arguments, n)
      } else e = t.apply(this, arguments)
      return (function (e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t) ? A(e) : t
      })(this, e)
    }
  }
  function W(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e
      })(e) ||
      (function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return
        var n = [],
          r = !0,
          i = !1,
          a = void 0
        try {
          for (
            var s, o = e[Symbol.iterator]();
            !(r = (s = o.next()).done) &&
            (n.push(s.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          ;(i = !0), (a = e)
        } finally {
          try {
            r || null == o.return || o.return()
          } finally {
            if (i) throw a
          }
        }
        return n
      })(e, t) ||
      s(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function P(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return o(e)
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e)
      })(e) ||
      s(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      })()
    )
  }
  function s(e, t) {
    if (e) {
      if ('string' == typeof e) return o(e, t)
      var n = Object.prototype.toString.call(e).slice(8, -1)
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? o(e, t)
          : void 0
      )
    }
  }
  function o(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
    return r
  }
  function c(e) {
    return (
      'function' == typeof e ||
      Array.isArray(e) ||
      '[object Object]' === Object.prototype.toString.call(e)
    )
  }
  function u(e, t) {
    if (e === t) return e
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var r = t[n],
          i = e[n]
        ;(void 0 !== i && void 0 === r) ||
          (c(i) && c(r)
            ? (e[n] = u(i, r))
            : (e[n] =
                'object' == typeof (a = r) && null !== a
                  ? u(Array.isArray(a) ? [] : {}, a)
                  : a))
      }
    var a
    return e
  }
  function m() {
    return Array.prototype.slice.call(arguments).reduceRight(function (t, n) {
      return (
        Object.keys(Object(n)).forEach(function (e) {
          void 0 !== n[e] && (void 0 !== t[e] && delete t[e], (t[e] = n[e]))
        }),
        t
      )
    }, {})
  }
  var p = function (e) {
    c(e) || (e = {})
    for (var t = 1, n = arguments.length; t < n; t++) {
      var r = arguments[t]
      c(r) && u(e, r)
    }
    return e
  }
  var l = function (n, r) {
      return n.filter(function (e, t) {
        return -1 < r.indexOf(e) && n.indexOf(e) === t
      })
    },
    g = function (e, t) {
      if (Array.isArray(e))
        for (var n = 0; n < e.length; n++) if (t(e[n])) return e[n]
    }
  var f = function e(t) {
    if ('number' == typeof t) return t
    if ('string' == typeof t) return parseFloat(t)
    if (Array.isArray(t)) return t.map(e)
    throw new Error(
      'The value should be a number, a parsable string or an array of those.'
    )
  }
  var v = function (e, t) {
    if (null === e) return {}
    var n,
      r,
      i = {},
      a = Object.keys(e)
    for (r = 0; r < a.length; r++)
      (n = a[r]), 0 <= t.indexOf(n) || (i[n] = e[n])
    return i
  }
  var y = function (e) {
      return e && 0 < Object.keys(e).length
    },
    t = function (e) {
      return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
    },
    b = {
      addRefinement: function (e, t, n) {
        if (b.isRefined(e, t, n)) return e
        var r = '' + n,
          i = e[t] ? e[t].concat(r) : [r],
          a = {}
        return (a[t] = i), m({}, a, e)
      },
      removeRefinement: function (e, n, t) {
        if (void 0 === t)
          return b.clearRefinement(e, function (e, t) {
            return n === t
          })
        var r = '' + t
        return b.clearRefinement(e, function (e, t) {
          return n === t && r === e
        })
      },
      toggleRefinement: function (e, t, n) {
        if (void 0 === n)
          throw new Error('toggleRefinement should be used with a value')
        return b.isRefined(e, t, n)
          ? b.removeRefinement(e, t, n)
          : b.addRefinement(e, t, n)
      },
      clearRefinement: function (i, a, s) {
        if (void 0 === a) return y(i) ? {} : i
        if ('string' == typeof a) return v(i, [a])
        if ('function' == typeof a) {
          var o = !1,
            e = Object.keys(i).reduce(function (e, t) {
              var n = i[t] || [],
                r = n.filter(function (e) {
                  return !a(e, t, s)
                })
              return r.length !== n.length && (o = !0), (e[t] = r), e
            }, {})
          return o ? e : i
        }
      },
      isRefined: function (e, t, n) {
        var r = !!e[t] && 0 < e[t].length
        if (void 0 === n || !r) return r
        var i = '' + n
        return -1 !== e[t].indexOf(i)
      }
    },
    S = b
  function R(e, n) {
    return Array.isArray(e) && Array.isArray(n)
      ? e.length === n.length &&
          e.every(function (e, t) {
            return R(n[t], e)
          })
      : e === n
  }
  function w(e) {
    var r = e ? w._parseNumbers(e) : {}
    void 0 === r.userToken ||
      t(r.userToken) ||
      console.warn(
        '[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}'
      ),
      (this.facets = r.facets || []),
      (this.disjunctiveFacets = r.disjunctiveFacets || []),
      (this.hierarchicalFacets = r.hierarchicalFacets || []),
      (this.facetsRefinements = r.facetsRefinements || {}),
      (this.facetsExcludes = r.facetsExcludes || {}),
      (this.disjunctiveFacetsRefinements =
        r.disjunctiveFacetsRefinements || {}),
      (this.numericRefinements = r.numericRefinements || {}),
      (this.tagRefinements = r.tagRefinements || []),
      (this.hierarchicalFacetsRefinements =
        r.hierarchicalFacetsRefinements || {})
    var i = this
    Object.keys(r).forEach(function (e) {
      var t = -1 !== w.PARAMETERS.indexOf(e),
        n = void 0 !== r[e]
      !t && n && (i[e] = r[e])
    })
  }
  ;(w.PARAMETERS = Object.keys(new w())),
    (w._parseNumbers = function (i) {
      if (i instanceof w) return i
      var r = {}
      if (
        ([
          'aroundPrecision',
          'aroundRadius',
          'getRankingInfo',
          'minWordSizefor2Typos',
          'minWordSizefor1Typo',
          'page',
          'maxValuesPerFacet',
          'distinct',
          'minimumAroundRadius',
          'hitsPerPage',
          'minProximity'
        ].forEach(function (e) {
          var t = i[e]
          if ('string' == typeof t) {
            var n = parseFloat(t)
            r[e] = isNaN(n) ? t : n
          }
        }),
        Array.isArray(i.insideBoundingBox) &&
          (r.insideBoundingBox = i.insideBoundingBox.map(function (e) {
            return Array.isArray(e)
              ? e.map(function (e) {
                  return parseFloat(e)
                })
              : e
          })),
        i.numericRefinements)
      ) {
        var a = {}
        Object.keys(i.numericRefinements).forEach(function (n) {
          var r = i.numericRefinements[n] || {}
          ;(a[n] = {}),
            Object.keys(r).forEach(function (e) {
              var t = r[e].map(function (e) {
                return Array.isArray(e)
                  ? e.map(function (e) {
                      return 'string' == typeof e ? parseFloat(e) : e
                    })
                  : 'string' == typeof e
                  ? parseFloat(e)
                  : e
              })
              a[n][e] = t
            })
        }),
          (r.numericRefinements = a)
      }
      return p({}, i, r)
    }),
    (w.make = function (e) {
      var n = new w(e)
      return (
        (e.hierarchicalFacets || []).forEach(function (e) {
          if (e.rootPath) {
            var t = n.getHierarchicalRefinement(e.name)
            0 < t.length &&
              0 !== t[0].indexOf(e.rootPath) &&
              (n = n.clearRefinements(e.name)),
              0 === (t = n.getHierarchicalRefinement(e.name)).length &&
                (n = n.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
          }
        }),
        n
      )
    }),
    (w.validate = function (e, t) {
      var n = t || {}
      return e.tagFilters && n.tagRefinements && 0 < n.tagRefinements.length
        ? new Error(
            '[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.'
          )
        : 0 < e.tagRefinements.length && n.tagFilters
        ? new Error(
            '[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.'
          )
        : e.numericFilters && n.numericRefinements && y(n.numericRefinements)
        ? new Error(
            "[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
          )
        : y(e.numericRefinements) && n.numericFilters
        ? new Error(
            "[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters."
          )
        : null
    }),
    (w.prototype = {
      constructor: w,
      clearRefinements: function (e) {
        var t = {
          numericRefinements: this._clearNumericRefinements(e),
          facetsRefinements: S.clearRefinement(
            this.facetsRefinements,
            e,
            'conjunctiveFacet'
          ),
          facetsExcludes: S.clearRefinement(this.facetsExcludes, e, 'exclude'),
          disjunctiveFacetsRefinements: S.clearRefinement(
            this.disjunctiveFacetsRefinements,
            e,
            'disjunctiveFacet'
          ),
          hierarchicalFacetsRefinements: S.clearRefinement(
            this.hierarchicalFacetsRefinements,
            e,
            'hierarchicalFacet'
          )
        }
        return t.numericRefinements === this.numericRefinements &&
          t.facetsRefinements === this.facetsRefinements &&
          t.facetsExcludes === this.facetsExcludes &&
          t.disjunctiveFacetsRefinements ===
            this.disjunctiveFacetsRefinements &&
          t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements
          ? this
          : this.setQueryParameters(t)
      },
      clearTags: function () {
        return void 0 === this.tagFilters && 0 === this.tagRefinements.length
          ? this
          : this.setQueryParameters({ tagFilters: void 0, tagRefinements: [] })
      },
      setIndex: function (e) {
        return e === this.index ? this : this.setQueryParameters({ index: e })
      },
      setQuery: function (e) {
        return e === this.query ? this : this.setQueryParameters({ query: e })
      },
      setPage: function (e) {
        return e === this.page ? this : this.setQueryParameters({ page: e })
      },
      setFacets: function (e) {
        return this.setQueryParameters({ facets: e })
      },
      setDisjunctiveFacets: function (e) {
        return this.setQueryParameters({ disjunctiveFacets: e })
      },
      setHitsPerPage: function (e) {
        return this.hitsPerPage === e
          ? this
          : this.setQueryParameters({ hitsPerPage: e })
      },
      setTypoTolerance: function (e) {
        return this.typoTolerance === e
          ? this
          : this.setQueryParameters({ typoTolerance: e })
      },
      addNumericRefinement: function (e, t, n) {
        var r = f(n)
        if (this.isNumericRefined(e, t, r)) return this
        var i = p({}, this.numericRefinements)
        return (
          (i[e] = p({}, i[e])),
          i[e][t]
            ? ((i[e][t] = i[e][t].slice()), i[e][t].push(r))
            : (i[e][t] = [r]),
          this.setQueryParameters({ numericRefinements: i })
        )
      },
      getConjunctiveRefinements: function (e) {
        return (this.isConjunctiveFacet(e) && this.facetsRefinements[e]) || []
      },
      getDisjunctiveRefinements: function (e) {
        return (
          (this.isDisjunctiveFacet(e) &&
            this.disjunctiveFacetsRefinements[e]) ||
          []
        )
      },
      getHierarchicalRefinement: function (e) {
        return this.hierarchicalFacetsRefinements[e] || []
      },
      getExcludeRefinements: function (e) {
        return (this.isConjunctiveFacet(e) && this.facetsExcludes[e]) || []
      },
      removeNumericRefinement: function (n, r, i) {
        return void 0 !== i
          ? this.isNumericRefined(n, r, i)
            ? this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function (
                  e,
                  t
                ) {
                  return t === n && e.op === r && R(e.val, f(i))
                })
              })
            : this
          : void 0 !== r
          ? this.isNumericRefined(n, r)
            ? this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function (
                  e,
                  t
                ) {
                  return t === n && e.op === r
                })
              })
            : this
          : this.isNumericRefined(n)
          ? this.setQueryParameters({
              numericRefinements: this._clearNumericRefinements(function (
                e,
                t
              ) {
                return t === n
              })
            })
          : this
      },
      getNumericRefinements: function (e) {
        return this.numericRefinements[e] || {}
      },
      getNumericRefinement: function (e, t) {
        return this.numericRefinements[e] && this.numericRefinements[e][t]
      },
      _clearNumericRefinements: function (s) {
        if (void 0 === s)
          return y(this.numericRefinements) ? {} : this.numericRefinements
        if ('string' == typeof s) return v(this.numericRefinements, [s])
        if ('function' == typeof s) {
          var o = !1,
            t = this.numericRefinements,
            e = Object.keys(t).reduce(function (e, r) {
              var i = t[r],
                a = {}
              return (
                (i = i || {}),
                Object.keys(i).forEach(function (t) {
                  var e = i[t] || [],
                    n = []
                  e.forEach(function (e) {
                    s({ val: e, op: t }, r, 'numeric') || n.push(e)
                  }),
                    n.length !== e.length && (o = !0),
                    (a[t] = n)
                }),
                (e[r] = a),
                e
              )
            }, {})
          return o ? e : this.numericRefinements
        }
      },
      addFacet: function (e) {
        return this.isConjunctiveFacet(e)
          ? this
          : this.setQueryParameters({ facets: this.facets.concat([e]) })
      },
      addDisjunctiveFacet: function (e) {
        return this.isDisjunctiveFacet(e)
          ? this
          : this.setQueryParameters({
              disjunctiveFacets: this.disjunctiveFacets.concat([e])
            })
      },
      addHierarchicalFacet: function (e) {
        if (this.isHierarchicalFacet(e.name))
          throw new Error(
            'Cannot declare two hierarchical facets with the same name: `' +
              e.name +
              '`'
          )
        return this.setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.concat([e])
        })
      },
      addFacetRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return S.isRefined(this.facetsRefinements, e, t)
          ? this
          : this.setQueryParameters({
              facetsRefinements: S.addRefinement(this.facetsRefinements, e, t)
            })
      },
      addExcludeRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return S.isRefined(this.facetsExcludes, e, t)
          ? this
          : this.setQueryParameters({
              facetsExcludes: S.addRefinement(this.facetsExcludes, e, t)
            })
      },
      addDisjunctiveFacetRefinement: function (e, t) {
        if (!this.isDisjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the disjunctiveFacets attribute of the helper configuration'
          )
        return S.isRefined(this.disjunctiveFacetsRefinements, e, t)
          ? this
          : this.setQueryParameters({
              disjunctiveFacetsRefinements: S.addRefinement(
                this.disjunctiveFacetsRefinements,
                e,
                t
              )
            })
      },
      addTagRefinement: function (e) {
        if (this.isTagRefined(e)) return this
        var t = { tagRefinements: this.tagRefinements.concat(e) }
        return this.setQueryParameters(t)
      },
      removeFacet: function (t) {
        return this.isConjunctiveFacet(t)
          ? this.clearRefinements(t).setQueryParameters({
              facets: this.facets.filter(function (e) {
                return e !== t
              })
            })
          : this
      },
      removeDisjunctiveFacet: function (t) {
        return this.isDisjunctiveFacet(t)
          ? this.clearRefinements(t).setQueryParameters({
              disjunctiveFacets: this.disjunctiveFacets.filter(function (e) {
                return e !== t
              })
            })
          : this
      },
      removeHierarchicalFacet: function (t) {
        return this.isHierarchicalFacet(t)
          ? this.clearRefinements(t).setQueryParameters({
              hierarchicalFacets: this.hierarchicalFacets.filter(function (e) {
                return e.name !== t
              })
            })
          : this
      },
      removeFacetRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return S.isRefined(this.facetsRefinements, e, t)
          ? this.setQueryParameters({
              facetsRefinements: S.removeRefinement(
                this.facetsRefinements,
                e,
                t
              )
            })
          : this
      },
      removeExcludeRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return S.isRefined(this.facetsExcludes, e, t)
          ? this.setQueryParameters({
              facetsExcludes: S.removeRefinement(this.facetsExcludes, e, t)
            })
          : this
      },
      removeDisjunctiveFacetRefinement: function (e, t) {
        if (!this.isDisjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the disjunctiveFacets attribute of the helper configuration'
          )
        return S.isRefined(this.disjunctiveFacetsRefinements, e, t)
          ? this.setQueryParameters({
              disjunctiveFacetsRefinements: S.removeRefinement(
                this.disjunctiveFacetsRefinements,
                e,
                t
              )
            })
          : this
      },
      removeTagRefinement: function (t) {
        if (!this.isTagRefined(t)) return this
        var e = {
          tagRefinements: this.tagRefinements.filter(function (e) {
            return e !== t
          })
        }
        return this.setQueryParameters(e)
      },
      toggleRefinement: function (e, t) {
        return this.toggleFacetRefinement(e, t)
      },
      toggleFacetRefinement: function (e, t) {
        if (this.isHierarchicalFacet(e))
          return this.toggleHierarchicalFacetRefinement(e, t)
        if (this.isConjunctiveFacet(e))
          return this.toggleConjunctiveFacetRefinement(e, t)
        if (this.isDisjunctiveFacet(e))
          return this.toggleDisjunctiveFacetRefinement(e, t)
        throw new Error(
          'Cannot refine the undeclared facet ' +
            e +
            '; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets'
        )
      },
      toggleConjunctiveFacetRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return this.setQueryParameters({
          facetsRefinements: S.toggleRefinement(this.facetsRefinements, e, t)
        })
      },
      toggleExcludeFacetRefinement: function (e, t) {
        if (!this.isConjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the facets attribute of the helper configuration'
          )
        return this.setQueryParameters({
          facetsExcludes: S.toggleRefinement(this.facetsExcludes, e, t)
        })
      },
      toggleDisjunctiveFacetRefinement: function (e, t) {
        if (!this.isDisjunctiveFacet(e))
          throw new Error(
            e +
              ' is not defined in the disjunctiveFacets attribute of the helper configuration'
          )
        return this.setQueryParameters({
          disjunctiveFacetsRefinements: S.toggleRefinement(
            this.disjunctiveFacetsRefinements,
            e,
            t
          )
        })
      },
      toggleHierarchicalFacetRefinement: function (e, t) {
        if (!this.isHierarchicalFacet(e))
          throw new Error(
            e +
              ' is not defined in the hierarchicalFacets attribute of the helper configuration'
          )
        var n = this._getHierarchicalFacetSeparator(
            this.getHierarchicalFacetByName(e)
          ),
          r = {}
        return (
          void 0 !== this.hierarchicalFacetsRefinements[e] &&
          0 < this.hierarchicalFacetsRefinements[e].length &&
          (this.hierarchicalFacetsRefinements[e][0] === t ||
            0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + n))
            ? -1 === t.indexOf(n)
              ? (r[e] = [])
              : (r[e] = [t.slice(0, t.lastIndexOf(n))])
            : (r[e] = [t]),
          this.setQueryParameters({
            hierarchicalFacetsRefinements: m(
              {},
              r,
              this.hierarchicalFacetsRefinements
            )
          })
        )
      },
      addHierarchicalFacetRefinement: function (e, t) {
        if (this.isHierarchicalFacetRefined(e))
          throw new Error(e + ' is already refined.')
        if (!this.isHierarchicalFacet(e))
          throw new Error(
            e +
              ' is not defined in the hierarchicalFacets attribute of the helper configuration.'
          )
        var n = {}
        return (
          (n[e] = [t]),
          this.setQueryParameters({
            hierarchicalFacetsRefinements: m(
              {},
              n,
              this.hierarchicalFacetsRefinements
            )
          })
        )
      },
      removeHierarchicalFacetRefinement: function (e) {
        if (!this.isHierarchicalFacetRefined(e)) return this
        var t = {}
        return (
          (t[e] = []),
          this.setQueryParameters({
            hierarchicalFacetsRefinements: m(
              {},
              t,
              this.hierarchicalFacetsRefinements
            )
          })
        )
      },
      toggleTagRefinement: function (e) {
        return this.isTagRefined(e)
          ? this.removeTagRefinement(e)
          : this.addTagRefinement(e)
      },
      isDisjunctiveFacet: function (e) {
        return -1 < this.disjunctiveFacets.indexOf(e)
      },
      isHierarchicalFacet: function (e) {
        return void 0 !== this.getHierarchicalFacetByName(e)
      },
      isConjunctiveFacet: function (e) {
        return -1 < this.facets.indexOf(e)
      },
      isFacetRefined: function (e, t) {
        return (
          !!this.isConjunctiveFacet(e) &&
          S.isRefined(this.facetsRefinements, e, t)
        )
      },
      isExcludeRefined: function (e, t) {
        return (
          !!this.isConjunctiveFacet(e) && S.isRefined(this.facetsExcludes, e, t)
        )
      },
      isDisjunctiveFacetRefined: function (e, t) {
        return (
          !!this.isDisjunctiveFacet(e) &&
          S.isRefined(this.disjunctiveFacetsRefinements, e, t)
        )
      },
      isHierarchicalFacetRefined: function (e, t) {
        if (!this.isHierarchicalFacet(e)) return !1
        var n = this.getHierarchicalRefinement(e)
        return t ? -1 !== n.indexOf(t) : 0 < n.length
      },
      isNumericRefined: function (e, t, n) {
        if (void 0 === n && void 0 === t) return !!this.numericRefinements[e]
        var r =
          this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t]
        if (void 0 === n || !r) return r
        var i = f(n),
          a =
            void 0 !==
            (function (e, t) {
              return g(e, function (e) {
                return R(e, t)
              })
            })(this.numericRefinements[e][t], i)
        return r && a
      },
      isTagRefined: function (e) {
        return -1 !== this.tagRefinements.indexOf(e)
      },
      getRefinedDisjunctiveFacets: function () {
        var t = this,
          e = l(
            Object.keys(this.numericRefinements).filter(function (e) {
              return 0 < Object.keys(t.numericRefinements[e]).length
            }),
            this.disjunctiveFacets
          )
        return Object.keys(this.disjunctiveFacetsRefinements)
          .filter(function (e) {
            return 0 < t.disjunctiveFacetsRefinements[e].length
          })
          .concat(e)
          .concat(this.getRefinedHierarchicalFacets())
      },
      getRefinedHierarchicalFacets: function () {
        var t = this
        return l(
          this.hierarchicalFacets.map(function (e) {
            return e.name
          }),
          Object.keys(this.hierarchicalFacetsRefinements).filter(function (e) {
            return 0 < t.hierarchicalFacetsRefinements[e].length
          })
        )
      },
      getUnrefinedDisjunctiveFacets: function () {
        var t = this.getRefinedDisjunctiveFacets()
        return this.disjunctiveFacets.filter(function (e) {
          return -1 === t.indexOf(e)
        })
      },
      managedParameters: [
        'index',
        'facets',
        'disjunctiveFacets',
        'facetsRefinements',
        'facetsExcludes',
        'disjunctiveFacetsRefinements',
        'numericRefinements',
        'tagRefinements',
        'hierarchicalFacets',
        'hierarchicalFacetsRefinements'
      ],
      getQueryParams: function () {
        var n = this.managedParameters,
          r = {},
          i = this
        return (
          Object.keys(this).forEach(function (e) {
            var t = i[e]
            ;-1 === n.indexOf(e) && void 0 !== t && (r[e] = t)
          }),
          r
        )
      },
      setQueryParameter: function (e, t) {
        if (this[e] === t) return this
        var n = {}
        return (n[e] = t), this.setQueryParameters(n)
      },
      setQueryParameters: function (e) {
        if (!e) return this
        var t = w.validate(this, e)
        if (t) throw t
        var n = this,
          i = w._parseNumbers(e),
          r = Object.keys(this).reduce(function (e, t) {
            return (e[t] = n[t]), e
          }, {}),
          a = Object.keys(i).reduce(function (e, t) {
            var n = void 0 !== e[t],
              r = void 0 !== i[t]
            return n && !r ? v(e, [t]) : (r && (e[t] = i[t]), e)
          }, r)
        return new this.constructor(a)
      },
      resetPage: function () {
        return void 0 === this.page ? this : this.setPage(0)
      },
      _getHierarchicalFacetSortBy: function (e) {
        return e.sortBy || ['isRefined:desc', 'name:asc']
      },
      _getHierarchicalFacetSeparator: function (e) {
        return e.separator || ' > '
      },
      _getHierarchicalRootPath: function (e) {
        return e.rootPath || null
      },
      _getHierarchicalShowParentLevel: function (e) {
        return 'boolean' != typeof e.showParentLevel || e.showParentLevel
      },
      getHierarchicalFacetByName: function (t) {
        return g(this.hierarchicalFacets, function (e) {
          return e.name === t
        })
      },
      getHierarchicalFacetBreadcrumb: function (e) {
        if (!this.isHierarchicalFacet(e)) return []
        var t = this.getHierarchicalRefinement(e)[0]
        if (!t) return []
        var n = this._getHierarchicalFacetSeparator(
          this.getHierarchicalFacetByName(e)
        )
        return t.split(n).map(function (e) {
          return e.trim()
        })
      },
      toString: function () {
        return JSON.stringify(this, null, 2)
      }
    })
  var x = w
  function N(e, t) {
    if (e !== t) {
      var n = void 0 !== e,
        r = null === e,
        i = void 0 !== t,
        a = null === t
      if ((!a && t < e) || (r && i) || !n) return 1
      if ((!r && e < t) || (a && n) || !i) return -1
    }
    return 0
  }
  function _(e) {
    return Array.isArray(e) ? e.filter(Boolean) : []
  }
  function I(e, t) {
    if (!Array.isArray(e)) return -1
    for (var n = 0; n < e.length; n++) if (t(e[n])) return n
    return -1
  }
  function F(e, t) {
    var i = (t || []).map(function (e) {
      return e.split(':')
    })
    return e.reduce(
      function (e, t) {
        var n = t.split(':'),
          r = g(i, function (e) {
            return e[0] === n[0]
          })
        return (
          1 < n.length || !r
            ? (e[0].push(n[0]), e[1].push(n[1]))
            : (e[0].push(r[0]), e[1].push(r[1])),
          e
        )
      },
      [[], []]
    )
  }
  var T = function (e, n, i) {
      if (!Array.isArray(e)) return []
      Array.isArray(i) || (i = [])
      var t = e.map(function (t, e) {
        return {
          criteria: n.map(function (e) {
            return t[e]
          }),
          index: e,
          value: t
        }
      })
      return (
        t.sort(function (e, t) {
          for (var n = -1; ++n < e.criteria.length; ) {
            var r = N(e.criteria[n], t.criteria[n])
            if (r) return n >= i.length ? r : 'desc' === i[n] ? -r : r
          }
          return e.index - t.index
        }),
        t.map(function (e) {
          return e.value
        })
      )
    },
    C = function (d) {
      return function (e, t) {
        var n = d.hierarchicalFacets[t],
          r =
            (d.hierarchicalFacetsRefinements[n.name] &&
              d.hierarchicalFacetsRefinements[n.name][0]) ||
            '',
          i = d._getHierarchicalFacetSeparator(n),
          a = d._getHierarchicalRootPath(n),
          s = d._getHierarchicalShowParentLevel(n),
          o = F(d._getHierarchicalFacetSortBy(n)),
          c = e.every(function (e) {
            return e.exhaustive
          }),
          u = (function (o, c, u, l, d) {
            return function (e, n, t) {
              var r = e
              if (0 < t) {
                var i = 0
                for (r = e; i < t; ) {
                  var a = r && Array.isArray(r.data) ? r.data : []
                  ;(r = g(a, function (e) {
                    return e.isRefined
                  })),
                    i++
                }
              }
              if (r) {
                var s = Object.keys(n.data)
                  .map(function (e) {
                    return [e, n.data[e]]
                  })
                  .filter(function (e) {
                    return (function (e, t, n, r, i, a) {
                      return (
                        (!i || (0 === e.indexOf(i) && i !== e)) &&
                        ((!i && -1 === e.indexOf(r)) ||
                          (i && e.split(r).length - i.split(r).length == 1) ||
                          (-1 === e.indexOf(r) && -1 === n.indexOf(r)) ||
                          0 === n.indexOf(e) ||
                          (0 === e.indexOf(t + r) && (a || 0 === e.indexOf(n))))
                      )
                    })(e[0], r.path || u, d, c, u, l)
                  })
                r.data = T(
                  s.map(function (e) {
                    var t = e[0]
                    return (function (e, t, n, r, i) {
                      var a = t.split(n)
                      return {
                        name: a[a.length - 1].trim(),
                        path: t,
                        count: e,
                        isRefined: r === t || 0 === r.indexOf(t + n),
                        exhaustive: i,
                        data: null
                      }
                    })(e[1], t, c, d, n.exhaustive)
                  }),
                  o[0],
                  o[1]
                )
              }
              return e
            }
          })(o, i, a, s, r),
          l = e
        return (
          a && (l = e.slice(a.split(i).length)),
          l.reduce(u, {
            name: d.hierarchicalFacets[t].name,
            count: null,
            isRefined: !0,
            path: null,
            exhaustive: c,
            data: null
          })
        )
      }
    }
  function E(e) {
    var n = {}
    return (
      e.forEach(function (e, t) {
        n[e] = t
      }),
      n
    )
  }
  function B(e, t, n) {
    t && t[n] && (e.stats = t[n])
  }
  function U(l, n) {
    var c = n[0]
    this._rawResults = n
    var d = this
    Object.keys(c).forEach(function (e) {
      d[e] = c[e]
    }),
      (this.processingTimeMS = n.reduce(function (e, t) {
        return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
      }, 0)),
      (this.disjunctiveFacets = []),
      (this.hierarchicalFacets = l.hierarchicalFacets.map(function () {
        return []
      })),
      (this.facets = [])
    var e = l.getRefinedDisjunctiveFacets(),
      u = E(l.facets),
      h = E(l.disjunctiveFacets),
      r = 1,
      f = c.facets || {}
    Object.keys(f).forEach(function (e) {
      var t = f[e],
        n = (function (e, t) {
          return g(e, function (e) {
            return -1 < (e.attributes || []).indexOf(t)
          })
        })(l.hierarchicalFacets, e)
      if (n) {
        var r = n.attributes.indexOf(e),
          i = I(l.hierarchicalFacets, function (e) {
            return e.name === n.name
          })
        d.hierarchicalFacets[i][r] = {
          attribute: e,
          data: t,
          exhaustive: c.exhaustiveFacetsCount
        }
      } else {
        var a,
          s = -1 !== l.disjunctiveFacets.indexOf(e),
          o = -1 !== l.facets.indexOf(e)
        s &&
          ((a = h[e]),
          (d.disjunctiveFacets[a] = {
            name: e,
            data: t,
            exhaustive: c.exhaustiveFacetsCount
          }),
          B(d.disjunctiveFacets[a], c.facets_stats, e)),
          o &&
            ((a = u[e]),
            (d.facets[a] = {
              name: e,
              data: t,
              exhaustive: c.exhaustiveFacetsCount
            }),
            B(d.facets[a], c.facets_stats, e))
      }
    }),
      (this.hierarchicalFacets = _(this.hierarchicalFacets)),
      e.forEach(function (e) {
        var a = n[r],
          s = a && a.facets ? a.facets : {},
          o = l.getHierarchicalFacetByName(e)
        Object.keys(s).forEach(function (t) {
          var n,
            e = s[t]
          if (o) {
            n = I(l.hierarchicalFacets, function (e) {
              return e.name === o.name
            })
            var r = I(d.hierarchicalFacets[n], function (e) {
              return e.attribute === t
            })
            if (-1 === r) return
            d.hierarchicalFacets[n][r].data = p(
              {},
              d.hierarchicalFacets[n][r].data,
              e
            )
          } else {
            n = h[t]
            var i = (c.facets && c.facets[t]) || {}
            ;(d.disjunctiveFacets[n] = {
              name: t,
              data: m({}, e, i),
              exhaustive: a.exhaustiveFacetsCount
            }),
              B(d.disjunctiveFacets[n], a.facets_stats, t),
              l.disjunctiveFacetsRefinements[t] &&
                l.disjunctiveFacetsRefinements[t].forEach(function (e) {
                  !d.disjunctiveFacets[n].data[e] &&
                    -1 < l.disjunctiveFacetsRefinements[t].indexOf(e) &&
                    (d.disjunctiveFacets[n].data[e] = 0)
                })
          }
        }),
          r++
      }),
      l.getRefinedHierarchicalFacets().forEach(function (e) {
        var s = l.getHierarchicalFacetByName(e),
          o = l._getHierarchicalFacetSeparator(s),
          c = l.getHierarchicalRefinement(e)
        if (!(0 === c.length || c[0].split(o).length < 2)) {
          var t = n[r],
            u = t && t.facets ? t.facets : {}
          Object.keys(u).forEach(function (t) {
            var e = u[t],
              n = I(l.hierarchicalFacets, function (e) {
                return e.name === s.name
              }),
              r = I(d.hierarchicalFacets[n], function (e) {
                return e.attribute === t
              })
            if (-1 !== r) {
              var i = {}
              if (0 < c.length) {
                var a = c[0].split(o)[0]
                i[a] = d.hierarchicalFacets[n][r].data[a]
              }
              d.hierarchicalFacets[n][r].data = m(
                i,
                e,
                d.hierarchicalFacets[n][r].data
              )
            }
          }),
            r++
        }
      }),
      Object.keys(l.facetsExcludes).forEach(function (t) {
        var e = l.facetsExcludes[t],
          n = u[t]
        ;(d.facets[n] = {
          name: t,
          data: c.facets[t],
          exhaustive: c.exhaustiveFacetsCount
        }),
          e.forEach(function (e) {
            ;(d.facets[n] = d.facets[n] || { name: t }),
              (d.facets[n].data = d.facets[n].data || {}),
              (d.facets[n].data[e] = 0)
          })
      }),
      (this.hierarchicalFacets = this.hierarchicalFacets.map(C(l))),
      (this.facets = _(this.facets)),
      (this.disjunctiveFacets = _(this.disjunctiveFacets)),
      (this._state = l)
  }
  function q(t, e) {
    if (!e.data || 0 === e.data.length) return e
    var n = e.data.map(function (e) {
        return q(t, e)
      }),
      r = t(n)
    return p({}, e, { data: r })
  }
  function Q(e, t) {
    var n = g(e, function (e) {
      return e.name === t
    })
    return n && n.stats
  }
  function $(e, t, n, r, i) {
    var a = g(i, function (e) {
        return e.name === n
      }),
      s = a && a.data && a.data[r] ? a.data[r] : 0,
      o = (a && a.exhaustive) || !1
    return { type: t, attributeName: n, name: r, count: s, exhaustive: o }
  }
  ;(U.prototype.getFacetByName = function (t) {
    function e(e) {
      return e.name === t
    }
    return (
      g(this.facets, e) ||
      g(this.disjunctiveFacets, e) ||
      g(this.hierarchicalFacets, e)
    )
  }),
    (U.DEFAULT_SORT = ['isRefined:desc', 'count:desc', 'name:asc']),
    (U.prototype.getFacetValues = function (e, t) {
      var n = (function (t, n) {
        function e(e) {
          return e.name === n
        }
        if (t._state.isConjunctiveFacet(n)) {
          var r = g(t.facets, e)
          return r
            ? Object.keys(r.data).map(function (e) {
                return {
                  name: e,
                  count: r.data[e],
                  isRefined: t._state.isFacetRefined(n, e),
                  isExcluded: t._state.isExcludeRefined(n, e)
                }
              })
            : []
        }
        if (t._state.isDisjunctiveFacet(n)) {
          var i = g(t.disjunctiveFacets, e)
          return i
            ? Object.keys(i.data).map(function (e) {
                return {
                  name: e,
                  count: i.data[e],
                  isRefined: t._state.isDisjunctiveFacetRefined(n, e)
                }
              })
            : []
        }
        if (t._state.isHierarchicalFacet(n)) return g(t.hierarchicalFacets, e)
      })(this, e)
      if (n) {
        var r = m({}, t, { sortBy: U.DEFAULT_SORT })
        if (Array.isArray(r.sortBy)) {
          var i = F(r.sortBy, U.DEFAULT_SORT)
          return Array.isArray(n)
            ? T(n, i[0], i[1])
            : q(function (e) {
                return T(e, i[0], i[1])
              }, n)
        }
        if ('function' == typeof r.sortBy)
          return Array.isArray(n)
            ? n.sort(r.sortBy)
            : q(function (e) {
                return (function (e, t) {
                  return t.sort(e)
                })(r.sortBy, e)
              }, n)
        throw new Error(
          'options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function'
        )
      }
    }),
    (U.prototype.getFacetStats = function (e) {
      return this._state.isConjunctiveFacet(e)
        ? Q(this.facets, e)
        : this._state.isDisjunctiveFacet(e)
        ? Q(this.disjunctiveFacets, e)
        : void 0
    }),
    (U.prototype.getRefinements = function () {
      var r = this._state,
        n = this,
        i = []
      return (
        Object.keys(r.facetsRefinements).forEach(function (t) {
          r.facetsRefinements[t].forEach(function (e) {
            i.push($(r, 'facet', t, e, n.facets))
          })
        }),
        Object.keys(r.facetsExcludes).forEach(function (t) {
          r.facetsExcludes[t].forEach(function (e) {
            i.push($(r, 'exclude', t, e, n.facets))
          })
        }),
        Object.keys(r.disjunctiveFacetsRefinements).forEach(function (t) {
          r.disjunctiveFacetsRefinements[t].forEach(function (e) {
            i.push($(r, 'disjunctive', t, e, n.disjunctiveFacets))
          })
        }),
        Object.keys(r.hierarchicalFacetsRefinements).forEach(function (t) {
          r.hierarchicalFacetsRefinements[t].forEach(function (e) {
            i.push(
              (function (e, t, n, r) {
                var i = e.getHierarchicalFacetByName(t),
                  a = e._getHierarchicalFacetSeparator(i),
                  s = n.split(a),
                  o = g(r, function (e) {
                    return e.name === t
                  }),
                  c = s.reduce(function (e, t) {
                    var n =
                      e &&
                      g(e.data, function (e) {
                        return e.name === t
                      })
                    return void 0 !== n ? n : e
                  }, o),
                  u = (c && c.count) || 0,
                  l = (c && c.exhaustive) || !1,
                  d = (c && c.path) || ''
                return {
                  type: 'hierarchical',
                  attributeName: t,
                  name: d,
                  count: u,
                  exhaustive: l
                }
              })(r, t, e, n.hierarchicalFacets)
            )
          })
        }),
        Object.keys(r.numericRefinements).forEach(function (n) {
          var e = r.numericRefinements[n]
          Object.keys(e).forEach(function (t) {
            e[t].forEach(function (e) {
              i.push({
                type: 'numeric',
                attributeName: n,
                name: e,
                numericValue: e,
                operator: t
              })
            })
          })
        }),
        r.tagRefinements.forEach(function (e) {
          i.push({ type: 'tag', attributeName: '_tags', name: e })
        }),
        i
      )
    })
  var V = U
  function K() {
    ;(this._events = this._events || {}),
      (this._maxListeners = this._maxListeners || void 0)
  }
  var e = K
  function z(e) {
    return 'function' == typeof e
  }
  function J(e) {
    return 'object' == typeof e && null !== e
  }
  function Y(e) {
    return void 0 === e
  }
  ;((K.EventEmitter = K).prototype._events = void 0),
    (K.prototype._maxListeners = void 0),
    (K.defaultMaxListeners = 10),
    (K.prototype.setMaxListeners = function (e) {
      if (
        !(function (e) {
          return 'number' == typeof e
        })(e) ||
        e < 0 ||
        isNaN(e)
      )
        throw TypeError('n must be a positive number')
      return (this._maxListeners = e), this
    }),
    (K.prototype.emit = function (e) {
      var t, n, r, i, a, s
      if (
        (this._events || (this._events = {}),
        'error' === e &&
          (!this._events.error ||
            (J(this._events.error) && !this._events.error.length)))
      ) {
        if ((t = arguments[1]) instanceof Error) throw t
        var o = new Error('Uncaught, unspecified "error" event. (' + t + ')')
        throw ((o.context = t), o)
      }
      if (Y((n = this._events[e]))) return !1
      if (z(n))
        switch (arguments.length) {
          case 1:
            n.call(this)
            break
          case 2:
            n.call(this, arguments[1])
            break
          case 3:
            n.call(this, arguments[1], arguments[2])
            break
          default:
            ;(i = Array.prototype.slice.call(arguments, 1)), n.apply(this, i)
        }
      else if (J(n))
        for (
          i = Array.prototype.slice.call(arguments, 1),
            r = (s = n.slice()).length,
            a = 0;
          a < r;
          a++
        )
          s[a].apply(this, i)
      return !0
    }),
    (K.prototype.on = K.prototype.addListener =
      function (e, t) {
        var n
        if (!z(t)) throw TypeError('listener must be a function')
        return (
          this._events || (this._events = {}),
          this._events.newListener &&
            this.emit('newListener', e, z(t.listener) ? t.listener : t),
          this._events[e]
            ? J(this._events[e])
              ? this._events[e].push(t)
              : (this._events[e] = [this._events[e], t])
            : (this._events[e] = t),
          J(this._events[e]) &&
            !this._events[e].warned &&
            (n = Y(this._maxListeners)
              ? K.defaultMaxListeners
              : this._maxListeners) &&
            0 < n &&
            this._events[e].length > n &&
            ((this._events[e].warned = !0),
            console.error(
              '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
              this._events[e].length
            ),
            'function' == typeof console.trace && console.trace()),
          this
        )
      }),
    (K.prototype.once = function (e, t) {
      if (!z(t)) throw TypeError('listener must be a function')
      var n = !1
      function r() {
        this.removeListener(e, r), n || ((n = !0), t.apply(this, arguments))
      }
      return (r.listener = t), this.on(e, r), this
    }),
    (K.prototype.removeListener = function (e, t) {
      var n, r, i, a
      if (!z(t)) throw TypeError('listener must be a function')
      if (!this._events || !this._events[e]) return this
      if (
        ((i = (n = this._events[e]).length),
        (r = -1),
        n === t || (z(n.listener) && n.listener === t))
      )
        delete this._events[e],
          this._events.removeListener && this.emit('removeListener', e, t)
      else if (J(n)) {
        for (a = i; 0 < a--; )
          if (n[a] === t || (n[a].listener && n[a].listener === t)) {
            r = a
            break
          }
        if (r < 0) return this
        1 === n.length
          ? ((n.length = 0), delete this._events[e])
          : n.splice(r, 1),
          this._events.removeListener && this.emit('removeListener', e, t)
      }
      return this
    }),
    (K.prototype.removeAllListeners = function (e) {
      var t, n
      if (!this._events) return this
      if (!this._events.removeListener)
        return (
          0 === arguments.length
            ? (this._events = {})
            : this._events[e] && delete this._events[e],
          this
        )
      if (0 === arguments.length) {
        for (t in this._events)
          'removeListener' !== t && this.removeAllListeners(t)
        return (
          this.removeAllListeners('removeListener'), (this._events = {}), this
        )
      }
      if (z((n = this._events[e]))) this.removeListener(e, n)
      else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1])
      return delete this._events[e], this
    }),
    (K.prototype.listeners = function (e) {
      return this._events && this._events[e]
        ? z(this._events[e])
          ? [this._events[e]]
          : this._events[e].slice()
        : []
    }),
    (K.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e]
        if (z(t)) return 1
        if (t) return t.length
      }
      return 0
    }),
    (K.listenerCount = function (e, t) {
      return e.listenerCount(t)
    })
  var X = function (e, t) {
    e.prototype = Object.create(t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })
  }
  function G(e, t) {
    ;(this.main = e), (this.fn = t), (this.lastResults = null)
  }
  X(G, e.EventEmitter),
    (G.prototype.detach = function () {
      this.removeAllListeners(), this.main.detachDerivedHelper(this)
    }),
    (G.prototype.getModifiedState = function (e) {
      return this.fn(e)
    })
  var Z = G,
    ee = {
      _getQueries: function (i, a) {
        var s = []
        return (
          s.push({ indexName: i, params: ee._getHitsSearchParams(a) }),
          a.getRefinedDisjunctiveFacets().forEach(function (e) {
            s.push({
              indexName: i,
              params: ee._getDisjunctiveFacetSearchParams(a, e)
            })
          }),
          a.getRefinedHierarchicalFacets().forEach(function (e) {
            var t = a.getHierarchicalFacetByName(e),
              n = a.getHierarchicalRefinement(e),
              r = a._getHierarchicalFacetSeparator(t)
            0 < n.length &&
              1 < n[0].split(r).length &&
              s.push({
                indexName: i,
                params: ee._getDisjunctiveFacetSearchParams(a, e, !0)
              })
          }),
          s
        )
      },
      _getHitsSearchParams: function (e) {
        var t = e.facets
            .concat(e.disjunctiveFacets)
            .concat(ee._getHitsHierarchicalFacetsAttributes(e)),
          n = ee._getFacetFilters(e),
          r = ee._getNumericFilters(e),
          i = { facets: t, tagFilters: ee._getTagFilters(e) }
        return (
          0 < n.length && (i.facetFilters = n),
          0 < r.length && (i.numericFilters = r),
          p({}, e.getQueryParams(), i)
        )
      },
      _getDisjunctiveFacetSearchParams: function (e, t, n) {
        var r = ee._getFacetFilters(e, t, n),
          i = ee._getNumericFilters(e, t),
          a = {
            hitsPerPage: 1,
            page: 0,
            attributesToRetrieve: [],
            attributesToHighlight: [],
            attributesToSnippet: [],
            tagFilters: ee._getTagFilters(e),
            analytics: !1,
            clickAnalytics: !1
          },
          s = e.getHierarchicalFacetByName(t)
        return (
          (a.facets = s
            ? ee._getDisjunctiveHierarchicalFacetAttribute(e, s, n)
            : t),
          0 < i.length && (a.numericFilters = i),
          0 < r.length && (a.facetFilters = r),
          p({}, e.getQueryParams(), a)
        )
      },
      _getNumericFilters: function (e, i) {
        if (e.numericFilters) return e.numericFilters
        var a = []
        return (
          Object.keys(e.numericRefinements).forEach(function (r) {
            var t = e.numericRefinements[r] || {}
            Object.keys(t).forEach(function (n) {
              var e = t[n] || []
              i !== r &&
                e.forEach(function (e) {
                  if (Array.isArray(e)) {
                    var t = e.map(function (e) {
                      return r + n + e
                    })
                    a.push(t)
                  } else a.push(r + n + e)
                })
            })
          }),
          a
        )
      },
      _getTagFilters: function (e) {
        return e.tagFilters ? e.tagFilters : e.tagRefinements.join(',')
      },
      _getFacetFilters: function (o, c, u) {
        var l = [],
          e = o.facetsRefinements || {}
        Object.keys(e).forEach(function (t) {
          ;(e[t] || []).forEach(function (e) {
            l.push(t + ':' + e)
          })
        })
        var n = o.facetsExcludes || {}
        Object.keys(n).forEach(function (t) {
          ;(n[t] || []).forEach(function (e) {
            l.push(t + ':-' + e)
          })
        })
        var r = o.disjunctiveFacetsRefinements || {}
        Object.keys(r).forEach(function (t) {
          var e = r[t] || []
          if (t !== c && e && 0 !== e.length) {
            var n = []
            e.forEach(function (e) {
              n.push(t + ':' + e)
            }),
              l.push(n)
          }
        })
        var d = o.hierarchicalFacetsRefinements || {}
        return (
          Object.keys(d).forEach(function (e) {
            var t = (d[e] || [])[0]
            if (void 0 !== t) {
              var n,
                r,
                i = o.getHierarchicalFacetByName(e),
                a = o._getHierarchicalFacetSeparator(i),
                s = o._getHierarchicalRootPath(i)
              if (c === e) {
                if (
                  -1 === t.indexOf(a) ||
                  (!s && !0 === u) ||
                  (s && s.split(a).length === t.split(a).length)
                )
                  return
                ;(t = s
                  ? ((r = s.split(a).length - 1), s)
                  : ((r = t.split(a).length - 2),
                    t.slice(0, t.lastIndexOf(a)))),
                  (n = i.attributes[r])
              } else (r = t.split(a).length - 1), (n = i.attributes[r])
              n && l.push([n + ':' + t])
            }
          }),
          l
        )
      },
      _getHitsHierarchicalFacetsAttributes: function (s) {
        return s.hierarchicalFacets.reduce(function (e, t) {
          var n = s.getHierarchicalRefinement(t.name)[0]
          if (!n) return e.push(t.attributes[0]), e
          var r = s._getHierarchicalFacetSeparator(t),
            i = n.split(r).length,
            a = t.attributes.slice(0, i + 1)
          return e.concat(a)
        }, [])
      },
      _getDisjunctiveHierarchicalFacetAttribute: function (e, t, n) {
        var r = e._getHierarchicalFacetSeparator(t)
        if (!0 === n) {
          var i = e._getHierarchicalRootPath(t),
            a = 0
          return i && (a = i.split(r).length), [t.attributes[a]]
        }
        var s =
          (e.getHierarchicalRefinement(t.name)[0] || '').split(r).length - 1
        return t.attributes.slice(0, 1 + s)
      },
      getSearchForFacetQuery: function (e, t, n, r) {
        var i = r.isDisjunctiveFacet(e) ? r.clearRefinements(e) : r,
          a = { facetQuery: t, facetName: e }
        return (
          'number' == typeof n && (a.maxFacetHits = n),
          p({}, ee._getHitsSearchParams(i), a)
        )
      }
    },
    te = ee,
    ne = '3.4.4'
  function re(e, t, n) {
    'function' == typeof e.addAlgoliaAgent &&
      e.addAlgoliaAgent('JS Helper (3.4.4)'),
      this.setClient(e)
    var r = n || {}
    ;(r.index = t),
      (this.state = x.make(r)),
      (this.lastResults = null),
      (this._queryId = 0),
      (this._lastQueryIdReceived = -1),
      (this.derivedHelpers = []),
      (this._currentNbQueries = 0)
  }
  function ie(e) {
    if (e < 0) throw new Error('Page requested below 0.')
    return this._change({ state: this.state.setPage(e), isPageReset: !1 }), this
  }
  function ae() {
    return this.state.page
  }
  X(re, e.EventEmitter),
    (re.prototype.search = function () {
      return this._search({ onlyWithDerivedHelpers: !1 }), this
    }),
    (re.prototype.searchOnlyWithDerivedHelpers = function () {
      return this._search({ onlyWithDerivedHelpers: !0 }), this
    }),
    (re.prototype.getQuery = function () {
      var e = this.state
      return te._getHitsSearchParams(e)
    }),
    (re.prototype.searchOnce = function (e, t) {
      var n = e ? this.state.setQueryParameters(e) : this.state,
        r = te._getQueries(n.index, n),
        i = this
      if ((this._currentNbQueries++, this.emit('searchOnce', { state: n }), !t))
        return this.client.search(r).then(
          function (e) {
            return (
              i._currentNbQueries--,
              0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
              { content: new V(n, e.results), state: n, _originalResponse: e }
            )
          },
          function (e) {
            throw (
              (i._currentNbQueries--,
              0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
              e)
            )
          }
        )
      this.client
        .search(r)
        .then(function (e) {
          i._currentNbQueries--,
            0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
            t(null, new V(n, e.results), n)
        })
        .catch(function (e) {
          i._currentNbQueries--,
            0 === i._currentNbQueries && i.emit('searchQueueEmpty'),
            t(e, null, n)
        })
    }),
    (re.prototype.findAnswers = function (e) {
      var t = this.state,
        n = this.derivedHelpers[0]
      if (!n) return Promise.resolve([])
      var r = n.getModifiedState(t),
        i = p(
          {
            attributesForPrediction: e.attributesForPrediction,
            nbHits: e.nbHits
          },
          {
            params: v(te._getHitsSearchParams(r), [
              'attributesToSnippet',
              'hitsPerPage',
              'restrictSearchableAttributes',
              'snippetEllipsisText'
            ])
          }
        ),
        a =
          'search for answers was called, but this client does not have a function client.initIndex(index).findAnswers'
      if ('function' != typeof this.client.initIndex) throw new Error(a)
      var s = this.client.initIndex(r.index)
      if ('function' != typeof s.findAnswers) throw new Error(a)
      return s.findAnswers(r.query, e.queryLanguages, i)
    }),
    (re.prototype.searchForFacetValues = function (t, e, n, r) {
      var i = 'function' == typeof this.client.searchForFacetValues
      if (!i && 'function' != typeof this.client.initIndex)
        throw new Error(
          'search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues'
        )
      var a = this.state.setQueryParameters(r || {}),
        s = a.isDisjunctiveFacet(t),
        o = te.getSearchForFacetQuery(t, e, n, a)
      this._currentNbQueries++
      var c = this
      return (
        this.emit('searchForFacetValues', { state: a, facet: t, query: e }),
        (i
          ? this.client.searchForFacetValues([
              { indexName: a.index, params: o }
            ])
          : this.client.initIndex(a.index).searchForFacetValues(o)
        ).then(
          function (e) {
            return (
              c._currentNbQueries--,
              0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
              (e = Array.isArray(e) ? e[0] : e).facetHits.forEach(function (e) {
                e.isRefined = s
                  ? a.isDisjunctiveFacetRefined(t, e.value)
                  : a.isFacetRefined(t, e.value)
              }),
              e
            )
          },
          function (e) {
            throw (
              (c._currentNbQueries--,
              0 === c._currentNbQueries && c.emit('searchQueueEmpty'),
              e)
            )
          }
        )
      )
    }),
    (re.prototype.setQuery = function (e) {
      return (
        this._change({
          state: this.state.resetPage().setQuery(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.clearRefinements = function (e) {
      return (
        this._change({
          state: this.state.resetPage().clearRefinements(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.clearTags = function () {
      return (
        this._change({
          state: this.state.resetPage().clearTags(),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addDisjunctiveFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addDisjunctiveRefine = function () {
      return this.addDisjunctiveFacetRefinement.apply(this, arguments)
    }),
    (re.prototype.addHierarchicalFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addNumericRefinement = function (e, t, n) {
      return (
        this._change({
          state: this.state.resetPage().addNumericRefinement(e, t, n),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().addFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addRefine = function () {
      return this.addFacetRefinement.apply(this, arguments)
    }),
    (re.prototype.addFacetExclusion = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().addExcludeRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.addExclude = function () {
      return this.addFacetExclusion.apply(this, arguments)
    }),
    (re.prototype.addTag = function (e) {
      return (
        this._change({
          state: this.state.resetPage().addTagRefinement(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeNumericRefinement = function (e, t, n) {
      return (
        this._change({
          state: this.state.resetPage().removeNumericRefinement(e, t, n),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeDisjunctiveRefine = function () {
      return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
    }),
    (re.prototype.removeHierarchicalFacetRefinement = function (e) {
      return (
        this._change({
          state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().removeFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeRefine = function () {
      return this.removeFacetRefinement.apply(this, arguments)
    }),
    (re.prototype.removeFacetExclusion = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().removeExcludeRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.removeExclude = function () {
      return this.removeFacetExclusion.apply(this, arguments)
    }),
    (re.prototype.removeTag = function (e) {
      return (
        this._change({
          state: this.state.resetPage().removeTagRefinement(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.toggleFacetExclusion = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.toggleExclude = function () {
      return this.toggleFacetExclusion.apply(this, arguments)
    }),
    (re.prototype.toggleRefinement = function (e, t) {
      return this.toggleFacetRefinement(e, t)
    }),
    (re.prototype.toggleFacetRefinement = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().toggleFacetRefinement(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.toggleRefine = function () {
      return this.toggleFacetRefinement.apply(this, arguments)
    }),
    (re.prototype.toggleTag = function (e) {
      return (
        this._change({
          state: this.state.resetPage().toggleTagRefinement(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.nextPage = function () {
      var e = this.state.page || 0
      return this.setPage(e + 1)
    }),
    (re.prototype.previousPage = function () {
      var e = this.state.page || 0
      return this.setPage(e - 1)
    }),
    (re.prototype.setCurrentPage = ie),
    (re.prototype.setPage = ie),
    (re.prototype.setIndex = function (e) {
      return (
        this._change({
          state: this.state.resetPage().setIndex(e),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.setQueryParameter = function (e, t) {
      return (
        this._change({
          state: this.state.resetPage().setQueryParameter(e, t),
          isPageReset: !0
        }),
        this
      )
    }),
    (re.prototype.setState = function (e) {
      return this._change({ state: x.make(e), isPageReset: !1 }), this
    }),
    (re.prototype.overrideStateWithoutTriggeringChangeEvent = function (e) {
      return (this.state = new x(e)), this
    }),
    (re.prototype.hasRefinements = function (e) {
      return (
        !!y(this.state.getNumericRefinements(e)) ||
        (this.state.isConjunctiveFacet(e)
          ? this.state.isFacetRefined(e)
          : this.state.isDisjunctiveFacet(e)
          ? this.state.isDisjunctiveFacetRefined(e)
          : !!this.state.isHierarchicalFacet(e) &&
            this.state.isHierarchicalFacetRefined(e))
      )
    }),
    (re.prototype.isExcluded = function (e, t) {
      return this.state.isExcludeRefined(e, t)
    }),
    (re.prototype.isDisjunctiveRefined = function (e, t) {
      return this.state.isDisjunctiveFacetRefined(e, t)
    }),
    (re.prototype.hasTag = function (e) {
      return this.state.isTagRefined(e)
    }),
    (re.prototype.isTagRefined = function () {
      return this.hasTagRefinements.apply(this, arguments)
    }),
    (re.prototype.getIndex = function () {
      return this.state.index
    }),
    (re.prototype.getCurrentPage = ae),
    (re.prototype.getPage = ae),
    (re.prototype.getTags = function () {
      return this.state.tagRefinements
    }),
    (re.prototype.getRefinements = function (e) {
      var n = []
      if (this.state.isConjunctiveFacet(e))
        this.state.getConjunctiveRefinements(e).forEach(function (e) {
          n.push({ value: e, type: 'conjunctive' })
        }),
          this.state.getExcludeRefinements(e).forEach(function (e) {
            n.push({ value: e, type: 'exclude' })
          })
      else if (this.state.isDisjunctiveFacet(e)) {
        this.state.getDisjunctiveRefinements(e).forEach(function (e) {
          n.push({ value: e, type: 'disjunctive' })
        })
      }
      var r = this.state.getNumericRefinements(e)
      return (
        Object.keys(r).forEach(function (e) {
          var t = r[e]
          n.push({ value: t, operator: e, type: 'numeric' })
        }),
        n
      )
    }),
    (re.prototype.getNumericRefinement = function (e, t) {
      return this.state.getNumericRefinement(e, t)
    }),
    (re.prototype.getHierarchicalFacetBreadcrumb = function (e) {
      return this.state.getHierarchicalFacetBreadcrumb(e)
    }),
    (re.prototype._search = function (e) {
      var r = this.state,
        i = [],
        t = []
      e.onlyWithDerivedHelpers ||
        ((t = te._getQueries(r.index, r)),
        i.push({ state: r, queriesCount: t.length, helper: this }),
        this.emit('search', { state: r, results: this.lastResults }))
      var n = this.derivedHelpers.map(function (e) {
          var t = e.getModifiedState(r),
            n = te._getQueries(t.index, t)
          return (
            i.push({ state: t, queriesCount: n.length, helper: e }),
            e.emit('search', { state: t, results: e.lastResults }),
            n
          )
        }),
        a = Array.prototype.concat.apply(t, n),
        s = this._queryId++
      this._currentNbQueries++
      try {
        this.client
          .search(a)
          .then(this._dispatchAlgoliaResponse.bind(this, i, s))
          .catch(this._dispatchAlgoliaError.bind(this, s))
      } catch (e) {
        this.emit('error', { error: e })
      }
    }),
    (re.prototype._dispatchAlgoliaResponse = function (e, t, n) {
      if (!(t < this._lastQueryIdReceived)) {
        ;(this._currentNbQueries -= t - this._lastQueryIdReceived),
          (this._lastQueryIdReceived = t),
          0 === this._currentNbQueries && this.emit('searchQueueEmpty')
        var s = n.results.slice()
        e.forEach(function (e) {
          var t = e.state,
            n = e.queriesCount,
            r = e.helper,
            i = s.splice(0, n),
            a = (r.lastResults = new V(t, i))
          r.emit('result', { results: a, state: t })
        })
      }
    }),
    (re.prototype._dispatchAlgoliaError = function (e, t) {
      e < this._lastQueryIdReceived ||
        ((this._currentNbQueries -= e - this._lastQueryIdReceived),
        (this._lastQueryIdReceived = e),
        this.emit('error', { error: t }),
        0 === this._currentNbQueries && this.emit('searchQueueEmpty'))
    }),
    (re.prototype.containsRefinement = function (e, t, n, r) {
      return e || 0 !== t.length || 0 !== n.length || 0 !== r.length
    }),
    (re.prototype._hasDisjunctiveRefinements = function (e) {
      return (
        this.state.disjunctiveRefinements[e] &&
        0 < this.state.disjunctiveRefinements[e].length
      )
    }),
    (re.prototype._change = function (e) {
      var t = e.state,
        n = e.isPageReset
      t !== this.state &&
        ((this.state = t),
        this.emit('change', {
          state: this.state,
          results: this.lastResults,
          isPageReset: n
        }))
    }),
    (re.prototype.clearCache = function () {
      return this.client.clearCache && this.client.clearCache(), this
    }),
    (re.prototype.setClient = function (e) {
      return (
        this.client === e ||
          ('function' == typeof e.addAlgoliaAgent &&
            e.addAlgoliaAgent('JS Helper (3.4.4)'),
          (this.client = e)),
        this
      )
    }),
    (re.prototype.getClient = function () {
      return this.client
    }),
    (re.prototype.derive = function (e) {
      var t = new Z(this, e)
      return this.derivedHelpers.push(t), t
    }),
    (re.prototype.detachDerivedHelper = function (e) {
      var t = this.derivedHelpers.indexOf(e)
      if (-1 === t) throw new Error('Derived helper already detached')
      this.derivedHelpers.splice(t, 1)
    }),
    (re.prototype.hasPendingRequests = function () {
      return 0 < this._currentNbQueries
    })
  var se = re
  function oe(e, t, n) {
    return new se(e, t, n)
  }
  ;(oe.version = ne),
    (oe.AlgoliaSearchHelper = se),
    (oe.SearchParameters = x),
    (oe.SearchResults = V)
  var ce = oe
  function ue(r) {
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]
      null === i &&
        (i = le.then(function () {
          ;(i = null), a ? (a = !1) : r.apply(void 0, t)
        }))
    }
    var i = null,
      a = !1
    return (
      (e.wait = function () {
        if (null === i)
          throw new Error(
            'The deferred function should be called before calling `wait()`'
          )
        return i
      }),
      (e.cancel = function () {
        null !== i && (a = !0)
      }),
      e
    )
  }
  var le = Promise.resolve()
  function de(e) {
    var t = 'string' == typeof e,
      n = t ? document.querySelector(e) : e
    if (
      (function (e) {
        return e instanceof HTMLElement || (Boolean(e) && 0 < e.nodeType)
      })(n)
    )
      return n
    var r = 'Container must be `string` or `HTMLElement`.'
    throw (t && (r += ' Unable to find '.concat(e)), new Error(r))
  }
  function he(e) {
    return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
  }
  function fe(e) {
    return e.filter(function (e, t, n) {
      return n.indexOf(e) === t
    })
  }
  function me(e) {
    var t = e.defaultTemplates,
      n = e.templates
    return D(
      { templatesConfig: e.templatesConfig },
      (function (a, e) {
        var s = 1 < arguments.length && void 0 !== e ? e : {}
        return fe([].concat(P(Object.keys(a || {})), P(Object.keys(s)))).reduce(
          function (e, t) {
            var n = a ? a[t] : void 0,
              r = s[t],
              i = void 0 !== r && r !== n
            return (
              (e.templates[t] = i ? r : n),
              (e.useCustomCompileOptions[t] = i),
              e
            )
          },
          { templates: {}, useCustomCompileOptions: {} }
        )
      })(t, n)
    )
  }
  function pe(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports
  }
  var ge = pe(function (e, t) {
      !(function (S) {
        var R = /\S/,
          t = /\"/g,
          n = /\n/g,
          r = /\r/g,
          i = /\\/g,
          a = /\u2028/,
          s = /\u2029/
        function w(e) {
          '}' === e.n.substr(e.n.length - 1) &&
            (e.n = e.n.substring(0, e.n.length - 1))
        }
        function P(e) {
          return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, '')
        }
        function x(e, t, n) {
          if (t.charAt(n) != e.charAt(0)) return !1
          for (var r = 1, i = e.length; r < i; r++)
            if (t.charAt(n + r) != e.charAt(r)) return !1
          return !0
        }
        ;(S.tags = {
          '#': 1,
          '^': 2,
          '<': 3,
          $: 4,
          '/': 5,
          '!': 6,
          '>': 7,
          '=': 8,
          _v: 9,
          '{': 10,
          '&': 11,
          _t: 12
        }),
          (S.scan = function (e, t) {
            var n,
              r,
              i,
              a,
              s,
              o = e.length,
              c = 0,
              u = null,
              l = null,
              d = '',
              h = [],
              f = !1,
              m = 0,
              p = 0,
              g = '{{',
              v = '}}'
            function y() {
              0 < d.length &&
                (h.push({ tag: '_t', text: new String(d) }), (d = ''))
            }
            function b(e, t) {
              if (
                (y(),
                e &&
                  (function () {
                    for (var e = !0, t = p; t < h.length; t++)
                      if (
                        !(e =
                          S.tags[h[t].tag] < S.tags._v ||
                          ('_t' == h[t].tag && null === h[t].text.match(R)))
                      )
                        return !1
                    return e
                  })())
              )
                for (var n, r = p; r < h.length; r++)
                  h[r].text &&
                    ((n = h[r + 1]) &&
                      '>' == n.tag &&
                      (n.indent = h[r].text.toString()),
                    h.splice(r, 1))
              else t || h.push({ tag: '\n' })
              ;(f = !1), (p = h.length)
            }
            for (
              t && ((t = t.split(' ')), (g = t[0]), (v = t[1])), m = 0;
              m < o;
              m++
            )
              0 == c
                ? x(g, e, m)
                  ? (--m, y(), (c = 1))
                  : '\n' == e.charAt(m)
                  ? b(f)
                  : (d += e.charAt(m))
                : 1 == c
                ? ((m += g.length - 1),
                  (c =
                    '=' ==
                    (u = (l = S.tags[e.charAt(m + 1)]) ? e.charAt(m + 1) : '_v')
                      ? ((r = m),
                        void 0,
                        (i = '=' + v),
                        (a = (n = e).indexOf(i, r)),
                        (s = P(n.substring(n.indexOf('=', r) + 1, a)).split(
                          ' '
                        )),
                        (g = s[0]),
                        (v = s[s.length - 1]),
                        (m = a + i.length - 1),
                        0)
                      : (l && m++, 2)),
                  (f = m))
                : x(v, e, m)
                ? (h.push({
                    tag: u,
                    n: P(d),
                    otag: g,
                    ctag: v,
                    i: '/' == u ? f - g.length : m + v.length
                  }),
                  (d = ''),
                  (m += v.length - 1),
                  (c = 0),
                  '{' == u && ('}}' == v ? m++ : w(h[h.length - 1])))
                : (d += e.charAt(m))
            return b(f, !0), h
          })
        var u = { _t: !0, '\n': !0, $: !0, '/': !0 }
        function l(e, t) {
          for (var n = 0, r = t.length; n < r; n++)
            if (t[n].o == e.n) return (e.tag = '#'), !0
        }
        function d(e, t, n) {
          for (var r = 0, i = n.length; r < i; r++)
            if (n[r].c == e && n[r].o == t) return !0
        }
        function o(e) {
          var t = []
          for (var n in e.partials)
            t.push(
              '"' +
                h(n) +
                '":{name:"' +
                h(e.partials[n].name) +
                '", ' +
                o(e.partials[n]) +
                '}'
            )
          return (
            'partials: {' +
            t.join(',') +
            '}, subs: ' +
            (function (e) {
              var t = []
              for (var n in e)
                t.push('"' + h(n) + '": function(c,p,t,i) {' + e[n] + '}')
              return '{ ' + t.join(',') + ' }'
            })(e.subs)
          )
        }
        S.stringify = function (e, t, n) {
          return (
            '{code: function (c,p,i) { ' +
            S.wrapMain(e.code) +
            ' },' +
            o(e) +
            '}'
          )
        }
        var c = 0
        function h(e) {
          return e
            .replace(i, '\\\\')
            .replace(t, '\\"')
            .replace(n, '\\n')
            .replace(r, '\\r')
            .replace(a, '\\u2028')
            .replace(s, '\\u2029')
        }
        function f(e) {
          return ~e.indexOf('.') ? 'd' : 'f'
        }
        function m(e, t) {
          var n = '<' + (t.prefix || '') + e.n + c++
          return (
            (t.partials[n] = { name: e.n, partials: {} }),
            (t.code +=
              't.b(t.rp("' + h(n) + '",c,p,"' + (e.indent || '') + '"));'),
            n
          )
        }
        function e(e, t) {
          t.code += 't.b(t.t(t.' + f(e.n) + '("' + h(e.n) + '",c,p,0)));'
        }
        function p(e) {
          return 't.b(' + e + ');'
        }
        ;(S.generate = function (e, t, n) {
          c = 0
          var r = { code: '', subs: {}, partials: {} }
          return (
            S.walk(e, r),
            n.asString ? this.stringify(r, t, n) : this.makeTemplate(r, t, n)
          )
        }),
          (S.wrapMain = function (e) {
            return 'var t=this;t.b(i=i||"");' + e + 'return t.fl();'
          }),
          (S.template = S.Template),
          (S.makeTemplate = function (e, t, n) {
            var r = this.makePartials(e)
            return (
              (r.code = new Function('c', 'p', 'i', this.wrapMain(e.code))),
              new this.template(r, t, this, n)
            )
          }),
          (S.makePartials = function (e) {
            var t,
              n = { subs: {}, partials: e.partials, name: e.name }
            for (t in n.partials)
              n.partials[t] = this.makePartials(n.partials[t])
            for (t in e.subs)
              n.subs[t] = new Function('c', 'p', 't', 'i', e.subs[t])
            return n
          }),
          (S.codegen = {
            '#': function (e, t) {
              ;(t.code +=
                'if(t.s(t.' +
                f(e.n) +
                '("' +
                h(e.n) +
                '",c,p,1),c,p,0,' +
                e.i +
                ',' +
                e.end +
                ',"' +
                e.otag +
                ' ' +
                e.ctag +
                '")){t.rs(c,p,function(c,p,t){'),
                S.walk(e.nodes, t),
                (t.code += '});c.pop();}')
            },
            '^': function (e, t) {
              ;(t.code +=
                'if(!t.s(t.' +
                f(e.n) +
                '("' +
                h(e.n) +
                '",c,p,1),c,p,1,0,0,"")){'),
                S.walk(e.nodes, t),
                (t.code += '};')
            },
            '>': m,
            '<': function (e, t) {
              var n = { partials: {}, code: '', subs: {}, inPartial: !0 }
              S.walk(e.nodes, n)
              var r = t.partials[m(e, t)]
              ;(r.subs = n.subs), (r.partials = n.partials)
            },
            $: function (e, t) {
              var n = { subs: {}, code: '', partials: t.partials, prefix: e.n }
              S.walk(e.nodes, n),
                (t.subs[e.n] = n.code),
                t.inPartial || (t.code += 't.sub("' + h(e.n) + '",c,p,i);')
            },
            '\n': function (e, t) {
              t.code += p('"\\n"' + (e.last ? '' : ' + i'))
            },
            _v: function (e, t) {
              t.code += 't.b(t.v(t.' + f(e.n) + '("' + h(e.n) + '",c,p,0)));'
            },
            _t: function (e, t) {
              t.code += p('"' + h(e.text) + '"')
            },
            '{': e,
            '&': e
          }),
          (S.walk = function (e, t) {
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = S.codegen[e[r].tag]) && n(e[r], t)
            return t
          }),
          (S.parse = function (e, t, n) {
            return (function e(t, n, r, i) {
              var a,
                s = [],
                o = null,
                c = null
              for (a = r[r.length - 1]; 0 < t.length; ) {
                if (((c = t.shift()), a && '<' == a.tag && !(c.tag in u)))
                  throw new Error('Illegal content in < super tag.')
                if (S.tags[c.tag] <= S.tags.$ || l(c, i))
                  r.push(c), (c.nodes = e(t, c.tag, r, i))
                else {
                  if ('/' == c.tag) {
                    if (0 === r.length)
                      throw new Error('Closing tag without opener: /' + c.n)
                    if (((o = r.pop()), c.n != o.n && !d(c.n, o.n, i)))
                      throw new Error('Nesting error: ' + o.n + ' vs. ' + c.n)
                    return (o.end = c.i), s
                  }
                  '\n' == c.tag && (c.last = 0 == t.length || '\n' == t[0].tag)
                }
                s.push(c)
              }
              if (0 < r.length)
                throw new Error('missing closing tag: ' + r.pop().n)
              return s
            })(e, 0, [], (n = n || {}).sectionTags || [])
          }),
          (S.cache = {}),
          (S.cacheKey = function (e, t) {
            return [
              e,
              !!t.asString,
              !!t.disableLambda,
              t.delimiters,
              !!t.modelGet
            ].join('||')
          }),
          (S.compile = function (e, t) {
            t = t || {}
            var n = S.cacheKey(e, t),
              r = this.cache[n]
            if (r) {
              var i = r.partials
              for (var a in i) delete i[a].instance
              return r
            }
            return (
              (r = this.generate(
                this.parse(this.scan(e, t.delimiters), e, t),
                e,
                t
              )),
              (this.cache[n] = r)
            )
          })
      })(t)
    }),
    ve = pe(function (e, t) {
      !(function (e) {
        function l(e, t, n) {
          var r
          return (
            t &&
              'object' == typeof t &&
              (void 0 !== t[e]
                ? (r = t[e])
                : n && t.get && 'function' == typeof t.get && (r = t.get(e))),
            r
          )
        }
        ;(e.Template = function (e, t, n, r) {
          ;(e = e || {}),
            (this.r = e.code || this.r),
            (this.c = n),
            (this.options = r || {}),
            (this.text = t || ''),
            (this.partials = e.partials || {}),
            (this.subs = e.subs || {}),
            (this.buf = '')
        }),
          (e.Template.prototype = {
            r: function (e, t, n) {
              return ''
            },
            v: function (e) {
              return (
                (e = o(e)),
                s.test(e)
                  ? e
                      .replace(t, '&amp;')
                      .replace(n, '&lt;')
                      .replace(r, '&gt;')
                      .replace(i, '&#39;')
                      .replace(a, '&quot;')
                  : e
              )
            },
            t: o,
            render: function (e, t, n) {
              return this.ri([e], t || {}, n)
            },
            ri: function (e, t, n) {
              return this.r(e, t, n)
            },
            ep: function (e, t) {
              var n = this.partials[e],
                r = t[n.name]
              if (n.instance && n.base == r) return n.instance
              if ('string' == typeof r) {
                if (!this.c) throw new Error('No compiler available.')
                r = this.c.compile(r, this.options)
              }
              if (!r) return null
              if (((this.partials[e].base = r), n.subs)) {
                for (key in (t.stackText || (t.stackText = {}), n.subs))
                  t.stackText[key] ||
                    (t.stackText[key] =
                      void 0 !== this.activeSub && t.stackText[this.activeSub]
                        ? t.stackText[this.activeSub]
                        : this.text)
                r = (function (e, t, n, r, i, a) {
                  function s() {}
                  function o() {}
                  var c
                  o.prototype = (s.prototype = e).subs
                  var u = new s()
                  for (c in ((u.subs = new o()),
                  (u.subsText = {}),
                  (u.buf = ''),
                  (r = r || {}),
                  (u.stackSubs = r),
                  (u.subsText = a),
                  t))
                    r[c] || (r[c] = t[c])
                  for (c in r) u.subs[c] = r[c]
                  for (c in ((i = i || {}), (u.stackPartials = i), n))
                    i[c] || (i[c] = n[c])
                  for (c in i) u.partials[c] = i[c]
                  return u
                })(
                  r,
                  n.subs,
                  n.partials,
                  this.stackSubs,
                  this.stackPartials,
                  t.stackText
                )
              }
              return (this.partials[e].instance = r)
            },
            rp: function (e, t, n, r) {
              var i = this.ep(e, n)
              return i ? i.ri(t, n, r) : ''
            },
            rs: function (e, t, n) {
              var r = e[e.length - 1]
              if (d(r))
                for (var i = 0; i < r.length; i++)
                  e.push(r[i]), n(e, t, this), e.pop()
              else n(e, t, this)
            },
            s: function (e, t, n, r, i, a, s) {
              var o
              return (
                (!d(e) || 0 !== e.length) &&
                ('function' == typeof e && (e = this.ms(e, t, n, r, i, a, s)),
                (o = !!e),
                !r &&
                  o &&
                  t &&
                  t.push('object' == typeof e ? e : t[t.length - 1]),
                o)
              )
            },
            d: function (e, t, n, r) {
              var i,
                a = e.split('.'),
                s = this.f(a[0], t, n, r),
                o = this.options.modelGet,
                c = null
              if ('.' === e && d(t[t.length - 2])) s = t[t.length - 1]
              else
                for (var u = 1; u < a.length; u++)
                  s = void 0 !== (i = l(a[u], s, o)) ? ((c = s), i) : ''
              return (
                !(r && !s) &&
                (r ||
                  'function' != typeof s ||
                  (t.push(c), (s = this.mv(s, t, n)), t.pop()),
                s)
              )
            },
            f: function (e, t, n, r) {
              for (
                var i = !1, a = !1, s = this.options.modelGet, o = t.length - 1;
                0 <= o;
                o--
              )
                if (void 0 !== (i = l(e, t[o], s))) {
                  a = !0
                  break
                }
              return a
                ? (r || 'function' != typeof i || (i = this.mv(i, t, n)), i)
                : !r && ''
            },
            ls: function (e, t, n, r, i) {
              var a = this.options.delimiters
              return (
                (this.options.delimiters = i),
                this.b(this.ct(o(e.call(t, r)), t, n)),
                (this.options.delimiters = a),
                !1
              )
            },
            ct: function (e, t, n) {
              if (this.options.disableLambda)
                throw new Error('Lambda features disabled.')
              return this.c.compile(e, this.options).render(t, n)
            },
            b: function (e) {
              this.buf += e
            },
            fl: function () {
              var e = this.buf
              return (this.buf = ''), e
            },
            ms: function (e, t, n, r, i, a, s) {
              var o,
                c = t[t.length - 1],
                u = e.call(c)
              return 'function' == typeof u
                ? !!r ||
                    ((o =
                      this.activeSub &&
                      this.subsText &&
                      this.subsText[this.activeSub]
                        ? this.subsText[this.activeSub]
                        : this.text),
                    this.ls(u, c, n, o.substring(i, a), s))
                : u
            },
            mv: function (e, t, n) {
              var r = t[t.length - 1],
                i = e.call(r)
              return 'function' == typeof i ? this.ct(o(i.call(r)), r, n) : i
            },
            sub: function (e, t, n, r) {
              var i = this.subs[e]
              i &&
                ((this.activeSub = e), i(t, n, this, r), (this.activeSub = !1))
            }
          })
        var t = /&/g,
          n = /</g,
          r = />/g,
          i = /\'/g,
          a = /\"/g,
          s = /[&<>\"\']/
        function o(e) {
          return String(null == e ? '' : e)
        }
        var d =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e)
          }
      })(t)
    })
  ;(ge.Template = ve.Template), (ge.template = ge.Template)
  var ye = ge
  function be(e) {
    var t = e.templates,
      n = e.templateKey,
      r = e.compileOptions,
      i = e.helpers,
      a = e.data,
      s = e.bindEvent,
      o = t[n],
      c = d(o),
      u = 'function' === c
    if (!('string' === c) && !u)
      throw new Error(
        "Template must be 'string' or 'function', was '"
          .concat(c, "' (key: ")
          .concat(n, ')')
      )
    if (u) return o(a, s)
    var l = (function (e, t, n) {
      var r = 0 < arguments.length && void 0 !== e ? e : {},
        i = 1 < arguments.length ? t : void 0,
        a = 2 < arguments.length ? n : void 0
      return Object.keys(r).reduce(function (e, n) {
        return D(
          D({}, e),
          {},
          j({}, n, function () {
            var t = this
            return function (e) {
              return r[n].call(a, e, function (e) {
                return ye.compile(e, i).render(t)
              })
            }
          })
        )
      }, {})
    })(i, r, a)
    return ye
      .compile(o, r)
      .render(D(D({}, a), {}, { helpers: l }))
      .replace(/[ \n\r\t\f\xA0]+/g, function (e) {
        return e.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ')
      })
      .trim()
  }
  function Se(e, t) {
    for (var n, r = 0; r < e.length; r++) if (t((n = e[r]), r, e)) return n
  }
  function Re(e) {
    return String(e).replace(/^\\-/, '-')
  }
  function we(i, e, a, s, t) {
    var o,
      n = { type: e, attribute: a, name: s },
      c = Se(4 < arguments.length && void 0 !== t ? t : [], function (e) {
        return e.name === a
      })
    'hierarchical' === e
      ? (function () {
          for (
            var e = i.getHierarchicalFacetByName(a),
              n = s.split(e.separator),
              t = function (t) {
                c =
                  c &&
                  c.data &&
                  Se(
                    Object.keys(c.data).map(
                      (function (t) {
                        return function (e) {
                          return t[e]
                        }
                      })(c.data)
                    ),
                    function (e) {
                      return e.name === n[t]
                    }
                  )
              },
              r = 0;
            void 0 !== c && r < n.length;
            ++r
          )
            t(r)
          o = c && c.count
        })()
      : (o = c && c.data && c.data[n.name])
    var r = c && c.exhaustive
    return void 0 !== o && (n.count = o), void 0 !== r && (n.exhaustive = r), n
  }
  function Pe(n, r, e) {
    var t = 2 < arguments.length && void 0 !== e && e,
      a = [],
      i = r.facetsRefinements,
      s = void 0 === i ? {} : i,
      o = r.facetsExcludes,
      c = void 0 === o ? {} : o,
      u = r.disjunctiveFacetsRefinements,
      l = void 0 === u ? {} : u,
      d = r.hierarchicalFacetsRefinements,
      h = void 0 === d ? {} : d,
      f = r.numericRefinements,
      m = void 0 === f ? {} : f,
      p = r.tagRefinements,
      g = void 0 === p ? [] : p
    return (
      Object.keys(s).forEach(function (t) {
        s[t].forEach(function (e) {
          a.push(we(r, 'facet', t, e, n.facets))
        })
      }),
      Object.keys(c).forEach(function (t) {
        c[t].forEach(function (e) {
          a.push({ type: 'exclude', attribute: t, name: e, exclude: !0 })
        })
      }),
      Object.keys(l).forEach(function (t) {
        l[t].forEach(function (e) {
          a.push(we(r, 'disjunctive', t, Re(e), n.disjunctiveFacets))
        })
      }),
      Object.keys(h).forEach(function (t) {
        h[t].forEach(function (e) {
          a.push(we(r, 'hierarchical', t, e, n.hierarchicalFacets))
        })
      }),
      Object.keys(m).forEach(function (r) {
        var i = m[r]
        Object.keys(i).forEach(function (e) {
          var t = e,
            n = i[t]
          ;(Array.isArray(n) ? n : [n]).forEach(function (e) {
            a.push({
              type: 'numeric',
              attribute: r,
              name: ''.concat(e),
              numericValue: e,
              operator: t
            })
          })
        })
      }),
      g.forEach(function (e) {
        a.push({ type: 'tag', attribute: '_tags', name: e })
      }),
      t &&
        r.query &&
        r.query.trim() &&
        a.push({
          attribute: 'query',
          type: 'query',
          name: r.query,
          query: r.query
        }),
      a
    )
  }
  function xe(e) {
    var t = e.helper,
      n = e.attributesToClear,
      r = void 0 === n ? [] : n,
      i = t.state.setPage(0)
    return (
      (i = r.reduce(function (e, t) {
        return i.isNumericRefined(t)
          ? e.removeNumericRefinement(t)
          : i.isHierarchicalFacet(t)
          ? e.removeHierarchicalFacetRefinement(t)
          : i.isDisjunctiveFacet(t)
          ? e.removeDisjunctiveFacetRefinement(t)
          : i.isConjunctiveFacet(t)
          ? e.removeFacetRefinement(t)
          : e
      }, i)),
      -1 !== r.indexOf('query') && (i = i.setQuery('')),
      i
    )
  }
  function Ne(e) {
    return (
      'number' == typeof e && e < 0 && (e = String(e).replace(/^-/, '\\-')), e
    )
  }
  function _e(e, t) {
    if (void 0 === e || 'function' != typeof e)
      throw new Error(
        'The render function is not valid (received type '
          .concat(
            (function (e) {
              return Object.prototype.toString.call(e).slice(8, -1)
            })(e),
            ').\n\n'
          )
          .concat(t)
      )
  }
  function Ie() {}
  function Fe(e, t) {
    return (Array.isArray(t) ? t : t.split('.')).reduce(function (e, t) {
      return e && e[t]
    }, e)
  }
  function Te(e) {
    return 'number' == typeof e && isFinite(e)
  }
  function Ce(e) {
    if (
      !(function (e) {
        return 'object' === d(e) && null !== e
      })(e) ||
      '[object Object]' !==
        (function (e) {
          return null === e
            ? void 0 === e
              ? '[object Undefined]'
              : '[object Null]'
            : Object.prototype.toString.call(e)
        })(e)
    )
      return !1
    if (null === Object.getPrototypeOf(e)) return !0
    for (var t = e; null !== Object.getPrototypeOf(t); )
      t = Object.getPrototypeOf(t)
    return Object.getPrototypeOf(e) === t
  }
  function Ee(e) {
    var t = e.start,
      n = void 0 === t ? 0 : t,
      r = e.end,
      i = e.step,
      a = void 0 === i ? 1 : i,
      s = 0 === a ? 1 : a,
      o = Math.round((r - n) / s)
    return P(Array(o)).map(function (e, t) {
      return n + t * s
    })
  }
  function ke(e) {
    return e !== Object(e)
  }
  function Le(e, t) {
    if (e === t) return !0
    if (ke(e) || ke(t) || 'function' == typeof e || 'function' == typeof t)
      return e === t
    if (Object.keys(e).length !== Object.keys(t).length) return !1
    for (var n = 0, r = Object.keys(e); n < r.length; n++) {
      var i = r[n]
      if (!(i in t)) return !1
      if (!Le(e[i], t[i])) return !1
    }
    return !0
  }
  var je = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    },
    Me = /[&<>"']/g,
    Oe = RegExp(Me.source)
  var Ae = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'"
    },
    He = /&(amp|quot|lt|gt|#39);/g,
    De = RegExp(He.source)
  var We = {
      highlightPreTag: '__ais-highlight__',
      highlightPostTag: '__/ais-highlight__'
    },
    Be = { highlightPreTag: '<mark>', highlightPostTag: '</mark>' }
  function Ue(e) {
    return (function (e) {
      return e && Oe.test(e)
        ? e.replace(Me, function (e) {
            return je[e]
          })
        : e
    })(e)
      .replace(new RegExp(We.highlightPreTag, 'g'), Be.highlightPreTag)
      .replace(new RegExp(We.highlightPostTag, 'g'), Be.highlightPostTag)
  }
  function qe(n) {
    return Ce(n) && 'string' != typeof n.value
      ? Object.keys(n).reduce(function (e, t) {
          return D(D({}, e), {}, j({}, t, qe(n[t])))
        }, {})
      : Array.isArray(n)
      ? n.map(qe)
      : D(D({}, n), {}, { value: Ue(n.value) })
  }
  function Qe(e) {
    return (
      void 0 === e.__escaped &&
        ((e = e.map(function (e) {
          var t = h({}, e)
          return (
            t._highlightResult && (t._highlightResult = qe(t._highlightResult)),
            t._snippetResult && (t._snippetResult = qe(t._snippetResult)),
            t
          )
        })).__escaped = !0),
      e
    )
  }
  function $e(e) {
    return e.map(function (e) {
      return D(D({}, e), {}, { highlighted: Ue(e.highlighted) })
    })
  }
  function Ve(e) {
    var t = Be.highlightPreTag,
      n = Be.highlightPostTag
    return e
      .map(function (e) {
        return e.isHighlighted ? t + e.value + n : e.value
      })
      .join('')
  }
  function Ke(e) {
    var n = Be.highlightPostTag,
      t = Be.highlightPreTag,
      r = e.split(t),
      i = r.shift(),
      a = i ? [{ value: i, isHighlighted: !1 }] : []
    return (
      r.forEach(function (e) {
        var t = e.split(n)
        a.push({ value: t[0], isHighlighted: !0 }),
          '' !== t[1] && a.push({ value: t[1], isHighlighted: !1 })
      }),
      a
    )
  }
  var ze = new RegExp(/\w/i)
  function Je(e, t) {
    var n,
      r,
      i = e[t],
      a =
        (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) ||
        !0,
      s =
        (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) ||
        !0
    return ze.test(
      (function (e) {
        return e && De.test(e)
          ? e.replace(He, function (e) {
              return Ae[e]
            })
          : e
      })(i.value)
    ) || s !== a
      ? i.isHighlighted
      : s
  }
  function Ye(n) {
    return n.some(function (e) {
      return e.isHighlighted
    })
      ? n.map(function (e, t) {
          return D(D({}, e), {}, { isHighlighted: !Je(n, t) })
        })
      : n.map(function (e) {
          return D(D({}, e), {}, { isHighlighted: !1 })
        })
  }
  function Xe(e, t) {
    return e.setQueryParameters({
      hierarchicalFacets: t.hierarchicalFacets.reduce(function (e, t) {
        var n = (function (e, t) {
          if (!Array.isArray(e)) return -1
          for (var n = 0; n < e.length; n++) if (t(e[n])) return n
          return -1
        })(e, function (e) {
          return e.name === t.name
        })
        if (-1 === n) return e.concat(t)
        var r = e.slice()
        return r.splice(n, 1, t), r
      }, e.hierarchicalFacets)
    })
  }
  function Ge() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return t.reduce(function (e, t) {
      var n = (function (e, t) {
        return e.setQueryParameters({
          hierarchicalFacetsRefinements: D(
            D({}, e.hierarchicalFacetsRefinements),
            t.hierarchicalFacetsRefinements
          )
        })
      })(e, t)
      return (function (e, t) {
        t.facets,
          t.disjunctiveFacets,
          t.facetsRefinements,
          t.facetsExcludes,
          t.disjunctiveFacetsRefinements,
          t.numericRefinements,
          t.tagRefinements,
          t.hierarchicalFacets,
          t.hierarchicalFacetsRefinements,
          t.ruleContexts
        var n = O(t, [
          'facets',
          'disjunctiveFacets',
          'facetsRefinements',
          'facetsExcludes',
          'disjunctiveFacetsRefinements',
          'numericRefinements',
          'tagRefinements',
          'hierarchicalFacets',
          'hierarchicalFacetsRefinements',
          'ruleContexts'
        ])
        return e.setQueryParameters(n)
      })(
        (function (e, t) {
          return t.facets.reduce(function (e, t) {
            return e.addFacet(t)
          }, e)
        })(
          (function (e, t) {
            var n = fe(
              [].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean)
            )
            return 0 < n.length ? e.setQueryParameters({ ruleContexts: n }) : e
          })(
            (function (e, t) {
              return t.disjunctiveFacets.reduce(function (e, t) {
                return e.addDisjunctiveFacet(t)
              }, e)
            })(
              (function (e, t) {
                return e.setQueryParameters({
                  facetsRefinements: D(
                    D({}, e.facetsRefinements),
                    t.facetsRefinements
                  )
                })
              })(
                (function (e, t) {
                  return e.setQueryParameters({
                    facetsExcludes: D(D({}, e.facetsExcludes), t.facetsExcludes)
                  })
                })(
                  (function (e, t) {
                    return e.setQueryParameters({
                      disjunctiveFacetsRefinements: D(
                        D({}, e.disjunctiveFacetsRefinements),
                        t.disjunctiveFacetsRefinements
                      )
                    })
                  })(
                    (function (e, t) {
                      return e.setQueryParameters({
                        numericRefinements: D(
                          D({}, e.numericRefinements),
                          t.numericRefinements
                        )
                      })
                    })(
                      (function (e, t) {
                        return t.tagRefinements.reduce(function (e, t) {
                          return e.addTagRefinement(t)
                        }, e)
                      })(Xe(n, t), t),
                      t
                    ),
                    t
                  ),
                  t
                ),
                t
              ),
              t
            ),
            t
          ),
          t
        ),
        t
      )
    })
  }
  function Ze(e) {
    return Array.isArray(e) ? e : [e]
  }
  function et() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    var r = t
      .map(function (e) {
        return (function (e) {
          var t = e.name,
            n = e.connector
          return [
            'https://www.algolia.com/doc/api-reference/widgets/',
            t,
            '/js/',
            void 0 !== n && n ? '#connector' : ''
          ].join('')
        })(e)
      })
      .join(', ')
    return function (e) {
      return [e, 'See documentation: '.concat(r)].filter(Boolean).join('\n\n')
    }
  }
  var tt = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/
  function nt(e) {
    return Array.isArray(e)
      ? (function (e) {
          var t = W(e, 1)[0],
            n = W((t = void 0 === t ? [void 0, void 0, void 0, void 0] : t), 4),
            r = n[0],
            i = n[1],
            a = n[2],
            s = n[3]
          if (!(r && i && a && s))
            throw new Error(
              'Invalid value for "insideBoundingBox" parameter: ['.concat(
                e,
                ']'
              )
            )
          return {
            northEast: { lat: r, lng: i },
            southWest: { lat: a, lng: s }
          }
        })(e)
      : (function (e) {
          var t = W(e.split(',').map(parseFloat), 4),
            n = t[0],
            r = t[1],
            i = t[2],
            a = t[3]
          if (!(n && r && i && a))
            throw new Error(
              'Invalid value for "insideBoundingBox" parameter: "'.concat(
                e,
                '"'
              )
            )
          return {
            northEast: { lat: n, lng: r },
            southWest: { lat: i, lng: a }
          }
        })(e)
  }
  function rt(e, n, r) {
    return e.map(function (e, t) {
      return D(D({}, e), {}, { __position: r * n + t + 1 })
    })
  }
  function it(e, t) {
    return t
      ? e.map(function (e) {
          return D(D({}, e), {}, { __queryID: t })
        })
      : e
  }
  function at(e) {
    var o = e.instantSearchInstance,
      c = e.helper,
      u = e.attribute,
      l = e.widgetType
    return function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]
      var r = t[0],
        i = t[1],
        a = t[2],
        s = void 0 === a ? 'Filter Applied' : a
      1 === t.length && 'object' === d(t[0])
        ? o.sendEventToInsights(t[0])
        : 'click' !== r ||
          (2 !== t.length && 3 !== t.length) ||
          (function (e, t, n) {
            return e.state.isHierarchicalFacet(t)
              ? e.state.isHierarchicalFacetRefined(t, n)
              : e.state.isConjunctiveFacet(t)
              ? e.state.isFacetRefined(t, n)
              : e.state.isDisjunctiveFacetRefined(t, n)
          })(c, u, i) ||
          o.sendEventToInsights({
            insightsMethod: 'clickedFilters',
            widgetType: l,
            eventType: r,
            payload: {
              eventName: s,
              index: c.getIndex(),
              filters: [''.concat(u, ':').concat(i)]
            },
            attribute: u
          })
    }
  }
  function st(e) {
    return btoa(encodeURIComponent(JSON.stringify(e)))
  }
  function ot(e) {
    return JSON.parse(decodeURIComponent(atob(e)))
  }
  function ct(e) {
    var t = e.index,
      n = e.widgetType,
      r = (e.methodName, e.args)
    if (1 === r.length && 'object' === d(r[0])) return r[0]
    var i = r[0],
      a = r[1],
      s = r[2]
    if (!a) return null
    if (('click' === i || 'conversion' === i) && !s) return null
    var o = Array.isArray(a)
      ? (function (e) {
          return e.map(function (e) {
            return e
          })
        })(a)
      : [a]
    if (0 === o.length) return null
    var c = o[0].__queryID,
      u = o.map(function (e) {
        return e.objectID
      }),
      l = o.map(function (e) {
        return e.__position
      })
    return 'view' === i
      ? {
          insightsMethod: 'viewedObjectIDs',
          widgetType: n,
          eventType: i,
          payload: { eventName: s || 'Hits Viewed', index: t, objectIDs: u },
          hits: o
        }
      : 'click' === i
      ? {
          insightsMethod: 'clickedObjectIDsAfterSearch',
          widgetType: n,
          eventType: i,
          payload: {
            eventName: s,
            index: t,
            queryID: c,
            objectIDs: u,
            positions: l
          },
          hits: o
        }
      : 'conversion' === i
      ? {
          insightsMethod: 'convertedObjectIDsAfterSearch',
          widgetType: n,
          eventType: i,
          payload: { eventName: s, index: t, queryID: c, objectIDs: u },
          hits: o
        }
      : null
  }
  function ut(e) {
    var i = e.instantSearchInstance,
      a = e.index,
      s = e.widgetType
    return function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]
      var r = ct({ widgetType: s, index: a, methodName: 'sendEvent', args: t })
      r && i.sendEventToInsights(r)
    }
  }
  function lt(e) {
    var i = e.index,
      a = e.widgetType
    return function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n]
      var r = ct({ widgetType: a, index: i, methodName: 'bindEvent', args: t })
      return r ? 'data-insights-event='.concat(st(r)) : ''
    }
  }
  function dt(e, n) {
    if (!e) return null
    var r = e.numericRefinements[n],
      i = []
    return (
      Object.keys(r)
        .filter(function (e) {
          return Array.isArray(r[e]) && 0 < r[e].length
        })
        .forEach(function (t) {
          r[t].forEach(function (e) {
            i.push(''.concat(n).concat(t).concat(e))
          })
        }),
      i
    )
  }
  function ht(r, i) {
    var a = null
    return function () {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
        n[t] = arguments[t]
      return new Promise(function (e, t) {
        a && clearTimeout(a),
          (a = setTimeout(function () {
            ;(a = null),
              Promise.resolve(r.apply(void 0, n))
                .then(e)
                .catch(t)
          }, i))
      })
    }
  }
  var ft = et({ name: 'index-widget' })
  function mt(e) {
    return 'ais.index' === e.$$type
  }
  function pt(e, t) {
    var n = t.state,
      r = t.isPageReset,
      i = t._uiState
    n !== e.state &&
      ((e.state = n),
      e.emit('change', {
        state: e.state,
        results: e.lastResults,
        isPageReset: r,
        _uiState: i
      }))
  }
  function gt(e, n, t) {
    var r = 2 < arguments.length && void 0 !== t ? t : {}
    return e
      .filter(function (e) {
        return !mt(e)
      })
      .reduce(function (e, t) {
        return t.getWidgetUiState || t.getWidgetState
          ? t.getWidgetUiState
            ? t.getWidgetUiState(e, n)
            : t.getWidgetState(e, n)
          : e
      }, r)
  }
  function vt(e, t) {
    var n = t.initialSearchParameters,
      r = O(t, ['initialSearchParameters'])
    return e
      .filter(function (e) {
        return !mt(e)
      })
      .reduce(function (e, t) {
        return t.getWidgetSearchParameters
          ? t.getWidgetSearchParameters(e, r)
          : e
      }, n)
  }
  function yt(e) {
    if (void 0 === e || void 0 === e.indexName)
      throw new Error(ft('The `indexName` option is required.'))
    var o = e.indexName,
      t = e.indexId,
      c = void 0 === t ? o : t,
      u = [],
      l = {},
      d = null,
      h = null,
      f = null,
      m = null
    return {
      $$type: 'ais.index',
      $$widgetType: 'ais.index',
      getIndexName: function () {
        return o
      },
      getIndexId: function () {
        return c
      },
      getHelper: function () {
        return f
      },
      getResults: function () {
        return m && m.lastResults
      },
      getScopedResults: function () {
        var e = this.getParent()
        return (function n(e) {
          return e.filter(mt).reduce(function (e, t) {
            return e.concat.apply(
              e,
              [
                {
                  indexId: t.getIndexId(),
                  results: t.getResults(),
                  helper: t.getHelper()
                }
              ].concat(P(n(t.getWidgets())))
            )
          }, [])
        })(e ? e.getWidgets() : [this])
      },
      getParent: function () {
        return h
      },
      createURL: function (e) {
        return d._createURL(j({}, c, gt(u, { searchParameters: e, helper: f })))
      },
      getWidgets: function () {
        return u
      },
      addWidgets: function (e) {
        var t = this
        if (!Array.isArray(e))
          throw new Error(
            ft('The `addWidgets` method expects an array of widgets.')
          )
        if (
          e.some(function (e) {
            return 'function' != typeof e.init && 'function' != typeof e.render
          })
        )
          throw new Error(
            ft(
              'The widget definition expects a `render` and/or an `init` method.'
            )
          )
        return (
          (u = u.concat(e)),
          d &&
            Boolean(e.length) &&
            (pt(f, {
              state: vt(u, { uiState: l, initialSearchParameters: f.state }),
              _uiState: l
            }),
            e.forEach(function (e) {
              e.getRenderState &&
                bt({
                  renderState: e.getRenderState(
                    d.renderState[t.getIndexId()] || {},
                    {
                      uiState: d._initialUiState,
                      helper: t.getHelper(),
                      parent: t,
                      instantSearchInstance: d,
                      state: f.state,
                      renderState: d.renderState,
                      templatesConfig: d.templatesConfig,
                      createURL: t.createURL,
                      scopedResults: [],
                      searchMetadata: { isSearchStalled: d._isSearchStalled }
                    }
                  ),
                  instantSearchInstance: d,
                  parent: t
                })
            }),
            e.forEach(function (e) {
              e.init &&
                e.init({
                  helper: f,
                  parent: t,
                  uiState: d._initialUiState,
                  instantSearchInstance: d,
                  state: f.state,
                  renderState: d.renderState,
                  templatesConfig: d.templatesConfig,
                  createURL: t.createURL,
                  scopedResults: [],
                  searchMetadata: { isSearchStalled: d._isSearchStalled }
                })
            }),
            d.scheduleSearch()),
          this
        )
      },
      removeWidgets: function (t) {
        if (!Array.isArray(t))
          throw new Error(
            ft('The `removeWidgets` method expects an array of widgets.')
          )
        if (
          t.some(function (e) {
            return 'function' != typeof e.dispose
          })
        )
          throw new Error(
            ft('The widget definition expects a `dispose` method.')
          )
        if (
          ((u = u.filter(function (e) {
            return -1 === t.indexOf(e)
          })),
          d && Boolean(t.length))
        ) {
          var e = t.reduce(function (e, t) {
            return t.dispose({ helper: f, state: e }) || e
          }, f.state)
          ;(l = gt(u, { searchParameters: e, helper: f })),
            f.setState(vt(u, { uiState: l, initialSearchParameters: e })),
            u.length && d.scheduleSearch()
        }
        return this
      },
      init: function (e) {
        var t = this,
          r = e.instantSearchInstance,
          n = e.parent,
          i = e.uiState
        if (null === f) {
          ;(d = r), (h = n), (l = i[c] || {})
          var a = r.mainHelper,
            s = vt(u, {
              uiState: l,
              initialSearchParameters: new ce.SearchParameters({ index: o })
            })
          ;((f = ce({}, s.index, s)).search = function () {
            return r.onStateChange
              ? (r.onStateChange({
                  uiState: r.mainIndex.getWidgetUiState({}),
                  setUiState: r.setUiState.bind(r)
                }),
                a)
              : a.search()
          }),
            (f.searchWithoutTriggeringOnStateChange = function () {
              return a.search()
            }),
            (f.searchForFacetValues = function (e, t, n, r) {
              var i = f.state.setQueryParameters(r)
              return a.searchForFacetValues(e, t, n, i)
            }),
            (m = a.derive(function () {
              return Ge.apply(
                void 0,
                P(
                  (function (e) {
                    for (
                      var t = e.getParent(), n = [e.getHelper().state];
                      null !== t;

                    )
                      (n = [t.getHelper().state].concat(n)), (t = t.getParent())
                    return n
                  })(t)
                )
              )
            })),
            f.on('change', function (e) {
              e.isPageReset &&
                !(function n(e) {
                  var t = e.filter(mt)
                  0 !== t.length &&
                    t.forEach(function (e) {
                      var t = e.getHelper()
                      pt(t, { state: t.state.resetPage(), isPageReset: !0 }),
                        n(e.getWidgets())
                    })
                })(u)
            }),
            m.on('search', function () {
              r.scheduleStalledRender()
            }),
            m.on('result', function (e) {
              var t = e.results
              r.scheduleRender(), (f.lastResults = t)
            }),
            u.forEach(function (e) {
              e.getRenderState &&
                bt({
                  renderState: e.getRenderState(
                    r.renderState[t.getIndexId()] || {},
                    {
                      uiState: i,
                      helper: f,
                      parent: t,
                      instantSearchInstance: r,
                      state: f.state,
                      renderState: r.renderState,
                      templatesConfig: r.templatesConfig,
                      createURL: t.createURL,
                      scopedResults: [],
                      searchMetadata: { isSearchStalled: r._isSearchStalled }
                    }
                  ),
                  instantSearchInstance: r,
                  parent: t
                })
            }),
            u.forEach(function (e) {
              e.init &&
                e.init({
                  uiState: i,
                  helper: f,
                  parent: t,
                  instantSearchInstance: r,
                  state: f.state,
                  renderState: r.renderState,
                  templatesConfig: r.templatesConfig,
                  createURL: t.createURL,
                  scopedResults: [],
                  searchMetadata: { isSearchStalled: r._isSearchStalled }
                })
            }),
            f.on('change', function (e) {
              var t = e.state,
                n = e._uiState
              ;(l = gt(u, { searchParameters: t, helper: f }, n || {})),
                r.onStateChange || r.onInternalStateChange()
            })
        }
      },
      render: function (e) {
        var t = this,
          n = e.instantSearchInstance
        this.getResults() &&
          (u.forEach(function (e) {
            e.getRenderState &&
              bt({
                renderState: e.getRenderState(
                  n.renderState[t.getIndexId()] || {},
                  {
                    helper: t.getHelper(),
                    parent: t,
                    instantSearchInstance: n,
                    results: t.getResults(),
                    scopedResults: t.getScopedResults(),
                    state: t.getResults()._state,
                    renderState: n.renderState,
                    templatesConfig: n.templatesConfig,
                    createURL: t.createURL,
                    searchMetadata: { isSearchStalled: n._isSearchStalled }
                  }
                ),
                instantSearchInstance: n,
                parent: t
              })
          }),
          u.forEach(function (e) {
            e.render &&
              e.render({
                helper: f,
                parent: t,
                instantSearchInstance: n,
                results: t.getResults(),
                scopedResults: t.getScopedResults(),
                state: t.getResults()._state,
                renderState: n.renderState,
                templatesConfig: n.templatesConfig,
                createURL: t.createURL,
                searchMetadata: { isSearchStalled: n._isSearchStalled }
              })
          }))
      },
      dispose: function () {
        u.forEach(function (e) {
          e.dispose && e.dispose({ helper: f, state: f.state })
        }),
          (h = d = null),
          f.removeAllListeners(),
          (f = null),
          m.detach(),
          (m = null)
      },
      getWidgetUiState: function (e) {
        return u.filter(mt).reduce(function (e, t) {
          return t.getWidgetUiState(e)
        }, D(D({}, e), {}, j({}, this.getIndexId(), l)))
      },
      getWidgetState: function (e) {
        return this.getWidgetUiState(e)
      },
      getWidgetSearchParameters: function (e, t) {
        var n = t.uiState
        return vt(u, { uiState: n, initialSearchParameters: e })
      },
      refreshUiState: function () {
        l = gt(u, {
          searchParameters: this.getHelper().state,
          helper: this.getHelper()
        })
      }
    }
  }
  function bt(e) {
    var t = e.renderState,
      n = e.instantSearchInstance,
      r = e.parent,
      i = r ? r.getIndexId() : n.mainIndex.getIndexId()
    n.renderState = D(
      D({}, n.renderState),
      {},
      j({}, i, D(D({}, n.renderState[i]), t))
    )
  }
  function St(a) {
    return function () {
      var e =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.descendantName,
        n = e.modifierName,
        r = t ? '-'.concat(t) : '',
        i = n ? '--'.concat(n) : ''
      return ''.concat('ais', '-').concat(a).concat(r).concat(i)
    }
  }
  var Rt = St('Highlight')
  function wt(e) {
    var t = e.attribute,
      n = e.highlightedTagName,
      r = void 0 === n ? 'mark' : n,
      i = e.hit,
      a = e.cssClasses,
      s = void 0 === a ? {} : a,
      o = (Fe(i._highlightResult, t) || {}).value,
      c = void 0 === o ? '' : o,
      u =
        Rt({ descendantName: 'highlighted' }) +
        (s.highlighted ? ' '.concat(s.highlighted) : '')
    return c
      .replace(
        new RegExp(Be.highlightPreTag, 'g'),
        '<'.concat(r, ' class="').concat(u, '">')
      )
      .replace(new RegExp(Be.highlightPostTag, 'g'), '</'.concat(r, '>'))
  }
  var Pt = St('ReverseHighlight')
  function xt(e) {
    var t = e.attribute,
      n = e.highlightedTagName,
      r = void 0 === n ? 'mark' : n,
      i = e.hit,
      a = e.cssClasses,
      s = void 0 === a ? {} : a,
      o = (Fe(i._highlightResult, t) || {}).value,
      c = void 0 === o ? '' : o,
      u =
        Pt({ descendantName: 'highlighted' }) +
        (s.highlighted ? ' '.concat(s.highlighted) : '')
    return Ve(Ye(Ke(c)))
      .replace(
        new RegExp(Be.highlightPreTag, 'g'),
        '<'.concat(r, ' class="').concat(u, '">')
      )
      .replace(new RegExp(Be.highlightPostTag, 'g'), '</'.concat(r, '>'))
  }
  var Nt = St('Snippet')
  function _t(e) {
    var t = e.attribute,
      n = e.highlightedTagName,
      r = void 0 === n ? 'mark' : n,
      i = e.hit,
      a = e.cssClasses,
      s = void 0 === a ? {} : a,
      o = (Fe(i._snippetResult, t) || {}).value,
      c = void 0 === o ? '' : o,
      u =
        Nt({ descendantName: 'highlighted' }) +
        (s.highlighted ? ' '.concat(s.highlighted) : '')
    return c
      .replace(
        new RegExp(Be.highlightPreTag, 'g'),
        '<'.concat(r, ' class="').concat(u, '">')
      )
      .replace(new RegExp(Be.highlightPostTag, 'g'), '</'.concat(r, '>'))
  }
  var It = St('ReverseSnippet')
  function Ft(e) {
    var t = e.attribute,
      n = e.highlightedTagName,
      r = void 0 === n ? 'mark' : n,
      i = e.hit,
      a = e.cssClasses,
      s = void 0 === a ? {} : a,
      o = (Fe(i._snippetResult, t) || {}).value,
      c = void 0 === o ? '' : o,
      u =
        It({ descendantName: 'highlighted' }) +
        (s.highlighted ? ' '.concat(s.highlighted) : '')
    return Ve(Ye(Ke(c)))
      .replace(
        new RegExp(Be.highlightPreTag, 'g'),
        '<'.concat(r, ' class="').concat(u, '">')
      )
      .replace(new RegExp(Be.highlightPostTag, 'g'), '</'.concat(r, '>'))
  }
  function Tt(e, t) {
    return (function (e) {
      var t,
        n = e.method,
        r = e.payload
      if ('object' !== d(r))
        throw new Error(
          'The insights helper expects the payload to be an object.'
        )
      try {
        t = st(r)
      } catch (e) {
        throw new Error('Could not JSON serialize the payload object.')
      }
      return 'data-insights-method="'
        .concat(n, '" data-insights-payload="')
        .concat(t, '"')
    })({ method: e, payload: t })
  }
  function Ct() {
    return (function (e) {
      for (
        var t = ''.concat(e, '='), n = document.cookie.split(';'), r = 0;
        r < n.length;
        r++
      ) {
        for (var i = n[r]; ' ' === i.charAt(0); ) i = i.substring(1)
        if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
      }
    })('_ALGOLIA')
  }
  function Et(e) {
    e.configure
    return O(e, ['configure'])
  }
  function kt() {
    return {
      stateToRoute: function (n) {
        return Object.keys(n).reduce(function (e, t) {
          return D(D({}, e), {}, j({}, t, Et(n[t])))
        }, {})
      },
      routeToState: function (e) {
        var n = 0 < arguments.length && void 0 !== e ? e : {}
        return Object.keys(n).reduce(function (e, t) {
          return D(D({}, e), {}, j({}, t, Et(n[t])))
        }, {})
      }
    }
  }
  function Lt(e, t) {
    for (
      var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
      r < e.length;
      ++r
    )
      void 0 !== e[r] && (n[r] = e[r])
    return n
  }
  function jt(e, t) {
    Xt.apply(e, Yt(t) ? t : [t])
  }
  function Mt(e, t, n, r, i, a, s, o, c, u, l, d, h) {
    var f = e
    if (
      ('function' == typeof s
        ? (f = s(t, f))
        : f instanceof Date
        ? (f = u(f))
        : 'comma' === n && Yt(f) && (f = f.join(',')),
      null === f)
    ) {
      if (r) return a && !d ? a(t, en.encoder, h) : t
      f = ''
    }
    if (
      (function (e) {
        return (
          'string' == typeof e ||
          'number' == typeof e ||
          'boolean' == typeof e ||
          'symbol' == typeof e ||
          'bigint' == typeof e
        )
      })(f) ||
      qt.isBuffer(f)
    )
      return a
        ? [l(d ? t : a(t, en.encoder, h)) + '=' + l(a(f, en.encoder, h))]
        : [l(t) + '=' + l(String(f))]
    var m,
      p = []
    if (void 0 === f) return p
    if (Yt(s)) m = s
    else {
      var g = Object.keys(f)
      m = o ? g.sort(o) : g
    }
    for (var v = 0; v < m.length; ++v) {
      var y = m[v]
      ;(i && null === f[y]) ||
        (Yt(f)
          ? jt(
              p,
              Mt(
                f[y],
                'function' == typeof n ? n(t, y) : t,
                n,
                r,
                i,
                a,
                s,
                o,
                c,
                u,
                l,
                d,
                h
              )
            )
          : jt(
              p,
              Mt(
                f[y],
                t + (c ? '.' + y : '[' + y + ']'),
                n,
                r,
                i,
                a,
                s,
                o,
                c,
                u,
                l,
                d,
                h
              )
            ))
    }
    return p
  }
  function Ot(e, t, n) {
    if (e) {
      var r = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        i = /(\[[^[\]]*])/g,
        a = 0 < n.depth && /(\[[^[\]]*])/.exec(r),
        s = a ? r.slice(0, a.index) : r,
        o = []
      if (s) {
        if (
          !n.plainObjects &&
          tn.call(Object.prototype, s) &&
          !n.allowPrototypes
        )
          return
        o.push(s)
      }
      for (
        var c = 0;
        0 < n.depth && null !== (a = i.exec(r)) && c < n.depth;

      ) {
        if (
          ((c += 1),
          !n.plainObjects &&
            tn.call(Object.prototype, a[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return
        o.push(a[1])
      }
      return (
        a && o.push('[' + r.slice(a.index) + ']'),
        (function (e, t, n) {
          for (var r = t, i = e.length - 1; 0 <= i; --i) {
            var a,
              s = e[i]
            if ('[]' === s && n.parseArrays) a = [].concat(r)
            else {
              a = n.plainObjects ? Object.create(null) : {}
              var o =
                  '[' === s.charAt(0) && ']' === s.charAt(s.length - 1)
                    ? s.slice(1, -1)
                    : s,
                c = parseInt(o, 10)
              n.parseArrays || '' !== o
                ? !isNaN(c) &&
                  s !== o &&
                  String(c) === o &&
                  0 <= c &&
                  n.parseArrays &&
                  c <= n.arrayLimit
                  ? ((a = [])[c] = r)
                  : (a[o] = r)
                : (a = { 0: r })
            }
            r = a
          }
          return r
        })(o, t, n)
      )
    }
  }
  function At(e) {
    var t = e.qsModule,
      n = e.routeState,
      r = e.location,
      i = r.protocol,
      a = r.hostname,
      s = r.port,
      o = void 0 === s ? '' : s,
      c = r.pathname,
      u = r.hash,
      l = t.stringify(n),
      d = '' === o ? '' : ':'.concat(o)
    return l
      ? ''
          .concat(i, '//')
          .concat(a)
          .concat(d)
          .concat(c, '?')
          .concat(l)
          .concat(u)
      : ''.concat(i, '//').concat(a).concat(d).concat(c).concat(u)
  }
  function Ht(e) {
    var t = e.qsModule,
      n = e.location
    return t.parse(n.search.slice(1), { arrayLimit: 99 })
  }
  function Dt(e) {
    e && (window.document.title = e)
  }
  var Wt = Object.prototype.hasOwnProperty,
    Bt = Array.isArray,
    Ut = (function () {
      for (var e = [], t = 0; t < 256; ++t)
        e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
      return e
    })(),
    qt = {
      arrayToObject: Lt,
      assign: function (e, n) {
        return Object.keys(n).reduce(function (e, t) {
          return (e[t] = n[t]), e
        }, e)
      },
      combine: function (e, t) {
        return [].concat(e, t)
      },
      compact: function (e) {
        for (
          var t = [{ obj: { o: e }, prop: 'o' }], n = [], r = 0;
          r < t.length;
          ++r
        )
          for (
            var i = t[r], a = i.obj[i.prop], s = Object.keys(a), o = 0;
            o < s.length;
            ++o
          ) {
            var c = s[o],
              u = a[c]
            'object' == typeof u &&
              null !== u &&
              -1 === n.indexOf(u) &&
              (t.push({ obj: a, prop: c }), n.push(u))
          }
        return (
          (function (e) {
            for (; 1 < e.length; ) {
              var t = e.pop(),
                n = t.obj[t.prop]
              if (Bt(n)) {
                for (var r = [], i = 0; i < n.length; ++i)
                  void 0 !== n[i] && r.push(n[i])
                t.obj[t.prop] = r
              }
            }
          })(t),
          e
        )
      },
      decode: function (e, t, n) {
        var r = e.replace(/\+/g, ' ')
        if ('iso-8859-1' === n) return r.replace(/%[0-9a-f]{2}/gi, unescape)
        try {
          return decodeURIComponent(r)
        } catch (e) {
          return r
        }
      },
      encode: function (e, t, n) {
        if (0 === e.length) return e
        var r = e
        if (
          ('symbol' == typeof e
            ? (r = Symbol.prototype.toString.call(e))
            : 'string' != typeof e && (r = String(e)),
          'iso-8859-1' === n)
        )
          return escape(r).replace(/%u[0-9a-f]{4}/gi, function (e) {
            return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
          })
        for (var i = '', a = 0; a < r.length; ++a) {
          var s = r.charCodeAt(a)
          45 === s ||
          46 === s ||
          95 === s ||
          126 === s ||
          (48 <= s && s <= 57) ||
          (65 <= s && s <= 90) ||
          (97 <= s && s <= 122)
            ? (i += r.charAt(a))
            : s < 128
            ? (i += Ut[s])
            : s < 2048
            ? (i += Ut[192 | (s >> 6)] + Ut[128 | (63 & s)])
            : s < 55296 || 57344 <= s
            ? (i +=
                Ut[224 | (s >> 12)] +
                Ut[128 | ((s >> 6) & 63)] +
                Ut[128 | (63 & s)])
            : ((a += 1),
              (s = 65536 + (((1023 & s) << 10) | (1023 & r.charCodeAt(a)))),
              (i +=
                Ut[240 | (s >> 18)] +
                Ut[128 | ((s >> 12) & 63)] +
                Ut[128 | ((s >> 6) & 63)] +
                Ut[128 | (63 & s)]))
        }
        return i
      },
      isBuffer: function (e) {
        return (
          !(!e || 'object' != typeof e) &&
          !!(
            e.constructor &&
            e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          )
        )
      },
      isRegExp: function (e) {
        return '[object RegExp]' === Object.prototype.toString.call(e)
      },
      merge: function r(i, a, s) {
        if (!a) return i
        if ('object' != typeof a) {
          if (Bt(i)) i.push(a)
          else {
            if (!i || 'object' != typeof i) return [i, a]
            ;((s && (s.plainObjects || s.allowPrototypes)) ||
              !Wt.call(Object.prototype, a)) &&
              (i[a] = !0)
          }
          return i
        }
        if (!i || 'object' != typeof i) return [i].concat(a)
        var e = i
        return (
          Bt(i) && !Bt(a) && (e = Lt(i, s)),
          Bt(i) && Bt(a)
            ? (a.forEach(function (e, t) {
                if (Wt.call(i, t)) {
                  var n = i[t]
                  n && 'object' == typeof n && e && 'object' == typeof e
                    ? (i[t] = r(n, e, s))
                    : i.push(e)
                } else i[t] = e
              }),
              i)
            : Object.keys(a).reduce(function (e, t) {
                var n = a[t]
                return Wt.call(e, t) ? (e[t] = r(e[t], n, s)) : (e[t] = n), e
              }, e)
        )
      }
    },
    Qt = String.prototype.replace,
    $t = /%20/g,
    Vt = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
    Kt = qt.assign(
      {
        default: Vt.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return Qt.call(e, $t, '+')
          },
          RFC3986: function (e) {
            return String(e)
          }
        }
      },
      Vt
    ),
    zt = Object.prototype.hasOwnProperty,
    Jt = {
      brackets: function (e) {
        return e + '[]'
      },
      comma: 'comma',
      indices: function (e, t) {
        return e + '[' + t + ']'
      },
      repeat: function (e) {
        return e
      }
    },
    Yt = Array.isArray,
    Xt = Array.prototype.push,
    Gt = Date.prototype.toISOString,
    Zt = Kt.default,
    en = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: 'utf-8',
      charsetSentinel: !1,
      delimiter: '&',
      encode: !0,
      encoder: qt.encode,
      encodeValuesOnly: !1,
      format: Zt,
      formatter: Kt.formatters[Zt],
      indices: !1,
      serializeDate: function (e) {
        return Gt.call(e)
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
    tn = Object.prototype.hasOwnProperty,
    nn = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: !1,
      comma: !1,
      decoder: qt.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
    },
    rn = {
      formats: Kt,
      parse: function (e, t) {
        var n = (function (e) {
          if (!e) return nn
          if (
            null !== e.decoder &&
            void 0 !== e.decoder &&
            'function' != typeof e.decoder
          )
            throw new TypeError('Decoder has to be a function.')
          if (
            void 0 !== e.charset &&
            'utf-8' !== e.charset &&
            'iso-8859-1' !== e.charset
          )
            throw new Error(
              'The charset option must be either utf-8, iso-8859-1, or undefined'
            )
          var t = void 0 === e.charset ? nn.charset : e.charset
          return {
            allowDots: void 0 === e.allowDots ? nn.allowDots : !!e.allowDots,
            allowPrototypes:
              'boolean' == typeof e.allowPrototypes
                ? e.allowPrototypes
                : nn.allowPrototypes,
            arrayLimit:
              'number' == typeof e.arrayLimit ? e.arrayLimit : nn.arrayLimit,
            charset: t,
            charsetSentinel:
              'boolean' == typeof e.charsetSentinel
                ? e.charsetSentinel
                : nn.charsetSentinel,
            comma: 'boolean' == typeof e.comma ? e.comma : nn.comma,
            decoder: 'function' == typeof e.decoder ? e.decoder : nn.decoder,
            delimiter:
              'string' == typeof e.delimiter || qt.isRegExp(e.delimiter)
                ? e.delimiter
                : nn.delimiter,
            depth:
              'number' == typeof e.depth || !1 === e.depth
                ? +e.depth
                : nn.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              'boolean' == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : nn.interpretNumericEntities,
            parameterLimit:
              'number' == typeof e.parameterLimit
                ? e.parameterLimit
                : nn.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects:
              'boolean' == typeof e.plainObjects
                ? e.plainObjects
                : nn.plainObjects,
            strictNullHandling:
              'boolean' == typeof e.strictNullHandling
                ? e.strictNullHandling
                : nn.strictNullHandling
          }
        })(t)
        if ('' === e || null == e)
          return n.plainObjects ? Object.create(null) : {}
        for (
          var r =
              'string' == typeof e
                ? (function (e, t) {
                    var n,
                      r = {},
                      i = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                      a =
                        t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                      s = i.split(t.delimiter, a),
                      o = -1,
                      c = t.charset
                    if (t.charsetSentinel)
                      for (n = 0; n < s.length; ++n)
                        0 === s[n].indexOf('utf8=') &&
                          ('utf8=%E2%9C%93' === s[n]
                            ? (c = 'utf-8')
                            : 'utf8=%26%2310003%3B' === s[n] &&
                              (c = 'iso-8859-1'),
                          (o = n),
                          (n = s.length))
                    for (n = 0; n < s.length; ++n)
                      if (n !== o) {
                        var u,
                          l,
                          d = s[n],
                          h = d.indexOf(']='),
                          f = -1 === h ? d.indexOf('=') : h + 1
                        ;(l =
                          -1 === f
                            ? ((u = t.decoder(d, nn.decoder, c)),
                              t.strictNullHandling ? null : '')
                            : ((u = t.decoder(d.slice(0, f), nn.decoder, c)),
                              t.decoder(d.slice(f + 1), nn.decoder, c))) &&
                          t.interpretNumericEntities &&
                          'iso-8859-1' === c &&
                          (l = l.replace(/&#(\d+);/g, function (e, t) {
                            return String.fromCharCode(parseInt(t, 10))
                          })),
                          l &&
                            t.comma &&
                            -1 < l.indexOf(',') &&
                            (l = l.split(',')),
                          tn.call(r, u)
                            ? (r[u] = qt.combine(r[u], l))
                            : (r[u] = l)
                      }
                    return r
                  })(e, n)
                : e,
            i = n.plainObjects ? Object.create(null) : {},
            a = Object.keys(r),
            s = 0;
          s < a.length;
          ++s
        ) {
          var o = a[s],
            c = Ot(o, r[o], n)
          i = qt.merge(i, c, n)
        }
        return qt.compact(i)
      },
      stringify: function (e, t) {
        var n,
          r = e,
          i = (function (e) {
            if (!e) return en
            if (
              null !== e.encoder &&
              void 0 !== e.encoder &&
              'function' != typeof e.encoder
            )
              throw new TypeError('Encoder has to be a function.')
            var t = e.charset || en.charset
            if (
              void 0 !== e.charset &&
              'utf-8' !== e.charset &&
              'iso-8859-1' !== e.charset
            )
              throw new TypeError(
                'The charset option must be either utf-8, iso-8859-1, or undefined'
              )
            var n = Kt.default
            if (void 0 !== e.format) {
              if (!zt.call(Kt.formatters, e.format))
                throw new TypeError('Unknown format option provided.')
              n = e.format
            }
            var r = Kt.formatters[n],
              i = en.filter
            return (
              ('function' != typeof e.filter && !Yt(e.filter)) ||
                (i = e.filter),
              {
                addQueryPrefix:
                  'boolean' == typeof e.addQueryPrefix
                    ? e.addQueryPrefix
                    : en.addQueryPrefix,
                allowDots:
                  void 0 === e.allowDots ? en.allowDots : !!e.allowDots,
                charset: t,
                charsetSentinel:
                  'boolean' == typeof e.charsetSentinel
                    ? e.charsetSentinel
                    : en.charsetSentinel,
                delimiter: void 0 === e.delimiter ? en.delimiter : e.delimiter,
                encode: 'boolean' == typeof e.encode ? e.encode : en.encode,
                encoder:
                  'function' == typeof e.encoder ? e.encoder : en.encoder,
                encodeValuesOnly:
                  'boolean' == typeof e.encodeValuesOnly
                    ? e.encodeValuesOnly
                    : en.encodeValuesOnly,
                filter: i,
                formatter: r,
                serializeDate:
                  'function' == typeof e.serializeDate
                    ? e.serializeDate
                    : en.serializeDate,
                skipNulls:
                  'boolean' == typeof e.skipNulls ? e.skipNulls : en.skipNulls,
                sort: 'function' == typeof e.sort ? e.sort : null,
                strictNullHandling:
                  'boolean' == typeof e.strictNullHandling
                    ? e.strictNullHandling
                    : en.strictNullHandling
              }
            )
          })(t)
        'function' == typeof i.filter
          ? (r = (0, i.filter)('', r))
          : Yt(i.filter) && (n = i.filter)
        var a,
          s = []
        if ('object' != typeof r || null === r) return ''
        a =
          t && t.arrayFormat in Jt
            ? t.arrayFormat
            : t && 'indices' in t
            ? t.indices
              ? 'indices'
              : 'repeat'
            : 'indices'
        var o = Jt[a]
        ;(n = n || Object.keys(r)), i.sort && n.sort(i.sort)
        for (var c = 0; c < n.length; ++c) {
          var u = n[c]
          ;(i.skipNulls && null === r[u]) ||
            jt(
              s,
              Mt(
                r[u],
                u,
                o,
                i.strictNullHandling,
                i.skipNulls,
                i.encode ? i.encoder : null,
                i.filter,
                i.sort,
                i.allowDots,
                i.serializeDate,
                i.formatter,
                i.encodeValuesOnly,
                i.charset
              )
            )
        }
        var l = s.join(i.delimiter),
          d = !0 === i.addQueryPrefix ? '?' : ''
        return (
          i.charsetSentinel &&
            ('iso-8859-1' === i.charset
              ? (d += 'utf8=%26%2310003%3B&')
              : (d += 'utf8=%E2%9C%93&')),
          0 < l.length ? d + l : ''
        )
      }
    },
    an = (function () {
      function u() {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.windowTitle,
          n = e.writeDelay,
          r = void 0 === n ? 400 : n,
          i = e.createURL,
          a = void 0 === i ? At : i,
          s = e.parseURL,
          o = void 0 === s ? Ht : s
        k(this, u),
          j(this, 'windowTitle', void 0),
          j(this, 'writeDelay', void 0),
          j(this, '_createURL', void 0),
          j(this, 'parseURL', void 0),
          j(this, 'writeTimer', void 0),
          (this.windowTitle = t),
          (this.writeTimer = void 0),
          (this.writeDelay = r),
          (this._createURL = a),
          (this.parseURL = o)
        var c = this.windowTitle && this.windowTitle(this.read())
        Dt(c)
      }
      return (
        L(u, [
          {
            key: 'read',
            value: function () {
              return this.parseURL({ qsModule: rn, location: window.location })
            }
          },
          {
            key: 'write',
            value: function (e) {
              var t = this,
                n = this.createURL(e),
                r = this.windowTitle && this.windowTitle(e)
              this.writeTimer && window.clearTimeout(this.writeTimer),
                (this.writeTimer = window.setTimeout(function () {
                  Dt(r),
                    window.history.pushState(e, r || '', n),
                    (t.writeTimer = void 0)
                }, this.writeDelay))
            }
          },
          {
            key: 'onUpdate',
            value: function (n) {
              var r = this
              ;(this._onPopState = function (e) {
                r.writeTimer &&
                  (window.clearTimeout(r.writeTimer), (r.writeTimer = void 0))
                var t = e.state
                n(t || r.read())
              }),
                window.addEventListener('popstate', this._onPopState)
            }
          },
          {
            key: 'createURL',
            value: function (e) {
              return this._createURL({
                qsModule: rn,
                routeState: e,
                location: window.location
              })
            }
          },
          {
            key: 'dispose',
            value: function () {
              this._onPopState &&
                window.removeEventListener('popstate', this._onPopState),
                this.writeTimer && window.clearTimeout(this.writeTimer),
                this.write({})
            }
          }
        ]),
        u
      )
    })()
  function sn(e) {
    return new an(e)
  }
  function on(e) {
    var t = 0 < arguments.length && void 0 !== e ? e : {},
      n = t.router,
      a = void 0 === n ? sn() : n,
      r = t.stateMapping,
      s = void 0 === r ? kt() : r
    return function (e) {
      var r = e.instantSearchInstance
      ;(r._createURL = function (n) {
        var e = Object.keys(n).reduce(function (e, t) {
            return D(D({}, e), {}, j({}, t, n[t]))
          }, r.mainIndex.getWidgetUiState({})),
          t = s.stateToRoute(e)
        return a.createURL(t)
      }),
        (r._initialUiState = D(
          D({}, r._initialUiState),
          s.routeToState(a.read())
        ))
      var i = void 0
      return {
        onStateChange: function (e) {
          var t = e.uiState,
            n = s.stateToRoute(t)
          ;(void 0 !== i && Le(i, n)) || (a.write(n), (i = n))
        },
        subscribe: function () {
          a.onUpdate(function (e) {
            r.setUiState(s.routeToState(e))
          })
        },
        unsubscribe: function () {
          a.dispose()
        }
      }
    }
  }
  function cn() {
    return (
      'undefined' != typeof window &&
      -1 < window.navigator.userAgent.indexOf('Algolia Crawler')
    )
  }
  function un() {
    return function (e) {
      var t = e.instantSearchInstance,
        n = { widgets: [] },
        r = document.createElement('meta'),
        i = document.querySelector('head')
      return (
        (r.name = 'instantsearch:widgets'),
        {
          onStateChange: function () {},
          subscribe: function () {
            setTimeout(function () {
              var e = t.client
              ;(n.ua =
                e.transporter && e.transporter.userAgent
                  ? e.transporter.userAgent.value
                  : e._ua),
                (function i(e, a, s) {
                  var t = a.mainIndex,
                    o = {
                      instantSearchInstance: a,
                      parent: t,
                      scopedResults: [],
                      state: t.getHelper().state,
                      helper: t.getHelper(),
                      createURL: t.createURL,
                      uiState: a._initialUiState,
                      renderState: a.renderState,
                      templatesConfig: a.templatesConfig,
                      searchMetadata: { isSearchStalled: a._isSearchStalled }
                    }
                  e.forEach(function (e) {
                    var t = {}
                    if (e.getWidgetRenderState) {
                      var n = e.getWidgetRenderState(o)
                      n && n.widgetParams && (t = n.widgetParams)
                    }
                    var r = Object.keys(t).filter(function (e) {
                      return void 0 !== t[e]
                    })
                    s.widgets.push({
                      type: e.$$type,
                      widgetType: e.$$widgetType,
                      params: r
                    }),
                      'ais.index' === e.$$type && i(e.getWidgets(), a, s)
                  })
                })(t.mainIndex.getWidgets(), t, n),
                (r.content = JSON.stringify(n)),
                i.appendChild(r)
            }, 0)
          },
          unsubscribe: function () {
            r.remove()
          }
        }
      )
    }
  }
  var ln = et({ name: 'instantsearch' })
  function dn() {
    return '#'
  }
  function hn(d, e) {
    var h = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(d, mn()),
      function (i) {
        var e = i || {},
          t = e.includedAttributes,
          a = void 0 === t ? [] : t,
          n = e.excludedAttributes,
          s = void 0 === n ? ['query'] : n,
          r = e.transformItems,
          o =
            void 0 === r
              ? function (e) {
                  return e
                }
              : r
        if (i.includedAttributes && i.excludedAttributes)
          throw new Error(
            mn(
              'The options `includedAttributes` and `excludedAttributes` cannot be used together.'
            )
          )
        function c() {
          return l.refine()
        }
        function u() {
          return l.createURL()
        }
        var l = {
          refine: Ie,
          createURL: function () {
            return ''
          },
          attributesToClear: []
        }
        return {
          $$type: 'ais.clearRefinements',
          init: function (e) {
            var t = e.instantSearchInstance
            d(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            d(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function () {
            h()
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { clearRefinements: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.createURL,
              n = e.scopedResults
            ;(l.attributesToClear = n.reduce(function (e, t) {
              return e.concat(
                (function (e) {
                  var t = e.scopedResult,
                    n = e.includedAttributes,
                    r = e.excludedAttributes,
                    i = e.transformItems,
                    a = -1 !== n.indexOf('query') || -1 === r.indexOf('query')
                  return {
                    helper: t.helper,
                    items: i(
                      fe(
                        Pe(t.results, t.helper.state, a)
                          .map(function (e) {
                            return e.attribute
                          })
                          .filter(function (e) {
                            return 0 === n.length || -1 !== n.indexOf(e)
                          })
                          .filter(function (e) {
                            return ('query' === e && a) || -1 === r.indexOf(e)
                          })
                      )
                    )
                  }
                })({
                  scopedResult: t,
                  includedAttributes: a,
                  excludedAttributes: s,
                  transformItems: o
                })
              )
            }, [])),
              (l.refine = function () {
                l.attributesToClear.forEach(function (e) {
                  var t = e.helper,
                    n = e.items
                  t.setState(xe({ helper: t, attributesToClear: n })).search()
                })
              }),
              (l.createURL = function () {
                return t(
                  Ge.apply(
                    void 0,
                    P(
                      l.attributesToClear.map(function (e) {
                        return xe({
                          helper: e.helper,
                          attributesToClear: e.items
                        })
                      })
                    )
                  )
                )
              })
            var r = l.attributesToClear.some(function (e) {
              return 0 < e.items.length
            })
            return {
              canRefine: r,
              hasRefinements: r,
              refine: c,
              createURL: u,
              widgetParams: i
            }
          }
        }
      }
    )
  }
  var fn = (function () {
      M(S, e)
      var b = H(S)
      function S(e) {
        var n
        k(this, S),
          j(A((n = b.call(this))), 'client', void 0),
          j(A(n), 'indexName', void 0),
          j(A(n), 'insightsClient', void 0),
          j(A(n), 'onStateChange', null),
          j(A(n), 'helper', void 0),
          j(A(n), 'mainHelper', void 0),
          j(A(n), 'mainIndex', void 0),
          j(A(n), 'started', void 0),
          j(A(n), 'templatesConfig', void 0),
          j(A(n), 'renderState', {}),
          j(A(n), '_stalledSearchDelay', void 0),
          j(A(n), '_searchStalledTimer', void 0),
          j(A(n), '_isSearchStalled', void 0),
          j(A(n), '_initialUiState', void 0),
          j(A(n), '_createURL', void 0),
          j(A(n), '_searchFunction', void 0),
          j(A(n), '_mainHelperSearch', void 0),
          j(A(n), 'middleware', []),
          j(A(n), 'sendEventToInsights', void 0),
          j(
            A(n),
            'scheduleSearch',
            ue(function () {
              n.started && n.mainHelper.search()
            })
          ),
          j(
            A(n),
            'scheduleRender',
            ue(function () {
              n.mainHelper.hasPendingRequests() ||
                (clearTimeout(n._searchStalledTimer),
                (n._searchStalledTimer = null),
                (n._isSearchStalled = !1)),
                n.mainIndex.render({ instantSearchInstance: A(n) }),
                n.emit('render')
            })
          ),
          j(
            A(n),
            'onInternalStateChange',
            ue(function () {
              var t = n.mainIndex.getWidgetUiState({})
              n.middleware.forEach(function (e) {
                e.instance.onStateChange({ uiState: t })
              })
            })
          )
        var t = e.indexName,
          r = void 0 === t ? null : t,
          i = e.numberLocale,
          a = e.initialUiState,
          s = void 0 === a ? {} : a,
          o = e.routing,
          c = void 0 === o ? null : o,
          u = e.searchFunction,
          l = e.stalledSearchDelay,
          d = void 0 === l ? 200 : l,
          h = e.searchClient,
          f = void 0 === h ? null : h,
          m = e.insightsClient,
          p = void 0 === m ? null : m,
          g = e.onStateChange,
          v = void 0 === g ? null : g
        if (null === r)
          throw new Error(ln('The `indexName` option is required.'))
        if (null === f)
          throw new Error(ln('The `searchClient` option is required.'))
        if ('function' != typeof f.search)
          throw new Error(
            'The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/'
          )
        if (
          ('function' == typeof f.addAlgoliaAgent &&
            f.addAlgoliaAgent('instantsearch.js ('.concat('4.21.0', ')')),
          p && 'function' != typeof p)
        )
          throw new Error(
            ln('The `insightsClient` option should be a function.')
          )
        if (
          ((n.client = f),
          (n.insightsClient = p),
          (n.indexName = r),
          (n.helper = null),
          (n.mainHelper = null),
          (n.mainIndex = yt({ indexName: r })),
          (n.onStateChange = v),
          (n.started = !1),
          (n.templatesConfig = {
            helpers: (function (e) {
              var n = e.numberLocale
              return {
                formatNumber: function (e, t) {
                  return Number(t(e)).toLocaleString(n)
                },
                highlight: function (e, t) {
                  try {
                    return t(wt(D(D({}, JSON.parse(e)), {}, { hit: this })))
                  } catch (e) {
                    throw new Error(
                      '\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                    )
                  }
                },
                reverseHighlight: function (e, t) {
                  try {
                    return t(xt(D(D({}, JSON.parse(e)), {}, { hit: this })))
                  } catch (e) {
                    throw new Error(
                      '\n  The reverseHighlight helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }'
                    )
                  }
                },
                snippet: function (e, t) {
                  try {
                    return t(_t(D(D({}, JSON.parse(e)), {}, { hit: this })))
                  } catch (e) {
                    throw new Error(
                      '\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }'
                    )
                  }
                },
                reverseSnippet: function (e, t) {
                  try {
                    return t(Ft(D(D({}, JSON.parse(e)), {}, { hit: this })))
                  } catch (e) {
                    throw new Error(
                      '\n  The reverseSnippet helper expects a JSON object of the format:\n  { "attribute": "name", "highlightedTagName": "mark" }'
                    )
                  }
                },
                insights: function (e, t) {
                  try {
                    var n = JSON.parse(e),
                      r = n.method,
                      i = n.payload
                    return t(Tt(r, D({ objectIDs: [this.objectID] }, i)))
                  } catch (e) {
                    throw new Error(
                      '\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }'
                    )
                  }
                }
              }
            })({ numberLocale: i }),
            compileOptions: {}
          }),
          (n._stalledSearchDelay = d),
          (n._searchStalledTimer = null),
          (n._isSearchStalled = !1),
          (n._createURL = dn),
          (n._initialUiState = s),
          u && (n._searchFunction = u),
          (n.sendEventToInsights = Ie),
          c)
        ) {
          var y = 'boolean' == typeof c ? void 0 : c
          n.use(on(y))
        }
        return cn() && n.use(un()), n
      }
      return (
        L(S, [
          {
            key: 'use',
            value: function () {
              for (
                var n = this, e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r]
              var i = t.map(function (e) {
                var t = D(
                  { subscribe: Ie, unsubscribe: Ie, onStateChange: Ie },
                  e({ instantSearchInstance: n })
                )
                return n.middleware.push({ creator: e, instance: t }), t
              })
              return (
                this.started &&
                  i.forEach(function (e) {
                    e.subscribe()
                  }),
                this
              )
            }
          },
          {
            key: 'unuse',
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n]
              return (
                this.middleware
                  .filter(function (e) {
                    return t.includes(e.creator)
                  })
                  .forEach(function (e) {
                    return e.instance.unsubscribe()
                  }),
                (this.middleware = this.middleware.filter(function (e) {
                  return !t.includes(e.creator)
                })),
                this
              )
            }
          },
          {
            key: 'EXPERIMENTAL_use',
            value: function () {
              return this.use.apply(this, arguments)
            }
          },
          {
            key: 'addWidget',
            value: function (e) {
              return this.addWidgets([e])
            }
          },
          {
            key: 'addWidgets',
            value: function (e) {
              if (!Array.isArray(e))
                throw new Error(
                  ln(
                    'The `addWidgets` method expects an array of widgets. Please use `addWidget`.'
                  )
                )
              if (
                e.some(function (e) {
                  return (
                    'function' != typeof e.init && 'function' != typeof e.render
                  )
                })
              )
                throw new Error(
                  ln(
                    'The widget definition expects a `render` and/or an `init` method.'
                  )
                )
              return this.mainIndex.addWidgets(e), this
            }
          },
          {
            key: 'removeWidget',
            value: function (e) {
              return this.removeWidgets([e])
            }
          },
          {
            key: 'removeWidgets',
            value: function (e) {
              if (!Array.isArray(e))
                throw new Error(
                  ln(
                    'The `removeWidgets` method expects an array of widgets. Please use `removeWidget`.'
                  )
                )
              if (
                e.some(function (e) {
                  return 'function' != typeof e.dispose
                })
              )
                throw new Error(
                  ln('The widget definition expects a `dispose` method.')
                )
              return this.mainIndex.removeWidgets(e), this
            }
          },
          {
            key: 'start',
            value: function () {
              var r = this
              if (this.started)
                throw new Error(
                  ln('The `start` method has already been called once.')
                )
              var t = ce(this.client, this.indexName)
              if (
                ((t.search = function () {
                  return t.searchOnlyWithDerivedHelpers()
                }),
                this._searchFunction)
              ) {
                var i = {
                  search: function () {
                    return new Promise(Ie)
                  }
                }
                ;(this._mainHelperSearch = t.search.bind(t)),
                  (t.search = function () {
                    var n = r.mainIndex.getHelper(),
                      e = ce(i, n.state.index, n.state)
                    return (
                      e.once('search', function (e) {
                        var t = e.state
                        n.overrideStateWithoutTriggeringChangeEvent(t),
                          r._mainHelperSearch()
                      }),
                      e.on('change', function (e) {
                        var t = e.state
                        n.setState(t)
                      }),
                      r._searchFunction(e),
                      t
                    )
                  })
              }
              t.on('error', function (e) {
                var t = e.error
                r.emit('error', { error: t })
              }),
                (this.mainHelper = t),
                this.mainIndex.init({
                  instantSearchInstance: this,
                  parent: null,
                  uiState: this._initialUiState
                }),
                this.middleware.forEach(function (e) {
                  e.instance.subscribe()
                }),
                t.search(),
                (this.helper = this.mainIndex.getHelper()),
                (this.started = !0)
            }
          },
          {
            key: 'dispose',
            value: function () {
              this.scheduleSearch.cancel(),
                this.scheduleRender.cancel(),
                clearTimeout(this._searchStalledTimer),
                this.removeWidgets(this.mainIndex.getWidgets()),
                this.mainIndex.dispose(),
                (this.started = !1),
                this.removeAllListeners(),
                this.mainHelper.removeAllListeners(),
                (this.mainHelper = null),
                (this.helper = null),
                this.middleware.forEach(function (e) {
                  e.instance.unsubscribe()
                })
            }
          },
          {
            key: 'scheduleStalledRender',
            value: function () {
              var e = this
              this._searchStalledTimer ||
                (this._searchStalledTimer = setTimeout(function () {
                  ;(e._isSearchStalled = !0), e.scheduleRender()
                }, this._stalledSearchDelay))
            }
          },
          {
            key: 'setUiState',
            value: function (e) {
              if (!this.mainHelper)
                throw new Error(
                  ln(
                    'The `start` method needs to be called before `setUiState`.'
                  )
                )
              this.mainIndex.refreshUiState()
              var n =
                'function' == typeof e
                  ? e(this.mainIndex.getWidgetUiState({}))
                  : e
              !(function e(t) {
                t
                  .getHelper()
                  .setState(
                    t.getWidgetSearchParameters(t.getHelper().state, {
                      uiState: n[t.getIndexId()]
                    })
                  ),
                  t.getWidgets().filter(mt).forEach(e)
              })(this.mainIndex),
                this.scheduleSearch()
            }
          },
          {
            key: 'createURL',
            value: function (e) {
              var t = 0 < arguments.length && void 0 !== e ? e : {}
              if (!this.started)
                throw new Error(
                  ln(
                    'The `start` method needs to be called before `createURL`.'
                  )
                )
              return this._createURL(t)
            }
          },
          {
            key: 'refresh',
            value: function () {
              if (!this.mainHelper)
                throw new Error(
                  ln('The `start` method needs to be called before `refresh`.')
                )
              this.mainHelper.clearCache().search()
            }
          }
        ]),
        S
      )
    })(),
    mn = et({ name: 'clear-refinements', connector: !0 })
  function pn(r, e) {
    var i = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(r, gn()),
      function (s) {
        if ((s || {}).includedAttributes && (s || {}).excludedAttributes)
          throw new Error(
            gn(
              'The options `includedAttributes` and `excludedAttributes` cannot be used together.'
            )
          )
        var e = s || {},
          o = e.includedAttributes,
          t = e.excludedAttributes,
          c = void 0 === t ? ['query'] : t,
          n = e.transformItems,
          u =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n
        return {
          $$type: 'ais.currentRefinements',
          init: function (e) {
            var t = e.instantSearchInstance
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function () {
            i()
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { currentRefinements: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.scopedResults,
              r = e.createURL,
              i = e.helper
            var a = t
              ? n.reduce(function (e, t) {
                  return e.concat(
                    u(
                      vn({
                        results: t.results,
                        helper: t.helper,
                        includedAttributes: o,
                        excludedAttributes: c
                      })
                    )
                  )
                }, [])
              : u(
                  vn({
                    results: {},
                    helper: i,
                    includedAttributes: o,
                    excludedAttributes: c
                  })
                )
            return {
              items: a,
              canRefine: 0 < a.length,
              refine: function (e) {
                return bn(i, e)
              },
              createURL: function (e) {
                return r(yn(i.state, e))
              },
              widgetParams: s
            }
          }
        }
      }
    )
  }
  var gn = et({ name: 'current-refinements', connector: !0 })
  function vn(e) {
    var t = e.results,
      n = e.helper,
      r = e.includedAttributes,
      i = e.excludedAttributes,
      a =
        -1 !== (r || []).indexOf('query') || -1 === (i || []).indexOf('query'),
      s = r
        ? function (e) {
            return -1 !== r.indexOf(e.attribute)
          }
        : function (e) {
            return -1 === i.indexOf(e.attribute)
          },
      o = Pe(t, n.state, a).map(Sn).filter(s)
    return o.reduce(function (e, t) {
      return [].concat(
        P(
          e.filter(function (e) {
            return e.attribute !== t.attribute
          })
        ),
        [
          {
            indexName: n.state.index,
            attribute: t.attribute,
            label: t.attribute,
            refinements: o
              .filter(function (e) {
                return e.attribute === t.attribute
              })
              .sort(function (e, t) {
                return 'numeric' === e.type ? e.value - t.value : 0
              }),
            refine: function (e) {
              return bn(n, e)
            }
          }
        ]
      )
    }, [])
  }
  function yn(e, t) {
    switch (t.type) {
      case 'facet':
        return e.removeFacetRefinement(t.attribute, String(t.value))
      case 'disjunctive':
        return e.removeDisjunctiveFacetRefinement(t.attribute, String(t.value))
      case 'hierarchical':
        return e.removeHierarchicalFacetRefinement(t.attribute)
      case 'exclude':
        return e.removeExcludeRefinement(t.attribute, String(t.value))
      case 'numeric':
        return e.removeNumericRefinement(
          t.attribute,
          t.operator,
          String(t.value)
        )
      case 'tag':
        return e.removeTagRefinement(String(t.value))
      case 'query':
        return e.setQueryParameter('query', '')
      default:
        return e
    }
  }
  function bn(e, t) {
    e.setState(yn(e.state, t)).search()
  }
  function Sn(e) {
    var t = 'numeric' === e.type ? Number(e.name) : e.name,
      n = e.operator
        ? ''
            .concat(
              (function (e) {
                switch (e) {
                  case '>=':
                    return '≥'
                  case '<=':
                    return '≤'
                  default:
                    return e
                }
              })(e.operator),
              ' '
            )
            .concat(e.name)
        : e.name,
      r = { attribute: e.attribute, type: e.type, value: t, label: n }
    return (
      void 0 !== e.operator && (r.operator = e.operator),
      void 0 !== e.count && (r.count = e.count),
      void 0 !== e.exhaustive && (r.exhaustive = e.exhaustive),
      r
    )
  }
  function Rn(_, e) {
    var I = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(_, xn()),
      function (d) {
        var e = d || {},
          c = e.attributes,
          t = e.separator,
          u = void 0 === t ? ' > ' : t,
          n = e.rootPath,
          l = void 0 === n ? null : n,
          r = e.showParentLevel,
          h = void 0 === r || r,
          i = e.limit,
          f = void 0 === i ? 10 : i,
          a = e.showMore,
          m = void 0 !== a && a,
          s = e.showMoreLimit,
          p = void 0 === s ? 20 : s,
          o = e.sortBy,
          g = void 0 === o ? ['name:asc'] : o,
          v = e.transformItems,
          y =
            void 0 === v
              ? function (e) {
                  return e
                }
              : v
        if (!c || !Array.isArray(c) || 0 === c.length)
          throw new Error(
            xn('The `attributes` option expects an array of strings.')
          )
        if (!0 === m && p <= f)
          throw new Error(
            xn('The `showMoreLimit` option must be greater than `limit`.')
          )
        var b,
          S,
          R = W(c, 1)[0],
          w = function () {}
        function P() {
          w()
        }
        var x = !1
        function N() {
          return x ? p : f
        }
        return {
          $$type: 'ais.hierarchicalMenu',
          init: function (e) {
            var t = e.instantSearchInstance
            _(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            ;(w = (function (e, t) {
              return function () {
                ;(x = !x), t.render(e)
              }
            })(e, this)),
              _(
                D(
                  D({}, this.getWidgetRenderState(e)),
                  {},
                  { instantSearchInstance: t }
                ),
                !1
              )
          },
          dispose: function (e) {
            var t = e.state
            return (
              I(),
              t
                .removeHierarchicalFacet(R)
                .setQueryParameter('maxValuesPerFacet', void 0)
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                hierarchicalMenu: D(
                  D({}, e.hierarchicalMenu),
                  {},
                  j({}, R, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.state,
              r = e.createURL,
              i = e.instantSearchInstance,
              a = e.helper,
              s = [],
              o = !1
            if (
              ((b =
                b ||
                at({
                  instantSearchInstance: i,
                  helper: a,
                  attribute: R,
                  widgetType: this.$$type
                })),
              (S =
                S ||
                function (e) {
                  b('click', e), a.toggleFacetRefinement(R, e).search()
                }),
              t)
            ) {
              var c = t.getFacetValues(R, { sortBy: g }),
                u = c && !Array.isArray(c) && c.data ? c.data : [],
                l =
                  (n.maxValuesPerFacet || 0) > N()
                    ? u.length <= N()
                    : u.length < N()
              ;(o = m && (x || !l)),
                (s = y(
                  (function a(e) {
                    return e.slice(0, N()).map(function (e) {
                      var t = e.name,
                        n = e.path,
                        r = e.data,
                        i = D(
                          D({}, O(e, ['name', 'path', 'data'])),
                          {},
                          { label: t, value: n, data: null }
                        )
                      return Array.isArray(r) && (i.data = a(r)), i
                    })
                  })(u)
                ))
            }
            return {
              items: s,
              refine: S,
              canRefine: 0 < s.length,
              createURL: function (e) {
                return r(n.resetPage().toggleFacetRefinement(R, e))
              },
              sendEvent: b,
              widgetParams: d,
              isShowingMore: x,
              toggleShowMore: P,
              canToggleShowMore: o
            }
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.getHierarchicalFacetBreadcrumb(R)
            return n.length
              ? D(
                  D({}, e),
                  {},
                  {
                    hierarchicalMenu: D(
                      D({}, e.hierarchicalMenu),
                      {},
                      j({}, R, n)
                    )
                  }
                )
              : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = n.hierarchicalMenu && n.hierarchicalMenu[R]
            if (e.isHierarchicalFacet(R)) e.getHierarchicalFacetByName(R)
            var i = e
                .removeHierarchicalFacet(R)
                .addHierarchicalFacet({
                  name: R,
                  attributes: c,
                  separator: u,
                  rootPath: l,
                  showParentLevel: h
                }),
              a = i.maxValuesPerFacet || 0,
              s = Math.max(a, m ? p : f),
              o = i.setQueryParameter('maxValuesPerFacet', s)
            return r
              ? o.addHierarchicalFacetRefinement(R, r.join(u))
              : o.setQueryParameters({
                  hierarchicalFacetsRefinements: D(
                    D({}, o.hierarchicalFacetsRefinements),
                    {},
                    j({}, R, [])
                  )
                })
          }
        }
      }
    )
  }
  function wn(r, e) {
    var i = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(r, Nn()),
      function (a) {
        var s,
          o,
          e = a || {},
          t = e.escapeHTML,
          c = void 0 === t || t,
          n = e.transformItems,
          u =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n
        return {
          $$type: 'ais.hits',
          init: function (e) {
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !0
            )
          },
          render: function (e) {
            var t = this.getWidgetRenderState(e)
            t.sendEvent('view', t.hits),
              r(
                D(
                  D({}, t),
                  {},
                  { instantSearchInstance: e.instantSearchInstance }
                ),
                !1
              )
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { hits: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.helper,
              r = e.instantSearchInstance
            if (
              ((s =
                s ||
                ut({
                  instantSearchInstance: r,
                  index: n.getIndex(),
                  widgetType: this.$$type
                })),
              (o = o || lt({ index: n.getIndex(), widgetType: this.$$type })),
              !t)
            )
              return {
                hits: [],
                results: void 0,
                sendEvent: s,
                bindEvent: o,
                widgetParams: a
              }
            c && 0 < t.hits.length && (t.hits = Qe(t.hits))
            var i = t.hits.__escaped
            return (
              (t.hits = rt(t.hits, t.page, t.hitsPerPage)),
              (t.hits = it(t.hits, t.queryID)),
              (t.hits = u(t.hits)),
              (t.hits.__escaped = i),
              {
                hits: t.hits,
                results: t,
                sendEvent: s,
                bindEvent: o,
                widgetParams: a
              }
            )
          },
          dispose: function (e) {
            var t = e.state
            return (
              i(),
              c
                ? t.setQueryParameters(
                    Object.keys(We).reduce(function (e, t) {
                      return D(D({}, e), {}, j({}, t, void 0))
                    }, {})
                  )
                : t
            )
          },
          getWidgetSearchParameters: function (e) {
            return c ? e.setQueryParameters(We) : e
          }
        }
      }
    )
  }
  function Pn(e) {
    var t = e.method,
      n = e.results,
      r = e.hits,
      i = e.objectIDs,
      a = n.index,
      s = (function (n, e) {
        return e.map(function (t) {
          var e = Se(n, function (e) {
            return e.objectID === t
          })
          if (void 0 === e)
            throw new Error(
              'Could not find objectID "'.concat(
                t,
                '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'
              )
            )
          return e
        })
      })(r, i),
      o = (function (e) {
        var t = fe(
          e.map(function (e) {
            return e.__queryID
          })
        )
        if (1 < t.length)
          throw new Error(
            'Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.'
          )
        var n = t[0]
        if ('string' != typeof n)
          throw new Error(
            'Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7'
          )
        return n
      })(s)
    switch (t) {
      case 'clickedObjectIDsAfterSearch':
        return {
          index: a,
          queryID: o,
          objectIDs: i,
          positions: (function (e) {
            return e.map(function (e) {
              return e.__position
            })
          })(s)
        }
      case 'convertedObjectIDsAfterSearch':
        return { index: a, queryID: o, objectIDs: i }
      default:
        throw new Error(
          'Unsupported method passed to insights: "'.concat(t, '".')
        )
    }
  }
  var xn = et({ name: 'hierarchical-menu', connector: !0 }),
    Nn = et({ name: 'hits', connector: !0 })
  function _n(n) {
    function r(s) {
      return function (e, t) {
        var n = e.results,
          r = e.hits,
          i = e.instantSearchInstance
        if (n && r && i) {
          var a = (function (i, a, s) {
            return function (e, t) {
              if (!i) {
                var n = et({ name: 'instantsearch' })
                throw new Error(
                  n(
                    'The `insightsClient` option has not been provided to `instantsearch`.'
                  )
                )
              }
              if (!Array.isArray(t.objectIDs))
                throw new TypeError('Expected `objectIDs` to be an array.')
              var r = Pn({
                method: e,
                results: a,
                hits: s,
                objectIDs: t.objectIDs
              })
              i(e, D(D({}, r), t))
            }
          })(i.insightsClient, n, r)
          return s(D(D({}, e), {}, { insights: a }), t)
        }
        return s(e, t)
      }
    }
    return function (e, t) {
      return n(r(e), t)
    }
  }
  var In,
    Fn,
    Tn,
    Cn,
    En,
    kn = {},
    Ln = [],
    jn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i
  function Mn(e, t) {
    for (var n in t) e[n] = t[n]
    return e
  }
  function On(e) {
    var t = e.parentNode
    t && t.removeChild(e)
  }
  function An(e, t, n) {
    var r,
      i,
      a,
      s,
      o = arguments
    if (((t = Mn({}, t)), 3 < arguments.length))
      for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r])
    if ((null != n && (t.children = n), null != e && null != e.defaultProps))
      for (i in e.defaultProps) void 0 === t[i] && (t[i] = e.defaultProps[i])
    return (
      (s = t.key),
      null != (a = t.ref) && delete t.ref,
      null != s && delete t.key,
      Hn(e, t, s, a)
    )
  }
  function Hn(e, t, n, r) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __p: null,
      __b: 0,
      __e: null,
      l: null,
      __c: null,
      constructor: void 0
    }
    return In.vnode && In.vnode(i), i
  }
  function Dn(e) {
    return e.children
  }
  function Wn(e, t) {
    ;(this.props = e), (this.context = t)
  }
  function Bn(e, t) {
    if (null == t) return e.__p ? Bn(e.__p, e.__p.__k.indexOf(e) + 1) : null
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e
    return 'function' == typeof e.type ? Bn(e) : null
  }
  function Un(e) {
    var t, n
    if (null != (e = e.__p) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e
          break
        }
      return Un(e)
    }
  }
  function qn(e) {
    ;((!e.__d && (e.__d = !0) && 1 === Fn.push(e)) ||
      Cn !== In.debounceRendering) &&
      ((Cn = In.debounceRendering), (In.debounceRendering || Tn)(Qn))
  }
  function Qn() {
    var e, t, n, r, i, a, s, o
    for (
      Fn.sort(function (e, t) {
        return t.__v.__b - e.__v.__b
      });
      (e = Fn.pop());

    )
      e.__d &&
        ((r = n = void 0),
        (a = (i = (t = e).__v).__e),
        (s = t.__P),
        (o = t.u),
        (t.u = !1),
        s &&
          ((n = []),
          (r = Yn(
            s,
            i,
            Mn({}, i),
            t.__n,
            void 0 !== s.ownerSVGElement,
            null,
            n,
            o,
            null == a ? Bn(i) : a
          )),
          Xn(n, i),
          r != a && Un(i)))
  }
  function $n(t, n, e, r, i, a, s, o, c) {
    var u,
      l,
      d,
      h,
      f,
      m,
      p,
      g = (e && e.__k) || Ln,
      v = g.length
    if (
      (o == kn && (o = null != a ? a[0] : v ? Bn(e, 0) : null),
      (u = 0),
      (n.__k = Vn(n.__k, function (e) {
        if (null != e) {
          if (
            ((e.__p = n),
            (e.__b = n.__b + 1),
            null === (d = g[u]) || (d && e.key == d.key && e.type === d.type))
          )
            g[u] = void 0
          else
            for (l = 0; l < v; l++) {
              if ((d = g[l]) && e.key == d.key && e.type === d.type) {
                g[l] = void 0
                break
              }
              d = null
            }
          if (
            ((h = Yn(t, e, (d = d || kn), r, i, a, s, null, o, c)),
            (l = e.ref) && d.ref != l && (p = p || []).push(l, e.__c || h, e),
            null != h)
          ) {
            if ((null == m && (m = h), null != e.l)) (h = e.l), (e.l = null)
            else if (a == d || h != o || null == h.parentNode) {
              e: if (null == o || o.parentNode !== t) t.appendChild(h)
              else {
                for (f = o, l = 0; (f = f.nextSibling) && l < v; l += 2)
                  if (f == h) break e
                t.insertBefore(h, o)
              }
              'option' == n.type && (t.value = '')
            }
            ;(o = h.nextSibling), 'function' == typeof n.type && (n.l = h)
          }
        }
        return u++, e
      })),
      (n.__e = m),
      null != a && 'function' != typeof n.type)
    )
      for (u = a.length; u--; ) null != a[u] && On(a[u])
    for (u = v; u--; ) null != g[u] && Zn(g[u], g[u])
    if (p) for (u = 0; u < p.length; u++) Gn(p[u], p[++u], p[++u])
  }
  function Vn(e, t, n) {
    if ((null == n && (n = []), null == e || 'boolean' == typeof e))
      t && n.push(t(null))
    else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) Vn(e[r], t, n)
    else
      n.push(
        t
          ? t(
              (function (e) {
                if (null == e || 'boolean' == typeof e) return null
                if ('string' == typeof e || 'number' == typeof e)
                  return Hn(null, e, null, null)
                if (null == e.__e && null == e.__c) return e
                var t = Hn(e.type, e.props, e.key, null)
                return (t.__e = e.__e), t
              })(e)
            )
          : e
      )
    return n
  }
  function Kn(e, t, n) {
    '-' === t[0]
      ? e.setProperty(t, n)
      : (e[t] =
          'number' == typeof n && !1 === jn.test(t)
            ? n + 'px'
            : null == n
            ? ''
            : n)
  }
  function zn(e, t, n, r, i) {
    var a, s, o, c, u
    if (
      'key' ===
        (t = i
          ? 'className' === t
            ? 'class'
            : t
          : 'class' === t
          ? 'className'
          : t) ||
      'children' === t
    );
    else if ('style' === t)
      if (((a = e.style), 'string' == typeof n)) a.cssText = n
      else {
        if (('string' == typeof r && ((a.cssText = ''), (r = null)), r))
          for (s in r) (n && s in n) || Kn(a, s, '')
        if (n) for (o in n) (r && n[o] === r[o]) || Kn(a, o, n[o])
      }
    else
      'o' === t[0] && 'n' === t[1]
        ? ((c = t !== (t = t.replace(/Capture$/, ''))),
          (t = ((u = t.toLowerCase()) in e ? u : t).slice(2)),
          n
            ? (r || e.addEventListener(t, Jn, c), ((e.t || (e.t = {}))[t] = n))
            : e.removeEventListener(t, Jn, c))
        : 'list' !== t && 'tagName' !== t && 'form' !== t && !i && t in e
        ? (e[t] = null == n ? '' : n)
        : 'function' != typeof n &&
          'dangerouslySetInnerHTML' !== t &&
          (t !== (t = t.replace(/^xlink:?/, ''))
            ? null == n || !1 === n
              ? e.removeAttributeNS(
                  'http://www.w3.org/1999/xlink',
                  t.toLowerCase()
                )
              : e.setAttributeNS(
                  'http://www.w3.org/1999/xlink',
                  t.toLowerCase(),
                  n
                )
            : null == n || !1 === n
            ? e.removeAttribute(t)
            : e.setAttribute(t, n))
  }
  function Jn(e) {
    return this.t[e.type](In.event ? In.event(e) : e)
  }
  function Yn(e, t, n, r, i, a, s, o, c, u) {
    var l,
      d,
      h,
      f,
      m,
      p,
      g,
      v,
      y,
      b,
      S = t.type
    if (void 0 !== t.constructor) return null
    ;(l = In.__b) && l(t)
    try {
      e: if ('function' == typeof S) {
        if (
          ((v = t.props),
          (y = (l = S.contextType) && r[l.__c]),
          (b = l ? (y ? y.props.value : l.__p) : r),
          n.__c
            ? (g = (d = t.__c = n.__c).__p = d.__E)
            : ('prototype' in S && S.prototype.render
                ? (t.__c = d = new S(v, b))
                : ((t.__c = d = new Wn(v, b)),
                  (d.constructor = S),
                  (d.render = er)),
              y && y.sub(d),
              (d.props = v),
              d.state || (d.state = {}),
              (d.context = b),
              (d.__n = r),
              (h = d.__d = !0),
              (d.__h = [])),
          null == d.__s && (d.__s = d.state),
          null != S.getDerivedStateFromProps &&
            Mn(
              d.__s == d.state ? (d.__s = Mn({}, d.__s)) : d.__s,
              S.getDerivedStateFromProps(v, d.__s)
            ),
          h)
        )
          null == S.getDerivedStateFromProps &&
            null != d.componentWillMount &&
            d.componentWillMount(),
            null != d.componentDidMount && s.push(d)
        else {
          if (
            (null == S.getDerivedStateFromProps &&
              null == o &&
              null != d.componentWillReceiveProps &&
              d.componentWillReceiveProps(v, b),
            !o &&
              null != d.shouldComponentUpdate &&
              !1 === d.shouldComponentUpdate(v, d.__s, b))
          ) {
            for (
              d.props = v,
                d.state = d.__s,
                d.__d = !1,
                (d.__v = t).__e = null != c ? (c !== n.__e ? c : n.__e) : null,
                t.__k = n.__k,
                l = 0;
              l < t.__k.length;
              l++
            )
              t.__k[l] && (t.__k[l].__p = t)
            break e
          }
          null != d.componentWillUpdate && d.componentWillUpdate(v, d.__s, b)
        }
        for (
          f = d.props,
            m = d.state,
            d.context = b,
            d.props = v,
            d.state = d.__s,
            (l = In.__r) && l(t),
            d.__d = !1,
            d.__v = t,
            d.__P = e,
            l = d.render(d.props, d.state, d.context),
            t.__k = Vn(
              null != l && l.type == Dn && null == l.key ? l.props.children : l
            ),
            null != d.getChildContext &&
              (r = Mn(Mn({}, r), d.getChildContext())),
            h ||
              null == d.getSnapshotBeforeUpdate ||
              (p = d.getSnapshotBeforeUpdate(f, m)),
            $n(e, t, n, r, i, a, s, c, u),
            d.base = t.__e;
          (l = d.__h.pop());

        )
          d.__s && (d.state = d.__s), l.call(d)
        h ||
          null == f ||
          null == d.componentDidUpdate ||
          d.componentDidUpdate(f, m, p),
          g && (d.__E = d.__p = null)
      } else
        t.__e = (function (e, t, n, r, i, a, s, o) {
          var c,
            u,
            l,
            d,
            h = n.props,
            f = t.props
          if (((i = 'svg' === t.type || i), null == e && null != a))
            for (c = 0; c < a.length; c++)
              if (
                null != (u = a[c]) &&
                (null === t.type ? 3 === u.nodeType : u.localName === t.type)
              ) {
                ;(e = u), (a[c] = null)
                break
              }
          if (null == e) {
            if (null === t.type) return document.createTextNode(f)
            ;(e = i
              ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
              : document.createElement(t.type)),
              (a = null)
          }
          return (
            null === t.type
              ? h !== f && (null != a && (a[a.indexOf(e)] = null), (e.data = f))
              : t !== n &&
                (null != a && (a = Ln.slice.call(e.childNodes)),
                (l = (h = n.props || kn).dangerouslySetInnerHTML),
                (d = f.dangerouslySetInnerHTML),
                o ||
                  ((d || l) &&
                    ((d && l && d.__html == l.__html) ||
                      (e.innerHTML = (d && d.__html) || ''))),
                (function (e, t, n, r, i) {
                  var a
                  for (a in n) a in t || zn(e, a, null, n[a], r)
                  for (a in t)
                    (i && 'function' != typeof t[a]) ||
                      'value' === a ||
                      'checked' === a ||
                      n[a] === t[a] ||
                      zn(e, a, t[a], n[a], r)
                })(e, f, h, i, o),
                (t.__k = t.props.children),
                d ||
                  $n(e, t, n, r, 'foreignObject' !== t.type && i, a, s, kn, o),
                o ||
                  ('value' in f &&
                    void 0 !== f.value &&
                    f.value !== e.value &&
                    (e.value = null == f.value ? '' : f.value),
                  'checked' in f &&
                    void 0 !== f.checked &&
                    f.checked !== e.checked &&
                    (e.checked = f.checked))),
            e
          )
        })(n.__e, t, n, r, i, a, s, u)
      ;(l = In.diffed) && l(t)
    } catch (e) {
      In.__e(e, t, n)
    }
    return t.__e
  }
  function Xn(e, t) {
    for (var n; (n = e.pop()); )
      try {
        n.componentDidMount()
      } catch (e) {
        In.__e(e, n.__v)
      }
    In.__c && In.__c(t)
  }
  function Gn(e, t, n) {
    try {
      'function' == typeof e ? e(t) : (e.current = t)
    } catch (e) {
      In.__e(e, n)
    }
  }
  function Zn(e, t, n) {
    var r, i, a
    if (
      (In.unmount && In.unmount(e),
      (r = e.ref) && Gn(r, null, t),
      n || 'function' == typeof e.type || (n = null != (i = e.__e)),
      (e.__e = e.l = null),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount()
        } catch (e) {
          In.__e(e, t)
        }
      r.base = r.__P = null
    }
    if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && Zn(r[a], t, n)
    null != i && On(i)
  }
  function er(e, t, n) {
    return this.constructor(e, n)
  }
  function tr(e, t, n) {
    var r, i, a
    In.__p && In.__p(e, t),
      (i = (r = n === En) ? null : (n && n.__k) || t.__k),
      (e = An(Dn, null, [e])),
      (a = []),
      Yn(
        t,
        r ? (t.__k = e) : ((n || t).__k = e),
        i || kn,
        kn,
        void 0 !== t.ownerSVGElement,
        n && !r ? [n] : i ? null : Ln.slice.call(t.childNodes),
        a,
        !1,
        n || kn,
        r
      ),
      Xn(a, e)
  }
  ;(In = {}),
    (Wn.prototype.setState = function (e, t) {
      var n =
        (this.__s !== this.state && this.__s) || (this.__s = Mn({}, this.state))
      ;('function' == typeof e && !(e = e(n, this.props))) || Mn(n, e),
        null != e &&
          this.__v &&
          ((this.u = !1), t && this.__h.push(t), qn(this))
    }),
    (Wn.prototype.forceUpdate = function (e) {
      this.__v && (e && this.__h.push(e), (this.u = !0), qn(this))
    }),
    (Wn.prototype.render = Dn),
    (Fn = []),
    (Tn =
      'function' == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Cn = In.debounceRendering),
    (In.__e = function (e, t, n) {
      for (var r; (t = t.__p); )
        if ((r = t.__c) && !r.__p)
          try {
            if (r.constructor && null != r.constructor.getDerivedStateFromError)
              r.setState(r.constructor.getDerivedStateFromError(e))
            else {
              if (null == r.componentDidCatch) continue
              r.componentDidCatch(e)
            }
            return qn((r.__E = r))
          } catch (t) {
            e = t
          }
      throw e
    }),
    (En = kn)
  function nr(e, t, n) {
    for (var r = e; r && !n(r); ) {
      if (r === t) return null
      r = r.parentElement
    }
    return r
  }
  function rr(e) {
    return function (o) {
      return An(
        'div',
        {
          onClick: function (e) {
            if (o.sendEvent) {
              var t = nr(e.target, e.currentTarget, function (e) {
                return e.hasAttribute('data-insights-event')
              })
              if (t) {
                var n = (function (e) {
                  var t = e.getAttribute('data-insights-event')
                  if ('string' != typeof t)
                    throw new Error(
                      'The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.'
                    )
                  try {
                    return ot(t)
                  } catch (e) {
                    throw new Error(
                      'The insights middleware was unable to parse `data-insights-event`.'
                    )
                  }
                })(t)
                o.sendEvent(n)
              }
            }
            var r = nr(e.target, e.currentTarget, function (e) {
              return (function (e) {
                return e.hasAttribute('data-insights-method')
              })(e)
            })
            if (r) {
              var i = (function (e) {
                  var t = e.getAttribute('data-insights-method'),
                    n = e.getAttribute('data-insights-payload')
                  if ('string' != typeof n)
                    throw new Error(
                      'The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.'
                    )
                  try {
                    return { method: t, payload: ot(n) }
                  } catch (e) {
                    throw new Error(
                      'The insights helper was unable to parse `data-insights-payload`.'
                    )
                  }
                })(r),
                a = i.method,
                s = i.payload
              o.insights(a, s)
            }
          }
        },
        An(e, o)
      )
    }
  }
  function ir(l, e) {
    var d = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(l, sr()),
      function (a) {
        var e = a || {},
          t = e.items,
          n = e.transformItems,
          s =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n
        if (!Array.isArray(t))
          throw new Error(sr('The `items` option expects an array of objects.'))
        var o = t,
          r = o.filter(function (e) {
            return !0 === e.default
          })
        if (0 === r.length)
          throw new Error(sr('A default value must be specified in `items`.'))
        if (1 < r.length)
          throw new Error(
            sr('More than one default value is specified in `items`.')
          )
        var i = r[0],
          c = function (t) {
            return function (e) {
              return e || 0 === e
                ? t.setQueryParameter('hitsPerPage', e).search()
                : t.setQueryParameter('hitsPerPage', void 0).search()
            }
          },
          u = function (e) {
            var t = e.state,
              n = e.createURL
            return function (e) {
              return n(
                t
                  .resetPage()
                  .setQueryParameter('hitsPerPage', e || 0 === e ? e : void 0)
              )
            }
          }
        return {
          $$type: 'ais.hitsPerPage',
          init: function (e) {
            var t = e.state,
              n = e.instantSearchInstance
            o.some(function (e) {
              return Number(t.hitsPerPage) === Number(e.value)
            }) || (o = [{ value: '', label: '' }].concat(P(o))),
              l(
                D(
                  D({}, this.getWidgetRenderState(e)),
                  {},
                  { instantSearchInstance: n }
                ),
                !0
              )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            l(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return d(), t.setQueryParameter('hitsPerPage', void 0)
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { hitsPerPage: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.state,
              n = e.results,
              r = e.createURL,
              i = e.helper
            return {
              items: s(
                (function (e) {
                  var t = e.hitsPerPage
                  return o.map(function (e) {
                    return D(
                      D({}, e),
                      {},
                      { isRefined: Number(e.value) === Number(t) }
                    )
                  })
                })(t)
              ),
              refine: c(i),
              createURL: u({ state: t, createURL: r }),
              hasNoResults: !n || 0 === n.nbHits,
              widgetParams: a
            }
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.hitsPerPage
            return void 0 === n || n === i.value
              ? e
              : D(D({}, e), {}, { hitsPerPage: n })
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState
            return e.setQueryParameters({
              hitsPerPage: n.hitsPerPage || i.value
            })
          }
        }
      }
    )
  }
  var ar = _n(wn),
    sr = et({ name: 'hits-per-page', connector: !0 }),
    or = et({ name: 'infinite-hits', connector: !0 })
  function cr(e) {
    var t = e || {}
    t.page
    return O(t, ['page'])
  }
  function ur(i, e) {
    var a = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(i, or()),
      function (f) {
        function m(e, t) {
          var n = e.page,
            r = void 0 === n ? 0 : n,
            i = Object.keys(t).map(Number)
          return 0 === i.length ? r : Math.min.apply(Math, [r].concat(P(i)))
        }
        function p(e, t) {
          var n = e.page,
            r = void 0 === n ? 0 : n,
            i = Object.keys(t).map(Number)
          return 0 === i.length ? r : Math.max.apply(Math, [r].concat(P(i)))
        }
        var g,
          v,
          y,
          b,
          e = f || {},
          t = e.escapeHTML,
          S = void 0 === t || t,
          n = e.transformItems,
          R =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n,
          r = e.cache,
          w =
            void 0 === r
              ? (function () {
                  var r = null,
                    i = void 0
                  return {
                    read: function (e) {
                      var t = e.state
                      return Le(i, cr(t)) ? r : null
                    },
                    write: function (e) {
                      var t = e.state,
                        n = e.hits
                      ;(i = cr(t)), (r = n)
                    }
                  }
                })()
              : r
        return {
          $$type: 'ais.infiniteHits',
          init: function (e) {
            i(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance,
              n = this.getWidgetRenderState(e)
            y('view', n.currentPageHits),
              i(D(D({}, n), {}, { instantSearchInstance: t }), !1)
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { infiniteHits: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t,
              n = e.results,
              r = e.helper,
              i = e.state,
              a = e.instantSearchInstance,
              s = [],
              o = w.read({ state: i }) || {}
            if (n) {
              var c = i.page,
                u = void 0 === c ? 0 : c
              S && 0 < n.hits.length && (n.hits = Qe(n.hits))
              var l = n.hits.__escaped
              ;(n.hits = rt(n.hits, n.page, n.hitsPerPage)),
                (n.hits = it(n.hits, n.queryID)),
                (n.hits = R(n.hits)),
                (n.hits.__escaped = l),
                void 0 === o[u] &&
                  ((o[u] = n.hits), w.write({ state: i, hits: o })),
                (s = n.hits),
                (t = 0 === m(i, o))
            } else
              (g = (function (e) {
                return function () {
                  e.overrideStateWithoutTriggeringChangeEvent(
                    D(
                      D({}, e.state),
                      {},
                      { page: m(e.state, w.read({ state: e.state }) || {}) - 1 }
                    )
                  ).searchWithoutTriggeringOnStateChange()
                }
              })(r)),
                (v = (function (e) {
                  return function () {
                    e.setPage(
                      p(e.state, w.read({ state: e.state }) || {}) + 1
                    ).search()
                  }
                })(r)),
                (y = ut({
                  instantSearchInstance: a,
                  index: r.getIndex(),
                  widgetType: this.$$type
                })),
                (b = lt({ index: r.getIndex(), widgetType: this.$$type })),
                (t = void 0 === r.state.page || 0 === m(r.state, o))
            var d = (function (n) {
                return Object.keys(n)
                  .map(Number)
                  .sort(function (e, t) {
                    return e - t
                  })
                  .reduce(function (e, t) {
                    return e.concat(n[t])
                  }, [])
              })(o),
              h = !n || n.nbPages <= p(i, o) + 1
            return {
              hits: d,
              currentPageHits: s,
              sendEvent: y,
              bindEvent: b,
              results: n,
              showPrevious: g,
              showMore: v,
              isFirstPage: t,
              isLastPage: h,
              widgetParams: f
            }
          },
          dispose: function (e) {
            var t = e.state
            a()
            var n = t.setQueryParameter('page', void 0)
            return S
              ? n.setQueryParameters(
                  Object.keys(We).reduce(function (e, t) {
                    return D(D({}, e), {}, j({}, t, void 0))
                  }, {})
                )
              : n
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.page || 0
            return n ? D(D({}, e), {}, { page: n + 1 }) : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = e
            S && (r = e.setQueryParameters(We))
            var i = n.page ? n.page - 1 : 0
            return r.setQueryParameter('page', i)
          }
        }
      }
    )
  }
  function lr(s, e) {
    var o = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(s, fr()),
      function (u) {
        var l,
          d,
          h,
          e = u || {},
          f = e.attribute,
          t = e.limit,
          c = void 0 === t ? 10 : t,
          n = e.showMore,
          m = void 0 !== n && n,
          r = e.showMoreLimit,
          p = void 0 === r ? 20 : r,
          i = e.sortBy,
          g = void 0 === i ? ['isRefined', 'name:asc'] : i,
          a = e.transformItems,
          v =
            void 0 === a
              ? function (e) {
                  return e
                }
              : a
        if (!f) throw new Error(fr('The `attribute` option is required.'))
        if (!0 === m && p <= c)
          throw new Error(
            fr('The `showMoreLimit` option must be greater than `limit`.')
          )
        var y = !1,
          b = function () {}
        function S() {
          b()
        }
        function R() {
          return y ? p : c
        }
        return {
          $$type: 'ais.menu',
          init: function (e) {
            var t = e.instantSearchInstance
            s(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            s(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return (
              o(),
              t
                .removeHierarchicalFacet(f)
                .setQueryParameter('maxValuesPerFacet', void 0)
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                menu: D(
                  D({}, e.menu),
                  {},
                  j({}, f, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.createURL,
              r = e.instantSearchInstance,
              i = e.helper,
              a = [],
              s = !1
            if (
              ((l =
                l ||
                at({
                  instantSearchInstance: r,
                  helper: i,
                  attribute: f,
                  widgetType: this.$$type
                })),
              (d =
                d ||
                function (e) {
                  return n(i.state.resetPage().toggleFacetRefinement(f, e))
                }),
              (h =
                h ||
                function (e) {
                  var t = W(i.getHierarchicalFacetBreadcrumb(f), 1)[0]
                  l('click', e || t),
                    i.toggleFacetRefinement(f, e || t).search()
                }),
              e.results &&
                (b = (function (e, t) {
                  return function () {
                    ;(y = !y), t.render(e)
                  }
                })(e, this)),
              t)
            ) {
              var o = t.getFacetValues(f, { sortBy: g }),
                c = o && !Array.isArray(o) && o.data ? o.data : []
              ;(s = m && (y || c.length > R())),
                (a = v(
                  c.slice(0, R()).map(function (e) {
                    var t = e.name,
                      n = e.path
                    return D(
                      D({}, O(e, ['name', 'path'])),
                      {},
                      { label: t, value: n }
                    )
                  })
                ))
            }
            return {
              items: a,
              createURL: d,
              refine: h,
              sendEvent: l,
              canRefine: 0 < a.length,
              widgetParams: u,
              isShowingMore: y,
              toggleShowMore: S,
              canToggleShowMore: s
            }
          },
          getWidgetUiState: function (e, t) {
            var n = W(
              t.searchParameters.getHierarchicalFacetBreadcrumb(f),
              1
            )[0]
            return n
              ? D(D({}, e), {}, { menu: D(D({}, e.menu), {}, j({}, f, n)) })
              : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = n.menu && n.menu[f],
              i = e
                .removeHierarchicalFacet(f)
                .addHierarchicalFacet({ name: f, attributes: [f] }),
              a = i.maxValuesPerFacet || 0,
              s = Math.max(a, m ? p : c),
              o = i.setQueryParameter('maxValuesPerFacet', s)
            return r
              ? o.addHierarchicalFacetRefinement(f, r)
              : o.setQueryParameters({
                  hierarchicalFacetsRefinements: D(
                    D({}, o.hierarchicalFacetsRefinements),
                    {},
                    j({}, f, [])
                  )
                })
          }
        }
      }
    )
  }
  function dr(i, e) {
    var a = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(i, mr()),
      function (s) {
        var e = s || {},
          t = e.attribute,
          u = void 0 === t ? '' : t,
          n = e.items,
          o = void 0 === n ? [] : n,
          r = e.transformItems,
          c =
            void 0 === r
              ? function (e) {
                  return e
                }
              : r
        if ('' === u) throw new Error(mr('The `attribute` option is required.'))
        if (!o || 0 === o.length)
          throw new Error(mr('The `items` option expects an array of objects.'))
        var l = {}
        return {
          $$type: pr,
          init: function (e) {
            var t = e.instantSearchInstance
            i(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            i(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return a(), t.clearRefinements(u)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.getNumericRefinements(u),
              r = n['='] && n['='][0]
            if (r || 0 === r)
              return D(
                D({}, e),
                {},
                {
                  numericMenu: D(
                    D({}, e.numericMenu),
                    {},
                    j({}, u, ''.concat(n['=']))
                  )
                }
              )
            var i = (n['>='] && n['>='][0]) || '',
              a = (n['<='] && n['<='][0]) || ''
            return '' === i && '' === a
              ? e
              : D(
                  D({}, e),
                  {},
                  {
                    numericMenu: D(
                      D({}, e.numericMenu),
                      {},
                      j({}, u, ''.concat(i, ':').concat(a))
                    )
                  }
                )
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = n.numericMenu && n.numericMenu[u],
              i = e.clearRefinements(u)
            if (!r)
              return i.setQueryParameters({
                numericRefinements: D(
                  D({}, i.numericRefinements),
                  {},
                  j({}, u, {})
                )
              })
            if (-1 === r.indexOf(':'))
              return i.addNumericRefinement(u, '=', Number(r))
            var a = W(r.split(':').map(parseFloat), 2),
              s = a[0],
              o = a[1],
              c = Te(s) ? i.addNumericRefinement(u, '>=', s) : i
            return Te(o) ? c.addNumericRefinement(u, '<=', o) : c
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                numericMenu: D(
                  D({}, e.numericMenu),
                  {},
                  j({}, u, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.state,
              r = e.instantSearchInstance,
              i = e.helper,
              a = e.createURL
            return (
              l.refine ||
                (l.refine = function (e) {
                  var t = vr(i.state, u, e)
                  l.sendEvent('click', e), i.setState(t).search()
                }),
              l.createURL ||
                (l.createURL = function (t) {
                  return function (e) {
                    return a(vr(t, u, e))
                  }
                }),
              l.sendEvent ||
                (l.sendEvent = (function (e) {
                  var c = e.instantSearchInstance,
                    u = e.helper,
                    l = e.attribute
                  return function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n]
                    if (1 !== t.length) {
                      var r = t[0],
                        i = t[1],
                        a = t[2],
                        s = void 0 === a ? 'Filter Applied' : a
                      if ('click' === r) {
                        var o = dt(vr(u.state, l, i), l)
                        o &&
                          0 < o.length &&
                          c.sendEventToInsights({
                            insightsMethod: 'clickedFilters',
                            widgetType: pr,
                            eventType: r,
                            payload: {
                              eventName: s,
                              index: u.getIndex(),
                              filters: o
                            },
                            attribute: l
                          })
                      }
                    } else c.sendEventToInsights(t[0])
                  }
                })({ instantSearchInstance: r, helper: i, attribute: u })),
              {
                createURL: l.createURL(n),
                items: c(
                  (function (i) {
                    return o.map(function (e) {
                      var t = e.start,
                        n = e.end,
                        r = e.label
                      return {
                        label: r,
                        value: encodeURI(JSON.stringify({ start: t, end: n })),
                        isRefined: gr(i, u, { start: t, end: n, label: r })
                      }
                    })
                  })(n)
                ),
                hasNoResults: !t || 0 === t.nbHits,
                refine: l.refine,
                sendEvent: l.sendEvent,
                widgetParams: s
              }
            )
          }
        }
      }
    )
  }
  var hr = _n(ur),
    fr = et({ name: 'menu', connector: !0 }),
    mr = et({ name: 'numeric-menu', connector: !0 }),
    pr = 'ais.numericMenu'
  function gr(e, t, n) {
    var r = e.getNumericRefinements(t)
    return void 0 !== n.start && void 0 !== n.end && n.start === n.end
      ? yr(r, '=', n.start)
      : void 0 !== n.start
      ? yr(r, '>=', n.start)
      : void 0 !== n.end
      ? yr(r, '<=', n.end)
      : void 0 === n.start &&
        void 0 === n.end &&
        Object.keys(r).every(function (e) {
          return 0 === (r[e] || []).length
        })
  }
  function vr(e, t, n) {
    var r = e,
      i = JSON.parse(decodeURI(n)),
      a = r.getNumericRefinements(t)
    if (void 0 === i.start && void 0 === i.end)
      return r.removeNumericRefinement(t)
    if (
      (gr(r, t, i) || (r = r.removeNumericRefinement(t)),
      void 0 !== i.start && void 0 !== i.end)
    ) {
      if (i.start > i.end)
        throw new Error('option.start should be > to option.end')
      if (i.start === i.end)
        return (r = yr(a, '=', i.start)
          ? r.removeNumericRefinement(t, '=', i.start)
          : r.addNumericRefinement(t, '=', i.start))
    }
    return (
      void 0 !== i.start &&
        (r = yr(a, '>=', i.start)
          ? r.removeNumericRefinement(t, '>=', i.start)
          : r.addNumericRefinement(t, '>=', i.start)),
      void 0 !== i.end &&
        (r = yr(a, '<=', i.end)
          ? r.removeNumericRefinement(t, '<=', i.end)
          : r.addNumericRefinement(t, '<=', i.end)),
      'number' == typeof r.page && (r.page = 0),
      r
    )
  }
  function yr(e, t, n) {
    return void 0 !== e[t] && e[t].includes(n)
  }
  function br(n, e) {
    var r = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(n, Rr()),
      function (o) {
        var e = o || {},
          c = e.totalPages,
          t = e.padding,
          u = new Sr({
            currentPage: 0,
            total: 0,
            padding: void 0 === t ? 3 : t
          }),
          l = {}
        return {
          $$type: 'ais.pagination',
          init: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return r(), t.setQueryParameter('page', void 0)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.page || 0
            return n ? D(D({}, e), {}, { page: n + 1 }) : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = n.page ? n.page - 1 : 0
            return e.setQueryParameter('page', r)
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.helper,
              r = e.createURL
            l.refine ||
              (l.refine = function (e) {
                n.setPage(e), n.search()
              }),
              l.createURL ||
                (l.createURL = function (t) {
                  return function (e) {
                    return r(t.setPage(e))
                  }
                })
            var i = n.state,
              a = i.page || 0,
              s = (function (e) {
                var t = e.nbPages
                return void 0 !== c ? Math.min(c, t) : t
              })(t || { nbPages: 0 })
            return (
              (u.currentPage = a),
              (u.total = s),
              {
                createURL: l.createURL(i),
                refine: l.refine,
                canRefine: 1 < s,
                currentRefinement: a,
                nbHits: (null == t ? void 0 : t.nbHits) || 0,
                nbPages: s,
                pages: t ? u.pages() : [],
                isFirstPage: u.isFirstPage(),
                isLastPage: u.isLastPage(),
                widgetParams: o
              }
            )
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { pagination: this.getWidgetRenderState(t) })
          }
        }
      }
    )
  }
  var Sr = (function () {
      function t(e) {
        k(this, t),
          j(this, 'currentPage', void 0),
          j(this, 'total', void 0),
          j(this, 'padding', void 0),
          (this.currentPage = e.currentPage),
          (this.total = e.total),
          (this.padding = e.padding)
      }
      return (
        L(t, [
          {
            key: 'pages',
            value: function () {
              var e = this.total,
                t = this.currentPage,
                n = this.padding
              if (0 === e) return [0]
              var r = this.nbPagesDisplayed(n, e)
              if (r === e) return Ee({ end: e })
              var i = this.calculatePaddingLeft(t, n, e, r)
              return Ee({ start: t - i, end: t + (r - i) })
            }
          },
          {
            key: 'nbPagesDisplayed',
            value: function (e, t) {
              return Math.min(2 * e + 1, t)
            }
          },
          {
            key: 'calculatePaddingLeft',
            value: function (e, t, n, r) {
              return e <= t ? e : n - t <= e ? r - (n - e) : t
            }
          },
          {
            key: 'isLastPage',
            value: function () {
              return this.currentPage === this.total - 1 || 0 === this.total
            }
          },
          {
            key: 'isFirstPage',
            value: function () {
              return 0 === this.currentPage
            }
          }
        ]),
        t
      )
    })(),
    Rr = et({ name: 'pagination', connector: !0 }),
    wr = et(
      { name: 'range-input', connector: !0 },
      { name: 'range-slider', connector: !0 }
    ),
    Pr = 'ais.range'
  function xr(e) {
    var t = e.min,
      n = e.max,
      r = e.precision,
      i = Math.pow(10, r)
    return {
      min: t ? Math.floor(t * i) / i : t,
      max: n ? Math.ceil(n * i) / i : n
    }
  }
  function Nr(r, e) {
    var i = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(r, wr()),
      function (o) {
        var e = o || {},
          t = e.attribute,
          w = void 0 === t ? '' : t,
          P = e.min,
          x = e.max,
          n = e.precision,
          N = void 0 === n ? 0 : n
        if (!w) throw new Error(wr('The `attribute` option is required.'))
        if (Te(P) && Te(x) && x < P)
          throw new Error(wr("The `max` option can't be lower than `min`."))
        function f(e, t, n, r) {
          var i,
            a,
            s = e.state,
            o = t.min,
            c = t.max,
            u = W(s.getNumericRefinement(w, '>=') || [], 1)[0],
            l = W(s.getNumericRefinement(w, '<=') || [], 1)[0],
            d = void 0 === n || '' === n,
            h = void 0 === r || '' === r,
            f = xr({
              min: d ? void 0 : parseFloat(n),
              max: h ? void 0 : parseFloat(r),
              precision: N
            }),
            m = f.min,
            p = f.max
          ;(i = Te(P) || o !== m ? (Te(P) && d ? P : m) : void 0),
            (a = Te(x) || c !== p ? (Te(x) && h ? x : p) : void 0)
          var g = void 0 === i,
            v = Te(o) && o <= i,
            y = g || (Te(i) && (!Te(o) || v)),
            b = void 0 === a,
            S = Te(a) && a <= c,
            R = b || (Te(a) && (!Te(c) || S))
          return (u !== i || l !== a) && y && R
            ? ((s = s.removeNumericRefinement(w)),
              Te(i) && (s = s.addNumericRefinement(w, '>=', i)),
              Te(a) && (s = s.addNumericRefinement(w, '<=', a)),
              s)
            : null
        }
        function m(e, t, n, r) {
          var i = 3 < arguments.length && void 0 !== r ? r : 'Filter Applied',
            a = dt(e, w)
          a &&
            0 < a.length &&
            t.sendEventToInsights({
              insightsMethod: 'clickedFilters',
              widgetType: Pr,
              eventType: 'click',
              payload: { eventName: i, index: n.getIndex(), filters: a },
              attribute: w
            })
        }
        var c = {
          from: function (e) {
            return e.toLocaleString()
          },
          to: function (e) {
            return (function (e) {
              return Number(Number(e).toFixed(N))
            })(e).toLocaleString()
          }
        }
        function u(i, a, s) {
          return function () {
            var e = W(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : [void 0, void 0],
                2
              ),
              t = e[0],
              n = e[1],
              r = f(a, s, t, n)
            r && (m(r, i, a), a.setState(r).search())
          }
        }
        return {
          $$type: Pr,
          init: function (e) {
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !0
            )
          },
          render: function (e) {
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !1
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                range: D(
                  D({}, e.range),
                  {},
                  j({}, w, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.helper,
              r = e.instantSearchInstance,
              i = Se((t && t.disjunctiveFacets) || [], function (e) {
                return e.name === w
              }),
              a = (function (e) {
                return xr({
                  min: Te(P) ? P : Te(e.min) ? e.min : 0,
                  max: Te(x) ? x : Te(e.max) ? e.max : 0,
                  precision: N
                })
              })((i && i.stats) || { min: void 0, max: void 0 }),
              s = (function (e) {
                var t = W(e.getNumericRefinement(w, '>=') || [], 1)[0],
                  n = W(e.getNumericRefinement(w, '<=') || [], 1)[0]
                return [Te(t) ? t : -1 / 0, Te(n) ? n : 1 / 0]
              })(n)
            return {
              refine: u(r, n, t ? a : { min: void 0, max: void 0 }),
              canRefine: a.min !== a.max,
              format: c,
              range: a,
              sendEvent: (function (l, d, h) {
                return function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  if (1 !== t.length) {
                    var r = t[0],
                      i = t[1],
                      a = t[2]
                    if ('click' === r) {
                      var s = W(i, 2),
                        o = s[0],
                        c = s[1],
                        u = f(d, h, o, c)
                      m(u, l, d, a)
                    }
                  } else l.sendEventToInsights(t[0])
                }
              })(r, n, a),
              widgetParams: D(D({}, o), {}, { precision: N }),
              start: s
            }
          },
          dispose: function (e) {
            var t = e.state
            return i(), t.removeDisjunctiveFacet(w).removeNumericRefinement(w)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.getNumericRefinements(w),
              r = n['>='],
              i = void 0 === r ? [] : r,
              a = n['<='],
              s = void 0 === a ? [] : a
            return 0 === i.length && 0 === s.length
              ? e
              : D(
                  D({}, e),
                  {},
                  {
                    range: D(
                      D({}, e.range),
                      {},
                      j({}, w, ''.concat(i, ':').concat(s))
                    )
                  }
                )
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = e
                .addDisjunctiveFacet(w)
                .setQueryParameters({
                  numericRefinements: D(
                    D({}, e.numericRefinements),
                    {},
                    j({}, w, {})
                  )
                })
            Te(P) && (r = r.addNumericRefinement(w, '>=', P)),
              Te(x) && (r = r.addNumericRefinement(w, '<=', x))
            var i = n.range && n.range[w]
            if (!i || -1 === i.indexOf(':')) return r
            var a = W(i.split(':').map(parseFloat), 2),
              s = a[0],
              o = a[1]
            return (
              Te(s) &&
                (!Te(P) || P < s) &&
                (r = (r = r.removeNumericRefinement(
                  w,
                  '>='
                )).addNumericRefinement(w, '>=', s)),
              Te(o) &&
                (!Te(x) || o < x) &&
                (r = (r = r.removeNumericRefinement(
                  w,
                  '<='
                )).addNumericRefinement(w, '<=', o)),
              r
            )
          }
        }
      }
    )
  }
  function _r(L, e) {
    var c = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(L, Er()),
      function (p) {
        var e = p || {},
          g = e.attribute,
          t = e.operator,
          d = void 0 === t ? 'or' : t,
          n = e.limit,
          v = void 0 === n ? 10 : n,
          r = e.showMore,
          y = void 0 !== r && r,
          i = e.showMoreLimit,
          h = void 0 === i ? 20 : i,
          a = e.sortBy,
          b = void 0 === a ? ['isRefined', 'count:desc', 'name:asc'] : a,
          s = e.escapeFacetValues,
          S = void 0 === s || s,
          o = e.transformItems,
          R =
            void 0 === o
              ? function (e) {
                  return e
                }
              : o
        if (!g) throw new Error(Er('The `attribute` option is required.'))
        if (!/^(and|or)$/.test(d))
          throw new Error(
            Er(
              'The `operator` must one of: `"and"`, `"or"` (got "'.concat(
                d,
                '").'
              )
            )
          )
        if (!0 === y && h <= v)
          throw new Error(Er('`showMoreLimit` should be greater than `limit`.'))
        function w(e) {
          var t = e.name
          return D(
            D({}, O(e, ['name'])),
            {},
            { label: t, value: t, highlighted: t }
          )
        }
        var P,
          x,
          N,
          _ = [],
          I = !0,
          F = !1,
          T = function () {}
        function C() {
          T()
        }
        function E() {
          return F ? h : v
        }
        var k = function () {
          return function () {}
        }
        return {
          $$type: 'ais.refinementList',
          init: function (e) {
            L(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !0
            )
          },
          render: function (e) {
            L(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: e.instantSearchInstance }
              ),
              !1
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                refinementList: D(
                  D({}, e.refinementList),
                  {},
                  j({}, g, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.state,
              r = e.createURL,
              i = e.instantSearchInstance,
              a = e.isFromSearch,
              s = void 0 !== a && a,
              o = e.helper,
              c = [],
              u = []
            if (
              ((N && x && k) ||
                ((N = at({
                  instantSearchInstance: i,
                  helper: o,
                  attribute: g,
                  widgetType: this.$$type
                })),
                (x = function (e) {
                  N('click', e), o.toggleFacetRefinement(g, e).search()
                }),
                (k = (function (n, s) {
                  return function (a) {
                    return function (e) {
                      var i = a.instantSearchInstance
                      if ('' === e && _)
                        L(
                          D(
                            D(
                              {},
                              s.getWidgetRenderState(
                                D(D({}, a), {}, { results: P })
                              )
                            ),
                            {},
                            { instantSearchInstance: i }
                          ),
                          !1
                        )
                      else {
                        var t = {
                          highlightPreTag: S
                            ? We.highlightPreTag
                            : Be.highlightPreTag,
                          highlightPostTag: S
                            ? We.highlightPostTag
                            : Be.highlightPostTag
                        }
                        n.searchForFacetValues(
                          g,
                          e,
                          Math.min(E(), 100),
                          t
                        ).then(function (e) {
                          var t = S ? $e(e.facetHits) : e.facetHits,
                            n = R(
                              t.map(function (e) {
                                var t = e.value
                                return D(
                                  D({}, O(e, ['value'])),
                                  {},
                                  { value: t, label: t }
                                )
                              })
                            ),
                            r = F && _.length > v
                          L(
                            D(
                              D(
                                {},
                                s.getWidgetRenderState(
                                  D(D({}, a), {}, { results: P })
                                )
                              ),
                              {},
                              {
                                items: n,
                                canToggleShowMore: r,
                                canRefine: !0,
                                instantSearchInstance: i,
                                isFromSearch: !0
                              }
                            ),
                            !1
                          )
                        })
                      }
                    }
                  }
                })(o, this))),
              t)
            ) {
              if (s)
                (u = S ? $e(t.facetHits) : t.facetHits),
                  (c = R(
                    u.map(function (e) {
                      var t = e.value
                      return D(
                        D({}, O(e, ['value'])),
                        {},
                        { value: t, label: t }
                      )
                    })
                  ))
              else {
                var l = t.getFacetValues(g, { sortBy: b })
                ;(u = l && Array.isArray(l) ? l : []),
                  (c = R(u.slice(0, E()).map(w)))
              }
              var d = n.maxValuesPerFacet,
                h = E()
              ;(I = h < d ? u.length <= h : u.length < h),
                (P = t),
                (_ = c),
                e.results &&
                  (T = (function (e, t) {
                    return function () {
                      ;(F = !F), t.render(e)
                    }
                  })(e, this))
            }
            var f = k && k(e),
              m = (F && _.length > v) || (y && !s && !I)
            return {
              createURL: function (e) {
                return r(n.resetPage().toggleFacetRefinement(g, e))
              },
              items: c,
              refine: x,
              searchForItems: f,
              isFromSearch: s,
              canRefine: s || 0 < c.length,
              widgetParams: p,
              isShowingMore: F,
              canToggleShowMore: m,
              toggleShowMore: C,
              sendEvent: N,
              hasExhaustiveItems: I
            }
          },
          dispose: function (e) {
            var t = e.state
            c()
            var n = t.setQueryParameter('maxValuesPerFacet', void 0)
            return 'and' === d ? n.removeFacet(g) : n.removeDisjunctiveFacet(g)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters,
              r =
                'or' === d
                  ? n.getDisjunctiveRefinements(g)
                  : n.getConjunctiveRefinements(g)
            return r.length
              ? D(
                  D({}, e),
                  {},
                  {
                    refinementList: D(D({}, e.refinementList), {}, j({}, g, r))
                  }
                )
              : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = 'or' === d,
              i = n.refinementList && n.refinementList[g],
              a = e.clearRefinements(g),
              s = r ? a.addDisjunctiveFacet(g) : a.addFacet(g),
              o = s.maxValuesPerFacet || 0,
              c = Math.max(o, y ? h : v),
              u = s.setQueryParameter('maxValuesPerFacet', c)
            if (i)
              return i.reduce(function (e, t) {
                return r
                  ? e.addDisjunctiveFacetRefinement(g, t)
                  : e.addFacetRefinement(g, t)
              }, u)
            var l = r ? 'disjunctiveFacetsRefinements' : 'facetsRefinements'
            return u.setQueryParameters(
              j({}, l, D(D({}, u[l]), {}, j({}, g, [])))
            )
          }
        }
      }
    )
  }
  function Ir(n, e) {
    var r = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(n, kr()),
      function (i) {
        var a,
          s = (i || {}).queryHook
        var o = function () {}
        function c() {
          o()
        }
        return {
          $$type: 'ais.searchBox',
          init: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return r(), t.setQueryParameter('query', void 0)
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { searchBox: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function (e) {
            var t = e.helper,
              n = e.searchMetadata
            if (!a) {
              var r = function (e) {
                e !== t.state.query && t.setQuery(e).search()
              }
              a = function (e) {
                s ? s(e, r) : r(e)
              }
            }
            return (
              (o = (function (e) {
                return function () {
                  e.setQuery('').search()
                }
              })(t)),
              {
                query: t.state.query || '',
                refine: a,
                clear: c,
                widgetParams: i,
                isSearchStalled: n.isSearchStalled
              }
            )
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.query || ''
            return '' === n || (e && e.query === n)
              ? e
              : D(D({}, e), {}, { query: n })
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState
            return e.setQueryParameter('query', n.query || '')
          }
        }
      }
    )
  }
  function Fr(o, e) {
    var n = 1 < arguments.length && void 0 !== e ? e : Ie
    _e(o, Lr())
    var c = {}
    return function (i) {
      var e = i || {},
        a = e.items,
        t = e.transformItems,
        s =
          void 0 === t
            ? function (e) {
                return e
              }
            : t
      if (!Array.isArray(a))
        throw new Error(Lr('The `items` option expects an array of objects.'))
      return {
        $$type: 'ais.sortBy',
        init: function (e) {
          var t = e.instantSearchInstance,
            n = this.getWidgetRenderState(e),
            r = n.currentRefinement
          Se(a, function (e) {
            return e.value === r
          })
          o(D(D({}, n), {}, { instantSearchInstance: t }), !0)
        },
        render: function (e) {
          var t = e.instantSearchInstance
          o(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !1
          )
        },
        dispose: function (e) {
          var t = e.state
          return n(), c.initialIndex ? t.setIndex(c.initialIndex) : t
        },
        getRenderState: function (e, t) {
          return D(D({}, e), {}, { sortBy: this.getWidgetRenderState(t) })
        },
        getWidgetRenderState: function (e) {
          var t = e.results,
            n = e.helper,
            r = e.parent
          return (
            !c.initialIndex && r && (c.initialIndex = r.getIndexName()),
            c.setIndex ||
              (c.setIndex = function (e) {
                n.setIndex(e).search()
              }),
            {
              currentRefinement: n.state.index,
              options: s(a),
              refine: c.setIndex,
              hasNoResults: !t || 0 === t.nbHits,
              widgetParams: i
            }
          )
        },
        getWidgetUiState: function (e, t) {
          var n = t.searchParameters.index
          return n === c.initialIndex ? e : D(D({}, e), {}, { sortBy: n })
        },
        getWidgetSearchParameters: function (e, t) {
          var n = t.uiState
          return e.setQueryParameter(
            'index',
            n.sortBy || c.initialIndex || e.index
          )
        }
      }
    }
  }
  function Tr(n, e) {
    var i = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(n, jr()),
      function (d) {
        var h,
          e = d || {},
          f = e.attribute,
          t = e.max,
          m = void 0 === t ? 5 : t
        if (!f) throw new Error(jr('The `attribute` option is required.'))
        function p(e) {
          var t,
            n = e.getNumericRefinements(f)
          if (null !== (t = n['>=']) && void 0 !== t && t.length)
            return n['>='][0]
        }
        function r(e, t) {
          var n = p(e) === Number(t),
            r = e.resetPage().removeNumericRefinement(f)
          return n
            ? r
            : r
                .addNumericRefinement(f, '<=', m)
                .addNumericRefinement(f, '>=', Number(t))
        }
        var g = function (e) {
            return function (e, t) {
              h('click', t), e.setState(r(e.state, t)).search()
            }.bind(null, e)
          },
          v = function (e) {
            var t = e.state,
              n = e.createURL
            return function (e) {
              return n(r(t, e))
            }
          }
        return {
          $$type: Mr,
          init: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              {
                ratingMenu: D(
                  D({}, e.ratingMenu),
                  {},
                  j({}, f, this.getWidgetRenderState(t))
                )
              }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.helper,
              n = e.results,
              r = e.state,
              i = e.instantSearchInstance,
              a = e.createURL,
              s = []
            if (
              ((h =
                h ||
                (function (e) {
                  var o = e.instantSearchInstance,
                    c = e.helper,
                    u = e.getRefinedStar,
                    l = e.attribute
                  return function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n]
                    if (1 !== t.length) {
                      var r = t[0],
                        i = t[1],
                        a = t[2],
                        s = void 0 === a ? 'Filter Applied' : a
                      if ('click' === r)
                        u() === Number(i) ||
                          o.sendEventToInsights({
                            insightsMethod: 'clickedFilters',
                            widgetType: Mr,
                            eventType: r,
                            payload: {
                              eventName: s,
                              index: c.getIndex(),
                              filters: [''.concat(l, '>=').concat(i)]
                            },
                            attribute: l
                          })
                    } else o.sendEventToInsights(t[0])
                  }
                })({
                  instantSearchInstance: i,
                  helper: t,
                  getRefinedStar: function () {
                    return p(t.state)
                  },
                  attribute: f
                })),
              n)
            )
              for (
                var o = n.getFacetValues(f, {}),
                  c =
                    (o.length,
                    (function (e) {
                      var r = 0
                      e.forEach(function (e) {
                        var t = W(e.name.split('.'), 2)[1],
                          n = void 0 === t ? '' : t
                        r = Math.max(r, n.length)
                      })
                    })(o),
                    p(r)),
                  u = function (n) {
                    var e = c === n,
                      t = o
                        .filter(function (e) {
                          return Number(e.name) >= n && Number(e.name) <= m
                        })
                        .map(function (e) {
                          return e.count
                        })
                        .reduce(function (e, t) {
                          return e + t
                        }, 0)
                    if (c && !e && 0 === t) return 'continue'
                    var r = P(new Array(Math.floor(m / 1))).map(function (
                      e,
                      t
                    ) {
                      return 1 * t < n
                    })
                    s.push({
                      stars: r,
                      name: String(n),
                      label: String(n),
                      value: String(n),
                      count: t,
                      isRefined: e
                    })
                  },
                  l = 1;
                l < m;
                l += 1
              )
                u(l)
            return {
              items: (s = s.reverse()),
              hasNoResults: !n || 0 === n.nbHits,
              canRefine: 0 < s.length,
              refine: g(t),
              sendEvent: h,
              createURL: v({ state: r, createURL: a }),
              widgetParams: d
            }
          },
          dispose: function (e) {
            var t = e.state
            return i(), t.removeNumericRefinement(f)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters,
              r = p(n)
            return 'number' != typeof r
              ? e
              : D(
                  D({}, e),
                  {},
                  { ratingMenu: D(D({}, e.ratingMenu), {}, j({}, f, r)) }
                )
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = n.ratingMenu && n.ratingMenu[f],
              i = e.clearRefinements(f).addDisjunctiveFacet(f)
            return r
              ? i
                  .addNumericRefinement(f, '<=', m)
                  .addNumericRefinement(f, '>=', r)
              : i.setQueryParameters({
                  numericRefinements: D(
                    D({}, i.numericRefinements),
                    {},
                    j({}, f, {})
                  )
                })
          }
        }
      }
    )
  }
  function Cr(n, e) {
    var t = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(n, Or()),
      function (r) {
        return {
          $$type: 'ais.stats',
          init: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            n(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function () {
            t()
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { stats: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function (e) {
            var t = e.results,
              n = e.helper
            return t
              ? {
                  hitsPerPage: t.hitsPerPage,
                  nbHits: t.nbHits,
                  nbSortedHits: t.nbSortedHits,
                  areHitsSorted:
                    void 0 !== t.appliedRelevancyStrictness &&
                    0 < t.appliedRelevancyStrictness &&
                    t.nbSortedHits !== t.nbHits,
                  nbPages: t.nbPages,
                  page: t.page,
                  processingTimeMS: t.processingTimeMS,
                  query: t.query,
                  widgetParams: r
                }
              : {
                  hitsPerPage: n.state.hitsPerPage,
                  nbHits: 0,
                  nbSortedHits: void 0,
                  areHitsSorted: !1,
                  nbPages: 0,
                  page: n.state.page || 0,
                  processingTimeMS: -1,
                  query: n.state.query || '',
                  widgetParams: r
                }
          }
        }
      }
    )
  }
  var Er = et({ name: 'refinement-list', connector: !0 }),
    kr = et({ name: 'search-box', connector: !0 }),
    Lr = et({ name: 'sort-by', connector: !0 }),
    jr = et({ name: 'rating-menu', connector: !0 }),
    Mr = 'ais.ratingMenu',
    Or = et({ name: 'stats', connector: !0 }),
    Ar = et({ name: 'toggle-refinement', connector: !0 }),
    Hr = 'ais.toggleRefinement',
    Dr = function (e) {
      var o = e.instantSearchInstance,
        c = e.attribute,
        u = e.on,
        l = e.helper
      return function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        if (1 !== t.length) {
          var r = t[0],
            i = t[1],
            a = t[2],
            s = void 0 === a ? 'Filter Applied' : a
          'click' === r &&
            void 0 !== u &&
            (i ||
              o.sendEventToInsights({
                insightsMethod: 'clickedFilters',
                widgetType: Hr,
                eventType: r,
                payload: {
                  eventName: s,
                  index: l.getIndex(),
                  filters: u.map(function (e) {
                    return ''.concat(c, ':').concat(e)
                  })
                },
                attribute: c
              }))
        } else o.sendEventToInsights(t[0])
      }
    }
  function Wr(r) {
    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ie
    return (
      _e(r, Ar()),
      function () {
        var m =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          p = m.attribute,
          e = m.on,
          t = void 0 === e || e,
          n = m.off
        if (!p) throw new Error(Ar('The `attribute` option is required.'))
        var g,
          v = void 0 !== n,
          y = void 0 !== t ? Ze(t).map(Ne) : void 0,
          b = v ? Ze(n).map(Ne) : void 0,
          S = function (n, e) {
            var r = e.state,
              i = e.createURL
            return function () {
              r = r.resetPage()
              var e = n ? y : b
              e &&
                e.forEach(function (e) {
                  r = r.removeDisjunctiveFacetRefinement(p, e)
                })
              var t = n ? b : y
              return (
                t &&
                  t.forEach(function (e) {
                    r = r.addDisjunctiveFacetRefinement(p, e)
                  }),
                i(r)
              )
            }
          }
        return {
          $$type: Hr,
          init: function (e) {
            var t = e.instantSearchInstance
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            r(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          dispose: function (e) {
            var t = e.state
            return i(), t.removeDisjunctiveFacet(p)
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { toggleRefinement: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t = e.state,
              n = e.helper,
              r = e.results,
              i = e.createURL,
              a = e.instantSearchInstance,
              s = r
                ? null == y
                  ? void 0
                  : y.every(function (e) {
                      return n.state.isDisjunctiveFacetRefined(p, e)
                    })
                : null == y
                ? void 0
                : y.every(function (e) {
                    return t.isDisjunctiveFacetRefined(p, e)
                  }),
              o = { isRefined: s, count: 0 },
              c = { isRefined: v && !s, count: 0 }
            if (r) {
              var u = Ze(b || !1),
                l = r.getFacetValues(p) || [],
                d =
                  null == y
                    ? void 0
                    : y
                        .map(function (t) {
                          return Se(l, function (e) {
                            return e.name === Re(t)
                          })
                        })
                        .filter(function (e) {
                          return void 0 !== e
                        }),
                h = v
                  ? u
                      .map(function (t) {
                        return Se(l, function (e) {
                          return e.name === Re(t)
                        })
                      })
                      .filter(function (e) {
                        return void 0 !== e
                      })
                  : []
              ;(o = {
                isRefined:
                  !!d.length &&
                  d.every(function (e) {
                    return e.isRefined
                  }),
                count:
                  d.reduce(function (e, t) {
                    return e + t.count
                  }, 0) || null
              }),
                (c = {
                  isRefined:
                    !!h.length &&
                    h.every(function (e) {
                      return e.isRefined
                    }),
                  count:
                    h.reduce(function (e, t) {
                      return e + t.count
                    }, 0) ||
                    l.reduce(function (e, t) {
                      return e + t.count
                    }, 0)
                })
            } else
              v &&
                !s &&
                (b &&
                  b.forEach(function (e) {
                    return n.addDisjunctiveFacetRefinement(p, e)
                  }),
                n.setPage(n.state.page))
            g =
              g ||
              Dr({ instantSearchInstance: a, attribute: p, on: y, helper: n })
            var f = s ? c : o
            return {
              value: {
                name: p,
                isRefined: s,
                count: r ? f.count : null,
                onFacetValue: o,
                offFacetValue: c
              },
              state: t,
              createURL: S(s, { state: t, createURL: i }),
              sendEvent: g,
              canRefine: Boolean(r ? f.count : null),
              refine: (function (t) {
                return function () {
                  var e = (
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ).isRefined
                  e
                    ? (y.forEach(function (e) {
                        return t.removeDisjunctiveFacetRefinement(p, e)
                      }),
                      v &&
                        b.forEach(function (e) {
                          return t.addDisjunctiveFacetRefinement(p, e)
                        }))
                    : (g('click', e),
                      v &&
                        b.forEach(function (e) {
                          return t.removeDisjunctiveFacetRefinement(p, e)
                        }),
                      y.forEach(function (e) {
                        return t.addDisjunctiveFacetRefinement(p, e)
                      })),
                    t.search()
                }
              })(n),
              widgetParams: m
            }
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters,
              r =
                y &&
                y.every(function (e) {
                  return n.isDisjunctiveFacetRefined(p, e)
                })
            return r
              ? D(D({}, e), {}, { toggle: D(D({}, e.toggle), {}, j({}, p, r)) })
              : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState,
              r = e.clearRefinements(p).addDisjunctiveFacet(p)
            return Boolean(n.toggle && n.toggle[p])
              ? (y &&
                  y.forEach(function (e) {
                    r = r.addDisjunctiveFacetRefinement(p, e)
                  }),
                r)
              : v
              ? (b &&
                  b.forEach(function (e) {
                    r = r.addDisjunctiveFacetRefinement(p, e)
                  }),
                r)
              : r.setQueryParameters({
                  disjunctiveFacetsRefinements: D(
                    D({}, e.disjunctiveFacetsRefinements),
                    {},
                    j({}, p, [])
                  )
                })
          }
        }
      }
    )
  }
  function Br(d, e) {
    var h = 1 < arguments.length && void 0 !== e ? e : Ie
    _e(d, Ur())
    var f = {}
    return function (s) {
      var e = s || {},
        t = e.attributes,
        n = e.separator,
        r = void 0 === n ? ' > ' : n,
        i = e.rootPath,
        a = void 0 === i ? null : i,
        o = e.transformItems,
        c =
          void 0 === o
            ? function (e) {
                return e
              }
            : o
      if (!t || !Array.isArray(t) || 0 === t.length)
        throw new Error(
          Ur('The `attributes` option expects an array of strings.')
        )
      var u = W(t, 1)[0]
      function l(e, t) {
        if (!t) {
          var n = e.getHierarchicalFacetBreadcrumb(u)
          if (0 < n.length) return e.resetPage().toggleFacetRefinement(u, n[0])
        }
        return e.resetPage().toggleFacetRefinement(u, t)
      }
      return {
        $$type: 'ais.breadcrumb',
        init: function (e) {
          d(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: e.instantSearchInstance }
            ),
            !0
          )
        },
        render: function (e) {
          d(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: e.instantSearchInstance }
            ),
            !1
          )
        },
        dispose: function () {
          h()
        },
        getRenderState: function (e, t) {
          return D(
            D({}, e),
            {},
            {
              breadcrumb: D(
                D({}, e.breadcrumb),
                {},
                j({}, u, this.getWidgetRenderState(t))
              )
            }
          )
        },
        getWidgetRenderState: function (e) {
          var t = e.helper,
            n = e.createURL,
            r = e.results,
            i = e.state
          var a = (function () {
            if (!r) return []
            var e = W(i.hierarchicalFacets, 1)[0].name,
              t = r.getFacetValues(e, {}),
              n = Array.isArray(t.data) ? t.data : []
            return c(
              (function (n) {
                return n.map(function (e, t) {
                  return {
                    label: e.label,
                    value: t + 1 === n.length ? null : n[t + 1].value
                  }
                })
              })(
                (function n(e) {
                  return e.reduce(function (e, t) {
                    return (
                      t.isRefined &&
                        (e.push({ label: t.name, value: t.path }),
                        Array.isArray(t.data) && (e = e.concat(n(t.data)))),
                      e
                    )
                  }, [])
                })(n)
              )
            )
          })()
          return (
            f.createURL ||
              (f.createURL = function (e) {
                return n(l(t.state, e))
              }),
            f.refine ||
              (f.refine = function (e) {
                t.setState(l(t.state, e)).search()
              }),
            {
              canRefine: 0 < a.length,
              createURL: f.createURL,
              items: a,
              refine: f.refine,
              widgetParams: s
            }
          )
        },
        getWidgetSearchParameters: function (e) {
          if (e.isHierarchicalFacet(u)) {
            e.getHierarchicalFacetByName(u)
            return e
          }
          return e.addHierarchicalFacet({
            name: u,
            attributes: t,
            separator: r,
            rootPath: a
          })
        }
      }
    }
  }
  var Ur = et({ name: 'breadcrumb', connector: !0 })
  function qr(v, e) {
    var r = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(v, $r()),
      function () {
        function s(e) {
          return (
            e.aroundLatLng &&
            (function (e) {
              var t = e.match(tt)
              if (!t)
                throw new Error(
                  'Invalid value for "aroundLatLng" parameter: "'.concat(e, '"')
                )
              return { lat: parseFloat(t[1]), lng: parseFloat(t[2]) }
            })(e.aroundLatLng)
          )
        }
        function o() {
          return g.internalToggleRefineOnMapMove()
        }
        function c(e, t) {
          return function () {
            ;(g.isRefineOnMapMove = !g.isRefineOnMapMove), e(t)
          }
        }
        function u() {
          return g.isRefineOnMapMove
        }
        function l() {
          return g.internalSetMapMoveSinceLastRefine()
        }
        function d(t, n) {
          return function () {
            var e = !0 !== g.hasMapMoveSinceLastRefine
            ;(g.hasMapMoveSinceLastRefine = !0), e && t(n)
          }
        }
        function h() {
          return g.hasMapMoveSinceLastRefine
        }
        var f,
          m =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          e = m.enableRefineOnMapMove,
          t = void 0 === e || e,
          n = m.transformItems,
          p =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n,
          g = {
            isRefineOnMapMove: t,
            hasMapMoveSinceLastRefine: !1,
            lastRefinePosition: '',
            lastRefineBoundingBox: '',
            internalToggleRefineOnMapMove: Ie,
            internalSetMapMoveSinceLastRefine: Ie
          }
        return {
          $$type: Vr,
          init: function (e) {
            var t = e.instantSearchInstance
            ;(g.internalToggleRefineOnMapMove = c(Ie, e)),
              (g.internalSetMapMoveSinceLastRefine = d(Ie, e)),
              v(
                D(
                  D({}, this.getWidgetRenderState(e)),
                  {},
                  { instantSearchInstance: t }
                ),
                !0
              )
          },
          render: function (e) {
            var t = e.helper,
              n = e.instantSearchInstance,
              r = t.state,
              i =
                Boolean(r.aroundLatLng) &&
                Boolean(g.lastRefinePosition) &&
                r.aroundLatLng !== g.lastRefinePosition,
              a =
                !r.insideBoundingBox &&
                Boolean(g.lastRefineBoundingBox) &&
                r.insideBoundingBox !== g.lastRefineBoundingBox
            ;(i || a) && (g.hasMapMoveSinceLastRefine = !1),
              (g.lastRefinePosition = r.aroundLatLng || ''),
              (g.lastRefineBoundingBox = r.insideBoundingBox || ''),
              (g.internalToggleRefineOnMapMove = c(this.render.bind(this), e)),
              (g.internalSetMapMoveSinceLastRefine = d(
                this.render.bind(this),
                e
              ))
            var s = this.getWidgetRenderState(e)
            f('view', s.items),
              v(D(D({}, s), {}, { instantSearchInstance: n }), !1)
          },
          getWidgetRenderState: function (e) {
            var t = e.helper,
              n = e.results,
              r = e.instantSearchInstance,
              i = t.state,
              a = n
                ? p(
                    n.hits.filter(function (e) {
                      return e._geoloc
                    })
                  )
                : []
            return (
              (f =
                f ||
                ut({
                  instantSearchInstance: r,
                  index: t.getIndex(),
                  widgetType: Vr
                })),
              {
                items: a,
                position: s(i),
                currentRefinement: (function (e) {
                  return e.insideBoundingBox && nt(e.insideBoundingBox)
                })(i),
                refine: (function (i) {
                  return function (e) {
                    var t = e.northEast,
                      n = e.southWest,
                      r = [t.lat, t.lng, n.lat, n.lng].join()
                    i.setQueryParameter('insideBoundingBox', r).search(),
                      (g.hasMapMoveSinceLastRefine = !1),
                      (g.lastRefineBoundingBox = r)
                  }
                })(t),
                sendEvent: f,
                clearMapRefinement: (function (e) {
                  return function () {
                    e.setQueryParameter('insideBoundingBox', void 0).search()
                  }
                })(t),
                isRefinedWithMap: (function (e) {
                  return function () {
                    return Boolean(e.insideBoundingBox)
                  }
                })(i),
                toggleRefineOnMapMove: o,
                isRefineOnMapMove: u,
                setMapMoveSinceLastRefine: l,
                hasMapMoveSinceLastRefine: h,
                widgetParams: m
              }
            )
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { geoSearch: this.getWidgetRenderState(t) })
          },
          dispose: function (e) {
            var t = e.state
            return r(), t.setQueryParameter('insideBoundingBox', void 0)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.insideBoundingBox
            return !n || (e && e.geoSearch && e.geoSearch.boundingBox === n)
              ? e
              : D(D({}, e), {}, { geoSearch: { boundingBox: n } })
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState
            return n && n.geoSearch
              ? e.setQueryParameter(
                  'insideBoundingBox',
                  n.geoSearch.boundingBox
                )
              : e.setQueryParameter('insideBoundingBox', void 0)
          }
        }
      }
    )
  }
  function Qr(r, e) {
    var i = 1 < arguments.length && void 0 !== e ? e : Ie
    _e(r, Kr())
    var a =
      'https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&' +
      'utm_content='.concat(
        'undefined' != typeof window && window.location
          ? window.location.hostname
          : '',
        '&'
      ) +
      'utm_campaign=poweredby'
    return function (e) {
      var t = (e || {}).url,
        n = void 0 === t ? a : t
      return {
        $$type: 'ais.poweredBy',
        init: function (e) {
          var t = e.instantSearchInstance
          r(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !0
          )
        },
        render: function (e) {
          var t = e.instantSearchInstance
          r(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !1
          )
        },
        getRenderState: function (e, t) {
          return D(D({}, e), {}, { poweredBy: this.getWidgetRenderState(t) })
        },
        getWidgetRenderState: function () {
          return { url: n, widgetParams: e }
        },
        dispose: function () {
          i()
        }
      }
    }
  }
  var $r = et({ name: 'geo-search', connector: !0 }),
    Vr = 'ais.geoSearch',
    Kr = et({ name: 'powered-by', connector: !0 }),
    zr = et({ name: 'configure', connector: !0 })
  function Jr(e, t) {
    return e.setQueryParameters(
      Object.keys(t.searchParameters).reduce(function (e, t) {
        return D(D({}, e), {}, j({}, t, void 0))
      }, {})
    )
  }
  function Yr(e, t) {
    var r = 0 < arguments.length && void 0 !== e ? e : Ie,
      a = 1 < arguments.length && void 0 !== t ? t : Ie
    return function (i) {
      if (!i || !Ce(i.searchParameters))
        throw new Error(zr('The `searchParameters` option expects an object.'))
      var n = {}
      return {
        $$type: 'ais.configure',
        init: function (e) {
          var t = e.instantSearchInstance
          r(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !0
          )
        },
        render: function (e) {
          var t = e.instantSearchInstance
          r(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !1
          )
        },
        dispose: function (e) {
          var t = e.state
          return a(), Jr(t, i)
        },
        getRenderState: function (e, t) {
          var n,
            r = this.getWidgetRenderState(t)
          return D(
            D({}, e),
            {},
            {
              configure: D(
                D({}, r),
                {},
                {
                  widgetParams: D(
                    D({}, r.widgetParams),
                    {},
                    {
                      searchParameters: Ge(
                        new ce.SearchParameters(
                          null === (n = e.configure) || void 0 === n
                            ? void 0
                            : n.widgetParams.searchParameters
                        ),
                        new ce.SearchParameters(r.widgetParams.searchParameters)
                      ).getQueryParams()
                    }
                  )
                }
              )
            }
          )
        },
        getWidgetRenderState: function (e) {
          var t = e.helper
          return (
            n.refine ||
              (n.refine = (function (r) {
                return function (e) {
                  var t = Jr(r.state, i),
                    n = Ge(t, new ce.SearchParameters(e))
                  ;(i.searchParameters = e), r.setState(n).search()
                }
              })(t)),
            { refine: n.refine, widgetParams: i }
          )
        },
        getWidgetSearchParameters: function (e, t) {
          var n = t.uiState
          return Ge(
            e,
            new ce.SearchParameters(D(D({}, n.configure), i.searchParameters))
          )
        },
        getWidgetUiState: function (e) {
          return D(
            D({}, e),
            {},
            { configure: D(D({}, e.configure), i.searchParameters) }
          )
        }
      }
    }
  }
  var Xr = et({ name: 'configure-related-items', connector: !0 })
  function Gr(e) {
    var t = e.attributeName,
      n = e.attributeValue,
      r = e.attributeScore
    return ''
      .concat(t, ':')
      .concat(n, '<score=')
      .concat(r || 1, '>')
  }
  function Zr(c, u) {
    return function (e) {
      var t = e || {},
        a = t.hit,
        s = t.matchingPatterns,
        n = t.transformSearchParameters,
        r =
          void 0 === n
            ? function (e) {
                return e
              }
            : n
      if (!a) throw new Error(Xr('The `hit` option is required.'))
      if (!s) throw new Error(Xr('The `matchingPatterns` option is required.'))
      var i = Object.keys(s).reduce(function (e, t) {
          var n = s[t],
            r = Fe(a, t),
            i = n.score
          return Array.isArray(r)
            ? [].concat(P(e), [
                r.map(function (e) {
                  return Gr({
                    attributeName: t,
                    attributeValue: e,
                    attributeScore: i
                  })
                })
              ])
            : 'string' == typeof r
            ? [].concat(P(e), [
                Gr({ attributeName: t, attributeValue: r, attributeScore: i })
              ])
            : e
        }, []),
        o = D(
          {},
          r(
            new ce.SearchParameters({
              sumOrFiltersScores: !0,
              facetFilters: ['objectID:-'.concat(a.objectID)],
              optionalFilters: i
            })
          )
        )
      return D(
        D({}, Yr(c, u)({ searchParameters: o })),
        {},
        { $$type: 'ais.configureRelatedItems' }
      )
    }
  }
  var ei = et({ name: 'autocomplete', connector: !0 }),
    ti = et({ name: 'query-rules', connector: !0 })
  function ni(e) {
    var t = this.helper,
      n = this.initialRuleContexts,
      r = this.trackedFilters,
      i = this.transformRuleContexts,
      a = e.state,
      s = a.ruleContexts || [],
      o = (function (e) {
        var i = e.helper,
          a = e.sharedHelperState,
          s = e.trackedFilters
        return Object.keys(s).reduce(function (e, t) {
          var n = Pe(i.lastResults || {}, a, !0)
              .filter(function (e) {
                return e.attribute === t
              })
              .map(function (e) {
                return e.numericValue || e.name
              }),
            r = (0, s[t])(n)
          return [].concat(
            P(e),
            P(
              n
                .filter(function (e) {
                  return r.includes(e)
                })
                .map(function (e) {
                  return (function (e) {
                    return e.replace(/[^a-z0-9-_]+/gi, '_')
                  })('ais-'.concat(t, '-').concat(e))
                })
            )
          )
        }, [])
      })({ helper: t, sharedHelperState: a, trackedFilters: r }),
      c = i([].concat(P(n), P(o))).slice(0, 10)
    Le(s, c) ||
      t.overrideStateWithoutTriggeringChangeEvent(
        D(D({}, a), {}, { ruleContexts: c })
      )
  }
  function ri(d, e) {
    var h = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(d, ti()),
      function (i) {
        var e = i || {},
          t = e.trackedFilters,
          a = void 0 === t ? {} : t,
          n = e.transformRuleContexts,
          s =
            void 0 === n
              ? function (e) {
                  return e
                }
              : n,
          r = e.transformItems,
          o =
            void 0 === r
              ? function (e) {
                  return e
                }
              : r
        Object.keys(a).forEach(function (e) {
          if ('function' != typeof a[e])
            throw new Error(
              ti(
                '\'The "'.concat(
                  e,
                  '" filter value in the `trackedFilters` option expects a function.'
                )
              )
            )
        })
        var c,
          u = 0 < Object.keys(a).length,
          l = []
        return {
          $$type: 'ais.queryRules',
          init: function (e) {
            var t = e.helper,
              n = e.state,
              r = e.instantSearchInstance
            ;(l = n.ruleContexts || []),
              (c = ni.bind({
                helper: t,
                initialRuleContexts: l,
                trackedFilters: a,
                transformRuleContexts: s
              })),
              u &&
                (((function (e) {
                  return [
                    e.disjunctiveFacetsRefinements,
                    e.facetsRefinements,
                    e.hierarchicalFacetsRefinements,
                    e.numericRefinements
                  ].some(function (e) {
                    return Boolean(e && 0 < Object.keys(e).length)
                  })
                })(n) ||
                  Boolean(i.transformRuleContexts)) &&
                  c({ state: n }),
                t.on('change', c)),
              d(
                D(
                  D({}, this.getWidgetRenderState(e)),
                  {},
                  { instantSearchInstance: r }
                ),
                !0
              )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            d(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          getWidgetRenderState: function (e) {
            var t = (e.results || {}).userData
            return { items: o(void 0 === t ? [] : t), widgetParams: i }
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { queryRules: this.getWidgetRenderState(t) })
          },
          dispose: function (e) {
            var t = e.helper,
              n = e.state
            return (
              h(),
              u
                ? (t.removeListener('change', c),
                  n.setQueryParameter('ruleContexts', l))
                : n
            )
          }
        }
      }
    )
  }
  function ii(e) {
    function t(e) {
      return { status: e, transcript: '', isSpeechFinal: !1, errorCode: void 0 }
    }
    function n(e) {
      var t = 0 < arguments.length && void 0 !== e ? e : {}
      ;(p = D(D({}, p), t)), f()
    }
    function r(e) {
      n(t(0 < arguments.length && void 0 !== e ? e : 'initial'))
    }
    function i() {
      n({ status: 'waiting' })
    }
    function a(e) {
      n({ status: 'error', errorCode: e.error })
    }
    function s(e) {
      n({
        status: 'recognizing',
        transcript:
          (e.results[0] && e.results[0][0] && e.results[0][0].transcript) || '',
        isSpeechFinal: e.results[0] && e.results[0].isFinal
      }),
        l && p.transcript && h(p.transcript)
    }
    function o() {
      p.errorCode || !p.transcript || l || h(p.transcript),
        'error' !== p.status && n({ status: 'finished' })
    }
    function c() {
      u &&
        (u.stop(),
        u.removeEventListener('start', i),
        u.removeEventListener('error', a),
        u.removeEventListener('result', s),
        u.removeEventListener('end', o),
        (u = void 0))
    }
    var u,
      l = e.searchAsYouSpeak,
      d = e.language,
      h = e.onQueryChange,
      f = e.onStateChange,
      m = window.webkitSpeechRecognition || window.SpeechRecognition,
      p = t('initial')
    return {
      getState: function () {
        return p
      },
      isBrowserSupported: function () {
        return Boolean(m)
      },
      isListening: function () {
        return (
          'askingPermission' === p.status ||
          'waiting' === p.status ||
          'recognizing' === p.status
        )
      },
      startListening: function () {
        ;(u = new m()) &&
          (r('askingPermission'),
          (u.interimResults = !0),
          d && (u.lang = d),
          u.addEventListener('start', i),
          u.addEventListener('error', a),
          u.addEventListener('result', s),
          u.addEventListener('end', o),
          u.start())
      },
      stopListening: function () {
        c(), r('finished')
      },
      dispose: c
    }
  }
  function ai(p, e) {
    var a = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(p, si()),
      function (l) {
        var e = l.searchAsYouSpeak,
          d = void 0 !== e && e,
          h = l.language,
          f = l.additionalQueryParameters,
          t = l.createVoiceSearchHelper,
          m = void 0 === t ? ii : t
        return {
          $$type: 'ais.voiceSearch',
          init: function (e) {
            var t = e.instantSearchInstance
            p(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !0
            )
          },
          render: function (e) {
            var t = e.instantSearchInstance
            p(
              D(
                D({}, this.getWidgetRenderState(e)),
                {},
                { instantSearchInstance: t }
              ),
              !1
            )
          },
          getRenderState: function (e, t) {
            return D(
              D({}, e),
              {},
              { voiceSearch: this.getWidgetRenderState(t) }
            )
          },
          getWidgetRenderState: function (e) {
            var t = this,
              n = e.helper,
              r = e.instantSearchInstance
            this._refine ||
              (this._refine = function (e) {
                if (e !== n.state.query) {
                  var t = h ? [h.split('-')[0]] : void 0
                  n.setQueryParameter('queryLanguages', t),
                    'function' == typeof f &&
                      n.setState(
                        n.state.setQueryParameters(
                          D(
                            {
                              ignorePlurals: !0,
                              removeStopWords: !0,
                              optionalWords: e
                            },
                            f({ query: e })
                          )
                        )
                      ),
                    n.setQuery(e).search()
                }
              }),
              this._voiceSearchHelper ||
                (this._voiceSearchHelper = m({
                  searchAsYouSpeak: d,
                  language: h,
                  onQueryChange: function (e) {
                    return t._refine(e)
                  },
                  onStateChange: function () {
                    p(
                      D(
                        D({}, t.getWidgetRenderState(e)),
                        {},
                        { instantSearchInstance: r }
                      ),
                      !1
                    )
                  }
                }))
            var i = this._voiceSearchHelper,
              a = i.isBrowserSupported,
              s = i.isListening,
              o = i.startListening,
              c = i.stopListening,
              u = i.getState
            return {
              isBrowserSupported: a(),
              isListening: s(),
              toggleListening: function () {
                a() && (s() ? c() : o())
              },
              voiceListeningState: u(),
              widgetParams: l
            }
          },
          dispose: function (e) {
            var t = e.state
            this._voiceSearchHelper.dispose(), a()
            var n = t
            if ('function' == typeof f) {
              var r = f({ query: '' }),
                i = r
                  ? Object.keys(r).reduce(function (e, t) {
                      return (e[t] = void 0), e
                    }, {})
                  : {}
              n = t.setQueryParameters(
                D(
                  {
                    queryLanguages: void 0,
                    ignorePlurals: void 0,
                    removeStopWords: void 0,
                    optionalWords: void 0
                  },
                  i
                )
              )
            }
            return n.setQueryParameter('query', void 0)
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.query || ''
            return n ? D(D({}, e), {}, { query: n }) : e
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState
            return e.setQueryParameter('query', n.query || '')
          }
        }
      }
    )
  }
  var si = et({ name: 'voice-search', connector: !0 })
  function oi(b, e) {
    var S = 1 < arguments.length && void 0 !== e ? e : Ie
    return (
      _e(b, ui()),
      function (t) {
        var e = t || {},
          i = e.queryLanguages,
          a = e.attributesForPrediction,
          n = e.nbHits,
          s = void 0 === n ? 1 : n,
          r = e.renderDebounceTime,
          o = void 0 === r ? 100 : r,
          c = e.searchDebounceTime,
          u = void 0 === c ? 100 : c,
          l = e.escapeHTML,
          d = void 0 === l || l,
          h = e.extraParameters,
          f = void 0 === h ? {} : h
        if (!i || 0 === i.length)
          throw new Error(
            ui('The `queryLanguages` expects an array of strings.')
          )
        var m,
          p,
          g = (function () {
            var n = -1,
              r = -1,
              i = void 0
            return function (e) {
              var t = ++n
              return Promise.resolve(e).then(function (e) {
                return i && t < r ? i : ((r = t), (i = e))
              })
            }
          })(),
          v = !1,
          y = ht(b, o)
        return {
          $$type: 'ais.answers',
          init: function (e) {
            var t = e.state,
              n = e.instantSearchInstance.client.initIndex(t.index)
            if (
              !(function (e) {
                return 'function' == typeof e.findAnswers
              })(n)
            )
              throw new Error(ui('`algoliasearch` >= 4.8.0 required.'))
            ;(p = ht(n.findAnswers, u)),
              b(
                D(
                  D({}, this.getWidgetRenderState(e)),
                  {},
                  { instantSearchInstance: e.instantSearchInstance }
                ),
                !0
              )
          },
          render: function (n) {
            var r = this,
              e = n.state.query
            if (!e)
              return (
                (v = !(m = {})),
                void b(
                  D(
                    D({}, this.getWidgetRenderState(n)),
                    {},
                    { instantSearchInstance: n.instantSearchInstance }
                  ),
                  !1
                )
              )
            ;(m = {}),
              (v = !0),
              b(
                D(
                  D({}, this.getWidgetRenderState(n)),
                  {},
                  { instantSearchInstance: n.instantSearchInstance }
                ),
                !1
              ),
              g(
                p(
                  e,
                  i,
                  D(D({}, f), {}, { nbHits: s, attributesForPrediction: a })
                )
              ).then(function (e) {
                if (e) {
                  d && 0 < e.hits.length && (e.hits = Qe(e.hits))
                  var t = e.hits.__escaped
                  ;(e.hits = rt(e.hits, 0, s)),
                    (e.hits = it(e.hits, e.queryID)),
                    (e.hits.__escaped = t),
                    (m = e),
                    (v = !1),
                    y(
                      D(
                        D({}, r.getWidgetRenderState(n)),
                        {},
                        { instantSearchInstance: n.instantSearchInstance }
                      ),
                      !1
                    )
                }
              })
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { answers: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function () {
            var e
            return {
              hits: (null === (e = m) || void 0 === e ? void 0 : e.hits) || [],
              isLoading: v,
              widgetParams: t
            }
          },
          dispose: function (e) {
            var t = e.state
            return S(), t
          },
          getWidgetSearchParameters: function (e) {
            return e
          }
        }
      }
    )
  }
  function ci(e, t) {
    var n = 0 < arguments.length && void 0 !== e ? e : Ie,
      r = 1 < arguments.length && void 0 !== t ? t : Ie
    return function (a) {
      var s = {}
      return {
        $$type: 'ais.relevantSort',
        init: function (e) {
          var t = e.instantSearchInstance
          n(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !0
          )
        },
        render: function (e) {
          var t = e.instantSearchInstance
          n(
            D(
              D({}, this.getWidgetRenderState(e)),
              {},
              { instantSearchInstance: t }
            ),
            !1
          )
        },
        dispose: function (e) {
          var t = e.state
          return r(), t.setQueryParameter('relevancyStrictness', void 0)
        },
        getRenderState: function (e, t) {
          return D(D({}, e), {}, { relevantSort: this.getWidgetRenderState(t) })
        },
        getWidgetRenderState: function (e) {
          var t = e.results,
            n = e.helper
          s.refine ||
            (s.refine = function (e) {
              n.setQueryParameter('relevancyStrictness', e).search()
            })
          var r = (t || {}).appliedRelevancyStrictness,
            i = void 0 !== r
          return {
            isRelevantSorted: void 0 !== r && 0 < r,
            isVirtualReplica: i,
            canRefine: i,
            refine: s.refine,
            widgetParams: a
          }
        },
        getWidgetSearchParameters: function (e, t) {
          var n,
            r,
            i = t.uiState
          return e.setQueryParameter(
            'relevancyStrictness',
            null !==
              (n =
                null === (r = i.relevantSort) || void 0 === r
                  ? void 0
                  : r.relevancyStrictness) && void 0 !== n
              ? n
              : e.relevancyStrictness
          )
        },
        getWidgetUiState: function (e, t) {
          var n = t.searchParameters
          return D(
            D({}, e),
            {},
            {
              relevantSort: D(
                D({}, e.relevantSort),
                {},
                { relevancyStrictness: n.relevancyStrictness }
              )
            }
          )
        }
      }
    }
  }
  var ui = et({ name: 'answers', connector: !0 }),
    li = Object.freeze({
      __proto__: null,
      connectClearRefinements: hn,
      connectCurrentRefinements: pn,
      connectHierarchicalMenu: Rn,
      connectHits: wn,
      connectHitsWithInsights: ar,
      connectHitsPerPage: ir,
      connectInfiniteHits: ur,
      connectInfiniteHitsWithInsights: hr,
      connectMenu: lr,
      connectNumericMenu: dr,
      connectPagination: br,
      connectRange: Nr,
      connectRefinementList: _r,
      connectSearchBox: Ir,
      connectSortBy: Fr,
      connectRatingMenu: Tr,
      connectStats: Cr,
      connectToggleRefinement: Wr,
      connectBreadcrumb: Br,
      connectGeoSearch: qr,
      connectPoweredBy: Qr,
      connectConfigure: Yr,
      EXPERIMENTAL_connectConfigureRelatedItems: Zr,
      connectAutocomplete: function (r, e) {
        var i = 1 < arguments.length && void 0 !== e ? e : Ie
        return (
          _e(r, ei()),
          function (s) {
            var e = (s || {}).escapeHTML,
              o = void 0 === e || e,
              c = {}
            return {
              $$type: 'ais.autocomplete',
              init: function (e) {
                var t = e.instantSearchInstance
                r(
                  D(
                    D({}, this.getWidgetRenderState(e)),
                    {},
                    { instantSearchInstance: t }
                  ),
                  !0
                )
              },
              render: function (e) {
                var t = e.instantSearchInstance,
                  n = this.getWidgetRenderState(e)
                n.indices.forEach(function (e) {
                  ;(0, e.sendEvent)('view', e.hits)
                }),
                  r(D(D({}, n), {}, { instantSearchInstance: t }), !1)
              },
              getRenderState: function (e, t) {
                return D(
                  D({}, e),
                  {},
                  { autocomplete: this.getWidgetRenderState(t) }
                )
              },
              getWidgetRenderState: function (e) {
                var n = this,
                  t = e.helper,
                  r = e.scopedResults,
                  i = e.instantSearchInstance
                c.refine ||
                  (c.refine = function (e) {
                    t.setQuery(e).search()
                  })
                var a = r.map(function (e) {
                  e.results.hits = o ? Qe(e.results.hits) : e.results.hits
                  var t = ut({
                    instantSearchInstance: i,
                    index: e.results.index,
                    widgetType: n.$$type
                  })
                  return {
                    indexId: e.indexId,
                    indexName: e.results.index,
                    hits: e.results.hits,
                    results: e.results,
                    sendEvent: t
                  }
                })
                return {
                  currentRefinement: t.state.query || '',
                  indices: a,
                  refine: c.refine,
                  widgetParams: s
                }
              },
              getWidgetUiState: function (e, t) {
                var n = t.searchParameters.query || ''
                return '' === n || (e && e.query === n)
                  ? e
                  : D(D({}, e), {}, { query: n })
              },
              getWidgetSearchParameters: function (e, t) {
                var n = { query: t.uiState.query || '' }
                return o
                  ? e.setQueryParameters(D(D({}, n), We))
                  : e.setQueryParameters(n)
              },
              dispose: function (e) {
                var t = e.state
                i()
                var n = t.setQueryParameter('query', void 0)
                return o
                  ? n.setQueryParameters(
                      Object.keys(We).reduce(function (e, t) {
                        return D(D({}, e), {}, j({}, t, void 0))
                      }, {})
                    )
                  : n
              }
            }
          }
        )
      },
      connectQueryRules: ri,
      connectVoiceSearch: ai,
      EXPERIMENTAL_connectAnswers: oi,
      connectRelevantSort: ci
    }),
    di = pe(function (e) {
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var n = arguments[t]
          if (n) {
            var r = typeof n
            if ('string' == r || 'number' == r) e.push(n)
            else if (Array.isArray(n) && n.length) {
              var i = s.apply(null, n)
              i && e.push(i)
            } else if ('object' == r)
              for (var a in n) o.call(n, a) && n[a] && e.push(a)
          }
        }
        return e.join(' ')
      }
      var o
      ;(o = {}.hasOwnProperty),
        e.exports ? ((s.default = s), (e.exports = s)) : (window.classNames = s)
    }),
    hi = (function () {
      M(t, Wn)
      var e = H(t)
      function t() {
        return k(this, t), e.apply(this, arguments)
      }
      return (
        L(t, [
          {
            key: 'shouldComponentUpdate',
            value: function (e) {
              return (
                !Le(this.props.data, e.data) ||
                this.props.templateKey !== e.templateKey ||
                !Le(this.props.rootProps, e.rootProps)
              )
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this.props.rootTagName,
                t = this.props.useCustomCompileOptions[this.props.templateKey]
                  ? this.props.templatesConfig.compileOptions
                  : {},
                n = be({
                  templates: this.props.templates,
                  templateKey: this.props.templateKey,
                  compileOptions: t,
                  helpers: this.props.templatesConfig.helpers,
                  data: this.props.data,
                  bindEvent: this.props.bindEvent
                })
              return null === n
                ? null
                : An(
                    e,
                    h({}, this.props.rootProps, {
                      dangerouslySetInnerHTML: { __html: n }
                    })
                  )
            }
          }
        ]),
        t
      )
    })()
  j(hi, 'defaultProps', {
    data: {},
    rootTagName: 'div',
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
  })
  function fi(e) {
    var t = e.hasRefinements,
      n = e.refine,
      r = e.cssClasses,
      i = e.templateProps
    return An(
      'div',
      { className: r.root },
      An(
        hi,
        h({}, i, {
          templateKey: 'resetLabel',
          rootTagName: 'button',
          rootProps: {
            className: di(r.button, j({}, r.disabledButton, !t)),
            onClick: n,
            disabled: !t
          },
          data: { hasRefinements: t }
        })
      )
    )
  }
  function mi(e) {
    var t = e.items,
      n = e.cssClasses
    return An(
      'div',
      { className: n.root },
      An(
        'ul',
        { className: n.list },
        t.map(function (t, e) {
          return An(
            'li',
            {
              key: ''
                .concat(t.indexName, '-')
                .concat(t.attribute, '-')
                .concat(e),
              className: n.item
            },
            An(
              'span',
              { className: n.label },
              (function (e) {
                return (
                  e.toString().charAt(0).toUpperCase() + e.toString().slice(1)
                )
              })(t.label),
              ':'
            ),
            t.refinements.map(function (e) {
              return An(
                'span',
                {
                  key: (function (e) {
                    var t = e.attribute,
                      n = e.value
                    return [t, e.type, n, e.operator]
                      .map(function (e) {
                        return e
                      })
                      .filter(Boolean)
                      .join(':')
                  })(e),
                  className: n.category
                },
                An(
                  'span',
                  { className: n.categoryLabel },
                  'query' === e.attribute ? An('q', null, e.label) : e.label
                ),
                An(
                  'button',
                  {
                    className: n.delete,
                    onClick: (function (t) {
                      return function (e) {
                        he(e) || (e.preventDefault(), t())
                      }
                    })(t.refine.bind(null, e))
                  },
                  '✕'
                )
              )
            })
          )
        })
      )
    )
  }
  function pi(e, t) {
    var n = e.items,
      r = e.widgetParams
    if (!t) {
      var i = r.container,
        a = r.cssClasses
      tr(An(mi, { cssClasses: a, items: n }), i)
    }
  }
  function gi(e) {
    var t = e.className,
      n = e.disabled
    return An(
      'button',
      { className: t, onClick: e.onClick, disabled: n },
      e.children
    )
  }
  var vi = { resetLabel: 'Clear refinements' },
    yi = et({ name: 'clear-refinements' }),
    bi = St('ClearRefinements'),
    Si = et({ name: 'current-refinements' }),
    Ri = St('CurrentRefinements')
  gi.defaultProps = { disabled: !1 }
  function wi(e) {
    var t = e.classNameLabel,
      n = e.classNameInput,
      r = e.checked,
      i = e.onToggle,
      a = e.children
    return An(
      'label',
      { className: t },
      An('input', { className: n, type: 'checkbox', checked: r, onChange: i }),
      a
    )
  }
  function Pi(e) {
    var t = e.cssClasses,
      n = e.enableRefine,
      r = e.enableRefineControl,
      i = e.enableClearMapRefinement,
      a = e.isRefineOnMapMove,
      s = e.isRefinedWithMap,
      o = e.hasMapMoveSinceLastRefine,
      c = e.onRefineToggle,
      u = e.onRefineClick,
      l = e.onClearClick,
      d = e.templateProps
    return (
      n &&
      An(
        'div',
        null,
        r &&
          An(
            'div',
            { className: t.control },
            a || !o
              ? An(
                  wi,
                  {
                    classNameLabel: di(t.label, j({}, t.selectedLabel, a)),
                    classNameInput: t.input,
                    checked: a,
                    onToggle: c
                  },
                  An(
                    hi,
                    h({}, d, { templateKey: 'toggle', rootTagName: 'span' })
                  )
                )
              : An(
                  gi,
                  { className: t.redo, disabled: !o, onClick: u },
                  An(hi, h({}, d, { templateKey: 'redo', rootTagName: 'span' }))
                )
          ),
        !r &&
          !a &&
          An(
            'div',
            { className: t.control },
            An(
              gi,
              {
                className: di(t.redo, j({}, t.disabledRedo, !o)),
                disabled: !o,
                onClick: u
              },
              An(hi, h({}, d, { templateKey: 'redo', rootTagName: 'span' }))
            )
          ),
        i &&
          s &&
          An(
            gi,
            { className: t.reset, onClick: l },
            An(hi, h({}, d, { templateKey: 'reset', rootTagName: 'span' }))
          )
      )
    )
  }
  function xi(e) {
    var t = e.refine,
      n = e.mapInstance
    return t({
      northEast: n.getBounds().getNorthEast().toJSON(),
      southWest: n.getBounds().getSouthWest().toJSON()
    })
  }
  function Ni(e, t) {
    ;(e.isUserInteraction = !1), t(), (e.isUserInteraction = !0)
  }
  function _i(e, t) {
    var n = e.items,
      r = e.position,
      i = e.currentRefinement,
      a = e.refine,
      s = e.clearMapRefinement,
      o = e.toggleRefineOnMapMove,
      c = e.isRefineOnMapMove,
      u = e.setMapMoveSinceLastRefine,
      l = e.hasMapMoveSinceLastRefine,
      d = e.isRefinedWithMap,
      h = e.widgetParams,
      f = e.instantSearchInstance,
      m = h.container,
      p = h.googleReference,
      g = h.cssClasses,
      v = h.templates,
      y = h.initialZoom,
      b = h.initialPosition,
      S = h.enableRefine,
      R = h.enableClearMapRefinement,
      w = h.enableRefineControl,
      P = h.mapOptions,
      x = h.createMarker,
      N = h.markerOptions,
      _ = h.renderState
    if (t) {
      ;(_.isUserInteraction = !0), (_.isPendingRefine = !1), (_.markers = [])
      var I = document.createElement('div')
      ;(I.className = g.root), m.appendChild(I)
      var F = document.createElement('div')
      ;(F.className = g.map), I.appendChild(F)
      var T = document.createElement('div')
      ;(T.className = g.tree),
        I.appendChild(T),
        (_.mapInstance = new p.maps.Map(
          F,
          D(
            {
              mapTypeControl: !1,
              fullscreenControl: !1,
              streetViewControl: !1,
              clickableIcons: !1,
              zoomControlOptions: { position: p.maps.ControlPosition.LEFT_TOP }
            },
            P
          )
        ))
      return (
        p.maps.event.addListenerOnce(_.mapInstance, 'idle', function () {
          function e() {
            _.isUserInteraction && S && (u(), c() && (_.isPendingRefine = !0))
          }
          _.mapInstance.addListener('center_changed', e),
            _.mapInstance.addListener('zoom_changed', e),
            _.mapInstance.addListener('dragstart', e),
            _.mapInstance.addListener('idle', function () {
              _.isUserInteraction &&
                _.isPendingRefine &&
                ((_.isPendingRefine = !1),
                xi({ mapInstance: _.mapInstance, refine: a }))
            })
        }),
        void (_.templateProps = me({
          templatesConfig: f.templatesConfig,
          templates: v
        }))
      )
    }
    var C = n.map(function (e) {
        return e.objectID
      }),
      E = W(
        (function (e, a) {
          return e.reduce(
            function (e, t) {
              var n = W(e, 2),
                r = n[0],
                i = n[1]
              return a.includes(t.__id) ? [r.concat(t), i] : [r, i.concat(t)]
            },
            [[], []]
          )
        })(_.markers, C),
        2
      ),
      k = E[0],
      L = E[1],
      j = k.map(function (e) {
        return e.__id
      }),
      M = n.filter(function (e) {
        return !j.includes(e.objectID)
      })
    L.forEach(function (e) {
      return e.setMap(null)
    }),
      (_.markers = k.concat(
        M.map(function (n) {
          var r = x({ map: _.mapInstance, item: n })
          return (
            Object.keys(N.events).forEach(function (t) {
              r.addListener(t, function (e) {
                N.events[t]({
                  map: _.mapInstance,
                  event: e,
                  item: n,
                  marker: r
                })
              })
            }),
            r
          )
        })
      ))
    var O = !l(),
      A = i ? 0 : null,
      H =
        !i && Boolean(_.markers.length)
          ? (function (e, t) {
              var n = t.reduce(function (e, t) {
                return e.extend(t.getPosition())
              }, new e.maps.LatLngBounds())
              return {
                northEast: n.getNorthEast().toJSON(),
                southWest: n.getSouthWest().toJSON()
              }
            })(p, _.markers)
          : i
    H && O
      ? Ni(_, function () {
          _.mapInstance.fitBounds(
            new p.maps.LatLngBounds(H.southWest, H.northEast),
            A
          )
        })
      : O &&
        Ni(_, function () {
          _.mapInstance.setCenter(r || b), _.mapInstance.setZoom(y)
        }),
      tr(
        An(Pi, {
          cssClasses: g,
          enableRefine: S,
          enableRefineControl: w,
          enableClearMapRefinement: R,
          isRefineOnMapMove: c(),
          isRefinedWithMap: d(),
          hasMapMoveSinceLastRefine: l(),
          onRefineToggle: o,
          onRefineClick: function () {
            return xi({ mapInstance: _.mapInstance, refine: a })
          },
          onClearClick: s,
          templateProps: _.templateProps
        }),
        m.querySelector('.'.concat(g.tree))
      )
  }
  var Ii = {
      HTMLMarker: '<p>Your custom HTML Marker</p>',
      reset: 'Clear the map refinement',
      toggle: 'Search as I move the map',
      redo: 'Redo search here'
    },
    Fi = et({ name: 'geo-search' }),
    Ti = St('GeoSearch')
  function Ci(e) {
    var t = e.className,
      n = e.handleClick,
      r = e.facetValueToRefine,
      i = e.isRefined,
      a = e.templateProps,
      s = e.templateKey,
      o = e.templateData,
      c = e.subItems
    return An(
      'li',
      {
        className: t,
        onClick: function (e) {
          n({ facetValueToRefine: r, isRefined: i, originalEvent: e })
        }
      },
      An(hi, h({}, a, { templateKey: s, data: o })),
      c
    )
  }
  var Ei = {
      query: '',
      showSubmit: !0,
      showReset: !0,
      showLoadingIndicator: !0,
      autofocus: !1,
      searchAsYouType: !0,
      isSearchStalled: !1,
      disabled: !1,
      onChange: Ie,
      onSubmit: Ie,
      onReset: Ie,
      refine: Ie
    },
    ki = (function () {
      M(i, Wn)
      var r = H(i)
      function i() {
        var s
        k(this, i)
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return (
          j(A((s = r.call.apply(r, [this].concat(t)))), 'state', {
            query: s.props.query,
            focused: !1
          }),
          j(A(s), 'input', {}),
          j(A(s), 'onInput', function (e) {
            var t = s.props,
              n = t.searchAsYouType,
              r = t.refine,
              i = t.onChange,
              a = e.target.value
            n && r(a), s.setState({ query: a }), i(e)
          }),
          j(A(s), 'onSubmit', function (e) {
            var t = s.props,
              n = t.searchAsYouType,
              r = t.refine,
              i = t.onSubmit
            return (
              e.preventDefault(),
              e.stopPropagation(),
              s.input.current && s.input.current.blur(),
              n || r(s.state.query),
              i(e),
              !1
            )
          }),
          j(A(s), 'onReset', function (e) {
            var t = s.props,
              n = t.refine,
              r = t.onReset
            s.input.current && s.input.current.focus(),
              n(''),
              s.setState({ query: '' }),
              r(e)
          }),
          j(A(s), 'onBlur', function () {
            s.setState({ focused: !1 })
          }),
          j(A(s), 'onFocus', function () {
            s.setState({ focused: !0 })
          }),
          s
        )
      }
      return (
        L(i, [
          {
            key: 'resetInput',
            value: function () {
              this.setState({ query: '' })
            }
          },
          {
            key: 'componentWillReceiveProps',
            value: function (e) {
              this.state.focused ||
                e.query === this.state.query ||
                this.setState({ query: e.query })
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this.props,
                t = e.cssClasses,
                n = e.placeholder,
                r = e.autofocus,
                i = e.showSubmit,
                a = e.showReset,
                s = e.showLoadingIndicator,
                o = e.templates,
                c = e.isSearchStalled
              return An(
                'div',
                { className: t.root },
                An(
                  'form',
                  {
                    action: '',
                    role: 'search',
                    className: t.form,
                    noValidate: !0,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                  },
                  An('input', {
                    ref: this.input,
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: t.input,
                    type: 'search',
                    placeholder: n,
                    autoFocus: r,
                    autoComplete: 'off',
                    autoCorrect: 'off',
                    autoCapitalize: 'off',
                    spellCheck: 'false',
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                  }),
                  An(hi, {
                    templateKey: 'submit',
                    rootTagName: 'button',
                    rootProps: {
                      className: t.submit,
                      type: 'submit',
                      title: 'Submit the search query.',
                      hidden: !i
                    },
                    templates: o,
                    data: { cssClasses: t }
                  }),
                  An(hi, {
                    templateKey: 'reset',
                    rootTagName: 'button',
                    rootProps: {
                      className: t.reset,
                      type: 'reset',
                      title: 'Clear the search query.',
                      hidden: !(a && this.state.query.trim() && !c)
                    },
                    templates: o,
                    data: { cssClasses: t }
                  }),
                  s &&
                    An(hi, {
                      templateKey: 'loadingIndicator',
                      rootTagName: 'span',
                      rootProps: { className: t.loadingIndicator, hidden: !c },
                      templates: o,
                      data: { cssClasses: t }
                    })
                )
              )
            }
          }
        ]),
        i
      )
    })()
  j(ki, 'defaultProps', Ei)
  function Li(e) {
    return void 0 !== e.data
  }
  var ji = (function () {
    M(u, Wn)
    var n = H(u)
    function u(e) {
      var t
      return (
        k(this, u),
        j(A((t = n.call(this, e))), 'searchBox', {}),
        (t.handleItemClick = t.handleItemClick.bind(A(t))),
        t
      )
    }
    return (
      L(u, [
        {
          key: 'shouldComponentUpdate',
          value: function (e) {
            return !Le(this.props.facetValues, e.facetValues)
          }
        },
        {
          key: 'refine',
          value: function (e) {
            this.props.toggleRefinement(e)
          }
        },
        {
          key: '_generateFacetItem',
          value: function (e) {
            var t, n
            if (Li(e) && Array.isArray(e.data) && 0 < e.data.length) {
              var r = this.props.cssClasses,
                i = (r.root, O(r, ['root']))
              n = An(
                u,
                h({}, this.props, {
                  cssClasses: i,
                  depth: this.props.depth + 1,
                  facetValues: e.data,
                  showMore: !1,
                  className: this.props.cssClasses.childList
                })
              )
            }
            var a = this.props.createURL(e.value),
              s = D(
                D({}, e),
                {},
                {
                  url: a,
                  attribute: this.props.attribute,
                  cssClasses: this.props.cssClasses,
                  isFromSearch: this.props.isFromSearch
                }
              ),
              o = e.value
            void 0 !== e.isRefined && (o += '/'.concat(e.isRefined)),
              void 0 !== e.count && (o += '/'.concat(e.count))
            var c = di(
              this.props.cssClasses.item,
              (j((t = {}), this.props.cssClasses.selectedItem, e.isRefined),
              j(t, this.props.cssClasses.disabledItem, !e.count),
              j(
                t,
                this.props.cssClasses.parentItem,
                Li(e) && Array.isArray(e.data) && 0 < e.data.length
              ),
              t)
            )
            return An(Ci, {
              templateKey: 'item',
              key: o,
              facetValueToRefine: e.value,
              handleClick: this.handleItemClick,
              isRefined: e.isRefined,
              className: c,
              subItems: n,
              templateData: s,
              templateProps: this.props.templateProps
            })
          }
        },
        {
          key: 'handleItemClick',
          value: function (e) {
            var t = e.facetValueToRefine,
              n = e.isRefined,
              r = e.originalEvent
            if (
              !he(r) &&
              r.target instanceof HTMLElement &&
              r.target.parentNode instanceof HTMLElement &&
              (!n ||
                !r.target.parentNode.querySelector(
                  'input[type="radio"]:checked'
                ))
            )
              if ('INPUT' !== r.target.tagName) {
                for (var i = r.target; i !== r.currentTarget; ) {
                  if (
                    'LABEL' === i.tagName &&
                    (i.querySelector('input[type="checkbox"]') ||
                      i.querySelector('input[type="radio"]'))
                  )
                    return
                  'A' === i.tagName && i.href && r.preventDefault(),
                    (i = i.parentNode)
                }
                r.stopPropagation(), this.refine(t)
              } else this.refine(t)
          }
        },
        {
          key: 'componentWillReceiveProps',
          value: function (e) {
            this.searchBox.current &&
              !e.isFromSearch &&
              this.searchBox.current.resetInput()
          }
        },
        {
          key: 'refineFirstValue',
          value: function () {
            var e = this.props.facetValues && this.props.facetValues[0]
            if (e) {
              var t = e.value
              this.props.toggleRefinement(t)
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              e = di(
                this.props.cssClasses.showMore,
                j(
                  {},
                  this.props.cssClasses.disabledShowMore,
                  !(!0 === this.props.showMore && this.props.canToggleShowMore)
                )
              ),
              n =
                !0 === this.props.showMore &&
                An(
                  hi,
                  h({}, this.props.templateProps, {
                    templateKey: 'showMoreText',
                    rootTagName: 'button',
                    rootProps: {
                      className: e,
                      disabled: !this.props.canToggleShowMore,
                      onClick: this.props.toggleShowMore
                    },
                    data: { isShowingMore: this.props.isShowingMore }
                  })
                ),
              r =
                !0 !== this.props.searchIsAlwaysActive &&
                !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
              i = this.props.searchBoxTemplateProps
                ? this.props.searchBoxTemplateProps.templates
                : void 0,
              a =
                this.props.searchFacetValues &&
                An(
                  'div',
                  { className: this.props.cssClasses.searchBox },
                  An(ki, {
                    ref: this.searchBox,
                    placeholder: this.props.searchPlaceholder,
                    disabled: r,
                    cssClasses: this.props.cssClasses.searchable,
                    templates: i,
                    onChange: function (e) {
                      return t.props.searchFacetValues(e.target.value)
                    },
                    onReset: function () {
                      return t.props.searchFacetValues('')
                    },
                    onSubmit: function () {
                      return t.refineFirstValue()
                    },
                    searchAsYouType: !1
                  })
                ),
              s =
                this.props.facetValues &&
                0 < this.props.facetValues.length &&
                An(
                  'ul',
                  { className: this.props.cssClasses.list },
                  this.props.facetValues.map(this._generateFacetItem, this)
                ),
              o =
                this.props.searchFacetValues &&
                this.props.isFromSearch &&
                (!this.props.facetValues ||
                  0 === this.props.facetValues.length) &&
                An(
                  hi,
                  h({}, this.props.templateProps, {
                    templateKey: 'searchableNoResults',
                    rootProps: { className: this.props.cssClasses.noResults }
                  })
                )
            return An(
              'div',
              {
                className: di(
                  this.props.cssClasses.root,
                  j(
                    {},
                    this.props.cssClasses.noRefinementRoot,
                    !this.props.facetValues ||
                      0 === this.props.facetValues.length
                  ),
                  this.props.className
                )
              },
              this.props.children,
              a,
              s,
              o,
              n
            )
          }
        }
      ]),
      u
    )
  })()
  j(ji, 'defaultProps', { cssClasses: {}, depth: 0 })
  function Mi(e) {
    var t = e.results,
      n = e.hits,
      r = e.bindEvent,
      i = e.cssClasses,
      a = e.templateProps
    return 0 === t.hits.length
      ? An(
          hi,
          h({}, a, {
            templateKey: 'empty',
            rootProps: { className: di(i.root, i.emptyRoot) },
            data: t
          })
        )
      : An(
          'div',
          { className: i.root },
          An(
            'ol',
            { className: i.list },
            n.map(function (e, t) {
              return An(
                hi,
                h({}, a, {
                  templateKey: 'item',
                  rootTagName: 'li',
                  rootProps: { className: i.item },
                  key: e.objectID,
                  data: D(D({}, e), {}, { __hitIndex: t }),
                  bindEvent: r
                })
              )
            })
          )
        )
  }
  var Oi = {
      item: '<a class="{{cssClasses.link}}" href="{{url}}"><span class="{{cssClasses.label}}">{{label}}</span><span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
      showMoreText:
        '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  '
    },
    Ai = et({ name: 'hierarchical-menu' }),
    Hi = St('HierarchicalMenu')
  Mi.defaultProps = { results: { hits: [] }, hits: [] }
  var Di = {
      empty: 'No results',
      item: function (e) {
        return JSON.stringify(e, null, 2)
      }
    },
    Wi = et({ name: 'hits' }),
    Bi = St('Hits'),
    Ui = rr(Mi)
  function qi(e) {
    var t = e.currentValue,
      n = e.options,
      r = e.cssClasses,
      i = e.setValue
    return An(
      'select',
      {
        className: di(r.select),
        onChange: function (e) {
          return i(e.target.value)
        },
        value: ''.concat(t)
      },
      n.map(function (e) {
        return An(
          'option',
          {
            className: di(r.option),
            key: e.label + e.value,
            value: ''.concat(e.value)
          },
          e.label
        )
      })
    )
  }
  var Qi = et({ name: 'hits-per-page' }),
    $i = St('HitsPerPage'),
    Vi = {
      empty: 'No results',
      showPreviousText: 'Show previous results',
      showMoreText: 'Show more results',
      item: function (e) {
        return JSON.stringify(e, null, 2)
      }
    },
    Ki = et({ name: 'infinite-hits' }),
    zi = St('InfiniteHits'),
    Ji = rr(function (e) {
      var t = e.results,
        n = e.hits,
        r = e.bindEvent,
        i = e.hasShowPrevious,
        a = e.showPrevious,
        s = e.showMore,
        o = e.isFirstPage,
        c = e.isLastPage,
        u = e.cssClasses,
        l = e.templateProps
      return 0 === t.hits.length
        ? An(
            hi,
            h({}, l, {
              templateKey: 'empty',
              rootProps: { className: di(u.root, u.emptyRoot) },
              data: t
            })
          )
        : An(
            'div',
            { className: u.root },
            i &&
              An(
                hi,
                h({}, l, {
                  templateKey: 'showPreviousText',
                  rootTagName: 'button',
                  rootProps: {
                    className: di(
                      u.loadPrevious,
                      j({}, u.disabledLoadPrevious, o)
                    ),
                    disabled: o,
                    onClick: a
                  }
                })
              ),
            An(
              'ol',
              { className: u.list },
              n.map(function (e, t) {
                return An(
                  hi,
                  h({}, l, {
                    templateKey: 'item',
                    rootTagName: 'li',
                    rootProps: { className: u.item },
                    key: e.objectID,
                    data: D(D({}, e), {}, { __hitIndex: t }),
                    bindEvent: r
                  })
                )
              })
            ),
            An(
              hi,
              h({}, l, {
                templateKey: 'showMoreText',
                rootTagName: 'button',
                rootProps: {
                  className: di(u.loadMore, j({}, u.disabledLoadMore, c)),
                  disabled: c,
                  onClick: s
                }
              })
            )
          )
    }),
    Yi = {
      item: '<a class="{{cssClasses.link}}" href="{{url}}"><span class="{{cssClasses.label}}">{{label}}</span><span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
      showMoreText:
        '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  '
    },
    Xi = et({ name: 'menu' }),
    Gi = St('Menu'),
    Zi = {
      reset:
        '\n<svg class="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
      submit:
        '\n<svg class="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
      loadingIndicator:
        '\n<svg class="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
    },
    ea = et({ name: 'refinement-list' }),
    ta = St('RefinementList'),
    na = St('SearchBox'),
    ra = {
      item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox"\n         class="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
      showMoreText:
        '\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ',
      searchableNoResults: 'No results'
    },
    ia = {
      item: '<label class="{{cssClasses.label}}">\n  <input type="radio" class="{{cssClasses.radio}}" name="{{attribute}}"{{#isRefined}} checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{label}}</span>\n</label>'
    },
    aa = et({ name: 'numeric-menu' }),
    sa = St('NumericMenu')
  function oa(e) {
    var t = e.cssClasses,
      n = e.label,
      r = e.ariaLabel,
      i = e.url,
      a = e.isDisabled,
      s = e.handleClick,
      o = e.pageNumber
    return An(
      'li',
      { className: t.item },
      a
        ? An('span', {
            className: t.link,
            dangerouslySetInnerHTML: { __html: n }
          })
        : An('a', {
            className: t.link,
            'aria-label': r,
            href: i,
            onClick: function (e) {
              return s(o, e)
            },
            dangerouslySetInnerHTML: { __html: n }
          })
    )
  }
  var ca = (function () {
    M(a, Wn)
    var i = H(a)
    function a() {
      var n
      k(this, a)
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
      return (
        j(
          A((n = i.call.apply(i, [this].concat(t)))),
          'handleClick',
          function (e, t) {
            he(t) || (t.preventDefault(), n.props.setCurrentPage(e))
          }
        ),
        n
      )
    }
    return (
      L(a, [
        {
          key: 'pageLink',
          value: function (e) {
            var t = e.label,
              n = e.ariaLabel,
              r = e.pageNumber,
              i = e.additionalClassName,
              a = void 0 === i ? null : i,
              s = e.isDisabled,
              o = void 0 !== s && s,
              c = e.isSelected,
              u = void 0 !== c && c,
              l = e.createURL,
              d = {
                item: di(this.props.cssClasses.item, a),
                link: this.props.cssClasses.link
              }
            o
              ? (d.item = di(d.item, this.props.cssClasses.disabledItem))
              : u && (d.item = di(d.item, this.props.cssClasses.selectedItem))
            var h = l && !o ? l(r) : '#'
            return An(oa, {
              ariaLabel: n,
              cssClasses: d,
              handleClick: this.handleClick,
              isDisabled: o,
              key: t + r + n,
              label: t,
              pageNumber: r,
              url: h
            })
          }
        },
        {
          key: 'previousPageLink',
          value: function (e) {
            var t = e.isFirstPage,
              n = e.currentPage,
              r = e.createURL
            return this.pageLink({
              ariaLabel: 'Previous',
              additionalClassName: this.props.cssClasses.previousPageItem,
              isDisabled: t,
              label: this.props.templates.previous,
              pageNumber: n - 1,
              createURL: r
            })
          }
        },
        {
          key: 'nextPageLink',
          value: function (e) {
            var t = e.isLastPage,
              n = e.currentPage,
              r = e.createURL
            return this.pageLink({
              ariaLabel: 'Next',
              additionalClassName: this.props.cssClasses.nextPageItem,
              isDisabled: t,
              label: this.props.templates.next,
              pageNumber: n + 1,
              createURL: r
            })
          }
        },
        {
          key: 'firstPageLink',
          value: function (e) {
            var t = e.isFirstPage,
              n = e.createURL
            return this.pageLink({
              ariaLabel: 'First',
              additionalClassName: this.props.cssClasses.firstPageItem,
              isDisabled: t,
              label: this.props.templates.first,
              pageNumber: 0,
              createURL: n
            })
          }
        },
        {
          key: 'lastPageLink',
          value: function (e) {
            var t = e.isLastPage,
              n = e.nbPages,
              r = e.createURL
            return this.pageLink({
              ariaLabel: 'Last',
              additionalClassName: this.props.cssClasses.lastPageItem,
              isDisabled: t,
              label: this.props.templates.last,
              pageNumber: n - 1,
              createURL: r
            })
          }
        },
        {
          key: 'pages',
          value: function (e) {
            var t = this,
              n = e.currentPage,
              r = e.pages,
              i = e.createURL
            return r.map(function (e) {
              return t.pageLink({
                ariaLabel: e + 1,
                additionalClassName: t.props.cssClasses.pageItem,
                isSelected: e === n,
                label: e + 1,
                pageNumber: e,
                createURL: i
              })
            })
          }
        },
        {
          key: 'render',
          value: function () {
            return An(
              'div',
              {
                className: di(
                  this.props.cssClasses.root,
                  j(
                    {},
                    this.props.cssClasses.noRefinementRoot,
                    this.props.nbPages <= 1
                  )
                )
              },
              An(
                'ul',
                { className: this.props.cssClasses.list },
                this.props.showFirst && this.firstPageLink(this.props),
                this.props.showPrevious && this.previousPageLink(this.props),
                this.pages(this.props),
                this.props.showNext && this.nextPageLink(this.props),
                this.props.showLast && this.lastPageLink(this.props)
              )
            )
          }
        }
      ]),
      a
    )
  })()
  ca.defaultProps = { nbHits: 0, currentPage: 0, nbPages: 0 }
  var ua = et({ name: 'pagination' }),
    la = St('Pagination'),
    da = { previous: '‹', next: '›', first: '«', last: '»' }
  var ha = (function () {
      M(r, Wn)
      var t = H(r)
      function r(e) {
        var n
        return (
          k(this, r),
          j(A((n = t.call(this, e))), 'onInput', function (t) {
            return function (e) {
              n.setState(j({}, t, e.currentTarget.value))
            }
          }),
          j(A(n), 'onSubmit', function (e) {
            e.preventDefault(),
              n.props.refine([
                n.state.min && Number(n.state.min),
                n.state.max && Number(n.state.max)
              ])
          }),
          (n.state = { min: e.values.min, max: e.values.max }),
          n
        )
      }
      return (
        L(r, [
          {
            key: 'componentWillReceiveProps',
            value: function (e) {
              this.setState({ min: e.values.min, max: e.values.max })
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this.state,
                t = e.min,
                n = e.max,
                r = this.props,
                i = r.min,
                a = r.max,
                s = r.step,
                o = r.cssClasses,
                c = r.templateProps,
                u = a <= i,
                l = Boolean(t || n)
              return An(
                'div',
                { className: di(o.root, j({}, o.noRefinement, !l)) },
                An(
                  'form',
                  { className: o.form, onSubmit: this.onSubmit },
                  An(
                    'label',
                    { className: o.label },
                    An('input', {
                      className: di(o.input, o.inputMin),
                      type: 'number',
                      min: i,
                      max: a,
                      step: s,
                      value: null != t ? t : '',
                      onInput: this.onInput('min'),
                      placeholder: i,
                      disabled: u
                    })
                  ),
                  An(
                    hi,
                    h({}, c, {
                      templateKey: 'separatorText',
                      rootTagName: 'span',
                      rootProps: { className: o.separator }
                    })
                  ),
                  An(
                    'label',
                    { className: o.label },
                    An('input', {
                      className: di(o.input, o.inputMax),
                      type: 'number',
                      min: i,
                      max: a,
                      step: s,
                      value: null != n ? n : '',
                      onInput: this.onInput('max'),
                      placeholder: a,
                      disabled: u
                    })
                  ),
                  An(
                    hi,
                    h({}, c, {
                      templateKey: 'submitText',
                      rootTagName: 'button',
                      rootProps: {
                        type: 'submit',
                        className: o.submit,
                        disabled: u
                      }
                    })
                  )
                )
              )
            }
          }
        ]),
        r
      )
    })(),
    fa = et({ name: 'range-input' }),
    ma = St('RangeInput')
  var pa = et({ name: 'search-box' }),
    ga = St('SearchBox'),
    va = 40,
    ya = 35,
    ba = 27,
    Sa = 36,
    Ra = 37,
    wa = 34,
    Pa = 33,
    xa = 39,
    Na = 38,
    _a = 100
  function Ia(e, t, n) {
    return ((e - t) / (n - t)) * 100
  }
  function Fa(e, t, n) {
    var r = e / 100
    return 0 === e ? t : 100 === e ? n : Math.round((n - t) * r + t)
  }
  function Ta(e) {
    return [
      'rheostat',
      'vertical' === e.orientation ? 'rheostat-vertical' : 'rheostat-horizontal'
    ]
      .concat(e.className.split(' '))
      .join(' ')
  }
  function Ca(e) {
    return Number(e.currentTarget.getAttribute('data-handle-key'))
  }
  function Ea(e) {
    e.stopPropagation(), e.preventDefault()
  }
  var ka = (function () {
      M(t, Wn)
      var e = H(t)
      function t() {
        return k(this, t), e.apply(this, arguments)
      }
      return (
        L(t, [
          {
            key: 'render',
            value: function () {
              return An('button', h({}, this.props, { type: 'button' }))
            }
          }
        ]),
        t
      )
    })(),
    La = An('div', { className: 'rheostat-background' }),
    ja = (function () {
      M(r, Wn)
      var n = H(r)
      function r(e) {
        var t
        return (
          k(this, r),
          j(A((t = n.call(this, e))), 'state', {
            className: Ta(t.props),
            handlePos: t.props.values.map(function (e) {
              return Ia(e, t.props.min, t.props.max)
            }),
            handleDimensions: 0,
            mousePos: null,
            sliderBox: {},
            slidingIndex: null,
            values: t.props.values
          }),
          (t.getPublicState = t.getPublicState.bind(A(t))),
          (t.getSliderBoundingBox = t.getSliderBoundingBox.bind(A(t))),
          (t.getProgressStyle = t.getProgressStyle.bind(A(t))),
          (t.getMinValue = t.getMinValue.bind(A(t))),
          (t.getMaxValue = t.getMaxValue.bind(A(t))),
          (t.getHandleDimensions = t.getHandleDimensions.bind(A(t))),
          (t.getClosestSnapPoint = t.getClosestSnapPoint.bind(A(t))),
          (t.getSnapPosition = t.getSnapPosition.bind(A(t))),
          (t.getNextPositionForKey = t.getNextPositionForKey.bind(A(t))),
          (t.getNextState = t.getNextState.bind(A(t))),
          (t.handleClick = t.handleClick.bind(A(t))),
          (t.getClosestHandle = t.getClosestHandle.bind(A(t))),
          (t.setStartSlide = t.setStartSlide.bind(A(t))),
          (t.startMouseSlide = t.startMouseSlide.bind(A(t))),
          (t.startTouchSlide = t.startTouchSlide.bind(A(t))),
          (t.handleMouseSlide = t.handleMouseSlide.bind(A(t))),
          (t.handleTouchSlide = t.handleTouchSlide.bind(A(t))),
          (t.handleSlide = t.handleSlide.bind(A(t))),
          (t.endSlide = t.endSlide.bind(A(t))),
          (t.handleKeydown = t.handleKeydown.bind(A(t))),
          (t.validatePosition = t.validatePosition.bind(A(t))),
          (t.validateValues = t.validateValues.bind(A(t))),
          (t.canMove = t.canMove.bind(A(t))),
          (t.fireChangeEvent = t.fireChangeEvent.bind(A(t))),
          (t.slideTo = t.slideTo.bind(A(t))),
          (t.updateNewValues = t.updateNewValues.bind(A(t))),
          t
        )
      }
      return (
        L(r, [
          {
            key: 'componentWillReceiveProps',
            value: function (n) {
              var e = this.props,
                t = e.className,
                r = e.disabled,
                i = e.min,
                a = e.max,
                s = e.orientation,
                o = this.state,
                c = o.values,
                u = o.slidingIndex,
                l = n.min !== i || n.max !== a,
                d =
                  c.length !== n.values.length ||
                  c.some(function (e, t) {
                    return n.values[t] !== e
                  }),
                h = n.className !== t || n.orientation !== s,
                f = n.disabled && !r
              h && this.setState({ className: Ta(n) }),
                (l || d) && this.updateNewValues(n),
                f && null !== u && this.endSlide()
            }
          },
          {
            key: 'getPublicState',
            value: function () {
              var e = this.props,
                t = e.min
              return { max: e.max, min: t, values: this.state.values }
            }
          },
          {
            key: 'getSliderBoundingBox',
            value: function () {
              var e = this.rheostat.getDOMNode
                  ? this.rheostat.getDOMNode()
                  : this.rheostat,
                t = e.getBoundingClientRect()
              return {
                height: t.height || e.clientHeight,
                left: t.left,
                top: t.top,
                width: t.width || e.clientWidth
              }
            }
          },
          {
            key: 'getProgressStyle',
            value: function (e) {
              var t = this.state.handlePos,
                n = t[e]
              if (0 === e)
                return 'vertical' === this.props.orientation
                  ? { height: ''.concat(n, '%'), top: 0 }
                  : { left: 0, width: ''.concat(n, '%') }
              var r = t[e - 1],
                i = n - r
              return 'vertical' === this.props.orientation
                ? { height: ''.concat(i, '%'), top: ''.concat(r, '%') }
                : { left: ''.concat(r, '%'), width: ''.concat(i, '%') }
            }
          },
          {
            key: 'getMinValue',
            value: function (e) {
              return this.state.values[e - 1]
                ? Math.max(this.props.min, this.state.values[e - 1])
                : this.props.min
            }
          },
          {
            key: 'getMaxValue',
            value: function (e) {
              return this.state.values[e + 1]
                ? Math.min(this.props.max, this.state.values[e + 1])
                : this.props.max
            }
          },
          {
            key: 'getHandleDimensions',
            value: function (e, t) {
              var n = e.currentTarget || null
              return n
                ? 'vertical' === this.props.orientation
                  ? ((n.clientHeight / t.height) * _a) / 2
                  : ((n.clientWidth / t.width) * _a) / 2
                : 0
            }
          },
          {
            key: 'getClosestSnapPoint',
            value: function (n) {
              return this.props.snapPoints.length
                ? this.props.snapPoints.reduce(function (e, t) {
                    return Math.abs(e - n) < Math.abs(t - n) ? e : t
                  })
                : n
            }
          },
          {
            key: 'getSnapPosition',
            value: function (e) {
              if (!this.props.snap) return e
              var t = this.props,
                n = t.max,
                r = t.min,
                i = Fa(e, r, n)
              return Ia(this.getClosestSnapPoint(i), r, n)
            }
          },
          {
            key: 'getNextPositionForKey',
            value: function (e, t) {
              var n,
                r = this.state,
                i = r.handlePos,
                a = r.values,
                s = this.props,
                o = s.max,
                c = s.min,
                u = s.snapPoints,
                l = this.props.snap,
                d = a[e],
                h = i[e],
                f = h,
                m = 1
              100 <= o ? (h = Math.round(h)) : (m = 100 / (o - c))
              var p = null
              l && (p = u.indexOf(this.getClosestSnapPoint(a[e])))
              var g =
                (j((n = {}), Ra, function (e) {
                  return -1 * e
                }),
                j(n, xa, function (e) {
                  return e
                }),
                j(n, Na, function (e) {
                  return e
                }),
                j(n, va, function (e) {
                  return -1 * e
                }),
                j(n, wa, function (e) {
                  return 1 < e ? -e : -10 * e
                }),
                j(n, Pa, function (e) {
                  return 1 < e ? e : 10 * e
                }),
                n)
              if (Object.prototype.hasOwnProperty.call(g, t))
                (h += g[t](m)),
                  l &&
                    (f < h
                      ? p < u.length - 1 && (d = u[p + 1])
                      : 0 < p && (d = u[p - 1]))
              else if (t === Sa) (h = 0), l && (d = u[0])
              else {
                if (t !== ya) return null
                ;(h = _a), l && (d = u[u.length - 1])
              }
              return l ? Ia(d, c, o) : h
            }
          },
          {
            key: 'getNextState',
            value: function (n, e) {
              var t = this.state.handlePos,
                r = this.props,
                i = r.max,
                a = r.min,
                s = this.validatePosition(n, e),
                o = t.map(function (e, t) {
                  return t === n ? s : e
                })
              return {
                handlePos: o,
                values: o.map(function (e) {
                  return Fa(e, a, i)
                })
              }
            }
          },
          {
            key: 'getClosestHandle',
            value: function (r) {
              var i = this.state.handlePos
              return i.reduce(function (e, t, n) {
                return Math.abs(i[n] - r) < Math.abs(i[e] - r) ? n : e
              }, 0)
            }
          },
          {
            key: 'setStartSlide',
            value: function (e, t, n) {
              var r = this.getSliderBoundingBox()
              this.setState({
                handleDimensions: this.getHandleDimensions(e, r),
                mousePos: { x: t, y: n },
                sliderBox: r,
                slidingIndex: Ca(e)
              })
            }
          },
          {
            key: 'startMouseSlide',
            value: function (e) {
              this.setStartSlide(e, e.clientX, e.clientY),
                'function' == typeof document.addEventListener
                  ? (document.addEventListener(
                      'mousemove',
                      this.handleMouseSlide,
                      !1
                    ),
                    document.addEventListener('mouseup', this.endSlide, !1))
                  : (document.attachEvent('onmousemove', this.handleMouseSlide),
                    document.attachEvent('onmouseup', this.endSlide)),
                Ea(e)
            }
          },
          {
            key: 'startTouchSlide',
            value: function (e) {
              if (!(1 < e.changedTouches.length)) {
                var t = e.changedTouches[0]
                this.setStartSlide(e, t.clientX, t.clientY),
                  document.addEventListener(
                    'touchmove',
                    this.handleTouchSlide,
                    !1
                  ),
                  document.addEventListener('touchend', this.endSlide, !1),
                  this.props.onSliderDragStart &&
                    this.props.onSliderDragStart(),
                  Ea(e)
              }
            }
          },
          {
            key: 'handleMouseSlide',
            value: function (e) {
              null !== this.state.slidingIndex &&
                (this.handleSlide(e.clientX, e.clientY), Ea(e))
            }
          },
          {
            key: 'handleTouchSlide',
            value: function (e) {
              if (null !== this.state.slidingIndex)
                if (1 < e.changedTouches.length) this.endSlide()
                else {
                  var t = e.changedTouches[0]
                  this.handleSlide(t.clientX, t.clientY), Ea(e)
                }
            }
          },
          {
            key: 'handleSlide',
            value: function (e, t) {
              var n = this.state,
                r = n.slidingIndex,
                i = n.sliderBox,
                a =
                  'vertical' === this.props.orientation
                    ? ((t - i.top) / i.height) * _a
                    : ((e - i.left) / i.width) * _a
              this.slideTo(r, a),
                this.canMove(r, a) &&
                  (this.setState({ x: e, y: t }),
                  this.props.onSliderDragMove && this.props.onSliderDragMove())
            }
          },
          {
            key: 'endSlide',
            value: function () {
              var e = this,
                t = this.state.slidingIndex
              if (
                (this.setState({ slidingIndex: null }),
                'function' == typeof document.removeEventListener
                  ? (document.removeEventListener('mouseup', this.endSlide, !1),
                    document.removeEventListener('touchend', this.endSlide, !1),
                    document.removeEventListener(
                      'touchmove',
                      this.handleTouchSlide,
                      !1
                    ),
                    document.removeEventListener(
                      'mousemove',
                      this.handleMouseSlide,
                      !1
                    ))
                  : (document.detachEvent('onmousemove', this.handleMouseSlide),
                    document.detachEvent('onmouseup', this.endSlide)),
                this.props.onSliderDragEnd && this.props.onSliderDragEnd(),
                this.props.snap)
              ) {
                var n = this.getSnapPosition(this.state.handlePos[t])
                this.slideTo(t, n, function () {
                  return e.fireChangeEvent()
                })
              } else this.fireChangeEvent()
            }
          },
          {
            key: 'handleClick',
            value: function (e) {
              var t = this
              if (!e.target.getAttribute('data-handle-key')) {
                var n = this.getSliderBoundingBox(),
                  r =
                    ('vertical' === this.props.orientation
                      ? (e.clientY - n.top) / n.height
                      : (e.clientX - n.left) / n.width) * _a,
                  i = this.getClosestHandle(r),
                  a = this.getSnapPosition(r)
                this.slideTo(i, a, function () {
                  return t.fireChangeEvent()
                }),
                  this.props.onClick && this.props.onClick()
              }
            }
          },
          {
            key: 'handleKeydown',
            value: function (e) {
              var t = this,
                n = Ca(e)
              if (e.keyCode !== ba) {
                var r = this.getNextPositionForKey(n, e.keyCode)
                null !== r &&
                  (this.canMove(n, r) &&
                    (this.slideTo(n, r, function () {
                      return t.fireChangeEvent()
                    }),
                    this.props.onKeyPress && this.props.onKeyPress()),
                  Ea(e))
              } else e.currentTarget.blur()
            }
          },
          {
            key: 'validatePosition',
            value: function (e, t) {
              var n = this.state,
                r = n.handlePos,
                i = n.handleDimensions
              return Math.max(
                Math.min(t, void 0 !== r[e + 1] ? r[e + 1] - i : _a),
                void 0 !== r[e - 1] ? r[e - 1] + i : 0
              )
            }
          },
          {
            key: 'validateValues',
            value: function (e, t) {
              var n = t || this.props,
                i = n.max,
                a = n.min
              return e.map(function (e, t, n) {
                var r = Math.max(Math.min(e, i), a)
                return n.length && r < n[t - 1] ? n[t - 1] : r
              })
            }
          },
          {
            key: 'canMove',
            value: function (e, t) {
              var n = this.state,
                r = n.handlePos,
                i = n.handleDimensions
              return (
                !(t < 0) &&
                !(_a < t) &&
                !((void 0 !== r[e + 1] ? r[e + 1] - i : 1 / 0) < t) &&
                !(t < (void 0 !== r[e - 1] ? r[e - 1] + i : -1 / 0))
              )
            }
          },
          {
            key: 'fireChangeEvent',
            value: function () {
              var e = this.props.onChange
              e && e(this.getPublicState())
            }
          },
          {
            key: 'slideTo',
            value: function (e, t, n) {
              var r = this,
                i = this.getNextState(e, t)
              this.setState(i, function () {
                var e = r.props.onValuesUpdated
                e && e(r.getPublicState()), n && n()
              })
            }
          },
          {
            key: 'updateNewValues',
            value: function (e) {
              var t = this
              if (null === this.state.slidingIndex) {
                var n = e.max,
                  r = e.min,
                  i = e.values,
                  a = this.validateValues(i, e)
                this.setState(
                  {
                    handlePos: a.map(function (e) {
                      return Ia(e, r, n)
                    }),
                    values: a
                  },
                  function () {
                    return t.fireChangeEvent()
                  }
                )
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var r = this,
                e = this.props,
                t = e.children,
                i = e.disabled,
                a = e.handle,
                s = e.max,
                o = e.min,
                c = e.orientation,
                u = e.pitComponent,
                n = e.pitPoints,
                l = e.progressBar,
                d = this.state,
                h = d.className,
                f = d.handlePos,
                m = d.values
              return An(
                'div',
                {
                  className: h,
                  ref: function (e) {
                    r.rheostat = e
                  },
                  onClick: !i && this.handleClick,
                  style: { position: 'relative' }
                },
                La,
                f.map(function (e, t) {
                  var n =
                    'vertical' === c
                      ? { top: ''.concat(e, '%'), position: 'absolute' }
                      : { left: ''.concat(e, '%'), position: 'absolute' }
                  return An(a, {
                    'aria-valuemax': r.getMaxValue(t),
                    'aria-valuemin': r.getMinValue(t),
                    'aria-valuenow': m[t],
                    'aria-disabled': i,
                    'data-handle-key': t,
                    className: 'rheostat-handle',
                    key: 'handle-'.concat(t),
                    onClick: r.killEvent,
                    onKeyDown: !i && r.handleKeydown,
                    onMouseDown: !i && r.startMouseSlide,
                    onTouchStart: !i && r.startTouchSlide,
                    role: 'slider',
                    style: n,
                    tabIndex: 0
                  })
                }),
                f.map(function (e, t, n) {
                  return 0 === t && 1 < n.length
                    ? null
                    : An(l, {
                        className: 'rheostat-progress',
                        key: 'progress-bar-'.concat(t),
                        style: r.getProgressStyle(t)
                      })
                }),
                u &&
                  n.map(function (e) {
                    var t = Ia(e, o, s),
                      n =
                        'vertical' === c
                          ? { top: ''.concat(t, '%'), position: 'absolute' }
                          : { left: ''.concat(t, '%'), position: 'absolute' }
                    return An(u, { key: 'pit-'.concat(e), style: n }, e)
                  }),
                t
              )
            }
          }
        ]),
        r
      )
    })()
  j(ja, 'defaultProps', {
    className: '',
    children: null,
    disabled: !1,
    handle: ka,
    max: _a,
    min: 0,
    onClick: null,
    onChange: null,
    onKeyPress: null,
    onSliderDragEnd: null,
    onSliderDragMove: null,
    onSliderDragStart: null,
    onValuesUpdated: null,
    orientation: 'horizontal',
    pitComponent: null,
    pitPoints: [],
    progressBar: 'div',
    snap: !1,
    snapPoints: [],
    values: [0]
  })
  function Ma(e) {
    var t = e.style,
      n = e.children,
      r = Math.round(parseFloat(t.left)),
      i = [0, 50, 100].includes(r),
      a = Array.isArray(n) ? n[0] : n,
      s = Math.round(100 * parseInt(a, 10)) / 100
    return An(
      'div',
      {
        style: D(D({}, t), {}, { marginLeft: 100 === r ? '-2px' : 0 }),
        className: di('rheostat-marker', 'rheostat-marker-horizontal', {
          'rheostat-marker-large': i
        })
      },
      i && An('div', { className: 'rheostat-value' }, s)
    )
  }
  var Oa = (function () {
      M(a, Wn)
      var i = H(a)
      function a() {
        var n
        k(this, a)
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r]
        return (
          j(
            A((n = i.call.apply(i, [this].concat(t)))),
            'handleChange',
            function (e) {
              var t = e.values
              n.isDisabled || n.props.refine(t)
            }
          ),
          j(A(n), 'createHandleComponent', function (r) {
            return function (e) {
              var t = Math.round(100 * parseFloat(e['aria-valuenow'])) / 100,
                n = r && r.format ? r.format(t) : t
              return An(
                'div',
                h({}, e, {
                  className: di(e.className, {
                    'rheostat-handle-lower': 0 === e['data-handle-key'],
                    'rheostat-handle-upper': 1 === e['data-handle-key']
                  })
                }),
                r && An('div', { className: 'rheostat-tooltip' }, n)
              )
            }
          }),
          n
        )
      }
      return (
        L(a, [
          {
            key: 'isDisabled',
            get: function () {
              return this.props.min >= this.props.max
            }
          },
          {
            key: 'computeDefaultPitPoints',
            value: function (e) {
              var t = e.min,
                n = e.max,
                r = (n - t) / 34
              return [t].concat(
                P(
                  Ee({ end: 33 }).map(function (e) {
                    return t + r * (e + 1)
                  })
                ),
                [n]
              )
            }
          },
          {
            key: 'computeSnapPoints',
            value: function (e) {
              var t = e.min,
                n = e.max,
                r = e.step
              if (r) return [].concat(P(Ee({ start: t, end: n, step: r })), [n])
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this.props,
                t = e.tooltips,
                n = e.step,
                r = e.pips,
                i = e.values,
                a = e.cssClasses,
                s = this.isDisabled
                  ? { min: this.props.min, max: this.props.max + 0.001 }
                  : this.props,
                o = s.min,
                c = s.max,
                u = this.computeSnapPoints({ min: o, max: c, step: n }),
                l =
                  !1 === r
                    ? []
                    : this.computeDefaultPitPoints({ min: o, max: c })
              return An(
                'div',
                {
                  className: di(a.root, j({}, a.disabledRoot, this.isDisabled))
                },
                An(ja, {
                  handle: this.createHandleComponent(t),
                  onChange: this.handleChange,
                  min: o,
                  max: c,
                  pitComponent: Ma,
                  pitPoints: l,
                  snap: !0,
                  snapPoints: u,
                  values: this.isDisabled ? [o, c] : i,
                  disabled: this.isDisabled
                })
              )
            }
          }
        ]),
        a
      )
    })(),
    Aa = et({ name: 'range-slider' }),
    Ha = St('RangeSlider')
  function Da(e) {
    var t = e.nbHits,
      n = e.nbSortedHits,
      r = e.cssClasses,
      i = e.templateProps,
      a = O(e, ['nbHits', 'nbSortedHits', 'cssClasses', 'templateProps'])
    return An(
      'div',
      { className: di(r.root) },
      An(
        hi,
        h({}, i, {
          templateKey: 'text',
          rootTagName: 'span',
          rootProps: { className: r.text },
          data: D(
            {
              hasManySortedResults: n && 1 < n,
              hasNoSortedResults: 0 === n,
              hasOneSortedResults: 1 === n,
              hasManyResults: 1 < t,
              hasNoResults: 0 === t,
              hasOneResult: 1 === t,
              nbHits: t,
              nbSortedHits: n,
              cssClasses: r
            },
            a
          )
        })
      )
    )
  }
  function Wa(e) {
    var t = e.currentRefinement,
      n = e.refine,
      r = e.cssClasses,
      i = e.templateProps
    return An(
      'div',
      { className: r.root },
      An(
        'label',
        { className: r.label },
        An('input', {
          className: r.checkbox,
          type: 'checkbox',
          checked: t.isRefined,
          onChange: function (e) {
            return n(!e.target.checked)
          }
        }),
        An(
          hi,
          h({}, i, {
            rootTagName: 'span',
            rootProps: { className: r.labelText },
            templateKey: 'labelText',
            data: t
          })
        )
      )
    )
  }
  var Ba = et({ name: 'sort-by' }),
    Ua = St('SortBy'),
    qa = {
      item: '{{#count}}<a class="{{cssClasses.link}}" aria-label="{{value}} & up" href="{{url}}">{{/count}}{{^count}}<div class="{{cssClasses.link}}" aria-label="{{value}} & up" disabled>{{/count}}\n  {{#stars}}<svg class="{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}" aria-hidden="true" width="24" height="24">\n    {{#.}}<use xlink:href="#ais-RatingMenu-starSymbol"></use>{{/.}}{{^.}}<use xlink:href="#ais-RatingMenu-starEmptySymbol"></use>{{/.}}\n  </svg>{{/stars}}\n  <span class="{{cssClasses.label}}">& Up</span>\n  {{#count}}<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n{{#count}}</a>{{/count}}{{^count}}</div>{{/count}}'
    },
    Qa = et({ name: 'rating-menu' }),
    $a = St('RatingMenu'),
    Va = An('path', {
      d: 'M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z'
    }),
    Ka = An('path', {
      d: 'M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z'
    }),
    za = et({ name: 'stats' }),
    Ja = St('Stats'),
    Ya = {
      text: '\n    {{#areHitsSorted}}\n      {{#hasNoSortedResults}}No relevant results{{/hasNoSortedResults}}\n      {{#hasOneSortedResults}}1 relevant result{{/hasOneSortedResults}}\n      {{#hasManySortedResults}}{{#helpers.formatNumber}}{{nbSortedHits}}{{/helpers.formatNumber}} relevant results{{/hasManySortedResults}}\n      sorted out of {{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}}\n    {{/areHitsSorted}}\n    {{^areHitsSorted}}\n      {{#hasNoResults}}No results{{/hasNoResults}}\n      {{#hasOneResult}}1 result{{/hasOneResult}}\n      {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}}\n    {{/areHitsSorted}}\n    found in {{processingTimeMS}}ms'
    },
    Xa = { labelText: '{{name}}' },
    Ga = et({ name: 'toggle-refinement' }),
    Za = St('ToggleRefinement')
  function es(e) {
    var r = e.items,
      i = e.cssClasses,
      a = e.templateProps,
      s = e.createURL,
      o = e.refine
    return An(
      'div',
      { className: di(i.root, j({}, i.noRefinementRoot, 0 === r.length)) },
      An(
        'ul',
        { className: i.list },
        An(
          'li',
          { className: di(i.item, j({}, i.selectedItem, 0 === r.length)) },
          An(
            hi,
            h({}, a, {
              templateKey: 'home',
              rootTagName: 'a',
              rootProps: {
                className: i.link,
                href: s(void 0),
                onClick: function (e) {
                  e.preventDefault(), o(void 0)
                }
              }
            })
          )
        ),
        r.map(function (t, e) {
          var n = e === r.length - 1
          return An(
            'li',
            {
              key: t.label + e,
              className: di(i.item, j({}, i.selectedItem, n))
            },
            An(
              hi,
              h({}, a, {
                templateKey: 'separator',
                rootTagName: 'span',
                rootProps: { className: i.separator, 'aria-hidden': !0 }
              })
            ),
            n
              ? t.label
              : An(
                  'a',
                  {
                    className: i.link,
                    href: s(t.value),
                    onClick: function (e) {
                      e.preventDefault(), o(t.value)
                    }
                  },
                  t.label
                )
          )
        })
      )
    )
  }
  var ts = et({ name: 'analytics' }),
    ns = { home: 'Home', separator: '>' },
    rs = et({ name: 'breadcrumb' }),
    is = St('Breadcrumb')
  function as(e) {
    var t = e.cssClasses,
      n = e.templateProps,
      r = e.items,
      i = e.refine,
      a = (
        Se(r, function (e) {
          return e.isRefined
        }) || { value: '' }
      ).value
    return An(
      'div',
      { className: di(t.root, j({}, t.noRefinementRoot, 0 === r.length)) },
      An(
        'select',
        {
          className: t.select,
          value: a,
          onChange: function (e) {
            i(e.target.value)
          }
        },
        An(
          hi,
          h({}, n, {
            templateKey: 'defaultOption',
            rootTagName: 'option',
            rootProps: { value: '', className: t.option }
          })
        ),
        r.map(function (e) {
          return An(
            hi,
            h({}, n, {
              templateKey: 'item',
              rootTagName: 'option',
              rootProps: { value: e.value, className: t.option },
              key: e.value,
              data: e
            })
          )
        })
      )
    )
  }
  function ss(e) {
    var t = e.url,
      n = e.theme,
      r = e.cssClasses
    return An(
      'div',
      { className: r.root },
      An(
        'a',
        {
          href: t,
          target: '_blank',
          className: r.link,
          'aria-label': 'Search by Algolia',
          rel: 'noopener noreferrer'
        },
        An(
          'svg',
          {
            height: '1.2em',
            className: r.logo,
            viewBox: '0 0 168 24',
            style: { width: 'auto' }
          },
          An('path', {
            fill: 'dark' === n ? '#FFF' : '#5D6494',
            d: 'M6.97 6.68V8.3a4.47 4.47 0 00-2.42-.67 2.2 2.2 0 00-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 011.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 01-2.6.81 5.71 5.71 0 01-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 00-.65-.53 23.03 23.03 0 00-1.64-.78 13.67 13.67 0 01-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 01-.39-.5 4.46 4.46 0 01-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 012.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 00-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58a2.9 2.9 0 00-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 01-3-1.13 4.04 4.04 0 01-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 012.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 012.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 00-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 00.76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 01-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 013.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 00-1.77-.5A2.65 2.65 0 0032.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 012.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z'
          }),
          ls,
          ds,
          An('path', {
            fill: 'dark' === n ? '#FFF' : '#5468FF',
            d: 'M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 00-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87a21.69 21.69 0 01-4.68.5c-.69 0-1.32-.07-1.9-.2a4 4 0 01-1.46-.63 3.3 3.3 0 01-.96-1.13 4.3 4.3 0 01-.34-1.8 3.13 3.13 0 011.43-2.63c.45-.3.95-.5 1.54-.62a8.8 8.8 0 013.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 00-1.1-1.22 3.2 3.2 0 00-1.15-.2 9.75 9.75 0 00-2.95.46l-.33-2.19a11.43 11.43 0 013.56-.53zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 00-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 00-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 01-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 01-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 013.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 00-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 00-2.95.47l-.32-2.19a11.63 11.63 0 013.55-.53zm-8.03-1.27a1.62 1.62 0 000-3.24 1.62 1.62 0 100 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 00-.74-2.79 2.4 2.4 0 00-2.07-1 2.4 2.4 0 00-2.06 1 4.7 4.7 0 00-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 002.07 1.02c.88 0 1.57-.34 2.07-1.02a4.2 4.2 0 00.73-2.63zm2.74 0a6.46 6.46 0 01-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45a6.6 6.6 0 01-2.25-.45 5.1 5.1 0 01-2.88-3.13 7.3 7.3 0 01-.01-4.84 5.13 5.13 0 012.9-3.1 5.67 5.67 0 012.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 01.43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 002.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 00-2.23 1 4.73 4.73 0 00-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 01-2.54.6 5.6 5.6 0 01-2.01-.36 4.2 4.2 0 01-2.58-2.71 9.88 9.88 0 01.02-5.35 4.92 4.92 0 012.93-2.96 6.6 6.6 0 012.43-.46 19.64 19.64 0 014.43.66v10.6z'
          })
        )
      )
    )
  }
  var os = {
      item: '{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})',
      defaultOption: 'See all'
    },
    cs = et({ name: 'menu-select' }),
    us = St('MenuSelect'),
    ls = An('path', {
      fill: '#5468FF',
      d: 'M78.99.94h16.6a2.97 2.97 0 012.96 2.96v16.6a2.97 2.97 0 01-2.97 2.96h-16.6a2.97 2.97 0 01-2.96-2.96V3.9A2.96 2.96 0 0179 .94'
    }),
    ds = An('path', {
      fill: '#FFF',
      d: 'M89.63 5.97v-.78a.98.98 0 00-.98-.97h-2.28a.98.98 0 00-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 013.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 00-1.38 0l-.46.46a.97.97 0 000 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 011.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 00-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 110-8.98 4.49 4.49 0 010 8.98m0-10.85a6.37 6.37 0 100 12.74 6.37 6.37 0 000-12.74'
    }),
    hs = St('PoweredBy'),
    fs = et({ name: 'powered-by' })
  var ms,
    ps,
    gs = [],
    vs = In.__r
  In.__r = function (e) {
    vs && vs(e), (ms = 0), (ps = e.__c).__H && (ps.__H.t = _s(ps.__H.t))
  }
  var ys = In.diffed
  In.diffed = function (e) {
    ys && ys(e)
    var t = e.__c
    if (t) {
      var n = t.__H
      n &&
        ((n.u =
          (n.u.some(function (e) {
            e.ref && (e.ref.current = e.createHandle())
          }),
          [])),
        (n.i = _s(n.i)))
    }
  }
  var bs = In.unmount
  function Ss(e) {
    In.__h && In.__h(ps)
    var t = ps.__H || (ps.__H = { o: [], t: [], i: [], u: [] })
    return e >= t.o.length && t.o.push({}), t.o[e]
  }
  function Rs(e) {
    return (function (n, e, t) {
      var r = Ss(ms++)
      return (
        r.__c ||
          ((r.__c = ps),
          (r.v = [
            t ? t(e) : Cs(void 0, e),
            function (e) {
              var t = n(r.v[0], e)
              r.v[0] !== t && ((r.v[0] = t), r.__c.setState({}))
            }
          ])),
        r.v
      )
    })(Cs, e)
  }
  function ws(e) {
    return (function (e, t) {
      var n = Ss(ms++)
      return Ts(n.m, t) ? ((n.m = t), (n.p = e), (n.v = e())) : n.v
    })(function () {
      return { current: e }
    }, [])
  }
  In.unmount = function (e) {
    bs && bs(e)
    var t = e.__c
    if (t) {
      var n = t.__H
      n &&
        n.o.forEach(function (e) {
          return e.l && e.l()
        })
    }
  }
  var Ps = function () {}
  function xs() {
    gs.some(function (e) {
      ;(e.s = !1), e.__P && (e.__H.t = _s(e.__H.t))
    }),
      (gs = [])
  }
  if ('undefined' != typeof window) {
    var Ns = In.requestAnimationFrame
    Ps = function (e) {
      ;((!e.s && (e.s = !0) && 1 === gs.push(e)) ||
        Ns !== In.requestAnimationFrame) &&
        ((Ns = In.requestAnimationFrame),
        (
          In.requestAnimationFrame ||
          function (e) {
            function t() {
              clearTimeout(n), cancelAnimationFrame(r), setTimeout(e)
            }
            var n = setTimeout(t, 100),
              r = requestAnimationFrame(t)
          }
        )(xs))
    }
  }
  function _s(e) {
    return e.forEach(Is), e.forEach(Fs), []
  }
  function Is(e) {
    e.l && e.l()
  }
  function Fs(e) {
    var t = e.v()
    'function' == typeof t && (e.l = t)
  }
  function Ts(n, e) {
    return (
      !n ||
      e.some(function (e, t) {
        return e !== n[t]
      })
    )
  }
  function Cs(e, t) {
    return 'function' == typeof t ? t(e) : t
  }
  function Es(e) {
    var t,
      n = W(Rs(e.isCollapsed), 2),
      r = n[0],
      i = n[1],
      a = W(Rs(!1), 2),
      s = a[0],
      o = a[1],
      c = ws(null)
    return (
      (function (e, t) {
        var n = Ss(ms++)
        Ts(n.m, t) && ((n.v = e), (n.m = t), ps.__H.t.push(n), Ps(ps))
      })(
        function () {
          if (c.current)
            return (
              c.current.appendChild(e.bodyElement),
              function () {
                c.current.removeChild(e.bodyElement)
              }
            )
        },
        [c, e.bodyElement]
      ),
      s || e.isCollapsed === r || i(e.isCollapsed),
      An(
        'div',
        {
          className: di(
            e.cssClasses.root,
            ((t = {}),
            j(t, e.cssClasses.noRefinementRoot, e.hidden),
            j(t, e.cssClasses.collapsibleRoot, e.collapsible),
            j(t, e.cssClasses.collapsedRoot, r),
            t)
          ),
          hidden: e.hidden
        },
        e.templates.header &&
          An(
            'div',
            { className: e.cssClasses.header },
            An(hi, {
              templates: e.templates,
              templateKey: 'header',
              rootTagName: 'span',
              data: e.data
            }),
            e.collapsible &&
              An(
                'button',
                {
                  className: e.cssClasses.collapseButton,
                  'aria-expanded': !r,
                  onClick: function (e) {
                    e.preventDefault(),
                      o(!0),
                      i(function (e) {
                        return !e
                      })
                  }
                },
                An(hi, {
                  templates: e.templates,
                  templateKey: 'collapseButtonText',
                  rootTagName: 'span',
                  data: { collapsed: r }
                })
              )
          ),
        An('div', { className: e.cssClasses.body, ref: c }),
        e.templates.footer &&
          An(hi, {
            templates: e.templates,
            templateKey: 'footer',
            rootProps: { className: e.cssClasses.footer },
            data: e.data
          })
      )
    )
  }
  function ks(e) {
    var t = e.cssClasses,
      n = e.isBrowserSupported,
      r = e.isListening,
      i = e.toggleListening,
      a = e.voiceListeningState,
      s = e.templates,
      o = a.status,
      c = a.transcript,
      u = a.isSpeechFinal,
      l = a.errorCode
    return An(
      'div',
      { className: t.root },
      An(hi, {
        templateKey: 'buttonText',
        rootTagName: 'button',
        rootProps: {
          className: t.button,
          type: 'button',
          title: 'Search by voice'.concat(
            n ? '' : ' (not supported on this browser)'
          ),
          onClick: function (e) {
            e.currentTarget instanceof HTMLElement && e.currentTarget.blur(),
              i()
          },
          disabled: !n
        },
        data: {
          status: o,
          errorCode: l,
          isListening: r,
          transcript: c,
          isSpeechFinal: u,
          isBrowserSupported: n
        },
        templates: s
      }),
      An(hi, {
        templateKey: 'status',
        rootProps: { className: t.status },
        data: {
          status: o,
          errorCode: l,
          isListening: r,
          transcript: c,
          isSpeechFinal: u,
          isBrowserSupported: n
        },
        templates: s
      })
    )
  }
  function Ls(e) {
    var t = e.isBrowserSupported,
      n = e.isListening,
      r = e.toggleListening,
      i = e.voiceListeningState,
      a = e.widgetParams,
      s = a.container,
      o = a.cssClasses,
      c = a.templates
    tr(
      An(ks, {
        cssClasses: o,
        templates: c,
        isBrowserSupported: t,
        isListening: n,
        toggleListening: r,
        voiceListeningState: i
      }),
      s
    )
  }
  function js(e) {
    var t = e.cssClasses,
      n = e.templates,
      r = e.items
    return An(hi, {
      templateKey: 'default',
      templates: n,
      rootProps: { className: t.root },
      data: { items: r }
    })
  }
  function Ms(e) {
    var t = e.items,
      n = e.widgetParams,
      r = n.container,
      i = n.cssClasses,
      a = n.templates
    tr(An(js, { cssClasses: i, templates: a, items: t }), r)
  }
  function Os(e) {
    var t = e.hits,
      n = e.isLoading,
      r = e.cssClasses,
      i = e.templateProps
    return An(
      'div',
      { className: di(r.root, j({}, r.emptyRoot, 0 === t.length)) },
      An(
        hi,
        h({}, i, {
          templateKey: 'header',
          rootProps: { className: r.header },
          data: { hits: t, isLoading: n }
        })
      ),
      n
        ? An(
            hi,
            h({}, i, {
              templateKey: 'loader',
              rootProps: { className: r.loader }
            })
          )
        : An(
            'ul',
            { className: r.list },
            t.map(function (e, t) {
              return An(
                hi,
                h({}, i, {
                  templateKey: 'item',
                  rootTagName: 'li',
                  rootProps: { className: r.item },
                  key: e.objectID,
                  data: D(D({}, e), {}, { __hitIndex: t })
                })
              )
            })
          )
    )
  }
  function As(e) {
    var t = e.cssClasses,
      n = e.templates,
      r = e.isRelevantSorted,
      i = e.isVirtualReplica,
      a = e.refine
    return i
      ? An(
          'div',
          { className: t.root },
          An(hi, {
            templateKey: 'text',
            templates: n,
            rootProps: { className: t.text },
            data: { isRelevantSorted: r }
          }),
          An(
            'button',
            {
              type: 'button',
              className: t.button,
              onClick: function () {
                a(r ? 0 : void 0)
              }
            },
            An(hi, {
              rootTagName: 'span',
              templateKey: 'button',
              templates: n,
              data: { isRelevantSorted: r }
            })
          )
        )
      : null
  }
  function Hs(e) {
    var t = e.isRelevantSorted,
      n = e.isVirtualReplica,
      r = e.refine,
      i = e.widgetParams,
      a = i.container,
      s = i.cssClasses,
      o = i.templates
    tr(
      An(As, {
        cssClasses: s,
        templates: o,
        isRelevantSorted: t,
        isVirtualReplica: n,
        refine: r
      }),
      a
    )
  }
  var Ds = et({ name: 'panel' }),
    Ws = St('Panel'),
    Bs = {
      buttonText: function (e) {
        var t = e.status,
          n = e.errorCode,
          r = e.isListening
        return '<svg\n       xmlns="http://www.w3.org/2000/svg"\n       width="16"\n       height="16"\n       viewBox="0 0 24 24"\n       fill="none"\n       stroke="currentColor"\n       stroke-width="2"\n       stroke-linecap="round"\n       stroke-linejoin="round"\n     >\n       '.concat(
          (function (e, t, n) {
            return 'error' === e && 'not-allowed' === t
              ? '<line x1="1" y1="1" x2="23" y2="23"></line>\n            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>\n            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>\n            <line x1="12" y1="19" x2="12" y2="23"></line>\n            <line x1="8" y1="23" x2="16" y2="23"></line>'
              : '<path\n            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"\n            fill="'.concat(
                  n ? 'currentColor' : 'none',
                  '">\n          </path>\n          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>\n          <line x1="12" y1="19" x2="12" y2="23"></line>\n          <line x1="8" y1="23" x2="16" y2="23"></line>'
                )
          })(t, n, r),
          '\n     </svg>'
        )
      },
      status: '<p>{{transcript}}</p>'
    },
    Us = et({ name: 'voice-search' }),
    qs = St('VoiceSearch'),
    Qs = et({ name: 'query-rule-custom-data' }),
    $s = St('QueryRuleCustomData'),
    Vs = et({ name: 'query-rule-context' }),
    Ks = {
      header: '',
      loader: '',
      item: function (e) {
        return JSON.stringify(e)
      }
    },
    zs = et({ name: 'answers' }),
    Js = St('Answers'),
    Ys = {
      text: '',
      button: function (e) {
        return e.isRelevantSorted ? 'See all results' : 'See relevant results'
      }
    },
    Xs = et({ name: 'relevant-sort' }),
    Gs = St('RelevantSort'),
    Zs = Object.freeze({
      __proto__: null,
      clearRefinements: function (e) {
        var t = e || {},
          n = t.container,
          r = t.templates,
          i = void 0 === r ? vi : r,
          a = t.includedAttributes,
          s = t.excludedAttributes,
          o = t.transformItems,
          c = t.cssClasses,
          u = void 0 === c ? {} : c
        if (!n) throw new Error(yi('The `container` option is required.'))
        var l = de(n),
          d = {
            root: di(bi(), u.root),
            button: di(bi({ descendantName: 'button' }), u.button),
            disabledButton: di(
              bi({ descendantName: 'button', modifierName: 'disabled' }),
              u.disabledButton
            )
          },
          h = (function (e) {
            var a = e.containerNode,
              s = e.cssClasses,
              o = e.renderState,
              c = e.templates
            return function (e, t) {
              var n = e.refine,
                r = e.hasRefinements,
                i = e.instantSearchInstance
              t
                ? (o.templateProps = me({
                    defaultTemplates: vi,
                    templatesConfig: i.templatesConfig,
                    templates: c
                  }))
                : tr(
                    An(fi, {
                      refine: n,
                      cssClasses: s,
                      hasRefinements: r,
                      templateProps: o.templateProps
                    }),
                    a
                  )
            }
          })({ containerNode: l, cssClasses: d, renderState: {}, templates: i })
        return D(
          D(
            {},
            hn(h, function () {
              return tr(null, l)
            })({
              includedAttributes: a,
              excludedAttributes: s,
              transformItems: o
            })
          ),
          {},
          { $$widgetType: 'ais.clearRefinements' }
        )
      },
      configure: function (e) {
        return D(
          D({}, Yr(Ie)({ searchParameters: e })),
          {},
          { $$widgetType: 'ais.configure' }
        )
      },
      EXPERIMENTAL_configureRelatedItems: function (e) {
        return D(
          D({}, Zr(Ie)(e)),
          {},
          { $$widgetType: 'ais.configureRelatedItems' }
        )
      },
      currentRefinements: function (e) {
        var t = e || {},
          n = t.container,
          r = t.includedAttributes,
          i = t.excludedAttributes,
          a = t.cssClasses,
          s = void 0 === a ? {} : a,
          o = t.transformItems
        if (!n) throw new Error(Si('The `container` option is required.'))
        var c = de(n),
          u = {
            root: di(Ri(), s.root),
            list: di(Ri({ descendantName: 'list' }), s.list),
            item: di(Ri({ descendantName: 'item' }), s.item),
            label: di(Ri({ descendantName: 'label' }), s.label),
            category: di(Ri({ descendantName: 'category' }), s.category),
            categoryLabel: di(
              Ri({ descendantName: 'categoryLabel' }),
              s.categoryLabel
            ),
            delete: di(Ri({ descendantName: 'delete' }), s.delete)
          }
        return D(
          D(
            {},
            pn(pi, function () {
              return tr(null, c)
            })({
              container: c,
              cssClasses: u,
              includedAttributes: r,
              excludedAttributes: i,
              transformItems: o
            })
          ),
          {},
          { $$widgetType: 'ais.currentRefinements' }
        )
      },
      geoSearch: function (e) {
        var t = e || {},
          n = t.initialZoom,
          r = void 0 === n ? 1 : n,
          i = t.initialPosition,
          a = void 0 === i ? { lat: 0, lng: 0 } : i,
          s = t.templates,
          o = void 0 === s ? {} : s,
          c = t.cssClasses,
          u = void 0 === c ? {} : c,
          l = t.builtInMarker,
          d = void 0 === l ? {} : l,
          h = t.customHTMLMarker,
          f = t.enableRefine,
          m = void 0 === f || f,
          p = t.enableClearMapRefinement,
          g = void 0 === p || p,
          v = t.enableRefineControl,
          y = void 0 === v || v,
          b = t.container,
          S = t.googleReference,
          R = O(t, [
            'initialZoom',
            'initialPosition',
            'templates',
            'cssClasses',
            'builtInMarker',
            'customHTMLMarker',
            'enableRefine',
            'enableClearMapRefinement',
            'enableRefineControl',
            'container',
            'googleReference'
          ]),
          w = { createOptions: Ie, events: {} },
          P = { createOptions: Ie, events: {} }
        if (!b) throw new Error(Fi('The `container` option is required.'))
        if (!S) throw new Error(Fi('The `googleReference` option is required.'))
        var x = de(b),
          N = {
            root: di(Ti(), u.root),
            tree: Ti({ descendantName: 'tree' }),
            map: di(Ti({ descendantName: 'map' }), u.map),
            control: di(Ti({ descendantName: 'control' }), u.control),
            label: di(Ti({ descendantName: 'label' }), u.label),
            selectedLabel: di(
              Ti({ descendantName: 'label', modifierName: 'selected' }),
              u.selectedLabel
            ),
            input: di(Ti({ descendantName: 'input' }), u.input),
            redo: di(Ti({ descendantName: 'redo' }), u.redo),
            disabledRedo: di(
              Ti({ descendantName: 'redo', modifierName: 'disabled' }),
              u.disabledRedo
            ),
            reset: di(Ti({ descendantName: 'reset' }), u.reset)
          },
          _ = D(D({}, Ii), o),
          I = D(D({}, w), d),
          F = (Boolean(h) || Boolean(o.HTMLMarker)) && D(D({}, P), h),
          T = (function (d) {
            return (function () {
              M(l, d.maps.OverlayView)
              var u = H(l)
              function l(e) {
                var t,
                  n = e.__id,
                  r = e.position,
                  i = e.map,
                  a = e.template,
                  s = e.className,
                  o = e.anchor,
                  c = void 0 === o ? { x: 0, y: 0 } : o
                return (
                  k(this, l),
                  j(A((t = u.call(this))), '__id', void 0),
                  j(A(t), 'anchor', void 0),
                  j(A(t), 'offset', void 0),
                  j(A(t), 'listeners', void 0),
                  j(A(t), 'latLng', void 0),
                  j(A(t), 'element', void 0),
                  (t.__id = n),
                  (t.anchor = c),
                  (t.listeners = {}),
                  (t.latLng = new d.maps.LatLng(r)),
                  (t.element = document.createElement('div')),
                  (t.element.className = s),
                  (t.element.style.position = 'absolute'),
                  (t.element.innerHTML = a),
                  t.setMap(i),
                  t
                )
              }
              return (
                L(l, [
                  {
                    key: 'onAdd',
                    value: function () {
                      this.getPanes().overlayMouseTarget.appendChild(
                        this.element
                      )
                      var e = this.element.getBoundingClientRect()
                      ;(this.offset = {
                        x: this.anchor.x + e.width / 2,
                        y: this.anchor.y + e.height
                      }),
                        (this.element.style.width = ''.concat(e.width, 'px'))
                    }
                  },
                  {
                    key: 'draw',
                    value: function () {
                      var e = this.getProjection().fromLatLngToDivPixel(
                        this.latLng
                      )
                      ;(this.element.style.left = ''.concat(
                        Math.round(e.x - this.offset.x),
                        'px'
                      )),
                        (this.element.style.top = ''.concat(
                          Math.round(e.y - this.offset.y),
                          'px'
                        )),
                        (this.element.style.zIndex = String(
                          parseInt(this.element.style.top, 10)
                        ))
                    }
                  },
                  {
                    key: 'onRemove',
                    value: function () {
                      var t = this
                      this.element &&
                        (this.element.parentNode.removeChild(this.element),
                        Object.keys(this.listeners).forEach(function (e) {
                          t.element.removeEventListener(e, t.listeners[e])
                        }),
                        delete this.element,
                        delete this.listeners)
                    }
                  },
                  {
                    key: 'addListener',
                    value: function (e, t) {
                      this.listeners[e] = t
                      var n = this.element
                      return (
                        n.addEventListener(e, t),
                        {
                          remove: function () {
                            return n.removeEventListener(e, t)
                          }
                        }
                      )
                    }
                  },
                  {
                    key: 'getPosition',
                    value: function () {
                      return this.latLng
                    }
                  }
                ]),
                l
              )
            })()
          })(S),
          C = F
            ? function (e) {
                var t = e.item,
                  n = O(e, ['item'])
                return new T(
                  D(
                    D(D({}, F.createOptions(t)), n),
                    {},
                    {
                      __id: t.objectID,
                      position: t._geoloc,
                      className: di(Ti({ descendantName: 'marker' })),
                      template: be({
                        templateKey: 'HTMLMarker',
                        templates: _,
                        data: t
                      })
                    }
                  )
                )
              }
            : function (e) {
                var t = e.item,
                  n = O(e, ['item'])
                return new S.maps.Marker(
                  D(
                    D(D({}, I.createOptions(t)), n),
                    {},
                    { __id: t.objectID, position: t._geoloc }
                  )
                )
              },
          E = F || I
        return D(
          D(
            {},
            qr(_i, function () {
              return tr(null, x)
            })(
              D(
                D({}, R),
                {},
                {
                  renderState: {},
                  container: x,
                  googleReference: S,
                  initialZoom: r,
                  initialPosition: a,
                  templates: _,
                  cssClasses: N,
                  createMarker: C,
                  markerOptions: E,
                  enableRefine: m,
                  enableClearMapRefinement: g,
                  enableRefineControl: y
                }
              )
            )
          ),
          {},
          { $$widgetType: 'ais.geoSearch' }
        )
      },
      hierarchicalMenu: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attributes,
          i = t.separator,
          a = t.rootPath,
          s = t.showParentLevel,
          o = t.limit,
          c = t.showMore,
          u = void 0 !== c && c,
          l = t.showMoreLimit,
          d = t.sortBy,
          h = t.transformItems,
          f = t.templates,
          m = void 0 === f ? Oi : f,
          p = t.cssClasses,
          g = void 0 === p ? {} : p
        if (!n) throw new Error(Ai('The `container` option is required.'))
        var v = de(n),
          y = (function (e) {
            var u = e.cssClasses,
              l = e.containerNode,
              d = e.showMore,
              h = e.templates,
              f = e.renderState
            return function (e, t) {
              var n = e.createURL,
                r = e.items,
                i = e.refine,
                a = e.instantSearchInstance,
                s = e.isShowingMore,
                o = e.toggleShowMore,
                c = e.canToggleShowMore
              t
                ? (f.templateProps = me({
                    defaultTemplates: Oi,
                    templatesConfig: a.templatesConfig,
                    templates: h
                  }))
                : tr(
                    An(ji, {
                      createURL: n,
                      cssClasses: u,
                      facetValues: r,
                      templateProps: f.templateProps,
                      toggleRefinement: i,
                      showMore: d,
                      toggleShowMore: o,
                      isShowingMore: s,
                      canToggleShowMore: c
                    }),
                    l
                  )
            }
          })({
            cssClasses: {
              root: di(Hi(), g.root),
              noRefinementRoot: di(
                Hi({ modifierName: 'noRefinement' }),
                g.noRefinementRoot
              ),
              list: di(Hi({ descendantName: 'list' }), g.list),
              childList: di(
                Hi({ descendantName: 'list', modifierName: 'child' }),
                g.childList
              ),
              item: di(Hi({ descendantName: 'item' }), g.item),
              selectedItem: di(
                Hi({ descendantName: 'item', modifierName: 'selected' }),
                g.selectedItem
              ),
              parentItem: di(
                Hi({ descendantName: 'item', modifierName: 'parent' }),
                g.parentItem
              ),
              link: di(Hi({ descendantName: 'link' }), g.link),
              label: di(Hi({ descendantName: 'label' }), g.label),
              count: di(Hi({ descendantName: 'count' }), g.count),
              showMore: di(Hi({ descendantName: 'showMore' }), g.showMore),
              disabledShowMore: di(
                Hi({ descendantName: 'showMore', modifierName: 'disabled' }),
                g.disabledShowMore
              )
            },
            containerNode: v,
            templates: m,
            showMore: u,
            renderState: {}
          })
        return D(
          D(
            {},
            Rn(y, function () {
              return tr(null, v)
            })({
              attributes: r,
              separator: i,
              rootPath: a,
              showParentLevel: s,
              limit: o,
              showMore: u,
              showMoreLimit: l,
              sortBy: d,
              transformItems: h
            })
          ),
          {},
          { $$widgetType: 'ais.hierarchicalMenu' }
        )
      },
      hits: function (e) {
        var t = e || {},
          n = t.container,
          r = t.escapeHTML,
          i = t.transformItems,
          a = t.templates,
          s = void 0 === a ? Di : a,
          o = t.cssClasses,
          c = void 0 === o ? {} : o
        if (!n) throw new Error(Wi('The `container` option is required.'))
        var u = de(n),
          l = {
            root: di(Bi(), c.root),
            emptyRoot: di(Bi({ modifierName: 'empty' }), c.emptyRoot),
            list: di(Bi({ descendantName: 'list' }), c.list),
            item: di(Bi({ descendantName: 'item' }), c.item)
          },
          d = (function (e) {
            var o = e.renderState,
              c = e.cssClasses,
              u = e.containerNode,
              l = e.templates
            return function (e, t) {
              var n = e.hits,
                r = e.results,
                i = e.instantSearchInstance,
                a = e.insights,
                s = e.bindEvent
              t
                ? (o.templateProps = me({
                    defaultTemplates: Di,
                    templatesConfig: i.templatesConfig,
                    templates: l
                  }))
                : tr(
                    An(Ui, {
                      cssClasses: c,
                      hits: n,
                      results: r,
                      templateProps: o.templateProps,
                      insights: a,
                      sendEvent: function (e) {
                        i.sendEventToInsights(e)
                      },
                      bindEvent: s
                    }),
                    u
                  )
            }
          })({ containerNode: u, cssClasses: l, renderState: {}, templates: s })
        return D(
          D(
            {},
            _n(wn)(d, function () {
              return tr(null, u)
            })({ escapeHTML: r, transformItems: i })
          ),
          {},
          { $$widgetType: 'ais.hits' }
        )
      },
      hitsPerPage: function (e) {
        var t = e || {},
          n = t.container,
          r = t.items,
          i = t.cssClasses,
          a = void 0 === i ? {} : i,
          s = t.transformItems
        if (!n) throw new Error(Qi('The `container` option is required.'))
        var o = de(n),
          c = {
            root: di($i(), a.root),
            select: di($i({ descendantName: 'select' }), a.select),
            option: di($i({ descendantName: 'option' }), a.option)
          },
          u = (function (e) {
            var a = e.containerNode,
              s = e.cssClasses
            return function (e, t) {
              var n = e.items,
                r = e.refine
              if (!t) {
                var i = (
                  Se(n, function (e) {
                    return e.isRefined
                  }) || {}
                ).value
                tr(
                  An(
                    'div',
                    { className: s.root },
                    An(qi, {
                      cssClasses: s,
                      currentValue: i,
                      options: n,
                      setValue: r
                    })
                  ),
                  a
                )
              }
            }
          })({ containerNode: o, cssClasses: c })
        return D(
          D(
            {},
            ir(u, function () {
              return tr(null, o)
            })({ items: r, transformItems: s })
          ),
          {},
          { $$widgetType: 'ais.hitsPerPage' }
        )
      },
      infiniteHits: function (e) {
        var t = e || {},
          n = t.container,
          r = t.escapeHTML,
          i = t.transformItems,
          a = t.templates,
          s = void 0 === a ? Vi : a,
          o = t.cssClasses,
          c = void 0 === o ? {} : o,
          u = t.showPrevious,
          l = t.cache
        if (!n) throw new Error(Ki('The `container` option is required.'))
        var d = de(n),
          h = {
            root: di(zi(), c.root),
            emptyRoot: di(zi({ modifierName: 'empty' }), c.emptyRoot),
            item: di(zi({ descendantName: 'item' }), c.item),
            list: di(zi({ descendantName: 'list' }), c.list),
            loadPrevious: di(
              zi({ descendantName: 'loadPrevious' }),
              c.loadPrevious
            ),
            disabledLoadPrevious: di(
              zi({ descendantName: 'loadPrevious', modifierName: 'disabled' }),
              c.disabledLoadPrevious
            ),
            loadMore: di(zi({ descendantName: 'loadMore' }), c.loadMore),
            disabledLoadMore: di(
              zi({ descendantName: 'loadMore', modifierName: 'disabled' }),
              c.disabledLoadMore
            )
          },
          f = (function (e) {
            var d = e.cssClasses,
              h = e.containerNode,
              f = e.renderState,
              m = e.templates,
              p = e.showPrevious
            return function (e, t) {
              var n = e.hits,
                r = e.results,
                i = e.showMore,
                a = e.showPrevious,
                s = e.isFirstPage,
                o = e.isLastPage,
                c = e.instantSearchInstance,
                u = e.insights,
                l = e.bindEvent
              t
                ? (f.templateProps = me({
                    defaultTemplates: Vi,
                    templatesConfig: c.templatesConfig,
                    templates: m
                  }))
                : tr(
                    An(Ji, {
                      cssClasses: d,
                      hits: n,
                      results: r,
                      hasShowPrevious: p,
                      showPrevious: a,
                      showMore: i,
                      templateProps: f.templateProps,
                      isFirstPage: s,
                      isLastPage: o,
                      insights: u,
                      sendEvent: function (e) {
                        c.sendEventToInsights(e)
                      },
                      bindEvent: l
                    }),
                    h
                  )
            }
          })({
            containerNode: d,
            cssClasses: h,
            templates: s,
            showPrevious: u,
            renderState: {}
          })
        return D(
          D(
            {},
            _n(ur)(f, function () {
              return tr(null, d)
            })({ escapeHTML: r, transformItems: i, showPrevious: u, cache: l })
          ),
          {},
          { $$widgetType: 'ais.infiniteHits' }
        )
      },
      menu: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.sortBy,
          a = t.limit,
          s = t.showMore,
          o = t.showMoreLimit,
          c = t.cssClasses,
          u = void 0 === c ? {} : c,
          l = t.templates,
          d = void 0 === l ? Yi : l,
          h = t.transformItems
        if (!n) throw new Error(Xi('The `container` option is required.'))
        var f = de(n),
          m = {
            root: di(Gi(), u.root),
            noRefinementRoot: di(
              Gi({ modifierName: 'noRefinement' }),
              u.noRefinementRoot
            ),
            list: di(Gi({ descendantName: 'list' }), u.list),
            item: di(Gi({ descendantName: 'item' }), u.item),
            selectedItem: di(
              Gi({ descendantName: 'item', modifierName: 'selected' }),
              u.selectedItem
            ),
            link: di(Gi({ descendantName: 'link' }), u.link),
            label: di(Gi({ descendantName: 'label' }), u.label),
            count: di(Gi({ descendantName: 'count' }), u.count),
            showMore: di(Gi({ descendantName: 'showMore' }), u.showMore),
            disabledShowMore: di(
              Gi({ descendantName: 'showMore', modifierName: 'disabled' }),
              u.disabledShowMore
            )
          },
          p = (function (e) {
            var l = e.containerNode,
              d = e.cssClasses,
              h = e.renderState,
              f = e.templates,
              m = e.showMore
            return function (e, t) {
              var n = e.refine,
                r = e.items,
                i = e.createURL,
                a = e.instantSearchInstance,
                s = e.isShowingMore,
                o = e.toggleShowMore,
                c = e.canToggleShowMore
              if (t)
                h.templateProps = me({
                  defaultTemplates: Yi,
                  templatesConfig: a.templatesConfig,
                  templates: f
                })
              else {
                var u = r.map(function (e) {
                  return D(D({}, e), {}, { url: i(e.value) })
                })
                tr(
                  An(ji, {
                    createURL: i,
                    cssClasses: d,
                    facetValues: u,
                    showMore: m,
                    templateProps: h.templateProps,
                    toggleRefinement: n,
                    toggleShowMore: o,
                    isShowingMore: s,
                    canToggleShowMore: c
                  }),
                  l
                )
              }
            }
          })({
            containerNode: f,
            cssClasses: m,
            renderState: {},
            templates: d,
            showMore: s
          })
        return D(
          D(
            {},
            lr(p, function () {
              return tr(null, f)
            })({
              attribute: r,
              limit: a,
              showMore: s,
              showMoreLimit: o,
              sortBy: i,
              transformItems: h
            })
          ),
          {},
          { $$widgetType: 'ais.menu' }
        )
      },
      refinementList: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.operator,
          a = t.sortBy,
          s = t.limit,
          o = t.showMore,
          c = t.showMoreLimit,
          u = t.searchable,
          l = void 0 !== u && u,
          d = t.searchablePlaceholder,
          h = void 0 === d ? 'Search...' : d,
          f = t.searchableEscapeFacetValues,
          m = void 0 === f || f,
          p = t.searchableIsAlwaysActive,
          g = void 0 === p || p,
          v = t.cssClasses,
          y = void 0 === v ? {} : v,
          b = t.templates,
          S = void 0 === b ? ra : b,
          R = t.transformItems
        if (!n) throw new Error(ea('The `container` option is required.'))
        var w = !!l && Boolean(m),
          P = de(n),
          x = {
            root: di(ta(), y.root),
            noRefinementRoot: di(
              ta({ modifierName: 'noRefinement' }),
              y.noRefinementRoot
            ),
            list: di(ta({ descendantName: 'list' }), y.list),
            item: di(ta({ descendantName: 'item' }), y.item),
            selectedItem: di(
              ta({ descendantName: 'item', modifierName: 'selected' }),
              y.selectedItem
            ),
            searchBox: di(ta({ descendantName: 'searchBox' }), y.searchBox),
            label: di(ta({ descendantName: 'label' }), y.label),
            checkbox: di(ta({ descendantName: 'checkbox' }), y.checkbox),
            labelText: di(ta({ descendantName: 'labelText' }), y.labelText),
            count: di(ta({ descendantName: 'count' }), y.count),
            noResults: di(ta({ descendantName: 'noResults' }), y.noResults),
            showMore: di(ta({ descendantName: 'showMore' }), y.showMore),
            disabledShowMore: di(
              ta({ descendantName: 'showMore', modifierName: 'disabled' }),
              y.disabledShowMore
            ),
            searchable: {
              root: di(na(), y.searchableRoot),
              form: di(na({ descendantName: 'form' }), y.searchableForm),
              input: di(na({ descendantName: 'input' }), y.searchableInput),
              submit: di(na({ descendantName: 'submit' }), y.searchableSubmit),
              submitIcon: di(
                na({ descendantName: 'submitIcon' }),
                y.searchableSubmitIcon
              ),
              reset: di(na({ descendantName: 'reset' }), y.searchableReset),
              resetIcon: di(
                na({ descendantName: 'resetIcon' }),
                y.searchableResetIcon
              ),
              loadingIndicator: di(
                na({ descendantName: 'loadingIndicator' }),
                y.searchableLoadingIndicator
              ),
              loadingIcon: di(
                na({ descendantName: 'loadingIcon' }),
                y.searchableLoadingIcon
              )
            }
          },
          N = (function (e) {
            var h = e.containerNode,
              f = e.cssClasses,
              m = e.templates,
              p = e.searchBoxTemplates,
              g = e.renderState,
              v = e.showMore,
              y = e.searchable,
              b = e.searchablePlaceholder,
              S = e.searchableIsAlwaysActive
            return function (e, t) {
              var n = e.refine,
                r = e.items,
                i = e.createURL,
                a = e.searchForItems,
                s = e.isFromSearch,
                o = e.instantSearchInstance,
                c = e.toggleShowMore,
                u = e.isShowingMore,
                l = e.hasExhaustiveItems,
                d = e.canToggleShowMore
              if (t)
                return (
                  (g.templateProps = me({
                    defaultTemplates: ra,
                    templatesConfig: o.templatesConfig,
                    templates: m
                  })),
                  void (g.searchBoxTemplateProps = me({
                    defaultTemplates: Zi,
                    templatesConfig: o.templatesConfig,
                    templates: p
                  }))
                )
              tr(
                An(ji, {
                  createURL: i,
                  cssClasses: f,
                  facetValues: r,
                  templateProps: g.templateProps,
                  searchBoxTemplateProps: g.searchBoxTemplateProps,
                  toggleRefinement: n,
                  searchFacetValues: y ? a : void 0,
                  searchPlaceholder: b,
                  searchIsAlwaysActive: S,
                  isFromSearch: s,
                  showMore: v && !s && 0 < r.length,
                  toggleShowMore: c,
                  isShowingMore: u,
                  hasExhaustiveItems: l,
                  canToggleShowMore: d
                }),
                h
              )
            }
          })({
            containerNode: P,
            cssClasses: x,
            templates: S,
            searchBoxTemplates: {
              submit: S.searchableSubmit,
              reset: S.searchableReset,
              loadingIndicator: S.searchableLoadingIndicator
            },
            renderState: {},
            searchable: l,
            searchablePlaceholder: h,
            searchableIsAlwaysActive: g,
            showMore: o
          })
        return D(
          D(
            {},
            _r(N, function () {
              return tr(null, P)
            })({
              attribute: r,
              operator: i,
              limit: s,
              showMore: o,
              showMoreLimit: c,
              sortBy: a,
              escapeFacetValues: w,
              transformItems: R
            })
          ),
          {},
          { $$widgetType: 'ais.refinementList' }
        )
      },
      numericMenu: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.items,
          a = t.cssClasses,
          s = void 0 === a ? {} : a,
          o = t.templates,
          c = void 0 === o ? ia : o,
          u = t.transformItems
        if (!n) throw new Error(aa('The `container` option is required.'))
        var l = de(n),
          d = {
            root: di(sa(), s.root),
            noRefinementRoot: di(
              sa({ modifierName: 'noRefinement' }),
              s.noRefinementRoot
            ),
            list: di(sa({ descendantName: 'list' }), s.list),
            item: di(sa({ descendantName: 'item' }), s.item),
            selectedItem: di(
              sa({ descendantName: 'item', modifierName: 'selected' }),
              s.selectedItem
            ),
            label: di(sa({ descendantName: 'label' }), s.label),
            radio: di(sa({ descendantName: 'radio' }), s.radio),
            labelText: di(sa({ descendantName: 'labelText' }), s.labelText)
          },
          h = (function (e) {
            var s = e.containerNode,
              o = e.attribute,
              c = e.cssClasses,
              u = e.renderState,
              l = e.templates
            return function (e, t) {
              var n = e.createURL,
                r = e.instantSearchInstance,
                i = e.refine,
                a = e.items
              t
                ? (u.templateProps = me({
                    defaultTemplates: ia,
                    templatesConfig: r.templatesConfig,
                    templates: l
                  }))
                : tr(
                    An(ji, {
                      createURL: n,
                      cssClasses: c,
                      facetValues: a,
                      templateProps: u.templateProps,
                      toggleRefinement: i,
                      attribute: o
                    }),
                    s
                  )
            }
          })({
            containerNode: l,
            attribute: r,
            cssClasses: d,
            renderState: {},
            templates: c
          })
        return D(
          D(
            {},
            dr(h, function () {
              return tr(null, l)
            })({ attribute: r, items: i, transformItems: u })
          ),
          {},
          { $$widgetType: 'ais.numericMenu' }
        )
      },
      pagination: function (e) {
        var t = e || {},
          n = t.container,
          r = t.templates,
          i = void 0 === r ? {} : r,
          a = t.cssClasses,
          s = void 0 === a ? {} : a,
          o = t.totalPages,
          c = t.padding,
          u = t.showFirst,
          l = void 0 === u || u,
          d = t.showLast,
          h = void 0 === d || d,
          f = t.showPrevious,
          m = void 0 === f || f,
          p = t.showNext,
          g = void 0 === p || p,
          v = t.scrollTo,
          y = void 0 === v ? 'body' : v
        if (!n) throw new Error(ua('The `container` option is required.'))
        var b = de(n),
          S = !0 === y ? 'body' : y,
          R = !1 !== S && de(S),
          w = {
            root: di(la(), s.root),
            noRefinementRoot: di(
              la({ modifierName: 'noRefinement' }),
              s.noRefinementRoot
            ),
            list: di(la({ descendantName: 'list' }), s.list),
            item: di(la({ descendantName: 'item' }), s.item),
            firstPageItem: di(
              la({ descendantName: 'item', modifierName: 'firstPage' }),
              s.firstPageItem
            ),
            lastPageItem: di(
              la({ descendantName: 'item', modifierName: 'lastPage' }),
              s.lastPageItem
            ),
            previousPageItem: di(
              la({ descendantName: 'item', modifierName: 'previousPage' }),
              s.previousPageItem
            ),
            nextPageItem: di(
              la({ descendantName: 'item', modifierName: 'nextPage' }),
              s.nextPageItem
            ),
            pageItem: di(
              la({ descendantName: 'item', modifierName: 'page' }),
              s.pageItem
            ),
            selectedItem: di(
              la({ descendantName: 'item', modifierName: 'selected' }),
              s.selectedItem
            ),
            disabledItem: di(
              la({ descendantName: 'item', modifierName: 'disabled' }),
              s.disabledItem
            ),
            link: di(la({ descendantName: 'link' }), s.link)
          },
          P = D(D({}, da), i),
          x = (function (e) {
            var l = e.containerNode,
              d = e.cssClasses,
              h = e.templates,
              f = e.totalPages,
              m = e.showFirst,
              p = e.showLast,
              g = e.showPrevious,
              v = e.showNext,
              y = e.scrollToNode
            return function (e, t) {
              var n = e.createURL,
                r = e.currentRefinement,
                i = e.nbHits,
                a = e.nbPages,
                s = e.pages,
                o = e.isFirstPage,
                c = e.isLastPage,
                u = e.refine
              if (!t) {
                tr(
                  An(ca, {
                    createURL: n,
                    cssClasses: d,
                    currentPage: r,
                    templates: h,
                    nbHits: i,
                    nbPages: a,
                    pages: s,
                    totalPages: f,
                    isFirstPage: o,
                    isLastPage: c,
                    setCurrentPage: function (e) {
                      u(e), !1 !== y && y.scrollIntoView()
                    },
                    showFirst: m,
                    showLast: p,
                    showPrevious: g,
                    showNext: v
                  }),
                  l
                )
              }
            }
          })({
            containerNode: b,
            cssClasses: w,
            templates: P,
            showFirst: l,
            showLast: h,
            showPrevious: m,
            showNext: g,
            padding: c,
            scrollToNode: R
          })
        return D(
          D(
            {},
            br(x, function () {
              return tr(null, b)
            })({ totalPages: o, padding: c })
          ),
          {},
          { $$widgetType: 'ais.pagination' }
        )
      },
      rangeInput: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.min,
          a = t.max,
          s = t.precision,
          o = void 0 === s ? 0 : s,
          c = t.cssClasses,
          u = void 0 === c ? {} : c,
          l = t.templates,
          d = void 0 === l ? {} : l
        if (!n) throw new Error(fa('The `container` option is required.'))
        var h = de(n),
          f = D({ separatorText: 'to', submitText: 'Go' }, d),
          m = {
            root: di(ma(), u.root),
            noRefinement: di(ma({ modifierName: 'noRefinement' })),
            form: di(ma({ descendantName: 'form' }), u.form),
            label: di(ma({ descendantName: 'label' }), u.label),
            input: di(ma({ descendantName: 'input' }), u.input),
            inputMin: di(
              ma({ descendantName: 'input', modifierName: 'min' }),
              u.inputMin
            ),
            inputMax: di(
              ma({ descendantName: 'input', modifierName: 'max' }),
              u.inputMax
            ),
            separator: di(ma({ descendantName: 'separator' }), u.separator),
            submit: di(ma({ descendantName: 'submit' }), u.submit)
          },
          p = (function (e) {
            var f = e.containerNode,
              m = e.cssClasses,
              p = e.renderState,
              g = e.templates
            return function (e, t) {
              var n = e.refine,
                r = e.range,
                i = e.start,
                a = e.widgetParams,
                s = e.instantSearchInstance
              if (t)
                p.templateProps = me({
                  templatesConfig: s.templatesConfig,
                  templates: g
                })
              else {
                var o = r.min,
                  c = r.max,
                  u = W(i, 2),
                  l = u[0],
                  d = u[1],
                  h = 1 / Math.pow(10, a.precision)
                tr(
                  An(ha, {
                    min: o,
                    max: c,
                    step: h,
                    values: {
                      min: l !== -1 / 0 && l !== o ? l : void 0,
                      max: d !== 1 / 0 && d !== c ? d : void 0
                    },
                    cssClasses: m,
                    refine: n,
                    templateProps: p.templateProps
                  }),
                  f
                )
              }
            }
          })({ containerNode: h, cssClasses: m, templates: f, renderState: {} })
        return D(
          D(
            {},
            Nr(p, function () {
              return tr(null, h)
            })({ attribute: r, min: i, max: a, precision: o })
          ),
          {},
          { $$type: 'ais.rangeInput', $$widgetType: 'ais.rangeInput' }
        )
      },
      searchBox: function (e) {
        var t = e || {},
          n = t.container,
          r = t.placeholder,
          i = void 0 === r ? '' : r,
          a = t.cssClasses,
          s = void 0 === a ? {} : a,
          o = t.autofocus,
          c = void 0 !== o && o,
          u = t.searchAsYouType,
          l = void 0 === u || u,
          d = t.showReset,
          h = void 0 === d || d,
          f = t.showSubmit,
          m = void 0 === f || f,
          p = t.showLoadingIndicator,
          g = void 0 === p || p,
          v = t.queryHook,
          y = t.templates
        if (!n) throw new Error(pa('The `container` option is required.'))
        var b = de(n),
          S = {
            root: di(ga(), s.root),
            form: di(ga({ descendantName: 'form' }), s.form),
            input: di(ga({ descendantName: 'input' }), s.input),
            submit: di(ga({ descendantName: 'submit' }), s.submit),
            submitIcon: di(ga({ descendantName: 'submitIcon' }), s.submitIcon),
            reset: di(ga({ descendantName: 'reset' }), s.reset),
            resetIcon: di(ga({ descendantName: 'resetIcon' }), s.resetIcon),
            loadingIndicator: di(
              ga({ descendantName: 'loadingIndicator' }),
              s.loadingIndicator
            ),
            loadingIcon: di(
              ga({ descendantName: 'loadingIcon' }),
              s.loadingIcon
            )
          },
          R = (function (e) {
            var i = e.containerNode,
              a = e.cssClasses,
              s = e.placeholder,
              o = e.templates,
              c = e.autofocus,
              u = e.searchAsYouType,
              l = e.showReset,
              d = e.showSubmit,
              h = e.showLoadingIndicator
            return function (e) {
              var t = e.refine,
                n = e.query,
                r = e.isSearchStalled
              tr(
                An(ki, {
                  query: n,
                  placeholder: s,
                  autofocus: c,
                  refine: t,
                  searchAsYouType: u,
                  templates: o,
                  showSubmit: d,
                  showReset: l,
                  showLoadingIndicator: h,
                  isSearchStalled: r,
                  cssClasses: a
                }),
                i
              )
            }
          })({
            containerNode: b,
            cssClasses: S,
            placeholder: i,
            templates: D(D({}, Zi), y),
            autofocus: c,
            searchAsYouType: l,
            showReset: h,
            showSubmit: m,
            showLoadingIndicator: g
          })
        return D(
          D(
            {},
            Ir(R, function () {
              return tr(null, b)
            })({ queryHook: v })
          ),
          {},
          { $$widgetType: 'ais.searchBox' }
        )
      },
      rangeSlider: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.min,
          a = t.max,
          s = t.cssClasses,
          o = void 0 === s ? {} : s,
          c = t.step,
          u = t.pips,
          l = void 0 === u || u,
          d = t.precision,
          h = void 0 === d ? 0 : d,
          f = t.tooltips,
          m = void 0 === f || f
        if (!n) throw new Error(Aa('The `container` option is required.'))
        var p = de(n),
          g = {
            root: di(Ha(), o.root),
            disabledRoot: di(Ha({ modifierName: 'disabled' }), o.disabledRoot)
          },
          v = (function (e) {
            var h = e.containerNode,
              f = e.cssClasses,
              m = e.pips,
              p = e.step,
              g = e.tooltips
            return function (e, t) {
              var n = e.refine,
                r = e.range,
                i = e.start
              if (!t) {
                var a = r.min,
                  s = r.max,
                  o = W(i, 2),
                  c = o[0],
                  u = o[1],
                  l = c === -1 / 0 ? a : c,
                  d = u === 1 / 0 ? s : u
                tr(
                  An(Oa, {
                    cssClasses: f,
                    refine: n,
                    min: a,
                    max: s,
                    values: [s < l ? s : l, d < a ? a : d],
                    tooltips: g,
                    step: p,
                    pips: m
                  }),
                  h
                )
              }
            }
          })({
            containerNode: p,
            step: c,
            pips: l,
            tooltips: m,
            renderState: {},
            cssClasses: g
          })
        return D(
          D(
            {},
            Nr(v, function () {
              return tr(null, p)
            })({ attribute: r, min: i, max: a, precision: h })
          ),
          {},
          { $$type: 'ais.rangeSlider', $$widgetType: 'ais.rangeSlider' }
        )
      },
      sortBy: function (e) {
        var t = e || {},
          n = t.container,
          r = t.items,
          i = t.cssClasses,
          a = void 0 === i ? {} : i,
          s = t.transformItems
        if (!n) throw new Error(Ba('The `container` option is required.'))
        var o = de(n),
          c = {
            root: di(Ua(), a.root),
            select: di(Ua({ descendantName: 'select' }), a.select),
            option: di(Ua({ descendantName: 'option' }), a.option)
          },
          u = (function (e) {
            var a = e.containerNode,
              s = e.cssClasses
            return function (e, t) {
              var n = e.currentRefinement,
                r = e.options,
                i = e.refine
              t ||
                tr(
                  An(
                    'div',
                    { className: s.root },
                    An(qi, {
                      cssClasses: s,
                      currentValue: n,
                      options: r,
                      setValue: i
                    })
                  ),
                  a
                )
            }
          })({ containerNode: o, cssClasses: c })
        return D(
          D(
            {},
            Fr(u, function () {
              return tr(null, o)
            })({ container: o, items: r, transformItems: s })
          ),
          {},
          { $$widgetType: 'ais.sortBy' }
        )
      },
      ratingMenu: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.max,
          a = void 0 === i ? 5 : i,
          s = t.cssClasses,
          o = void 0 === s ? {} : s,
          c = t.templates,
          u = void 0 === c ? qa : c
        if (!n) throw new Error(Qa('The `container` option is required.'))
        var l = de(n),
          d = {
            root: di($a(), o.root),
            noRefinementRoot: di(
              $a({ modifierName: 'noRefinement' }),
              o.noRefinementRoot
            ),
            list: di($a({ descendantName: 'list' }), o.list),
            item: di($a({ descendantName: 'item' }), o.item),
            selectedItem: di(
              $a({ descendantName: 'item', modifierName: 'selected' }),
              o.selectedItem
            ),
            disabledItem: di(
              $a({ descendantName: 'item', modifierName: 'disabled' }),
              o.disabledItem
            ),
            link: di($a({ descendantName: 'link' }), o.link),
            starIcon: di($a({ descendantName: 'starIcon' }), o.starIcon),
            fullStarIcon: di(
              $a({ descendantName: 'starIcon', modifierName: 'full' }),
              o.fullStarIcon
            ),
            emptyStarIcon: di(
              $a({ descendantName: 'starIcon', modifierName: 'empty' }),
              o.emptyStarIcon
            ),
            label: di($a({ descendantName: 'label' }), o.label),
            count: di($a({ descendantName: 'count' }), o.count)
          },
          h = (function (e) {
            var s = e.containerNode,
              o = e.cssClasses,
              c = e.templates,
              u = e.renderState
            return function (e, t) {
              var n = e.refine,
                r = e.items,
                i = e.createURL,
                a = e.instantSearchInstance
              t
                ? (u.templateProps = me({
                    defaultTemplates: qa,
                    templatesConfig: a.templatesConfig,
                    templates: c
                  }))
                : tr(
                    An(
                      ji,
                      {
                        createURL: i,
                        cssClasses: o,
                        facetValues: r,
                        templateProps: u.templateProps,
                        toggleRefinement: n
                      },
                      An(
                        'svg',
                        {
                          xmlns: 'http://www.w3.org/2000/svg',
                          style: 'display:none;'
                        },
                        An(
                          'symbol',
                          {
                            id: $a({ descendantName: 'starSymbol' }),
                            viewBox: '0 0 24 24'
                          },
                          Va
                        ),
                        An(
                          'symbol',
                          {
                            id: $a({ descendantName: 'starEmptySymbol' }),
                            viewBox: '0 0 24 24'
                          },
                          Ka
                        )
                      )
                    ),
                    s
                  )
            }
          })({ containerNode: l, cssClasses: d, renderState: {}, templates: u })
        return D(
          D(
            {},
            Tr(h, function () {
              return tr(null, l)
            })({ attribute: r, max: a })
          ),
          {},
          { $$widgetType: 'ais.ratingMenu' }
        )
      },
      stats: function (e) {
        var t = e || {},
          n = t.container,
          r = t.cssClasses,
          i = void 0 === r ? {} : r,
          a = t.templates,
          s = void 0 === a ? Ya : a
        if (!n) throw new Error(za('The `container` option is required.'))
        var o = de(n),
          c = {
            root: di(Ja(), i.root),
            text: di(Ja({ descendantName: 'text' }), i.text)
          },
          u = (function (e) {
            var d = e.renderState,
              h = e.cssClasses,
              f = e.containerNode,
              m = e.templates
            return function (e, t) {
              var n = e.hitsPerPage,
                r = e.nbHits,
                i = e.nbSortedHits,
                a = e.areHitsSorted,
                s = e.nbPages,
                o = e.page,
                c = e.processingTimeMS,
                u = e.query,
                l = e.instantSearchInstance
              t
                ? (d.templateProps = me({
                    defaultTemplates: Ya,
                    templatesConfig: l.templatesConfig,
                    templates: m
                  }))
                : tr(
                    An(Da, {
                      cssClasses: h,
                      hitsPerPage: n,
                      nbHits: r,
                      nbSortedHits: i,
                      areHitsSorted: a,
                      nbPages: s,
                      page: o,
                      processingTimeMS: c,
                      query: u,
                      templateProps: d.templateProps
                    }),
                    f
                  )
            }
          })({ containerNode: o, cssClasses: c, templates: s, renderState: {} })
        return D(
          D(
            {},
            Cr(u, function () {
              return tr(null, o)
            })({})
          ),
          {},
          { $$widgetType: 'ais.stats' }
        )
      },
      toggleRefinement: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.cssClasses,
          a = void 0 === i ? {} : i,
          s = t.templates,
          o = void 0 === s ? Xa : s,
          c = t.on,
          u = void 0 === c || c,
          l = t.off
        if (!n) throw new Error(Ga('The `container` option is required.'))
        var d = de(n),
          h = {
            root: di(Za(), a.root),
            label: di(Za({ descendantName: 'label' }), a.label),
            checkbox: di(Za({ descendantName: 'checkbox' }), a.checkbox),
            labelText: di(Za({ descendantName: 'labelText' }), a.labelText)
          }
        return D(
          D(
            {},
            Wr(
              (function (e) {
                var s = e.containerNode,
                  o = e.cssClasses,
                  c = e.renderState,
                  u = e.templates
                return function (e, t) {
                  var n = e.value,
                    r = e.createURL,
                    i = e.refine,
                    a = e.instantSearchInstance
                  t
                    ? (c.templateProps = me({
                        defaultTemplates: Xa,
                        templatesConfig: a.templatesConfig,
                        templates: u
                      }))
                    : tr(
                        An(Wa, {
                          createURL: r,
                          cssClasses: o,
                          currentRefinement: n,
                          templateProps: c.templateProps,
                          refine: function (e) {
                            return i({ isRefined: e })
                          }
                        }),
                        s
                      )
                }
              })({
                containerNode: d,
                cssClasses: h,
                renderState: {},
                templates: o
              }),
              function () {
                return tr(null, d)
              }
            )({ attribute: r, on: u, off: l })
          ),
          {},
          { $$widgetType: 'ais.toggleRefinement' }
        )
      },
      analytics: function (e) {
        var t = e || {},
          s = t.pushFunction,
          n = t.delay,
          r = void 0 === n ? 3e3 : n,
          i = t.triggerOnUIInteraction,
          a = void 0 !== i && i,
          o = t.pushInitialSearch,
          c = void 0 === o || o,
          u = t.pushPagination,
          l = void 0 !== u && u
        if (!s) throw new Error(ts('The `pushFunction` option is required.'))
        function d(e) {
          if (null !== e) {
            var t = [],
              n = (function (e) {
                var t = []
                for (var n in e)
                  if (e.hasOwnProperty(n)) {
                    var r = e[n].join('+')
                    t.push(
                      ''
                        .concat(encodeURIComponent(n), '=')
                        .concat(encodeURIComponent(n), '_')
                        .concat(encodeURIComponent(r))
                    )
                  }
                return t.join('&')
              })(
                D(
                  D(
                    D({}, e.state.disjunctiveFacetsRefinements),
                    e.state.facetsRefinements
                  ),
                  e.state.hierarchicalFacetsRefinements
                )
              ),
              r = (function (e) {
                var t = []
                for (var n in e)
                  if (e.hasOwnProperty(n)) {
                    var r = e[n]
                    if (r.hasOwnProperty('>=') && r.hasOwnProperty('<='))
                      r['>='] && r['>='][0] === r['<='] && r['<='][0]
                        ? t.push(
                            ''.concat(n, '=').concat(n, '_').concat(r['>='])
                          )
                        : t.push(
                            ''
                              .concat(n, '=')
                              .concat(n, '_')
                              .concat(r['>='], 'to')
                              .concat(r['<='])
                          )
                    else if (r.hasOwnProperty('>='))
                      t.push(
                        ''.concat(n, '=').concat(n, '_from').concat(r['>='])
                      )
                    else if (r.hasOwnProperty('<='))
                      t.push(''.concat(n, '=').concat(n, '_to').concat(r['<=']))
                    else if (r.hasOwnProperty('=')) {
                      var i = []
                      for (var a in r['='])
                        r['='].hasOwnProperty(a) && i.push(r['='][a])
                      t.push(
                        ''.concat(n, '=').concat(n, '_').concat(i.join('-'))
                      )
                    }
                  }
                return t.join('&')
              })(e.state.numericRefinements)
            '' !== n && t.push(n), '' !== r && t.push(r)
            var i = t.join('&'),
              a = 'Query: '.concat(e.state.query || '', ', ').concat(i)
            !0 === l && (a += ', Page: '.concat(e.state.page || 0)),
              m !== a && (s(i, e.state, e.results), (m = a))
          }
        }
        var h,
          f = null,
          m = '',
          p = !0
        !0 === c && (p = !1)
        function g() {
          d(f)
        }
        function v() {
          d(f)
        }
        return {
          $$type: 'ais.analytics',
          $$widgetType: 'ais.analytics',
          init: function () {
            !0 === a &&
              (document.addEventListener('click', g),
              window.addEventListener('beforeunload', v))
          },
          render: function (e) {
            var t = e.results,
              n = e.state
            !0 !== p
              ? ((f = { results: t, state: n }),
                h && clearTimeout(h),
                (h = window.setTimeout(function () {
                  return d(f)
                }, r)))
              : (p = !1)
          },
          dispose: function () {
            !0 === a &&
              (document.removeEventListener('click', g),
              window.removeEventListener('beforeunload', v))
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { analytics: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function () {
            return { widgetParams: e }
          }
        }
      },
      breadcrumb: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attributes,
          i = t.separator,
          a = t.rootPath,
          s = t.transformItems,
          o = t.templates,
          c = void 0 === o ? ns : o,
          u = t.cssClasses,
          l = void 0 === u ? {} : u
        if (!n) throw new Error(rs('The `container` option is required.'))
        var d = de(n),
          h = {
            root: di(is(), l.root),
            noRefinementRoot: di(
              is({ modifierName: 'noRefinement' }),
              l.noRefinementRoot
            ),
            list: di(is({ descendantName: 'list' }), l.list),
            item: di(is({ descendantName: 'item' }), l.item),
            selectedItem: di(
              is({ descendantName: 'item', modifierName: 'selected' }),
              l.selectedItem
            ),
            separator: di(is({ descendantName: 'separator' }), l.separator),
            link: di(is({ descendantName: 'link' }), l.link)
          },
          f = (function (e) {
            var o = e.containerNode,
              c = e.cssClasses,
              u = e.renderState,
              l = e.templates
            return function (e, t) {
              var n = e.canRefine,
                r = e.createURL,
                i = e.instantSearchInstance,
                a = e.items,
                s = e.refine
              t
                ? (u.templateProps = me({
                    defaultTemplates: ns,
                    templatesConfig: i.templatesConfig,
                    templates: l
                  }))
                : tr(
                    An(es, {
                      canRefine: n,
                      cssClasses: c,
                      createURL: r,
                      items: a,
                      refine: s,
                      templateProps: u.templateProps
                    }),
                    o
                  )
            }
          })({ containerNode: d, cssClasses: h, renderState: {}, templates: c })
        return D(
          D(
            {},
            Br(f, function () {
              return tr(null, d)
            })({ attributes: r, separator: i, rootPath: a, transformItems: s })
          ),
          {},
          { $$widgetType: 'ais.breadcrumb' }
        )
      },
      menuSelect: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attribute,
          i = t.sortBy,
          a = void 0 === i ? ['name:asc'] : i,
          s = t.limit,
          o = void 0 === s ? 10 : s,
          c = t.cssClasses,
          u = void 0 === c ? {} : c,
          l = t.templates,
          d = void 0 === l ? os : l,
          h = t.transformItems
        if (!n) throw new Error(cs('The `container` option is required.'))
        var f = de(n),
          m = {
            root: di(us(), u.root),
            noRefinementRoot: di(
              us({ modifierName: 'noRefinement' }),
              u.noRefinementRoot
            ),
            select: di(us({ descendantName: 'select' }), u.select),
            option: di(us({ descendantName: 'option' }), u.option)
          },
          p = (function (e) {
            var a = e.containerNode,
              s = e.cssClasses,
              o = e.renderState,
              c = e.templates
            return function (e, t) {
              var n = e.refine,
                r = e.items,
                i = e.instantSearchInstance
              t
                ? (o.templateProps = me({
                    defaultTemplates: os,
                    templatesConfig: i.templatesConfig,
                    templates: c
                  }))
                : tr(
                    An(as, {
                      cssClasses: s,
                      items: r,
                      refine: n,
                      templateProps: o.templateProps
                    }),
                    a
                  )
            }
          })({ containerNode: f, cssClasses: m, renderState: {}, templates: d })
        return D(
          D(
            {},
            lr(p, function () {
              return tr(null, f)
            })({ attribute: r, limit: o, sortBy: a, transformItems: h })
          ),
          {},
          { $$widgetType: 'ais.menuSelect' }
        )
      },
      poweredBy: function (e) {
        var t = e || {},
          n = t.container,
          r = t.cssClasses,
          i = void 0 === r ? {} : r,
          a = t.theme,
          s = void 0 === a ? 'light' : a
        if (!n) throw new Error(fs('The `container` option is required.'))
        var o = de(n),
          c = {
            root: di(
              hs(),
              hs({ modifierName: 'dark' === s ? 'dark' : 'light' }),
              i.root
            ),
            link: di(hs({ descendantName: 'link' }), i.link),
            logo: di(hs({ descendantName: 'logo' }), i.logo)
          },
          u = (function (e) {
            var a = e.containerNode,
              s = e.cssClasses
            return function (e, t) {
              var n = e.url,
                r = e.widgetParams
              if (t) {
                var i = r.theme
                tr(An(ss, { cssClasses: s, url: n, theme: i }), a)
              } else;
            }
          })({ containerNode: o, cssClasses: c })
        return D(
          D(
            {},
            Qr(u, function () {
              return tr(null, o)
            })({ theme: s })
          ),
          {},
          { $$widgetType: 'ais.poweredBy' }
        )
      },
      panel: function (e) {
        var t = e || {},
          n = t.templates,
          r = void 0 === n ? {} : n,
          i = t.hidden,
          c =
            void 0 === i
              ? function () {
                  return !1
                }
              : i,
          a = t.collapsed,
          s = t.cssClasses,
          o = void 0 === s ? {} : s,
          u = document.createElement('div'),
          l = Boolean(a),
          d =
            'function' == typeof a
              ? a
              : function () {
                  return !1
                },
          h = {
            root: di(Ws(), o.root),
            noRefinementRoot: di(
              Ws({ modifierName: 'noRefinement' }),
              o.noRefinementRoot
            ),
            collapsibleRoot: di(
              Ws({ modifierName: 'collapsible' }),
              o.collapsibleRoot
            ),
            collapsedRoot: di(
              Ws({ modifierName: 'collapsed' }),
              o.collapsedRoot
            ),
            collapseButton: di(
              Ws({ descendantName: 'collapseButton' }),
              o.collapseButton
            ),
            collapseIcon: di(
              Ws({ descendantName: 'collapseIcon' }),
              o.collapseIcon
            ),
            body: di(Ws({ descendantName: 'body' }), o.body),
            header: di(Ws({ descendantName: 'header' }), o.header),
            footer: di(Ws({ descendantName: 'footer' }), o.footer)
          }
        return function (n) {
          return function (e) {
            var i = (e || {}).container
            if (!i)
              throw new Error(
                Ds(
                  'The `container` option is required in the widget within the panel.'
                )
              )
            var t = {
                header: '',
                footer: '',
                collapseButtonText: function (e) {
                  var t = e.collapsed
                  return '<svg\n          class="'
                    .concat(
                      h.collapseIcon,
                      '"\n          width="1em"\n          height="1em"\n          viewBox="0 0 500 500"\n        >\n        <path d="'
                    )
                    .concat(
                      t ? 'M100 250l300-150v300z' : 'M250 400l150-300H100z',
                      '" fill="currentColor" />\n        </svg>'
                    )
                }
              },
              s = (function (e) {
                var a = e.containerNode,
                  s = e.bodyContainerNode,
                  o = e.cssClasses,
                  c = e.templates
                return function (e) {
                  var t = e.options,
                    n = e.hidden,
                    r = e.collapsible,
                    i = e.collapsed
                  tr(
                    An(Es, {
                      cssClasses: o,
                      hidden: n,
                      collapsible: r,
                      isCollapsed: i,
                      templates: c,
                      data: t,
                      bodyElement: s
                    }),
                    a
                  )
                }
              })({
                containerNode: de(i),
                bodyContainerNode: u,
                cssClasses: h,
                templates: D(D({}, t), r)
              })
            s({ options: {}, hidden: !0, collapsible: l, collapsed: !1 })
            var o = n(D(D({}, e), {}, { container: u }))
            return D(
              D({}, o),
              {},
              {
                dispose: function () {
                  if ((tr(null, de(i)), 'function' == typeof o.dispose)) {
                    for (
                      var e, t = arguments.length, n = new Array(t), r = 0;
                      r < t;
                      r++
                    )
                      n[r] = arguments[r]
                    return (e = o.dispose).call.apply(e, [this].concat(n))
                  }
                },
                render: function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n]
                  var r,
                    i = t[0],
                    a = D(
                      D(
                        {},
                        o.getWidgetRenderState ? o.getWidgetRenderState(i) : {}
                      ),
                      i
                    )
                  s({
                    options: a,
                    hidden: Boolean(c(a)),
                    collapsible: l,
                    collapsed: Boolean(d(a))
                  }),
                    'function' == typeof o.render &&
                      (r = o.render).call.apply(r, [this].concat(t))
                }
              }
            )
          }
        }
      },
      voiceSearch: function (e) {
        var t = e || {},
          n = t.container,
          r = t.cssClasses,
          i = void 0 === r ? {} : r,
          a = t.templates,
          s = t.searchAsYouSpeak,
          o = void 0 !== s && s,
          c = t.language,
          u = t.additionalQueryParameters,
          l = t.createVoiceSearchHelper
        if (!n) throw new Error(Us('The `container` option is required.'))
        var d = de(n),
          h = {
            root: di(qs(), i.root),
            button: di(qs({ descendantName: 'button' }), i.button),
            status: di(qs({ descendantName: 'status' }), i.status)
          }
        return D(
          D(
            {},
            ai(Ls, function () {
              return tr(null, d)
            })({
              container: d,
              cssClasses: h,
              templates: D(D({}, Bs), a),
              searchAsYouSpeak: o,
              language: c,
              additionalQueryParameters: u,
              createVoiceSearchHelper: l
            })
          ),
          {},
          { $$widgetType: 'ais.voiceSearch' }
        )
      },
      queryRuleCustomData: function (e) {
        var t = e || {},
          n = t.container,
          r = t.cssClasses,
          i = void 0 === r ? {} : r,
          a = t.templates,
          s = void 0 === a ? {} : a,
          o = t.transformItems,
          c =
            void 0 === o
              ? function (e) {
                  return e
                }
              : o
        if (!n) throw new Error(Qs('The `container` option is required.'))
        var u = { root: di($s(), i.root) },
          l = D(
            D(
              {},
              {
                default: function (e) {
                  var t = e.items
                  return JSON.stringify(t, null, 2)
                }
              }
            ),
            s
          ),
          d = de(n)
        return D(
          D(
            {},
            ri(Ms, function () {
              tr(null, d)
            })({ container: d, cssClasses: u, templates: l, transformItems: c })
          ),
          {},
          { $$widgetType: 'ais.queryRuleCustomData' }
        )
      },
      queryRuleContext: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {}
        if (!t.trackedFilters)
          throw new Error(Vs('The `trackedFilters` option is required.'))
        return D(D({}, ri(Ie)(t)), {}, { $$widgetType: 'ais.queryRuleContext' })
      },
      index: yt,
      places: function (e) {
        var t = e || {},
          n = t.placesReference,
          r = t.defaultPosition,
          o = void 0 === r ? [] : r,
          i = O(t, ['placesReference', 'defaultPosition'])
        if ('function' != typeof n)
          throw new Error(
            'The `placesReference` option requires a valid Places.js reference.'
          )
        var c = n(i),
          u = {
            query: '',
            initialLatLngViaIP: void 0,
            isInitialLatLngViaIPSet: !1
          }
        return {
          $$type: 'ais.places',
          $$widgetType: 'ais.places',
          init: function (e) {
            var s = e.helper
            c.on('change', function (e) {
              var t = e.suggestion,
                n = t.value,
                r = t.latlng,
                i = r.lat,
                a = r.lng
              ;(u.query = n),
                s
                  .setQueryParameter('insideBoundingBox', void 0)
                  .setQueryParameter('aroundLatLngViaIP', !1)
                  .setQueryParameter(
                    'aroundLatLng',
                    ''.concat(i, ',').concat(a)
                  )
                  .search()
            }),
              c.on('clear', function () {
                ;(u.query = ''),
                  s.setQueryParameter('insideBoundingBox', void 0),
                  1 < o.length
                    ? s
                        .setQueryParameter('aroundLatLngViaIP', !1)
                        .setQueryParameter('aroundLatLng', o.join(','))
                    : s
                        .setQueryParameter(
                          'aroundLatLngViaIP',
                          u.initialLatLngViaIP
                        )
                        .setQueryParameter('aroundLatLng', void 0),
                  s.search()
              })
          },
          getWidgetUiState: function (e, t) {
            var n = t.searchParameters.aroundLatLng || o.join(',')
            if (n !== o.join(',') || u.query)
              return D(
                D({}, e),
                {},
                { places: { query: u.query, position: n } }
              )
            e.places
            return O(e, ['places'])
          },
          getWidgetSearchParameters: function (e, t) {
            var n = t.uiState.places || {},
              r = n.query,
              i = void 0 === r ? '' : r,
              a = n.position,
              s = void 0 === a ? o.join(',') : a
            return (
              (u.query = i),
              u.isInitialLatLngViaIPSet ||
                ((u.isInitialLatLngViaIPSet = !0),
                (u.initialLatLngViaIP = e.aroundLatLngViaIP)),
              c.setVal(i),
              c.close(),
              e
                .setQueryParameter('insideBoundingBox', void 0)
                .setQueryParameter('aroundLatLngViaIP', !1)
                .setQueryParameter('aroundLatLng', s || void 0)
            )
          },
          getRenderState: function (e, t) {
            return D(D({}, e), {}, { places: this.getWidgetRenderState(t) })
          },
          getWidgetRenderState: function () {
            return { widgetParams: e }
          }
        }
      },
      EXPERIMENTAL_answers: function (e) {
        var t = e || {},
          n = t.container,
          r = t.attributesForPrediction,
          i = t.queryLanguages,
          a = t.nbHits,
          s = t.searchDebounceTime,
          o = t.renderDebounceTime,
          c = t.escapeHTML,
          u = t.extraParameters,
          l = t.templates,
          d = void 0 === l ? Ks : l,
          h = t.cssClasses,
          f = void 0 === h ? {} : h
        if (!n) throw new Error(zs('The `container` option is required.'))
        var m = de(n),
          p = {
            root: di(Js(), f.root),
            emptyRoot: di(Js({ modifierName: 'empty' }), f.emptyRoot),
            header: di(Js({ descendantName: 'header' }), f.header),
            loader: di(Js({ descendantName: 'loader' }), f.loader),
            list: di(Js({ descendantName: 'list' }), f.list),
            item: di(Js({ descendantName: 'item' }), f.item)
          },
          g = (function (e) {
            var a = e.renderState,
              s = e.cssClasses,
              o = e.containerNode,
              c = e.templates
            return function (e, t) {
              var n = e.hits,
                r = e.isLoading,
                i = e.instantSearchInstance
              t
                ? (a.templateProps = me({
                    defaultTemplates: Ks,
                    templatesConfig: i.templatesConfig,
                    templates: c
                  }))
                : tr(
                    An(Os, {
                      cssClasses: s,
                      hits: n,
                      isLoading: r,
                      templateProps: a.templateProps
                    }),
                    o
                  )
            }
          })({ containerNode: m, cssClasses: p, templates: d, renderState: {} })
        return D(
          D(
            {},
            oi(g, function () {
              return tr(null, m)
            })({
              attributesForPrediction: r,
              queryLanguages: i,
              nbHits: a,
              searchDebounceTime: s,
              renderDebounceTime: o,
              escapeHTML: c,
              extraParameters: u
            })
          ),
          {},
          { $$widgetType: 'ais.answers' }
        )
      },
      relevantSort: function (e) {
        var t = e.container,
          n = e.templates,
          r = void 0 === n ? {} : n,
          i = e.cssClasses,
          a = void 0 === i ? {} : i
        if (!t) throw new Error(Xs('The `container` option is required.'))
        var s = {
            root: di(Gs(), a.root),
            text: di(Gs({ descendantName: 'text' }), a.text),
            button: di(Gs({ descendantName: 'button' }), a.button)
          },
          o = D(D({}, Ys), r),
          c = de(t)
        return D(
          D(
            {},
            ci(Hs, function () {
              tr(null, c)
            })({ container: c, cssClasses: s, templates: o })
          ),
          {},
          { $$widgetType: 'ais.relevantSort' }
        )
      }
    }),
    eo = Object.freeze({
      __proto__: null,
      createInsightsMiddleware: function (e) {
        var t = e || {},
          c = t.insightsClient,
          u = t.insightsInitParams,
          l = t.onEvent
        if (null !== c && !c)
          throw new Error(
            'The `insightsClient` option is required. To disable, set it to `null`.'
          )
        var d = Boolean(c),
          h = null === c ? Ie : c
        return function (e) {
          var r = e.instantSearchInstance,
            t = W(
              (function (e) {
                if (e.transporter) {
                  var t = e.transporter,
                    n = t.headers,
                    r = t.queryParameters,
                    i = 'x-algolia-application-id',
                    a = 'x-algolia-api-key'
                  return [n[i] || r[i], n[a] || r[a]]
                }
                return [e.applicationID, e.apiKey]
              })(r.client),
              2
            ),
            n = t[0],
            i = t[1],
            a = void 0,
            s = void 0
          if (Array.isArray(h.queue)) {
            var o = W(
              Se(h.queue.slice().reverse(), function (e) {
                return 'setUserToken' === W(e, 1)[0]
              }) || [],
              2
            )
            a = o[1]
          }
          return (
            h('_get', '_userToken', function (e) {
              s = e
            }),
            h('init', D({ appId: n, apiKey: i }, u)),
            {
              onStateChange: function () {},
              subscribe: function () {
                function e(e) {
                  e && t.setState(t.state.setQueryParameter('userToken', e))
                }
                var t = r.mainIndex.getHelper()
                t.setState(t.state.setQueryParameter('clickAnalytics', !0))
                var n = Ct()
                d && n && e(n),
                  s ? h('setUserToken', s) : a && h('setUserToken', a),
                  h('onUserTokenChange', e, { immediate: !0 }),
                  (r.sendEventToInsights = function (e) {
                    l
                      ? l(e, c)
                      : e.insightsMethod && h(e.insightsMethod, e.payload)
                  })
              },
              unsubscribe: function () {
                h('onUserTokenChange', void 0), (r.sendEventToInsights = Ie)
              }
            }
          )
        }
      },
      createRouterMiddleware: on,
      isMetadataEnabled: cn,
      createMetadataMiddleware: un
    }),
    to = Object.freeze({ __proto__: null, history: sn })
  function no(e) {
    e.configure
    return O(e, ['configure'])
  }
  var ro = Object.freeze({
    __proto__: null,
    simple: kt,
    singleIndex: function (t) {
      return {
        stateToRoute: function (e) {
          return no(e[t] || {})
        },
        routeToState: function (e) {
          return j({}, t, no(0 < arguments.length && void 0 !== e ? e : {}))
        }
      }
    }
  })
  function io(e) {
    var t = e || {}
    t.page
    return O(t, ['page'])
  }
  var ao = 'ais.infiniteHits'
  function so() {
    return 'undefined' != typeof window && void 0 !== window.sessionStorage
  }
  function oo(e) {
    return new fn(e)
  }
  return (
    (oo.routers = to),
    (oo.stateMappings = ro),
    (oo.connectors = li),
    (oo.widgets = Zs),
    (oo.version = '4.21.0'),
    (oo.createInfiniteHitsSessionStorageCache = function () {
      return {
        read: function (e) {
          var t = e.state
          if (!so()) return null
          try {
            var n = JSON.parse(window.sessionStorage.getItem(ao))
            return n && Le(n.state, io(t)) ? n.hits : null
          } catch (e) {
            if (e instanceof SyntaxError)
              try {
                window.sessionStorage.removeItem(ao)
              } catch (e) {}
            return null
          }
        },
        write: function (e) {
          var t = e.state,
            n = e.hits
          if (so())
            try {
              window.sessionStorage.setItem(
                ao,
                JSON.stringify({ state: io(t), hits: n })
              )
            } catch (e) {}
        }
      }
    }),
    (oo.highlight = wt),
    (oo.reverseHighlight = xt),
    (oo.snippet = _t),
    (oo.reverseSnippet = Ft),
    (oo.insights = Tt),
    (oo.middlewares = eo),
    oo
  )
})

/*! lozad.js - v1.16.0 - 2020-09-06
 * https://github.com/ApoorvSaxena/lozad.js
 * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : (t.lozad = e())
})(this, function () {
  'use strict'
  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */ var g = 'undefined' != typeof document && document.documentMode,
    f = {
      rootMargin: '0px',
      threshold: 0,
      load: function (t) {
        if ('picture' === t.nodeName.toLowerCase()) {
          var e = t.querySelector('img'),
            r = !1
          null === e && ((e = document.createElement('img')), (r = !0)),
            g &&
              t.getAttribute('data-iesrc') &&
              (e.src = t.getAttribute('data-iesrc')),
            t.getAttribute('data-alt') && (e.alt = t.getAttribute('data-alt')),
            r && t.append(e)
        }
        if (
          'video' === t.nodeName.toLowerCase() &&
          !t.getAttribute('data-src') &&
          t.children
        ) {
          for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++)
            (o = a[i].getAttribute('data-src')) && (a[i].src = o)
          t.load()
        }
        t.getAttribute('data-poster') &&
          (t.poster = t.getAttribute('data-poster')),
          t.getAttribute('data-src') && (t.src = t.getAttribute('data-src')),
          t.getAttribute('data-srcset') &&
            t.setAttribute('srcset', t.getAttribute('data-srcset'))
        var n = ','
        if (
          (t.getAttribute('data-background-delimiter') &&
            (n = t.getAttribute('data-background-delimiter')),
          t.getAttribute('data-background-image'))
        )
          t.style.backgroundImage =
            "url('" +
            t.getAttribute('data-background-image').split(n).join("'),url('") +
            "')"
        else if (t.getAttribute('data-background-image-set')) {
          var d = t.getAttribute('data-background-image-set').split(n),
            u = d[0].substr(0, d[0].indexOf(' ')) || d[0] // Substring before ... 1x
          ;(u = -1 === u.indexOf('url(') ? 'url(' + u + ')' : u),
            1 === d.length
              ? (t.style.backgroundImage = u)
              : t.setAttribute(
                  'style',
                  (t.getAttribute('style') || '') +
                    'background-image: ' +
                    u +
                    '; background-image: -webkit-image-set(' +
                    d +
                    '); background-image: image-set(' +
                    d +
                    ')'
                )
        }
        t.getAttribute('data-toggle-class') &&
          t.classList.toggle(t.getAttribute('data-toggle-class'))
      },
      loaded: function () {}
    }
  function A(t) {
    t.setAttribute('data-loaded', !0)
  }
  var m = function (t) {
      return 'true' === t.getAttribute('data-loaded')
    },
    v = function (t) {
      var e =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : document
      return t instanceof Element
        ? [t]
        : t instanceof NodeList
        ? t
        : e.querySelectorAll(t)
    }
  return function () {
    var r,
      a,
      o =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : '.lozad',
      t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = Object.assign({}, f, t),
      i = e.root,
      n = e.rootMargin,
      d = e.threshold,
      u = e.load,
      g = e.loaded,
      s = void 0
    'undefined' != typeof window &&
      window.IntersectionObserver &&
      (s = new IntersectionObserver(
        ((r = u),
        (a = g),
        function (t, e) {
          t.forEach(function (t) {
            ;(0 < t.intersectionRatio || t.isIntersecting) &&
              (e.unobserve(t.target),
              m(t.target) || (r(t.target), A(t.target), a(t.target)))
          })
        }),
        { root: i, rootMargin: n, threshold: d }
      ))
    for (var c, l = v(o, i), b = 0; b < l.length; b++)
      (c = l[b]).getAttribute('data-placeholder-background') &&
        (c.style.background = c.getAttribute('data-placeholder-background'))
    return {
      observe: function () {
        for (var t = v(o, i), e = 0; e < t.length; e++)
          m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), A(t[e]), g(t[e])))
      },
      triggerLoad: function (t) {
        m(t) || (u(t), A(t), g(t))
      },
      observer: s
    }
  }
})
!(function (e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? n(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], n)
    : n(((e = e || self).quicklink = {}))
})(this, function (e) {
  function n(e) {
    return new Promise(function (n, t, r) {
      ;(r = new XMLHttpRequest()).open('GET', e, (r.withCredentials = !0)),
        (r.onload = function () {
          200 === r.status ? n() : t()
        }),
        r.send()
    })
  }
  function t(e) {
    return window.fetch ? fetch(e, { credentials: 'include' }) : n(e)
  }
  var r,
    o =
      (r = document.createElement('link')).relList &&
      r.relList.supports &&
      r.relList.supports('prefetch')
        ? function (e) {
            return new Promise(function (n, t, r) {
              ;((r = document.createElement('link')).rel = 'prefetch'),
                (r.href = e),
                (r.onload = n),
                (r.onerror = t),
                document.head.appendChild(r)
            })
          }
        : n,
    i =
      window.requestIdleCallback ||
      function (e) {
        var n = Date.now()
        return setTimeout(function () {
          e({
            didTimeout: !1,
            timeRemaining: function () {
              return Math.max(0, 50 - (Date.now() - n))
            }
          })
        }, 1)
      },
    c = new Set()
  function f(e, n, r) {
    if ((r = navigator.connection)) {
      if (r.saveData)
        return Promise.reject(
          new Error('Cannot prefetch, Save-Data is enabled')
        )
      if (/2g/.test(r.effectiveType))
        return Promise.reject(
          new Error('Cannot prefetch, network conditions are poor')
        )
    }
    return Promise.all(
      [].concat(e).map(function (e) {
        if (!c.has(e))
          return c.add(e), (n ? t : o)(new URL(e, location.href).toString())
      })
    )
  }
  ;(e.listen = function (e) {
    if ((e || (e = {}), window.IntersectionObserver)) {
      var n = (function (e) {
          e = e || 1
          var n = [],
            t = 0
          function r() {
            t < e && n.length > 0 && (n.shift()(), t++)
          }
          return [
            function (e) {
              n.push(e) > 1 || r()
            },
            function () {
              t--, r()
            }
          ]
        })(e.throttle || 1 / 0),
        t = n[0],
        r = n[1],
        o = e.limit || 1 / 0,
        u = e.origins || [location.hostname],
        s = e.ignores || [],
        a = e.delay || 0,
        l = [],
        d = e.timeoutFn || i,
        h = 'function' == typeof e.hrefFn && e.hrefFn,
        m = new IntersectionObserver(function (n) {
          n.forEach(function (n) {
            if (n.isIntersecting)
              l.push((n = n.target).href),
                (function (e, n) {
                  n ? setTimeout(e, n) : e()
                })(function () {
                  ;-1 !== l.indexOf(n.href) &&
                    (m.unobserve(n),
                    c.size < o &&
                      t(function () {
                        f(h ? h(n) : n.href, e.priority)
                          .then(r)
                          .catch(function (n) {
                            r(), e.onError && e.onError(n)
                          })
                      }))
                }, a)
            else {
              var i = l.indexOf((n = n.target).href)
              i > -1 && l.splice(i)
            }
          })
        })
      return (
        d(
          function () {
            ;(e.el || document).querySelectorAll('a').forEach(function (e) {
              ;(u.length && !u.includes(e.hostname)) ||
                (function e(n, t) {
                  return Array.isArray(t)
                    ? t.some(function (t) {
                        return e(n, t)
                      })
                    : (t.test || t).call(t, n.href, n)
                })(e, s) ||
                m.observe(e)
            })
          },
          { timeout: e.timeout || 2e3 }
        ),
        function () {
          c.clear(), m.disconnect()
        }
      )
    }
  }),
    (e.prefetch = f)
})
