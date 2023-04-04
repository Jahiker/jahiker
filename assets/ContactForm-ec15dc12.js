import{R as Q,r as je,a as L,j as le}from"./index-f76be9de.js";import{n as xr}from"./index.esm-3ec1098a.js";import"./iconBase-22dad611.js";const oe={_origin:"https://api.emailjs.com"},pr=(e,s="https://api.emailjs.com")=>{oe._userID=e,oe._origin=s},Ze=(e,s,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class $e{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const er=(e,s,i={})=>new Promise((t,a)=>{const u=new XMLHttpRequest;u.addEventListener("load",({target:c})=>{const v=new $e(c);v.status===200||v.text==="OK"?t(v):a(v)}),u.addEventListener("error",({target:c})=>{a(new $e(c))}),u.open("POST",oe._origin+e,!0),Object.keys(i).forEach(c=>{u.setRequestHeader(c,i[c])}),u.send(s)}),_r=(e,s,i,t)=>{const a=t||oe._userID;return Ze(a,e,s),er("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:a,service_id:e,template_id:s,template_params:i}),{"Content-type":"application/json"})},wr=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},Vr=(e,s,i,t)=>{const a=t||oe._userID,u=wr(i);Ze(a,e,s);const c=new FormData(u);return c.append("lib_version","3.10.0"),c.append("service_id",e),c.append("template_id",s),c.append("user_id",a),er("/api/v1.0/email/send-form",c)},Ar={init:pr,send:_r,sendForm:Vr};var ce=e=>e.type==="checkbox",re=e=>e instanceof Date,N=e=>e==null;const rr=e=>typeof e=="object";var D=e=>!N(e)&&!Array.isArray(e)&&rr(e)&&!re(e),Fr=e=>D(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,kr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Sr=(e,s)=>e.has(kr(s)),Dr=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Ne=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Ne&&(e instanceof Blob||e instanceof FileList))&&(i||D(e)))if(s=i?[]:{},!Array.isArray(e)&&!Dr(e))s=e;else for(const t in e)s[t]=G(e[t]);else return e;return s}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],S=e=>e===void 0,y=(e,s,i)=>{if(!s||!D(e))return i;const t=fe(s.split(/[,[\].]+?/)).reduce((a,u)=>N(a)?a:a[u],e);return S(t)||t===e?S(e[s])?i:e[s]:t};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Q.createContext(null);var Er=(e,s,i,t=!0)=>{const a={defaultValues:s._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const c=u;return s._proxyFormState[c]!==B.all&&(s._proxyFormState[c]=!t||B.all),i&&(i[c]=!0),e[c]}});return a},U=e=>D(e)&&!Object.keys(e).length,Tr=(e,s,i,t)=>{i(e);const{name:a,...u}=e;return U(u)||Object.keys(u).length>=Object.keys(s).length||Object.keys(u).find(c=>s[c]===(!t||B.all))},Fe=e=>Array.isArray(e)?e:[e];function Nr(e){const s=Q.useRef(e);s.current=e,Q.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var j=e=>typeof e=="string",Or=(e,s,i,t,a)=>j(e)?(t&&s.watch.add(e),y(i,e,a)):Array.isArray(e)?e.map(u=>(t&&s.watch.add(u),y(i,u))):(t&&(s.watchAll=!0),i),Oe=e=>/^\w*$/.test(e),tr=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,i){let t=-1;const a=Oe(s)?[s]:tr(s),u=a.length,c=u-1;for(;++t<u;){const v=a[t];let p=i;if(t!==c){const x=e[v];p=D(x)||Array.isArray(x)?x:isNaN(+a[t+1])?{}:[]}e[v]=p,e=e[v]}return e}var Lr=(e,s,i,t,a)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[t]:a||!0}}:{};const Te=(e,s,i)=>{for(const t of i||Object.keys(e)){const a=y(e,t);if(a){const{_f:u,...c}=a;if(u&&s(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else D(c)&&Te(c,s)}}};var He=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched}),Je=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Cr=(e,s,i)=>{const t=fe(y(e,i));return w(t,"root",s[i]),w(e,i,t),e},te=e=>typeof e=="boolean",Le=e=>e.type==="file",K=e=>typeof e=="function",he=e=>{if(!Ne)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},ye=e=>j(e),Ce=e=>e.type==="radio",ge=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Xe={value:!0,isValid:!0};var sr=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!S(e[0].attributes.value)?S(e[0].value)||e[0].value===""?Xe:{value:e[0].value,isValid:!0}:Xe:Ke}return Ke};const ze={isValid:!1,value:null};var ir=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,ze):ze;function Ge(e,s,i="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||te(e)&&!e)return{type:i,message:ye(e)?e:"",ref:s}}var ee=e=>D(e)&&!ge(e)?e:{value:e,message:""},Qe=async(e,s,i,t,a)=>{const{ref:u,refs:c,required:v,maxLength:p,minLength:x,min:$,max:A,pattern:g,validate:C,name:R,valueAsNumber:ve,mount:de,disabled:xe}=e._f,m=y(s,R);if(!de||xe)return{};const q=c?c[0]:u,W=_=>{t&&q.reportValidity&&(q.setCustomValidity(te(_)?"":_||""),q.reportValidity())},E={},se=Ce(u),ie=ce(u),pe=se||ie,I=(ve||Le(u))&&S(u.value)&&S(m)||he(u)&&u.value===""||m===""||Array.isArray(m)&&!m.length,X=Lr.bind(null,R,i,E),H=(_,b,F,O=J.maxLength,M=J.minLength)=>{const P=_?b:F;E[R]={type:_?O:M,message:P,ref:u,...X(_?O:M,P)}};if(a?!Array.isArray(m)||!m.length:v&&(!pe&&(I||N(m))||te(m)&&!m||ie&&!sr(c).isValid||se&&!ir(c).isValid)){const{value:_,message:b}=ye(v)?{value:!!v,message:v}:ee(v);if(_&&(E[R]={type:J.required,message:b,ref:q,...X(J.required,b)},!i))return W(b),E}if(!I&&(!N($)||!N(A))){let _,b;const F=ee(A),O=ee($);if(!N(m)&&!isNaN(m)){const M=u.valueAsNumber||m&&+m;N(F.value)||(_=M>F.value),N(O.value)||(b=M<O.value)}else{const M=u.valueAsDate||new Date(m),P=ne=>new Date(new Date().toDateString()+" "+ne),z=u.type=="time",ae=u.type=="week";j(F.value)&&m&&(_=z?P(m)>P(F.value):ae?m>F.value:M>new Date(F.value)),j(O.value)&&m&&(b=z?P(m)<P(O.value):ae?m<O.value:M<new Date(O.value))}if((_||b)&&(H(!!_,F.message,O.message,J.max,J.min),!i))return W(E[R].message),E}if((p||x)&&!I&&(j(m)||a&&Array.isArray(m))){const _=ee(p),b=ee(x),F=!N(_.value)&&m.length>+_.value,O=!N(b.value)&&m.length<+b.value;if((F||O)&&(H(F,_.message,b.message),!i))return W(E[R].message),E}if(g&&!I&&j(m)){const{value:_,message:b}=ee(g);if(ge(_)&&!m.match(_)&&(E[R]={type:J.pattern,message:b,ref:u,...X(J.pattern,b)},!i))return W(b),E}if(C){if(K(C)){const _=await C(m,s),b=Ge(_,q);if(b&&(E[R]={...b,...X(J.validate,b.message)},!i))return W(b.message),E}else if(D(C)){let _={};for(const b in C){if(!U(_)&&!i)break;const F=Ge(await C[b](m,s),q,b);F&&(_={...F,...X(b,F.message)},W(F.message),i&&(E[R]=_))}if(!U(_)&&(E[R]={ref:q,..._},!i))return E}}return W(!0),E};function Rr(e,s){const i=s.slice(0,-1).length;let t=0;for(;t<i;)e=S(e)?t++:e[s[t++]];return e}function Mr(e){for(const s in e)if(!S(e[s]))return!1;return!0}function T(e,s){const i=Array.isArray(s)?s:Oe(s)?[s]:tr(s),t=i.length===1?e:Rr(e,i),a=i.length-1,u=i[a];return t&&delete t[u],a!==0&&(D(t)&&U(t)||Array.isArray(t)&&Mr(t))&&T(e,i.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next&&u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}}var me=e=>N(e)||!rr(e);function Y(e,s){if(me(e)||me(s))return e===s;if(re(e)&&re(s))return e.getTime()===s.getTime();const i=Object.keys(e),t=Object.keys(s);if(i.length!==t.length)return!1;for(const a of i){const u=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const c=s[a];if(re(u)&&re(c)||D(u)&&D(c)||Array.isArray(u)&&Array.isArray(c)?!Y(u,c):u!==c)return!1}}return!0}var ar=e=>e.type==="select-multiple",Ur=e=>Ce(e)||ce(e),Se=e=>he(e)&&e.isConnected,nr=e=>{for(const s in e)if(K(e[s]))return!0;return!1};function be(e,s={}){const i=Array.isArray(e);if(D(e)||i)for(const t in e)Array.isArray(e[t])||D(e[t])&&!nr(e[t])?(s[t]=Array.isArray(e[t])?[]:{},be(e[t],s[t])):N(e[t])||(s[t]=!0);return s}function lr(e,s,i){const t=Array.isArray(e);if(D(e)||t)for(const a in e)Array.isArray(e[a])||D(e[a])&&!nr(e[a])?S(s)||me(i[a])?i[a]=Array.isArray(e[a])?be(e[a],[]):{...be(e[a])}:lr(e[a],N(s)?{}:s[a],i[a]):i[a]=!Y(e[a],s[a]);return i}var De=(e,s)=>lr(e,s,be(s)),ur=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:t})=>S(e)?e:s?e===""?NaN:e&&+e:i&&j(e)?new Date(e):t?t(e):e;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Le(s)?s.files:Ce(s)?ir(e.refs).value:ar(s)?[...s.selectedOptions].map(({value:i})=>i):ce(s)?sr(e.refs).value:ur(S(s.value)?e.ref.value:s.value,e)}var qr=(e,s,i,t)=>{const a={};for(const u of e){const c=y(s,u);c&&w(a,u,c._f)}return{criteriaMode:i,names:[...e],fields:a,shouldUseNativeValidation:t}},ue=e=>S(e)?e:ge(e)?e.source:D(e)?ge(e.value)?e.value.source:e.value:e,Br=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,s,i){const t=y(e,i);if(t||Oe(i))return{error:t,name:i};const a=i.split(".");for(;a.length;){const u=a.join("."),c=y(s,u),v=y(e,u);if(c&&!Array.isArray(c)&&i!==u)return{name:i};if(v&&v.type)return{name:u,error:v};a.pop()}return{name:i}}var Ir=(e,s,i,t,a)=>a.isOnAll?!1:!i&&a.isOnTouch?!(s||e):(i?t.isOnBlur:a.isOnBlur)?!e:(i?t.isOnChange:a.isOnChange)?e:!0,Pr=(e,s)=>!fe(y(e,s)).length&&T(e,s);const jr={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function $r(e={},s){let i={...jr,...e},t={submitCount:0,isDirty:!1,isLoading:K(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},u=D(i.defaultValues)||D(i.values)?G(i.defaultValues||i.values)||{}:{},c=i.shouldUnregister?{}:G(u),v={action:!1,mount:!1,watch:!1},p={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x,$=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:ke(),array:ke(),state:ke()},C=e.resetOptions&&e.resetOptions.keepDirtyValues,R=He(i.mode),ve=He(i.reValidateMode),de=i.criteriaMode===B.all,xe=r=>n=>{clearTimeout($),$=setTimeout(r,n)},m=async r=>{if(A.isValid||r){const n=i.resolver?U((await I()).errors):await H(a,!0);n!==t.isValid&&g.state.next({isValid:n})}},q=r=>A.isValidating&&g.state.next({isValidating:r}),W=(r,n=[],l,d,f=!0,o=!0)=>{if(d&&l){if(v.action=!0,o&&Array.isArray(y(a,r))){const h=l(y(a,r),d.argA,d.argB);f&&w(a,r,h)}if(o&&Array.isArray(y(t.errors,r))){const h=l(y(t.errors,r),d.argA,d.argB);f&&w(t.errors,r,h),Pr(t.errors,r)}if(A.touchedFields&&o&&Array.isArray(y(t.touchedFields,r))){const h=l(y(t.touchedFields,r),d.argA,d.argB);f&&w(t.touchedFields,r,h)}A.dirtyFields&&(t.dirtyFields=De(u,c)),g.state.next({name:r,isDirty:b(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else w(c,r,n)},E=(r,n)=>{w(t.errors,r,n),g.state.next({errors:t.errors})},se=(r,n,l,d)=>{const f=y(a,r);if(f){const o=y(c,r,S(l)?y(u,r):l);S(o)||d&&d.defaultChecked||n?w(c,r,n?o:Ee(f._f)):M(r,o),v.mount&&m()}},ie=(r,n,l,d,f)=>{let o=!1,h=!1;const V={name:r};if(!l||d){A.isDirty&&(h=t.isDirty,t.isDirty=V.isDirty=b(),o=h!==V.isDirty);const k=Y(y(u,r),n);h=y(t.dirtyFields,r),k?T(t.dirtyFields,r):w(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,o=o||A.dirtyFields&&h!==!k}if(l){const k=y(t.touchedFields,r);k||(w(t.touchedFields,r,l),V.touchedFields=t.touchedFields,o=o||A.touchedFields&&k!==l)}return o&&f&&g.state.next(V),o?V:{}},pe=(r,n,l,d)=>{const f=y(t.errors,r),o=A.isValid&&te(n)&&t.isValid!==n;if(e.delayError&&l?(x=xe(()=>E(r,l)),x(e.delayError)):(clearTimeout($),x=null,l?w(t.errors,r,l):T(t.errors,r)),(l?!Y(f,l):f)||!U(d)||o){const h={...d,...o&&te(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...h},g.state.next(h)}q(!1)},I=async r=>i.resolver(c,i.context,qr(r||p.mount,a,i.criteriaMode,i.shouldUseNativeValidation)),X=async r=>{const{errors:n}=await I();if(r)for(const l of r){const d=y(n,l);d?w(t.errors,l,d):T(t.errors,l)}else t.errors=n;return n},H=async(r,n,l={valid:!0})=>{for(const d in r){const f=r[d];if(f){const{_f:o,...h}=f;if(o){const V=p.array.has(o.name),k=await Qe(f,c,de,i.shouldUseNativeValidation&&!n,V);if(k[o.name]&&(l.valid=!1,n))break;!n&&(y(k,o.name)?V?Cr(t.errors,k,o.name):w(t.errors,o.name,k[o.name]):T(t.errors,o.name))}h&&await H(h,n,l)}}return l.valid},_=()=>{for(const r of p.unMount){const n=y(a,r);n&&(n._f.refs?n._f.refs.every(l=>!Se(l)):!Se(n._f.ref))&&_e(r)}p.unMount=new Set},b=(r,n)=>(r&&n&&w(c,r,n),!Y(Re(),u)),F=(r,n,l)=>Or(r,p,{...v.mount?c:S(n)?u:j(r)?{[r]:n}:n},l,n),O=r=>fe(y(v.mount?c:u,r,e.shouldUnregister?y(u,r,[]):[])),M=(r,n,l={})=>{const d=y(a,r);let f=n;if(d){const o=d._f;o&&(!o.disabled&&w(c,r,ur(n,o)),f=he(o.ref)&&N(n)?"":n,ar(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?ce(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(V=>V===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||g.values.next({name:r,values:{...c}})))}(l.shouldDirty||l.shouldTouch)&&ie(r,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ne(r)},P=(r,n,l)=>{for(const d in n){const f=n[d],o=`${r}.${d}`,h=y(a,o);(p.array.has(r)||!me(f)||h&&!h._f)&&!re(f)?P(o,f,l):M(o,f,l)}},z=(r,n,l={})=>{const d=y(a,r),f=p.array.has(r),o=G(n);w(c,r,o),f?(g.array.next({name:r,values:{...c}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&g.state.next({name:r,dirtyFields:De(u,c),isDirty:b(r,o)})):d&&!d._f&&!N(o)?P(r,o,l):M(r,o,l),Je(r,p)&&g.state.next({...t}),g.values.next({name:r,values:{...c}}),!v.mount&&s()},ae=async r=>{const n=r.target;let l=n.name,d=!0;const f=y(a,l),o=()=>n.type?Ee(f._f):Fr(r);if(f){let h,V;const k=o(),Z=r.type===We.BLUR||r.type===We.FOCUS_OUT,mr=!Br(f._f)&&!i.resolver&&!y(t.errors,l)&&!f._f.deps||Ir(Z,y(t.touchedFields,l),t.isSubmitted,ve,R),Ve=Je(l,p,Z);w(c,l,k),Z?(f._f.onBlur&&f._f.onBlur(r),x&&x(0)):f._f.onChange&&f._f.onChange(r);const Ae=ie(l,k,Z,!1),br=!U(Ae)||Ve;if(!Z&&g.values.next({name:l,type:r.type,values:{...c}}),mr)return A.isValid&&m(),br&&g.state.next({name:l,...Ve?{}:Ae});if(!Z&&Ve&&g.state.next({...t}),q(!0),i.resolver){const{errors:Ie}=await I([l]),vr=Ye(t.errors,a,l),Pe=Ye(Ie,a,vr.name||l);h=Pe.error,l=Pe.name,V=U(Ie)}else h=(await Qe(f,c,de,i.shouldUseNativeValidation))[l],d=isNaN(k)||k===y(c,l,k),d&&(h?V=!1:A.isValid&&(V=await H(a,!0)));d&&(f._f.deps&&ne(f._f.deps),pe(l,V,h,Ae))}},ne=async(r,n={})=>{let l,d;const f=Fe(r);if(q(!0),i.resolver){const o=await X(S(r)?r:f);l=U(o),d=r?!f.some(h=>y(o,h)):l}else r?(d=(await Promise.all(f.map(async o=>{const h=y(a,o);return await H(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&m()):d=l=await H(a);return g.state.next({...!j(r)||A.isValid&&l!==t.isValid?{}:{name:r},...i.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!d&&Te(a,o=>o&&y(t.errors,o),r?f:p.mount),d},Re=r=>{const n={...u,...v.mount?c:{}};return S(r)?n:j(r)?y(n,r):r.map(l=>y(n,l))},Me=(r,n)=>({invalid:!!y((n||t).errors,r),isDirty:!!y((n||t).dirtyFields,r),isTouched:!!y((n||t).touchedFields,r),error:y((n||t).errors,r)}),or=r=>{r&&Fe(r).forEach(n=>T(t.errors,n)),g.state.next({errors:r?t.errors:{}})},cr=(r,n,l)=>{const d=(y(a,r,{_f:{}})._f||{}).ref;w(t.errors,r,{...n,ref:d}),g.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},fr=(r,n)=>K(r)?g.values.subscribe({next:l=>r(F(void 0,n),l)}):F(r,n,!0),_e=(r,n={})=>{for(const l of r?Fe(r):p.mount)p.mount.delete(l),p.array.delete(l),n.keepValue||(T(a,l),T(c,l)),!n.keepError&&T(t.errors,l),!n.keepDirty&&T(t.dirtyFields,l),!n.keepTouched&&T(t.touchedFields,l),!i.shouldUnregister&&!n.keepDefaultValue&&T(u,l);g.values.next({values:{...c}}),g.state.next({...t,...n.keepDirty?{isDirty:b()}:{}}),!n.keepIsValid&&m()},we=(r,n={})=>{let l=y(a,r);const d=te(n.disabled);return w(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...n}}),p.mount.add(r),l?d&&w(c,r,n.disabled?void 0:y(c,r,Ee(l._f))):se(r,!0,n.value),{...d?{disabled:n.disabled}:{},...i.shouldUseNativeValidation?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:r,onChange:ae,onBlur:ae,ref:f=>{if(f){we(r,n),l=y(a,r);const o=S(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Ur(o),V=l._f.refs||[];if(h?V.find(k=>k===o):o===l._f.ref)return;w(a,r,{_f:{...l._f,...h?{refs:[...V.filter(Se),o,...Array.isArray(y(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),se(r,!1,void 0,o)}else l=y(a,r,{}),l._f&&(l._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(Sr(p.array,r)&&v.action)&&p.unMount.add(r)}}},Ue=()=>i.shouldFocusError&&Te(a,r=>r&&y(t.errors,r),p.mount),dr=(r,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=G(c);if(g.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:o}=await I();t.errors=f,d=o}else await H(a);T(t.errors,"root"),U(t.errors)?(g.state.next({errors:{}}),await r(d,l)):(n&&await n({...t.errors},l),Ue(),setTimeout(Ue)),g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(t.errors),submitCount:t.submitCount+1,errors:t.errors})},yr=(r,n={})=>{y(a,r)&&(S(n.defaultValue)?z(r,y(u,r)):(z(r,n.defaultValue),w(u,r,n.defaultValue)),n.keepTouched||T(t.touchedFields,r),n.keepDirty||(T(t.dirtyFields,r),t.isDirty=n.defaultValue?b(r,y(u,r)):b()),n.keepError||(T(t.errors,r),A.isValid&&m()),g.state.next({...t}))},qe=(r,n={})=>{const l=r||u,d=G(l),f=r&&!U(r)?d:u;if(n.keepDefaultValues||(u=l),!n.keepValues){if(n.keepDirtyValues||C)for(const o of p.mount)y(t.dirtyFields,o)?w(f,o,y(c,o)):z(o,y(f,o));else{if(Ne&&S(r))for(const o of p.mount){const h=y(a,o);if(h&&h._f){const V=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(he(V)){const k=V.closest("form");if(k){k.reset();break}}}}a={}}c=e.shouldUnregister?n.keepDefaultValues?G(u):{}:d,g.array.next({values:{...f}}),g.values.next({values:{...f}})}p={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!v.mount&&s(),v.mount=!A.isValid||!!n.keepIsValid,v.watch=!!e.shouldUnregister,g.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!Y(r,u)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?t.dirtyFields:n.keepDefaultValues&&r?De(u,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Be=(r,n)=>qe(K(r)?r(c):r,n),hr=(r,n={})=>{const l=y(a,r),d=l&&l._f;if(d){const f=d.refs?d.refs[0]:d.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},gr=r=>{t={...t,...r}};return K(i.defaultValues)&&i.defaultValues().then(r=>{Be(r,i.resetOptions),g.state.next({isLoading:!1})}),{control:{register:we,unregister:_e,getFieldState:Me,_executeSchema:I,_getWatch:F,_getDirty:b,_updateValid:m,_removeUnmounted:_,_updateFieldArray:W,_getFieldArray:O,_reset:qe,_updateFormState:gr,_subjects:g,_proxyFormState:A,get _fields(){return a},get _formValues(){return c},get _state(){return v},set _state(r){v=r},get _defaultValues(){return u},get _names(){return p},set _names(r){p=r},get _formState(){return t},set _formState(r){t=r},get _options(){return i},set _options(r){i={...i,...r}}},trigger:ne,register:we,handleSubmit:dr,watch:fr,setValue:z,getValues:Re,reset:Be,resetField:yr,clearErrors:or,unregister:_e,setError:cr,setFocus:hr,getFieldState:Me}}function Wr(e={}){const s=Q.useRef(),[i,t]=Q.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:K(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...$r(e,()=>t(u=>({...u}))),formState:i});const a=s.current.control;return a._options=e,Nr({subject:a._subjects.state,next:u=>{Tr(u,a._proxyFormState,a._updateFormState,!0)&&t({...a._formState})}}),Q.useEffect(()=>{e.values&&!Y(e.values,a._defaultValues)&&a._reset(e.values,a._options.resetOptions)},[e.values,a]),Q.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),s.current.formState=Er(i,a),s.current}const Xr=({contactForm:e,motion:s})=>{const[i,t]=je.useState(!1),[a,u]=je.useState(!1),{register:c,handleSubmit:v,reset:p,formState:{errors:x,isValid:$}}=Wr({mode:"all"}),A=g=>{t(!0),Ar.send("service_ojg62m4","template_xvfxe1l",{from_name:g.name,to_name:"Jahiker Rojas",from_email:g.email,to_email:"rojasjahiker@gmail.com",message:g.messageText},"dhcXlXi0W3e5ldG3S").then(C=>{console.log(C.text),p({name:"",email:"",messageText:""}),u(!0),t(!1)},C=>{console.log(C.text)})};return L(s.div,{initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0},transition:{ease:"linear",duration:1},className:"block z-10 w-full max-w-[100%]",children:le("form",{className:"max-w-[600px] mx-auto",onSubmit:v(A),children:[le("label",{className:"mb-5 block",children:[L("span",{className:"text-white",children:e.name.label}),L("input",{type:"text",...c("name",{required:{value:!0,message:`${e.name.errors.required}`}}),className:`w-full bg-gray focus:bg-gray focus:text-white  focus:outline-none border-solid border-2 h-[45px] p-3 text-white ${x.name?"border-error focus:border-error focus:bg-gray bg-gray":"border-primary focus:border-primary focus:bg-gray bg-gray"}`}),(x==null?void 0:x.name)&&L("span",{className:"block text-error",children:x.name.message})]}),le("label",{className:"mb-5 block",children:[L("span",{className:"text-white",children:e.email.label}),L("input",{type:"email",...c("email",{required:{value:!0,message:`${e.email.errors.required}`},pattern:{value:/[^\s@]+@[^\s@]+\.[^\s@]+/,message:`${e.email.errors.pattern}`}}),className:`w-full focus:bg-gray focus:text-white  focus:outline-none bg-gray border-solid border-2 h-[45px] p-3 text-white ${x!=null&&x.email?"border-error focus:border-error":"border-primary focus:border-primary"}`}),(x==null?void 0:x.email)&&L("span",{className:"block text-error",children:x.email.message})]}),le("label",{className:"mb-5 block",children:[L("span",{className:"text-white",children:e.messageText.label}),L("textarea",{cols:"20",rows:"10",...c("messageText",{required:{value:!0,message:`${e.messageText.errors.required}`}}),className:`w-full focus:bg-gray focus:text-white focus:outline-none bg-gray border-solid border-2  p-3 text-white ${x!=null&&x.messageText?"border-error focus:border-error":"border-primary focus:border-primary"}`}),(x==null?void 0:x.messageText)&&L("span",{className:"block text-red-500",children:x.messageText.message})]}),L("label",{className:"mb-5 block",children:L("input",{type:"submit",disabled:!$,className:`w-full border-solid border-2 h-[50px] hover:opacity-90 ${$?"bg-primary border-primary text-gray cursor-pointer":"bg-gray border-gray text-light cursor-not-allowed"}`,value:i?`${e.submit.sending}`:`${e.submit.label}`})}),a&&L(s.div,{initial:{minWidth:"50px",maxWidth:"50px",height:"50px",borderRadius:"25px"},whileInView:{minWidth:"100%",maxWidth:"100%",height:"50px",borderRadius:"0"},transition:{ease:"linear",duration:.6,delay:.3},viewport:{once:!0},className:"w-full mx-auto flex justify-center items-center h-[50px] bg-primary text-gray p-3",children:le(s.p,{initial:{opacity:0},whileInView:{opacity:1},transition:{ease:"linear",duration:.6,delay:.9},viewport:{once:!0},className:"flex justify-center items-center gap-3",children:[e.success.message," ",L(xr,{size:"20px"})]})})]})})};export{Xr as default};
