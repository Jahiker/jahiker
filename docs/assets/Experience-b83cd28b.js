import { r as y, g as K, j as C, a as m, b as Y, e as G } from './index-1e54b145.js'; const S = {}; let V = {}; const J = { get exports () { return V }, set exports (e) { V = e } }; const Q = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'; const X = Q; const Z = X; function q () {} function B () {}B.resetWarningCache = q; const ee = function () { function e (i, t, a, c, o, l) { if (l !== Z) { const u = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'); throw u.name = 'Invariant Violation', u } }e.isRequired = e; function n () { return e } const r = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: n, element: e, elementType: e, instanceOf: n, node: e, objectOf: n, oneOf: n, oneOfType: n, shape: n, exact: n, checkPropTypes: B, resetWarningCache: q }; return r.PropTypes = r, r }; J.exports = ee(); let N = {}; const te = { get exports () { return N }, set exports (e) { N = e } };/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function (e) { (function () { const n = {}.hasOwnProperty; function r () { for (var i = [], t = 0; t < arguments.length; t++) { const a = arguments[t]; if (a) { const c = typeof a; if (c === 'string' || c === 'number')i.push(a); else if (Array.isArray(a)) { if (a.length) { const o = r.apply(null, a); o && i.push(o) } } else if (c === 'object') { if (a.toString !== Object.prototype.toString && !a.toString.toString().includes('[native code]')) { i.push(a.toString()); continue } for (const l in a)n.call(a, l) && a[l] && i.push(l) } } } return i.join(' ') }e.exports ? (r.default = r, e.exports = r) : window.classNames = r })() })(te); S.__esModule = !0; S.default = void 0; const ne = j(y); const h = j(V); const re = j(N); function j (e) { return e && e.__esModule ? e : { default: e } } const L = ({ animate: e = !0, className: n = '', layout: r = '2-columns', lineColor: i = '#FFF', children: t }) => (typeof window === 'object' && document.documentElement.style.setProperty('--line-color', i), ne.default.createElement('div', { className: (0, re.default)(n, 'vertical-timeline', { 'vertical-timeline--animate': e, 'vertical-timeline--two-columns': r === '2-columns', 'vertical-timeline--one-column-left': r === '1-column' || r === '1-column-left', 'vertical-timeline--one-column-right': r === '1-column-right' }) }, t)); L.propTypes = { children: h.default.oneOfType([h.default.arrayOf(h.default.node), h.default.node]).isRequired, className: h.default.string, animate: h.default.bool, layout: h.default.oneOf(['1-column-left', '1-column', '2-columns', '1-column-right']), lineColor: h.default.string }; const ie = L; S.default = ie; const k = {}; function R () { return R = Object.assign || function (e) { for (let n = 1; n < arguments.length; n++) { const r = arguments[n]; for (const i in r)Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e }, R.apply(this, arguments) } function ae (e, n) { e.prototype = Object.create(n.prototype), e.prototype.constructor = e, M(e, n) } function M (e, n) { return M = Object.setPrototypeOf || function (i, t) { return i.__proto__ = t, i }, M(e, n) } function oe (e, n) { if (e == null) return {}; const r = {}; const i = Object.keys(e); let t; let a; for (a = 0; a < i.length; a++)t = i[a], !(n.indexOf(t) >= 0) && (r[t] = e[t]); return r } const P = new Map(); const O = new WeakMap(); let F = 0; let z = void 0; function le (e) { z = e } function se (e) { return e ? (O.has(e) || (F += 1, O.set(e, F.toString())), O.get(e)) : '0' } function ce (e) { return Object.keys(e).sort().filter(function (n) { return e[n] !== void 0 }).map(function (n) { return n + '_' + (n === 'root' ? se(e.root) : e[n]) }).toString() } function ue (e) { const n = ce(e); let r = P.get(n); if (!r) { const i = new Map(); let t; const a = new IntersectionObserver(function (c) { c.forEach(function (o) { let l; const u = o.isIntersecting && t.some(function (d) { return o.intersectionRatio >= d }); e.trackVisibility && typeof o.isVisible > 'u' && (o.isVisible = u), (l = i.get(o.target)) == null || l.forEach(function (d) { d(u, o) }) }) }, e); t = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = { id: n, observer: a, elements: i }, P.set(n, r) } return r } function $ (e, n, r, i) { if (r === void 0 && (r = {}), i === void 0 && (i = z), typeof window.IntersectionObserver > 'u' && i !== void 0) { const t = e.getBoundingClientRect(); return n(i, { isIntersecting: i, target: e, intersectionRatio: typeof r.threshold === 'number' ? r.threshold : 0, time: 0, boundingClientRect: t, intersectionRect: t, rootBounds: t }), function () {} } const a = ue(r); const c = a.id; const o = a.observer; const l = a.elements; const u = l.get(e) || []; return l.has(e) || l.set(e, u), u.push(n), o.observe(e), function () { u.splice(u.indexOf(n), 1), u.length === 0 && (l.delete(e), o.unobserve(e)), l.size === 0 && (o.disconnect(), P.delete(c)) } } const de = ['children', 'as', 'triggerOnce', 'threshold', 'root', 'rootMargin', 'onChange', 'skip', 'trackVisibility', 'delay', 'initialInView', 'fallbackInView']; function D (e) { return typeof e.children !== 'function' } const T = (function (e) { ae(n, e); function n (i) { let t; return t = e.call(this, i) || this, t.node = null, t._unobserveCb = null, t.handleNode = function (a) { t.node && (t.unobserve(), !a && !t.props.triggerOnce && !t.props.skip && t.setState({ inView: !!t.props.initialInView, entry: void 0 })), t.node = a || null, t.observeNode() }, t.handleChange = function (a, c) { a && t.props.triggerOnce && t.unobserve(), D(t.props) || t.setState({ inView: a, entry: c }), t.props.onChange && t.props.onChange(a, c) }, t.state = { inView: !!i.initialInView, entry: void 0 }, t } const r = n.prototype; return r.componentDidUpdate = function (t) { (t.rootMargin !== this.props.rootMargin || t.root !== this.props.root || t.threshold !== this.props.threshold || t.skip !== this.props.skip || t.trackVisibility !== this.props.trackVisibility || t.delay !== this.props.delay) && (this.unobserve(), this.observeNode()) }, r.componentWillUnmount = function () { this.unobserve(), this.node = null }, r.observeNode = function () { if (!(!this.node || this.props.skip)) { const t = this.props; const a = t.threshold; const c = t.root; const o = t.rootMargin; const l = t.trackVisibility; const u = t.delay; const d = t.fallbackInView; this._unobserveCb = $(this.node, this.handleChange, { threshold: a, root: c, rootMargin: o, trackVisibility: l, delay: u }, d) } }, r.unobserve = function () { this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null) }, r.render = function () { if (!D(this.props)) { const t = this.state; const a = t.inView; const c = t.entry; return this.props.children({ inView: a, entry: c, ref: this.handleNode }) } const o = this.props; const l = o.children; const u = o.as; const d = oe(o, de); return y.createElement(u || 'div', R({ ref: this.handleNode }, d), l) }, n }(y.Component)); T.displayName = 'InView'; T.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 }; function fe (e) { const n = e === void 0 ? {} : e; const r = n.threshold; const i = n.delay; const t = n.trackVisibility; const a = n.rootMargin; const c = n.root; const o = n.triggerOnce; const l = n.skip; const u = n.initialInView; const d = n.fallbackInView; const p = y.useRef(); const b = y.useState({ inView: !!u }); const x = b[0]; const _ = b[1]; const E = y.useCallback(function (g) { p.current !== void 0 && (p.current(), p.current = void 0), !l && g && (p.current = $(g, function (I, W) { _({ inView: I, entry: W }), W.isIntersecting && o && p.current && (p.current(), p.current = void 0) }, { root: c, rootMargin: a, threshold: r, trackVisibility: t, delay: i }, d)) }, [Array.isArray(r) ? r.toString() : r, c, a, o, l, t, d, i]); y.useEffect(function () { !p.current && x.entry && !o && !l && _({ inView: !!u }) }); const f = [E, x.inView, x.entry]; return f.ref = f[0], f.inView = f[1], f.entry = f[2], f } const pe = Object.freeze(Object.defineProperty({ __proto__: null, InView: T, default: T, defaultFallbackInView: le, observe: $, useInView: fe }, Symbol.toStringTag, { value: 'Module' })); const me = K(pe); k.__esModule = !0; k.default = void 0; const v = A(y); const s = A(V); const w = A(N); const he = me; function A (e) { return e && e.__esModule ? e : { default: e } } const H = ({ children: e = '', className: n = '', contentArrowStyle: r = null, contentStyle: i = null, date: t = '', dateClassName: a = '', icon: c = null, iconClassName: o = '', iconOnClick: l = null, onTimelineElementClick: u = null, iconStyle: d = null, id: p = '', position: b = '', style: x = null, textClassName: _ = '', intersectionObserverProps: E = { rootMargin: '0px 0px -40px 0px', triggerOnce: !0 }, visible: f = !1 }) => v.default.createElement(he.InView, E, ({ inView: g, ref: I }) => v.default.createElement('div', { ref: I, id: p, className: (0, w.default)(n, 'vertical-timeline-element', { 'vertical-timeline-element--left': b === 'left', 'vertical-timeline-element--right': b === 'right', 'vertical-timeline-element--no-children': e === '' }), style: x }, v.default.createElement(v.default.Fragment, null, v.default.createElement('span', { style: d, onClick: l, className: (0, w.default)(o, 'vertical-timeline-element-icon', { 'bounce-in': g || f, 'is-hidden': !(g || f) }) }, c), v.default.createElement('div', { style: i, onClick: u, className: (0, w.default)(_, 'vertical-timeline-element-content', { 'bounce-in': g || f, 'is-hidden': !(g || f) }) }, v.default.createElement('div', { style: r, className: 'vertical-timeline-element-content-arrow' }), e, v.default.createElement('span', { className: (0, w.default)(a, 'vertical-timeline-element-date') }, t))))); H.propTypes = { children: s.default.oneOfType([s.default.arrayOf(s.default.node), s.default.node]), className: s.default.string, contentArrowStyle: s.default.shape({}), contentStyle: s.default.shape({}), date: s.default.node, dateClassName: s.default.string, icon: s.default.element, iconClassName: s.default.string, iconStyle: s.default.shape({}), iconOnClick: s.default.func, onTimelineElementClick: s.default.func, id: s.default.string, position: s.default.string, style: s.default.shape({}), textClassName: s.default.string, visible: s.default.bool, intersectionObserverProps: s.default.shape({ root: s.default.object, rootMargin: s.default.string, threshold: s.default.number, triggerOnce: s.default.bool }) }; const ve = H; k.default = ve; const U = { VerticalTimeline: S.default, VerticalTimelineElement: k.default }; const ge = () => { let e; return C('div', { className: 'max-w-[100%] md:max-w-[70%] mx-auto rounded-3xl bg-gray p-[10px] md:p-[30px]', children: [m(Y.div, { children: m('h2', { className: 'text-primary text-center font-bold text-[25px] md:text-[60px] my-5', children: 'My Work Experience' }) }), m(U.VerticalTimeline, { lineColor: '#c4c4c4', children: (e = G) == null ? void 0 : e.map((n, r) => C(U.VerticalTimelineElement, { contentStyle: { background: '#292929', color: '#c4c4c4', border: '4px solid #c4c4c4', borderRadius: '20px', padding: '10px' }, contentArrowStyle: { borderRight: '10px solid #c4c4c4' }, date: n.date, dateClassName: 'dateTimaline', iconStyle: { background: n.iconBg }, icon: m('div', { className: 'flex justify-center items-center w-full h-full', children: m('img', { src: n.icon, alt: n.company_name, className: 'w-[60%] h-[60%] object-cover' }) }), children: [C('div', { children: [m('h3', { className: 'text-primary text-[14px] md:text-[24px] font-bold', children: n.title }), m('p', { className: 'text-secondary text-[10px] md:text-[16px] font-semibold', style: { margin: 0 }, children: n.company_name })] }), m('ul', { className: 'mt-5 list-disc ml-3 md:ml-5 space-y-2', children: n.points.map((i, t) => m('li', { className: 'text-white-100 text-[8px] md:text-[14px] pl-1 tracking-wider', children: i }, `experience-point-${t}`)) })] }, r)) })] }) }; export { ge as default }
