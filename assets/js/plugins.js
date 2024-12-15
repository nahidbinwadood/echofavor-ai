/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e(require('@popperjs/core')))
    : 'function' == typeof define && define.amd
    ? define(['@popperjs/core'], e)
    : ((t =
        'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
        e(t.Popper));
})(this, function (t) {
  'use strict';
  function e(t) {
    const e = Object.create(null, {
      [Symbol.toStringTag]: { value: 'Module' },
    });
    if (t)
      for (const i in t)
        if ('default' !== i) {
          const s = Object.getOwnPropertyDescriptor(t, i);
          Object.defineProperty(
            e,
            i,
            s.get ? s : { enumerable: !0, get: () => t[i] }
          );
        }
    return (e.default = t), Object.freeze(e);
  }
  const i = e(t),
    s = new Map(),
    n = {
      set(t, e, i) {
        s.has(t) || s.set(t, new Map());
        const n = s.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (s.has(t) && s.get(t).get(e)) || null,
      remove(t, e) {
        if (!s.has(t)) return;
        const i = s.get(t);
        i.delete(e), 0 === i.size && s.delete(t);
      },
    },
    o = 'transitionend',
    r = (t) => (
      t &&
        window.CSS &&
        window.CSS.escape &&
        (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      t
    ),
    a = (t) => {
      t.dispatchEvent(new Event(o));
    },
    l = (t) =>
      !(!t || 'object' != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    c = (t) =>
      l(t)
        ? t.jquery
          ? t[0]
          : t
        : 'string' == typeof t && t.length > 0
        ? document.querySelector(r(t))
        : null,
    h = (t) => {
      if (!l(t) || 0 === t.getClientRects().length) return !1;
      const e =
          'visible' === getComputedStyle(t).getPropertyValue('visibility'),
        i = t.closest('details:not([open])');
      if (!i) return e;
      if (i !== t) {
        const e = t.closest('summary');
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    d = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains('disabled') ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
    u = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? u(t.parentNode)
        : null;
    },
    _ = () => {},
    g = (t) => {
      t.offsetHeight;
    },
    f = () =>
      window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
        ? window.jQuery
        : null,
    m = [],
    p = () => 'rtl' === document.documentElement.dir,
    b = (t) => {
      var e;
      (e = () => {
        const e = f();
        if (e) {
          const i = t.NAME,
            s = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = s), t.jQueryInterface));
        }
      }),
        'loading' === document.readyState
          ? (m.length ||
              document.addEventListener('DOMContentLoaded', () => {
                for (const t of m) t();
              }),
            m.push(e))
          : e();
    },
    v = (t, e = [], i = t) => ('function' == typeof t ? t(...e) : i),
    y = (t, e, i = !0) => {
      if (!i) return void v(t);
      const s =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const s = Number.parseFloat(e),
            n = Number.parseFloat(i);
          return s || n
            ? ((e = e.split(',')[0]),
              (i = i.split(',')[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let n = !1;
      const r = ({ target: i }) => {
        i === e && ((n = !0), e.removeEventListener(o, r), v(t));
      };
      e.addEventListener(o, r),
        setTimeout(() => {
          n || a(e);
        }, s);
    },
    w = (t, e, i, s) => {
      const n = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && s
          ? t[n - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          s && (o = (o + n) % n),
          t[Math.max(0, Math.min(o, n - 1))]);
    },
    A = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    C = /::\d+$/,
    T = {};
  let k = 1;
  const $ = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
    S = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
  function L(t, e) {
    return (e && `${e}::${k++}`) || t.uidEvent || k++;
  }
  function O(t) {
    const e = L(t);
    return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
  }
  function I(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function D(t, e, i) {
    const s = 'string' == typeof e,
      n = s ? i : e || i;
    let o = M(t);
    return S.has(o) || (o = t), [s, n, o];
  }
  function N(t, e, i, s, n) {
    if ('string' != typeof e || !t) return;
    let [o, r, a] = D(e, i, s);
    if (e in $) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = O(t),
      c = l[a] || (l[a] = {}),
      h = I(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    const d = L(r, e.replace(A, '')),
      u = o
        ? (function (t, e, i) {
            return function s(n) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = n; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      F(n, { delegateTarget: r }),
                      s.oneOff && j.off(t, n.type, e, i),
                      i.apply(r, [n])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(s) {
              return (
                F(s, { delegateTarget: t }),
                i.oneOff && j.off(t, s.type, e),
                e.apply(t, [s])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = n),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function P(t, e, i, s, n) {
    const o = I(e[i], s, n);
    o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]);
  }
  function x(t, e, i, s) {
    const n = e[i] || {};
    for (const [o, r] of Object.entries(n))
      o.includes(s) && P(t, e, i, r.callable, r.delegationSelector);
  }
  function M(t) {
    return (t = t.replace(E, '')), $[t] || t;
  }
  const j = {
    on(t, e, i, s) {
      N(t, e, i, s, !1);
    },
    one(t, e, i, s) {
      N(t, e, i, s, !0);
    },
    off(t, e, i, s) {
      if ('string' != typeof e || !t) return;
      const [n, o, r] = D(e, i, s),
        a = r !== e,
        l = O(t),
        c = l[r] || {},
        h = e.startsWith('.');
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) x(t, l, i, e.slice(1));
        for (const [i, s] of Object.entries(c)) {
          const n = i.replace(C, '');
          (a && !e.includes(n)) || P(t, l, r, s.callable, s.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        P(t, l, r, o, n ? i : null);
      }
    },
    trigger(t, e, i) {
      if ('string' != typeof e || !t) return null;
      const s = f();
      let n = null,
        o = !0,
        r = !0,
        a = !1;
      e !== M(e) &&
        s &&
        ((n = s.Event(e, i)),
        s(t).trigger(n),
        (o = !n.isPropagationStopped()),
        (r = !n.isImmediatePropagationStopped()),
        (a = n.isDefaultPrevented()));
      const l = F(new Event(e, { bubbles: o, cancelable: !0 }), i);
      return (
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && n && n.preventDefault(),
        l
      );
    },
  };
  function F(t, e = {}) {
    for (const [i, s] of Object.entries(e))
      try {
        t[i] = s;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => s });
      }
    return t;
  }
  function z(t) {
    if ('true' === t) return !0;
    if ('false' === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ('' === t || 'null' === t) return null;
    if ('string' != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function H(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const B = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${H(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${H(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith('bs') && !t.startsWith('bsConfig')
        );
      for (const s of i) {
        let i = s.replace(/^bs/, '');
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = z(t.dataset[s]));
      }
      return e;
    },
    getDataAttribute: (t, e) => z(t.getAttribute(`data-bs-${H(e)}`)),
  };
  class q {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = l(e) ? B.getDataAttribute(e, 'config') : {};
      return {
        ...this.constructor.Default,
        ...('object' == typeof i ? i : {}),
        ...(l(e) ? B.getDataAttributes(e) : {}),
        ...('object' == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [s, n] of Object.entries(e)) {
        const e = t[s],
          o = l(e)
            ? 'element'
            : null == (i = e)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(n).test(o))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`
          );
      }
      var i;
    }
  }
  class W extends q {
    constructor(t, e) {
      super(),
        (t = c(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          n.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      n.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      y(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return n.get(c(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, 'object' == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return '5.3.3';
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const R = (t) => {
      let e = t.getAttribute('data-bs-target');
      if (!e || '#' === e) {
        let i = t.getAttribute('href');
        if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
        i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`),
          (e = i && '#' !== i ? i.trim() : null);
      }
      return e
        ? e
            .split(',')
            .map((t) => r(t))
            .join(',')
        : null;
    },
    K = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let s = t.parentNode.closest(e);
        for (; s; ) i.push(s), (s = s.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '[tabindex]',
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(',');
        return this.find(e, t).filter((t) => !d(t) && h(t));
      },
      getSelectorFromElement(t) {
        const e = R(t);
        return e && K.findOne(e) ? e : null;
      },
      getElementFromSelector(t) {
        const e = R(t);
        return e ? K.findOne(e) : null;
      },
      getMultipleElementsFromSelector(t) {
        const e = R(t);
        return e ? K.find(e) : [];
      },
    },
    V = (t, e = 'hide') => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        s = t.NAME;
      j.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
        if (
          (['A', 'AREA'].includes(this.tagName) && i.preventDefault(), d(this))
        )
          return;
        const n = K.getElementFromSelector(this) || this.closest(`.${s}`);
        t.getOrCreateInstance(n)[e]();
      });
    },
    Q = '.bs.alert',
    X = `close${Q}`,
    Y = `closed${Q}`;
  class U extends W {
    static get NAME() {
      return 'alert';
    }
    close() {
      if (j.trigger(this._element, X).defaultPrevented) return;
      this._element.classList.remove('show');
      const t = this._element.classList.contains('fade');
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, Y), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = U.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  V(U, 'close'), b(U);
  const G = '[data-bs-toggle="button"]';
  class J extends W {
    static get NAME() {
      return 'button';
    }
    toggle() {
      this._element.setAttribute(
        'aria-pressed',
        this._element.classList.toggle('active')
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = J.getOrCreateInstance(this);
        'toggle' === t && e[t]();
      });
    }
  }
  j.on(document, 'click.bs.button.data-api', G, (t) => {
    t.preventDefault();
    const e = t.target.closest(G);
    J.getOrCreateInstance(e).toggle();
  }),
    b(J);
  const Z = '.bs.swipe',
    tt = `touchstart${Z}`,
    et = `touchmove${Z}`,
    it = `touchend${Z}`,
    st = `pointerdown${Z}`,
    nt = `pointerup${Z}`,
    ot = { endCallback: null, leftCallback: null, rightCallback: null },
    rt = {
      endCallback: '(function|null)',
      leftCallback: '(function|null)',
      rightCallback: '(function|null)',
    };
  class at extends q {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          at.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return 'swipe';
    }
    dispose() {
      j.off(this._element, Z);
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        v(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (j.on(this._element, st, (t) => this._start(t)),
          j.on(this._element, nt, (t) => this._end(t)),
          this._element.classList.add('pointer-event'))
        : (j.on(this._element, tt, (t) => this._start(t)),
          j.on(this._element, et, (t) => this._move(t)),
          j.on(this._element, it, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ('pen' === t.pointerType || 'touch' === t.pointerType)
      );
    }
    static isSupported() {
      return (
        'ontouchstart' in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const lt = '.bs.carousel',
    ct = '.data-api',
    ht = 'next',
    dt = 'prev',
    ut = 'left',
    _t = 'right',
    gt = `slide${lt}`,
    ft = `slid${lt}`,
    mt = `keydown${lt}`,
    pt = `mouseenter${lt}`,
    bt = `mouseleave${lt}`,
    vt = `dragstart${lt}`,
    yt = `load${lt}${ct}`,
    wt = `click${lt}${ct}`,
    At = 'carousel',
    Et = 'active',
    Ct = '.active',
    Tt = '.carousel-item',
    kt = Ct + Tt,
    $t = { ArrowLeft: _t, ArrowRight: ut },
    St = {
      interval: 5e3,
      keyboard: !0,
      pause: 'hover',
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    Lt = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      pause: '(string|boolean)',
      ride: '(boolean|string)',
      touch: 'boolean',
      wrap: 'boolean',
    };
  class Ot extends W {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = K.findOne(
          '.carousel-indicators',
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === At && this.cycle();
    }
    static get Default() {
      return St;
    }
    static get DefaultType() {
      return Lt;
    }
    static get NAME() {
      return 'carousel';
    }
    next() {
      this._slide(ht);
    }
    nextWhenVisible() {
      !document.hidden && h(this._element) && this.next();
    }
    prev() {
      this._slide(dt);
    }
    pause() {
      this._isSliding && a(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? j.one(this._element, ft, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void j.one(this._element, ft, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const s = t > i ? ht : dt;
      this._slide(s, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, mt, (t) => this._keydown(t)),
        'hover' === this._config.pause &&
          (j.on(this._element, pt, () => this.pause()),
          j.on(this._element, bt, () => this._maybeEnableCycle())),
        this._config.touch &&
          at.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of K.find('.carousel-item img', this._element))
        j.on(t, vt, (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(ut)),
        rightCallback: () => this._slide(this._directionToOrder(_t)),
        endCallback: () => {
          'hover' === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new at(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = $t[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = K.findOne(Ct, this._indicatorsElement);
      e.classList.remove(Et), e.removeAttribute('aria-current');
      const i = K.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(Et), i.setAttribute('aria-current', 'true'));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        s = t === ht,
        n = e || w(this._getItems(), i, s, this._config.wrap);
      if (n === i) return;
      const o = this._getItemIndex(n),
        r = (e) =>
          j.trigger(this._element, e, {
            relatedTarget: n,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r(gt).defaultPrevented) return;
      if (!i || !n) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = n);
      const l = s ? 'carousel-item-start' : 'carousel-item-end',
        c = s ? 'carousel-item-next' : 'carousel-item-prev';
      n.classList.add(c),
        g(n),
        i.classList.add(l),
        n.classList.add(l),
        this._queueCallback(
          () => {
            n.classList.remove(l, c),
              n.classList.add(Et),
              i.classList.remove(Et, c, l),
              (this._isSliding = !1),
              r(ft);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains('slide');
    }
    _getActive() {
      return K.findOne(kt, this._element);
    }
    _getItems() {
      return K.find(Tt, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === ut ? dt : ht) : t === ut ? ht : dt;
    }
    _orderToDirection(t) {
      return p() ? (t === dt ? ut : _t) : t === dt ? _t : ut;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ot.getOrCreateInstance(this, t);
        if ('number' != typeof t) {
          if ('string' == typeof t) {
            if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  j.on(document, wt, '[data-bs-slide], [data-bs-slide-to]', function (t) {
    const e = K.getElementFromSelector(this);
    if (!e || !e.classList.contains(At)) return;
    t.preventDefault();
    const i = Ot.getOrCreateInstance(e),
      s = this.getAttribute('data-bs-slide-to');
    return s
      ? (i.to(s), void i._maybeEnableCycle())
      : 'next' === B.getDataAttribute(this, 'slide')
      ? (i.next(), void i._maybeEnableCycle())
      : (i.prev(), void i._maybeEnableCycle());
  }),
    j.on(window, yt, () => {
      const t = K.find('[data-bs-ride="carousel"]');
      for (const e of t) Ot.getOrCreateInstance(e);
    }),
    b(Ot);
  const It = '.bs.collapse',
    Dt = `show${It}`,
    Nt = `shown${It}`,
    Pt = `hide${It}`,
    xt = `hidden${It}`,
    Mt = `click${It}.data-api`,
    jt = 'show',
    Ft = 'collapse',
    zt = 'collapsing',
    Ht = `:scope .${Ft} .${Ft}`,
    Bt = '[data-bs-toggle="collapse"]',
    qt = { parent: null, toggle: !0 },
    Wt = { parent: '(null|element)', toggle: 'boolean' };
  class Rt extends W {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = K.find(Bt);
      for (const t of i) {
        const e = K.getSelectorFromElement(t),
          i = K.find(e).filter((t) => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return qt;
    }
    static get DefaultType() {
      return Wt;
    }
    static get NAME() {
      return 'collapse';
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            '.collapse.show, .collapse.collapsing'
          )
            .filter((t) => t !== this._element)
            .map((t) => Rt.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (j.trigger(this._element, Dt).defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(Ft),
        this._element.classList.add(zt),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(zt),
            this._element.classList.add(Ft, jt),
            (this._element.style[e] = ''),
            j.trigger(this._element, Nt);
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, Pt).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        g(this._element),
        this._element.classList.add(zt),
        this._element.classList.remove(Ft, jt);
      for (const t of this._triggerArray) {
        const e = K.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ''),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(zt),
              this._element.classList.add(Ft),
              j.trigger(this._element, xt);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(jt);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = c(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains('collapse-horizontal')
        ? 'width'
        : 'height';
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(Bt);
      for (const e of t) {
        const t = K.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = K.find(Ht, this._config.parent);
      return K.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle('collapsed', !e),
            i.setAttribute('aria-expanded', e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = Rt.getOrCreateInstance(this, e);
          if ('string' == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  j.on(document, Mt, Bt, function (t) {
    ('A' === t.target.tagName ||
      (t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
      t.preventDefault();
    for (const t of K.getMultipleElementsFromSelector(this))
      Rt.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    b(Rt);
  const Kt = 'dropdown',
    Vt = '.bs.dropdown',
    Qt = '.data-api',
    Xt = 'ArrowUp',
    Yt = 'ArrowDown',
    Ut = `hide${Vt}`,
    Gt = `hidden${Vt}`,
    Jt = `show${Vt}`,
    Zt = `shown${Vt}`,
    te = `click${Vt}${Qt}`,
    ee = `keydown${Vt}${Qt}`,
    ie = `keyup${Vt}${Qt}`,
    se = 'show',
    ne = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    oe = `${ne}.${se}`,
    re = '.dropdown-menu',
    ae = p() ? 'top-end' : 'top-start',
    le = p() ? 'top-start' : 'top-end',
    ce = p() ? 'bottom-end' : 'bottom-start',
    he = p() ? 'bottom-start' : 'bottom-end',
    de = p() ? 'left-start' : 'right-start',
    ue = p() ? 'right-start' : 'left-start',
    _e = {
      autoClose: !0,
      boundary: 'clippingParents',
      display: 'dynamic',
      offset: [0, 2],
      popperConfig: null,
      reference: 'toggle',
    },
    ge = {
      autoClose: '(boolean|string)',
      boundary: '(string|element)',
      display: 'string',
      offset: '(array|string|function)',
      popperConfig: '(null|object|function)',
      reference: '(string|element|object)',
    };
  class fe extends W {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          K.next(this._element, re)[0] ||
          K.prev(this._element, re)[0] ||
          K.findOne(re, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return _e;
    }
    static get DefaultType() {
      return ge;
    }
    static get NAME() {
      return Kt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (d(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!j.trigger(this._element, Jt, t).defaultPrevented) {
        if (
          (this._createPopper(),
          'ontouchstart' in document.documentElement &&
            !this._parent.closest('.navbar-nav'))
        )
          for (const t of [].concat(...document.body.children))
            j.on(t, 'mouseover', _);
        this._element.focus(),
          this._element.setAttribute('aria-expanded', !0),
          this._menu.classList.add(se),
          this._element.classList.add(se),
          j.trigger(this._element, Zt, t);
      }
    }
    hide() {
      if (d(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!j.trigger(this._element, Ut, t).defaultPrevented) {
        if ('ontouchstart' in document.documentElement)
          for (const t of [].concat(...document.body.children))
            j.off(t, 'mouseover', _);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(se),
          this._element.classList.remove(se),
          this._element.setAttribute('aria-expanded', 'false'),
          B.removeDataAttribute(this._menu, 'popper'),
          j.trigger(this._element, Gt, t);
      }
    }
    _getConfig(t) {
      if (
        'object' == typeof (t = super._getConfig(t)).reference &&
        !l(t.reference) &&
        'function' != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      'parent' === this._config.reference
        ? (t = this._parent)
        : l(this._config.reference)
        ? (t = c(this._config.reference))
        : 'object' == typeof this._config.reference &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = i.createPopper(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(se);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains('dropend')) return de;
      if (t.classList.contains('dropstart')) return ue;
      if (t.classList.contains('dropup-center')) return 'top';
      if (t.classList.contains('dropdown-center')) return 'bottom';
      const e =
        'end' ===
        getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
      return t.classList.contains('dropup') ? (e ? le : ae) : e ? he : ce;
    }
    _detectNavbar() {
      return null !== this._element.closest('.navbar');
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: 'preventOverflow',
            options: { boundary: this._config.boundary },
          },
          { name: 'offset', options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || 'static' === this._config.display) &&
          (B.setDataAttribute(this._menu, 'popper', 'static'),
          (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
        { ...t, ...v(this._config.popperConfig, [t]) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = K.find(
        '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
        this._menu
      ).filter((t) => h(t));
      i.length && w(i, e, t === Yt, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = fe.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
      const e = K.find(oe);
      for (const i of e) {
        const e = fe.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const s = t.composedPath(),
          n = s.includes(e._menu);
        if (
          s.includes(e._element) ||
          ('inside' === e._config.autoClose && !n) ||
          ('outside' === e._config.autoClose && n)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (('keyup' === t.type && 'Tab' === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        'click' === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = 'Escape' === t.key,
        s = [Xt, Yt].includes(t.key);
      if (!s && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const n = this.matches(ne)
          ? this
          : K.prev(this, ne)[0] ||
            K.next(this, ne)[0] ||
            K.findOne(ne, t.delegateTarget.parentNode),
        o = fe.getOrCreateInstance(n);
      if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
    }
  }
  j.on(document, ee, ne, fe.dataApiKeydownHandler),
    j.on(document, ee, re, fe.dataApiKeydownHandler),
    j.on(document, te, fe.clearMenus),
    j.on(document, ie, fe.clearMenus),
    j.on(document, te, ne, function (t) {
      t.preventDefault(), fe.getOrCreateInstance(this).toggle();
    }),
    b(fe);
  const me = 'backdrop',
    pe = 'show',
    be = `mousedown.bs.${me}`,
    ve = {
      className: 'modal-backdrop',
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: 'body',
    },
    ye = {
      className: 'string',
      clickCallback: '(function|null)',
      isAnimated: 'boolean',
      isVisible: 'boolean',
      rootElement: '(element|string)',
    };
  class we extends q {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return ve;
    }
    static get DefaultType() {
      return ye;
    }
    static get NAME() {
      return me;
    }
    show(t) {
      if (!this._config.isVisible) return void v(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && g(e),
        e.classList.add(pe),
        this._emulateAnimation(() => {
          v(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(pe),
          this._emulateAnimation(() => {
            this.dispose(), v(t);
          }))
        : v(t);
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, be),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement('div');
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add('fade'),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = c(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        j.on(t, be, () => {
          v(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      y(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Ae = '.bs.focustrap',
    Ee = `focusin${Ae}`,
    Ce = `keydown.tab${Ae}`,
    Te = 'backward',
    ke = { autofocus: !0, trapElement: null },
    $e = { autofocus: 'boolean', trapElement: 'element' };
  class Se extends q {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return ke;
    }
    static get DefaultType() {
      return $e;
    }
    static get NAME() {
      return 'focustrap';
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        j.off(document, Ae),
        j.on(document, Ee, (t) => this._handleFocusin(t)),
        j.on(document, Ce, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, Ae));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = K.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Te
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      'Tab' === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Te : 'forward');
    }
  }
  const Le = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    Oe = '.sticky-top',
    Ie = 'padding-right',
    De = 'margin-right';
  class Ne {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, Ie, (e) => e + t),
        this._setElementAttributes(Le, Ie, (e) => e + t),
        this._setElementAttributes(Oe, De, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow'),
        this._resetElementAttributes(this._element, Ie),
        this._resetElementAttributes(Le, Ie),
        this._resetElementAttributes(Oe, De);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow'),
        (this._element.style.overflow = 'hidden');
    }
    _setElementAttributes(t, e, i) {
      const s = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + s)
          return;
        this._saveInitialAttribute(t, e);
        const n = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(n))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && B.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = B.getDataAttribute(t, e);
        null !== i
          ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (l(t)) e(t);
      else for (const i of K.find(t, this._element)) e(i);
    }
  }
  const Pe = '.bs.modal',
    xe = `hide${Pe}`,
    Me = `hidePrevented${Pe}`,
    je = `hidden${Pe}`,
    Fe = `show${Pe}`,
    ze = `shown${Pe}`,
    He = `resize${Pe}`,
    Be = `click.dismiss${Pe}`,
    qe = `mousedown.dismiss${Pe}`,
    We = `keydown.dismiss${Pe}`,
    Re = `click${Pe}.data-api`,
    Ke = 'modal-open',
    Ve = 'show',
    Qe = 'modal-static',
    Xe = { backdrop: !0, focus: !0, keyboard: !0 },
    Ye = {
      backdrop: '(boolean|string)',
      focus: 'boolean',
      keyboard: 'boolean',
    };
  class Ue extends W {
    constructor(t, e) {
      super(t, e),
        (this._dialog = K.findOne('.modal-dialog', this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Ne()),
        this._addEventListeners();
    }
    static get Default() {
      return Xe;
    }
    static get DefaultType() {
      return Ye;
    }
    static get NAME() {
      return 'modal';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        j.trigger(this._element, Fe, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Ke),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (j.trigger(this._element, xe).defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(Ve),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      j.off(window, Pe),
        j.off(this._dialog, Pe),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new we({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Se({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0);
      const e = K.findOne('.modal-body', this._dialog);
      e && (e.scrollTop = 0),
        g(this._element),
        this._element.classList.add(Ve),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              j.trigger(this._element, ze, { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      j.on(this._element, We, (t) => {
        'Escape' === t.key &&
          (this._config.keyboard
            ? this.hide()
            : this._triggerBackdropTransition());
      }),
        j.on(window, He, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        j.on(this._element, qe, (t) => {
          j.one(this._element, Be, (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ('static' !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Ke),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, je);
        });
    }
    _isAnimated() {
      return this._element.classList.contains('fade');
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, Me).defaultPrevented) return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      'hidden' === e ||
        this._element.classList.contains(Qe) ||
        (t || (this._element.style.overflowY = 'hidden'),
        this._element.classList.add(Qe),
        this._queueCallback(() => {
          this._element.classList.remove(Qe),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? 'paddingLeft' : 'paddingRight';
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? 'paddingRight' : 'paddingLeft';
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ''),
        (this._element.style.paddingRight = '');
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ue.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  j.on(document, Re, '[data-bs-toggle="modal"]', function (t) {
    const e = K.getElementFromSelector(this);
    ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
      j.one(e, Fe, (t) => {
        t.defaultPrevented ||
          j.one(e, je, () => {
            h(this) && this.focus();
          });
      });
    const i = K.findOne('.modal.show');
    i && Ue.getInstance(i).hide(), Ue.getOrCreateInstance(e).toggle(this);
  }),
    V(Ue),
    b(Ue);
  const Ge = '.bs.offcanvas',
    Je = '.data-api',
    Ze = `load${Ge}${Je}`,
    ti = 'show',
    ei = 'showing',
    ii = 'hiding',
    si = '.offcanvas.show',
    ni = `show${Ge}`,
    oi = `shown${Ge}`,
    ri = `hide${Ge}`,
    ai = `hidePrevented${Ge}`,
    li = `hidden${Ge}`,
    ci = `resize${Ge}`,
    hi = `click${Ge}${Je}`,
    di = `keydown.dismiss${Ge}`,
    ui = { backdrop: !0, keyboard: !0, scroll: !1 },
    _i = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      scroll: 'boolean',
    };
  class gi extends W {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return ui;
    }
    static get DefaultType() {
      return _i;
    }
    static get NAME() {
      return 'offcanvas';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        j.trigger(this._element, ni, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new Ne().hide(),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        this._element.classList.add(ei),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(ti),
              this._element.classList.remove(ei),
              j.trigger(this._element, oi, { relatedTarget: t });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (j.trigger(this._element, ri).defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(ii),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(ti, ii),
                this._element.removeAttribute('aria-modal'),
                this._element.removeAttribute('role'),
                this._config.scroll || new Ne().reset(),
                j.trigger(this._element, li);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new we({
        className: 'offcanvas-backdrop',
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              'static' !== this._config.backdrop
                ? this.hide()
                : j.trigger(this._element, ai);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Se({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, di, (t) => {
        'Escape' === t.key &&
          (this._config.keyboard ? this.hide() : j.trigger(this._element, ai));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = gi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  j.on(document, hi, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = K.getElementFromSelector(this);
    if ((['A', 'AREA'].includes(this.tagName) && t.preventDefault(), d(this)))
      return;
    j.one(e, li, () => {
      h(this) && this.focus();
    });
    const i = K.findOne(si);
    i && i !== e && gi.getInstance(i).hide(),
      gi.getOrCreateInstance(e).toggle(this);
  }),
    j.on(window, Ze, () => {
      for (const t of K.find(si)) gi.getOrCreateInstance(t).show();
    }),
    j.on(window, ci, () => {
      for (const t of K.find('[aria-modal][class*=show][class*=offcanvas-]'))
        'fixed' !== getComputedStyle(t).position &&
          gi.getOrCreateInstance(t).hide();
    }),
    V(gi),
    b(gi);
  const fi = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    mi = new Set([
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ]),
    pi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    bi = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !mi.has(i) || Boolean(pi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    vi = {
      allowList: fi,
      content: {},
      extraClass: '',
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: '<div></div>',
    },
    yi = {
      allowList: 'object',
      content: 'object',
      extraClass: '(string|function)',
      html: 'boolean',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      template: 'string',
    },
    wi = {
      entry: '(string|element|function|null)',
      selector: '(string|element)',
    };
  class Ai extends q {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return vi;
    }
    static get DefaultType() {
      return yi;
    }
    static get NAME() {
      return 'TemplateFactory';
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement('div');
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(' ')), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, wi);
    }
    _setContent(t, e, i) {
      const s = K.findOne(i, t);
      s &&
        ((e = this._resolvePossibleFunction(e))
          ? l(e)
            ? this._putElementInTemplate(c(e), s)
            : this._config.html
            ? (s.innerHTML = this._maybeSanitize(e))
            : (s.textContent = e)
          : s.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && 'function' == typeof i) return i(t);
            const s = new window.DOMParser().parseFromString(t, 'text/html'),
              n = [].concat(...s.body.querySelectorAll('*'));
            for (const t of n) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const s = [].concat(...t.attributes),
                n = [].concat(e['*'] || [], e[i] || []);
              for (const e of s) bi(e, n) || t.removeAttribute(e.nodeName);
            }
            return s.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return v(t, [this]);
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ''), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Ei = new Set(['sanitize', 'allowList', 'sanitizeFn']),
    Ci = 'fade',
    Ti = 'show',
    ki = '.modal',
    $i = 'hide.bs.modal',
    Si = 'hover',
    Li = 'focus',
    Oi = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: p() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: p() ? 'right' : 'left',
    },
    Ii = {
      allowList: fi,
      animation: !0,
      boundary: 'clippingParents',
      container: !1,
      customClass: '',
      delay: 0,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      html: !1,
      offset: [0, 6],
      placement: 'top',
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: '',
      trigger: 'hover focus',
    },
    Di = {
      allowList: 'object',
      animation: 'boolean',
      boundary: '(string|element)',
      container: '(string|element|boolean)',
      customClass: '(string|function)',
      delay: '(number|object)',
      fallbackPlacements: 'array',
      html: 'boolean',
      offset: '(array|string|function)',
      placement: '(string|function)',
      popperConfig: '(null|object|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      selector: '(string|boolean)',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
    };
  class Ni extends W {
    constructor(t, e) {
      if (void 0 === i)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return Ii;
    }
    static get DefaultType() {
      return Di;
    }
    static get NAME() {
      return 'tooltip';
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(ki), $i, this._hideModalHandler),
        this._element.getAttribute('data-bs-original-title') &&
          this._element.setAttribute(
            'title',
            this._element.getAttribute('data-bs-original-title')
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ('none' === this._element.style.display)
        throw new Error('Please use show on visible elements');
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = j.trigger(this._element, this.constructor.eventName('show')),
        e = (
          u(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute('aria-describedby', i.getAttribute('id'));
      const { container: s } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (s.append(i),
          j.trigger(this._element, this.constructor.eventName('inserted'))),
        (this._popper = this._createPopper(i)),
        i.classList.add(Ti),
        'ontouchstart' in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          j.on(t, 'mouseover', _);
      this._queueCallback(
        () => {
          j.trigger(this._element, this.constructor.eventName('shown')),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (
        this._isShown() &&
        !j.trigger(this._element, this.constructor.eventName('hide'))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(Ti),
          'ontouchstart' in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            j.off(t, 'mouseover', _);
        (this._activeTrigger.click = !1),
          (this._activeTrigger[Li] = !1),
          (this._activeTrigger[Si] = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute('aria-describedby'),
                j.trigger(this._element, this.constructor.eventName('hidden')));
            },
            this.tip,
            this._isAnimated()
          );
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Ci, Ti),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute('id', i), this._isAnimated() && e.classList.add(Ci), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Ai({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { '.tooltip-inner': this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute('data-bs-original-title')
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Ci))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Ti);
    }
    _createPopper(t) {
      const e = v(this._config.placement, [this, t, this._element]),
        s = Oi[e.toUpperCase()];
      return i.createPopper(this._element, t, this._getPopperConfig(s));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return v(t, [this._element]);
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: 'flip',
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: 'offset', options: { offset: this._getOffset() } },
          {
            name: 'preventOverflow',
            options: { boundary: this._config.boundary },
          },
          {
            name: 'arrow',
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: 'preSetPlacement',
            enabled: !0,
            phase: 'beforeMain',
            fn: (t) => {
              this._getTipElement().setAttribute(
                'data-popper-placement',
                t.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...v(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      const t = this._config.trigger.split(' ');
      for (const e of t)
        if ('click' === e)
          j.on(
            this._element,
            this.constructor.eventName('click'),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ('manual' !== e) {
          const t =
              e === Si
                ? this.constructor.eventName('mouseenter')
                : this.constructor.eventName('focusin'),
            i =
              e === Si
                ? this.constructor.eventName('mouseleave')
                : this.constructor.eventName('focusout');
          j.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger['focusin' === t.type ? Li : Si] = !0), e._enter();
          }),
            j.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger['focusout' === t.type ? Li : Si] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        j.on(this._element.closest(ki), $i, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute('title');
      t &&
        (this._element.getAttribute('aria-label') ||
          this._element.textContent.trim() ||
          this._element.setAttribute('aria-label', t),
        this._element.setAttribute('data-bs-original-title', t),
        this._element.removeAttribute('title'));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = B.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Ei.has(t) && delete e[t];
      return (
        (t = { ...e, ...('object' == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : c(t.container)),
        'number' == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        'number' == typeof t.title && (t.title = t.title.toString()),
        'number' == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return (t.selector = !1), (t.trigger = 'manual'), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ni.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  b(Ni);
  const Pi = {
      ...Ni.Default,
      content: '',
      offset: [0, 8],
      placement: 'right',
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: 'click',
    },
    xi = { ...Ni.DefaultType, content: '(null|string|element|function)' };
  class Mi extends Ni {
    static get Default() {
      return Pi;
    }
    static get DefaultType() {
      return xi;
    }
    static get NAME() {
      return 'popover';
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        '.popover-header': this._getTitle(),
        '.popover-body': this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Mi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  b(Mi);
  const ji = '.bs.scrollspy',
    Fi = `activate${ji}`,
    zi = `click${ji}`,
    Hi = `load${ji}.data-api`,
    Bi = 'active',
    qi = '[href]',
    Wi = '.nav-link',
    Ri = `${Wi}, .nav-item > ${Wi}, .list-group-item`,
    Ki = {
      offset: null,
      rootMargin: '0px 0px -25%',
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    Vi = {
      offset: '(number|null)',
      rootMargin: 'string',
      smoothScroll: 'boolean',
      target: 'element',
      threshold: 'array',
    };
  class Qi extends W {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          'visible' === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return Ki;
    }
    static get DefaultType() {
      return Vi;
    }
    static get NAME() {
      return 'scrollspy';
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = c(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        'string' == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(',')
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (j.off(this._config.target, zi),
        j.on(this._config.target, zi, qi, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              s = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: s, behavior: 'smooth' });
            i.scrollTop = s;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        s = (this._rootElement || document.documentElement).scrollTop,
        n = s >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (n && t) {
          if ((i(o), !s)) return;
        } else n || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = K.find(qi, this._config.target);
      for (const e of t) {
        if (!e.hash || d(e)) continue;
        const t = K.findOne(decodeURI(e.hash), this._element);
        h(t) &&
          (this._targetLinks.set(decodeURI(e.hash), e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(Bi),
        this._activateParents(t),
        j.trigger(this._element, Fi, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains('dropdown-item'))
        K.findOne('.dropdown-toggle', t.closest('.dropdown')).classList.add(Bi);
      else
        for (const e of K.parents(t, '.nav, .list-group'))
          for (const t of K.prev(e, Ri)) t.classList.add(Bi);
    }
    _clearActiveClass(t) {
      t.classList.remove(Bi);
      const e = K.find(`${qi}.${Bi}`, t);
      for (const t of e) t.classList.remove(Bi);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Qi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(window, Hi, () => {
    for (const t of K.find('[data-bs-spy="scroll"]')) Qi.getOrCreateInstance(t);
  }),
    b(Qi);
  const Xi = '.bs.tab',
    Yi = `hide${Xi}`,
    Ui = `hidden${Xi}`,
    Gi = `show${Xi}`,
    Ji = `shown${Xi}`,
    Zi = `click${Xi}`,
    ts = `keydown${Xi}`,
    es = `load${Xi}`,
    is = 'ArrowLeft',
    ss = 'ArrowRight',
    ns = 'ArrowUp',
    os = 'ArrowDown',
    rs = 'Home',
    as = 'End',
    ls = 'active',
    cs = 'fade',
    hs = 'show',
    ds = '.dropdown-toggle',
    us = `:not(${ds})`,
    _s =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    gs = `.nav-link${us}, .list-group-item${us}, [role="tab"]${us}, ${_s}`,
    fs = `.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`;
  class ms extends W {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          j.on(this._element, ts, (t) => this._keydown(t)));
    }
    static get NAME() {
      return 'tab';
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? j.trigger(e, Yi, { relatedTarget: t }) : null;
      j.trigger(t, Gi, { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(ls),
        this._activate(K.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            'tab' === t.getAttribute('role')
              ? (t.removeAttribute('tabindex'),
                t.setAttribute('aria-selected', !0),
                this._toggleDropDown(t, !0),
                j.trigger(t, Ji, { relatedTarget: e }))
              : t.classList.add(hs);
          },
          t,
          t.classList.contains(cs)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(ls),
        t.blur(),
        this._deactivate(K.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            'tab' === t.getAttribute('role')
              ? (t.setAttribute('aria-selected', !1),
                t.setAttribute('tabindex', '-1'),
                this._toggleDropDown(t, !1),
                j.trigger(t, Ui, { relatedTarget: e }))
              : t.classList.remove(hs);
          },
          t,
          t.classList.contains(cs)
        ));
    }
    _keydown(t) {
      if (![is, ss, ns, os, rs, as].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = this._getChildren().filter((t) => !d(t));
      let i;
      if ([rs, as].includes(t.key)) i = e[t.key === rs ? 0 : e.length - 1];
      else {
        const s = [ss, os].includes(t.key);
        i = w(e, t.target, s, !0);
      }
      i && (i.focus({ preventScroll: !0 }), ms.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return K.find(gs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, 'role', 'tablist');
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute('aria-selected', e),
        i !== t && this._setAttributeIfNotExists(i, 'role', 'presentation'),
        e || t.setAttribute('tabindex', '-1'),
        this._setAttributeIfNotExists(t, 'role', 'tab'),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = K.getElementFromSelector(t);
      e &&
        (this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
        t.id && this._setAttributeIfNotExists(e, 'aria-labelledby', `${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains('dropdown')) return;
      const s = (t, s) => {
        const n = K.findOne(t, i);
        n && n.classList.toggle(s, e);
      };
      s(ds, ls), s('.dropdown-menu', hs), i.setAttribute('aria-expanded', e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(ls);
    }
    _getInnerElement(t) {
      return t.matches(gs) ? t : K.findOne(gs, t);
    }
    _getOuterElement(t) {
      return t.closest('.nav-item, .list-group-item') || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ms.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(document, Zi, _s, function (t) {
    ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
      d(this) || ms.getOrCreateInstance(this).show();
  }),
    j.on(window, es, () => {
      for (const t of K.find(fs)) ms.getOrCreateInstance(t);
    }),
    b(ms);
  const ps = '.bs.toast',
    bs = `mouseover${ps}`,
    vs = `mouseout${ps}`,
    ys = `focusin${ps}`,
    ws = `focusout${ps}`,
    As = `hide${ps}`,
    Es = `hidden${ps}`,
    Cs = `show${ps}`,
    Ts = `shown${ps}`,
    ks = 'hide',
    $s = 'show',
    Ss = 'showing',
    Ls = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    Os = { animation: !0, autohide: !0, delay: 5e3 };
  class Is extends W {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Os;
    }
    static get DefaultType() {
      return Ls;
    }
    static get NAME() {
      return 'toast';
    }
    show() {
      j.trigger(this._element, Cs).defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add('fade'),
        this._element.classList.remove(ks),
        g(this._element),
        this._element.classList.add($s, Ss),
        this._queueCallback(
          () => {
            this._element.classList.remove(Ss),
              j.trigger(this._element, Ts),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (j.trigger(this._element, As).defaultPrevented ||
          (this._element.classList.add(Ss),
          this._queueCallback(
            () => {
              this._element.classList.add(ks),
                this._element.classList.remove(Ss, $s),
                j.trigger(this._element, Es);
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove($s),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains($s);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = e;
          break;
        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, bs, (t) => this._onInteraction(t, !0)),
        j.on(this._element, vs, (t) => this._onInteraction(t, !1)),
        j.on(this._element, ys, (t) => this._onInteraction(t, !0)),
        j.on(this._element, ws, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Is.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    V(Is),
    b(Is),
    {
      Alert: U,
      Button: J,
      Carousel: Ot,
      Collapse: Rt,
      Dropdown: fe,
      Modal: Ue,
      Offcanvas: gi,
      Popover: Mi,
      ScrollSpy: Qi,
      Tab: ms,
      Toast: Is,
      Tooltip: Ni,
    }
  );
});
//# sourceMappingURL=bootstrap.min.js.map

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting'],
        },
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': d ? b : '',
              'margin-right': d ? '' : b,
            };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = '';
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1);
          (this._clones = b),
            a(h).addClass('cloned').appendTo(this.$stage),
            a(i).addClass('cloned').prependTo(this.$stage);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || '',
            };
          this.$stage.css(c);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style');
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c);
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + i.join('), :eq(') + ')')
              .addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass('center');
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', {
            class: this.settings.stageClass,
          }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find('.owl-item');
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var a, b, c;
        (a = this.$element.find('img')),
          (b = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized');
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(':visible');
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g'
                  ),
                  '$1' + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings },
        });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b });
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is('valid') && this.enter('valid');
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed');
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + '.owl.core',
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            'touchcancel.owl.core',
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          'mouseup.owl.core touchend.owl.core',
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              'mousemove.owl.core touchmove.owl.core',
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right';
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1;
            })),
        this.is('dragging') &&
          (this.leave('dragging'), this.trigger('dragged'));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                'left' === c && b > i - f && b < i + f
                  ? (e = a)
                  : 'right' === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, '<', i) &&
                    this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = 'left' === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, '>', h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition:
                this.speed() / 1e3 +
                's' +
                (this.settings.slideTransition
                  ? ' ' + this.settings.slideTransition
                  : ''),
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + 'px' });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', {
          property: { name: 'position', value: a },
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', {
            property: { name: 'position', value: this._current },
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(a)),
        this.release(['translate', 'translated']));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave('animating'), this.trigger('translated');
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate('items');
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') &&
                      !this.is('initializing') &&
                      this.refresh();
                }, this)
              )
              .attr(
                'src',
                c.attr('src') || c.attr('data-src') || c.attr('data-src-retina')
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                ''
              )
          )
          .removeData('owl.carousel');
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case '<':
          return d ? a > c : a < c;
        case '>':
          return d ? a < c : a > c;
        case '>=':
          return d ? a <= c : a >= c;
        case '<=':
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a;
            })
            .join('-')
            .toLowerCase()
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            'function' == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf('owl'))
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel');
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove',
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + '.owl.carousel.core',
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && 'position' == b.property.name) ||
                  'initialized' == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b);
                  }, this);
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy');
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src') ||
                  f.attr('data-srcset');
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: f, url: g },
                              'lazy'
                            );
                        }, this)
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          this._core.trigger(
                            'loaded',
                            { element: f, url: g },
                            'lazy'
                          );
                        }, this)
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        'background-image': 'url("' + g + '")',
                        opacity: '1',
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: f, url: g },
                          'lazy'
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' === a.property.name &&
              this.update();
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on('load', function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting'],
              });
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove();
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video');
              c.length &&
                (c.css('display', 'none'), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube';
          })(),
          d =
            a.attr('data-vimeo-id') ||
            a.attr('data-youtube-id') ||
            a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href');
        if (!g) throw new Error('Missing video URL.');
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube';
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo';
        else {
          if (!(d[3].indexOf('vzaar') > -1))
            throw new Error('Video URL not supported.');
          c = 'vzaar';
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'width:' + c.width + 'px;height:' + c.height + 'px;'
              : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                : a('<div/>', {
                    class: 'owl-video-tn',
                    style: 'opacity:1;background-image:url(' + c + ')',
                  })),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video');
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr(
                'src',
                '//www.youtube.com/embed/' +
                  f.id +
                  '?autoplay=1&rel=0&v=' +
                  f.id
              )
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type &&
              c.attr(
                'src',
                '//view.vzaar.com/' + f.id + '/player?autoplay=true'
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')));
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return b && a(b).parent().hasClass('owl-video-frame');
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off('click.owl.video');
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            a.proxy(function (a) {
              a.namespace && (this.swapping = 'translated' == a.type);
            }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                'position' === a.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause();
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play();
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause();
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is('interacting') ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave('rotating'));
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>'
              );
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw();
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'));
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML'),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
          '$relative' === b && e.navContainer
            ? this._controls[b].html('')
            : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation');
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash');
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off('hashchange.owl.navigation');
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e('transform');
        },
        csstransforms3d: function () {
          return !!e('perspective');
        },
        csstransitions: function () {
          return !!e('transition');
        },
        cssanimations: function () {
          return !!e('animation');
        },
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

//lenis:
var k = '1.1.18';
function w(r, t, e) {
  return Math.max(r, Math.min(t, e));
}
function W(r, t, e) {
  return (1 - e) * r + e * t;
}
function z(r, t, e, i) {
  return W(r, t, 1 - Math.exp(-e * i));
}
function x(r, t) {
  return ((r % t) + t) % t;
}
var y = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(t) {
    if (!this.isRunning) return;
    let e = !1;
    if (this.duration && this.easing) {
      this.currentTime += t;
      let i = w(0, this.currentTime / this.duration, 1);
      e = i >= 1;
      let s = e ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * s;
    } else
      this.lerp
        ? ((this.value = z(this.value, this.to, this.lerp * 60, t)),
          Math.round(this.value) === this.to &&
            ((this.value = this.to), (e = !0)))
        : ((this.value = this.to), (e = !0));
    e && this.stop(), this.onUpdate?.(this.value, e);
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(t, e, { lerp: i, duration: s, easing: o, onStart: l, onUpdate: h }) {
    (this.from = this.value = t),
      (this.to = e),
      (this.lerp = i),
      (this.duration = s),
      (this.easing = o),
      (this.currentTime = 0),
      (this.isRunning = !0),
      l?.(),
      (this.onUpdate = h);
  }
};
function R(r, t) {
  let e;
  return function (...i) {
    let s = this;
    clearTimeout(e),
      (e = setTimeout(() => {
        (e = void 0), r.apply(s, i);
      }, t));
  };
}
var E = class {
  constructor(t, e, { autoResize: i = !0, debounce: s = 250 } = {}) {
    this.wrapper = t;
    this.content = e;
    i &&
      ((this.debouncedResize = R(this.resize, s)),
      this.wrapper instanceof Window
        ? window.addEventListener('resize', this.debouncedResize, !1)
        : ((this.wrapperResizeObserver = new ResizeObserver(
            this.debouncedResize
          )),
          this.wrapperResizeObserver.observe(this.wrapper)),
      (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
      this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  width = 0;
  height = 0;
  scrollHeight = 0;
  scrollWidth = 0;
  debouncedResize;
  wrapperResizeObserver;
  contentResizeObserver;
  destroy() {
    this.wrapperResizeObserver?.disconnect(),
      this.contentResizeObserver?.disconnect(),
      this.wrapper === window &&
        this.debouncedResize &&
        window.removeEventListener('resize', this.debouncedResize, !1);
  }
  resize = () => {
    this.onWrapperResize(), this.onContentResize();
  };
  onWrapperResize = () => {
    this.wrapper instanceof Window
      ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
      : ((this.width = this.wrapper.clientWidth),
        (this.height = this.wrapper.clientHeight));
  };
  onContentResize = () => {
    this.wrapper instanceof Window
      ? ((this.scrollHeight = this.content.scrollHeight),
        (this.scrollWidth = this.content.scrollWidth))
      : ((this.scrollHeight = this.wrapper.scrollHeight),
        (this.scrollWidth = this.wrapper.scrollWidth));
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
};
var f = class {
  events = {};
  emit(t, ...e) {
    let i = this.events[t] || [];
    for (let s = 0, o = i.length; s < o; s++) i[s]?.(...e);
  }
  on(t, e) {
    return (
      this.events[t]?.push(e) || (this.events[t] = [e]),
      () => {
        this.events[t] = this.events[t]?.filter((i) => e !== i);
      }
    );
  }
  off(t, e) {
    this.events[t] = this.events[t]?.filter((i) => e !== i);
  }
  destroy() {
    this.events = {};
  }
};
var _ = 100 / 6,
  u = { passive: !1 },
  T = class {
    constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      this.element = t;
      this.options = e;
      window.addEventListener('resize', this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener('wheel', this.onWheel, u),
        this.element.addEventListener('touchstart', this.onTouchStart, u),
        this.element.addEventListener('touchmove', this.onTouchMove, u),
        this.element.addEventListener('touchend', this.onTouchEnd, u);
    }
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new f();
    on(t, e) {
      return this.emitter.on(t, e);
    }
    destroy() {
      this.emitter.destroy(),
        window.removeEventListener('resize', this.onWindowResize, !1),
        this.element.removeEventListener('wheel', this.onWheel, u),
        this.element.removeEventListener('touchstart', this.onTouchStart, u),
        this.element.removeEventListener('touchmove', this.onTouchMove, u),
        this.element.removeEventListener('touchend', this.onTouchEnd, u);
    }
    onTouchStart = (t) => {
      let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStart.x = e),
        (this.touchStart.y = i),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit('scroll', { deltaX: 0, deltaY: 0, event: t });
    };
    onTouchMove = (t) => {
      let { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t,
        s = -(e - this.touchStart.x) * this.options.touchMultiplier,
        o = -(i - this.touchStart.y) * this.options.touchMultiplier;
      (this.touchStart.x = e),
        (this.touchStart.y = i),
        (this.lastDelta = { x: s, y: o }),
        this.emitter.emit('scroll', { deltaX: s, deltaY: o, event: t });
    };
    onTouchEnd = (t) => {
      this.emitter.emit('scroll', {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t,
      });
    };
    onWheel = (t) => {
      let { deltaX: e, deltaY: i, deltaMode: s } = t,
        o = s === 1 ? _ : s === 2 ? this.window.width : 1,
        l = s === 1 ? _ : s === 2 ? this.window.height : 1;
      (e *= o),
        (i *= l),
        (e *= this.options.wheelMultiplier),
        (i *= this.options.wheelMultiplier),
        this.emitter.emit('scroll', { deltaX: e, deltaY: i, event: t });
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  };
var L = class {
  _isScrolling = !1;
  _isStopped = !1;
  _isLocked = !1;
  _preventNextNativeScrollEvent = !1;
  _resetVelocityTimeout = null;
  __rafID = null;
  isTouching;
  time = 0;
  userData = {};
  lastVelocity = 0;
  velocity = 0;
  direction = 0;
  options;
  targetScroll;
  animatedScroll;
  animate = new y();
  emitter = new f();
  dimensions;
  virtualScroll;
  constructor({
    wrapper: t = window,
    content: e = document.documentElement,
    eventsTarget: i = t,
    smoothWheel: s = !0,
    syncTouch: o = !1,
    syncTouchLerp: l = 0.075,
    touchInertiaMultiplier: h = 35,
    duration: S,
    easing: d = (H) => Math.min(1, 1.001 - Math.pow(2, -10 * H)),
    lerp: c = 0.1,
    infinite: p = !1,
    orientation: b = 'vertical',
    gestureOrientation: n = 'vertical',
    touchMultiplier: a = 1,
    wheelMultiplier: v = 1,
    autoResize: g = !0,
    prevent: m,
    virtualScroll: N,
    overscroll: M = !0,
    autoRaf: O = !1,
    __experimental__naiveDimensions: D = !1,
  } = {}) {
    (window.lenisVersion = k),
      (!t || t === document.documentElement || t === document.body) &&
        (t = window),
      (this.options = {
        wrapper: t,
        content: e,
        eventsTarget: i,
        smoothWheel: s,
        syncTouch: o,
        syncTouchLerp: l,
        touchInertiaMultiplier: h,
        duration: S,
        easing: d,
        lerp: c,
        infinite: p,
        gestureOrientation: n,
        orientation: b,
        touchMultiplier: a,
        wheelMultiplier: v,
        autoResize: g,
        prevent: m,
        virtualScroll: N,
        overscroll: M,
        autoRaf: O,
        __experimental__naiveDimensions: D,
      }),
      (this.dimensions = new E(t, e, { autoResize: g })),
      this.updateClassName(),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener('scroll', this.onNativeScroll, !1),
      this.options.wrapper.addEventListener(
        'pointerdown',
        this.onPointerDown,
        !1
      ),
      (this.virtualScroll = new T(i, {
        touchMultiplier: a,
        wheelMultiplier: v,
      })),
      this.virtualScroll.on('scroll', this.onVirtualScroll),
      this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        'scroll',
        this.onNativeScroll,
        !1
      ),
      this.options.wrapper.removeEventListener(
        'pointerdown',
        this.onPointerDown,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.cleanUpClassName(),
      this.__rafID && cancelAnimationFrame(this.__rafID);
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  off(t, e) {
    return this.emitter.off(t, e);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  onPointerDown = (t) => {
    t.button === 1 && this.reset();
  };
  onVirtualScroll = (t) => {
    if (
      typeof this.options.virtualScroll == 'function' &&
      this.options.virtualScroll(t) === !1
    )
      return;
    let { deltaX: e, deltaY: i, event: s } = t;
    if (
      (this.emitter.emit('virtual-scroll', { deltaX: e, deltaY: i, event: s }),
      s.ctrlKey || s.lenisStopPropagation)
    )
      return;
    let o = s.type.includes('touch'),
      l = s.type.includes('wheel');
    this.isTouching = s.type === 'touchstart' || s.type === 'touchmove';
    let h = e === 0 && i === 0;
    if (
      this.options.syncTouch &&
      o &&
      s.type === 'touchstart' &&
      h &&
      !this.isStopped &&
      !this.isLocked
    ) {
      this.reset();
      return;
    }
    let d =
      (this.options.gestureOrientation === 'vertical' && i === 0) ||
      (this.options.gestureOrientation === 'horizontal' && e === 0);
    if (h || d) return;
    let c = s.composedPath();
    c = c.slice(0, c.indexOf(this.rootElement));
    let p = this.options.prevent;
    if (
      c.find(
        (m) =>
          m instanceof HTMLElement &&
          ((typeof p == 'function' && p?.(m)) ||
            m.hasAttribute?.('data-lenis-prevent') ||
            (o && m.hasAttribute?.('data-lenis-prevent-touch')) ||
            (l && m.hasAttribute?.('data-lenis-prevent-wheel')))
      )
    )
      return;
    if (this.isStopped || this.isLocked) {
      s.preventDefault();
      return;
    }
    if (!((this.options.syncTouch && o) || (this.options.smoothWheel && l))) {
      (this.isScrolling = 'native'),
        this.animate.stop(),
        (s.lenisStopPropagation = !0);
      return;
    }
    let n = i;
    this.options.gestureOrientation === 'both'
      ? (n = Math.abs(i) > Math.abs(e) ? i : e)
      : this.options.gestureOrientation === 'horizontal' && (n = e),
      (!this.options.overscroll ||
        this.options.infinite ||
        (this.options.wrapper !== window &&
          ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
            (this.animatedScroll === 0 && i > 0) ||
            (this.animatedScroll === this.limit && i < 0)))) &&
        (s.lenisStopPropagation = !0),
      s.preventDefault();
    let a = o && this.options.syncTouch,
      g = o && s.type === 'touchend' && Math.abs(n) > 5;
    g && (n = this.velocity * this.options.touchInertiaMultiplier),
      this.scrollTo(this.targetScroll + n, {
        programmatic: !1,
        ...(a
          ? { lerp: g ? this.options.syncTouchLerp : 1 }
          : {
              lerp: this.options.lerp,
              duration: this.options.duration,
              easing: this.options.easing,
            }),
      });
  };
  resize() {
    this.dimensions.resize(),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      this.emit();
  }
  emit() {
    this.emitter.emit('scroll', this);
  }
  onNativeScroll = () => {
    if (
      (this._resetVelocityTimeout !== null &&
        (clearTimeout(this._resetVelocityTimeout),
        (this._resetVelocityTimeout = null)),
      this._preventNextNativeScrollEvent)
    ) {
      this._preventNextNativeScrollEvent = !1;
      return;
    }
    if (this.isScrolling === !1 || this.isScrolling === 'native') {
      let t = this.animatedScroll;
      (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity),
        (this.velocity = this.animatedScroll - t),
        (this.direction = Math.sign(this.animatedScroll - t)),
        this.isStopped || (this.isScrolling = 'native'),
        this.emit(),
        this.velocity !== 0 &&
          (this._resetVelocityTimeout = setTimeout(() => {
            (this.lastVelocity = this.velocity),
              (this.velocity = 0),
              (this.isScrolling = !1),
              this.emit();
          }, 400));
    }
  };
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.lastVelocity = this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && (this.reset(), (this.isStopped = !1));
  }
  stop() {
    this.isStopped || (this.reset(), (this.isStopped = !0));
  }
  raf = (t) => {
    let e = t - (this.time || t);
    (this.time = t),
      this.animate.advance(e * 0.001),
      this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
  };
  scrollTo(
    t,
    {
      offset: e = 0,
      immediate: i = !1,
      lock: s = !1,
      duration: o = this.options.duration,
      easing: l = this.options.easing,
      lerp: h = this.options.lerp,
      onStart: S,
      onComplete: d,
      force: c = !1,
      programmatic: p = !0,
      userData: b,
    } = {}
  ) {
    if (!((this.isStopped || this.isLocked) && !c)) {
      if (typeof t == 'string' && ['top', 'left', 'start'].includes(t)) t = 0;
      else if (typeof t == 'string' && ['bottom', 'right', 'end'].includes(t))
        t = this.limit;
      else {
        let n;
        if (
          (typeof t == 'string'
            ? (n = document.querySelector(t))
            : t instanceof HTMLElement && t?.nodeType && (n = t),
          n)
        ) {
          if (this.options.wrapper !== window) {
            let v = this.rootElement.getBoundingClientRect();
            e -= this.isHorizontal ? v.left : v.top;
          }
          let a = n.getBoundingClientRect();
          t = (this.isHorizontal ? a.left : a.top) + this.animatedScroll;
        }
      }
      if (typeof t == 'number') {
        if (
          ((t += e),
          (t = Math.round(t)),
          this.options.infinite
            ? p && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = w(0, t, this.limit)),
          t === this.targetScroll)
        ) {
          S?.(this), d?.(this);
          return;
        }
        if (((this.userData = b ?? {}), i)) {
          (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            d?.(this),
            (this.userData = {});
          return;
        }
        p || (this.targetScroll = t),
          this.animate.fromTo(this.animatedScroll, t, {
            duration: o,
            easing: l,
            lerp: h,
            onStart: () => {
              s && (this.isLocked = !0),
                (this.isScrolling = 'smooth'),
                S?.(this);
            },
            onUpdate: (n, a) => {
              (this.isScrolling = 'smooth'),
                (this.lastVelocity = this.velocity),
                (this.velocity = n - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = n),
                this.setScroll(this.scroll),
                p && (this.targetScroll = n),
                a || this.emit(),
                a &&
                  (this.reset(),
                  this.emit(),
                  d?.(this),
                  (this.userData = {}),
                  this.preventNextNativeScrollEvent());
            },
          });
      }
    }
  }
  preventNextNativeScrollEvent() {
    (this._preventNextNativeScrollEvent = !0),
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = !1;
      });
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? 'x' : 'y'];
  }
  get isHorizontal() {
    return this.options.orientation === 'horizontal';
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? x(this.animatedScroll, this.limit)
      : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(t) {
    this._isScrolling !== t &&
      ((this._isScrolling = t), this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(t) {
    this._isStopped !== t && ((this._isStopped = t), this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(t) {
    this._isLocked !== t && ((this._isLocked = t), this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === 'smooth';
  }
  get className() {
    let t = 'lenis';
    return (
      this.isStopped && (t += ' lenis-stopped'),
      this.isLocked && (t += ' lenis-locked'),
      this.isScrolling && (t += ' lenis-scrolling'),
      this.isScrolling === 'smooth' && (t += ' lenis-smooth'),
      t
    );
  }
  updateClassName() {
    this.cleanUpClassName(),
      (this.rootElement.className =
        `${this.rootElement.className} ${this.className}`.trim());
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className
      .replace(/lenis(-\w+)?/g, '')
      .trim();
  }
};
globalThis.Lenis = L;
//# sourceMappingURL=lenis.min.js.map
