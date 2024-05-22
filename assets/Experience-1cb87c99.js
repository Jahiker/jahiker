import{r as g,g as G,j as I,a as m,m as Q}from"./index-5cf2fe92.js";import{b as X}from"./index-2d54b814.js";var k={},B={exports:{}},Z="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ee=Z,te=ee;function L(){}function q(){}q.resetWarningCache=L;var ne=function(){function e(i,t,a,c,o,s){if(s!==te){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:q,resetWarningCache:L};return r.PropTypes=r,r};B.exports=ne();var U=B.exports,z={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var i=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if(c==="string"||c==="number")i.push(a);else if(Array.isArray(a)){if(a.length){var o=r.apply(null,a);o&&i.push(o)}}else if(c==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){i.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&i.push(s)}}}return i.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(z);var H=z.exports;k.__esModule=!0;k.default=void 0;var re=M(g),h=M(U),ie=M(H);function M(e){return e&&e.__esModule?e:{default:e}}const J=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:i="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",i),re.default.createElement("div",{className:(0,ie.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));J.propTypes={children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]).isRequired,className:h.default.string,animate:h.default.bool,layout:h.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:h.default.string};var ae=J;k.default=ae;var N={};function F(){return F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},F.apply(this,arguments)}function oe(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,C(e,n)}function C(e,n){return C=Object.setPrototypeOf||function(i,t){return i.__proto__=t,i},C(e,n)}function se(e,n){if(e==null)return{};var r={},i=Object.keys(e),t,a;for(a=0;a<i.length;a++)t=i[a],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var R=new Map,w=new WeakMap,W=0,K=void 0;function le(e){K=e}function ce(e){return e?(w.has(e)||(W+=1,w.set(e,W.toString())),w.get(e)):"0"}function de(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?ce(e.root):e[n])}).toString()}function ue(e){var n=de(e),r=R.get(n);if(!r){var i=new Map,t,a=new IntersectionObserver(function(c){c.forEach(function(o){var s,d=o.isIntersecting&&t.some(function(u){return o.intersectionRatio>=u});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=d),(s=i.get(o.target))==null||s.forEach(function(u){u(d,o)})})},e);t=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:a,elements:i},R.set(n,r)}return r}function j(e,n,r,i){if(r===void 0&&(r={}),i===void 0&&(i=K),typeof window.IntersectionObserver>"u"&&i!==void 0){var t=e.getBoundingClientRect();return n(i,{isIntersecting:i,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var a=ue(r),c=a.id,o=a.observer,s=a.elements,d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(n),o.observe(e),function(){d.splice(d.indexOf(n),1),d.length===0&&(s.delete(e),o.unobserve(e)),s.size===0&&(o.disconnect(),R.delete(c))}}var pe=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function $(e){return typeof e.children!="function"}var V=function(e){oe(n,e);function n(i){var t;return t=e.call(this,i)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(a){t.node&&(t.unobserve(),!a&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=a||null,t.observeNode()},t.handleChange=function(a,c){a&&t.props.triggerOnce&&t.unobserve(),$(t.props)||t.setState({inView:a,entry:c}),t.props.onChange&&t.props.onChange(a,c)},t.state={inView:!!i.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,a=t.threshold,c=t.root,o=t.rootMargin,s=t.trackVisibility,d=t.delay,u=t.fallbackInView;this._unobserveCb=j(this.node,this.handleChange,{threshold:a,root:c,rootMargin:o,trackVisibility:s,delay:d},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!$(this.props)){var t=this.state,a=t.inView,c=t.entry;return this.props.children({inView:a,entry:c,ref:this.handleNode})}var o=this.props,s=o.children,d=o.as,u=se(o,pe);return g.createElement(d||"div",F({ref:this.handleNode},u),s)},n}(g.Component);V.displayName="InView";V.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function fe(e){var n=e===void 0?{}:e,r=n.threshold,i=n.delay,t=n.trackVisibility,a=n.rootMargin,c=n.root,o=n.triggerOnce,s=n.skip,d=n.initialInView,u=n.fallbackInView,f=g.useRef(),b=g.useState({inView:!!d}),_=b[0],x=b[1],T=g.useCallback(function(y){f.current!==void 0&&(f.current(),f.current=void 0),!s&&y&&(f.current=j(y,function(S,D){x({inView:S,entry:D}),D.isIntersecting&&o&&f.current&&(f.current(),f.current=void 0)},{root:c,rootMargin:a,threshold:r,trackVisibility:t,delay:i},u))},[Array.isArray(r)?r.toString():r,c,a,o,s,t,u,i]);g.useEffect(function(){!f.current&&_.entry&&!o&&!s&&x({inView:!!d})});var p=[T,_.inView,_.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const me=Object.freeze(Object.defineProperty({__proto__:null,InView:V,default:V,defaultFallbackInView:le,observe:j,useInView:fe},Symbol.toStringTag,{value:"Module"})),he=G(me);N.__esModule=!0;N.default=void 0;var v=P(g),l=P(U),O=P(H),ve=he;function P(e){return e&&e.__esModule?e:{default:e}}const Y=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:i=null,date:t="",dateClassName:a="",icon:c=null,iconClassName:o="",iconOnClick:s=null,onTimelineElementClick:d=null,iconStyle:u=null,id:f="",position:b="",style:_=null,textClassName:x="",intersectionObserverProps:T={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:p=!1})=>v.default.createElement(ve.InView,T,({inView:y,ref:S})=>v.default.createElement("div",{ref:S,id:f,className:(0,O.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:_},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:u,onClick:s,className:(0,O.default)(o,"vertical-timeline-element-icon",{"bounce-in":y||p,"is-hidden":!(y||p)})},c),v.default.createElement("div",{style:i,onClick:d,className:(0,O.default)(x,"vertical-timeline-element-content",{"bounce-in":y||p,"is-hidden":!(y||p)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,O.default)(a,"vertical-timeline-element-date")},t)))));Y.propTypes={children:l.default.oneOfType([l.default.arrayOf(l.default.node),l.default.node]),className:l.default.string,contentArrowStyle:l.default.shape({}),contentStyle:l.default.shape({}),date:l.default.node,dateClassName:l.default.string,icon:l.default.element,iconClassName:l.default.string,iconStyle:l.default.shape({}),iconOnClick:l.default.func,onTimelineElementClick:l.default.func,id:l.default.string,position:l.default.string,style:l.default.shape({}),textClassName:l.default.string,visible:l.default.bool,intersectionObserverProps:l.default.shape({root:l.default.object,rootMargin:l.default.string,threshold:l.default.number,triggerOnce:l.default.bool})};var ge=Y;N.default=ge;var A={VerticalTimeline:k.default,VerticalTimelineElement:N.default};const ye="https://jahiker.github.io/jahiker/assets/freelancer-a6705609.webp",be="https://jahiker.github.io/jahiker/assets/smk-6f56eced.png",E=[{title:"Frontend Web Developer",company_name:"Smk Online",icon:be,iconBg:"#FFFFFF",date:"Oct 2020 - Currently",points:["Developing and maintaining custom Wordpress themes.","Developing and maintaining custom Shopify themes.","Developing and maintaining React Frontend apps.","Developing and maintaining Vue - Vuetify Frontend apps.","Developing and maintaining Frontend styles systems with technologies like Sass, Bootstrap, Tailwind.","Implementing responsive design and ensuring cross-browser compatibility.","Improve Frontend apps load and performance.","Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.","Participating in code reviews and providing constructive feedback to other developers."]},{title:"Fullstack Web Developer",company_name:"Freelance",icon:ye,iconBg:"#FFFFFF",date:"Jan 2020 - Oct 2020",points:["Developing and maintaining custom wordpress themes.","Developing and maintaining Laravel and PHP fullstack apps.","Developing and maintaining Vue - Vuetify Frontend apps.","Implementing responsive design and ensuring cross-browser compatibility."]}];const we=()=>I("div",{className:"max-w-[100%] md:max-w-[90%] mx-auto rounded-3xl bg-gray p-[10px] md:p-[30px]",children:[m(Q.div,{children:m("h2",{className:"text-primary text-center font-bold text-[25px] md:text-[60px] my-5",children:"My Work Experience"})}),m(A.VerticalTimeline,{lineColor:"#c4c4c4",children:E==null?void 0:E.map((e,n)=>I(A.VerticalTimelineElement,{contentStyle:{background:"#292929",color:"#c4c4c4",border:"4px solid #c4c4c4",borderRadius:"20px",padding:"10px"},contentArrowStyle:{borderRight:"10px solid #c4c4c4"},date:e.date,dateClassName:"dateTimaline",iconStyle:{background:e.iconBg},icon:m("div",{className:"flex justify-center items-center w-full h-full",children:m(X.LazyLoadImage,{src:e.icon,alt:e.company_name,className:"w-[60%] h-[60%] object-cover",width:"24",height:"24"})}),children:[I("div",{children:[m("h3",{className:"text-primary text-[14px] md:text-[24px] font-bold",children:e.title}),m("p",{className:"text-secondary text-[10px] md:text-[16px] font-semibold",style:{margin:0},children:e.company_name})]}),m("ul",{className:"mt-5 list-disc ml-3 md:ml-5 space-y-2",children:e.points.map((r,i)=>m("li",{className:"text-white-100 text-[8px] md:text-[14px] pl-1 tracking-wider",children:r},`experience-point-${i}`))})]},n))})]});export{we as default};
