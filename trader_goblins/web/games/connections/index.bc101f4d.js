let e,t;function n(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var r,o,i,a,l,s,u,c,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function f(e){return e&&e.__esModule?e.default:e}var p={},h={},m=d.parcelRequire94c2;null==m&&((m=function(e){if(e in p)return p[e].exports;if(e in h){var t=h[e];delete h[e];var n={id:e,exports:{}};return p[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){h[e]=t},d.parcelRequire94c2=m),m.register("0qhf8",function(e,t){n(e.exports,"Fragment",function(){return r},function(e){return r=e}),n(e.exports,"jsx",function(){return o},function(e){return o=e}),n(e.exports,"jsxs",function(){return i},function(e){return i=e});var r,o,i,a=m("bh6RR"),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,n){var r,o={},i=null,a=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:c.current}}r=s,o=f,i=f}),m.register("bh6RR",function(e,t){e.exports=m("cCfq4")}),m.register("cCfq4",function(e,t){n(e.exports,"Children",function(){return r},function(e){return r=e}),n(e.exports,"Component",function(){return o},function(e){return o=e}),n(e.exports,"Fragment",function(){return i},function(e){return i=e}),n(e.exports,"Profiler",function(){return a},function(e){return a=e}),n(e.exports,"PureComponent",function(){return l},function(e){return l=e}),n(e.exports,"StrictMode",function(){return s},function(e){return s=e}),n(e.exports,"Suspense",function(){return u},function(e){return u=e}),n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return c},function(e){return c=e}),n(e.exports,"cloneElement",function(){return d},function(e){return d=e}),n(e.exports,"createContext",function(){return f},function(e){return f=e}),n(e.exports,"createElement",function(){return p},function(e){return p=e}),n(e.exports,"createFactory",function(){return h},function(e){return h=e}),n(e.exports,"createRef",function(){return m},function(e){return m=e}),n(e.exports,"forwardRef",function(){return g},function(e){return g=e}),n(e.exports,"isValidElement",function(){return v},function(e){return v=e}),n(e.exports,"lazy",function(){return y},function(e){return y=e}),n(e.exports,"memo",function(){return b},function(e){return b=e}),n(e.exports,"startTransition",function(){return w},function(e){return w=e}),n(e.exports,"unstable_act",function(){return x},function(e){return x=e}),n(e.exports,"useCallback",function(){return k},function(e){return k=e}),n(e.exports,"useContext",function(){return S},function(e){return S=e}),n(e.exports,"useDebugValue",function(){return E},function(e){return E=e}),n(e.exports,"useDeferredValue",function(){return C},function(e){return C=e}),n(e.exports,"useEffect",function(){return _},function(e){return _=e}),n(e.exports,"useId",function(){return R},function(e){return R=e}),n(e.exports,"useImperativeHandle",function(){return P},function(e){return P=e}),n(e.exports,"useInsertionEffect",function(){return T},function(e){return T=e}),n(e.exports,"useLayoutEffect",function(){return N},function(e){return N=e}),n(e.exports,"useMemo",function(){return O},function(e){return O=e}),n(e.exports,"useReducer",function(){return j},function(e){return j=e}),n(e.exports,"useRef",function(){return A},function(e){return A=e}),n(e.exports,"useState",function(){return D},function(e){return D=e}),n(e.exports,"useSyncExternalStore",function(){return z},function(e){return z=e}),n(e.exports,"useTransition",function(){return I},function(e){return I=e}),n(e.exports,"version",function(){return M},function(e){return M=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,C,_,R,P,T,N,O,j,A,D,z,I,M,F=Symbol.for("react.element"),L=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),K=Symbol.iterator,Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Z={};function J(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||Y}function ee(){}function et(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||Y}J.prototype.isReactComponent={},J.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},J.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=J.prototype;var en=et.prototype=new ee;en.constructor=et,X(en,J.prototype),en.isPureReactComponent=!0;var er=Array.isArray,eo=Object.prototype.hasOwnProperty,ei={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)eo.call(t,r)&&!ea.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:F,type:e,key:i,ref:a,props:o,_owner:ei.current}}function es(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var eu=/\/+/g;function ec(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],o=0;return function e(t,n,r,o,i){var a,l,s,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case F:case L:c=!0}}if(c)return i=i(c=t),t=""===o?"."+ec(c,0):o,er(i)?(r="",null!=t&&(r=t.replace(eu,"$&/")+"/"),e(i,n,r,"",function(e){return e})):null!=i&&(es(i)&&(a=i,l=r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(eu,"$&/")+"/")+t,i={$$typeof:F,type:a.type,key:l,ref:a.ref,props:a.props,_owner:a._owner}),n.push(i)),1;if(c=0,o=""===o?".":o+":",er(t))for(var d=0;d<t.length;d++){var f=o+ec(u=t[d],d);c+=e(u,n,r,f,i)}else if("function"==typeof(f=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=K&&s[K]||s["@@iterator"])?s:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=o+ec(u=u.value,d++),c+=e(u,n,r,f,i);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,o++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},o=J,i=$,a=V,l=et,s=U,u=G,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:ei},d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=X({},e.props),o=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=ei.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)eo.call(t,s)&&!ea.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:F,type:e.type,key:o,ref:i,props:r,_owner:a}},f=function(e){return(e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:W,_context:e},e.Consumer=e},p=el,h=function(e){var t=el.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:H,render:e}},v=es,y=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:q,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},k=function(e,t){return ep.current.useCallback(e,t)},S=function(e){return ep.current.useContext(e)},E=function(){},C=function(e){return ep.current.useDeferredValue(e)},_=function(e,t){return ep.current.useEffect(e,t)},R=function(){return ep.current.useId()},P=function(e,t,n){return ep.current.useImperativeHandle(e,t,n)},T=function(e,t){return ep.current.useInsertionEffect(e,t)},N=function(e,t){return ep.current.useLayoutEffect(e,t)},O=function(e,t){return ep.current.useMemo(e,t)},j=function(e,t,n){return ep.current.useReducer(e,t,n)},A=function(e){return ep.current.useRef(e)},D=function(e){return ep.current.useState(e)},z=function(e,t,n){return ep.current.useSyncExternalStore(e,t,n)},I=function(){return ep.current.useTransition()},M="18.2.0"}),m.register("foRq4",function(e,t){n(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",function(){return W},function(e){return W=e}),n(e.exports,"createPortal",function(){return B},function(e){return B=e}),n(e.exports,"createRoot",function(){return H},function(e){return H=e}),n(e.exports,"findDOMNode",function(){return G},function(e){return G=e}),n(e.exports,"flushSync",function(){return q},function(e){return q=e}),n(e.exports,"hydrate",function(){return Q},function(e){return Q=e}),n(e.exports,"hydrateRoot",function(){return K},function(e){return K=e}),n(e.exports,"render",function(){return Y},function(e){return Y=e}),n(e.exports,"unmountComponentAtNode",function(){return X},function(e){return X=e}),n(e.exports,"unstable_batchedUpdates",function(){return Z},function(e){return Z=e}),n(e.exports,"unstable_renderSubtreeIntoContainer",function(){return J},function(e){return J=e}),n(e.exports,"version",function(){return ee},function(e){return ee=e});var r,o,i,a,l,s,u=m("bh6RR"),c=m("4LCdk");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var v=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},x={};function k(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}function _(e,t,n,r){var o,i=S.hasOwnProperty(t)?S[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?(o=t,(!!y.call(x,o)||!y.call(w,o)&&(b.test(o)?x[o]=!0:(w[o]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,C);S[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,C);S[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,C);S[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});var R=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),L=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var $=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var U=Symbol.iterator;function V(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=U&&e[U]||e["@@iterator"])?e:null}var W,B,H,G,q,Q,K,Y,X,Z,J,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var eo=!1;function ei(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var o=t.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l)break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function el(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function es(e){e._valueTracker||(e._valueTracker=function(e){var t=el(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=el(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ef(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ea(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&_(e,"checked",t,!1)}function eh(e,t){ep(e,t);var n=ea(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ev=Array.isArray;function ey(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(o=0,n=""+ea(n),t=null;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(d(92));if(ev(n)){if(1<n.length)throw Error(d(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ea(n)}}function ex(e,t){var n=ea(t.value),r=ea(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ek(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eE(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eS(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eC,e_,eR=(eC=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((e_=e_||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=e_.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eC(e,t,n,r)})}:eC);function eP(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eT={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eN=["Webkit","ms","Moz","O"];function eO(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eT.hasOwnProperty(e)&&eT[e]?(""+t).trim():t+"px"}function ej(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=eO(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(eT).forEach(function(e){eN.forEach(function(t){eT[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eT[e]})});var eA=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eD(e,t){if(t){if(eA[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function ez(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eI=null;function eM(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eF=null,eL=null,e$=null;function eU(e){if(e=rK(e)){if("function"!=typeof eF)throw Error(d(280));var t=e.stateNode;t&&(t=rX(t),eF(e.stateNode,e.type,t))}}function eV(e){eL?e$?e$.push(e):e$=[e]:eL=e}function eW(){if(eL){var e=eL,t=e$;if(e$=eL=null,eU(e),t)for(e=0;e<t.length;e++)eU(t[e])}}function eB(e,t){return e(t)}function eH(){}var eG=!1;function eq(e,t,n){if(eG)return e(t,n);eG=!0;try{return eB(e,t,n)}finally{eG=!1,(null!==eL||null!==e$)&&(eH(),eW())}}function eQ(e,t){var n=e.stateNode;if(null===n)return null;var r=rX(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(d(231,t,typeof n));return n}var eK=!1;if(v)try{var eY={};Object.defineProperty(eY,"passive",{get:function(){eK=!0}}),window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eK=!1}function eX(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eZ=!1,eJ=null,e0=!1,e1=null,e2={onError:function(e){eZ=!0,eJ=e}};function e3(e,t,n,r,o,i,a,l,s){eZ=!1,eJ=null,eX.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e5(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e6(e){if(e4(e)!==e)throw Error(d(188))}function e9(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(d(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return e6(o),e;if(i===r)return e6(o),t;i=i.sibling}throw Error(d(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(d(189))}}if(n.alternate!==r)throw Error(d(190))}if(3!==n.tag)throw Error(d(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e8=c.unstable_scheduleCallback,e7=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,to=c.unstable_ImmediatePriority,ti=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,tl=c.unstable_LowPriority,ts=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tv(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=tg(l):0!=(i&=a)&&(r=tg(i))}else 0!=(a=n&~o)?r=tg(a):0!==i&&(r=tg(i));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!=(4194240&i)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-td(t)),r|=e[n],t&=~o;return r}function ty(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tx(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=n}function tk(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-td(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var tS=0;function tE(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tC,t_,tR,tP,tT,tN=!1,tO=[],tj=null,tA=null,tD=null,tz=new Map,tI=new Map,tM=[],tF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tL(e,t){switch(e){case"focusin":case"focusout":tj=null;break;case"dragenter":case"dragleave":tA=null;break;case"mouseover":case"mouseout":tD=null;break;case"pointerover":case"pointerout":tz.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tI.delete(t.pointerId)}}function t$(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&null!==(t=rK(t))&&t_(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o)),e}function tU(e){var t=rQ(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e5(n))){e.blockedOn=t,tT(e.priority,function(){tR(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tV(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tJ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rK(n))&&t_(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eI=r,n.target.dispatchEvent(r),eI=null,t.shift()}return!0}function tW(e,t,n){tV(e)&&n.delete(t)}function tB(){tN=!1,null!==tj&&tV(tj)&&(tj=null),null!==tA&&tV(tA)&&(tA=null),null!==tD&&tV(tD)&&(tD=null),tz.forEach(tW),tI.forEach(tW)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tN||(tN=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tB)))}function tG(e){function t(t){return tH(t,e)}if(0<tO.length){tH(tO[0],e);for(var n=1;n<tO.length;n++){var r=tO[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tj&&tH(tj,e),null!==tA&&tH(tA,e),null!==tD&&tH(tD,e),tz.forEach(t),tI.forEach(t),n=0;n<tM.length;n++)(r=tM[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tM.length&&null===(n=tM[0]).blockedOn;)tU(n),null===n.blockedOn&&tM.shift()}var tq=R.ReactCurrentBatchConfig,tQ=!0;function tK(e,t,n,r){var o=tS,i=tq.transition;tq.transition=null;try{tS=1,tX(e,t,n,r)}finally{tS=o,tq.transition=i}}function tY(e,t,n,r){var o=tS,i=tq.transition;tq.transition=null;try{tS=4,tX(e,t,n,r)}finally{tS=o,tq.transition=i}}function tX(e,t,n,r){if(tQ){var o=tJ(e,t,n,r);if(null===o)rw(e,t,r,tZ,n),tL(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return tj=t$(tj,e,t,n,r,o),!0;case"dragenter":return tA=t$(tA,e,t,n,r,o),!0;case"mouseover":return tD=t$(tD,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return tz.set(i,t$(tz.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,tI.set(i,t$(tI.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(tL(e,r),4&t&&-1<tF.indexOf(e)){for(;null!==o;){var i=rK(o);if(null!==i&&tC(i),null===(i=tJ(e,t,n,r))&&rw(e,t,r,tZ,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tZ=null;function tJ(e,t,n,r){if(tZ=null,null!==(e=rQ(e=eM(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e5(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tZ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case to:return 1;case ti:return 4;case ta:case tl:return 16;case ts:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,o="value"in t1?t1.value:t1.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return t3=o.slice(e,1<t?1-t:void 0)}function t5(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t6(){return!0}function t9(){return!1}function t8(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?t6:t9,this.isPropagationStopped=t9,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t6)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t6)},persist:function(){},isPersistent:t6}),t}var t7,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t8(nn),no=en({},nn,{view:0,detail:0}),ni=t8(no),na=en({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nv,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t7=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t7=0,nt=e),t7)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),nl=t8(na),ns=t8(en({},na,{dataTransfer:0})),nu=t8(en({},no,{relatedTarget:0})),nc=t8(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),nd=t8(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nf=t8(en({},nn,{data:0})),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function nv(){return ng}var ny=t8(en({},no,{key:function(e){if(e.key){var t=np[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t5(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nv,charCode:function(e){return"keypress"===e.type?t5(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t5(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nb=t8(en({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t8(en({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nv})),nx=t8(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nk=t8(en({},na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nS=[9,13,27,32],nE=v&&"CompositionEvent"in window,nC=null;v&&"documentMode"in document&&(nC=document.documentMode);var n_=v&&"TextEvent"in window&&!nC,nR=v&&(!nE||nC&&8<nC&&11>=nC),nP=!1;function nT(e,t){switch(e){case"keyup":return -1!==nS.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nN(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nO=!1,nj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nA(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nj[e.type]:"textarea"===t}function nD(e,t,n,r){eV(r),0<(t=rk(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nz=null,nI=null;function nM(e){rh(e,0)}function nF(e){if(eu(rY(e)))return e}function nL(e,t){if("change"===e)return t}var n$=!1;if(v){if(v){var nU="oninput"in document;if(!nU){var nV=document.createElement("div");nV.setAttribute("oninput","return;"),nU="function"==typeof nV.oninput}r=nU}else r=!1;n$=r&&(!document.documentMode||9<document.documentMode)}function nW(){nz&&(nz.detachEvent("onpropertychange",nB),nI=nz=null)}function nB(e){if("value"===e.propertyName&&nF(nI)){var t=[];nD(t,nI,e,eM(e)),eq(nM,t)}}function nH(e,t,n){"focusin"===e?(nW(),nz=t,nI=n,nz.attachEvent("onpropertychange",nB)):"focusout"===e&&nW()}function nG(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nF(nI)}function nq(e,t){if("click"===e)return nF(t)}function nQ(e,t){if("input"===e||"change"===e)return nF(t)}var nK="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nY(e,t){if(nK(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!y.call(t,o)||!nK(e[o],t[o]))return!1}return!0}function nX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nZ(e,t){var n,r=nX(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nX(r)}}function nJ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=v&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n5=!1;function n6(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n5||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nY(n4,r)||(n4=r,0<(r=rk(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n9(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n8={animationend:n9("Animation","AnimationEnd"),animationiteration:n9("Animation","AnimationIteration"),animationstart:n9("Animation","AnimationStart"),transitionend:n9("Transition","TransitionEnd")},n7={},re={};function rt(e){if(n7[e])return n7[e];if(!n8[e])return e;var t,n=n8[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n7[e]=n[t];return e}v&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n8.animationend.animation,delete n8.animationiteration.animation,delete n8.animationstart.animation),"TransitionEvent"in window||delete n8.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ro=rt("animationstart"),ri=rt("transitionend"),ra=new Map,rl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(e,t){ra.set(e,t),h(t,[e])}for(var ru=0;ru<rl.length;ru++){var rc=rl[ru];rs(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rs(rn,"onAnimationEnd"),rs(rr,"onAnimationIteration"),rs(ro,"onAnimationStart"),rs("dblclick","onDoubleClick"),rs("focusin","onFocus"),rs("focusout","onBlur"),rs(ri,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rf=new Set("cancel close invalid load scroll toggle".split(" ").concat(rd));function rp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,i,a,l,s){if(e3.apply(this,arguments),eZ){if(eZ){var u=eJ;eZ=!1,eJ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;rp(o,l,u),i=s}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(rb(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rb(n,e,r,t)}var rv="_reactListening"+Math.random().toString(36).slice(2);function ry(e){if(!e[rv]){e[rv]=!0,f.forEach(function(t){"selectionchange"!==t&&(rf.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[rv]||(t[rv]=!0,rg("selectionchange",!1,t))}}function rb(e,t,n,r){switch(t0(t)){case 1:var o=tK;break;case 4:o=tY;break;default:o=tX}n=o.bind(null,t,n,e),o=void 0,eK&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,o){var i=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=rQ(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}eq(function(){var r=i,o=eM(n),a=[];e:{var l=ra.get(e);if(void 0!==l){var s=nr,u=e;switch(e){case"keypress":if(0===t5(n))break e;case"keydown":case"keyup":s=ny;break;case"focusin":u="focus",s=nu;break;case"focusout":u="blur",s=nu;break;case"beforeblur":case"afterblur":s=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=ns;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=nw;break;case rn:case rr:case ro:s=nc;break;case ri:s=nx;break;case"scroll":s=ni;break;case"wheel":s=nk;break;case"copy":case"cut":case"paste":s=nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=nb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eQ(h,f))&&c.push(rx(h,m,p))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,o),a.push({event:l,listeners:c}))}}if(0==(7&t)){if(l="mouseover"===e||"pointerover"===e,s="mouseout"===e||"pointerout"===e,!(l&&n!==eI&&(u=n.relatedTarget||n.fromElement)&&(rQ(u)||u[rB]))&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(u=n.relatedTarget||n.toElement,s=r,null!==(u=u?rQ(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=nl,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:rY(s),p=null==u?l:rY(u),(l=new c(m,h+"leave",s,n,o)).target=d,l.relatedTarget=p,m=null,rQ(o)===r&&((c=new c(f,h+"enter",u,n,o)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)t:{for(c=s,f=u,h=0,p=c;p;p=rS(p))h++;for(p=0,m=f;m;m=rS(m))p++;for(;0<h-p;)c=rS(c),h--;for(;0<p-h;)f=rS(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=rS(c),f=rS(f)}c=null}else c=null;null!==s&&rE(a,l,s,c,!1),null!==u&&null!==d&&rE(a,d,u,c,!0)}e:{if("select"===(s=(l=r?rY(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g,v=nL;else if(nA(l)){if(n$)v=nQ;else{v=nG;var y=nH}}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(v=nq);if(v&&(v=v(e,r))){nD(a,v,n,o);break e}y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&eg(l,"number",l.value)}switch(y=r?rY(r):window,e){case"focusin":(nA(y)||"true"===y.contentEditable)&&(n2=y,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n5=!0;break;case"contextmenu":case"mouseup":case"dragend":n5=!1,n6(a,n,o);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n6(a,n,o)}if(nE)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else nO?nT(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(nR&&"ko"!==n.locale&&(nO||"onCompositionStart"!==b?"onCompositionEnd"===b&&nO&&(g=t4()):(t2="value"in(t1=o)?t1.value:t1.textContent,nO=!0)),0<(y=rk(r,b)).length&&(b=new nf(b,e,null,n,o),a.push({event:b,listeners:y}),g?b.data=g:null!==(g=nN(n))&&(b.data=g))),(g=n_?function(e,t){switch(e){case"compositionend":return nN(t);case"keypress":if(32!==t.which)return null;return nP=!0," ";case"textInput":return" "===(e=t.data)&&nP?null:e;default:return null}}(e,n):function(e,t){if(nO)return"compositionend"===e||!nE&&nT(e,t)?(e=t4(),t3=t2=t1=null,nO=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nR&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rk(r,"onBeforeInput")).length&&(o=new nf("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=g)}rh(a,t)})}function rx(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rk(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=eQ(e,n))&&r.unshift(rx(e,i,o)),null!=(i=eQ(e,t))&&r.push(rx(e,i,o))),e=e.return}return r}function rS(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rE(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,o?null!=(s=eQ(n,i))&&a.unshift(rx(n,s,l)):o||null!=(s=eQ(n,i))&&a.push(rx(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var rC=/\r\n?/g,r_=/\u0000|\uFFFD/g;function rR(e){return("string"==typeof e?e:""+e).replace(rC,"\n").replace(r_,"")}function rP(e,t,n){if(t=rR(t),rR(e)!==t&&n)throw Error(d(425))}function rT(){}var rN=null,rO=null;function rj(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rA="function"==typeof setTimeout?setTimeout:void 0,rD="function"==typeof clearTimeout?clearTimeout:void 0,rz="function"==typeof Promise?Promise:void 0,rI="function"==typeof queueMicrotask?queueMicrotask:void 0!==rz?function(e){return rz.resolve(null).then(e).catch(rM)}:rA;function rM(e){setTimeout(function(){throw e})}function rF(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType){if("/$"===(n=o.data)){if(0===r){e.removeChild(o),tG(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=o}while(n)tG(t)}function rL(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function r$(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rU=Math.random().toString(36).slice(2),rV="__reactFiber$"+rU,rW="__reactProps$"+rU,rB="__reactContainer$"+rU,rH="__reactEvents$"+rU,rG="__reactListeners$"+rU,rq="__reactHandles$"+rU;function rQ(e){var t=e[rV];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rB]||n[rV]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=r$(e);null!==e;){if(n=e[rV])return n;e=r$(e)}return t}n=(e=n).parentNode}return null}function rK(e){return(e=e[rV]||e[rB])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rY(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function rX(e){return e[rW]||null}var rZ=[],rJ=-1;function r0(e){return{current:e}}function r1(e){0>rJ||(e.current=rZ[rJ],rZ[rJ]=null,rJ--)}function r2(e,t){rZ[++rJ]=e.current,e.current=t}var r3={},r4=r0(r3),r5=r0(!1),r6=r3;function r9(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function r8(e){return null!=(e=e.childContextTypes)}function r7(){r1(r5),r1(r4)}function oe(e,t,n){if(r4.current!==r3)throw Error(d(168));r2(r4,t),r2(r5,n)}function ot(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case N:return"Fragment";case T:return"Portal";case j:return"Profiler";case O:return"StrictMode";case I:return"Suspense";case M:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case D:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case z:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case F:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case L:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",o));return en({},n,r)}function on(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r6=r4.current,r2(r4,e),r2(r5,r5.current),!0}function or(e,t,n){var r=e.stateNode;if(!r)throw Error(d(169));n?(e=ot(e,t,r6),r.__reactInternalMemoizedMergedChildContext=e,r1(r5),r1(r4),r2(r4,e)):r1(r5),r2(r5,n)}var oo=null,oi=!1,oa=!1;function ol(e){null===oo?oo=[e]:oo.push(e)}function os(){if(!oa&&null!==oo){oa=!0;var e=0,t=tS;try{var n=oo;for(tS=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}oo=null,oi=!1}catch(t){throw null!==oo&&(oo=oo.slice(e+1)),e8(to,os),t}finally{tS=t,oa=!1}}return null}var ou=[],oc=0,od=null,of=0,op=[],oh=0,om=null,og=1,ov="";function oy(e,t){ou[oc++]=of,ou[oc++]=od,od=e,of=t}function ob(e,t,n){op[oh++]=og,op[oh++]=ov,op[oh++]=om,om=e;var r=og;e=ov;var o=32-td(r)-1;r&=~(1<<o),n+=1;var i=32-td(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,og=1<<32-td(t)+o|n<<o|r,ov=i+e}else og=1<<i|n<<o|r,ov=e}function ow(e){null!==e.return&&(oy(e,1),ob(e,1,0))}function ox(e){for(;e===od;)od=ou[--oc],ou[oc]=null,of=ou[--oc],ou[oc]=null;for(;e===om;)om=op[--oh],op[oh]=null,ov=op[--oh],op[oh]=null,og=op[--oh],op[oh]=null}var ok=null,oS=null,oE=!1,oC=null;function o_(e,t){var n=l8(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oR(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ok=e,oS=rL(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ok=e,oS=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==om?{id:og,overflow:ov}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=l8(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ok=e,oS=null,!0);default:return!1}}function oP(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function oT(e){if(oE){var t=oS;if(t){var n=t;if(!oR(e,t)){if(oP(e))throw Error(d(418));t=rL(n.nextSibling);var r=ok;t&&oR(e,t)?o_(r,n):(e.flags=-4097&e.flags|2,oE=!1,ok=e)}}else{if(oP(e))throw Error(d(418));e.flags=-4097&e.flags|2,oE=!1,ok=e}}}function oN(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ok=e}function oO(e){if(e!==ok)return!1;if(!oE)return oN(e),oE=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rj(e.type,e.memoizedProps)),t&&(t=oS)){if(oP(e))throw oj(),Error(d(418));for(;t;)o_(e,t),t=rL(t.nextSibling)}if(oN(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){oS=rL(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oS=null}}else oS=ok?rL(e.stateNode.nextSibling):null;return!0}function oj(){for(var e=oS;e;)e=rL(e.nextSibling)}function oA(){oS=ok=null,oE=!1}function oD(e){null===oC?oC=[e]:oC.push(e)}var oz=R.ReactCurrentBatchConfig;function oI(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var oM=r0(null),oF=null,oL=null,o$=null;function oU(){o$=oL=oF=null}function oV(e){var t=oM.current;r1(oM),e._currentValue=t}function oW(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function oB(e,t){oF=e,o$=oL=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ax=!0),e.firstContext=null)}function oH(e){var t=e._currentValue;if(o$!==e){if(e={context:e,memoizedValue:t,next:null},null===oL){if(null===oF)throw Error(d(308));oL=e,oF.dependencies={lanes:0,firstContext:e}}else oL=oL.next=e}return t}var oG=null;function oq(e){null===oG?oG=[e]:oG.push(e)}function oQ(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,oq(t)):(n.next=o.next,o.next=n),t.interleaved=n,oK(e,r)}function oK(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var oY=!1;function oX(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oZ(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function oJ(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function o0(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&ls)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,oK(e,n)}return null===(o=r.interleaved)?(t.next=t,oq(r)):(t.next=o.next,o.next=t),r.interleaved=t,oK(e,n)}function o1(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}function o2(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n)null===i?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function o3(e,t,n,r){var o=e.updateQueue;oY=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?i=u:a.next=u,a=s;var c=e.alternate;null!==c&&(l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s)}if(null!==i){var d=o.baseState;for(a=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=en({},d,f);break e;case 2:oY=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===c&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null!==(t=o.shared.interleaved)){o=t;do a|=o.lane,o=o.next;while(o!==t)}else null===i&&(o.shared.lanes=0);lg|=a,e.lanes=a,e.memoizedState=d}}function o4(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!=typeof o)throw Error(d(191,o));o.call(r)}}}var o5=(new u.Component).refs;function o6(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var o9={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lD(),o=lz(e),i=oJ(r,o);i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lI(t,e,o,r),o1(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lD(),o=lz(e),i=oJ(r,o);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=o0(e,i,o))&&(lI(t,e,o,r),o1(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lD(),r=lz(e),o=oJ(n,r);o.tag=2,null!=t&&(o.callback=t),null!==(t=o0(e,o,r))&&(lI(t,e,r,n),o1(t,e,r))}};function o8(e,t,n,r,o,i,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||!nY(n,r)||!nY(o,i)}function o7(e,t,n){var r=!1,o=r3,i=t.contextType;return"object"==typeof i&&null!==i?i=oH(i):(o=r8(t)?r6:r4.current,i=(r=null!=(r=t.contextTypes))?r9(e,o):r3),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=o9,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ie(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&o9.enqueueReplaceState(t,t.state,null)}function it(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=o5,oX(e);var i=t.contextType;"object"==typeof i&&null!==i?o.context=oH(i):(i=r8(t)?r6:r4.current,o.context=r9(e,i)),o.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(o6(e,t,i,n),o.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(t=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&o9.enqueueReplaceState(o,o.state,null),o3(e,n,o,r),o.state=e.memoizedState),"function"==typeof o.componentDidMount&&(e.flags|=4194308)}function ir(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(d(309));var r=n.stateNode}if(!r)throw Error(d(147,e));var o=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=o.refs;t===o5&&(t=o.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(d(284));if(!n._owner)throw Error(d(290,e))}return e}function io(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ii(e){return(0,e._init)(e._payload)}function ia(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=se(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?(t=so(n,e.mode,r)).return=e:(t=o(t,n)).return=e,t}function s(e,t,n,r){var i=n.type;return i===N?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===L&&ii(i)===t.type)?(r=o(t,n.props)).ref=ir(e,t,n):(r=st(n.type,n.key,n.props,null,e.mode,r)).ref=ir(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=si(n,e.mode,r)).return=e:(t=o(t,n.children||[])).return=e,t}function c(e,t,n,r,i){return null===t||7!==t.tag?(t=sn(n,e.mode,r,i)).return=e:(t=o(t,n)).return=e,t}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=so(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case P:return(n=st(t.type,t.key,t.props,null,e.mode,n)).ref=ir(e,null,t),n.return=e,n;case T:return(t=si(t,e.mode,n)).return=e,t;case L:return f(e,(0,t._init)(t._payload),n)}if(ev(t)||V(t))return(t=sn(t,e.mode,n,null)).return=e,t;io(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==o?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case P:return n.key===o?s(e,t,n,r):null;case T:return n.key===o?u(e,t,n,r):null;case L:return p(e,t,(o=n._init)(n._payload),r)}if(ev(n)||V(n))return null!==o?null:c(e,t,n,r,null);io(e,n)}return null}function h(e,t,n,r,o){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"==typeof r&&null!==r){switch(r.$$typeof){case P:return s(t,e=e.get(null===r.key?n:r.key)||null,r,o);case T:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case L:return h(e,t,n,(0,r._init)(r._payload),o)}if(ev(r)||V(r))return c(t,e=e.get(n)||null,r,o,null);io(t,r)}return null}return function l(s,u,c,m){if("object"==typeof c&&null!==c&&c.type===N&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case P:e:{for(var g=c.key,v=u;null!==v;){if(v.key===g){if((g=c.type)===N){if(7===v.tag){n(s,v.sibling),(u=o(v,c.props.children)).return=s,s=u;break e}}else if(v.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===L&&ii(g)===v.type){n(s,v.sibling),(u=o(v,c.props)).ref=ir(s,v,c),u.return=s,s=u;break e}n(s,v);break}t(s,v),v=v.sibling}c.type===N?((u=sn(c.props.children,s.mode,m,c.key)).return=s,s=u):((m=st(c.type,c.key,c.props,null,s.mode,m)).ref=ir(s,u,c),m.return=s,s=m)}return a(s);case T:e:{for(v=c.key;null!==u;){if(u.key===v){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(s,u.sibling),(u=o(u,c.children||[])).return=s,s=u;break e}n(s,u);break}t(s,u),u=u.sibling}(u=si(c,s.mode,m)).return=s,s=u}return a(s);case L:return l(s,u,(v=c._init)(c._payload),m)}if(ev(c))return function(o,a,l,s){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(o,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(o,d),a=i(v,a,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(o,d),oE&&oy(o,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(o,l[m],s))&&(a=i(d,a,m),null===c?u=d:c.sibling=d,c=d);return oE&&oy(o,m),u}for(d=r(o,d);m<l.length;m++)null!==(g=h(d,o,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=i(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),oE&&oy(o,m),u}(s,u,c,m);if(V(c))return function(o,a,l,s){var u=V(l);if("function"!=typeof u)throw Error(d(150));if(null==(l=u.call(l)))throw Error(d(151));for(var c=u=null,m=a,g=a=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(o,m,y.value,s);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(o,m),a=i(b,a,g),null===c?u=b:c.sibling=b,c=b,m=v}if(y.done)return n(o,m),oE&&oy(o,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(o,y.value,s))&&(a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return oE&&oy(o,g),u}for(m=r(o,m);!y.done;g++,y=l.next())null!==(y=h(m,o,g,y.value,s))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),a=i(y,a,g),null===c?u=y:c.sibling=y,c=y);return e&&m.forEach(function(e){return t(o,e)}),oE&&oy(o,g),u}(s,u,c,m);io(s,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(s,u.sibling),(u=o(u,c)).return=s):(n(s,u),(u=so(c,s.mode,m)).return=s),a(s=u)):n(s,u)}}var il=ia(!0),is=ia(!1),iu={},ic=r0(iu),id=r0(iu),ip=r0(iu);function ih(e){if(e===iu)throw Error(d(174));return e}function im(e,t){switch(r2(ip,t),r2(id,e),r2(ic,iu),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eE(null,"");break;default:t=eE(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(ic),r2(ic,t)}function ig(){r1(ic),r1(id),r1(ip)}function iv(e){ih(ip.current);var t=ih(ic.current),n=eE(t,e.type);t!==n&&(r2(id,e),r2(ic,n))}function iy(e){id.current===e&&(r1(ic),r1(id))}var ib=r0(0);function iw(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ix=[];function ik(){for(var e=0;e<ix.length;e++)ix[e]._workInProgressVersionPrimary=null;ix.length=0}var iS=R.ReactCurrentDispatcher,iE=R.ReactCurrentBatchConfig,iC=0,i_=null,iR=null,iP=null,iT=!1,iN=!1,iO=0,ij=0;function iA(){throw Error(d(321))}function iD(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nK(e[n],t[n]))return!1;return!0}function iz(e,t,n,r,o,i){if(iC=i,i_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,iS.current=null===e||null===e.memoizedState?as:au,e=n(r,o),iN){i=0;do{if(iN=!1,iO=0,25<=i)throw Error(d(301));i+=1,iP=iR=null,t.updateQueue=null,iS.current=ac,e=n(r,o)}while(iN)}if(iS.current=al,t=null!==iR&&null!==iR.next,iC=0,iP=iR=i_=null,iT=!1,t)throw Error(d(300));return e}function iI(){var e=0!==iO;return iO=0,e}function iM(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===iP?i_.memoizedState=iP=e:iP=iP.next=e,iP}function iF(){if(null===iR){var e=i_.alternate;e=null!==e?e.memoizedState:null}else e=iR.next;var t=null===iP?i_.memoizedState:iP.next;if(null!==t)iP=t,iR=e;else{if(null===e)throw Error(d(310));e={memoizedState:(iR=e).memoizedState,baseState:iR.baseState,baseQueue:iR.baseQueue,queue:iR.queue,next:null},null===iP?i_.memoizedState=iP=e:iP=iP.next=e}return iP}function iL(e,t){return"function"==typeof t?t(e):t}function i$(e){var t=iF(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=iR,o=r.baseQueue,i=n.pending;if(null!==i){if(null!==o){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(null!==o){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((iC&c)===c)null!==s&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===s?(l=s=f,a=r):s=s.next=f,i_.lanes|=c,lg|=c}u=u.next}while(null!==u&&u!==i)null===s?a=r:s.next=l,nK(r,t.memoizedState)||(ax=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do i=o.lane,i_.lanes|=i,lg|=i,o=o.next;while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function iU(e){var t=iF(),n=t.queue;if(null===n)throw Error(d(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o)nK(i,t.memoizedState)||(ax=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function iV(){}function iW(e,t){var n=i_,r=iF(),o=t(),i=!nK(r.memoizedState,o);if(i&&(r.memoizedState=o,ax=!0),r=r.queue,i1(iG.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==iP&&1&iP.memoizedState.tag){if(n.flags|=2048,iY(9,iH.bind(null,n,r,o,t),void 0,null),null===lu)throw Error(d(349));0!=(30&iC)||iB(n,t,o)}return o}function iB(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=i_.updateQueue)?(t={lastEffect:null,stores:null},i_.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function iH(e,t,n,r){t.value=n,t.getSnapshot=r,iq(t)&&iQ(e)}function iG(e,t,n){return n(function(){iq(t)&&iQ(e)})}function iq(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nK(e,n)}catch(e){return!0}}function iQ(e){var t=oK(e,1);null!==t&&lI(t,e,1,-1)}function iK(e){var t=iM();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:iL,lastRenderedState:e},t.queue=e,e=e.dispatch=ar.bind(null,i_,e),[t.memoizedState,e]}function iY(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=i_.updateQueue)?(t={lastEffect:null,stores:null},i_.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function iX(){return iF().memoizedState}function iZ(e,t,n,r){var o=iM();i_.flags|=e,o.memoizedState=iY(1|t,n,void 0,void 0===r?null:r)}function iJ(e,t,n,r){var o=iF();r=void 0===r?null:r;var i=void 0;if(null!==iR){var a=iR.memoizedState;if(i=a.destroy,null!==r&&iD(r,a.deps)){o.memoizedState=iY(t,n,i,r);return}}i_.flags|=e,o.memoizedState=iY(1|t,n,i,r)}function i0(e,t){return iZ(8390656,8,e,t)}function i1(e,t){return iJ(2048,8,e,t)}function i2(e,t){return iJ(4,2,e,t)}function i3(e,t){return iJ(4,4,e,t)}function i4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function i5(e,t,n){return n=null!=n?n.concat([e]):null,iJ(4,4,i4.bind(null,t,e),n)}function i6(){}function i9(e,t){var n=iF();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iD(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i8(e,t){var n=iF();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&iD(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i7(e,t,n){return 0==(21&iC)?(e.baseState&&(e.baseState=!1,ax=!0),e.memoizedState=n):(nK(n,t)||(n=tb(),i_.lanes|=n,lg|=n,e.baseState=!0),t)}function ae(e,t){var n=tS;tS=0!==n&&4>n?n:4,e(!0);var r=iE.transition;iE.transition={};try{e(!1),t()}finally{tS=n,iE.transition=r}}function at(){return iF().memoizedState}function an(e,t,n){var r=lz(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ao(e)?ai(t,n):null!==(n=oQ(e,t,n,r))&&(lI(n,e,r,lD()),aa(n,t,r))}function ar(e,t,n){var r=lz(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ao(e))ai(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,nK(l,a)){var s=t.interleaved;null===s?(o.next=o,oq(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch(e){}finally{}null!==(n=oQ(e,t,o,r))&&(lI(n,e,r,o=lD()),aa(n,t,r))}}function ao(e){var t=e.alternate;return e===i_||null!==t&&t===i_}function ai(e,t){iN=iT=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aa(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}var al={readContext:oH,useCallback:iA,useContext:iA,useEffect:iA,useImperativeHandle:iA,useInsertionEffect:iA,useLayoutEffect:iA,useMemo:iA,useReducer:iA,useRef:iA,useState:iA,useDebugValue:iA,useDeferredValue:iA,useTransition:iA,useMutableSource:iA,useSyncExternalStore:iA,useId:iA,unstable_isNewReconciler:!1},as={readContext:oH,useCallback:function(e,t){return iM().memoizedState=[e,void 0===t?null:t],e},useContext:oH,useEffect:i0,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,iZ(4194308,4,i4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return iZ(4194308,4,e,t)},useInsertionEffect:function(e,t){return iZ(4,2,e,t)},useMemo:function(e,t){var n=iM();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=iM();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=an.bind(null,i_,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},iM().memoizedState=e},useState:iK,useDebugValue:i6,useDeferredValue:function(e){return iM().memoizedState=e},useTransition:function(){var e=iK(!1),t=e[0];return e=ae.bind(null,e[1]),iM().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=i_,o=iM();if(oE){if(void 0===n)throw Error(d(407));n=n()}else{if(n=t(),null===lu)throw Error(d(349));0!=(30&iC)||iB(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,i0(iG.bind(null,r,i,e),[e]),r.flags|=2048,iY(9,iH.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=iM(),t=lu.identifierPrefix;if(oE){var n=ov,r=og;t=":"+t+"R"+(n=(r&~(1<<32-td(r)-1)).toString(32)+n),0<(n=iO++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ij++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:oH,useCallback:i9,useContext:oH,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i8,useReducer:i$,useRef:iX,useState:function(){return i$(iL)},useDebugValue:i6,useDeferredValue:function(e){return i7(iF(),iR.memoizedState,e)},useTransition:function(){return[i$(iL)[0],iF().memoizedState]},useMutableSource:iV,useSyncExternalStore:iW,useId:at,unstable_isNewReconciler:!1},ac={readContext:oH,useCallback:i9,useContext:oH,useEffect:i1,useImperativeHandle:i5,useInsertionEffect:i2,useLayoutEffect:i3,useMemo:i8,useReducer:iU,useRef:iX,useState:function(){return iU(iL)},useDebugValue:i6,useDeferredValue:function(e){var t=iF();return null===iR?t.memoizedState=e:i7(t,iR.memoizedState,e)},useTransition:function(){return[iU(iL)[0],iF().memoizedState]},useMutableSource:iV,useSyncExternalStore:iW,useId:at,unstable_isNewReconciler:!1};function ad(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1);case 11:return e=ei(e.type.render,!1);case 1:return e=ei(e.type,!0);default:return""}}(r),r=r.return;while(r)var o=n}catch(e){o="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:o,digest:null}}function af(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ap(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function am(e,t,n){(n=oJ(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){lE||(lE=!0,lC=r),ap(e,t)},n}function ag(e,t,n){(n=oJ(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ap(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){ap(e,t),"function"!=typeof r&&(null===l_?l_=new Set([this]):l_.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function av(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ah;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=l3.bind(null,e,t,n),t.then(e,e))}function ay(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,n,r,o){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=oJ(-1,1)).tag=2,o0(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=o),e}var aw=R.ReactCurrentOwner,ax=!1;function ak(e,t,n,r){t.child=null===e?is(t,null,n,r):il(t,e.child,n,r)}function aS(e,t,n,r,o){n=n.render;var i=t.ref;return(oB(t,o),r=iz(e,t,n,r,i,o),n=iI(),null===e||ax)?(oE&&n&&ow(t),t.flags|=1,ak(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aV(e,t,o))}function aE(e,t,n,r,o){if(null===e){var i=n.type;return"function"!=typeof i||l7(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=st(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,aC(e,t,i,r,o))}if(i=e.child,0==(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:nY)(a,r)&&e.ref===t.ref)return aV(e,t,o)}return t.flags|=1,(e=se(i,r)).ref=t.ref,e.return=t,t.child=e}function aC(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(nY(i,r)&&e.ref===t.ref){if(ax=!1,t.pendingProps=r=i,0==(e.lanes&o))return t.lanes=e.lanes,aV(e,t,o);0!=(131072&e.flags)&&(ax=!0)}}return aP(e,t,n,r,o)}function a_(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(lp,lf),lf|=n;else{if(0==(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(lp,lf),lf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,r2(lp,lf),lf|=r}}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,r2(lp,lf),lf|=r;return ak(e,t,o,n),t.child}function aR(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aP(e,t,n,r,o){var i=r8(n)?r6:r4.current;return(i=r9(t,i),oB(t,o),n=iz(e,t,n,r,i,o),r=iI(),null===e||ax)?(oE&&r&&ow(t),t.flags|=1,ak(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,aV(e,t,o))}function aT(e,t,n,r,o){if(r8(n)){var i=!0;on(t)}else i=!1;if(oB(t,o),null===t.stateNode)aU(e,t),o7(t,n,r),it(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;u="object"==typeof u&&null!==u?oH(u):r9(t,u=r8(n)?r6:r4.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ie(t,a,r,u),oY=!1;var f=t.memoizedState;a.state=f,o3(t,r,a,o),s=t.memoizedState,l!==r||f!==s||r5.current||oY?("function"==typeof c&&(o6(t,n,c,r),s=t.memoizedState),(l=oY||o8(t,n,l,r,f,s,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oZ(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:oI(t.type,l),a.props=u,d=t.pendingProps,f=a.context,s="object"==typeof(s=n.contextType)&&null!==s?oH(s):r9(t,s=r8(n)?r6:r4.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ie(t,a,r,s),oY=!1,f=t.memoizedState,a.state=f,o3(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||r5.current||oY?("function"==typeof p&&(o6(t,n,p,r),h=t.memoizedState),(u=oY||o8(t,n,u,r,f,h,s)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!=typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return aN(e,t,n,r,i,o)}function aN(e,t,n,r,o,i){aR(e,t);var a=0!=(128&t.flags);if(!r&&!a)return o&&or(t,n,!1),aV(e,t,i);r=t.stateNode,aw.current=t;var l=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=il(t,e.child,null,i),t.child=il(t,null,l,i)):ak(e,t,l,i),t.memoizedState=r.state,o&&or(t,n,!0),t.child}function aO(e){var t=e.stateNode;t.pendingContext?oe(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oe(e,t.context,!1),im(e,t.containerInfo)}function aj(e,t,n,r,o){return oA(),oD(o),t.flags|=256,ak(e,t,n,r),t.child}var aA={dehydrated:null,treeContext:null,retryLane:0};function aD(e){return{baseLanes:e,cachePool:null,transitions:null}}function az(e,t,n){var r,o=t.pendingProps,i=ib.current,a=!1,l=0!=(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!=(2&i)),r?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(i|=1),r2(ib,1&i),null===e)return(oT(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=o.children,e=o.fallback,a?(o=t.mode,a=t.child,l={mode:"hidden",children:l},0==(1&o)&&null!==a?(a.childLanes=0,a.pendingProps=l):a=sr(l,o,0,null),e=sn(e,o,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aD(n),t.memoizedState=aA,e):aI(t,l));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,o,i,a){if(n)return 256&t.flags?(t.flags&=-257,aM(e,t,a,r=af(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sr({mode:"visible",children:r.children},o,0,null),i=sn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!=(1&t.mode)&&il(t,e.child,null,a),t.child.memoizedState=aD(a),t.memoizedState=aA,i);if(0==(1&t.mode))return aM(e,t,a,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var l=r.dgst;return r=l,aM(e,t,a,r=af(i=Error(d(419)),r,void 0))}if(l=0!=(a&e.childLanes),ax||l){if(null!==(r=lu)){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!=(o&(r.suspendedLanes|a))?0:o)&&o!==i.retryLane&&(i.retryLane=o,oK(e,o),lI(r,e,o,-1))}return lK(),aM(e,t,a,r=af(Error(d(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=l5.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,oS=rL(o.nextSibling),ok=t,oE=!0,oC=null,null!==e&&(op[oh++]=og,op[oh++]=ov,op[oh++]=om,og=e.id,ov=e.overflow,om=t),t=aI(t,r.children),t.flags|=4096,t)}(e,t,l,o,r,i,n);if(a){a=o.fallback,l=t.mode,r=(i=e.child).sibling;var s={mode:"hidden",children:o.children};return 0==(1&l)&&t.child!==i?((o=t.child).childLanes=0,o.pendingProps=s,t.deletions=null):(o=se(i,s)).subtreeFlags=14680064&i.subtreeFlags,null!==r?a=se(r,a):(a=sn(a,l,n,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,l=null===(l=e.child.memoizedState)?aD(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=aA,o}return e=(a=e.child).sibling,o=se(a,{mode:"visible",children:o.children}),0==(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function aI(e,t){return(t=sr({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aM(e,t,n,r){return null!==r&&oD(r),il(t,e.child,null,n),e=aI(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aF(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),oW(e.return,t,n)}function aL(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function a$(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ak(e,t,r.children,n),0!=(2&(r=ib.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aF(e,n,t);else if(19===e.tag)aF(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(ib,r),0==(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(o=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===iw(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),aL(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===iw(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}aL(t,!0,n,null,i);break;case"together":aL(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function aU(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function aV(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),lg|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(n=se(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=se(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function aW(e,t){if(!oE)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function aB(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}o=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},i=function(){},a=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ih(ic.current);var i,a=null;switch(n){case"input":o=ed(e,o),r=ed(e,r),a=[];break;case"select":o=en({},o,{value:void 0}),r=en({},r,{value:void 0}),a=[];break;case"textarea":o=eb(e,o),r=eb(e,r),a=[];break;default:"function"!=typeof o.onClick&&"function"==typeof r.onClick&&(e.onclick=rT)}for(u in eD(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u]){if("style"===u){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in r){var s=r[u];if(l=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(null!=s||null!=l)){if("style"===u){if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s}else"dangerouslySetInnerHTML"===u?(s=s?s.__html:void 0,l=l?l.__html:void 0,null!=s&&l!==s&&(a=a||[]).push(u,s)):"children"===u?"string"!=typeof s&&"number"!=typeof s||(a=a||[]).push(u,""+s):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=s&&"onScroll"===u&&rm("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},l=function(e,t,n,r){n!==r&&(t.flags|=4)};var aH=!1,aG=!1,aq="function"==typeof WeakSet?WeakSet:Set,aQ=null;function aK(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){l2(e,t,n)}else n.current=null}}function aY(e,t,n){try{n()}catch(n){l2(e,t,n)}}var aX=!1;function aZ(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&aY(t,n,i)}o=o.next}while(o!==r)}}function aJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function a0(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a5(e,t,n){for(n=n.child;null!==n;)a6(e,t,n),n=n.sibling}function a6(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:aG||aK(n,t);case 6:var r=a3,o=a4;a3=null,a5(e,t,n),a3=r,a4=o,null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):a3.removeChild(n.stateNode));break;case 18:null!==a3&&(a4?(e=a3,n=n.stateNode,8===e.nodeType?rF(e.parentNode,n):1===e.nodeType&&rF(e,n),tG(e)):rF(a3,n.stateNode));break;case 4:r=a3,o=a4,a3=n.stateNode.containerInfo,a4=!0,a5(e,t,n),a3=r,a4=o;break;case 0:case 11:case 14:case 15:if(!aG&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!=(2&i)?aY(n,t,a):0!=(4&i)&&aY(n,t,a)),o=o.next}while(o!==r)}a5(e,t,n);break;case 1:if(!aG&&(aK(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){l2(n,t,e)}a5(e,t,n);break;case 21:default:a5(e,t,n);break;case 22:1&n.mode?(aG=(r=aG)||null!==n.memoizedState,a5(e,t,n),aG=r):a5(e,t,n)}}function a9(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new aq),t.forEach(function(t){var r=l6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function a8(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var i=t,a=i;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(d(160));a6(e,i,o),a3=null,a4=!1;var l=o.alternate;null!==l&&(l.return=null),o.return=null}catch(e){l2(o,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a7(t,e),t=t.sibling}function a7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a8(t,e),le(e),4&r){try{aZ(3,e,e.return),aJ(3,e)}catch(t){l2(e,e.return,t)}try{aZ(5,e,e.return)}catch(t){l2(e,e.return,t)}}break;case 1:a8(t,e),le(e),512&r&&null!==n&&aK(n,n.return);break;case 5:if(a8(t,e),le(e),512&r&&null!==n&&aK(n,n.return),32&e.flags){var o=e.stateNode;try{eP(o,"")}catch(t){l2(e,e.return,t)}}if(4&r&&null!=(o=e.stateNode)){var i=e.memoizedProps,a=null!==n?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,null!==s)try{"input"===l&&"radio"===i.type&&null!=i.name&&ep(o,i),ez(l,a);var u=ez(l,i);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];"style"===c?ej(o,f):"dangerouslySetInnerHTML"===c?eR(o,f):"children"===c?eP(o,f):_(o,c,f,u)}switch(l){case"input":eh(o,i);break;case"textarea":ex(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ey(o,!!i.multiple,h,!1):!!i.multiple!==p&&(null!=i.defaultValue?ey(o,!!i.multiple,i.defaultValue,!0):ey(o,!!i.multiple,i.multiple?[]:"",!1))}o[rW]=i}catch(t){l2(e,e.return,t)}}break;case 6:if(a8(t,e),le(e),4&r){if(null===e.stateNode)throw Error(d(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(t){l2(e,e.return,t)}}break;case 3:if(a8(t,e),le(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tG(t.containerInfo)}catch(t){l2(e,e.return,t)}break;case 4:default:a8(t,e),le(e);break;case 13:a8(t,e),le(e),8192&(o=e.child).flags&&(i=null!==o.memoizedState,o.stateNode.isHidden=i,i&&(null===o.alternate||null===o.alternate.memoizedState)&&(lx=tn())),4&r&&a9(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(aG=(u=aG)||c,a8(t,e),aG=u):a8(t,e),le(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aQ=e,c=e.child;null!==c;){for(f=aQ=c;null!==aQ;){switch(h=(p=aQ).child,p.tag){case 0:case 11:case 14:case 15:aZ(4,p,p.return);break;case 1:aK(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){l2(r,n,e)}}break;case 5:aK(p,p.return);break;case 22:if(null!==p.memoizedState){ln(f);continue}}null!==h?(h.return=p,aQ=h):ln(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{o=f.stateNode,u?(i=o.style,"function"==typeof i.setProperty?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,a=null!=(s=f.memoizedProps.style)&&s.hasOwnProperty("display")?s.display:null,l.style.display=eO("display",a))}catch(t){l2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){l2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:a8(t,e),le(e),4&r&&a9(e);case 21:}}function le(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(a1(n)){var r=n;break e}n=n.return}throw Error(d(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(eP(o,""),r.flags&=-33);var i=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=a2(e);!function e(t,n,r){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rT));else if(4!==o&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,l,a);break;default:throw Error(d(161))}}catch(t){l2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function lt(e){for(;null!==aQ;){var t=aQ;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aG||aJ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!aG){if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:oI(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var i=t.updateQueue;null!==i&&o4(t,i,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}o4(t,a,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tG(f)}}}break;default:throw Error(d(163))}aG||512&t.flags&&a0(t)}catch(e){l2(t,t.return,e)}}if(t===e){aQ=null;break}if(null!==(n=t.sibling)){n.return=t.return,aQ=n;break}aQ=t.return}}function ln(e){for(;null!==aQ;){var t=aQ;if(t===e){aQ=null;break}var n=t.sibling;if(null!==n){n.return=t.return,aQ=n;break}aQ=t.return}}function lr(e){for(;null!==aQ;){var t=aQ;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{aJ(4,t)}catch(e){l2(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(e){l2(t,o,e)}}var i=t.return;try{a0(t)}catch(e){l2(t,i,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){l2(t,a,e)}}}catch(e){l2(t,t.return,e)}if(t===e){aQ=null;break}var l=t.sibling;if(null!==l){l.return=t.return,aQ=l;break}aQ=t.return}}var lo=Math.ceil,li=R.ReactCurrentDispatcher,la=R.ReactCurrentOwner,ll=R.ReactCurrentBatchConfig,ls=0,lu=null,lc=null,ld=0,lf=0,lp=r0(0),lh=0,lm=null,lg=0,lv=0,ly=0,lb=null,lw=null,lx=0,lk=1/0,lS=null,lE=!1,lC=null,l_=null,lR=!1,lP=null,lT=0,lN=0,lO=null,lj=-1,lA=0;function lD(){return 0!=(6&ls)?tn():-1!==lj?lj:lj=tn()}function lz(e){return 0==(1&e.mode)?1:0!=(2&ls)&&0!==ld?ld&-ld:null!==oz.transition?(0===lA&&(lA=tb()),lA):0!==(e=tS)?e:e=void 0===(e=window.event)?16:t0(e.type)}function lI(e,t,n,r){if(50<lN)throw lN=0,lO=null,Error(d(185));tx(e,n,r),(0==(2&ls)||e!==lu)&&(e===lu&&(0==(2&ls)&&(lv|=n),4===lh&&lU(e,ld)),lM(e,r),1===n&&0===ls&&0==(1&t.mode)&&(lk=tn()+500,oi&&os()))}function lM(e,t){var n,r,o,i=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-td(i),l=1<<a,s=o[a];-1===s?(0==(l&n)||0!=(l&r))&&(o[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var a=tv(e,e===lu?ld:0);if(0===a)null!==i&&e7(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=i&&e7(i),1===t)0===e.tag?(o=lV.bind(null,e),oi=!0,ol(o)):ol(lV.bind(null,e)),rI(function(){0==(6&ls)&&os()}),i=null;else{switch(tE(a)){case 1:i=to;break;case 4:i=ti;break;case 16:default:i=ta;break;case 536870912:i=ts}i=e8(i,lF.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function lF(e,t){if(lj=-1,lA=0,0!=(6&ls))throw Error(d(327));var n=e.callbackNode;if(l0()&&e.callbackNode!==n)return null;var r=tv(e,e===lu?ld:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=lY(e,r);else{t=r;var o=ls;ls|=2;var i=lQ();for((lu!==e||ld!==t)&&(lS=null,lk=tn()+500,lG(e,t));;)try{(function(){for(;null!==lc&&!te();)lX(lc)})();break}catch(t){lq(e,t)}oU(),li.current=i,ls=o,null!==lc?t=0:(lu=null,ld=0,t=lh)}if(0!==t){if(2===t&&0!==(o=ty(e))&&(r=o,t=lL(e,o)),1===t)throw n=lm,lG(e,0),lU(e,r),lM(e,tn()),n;if(6===t)lU(e,r);else{if(o=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nK(i(),o))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=lY(e,r))&&0!==(i=ty(e))&&(r=i,t=lL(e,i)),1===t))throw n=lm,lG(e,0),lU(e,r),lM(e,tn()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(d(345));case 2:case 5:lJ(e,lw,lS);break;case 3:if(lU(e,r),(130023424&r)===r&&10<(t=lx+500-tn())){if(0!==tv(e,0))break;if(((o=e.suspendedLanes)&r)!==r){lD(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=rA(lJ.bind(null,e,lw,lS),t);break}lJ(e,lw,lS);break;case 4:if(lU(e,r),(4194240&r)===r)break;for(o=-1,t=e.eventTimes;0<r;){var a=31-td(r);i=1<<a,(a=t[a])>o&&(o=a),r&=~i}if(r=o,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lo(r/1960))-r)){e.timeoutHandle=rA(lJ.bind(null,e,lw,lS),r);break}lJ(e,lw,lS);break;default:throw Error(d(329))}}}return lM(e,tn()),e.callbackNode===n?lF.bind(null,e):null}function lL(e,t){var n=lb;return e.current.memoizedState.isDehydrated&&(lG(e,t).flags|=256),2!==(e=lY(e,t))&&(t=lw,lw=n,null!==t&&l$(t)),e}function l$(e){null===lw?lw=e:lw.push.apply(lw,e)}function lU(e,t){for(t&=~ly,t&=~lv,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-td(t),r=1<<n;e[n]=-1,t&=~r}}function lV(e){if(0!=(6&ls))throw Error(d(327));l0();var t=tv(e,0);if(0==(1&t))return lM(e,tn()),null;var n=lY(e,t);if(0!==e.tag&&2===n){var r=ty(e);0!==r&&(t=r,n=lL(e,r))}if(1===n)throw n=lm,lG(e,0),lU(e,t),lM(e,tn()),n;if(6===n)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lJ(e,lw,lS),lM(e,tn()),null}function lW(e,t){var n=ls;ls|=1;try{return e(t)}finally{0===(ls=n)&&(lk=tn()+500,oi&&os())}}function lB(e){null!==lP&&0===lP.tag&&0==(6&ls)&&l0();var t=ls;ls|=1;var n=ll.transition,r=tS;try{if(ll.transition=null,tS=1,e)return e()}finally{tS=r,ll.transition=n,0==(6&(ls=t))&&os()}}function lH(){lf=lp.current,r1(lp)}function lG(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rD(n)),null!==lc)for(n=lc.return;null!==n;){var r=n;switch(ox(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r7();break;case 3:ig(),r1(r5),r1(r4),ik();break;case 5:iy(r);break;case 4:ig();break;case 13:case 19:r1(ib);break;case 10:oV(r.type._context);break;case 22:case 23:lH()}n=n.return}if(lu=e,lc=e=se(e.current,null),ld=lf=t,lh=0,lm=null,ly=lv=lg=0,lw=lb=null,null!==oG){for(t=0;t<oG.length;t++)if(null!==(r=(n=oG[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}oG=null}return e}function lq(e,t){for(;;){var n=lc;try{if(oU(),iS.current=al,iT){for(var r=i_.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}iT=!1}if(iC=0,iP=iR=i_=null,iN=!1,iO=0,la.current=null,null===n||null===n.return){lh=1,lm=t,lc=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=ld,l.flags|=32768,null!==s&&"object"==typeof s&&"function"==typeof s.then){var u=s,c=l,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=ay(a);if(null!==h){h.flags&=-257,ab(h,a,l,i,t),1&h.mode&&av(i,u,t),t=h,s=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(s),t.updateQueue=g}else m.add(s);break e}if(0==(1&t)){av(i,u,t),lK();break e}s=Error(d(426))}else if(oE&&1&l.mode){var v=ay(a);if(null!==v){0==(65536&v.flags)&&(v.flags|=256),ab(v,a,l,i,t),oD(ad(s,l));break e}}i=s=ad(s,l),4!==lh&&(lh=2),null===lb?lb=[i]:lb.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=am(i,s,t);o2(i,y);break e;case 1:l=s;var b=i.type,w=i.stateNode;if(0==(128&i.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===l_||!l_.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=ag(i,l,t);o2(i,x);break e}}i=i.return}while(null!==i)}lZ(n)}catch(e){t=e,lc===n&&null!==n&&(lc=n=n.return);continue}break}}function lQ(){var e=li.current;return li.current=al,null===e?al:e}function lK(){(0===lh||3===lh||2===lh)&&(lh=4),null===lu||0==(268435455&lg)&&0==(268435455&lv)||lU(lu,ld)}function lY(e,t){var n=ls;ls|=2;var r=lQ();for((lu!==e||ld!==t)&&(lS=null,lG(e,t));;)try{(function(){for(;null!==lc;)lX(lc)})();break}catch(t){lq(e,t)}if(oU(),ls=n,li.current=r,null!==lc)throw Error(d(261));return lu=null,ld=0,lh}function lX(e){var t=s(e.alternate,e,lf);e.memoizedProps=e.pendingProps,null===t?lZ(e):lc=t,la.current=null}function lZ(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ox(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aB(t),null;case 1:case 17:return r8(t.type)&&r7(),aB(t),null;case 3:return r=t.stateNode,ig(),r1(r5),r1(r4),ik(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(oO(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==oC&&(l$(oC),oC=null))),i(e,t),aB(t),null;case 5:iy(t);var s=ih(ip.current);if(n=t.type,null!==e&&null!=t.stateNode)a(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(d(166));return aB(t),null}if(e=ih(ic.current),oO(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rV]=t,r[rW]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ef(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ew(r,u),rm("invalid",r)}for(var c in eD(n,u),s=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?r.textContent!==f&&(!0!==u.suppressHydrationWarning&&rP(r.textContent,f,e),s=["children",f]):"number"==typeof f&&r.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&rP(r.textContent,f,e),s=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":es(r),em(r,u,!0);break;case"textarea":es(r),ek(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rT)}r=s,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===s.nodeType?s:s.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eS(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rV]=t,e[rW]=r,o(e,t,!1,!1),t.stateNode=e;e:{switch(c=ez(n,r),n){case"dialog":rm("cancel",e),rm("close",e),s=r;break;case"iframe":case"object":case"embed":rm("load",e),s=r;break;case"video":case"audio":for(s=0;s<rd.length;s++)rm(rd[s],e);s=r;break;case"source":rm("error",e),s=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),s=r;break;case"details":rm("toggle",e),s=r;break;case"input":ef(e,r),s=ed(e,r),rm("invalid",e);break;case"option":default:s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),s=eb(e,r),rm("invalid",e)}for(u in eD(n,s),f=s)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?ej(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eR(e,h):"children"===u?"string"==typeof h?("textarea"!==n||""!==h)&&eP(e,h):"number"==typeof h&&eP(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&rm("scroll",e):null!=h&&_(e,u,h,c))}switch(n){case"input":es(e),em(e,r,!1);break;case"textarea":es(e),ek(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ea(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?ey(e,!!r.multiple,u,!1):null!=r.defaultValue&&ey(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=rT)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aB(t),null;case 6:if(e&&null!=t.stateNode)l(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(d(166));if(n=ih(ip.current),ih(ic.current),oO(t)){if(r=t.stateNode,n=t.memoizedProps,r[rV]=t,(u=r.nodeValue!==n)&&null!==(e=ok))switch(e.tag){case 3:rP(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rP(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rV]=t,t.stateNode=r}return aB(t),null;case 13:if(r1(ib),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(oE&&null!==oS&&0!=(1&t.mode)&&0==(128&t.flags))oj(),oA(),t.flags|=98560,u=!1;else if(u=oO(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[rV]=t}else oA(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aB(t),u=!1}else null!==oC&&(l$(oC),oC=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ib.current)?0===lh&&(lh=3):lK())),null!==t.updateQueue&&(t.flags|=4),aB(t),null;case 4:return ig(),i(e,t),null===e&&ry(t.stateNode.containerInfo),aB(t),null;case 10:return oV(t.type._context),aB(t),null;case 19:if(r1(ib),null===(u=t.memoizedState))return aB(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)aW(u,!1);else{if(0!==lh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=iw(e))){for(t.flags|=128,aW(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(ib,1&ib.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>lk&&(t.flags|=128,r=!0,aW(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=iw(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),aW(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!oE)return aB(t),null}else 2*tn()-u.renderingStartTime>lk&&1073741824!==n&&(t.flags|=128,r=!0,aW(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=ib.current,r2(ib,r?1&n|2:1&n),t;return aB(t),null;case 22:case 23:return lH(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&lf)&&(aB(t),6&t.subtreeFlags&&(t.flags|=8192)):aB(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(n,t,lf))){lc=n;return}}else{if(null!==(n=function(e,t){switch(ox(t),t.tag){case 1:return r8(t.type)&&r7(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ig(),r1(r5),r1(r4),ik(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return iy(t),null;case 13:if(r1(ib),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));oA()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(ib),null;case 4:return ig(),null;case 10:return oV(t.type._context),null;case 22:case 23:return lH(),null;default:return null}}(n,t))){n.flags&=32767,lc=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{lh=6,lc=null;return}}if(null!==(t=t.sibling)){lc=t;return}lc=t=e}while(null!==t)0===lh&&(lh=5)}function lJ(e,t,n){var r=tS,o=ll.transition;try{ll.transition=null,tS=1,function(e,t,n,r){do l0();while(null!==lP)if(0!=(6&ls))throw Error(d(327));n=e.finishedWork;var o=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-td(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,i),e===lu&&(lc=lu=null,ld=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||lR||(lR=!0,a=ta,l=function(){return l0(),null},e8(a,l)),i=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||i){i=ll.transition,ll.transition=null;var a,l,s,u,c,f=tS;tS=1;var p=ls;ls|=4,la.current=null,function(e,t){if(rN=tQ,n0(e=nJ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o,i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(e){n=null;break e}var l=0,s=-1,u=-1,c=0,f=0,p=e,h=null;t:for(;;){for(;p!==n||0!==i&&3!==p.nodeType||(s=l+i),p!==a||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(o=p.firstChild);)h=p,p=o;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=l),h===a&&++f===r&&(u=l),null!==(o=p.nextSibling))break;h=(p=h).parentNode}p=o}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rO={focusedElem:e,selectionRange:n},tQ=!1,aQ=t;null!==aQ;)if(e=(t=aQ).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aQ=e;else for(;null!==aQ;){t=aQ;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:oI(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){l2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aQ=e;break}aQ=t.return}m=aX,aX=!1}(e,n),a7(n,e),function(e){var t=nJ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=nZ(n,i);var a=nZ(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rO),tQ=!!rN,rO=rN=null,e.current=n,s=n,u=e,c=o,aQ=s,function e(t,n,r){for(var o=0!=(1&t.mode);null!==aQ;){var i=aQ,a=i.child;if(22===i.tag&&o){var l=null!==i.memoizedState||aH;if(!l){var s=i.alternate,u=null!==s&&null!==s.memoizedState||aG;s=aH;var c=aG;if(aH=l,(aG=u)&&!c)for(aQ=i;null!==aQ;)u=(l=aQ).child,22===l.tag&&null!==l.memoizedState?lr(i):null!==u?(u.return=l,aQ=u):lr(i);for(;null!==a;)aQ=a,e(a,n,r),a=a.sibling;aQ=i,aH=s,aG=c}lt(t,n,r)}else 0!=(8772&i.subtreeFlags)&&null!==a?(a.return=i,aQ=a):lt(t,n,r)}}(s,u,c),tt(),ls=p,tS=f,ll.transition=i}else e.current=n;if(lR&&(lR=!1,lP=e,lT=o),0===(i=e.pendingLanes)&&(l_=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),lM(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((o=t[n]).value,{componentStack:o.stack,digest:o.digest});if(lE)throw lE=!1,e=lC,lC=null,e;0!=(1&lT)&&0!==e.tag&&l0(),0!=(1&(i=e.pendingLanes))?e===lO?lN++:(lN=0,lO=e):lN=0,os()}}(e,t,n,r)}finally{ll.transition=o,tS=r}return null}function l0(){if(null!==lP){var e=tE(lT),t=ll.transition,n=tS;try{if(ll.transition=null,tS=16>e?16:e,null===lP)var r=!1;else{if(e=lP,lP=null,lT=0,0!=(6&ls))throw Error(d(331));var o=ls;for(ls|=4,aQ=e.current;null!==aQ;){var i=aQ,a=i.child;if(0!=(16&aQ.flags)){var l=i.deletions;if(null!==l){for(var s=0;s<l.length;s++){var u=l[s];for(aQ=u;null!==aQ;){var c=aQ;switch(c.tag){case 0:case 11:case 15:aZ(8,c,i)}var f=c.child;if(null!==f)f.return=c,aQ=f;else for(;null!==aQ;){var p=(c=aQ).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rV],delete n[rW],delete n[rH],delete n[rG],delete n[rq]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aQ=null;break}if(null!==p){p.return=h,aQ=p;break}aQ=h}}}var m=i.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}aQ=i}}if(0!=(2064&i.subtreeFlags)&&null!==a)a.return=i,aQ=a;else for(;null!==aQ;){if(i=aQ,0!=(2048&i.flags))switch(i.tag){case 0:case 11:case 15:aZ(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,aQ=y;break}aQ=i.return}}var b=e.current;for(aQ=b;null!==aQ;){var w=(a=aQ).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,aQ=w;else for(a=b;null!==aQ;){if(l=aQ,0!=(2048&l.flags))try{switch(l.tag){case 0:case 11:case 15:aJ(9,l)}}catch(e){l2(l,l.return,e)}if(l===a){aQ=null;break}var x=l.sibling;if(null!==x){x.return=l.return,aQ=x;break}aQ=l.return}}if(ls=o,os(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tS=n,ll.transition=t}}return!1}function l1(e,t,n){t=am(e,t=ad(n,t),1),e=o0(e,t,1),t=lD(),null!==e&&(tx(e,1,t),lM(e,t))}function l2(e,t,n){if(3===e.tag)l1(e,e,n);else for(;null!==t;){if(3===t.tag){l1(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===l_||!l_.has(r))){e=ag(t,e=ad(n,e),1),t=o0(t,e,1),e=lD(),null!==t&&(tx(t,1,e),lM(t,e));break}}t=t.return}}function l3(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lD(),e.pingedLanes|=e.suspendedLanes&n,lu===e&&(ld&n)===n&&(4===lh||3===lh&&(130023424&ld)===ld&&500>tn()-lx?lG(e,0):ly|=n),lM(e,t)}function l4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=lD();null!==(e=oK(e,t))&&(tx(e,t,n),lM(e,n))}function l5(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),l4(e,n)}function l6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(d(314))}null!==r&&r.delete(t),l4(e,n)}function l9(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function l8(e,t,n,r){return new l9(e,t,n,r)}function l7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function se(e,t){var n=e.alternate;return null===n?((n=l8(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function st(e,t,n,r,o,i){var a=2;if(r=e,"function"==typeof e)l7(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case N:return sn(n.children,o,i,t);case O:a=8,o|=8;break;case j:return(e=l8(12,n,t,2|o)).elementType=j,e.lanes=i,e;case I:return(e=l8(13,n,t,o)).elementType=I,e.lanes=i,e;case M:return(e=l8(19,n,t,o)).elementType=M,e.lanes=i,e;case $:return sr(n,o,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case A:a=10;break e;case D:a=9;break e;case z:a=11;break e;case F:a=14;break e;case L:a=16,r=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=l8(a,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return(e=l8(7,e,r,t)).lanes=n,e}function sr(e,t,n,r){return(e=l8(22,e,r,t)).elementType=$,e.lanes=n,e.stateNode={isHidden:!1},e}function so(e,t,n){return(e=l8(6,e,null,t)).lanes=n,e}function si(e,t,n){return(t=l8(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sa(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function sl(e,t,n,r,o,i,a,l,s){return e=new sa(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=l8(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oX(i),e}function ss(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r8(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var n=e.type;if(r8(n))return ot(e,n,t)}return t}function su(e,t,n,r,o,i,a,l,s){return(e=sl(n,r,!0,e,o,i,a,l,s)).context=ss(null),n=e.current,(i=oJ(r=lD(),o=lz(n))).callback=null!=t?t:null,o0(n,i,o),e.current.lanes=o,tx(e,o,r),lM(e,r),e}function sc(e,t,n,r){var o=t.current,i=lD(),a=lz(o);return n=ss(n),null===t.context?t.context=n:t.pendingContext=n,(t=oJ(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=o0(o,t,a))&&(lI(e,o,a,i),o1(e,o,a)),a}function sd(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function sf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function sp(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}s=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r5.current)ax=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return ax=!1,function(e,t,n){switch(t.tag){case 3:aO(t),oA();break;case 5:iv(t);break;case 1:r8(t.type)&&on(t);break;case 4:im(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;r2(oM,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(ib,1&ib.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return az(e,t,n);return r2(ib,1&ib.current),null!==(e=aV(e,t,n))?e.sibling:null}r2(ib,1&ib.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return a$(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),r2(ib,ib.current),!r)return null;break;case 22:case 23:return t.lanes=0,a_(e,t,n)}return aV(e,t,n)}(e,t,n);ax=0!=(131072&e.flags)}}else ax=!1,oE&&0!=(1048576&t.flags)&&ob(t,of,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;aU(e,t),e=t.pendingProps;var o=r9(t,r4.current);oB(t,n),o=iz(null,t,r,e,o,n);var i=iI();return t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r8(r)?(i=!0,on(t)):i=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,oX(t),o.updater=o9,t.stateNode=o,o._reactInternals=t,it(t,r,e,n),t=aN(null,t,r,!0,i,n)):(t.tag=0,oE&&i&&ow(t),ak(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(aU(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"==typeof e)return l7(e)?1:0;if(null!=e){if((e=e.$$typeof)===z)return 11;if(e===F)return 14}return 2}(r),e=oI(r,e),o){case 0:t=aP(null,t,r,e,n);break e;case 1:t=aT(null,t,r,e,n);break e;case 11:t=aS(null,t,r,e,n);break e;case 14:t=aE(null,t,r,oI(r.type,e),n);break e}throw Error(d(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oI(r,o),aP(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oI(r,o),aT(e,t,r,o,n);case 3:e:{if(aO(t),null===e)throw Error(d(387));r=t.pendingProps,o=(i=t.memoizedState).element,oZ(e,t),o3(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){o=ad(Error(d(423)),t),t=aj(e,t,r,n,o);break e}if(r!==o){o=ad(Error(d(424)),t),t=aj(e,t,r,n,o);break e}for(oS=rL(t.stateNode.containerInfo.firstChild),ok=t,oE=!0,oC=null,n=is(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oA(),r===o){t=aV(e,t,n);break e}ak(e,t,r,n)}t=t.child}return t;case 5:return iv(t),null===e&&oT(t),r=t.type,o=t.pendingProps,i=null!==e?e.memoizedProps:null,a=o.children,rj(r,o)?a=null:null!==i&&rj(r,i)&&(t.flags|=32),aR(e,t),ak(e,t,a,n),t.child;case 6:return null===e&&oT(t),null;case 13:return az(e,t,n);case 4:return im(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=il(t,null,r,n):ak(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oI(r,o),aS(e,t,r,o,n);case 7:return ak(e,t,t.pendingProps,n),t.child;case 8:case 12:return ak(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,r2(oM,r._currentValue),r._currentValue=a,null!==i){if(nK(i.value,a)){if(i.children===o.children&&!r5.current){t=aV(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){a=i.child;for(var s=l.firstContext;null!==s;){if(s.context===r){if(1===i.tag){(s=oJ(-1,n&-n)).tag=2;var u=i.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),oW(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(10===i.tag)a=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(a=i.return))throw Error(d(341));a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),oW(a,n,t),a=i.sibling}else a=i.child;if(null!==a)a.return=i;else for(a=i;null!==a;){if(a===t){a=null;break}if(null!==(i=a.sibling)){i.return=a.return,a=i;break}a=a.return}i=a}}ak(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,oB(t,n),r=r(o=oH(o)),t.flags|=1,ak(e,t,r,n),t.child;case 14:return o=oI(r=t.type,t.pendingProps),o=oI(r.type,o),aE(e,t,r,o,n);case 15:return aC(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:oI(r,o),aU(e,t),t.tag=1,r8(r)?(e=!0,on(t)):e=!1,oB(t,n),o7(t,r,o),it(t,r,o,n),aN(null,t,r,!0,e,n);case 19:return a$(e,t,n);case 22:return a_(e,t,n)}throw Error(d(156,t.tag))};var sh="function"==typeof reportError?reportError:function(e){console.error(e)};function sm(e){this._internalRoot=e}function sg(e){this._internalRoot=e}function sv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function sy(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sb(){}function sw(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"==typeof o){var l=o;o=function(){var e=sd(a);l.call(e)}}sc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"==typeof r){var i=r;r=function(){var e=sd(a);i.call(e)}}var a=su(t,r,e,0,null,!1,!1,"",sb);return e._reactRootContainer=a,e[rB]=a.current,ry(8===e.nodeType?e.parentNode:e),lB(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"==typeof r){var l=r;r=function(){var e=sd(s);l.call(e)}}var s=sl(e,0,!1,null,null,!1,!1,"",sb);return e._reactRootContainer=s,e[rB]=s.current,ry(8===e.nodeType?e.parentNode:e),lB(function(){sc(t,s,n,r)}),s}(n,t,e,o,r);return sd(a)}sg.prototype.render=sm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));sc(e,t,null,null)},sg.prototype.unmount=sm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lB(function(){sc(null,e,null,null)}),t[rB]=null}},sg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tP();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tM.length&&0!==t&&t<tM[n].priority;n++);tM.splice(n,0,e),0===n&&tU(e)}},tC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tk(t,1|n),lM(t,tn()),0==(6&ls)&&(lk=tn()+500,os()))}break;case 13:lB(function(){var t=oK(e,1);null!==t&&lI(t,e,1,lD())}),sp(e,1)}},t_=function(e){if(13===e.tag){var t=oK(e,134217728);null!==t&&lI(t,e,134217728,lD()),sp(e,134217728)}},tR=function(e){if(13===e.tag){var t=lz(e),n=oK(e,t);null!==n&&lI(n,e,t,lD()),sp(e,t)}},tP=function(){return tS},tT=function(e,t){var n=tS;try{return tS=e,t()}finally{tS=n}},eF=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=rX(r);if(!o)throw Error(d(90));eu(r),eh(r,o)}}}break;case"textarea":ex(e,n);break;case"select":null!=(t=n.value)&&ey(e,!!n.multiple,t,!1)}},eB=lW,eH=lB;var sx={findFiberByHostInstance:rQ,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sk={bundleType:sx.bundleType,version:sx.version,rendererPackageName:sx.rendererPackageName,rendererConfig:sx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e9(e))?null:e.stateNode},findFiberByHostInstance:sx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var sS=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sS.isDisabled&&sS.supportsFiber)try{tu=sS.inject(sk),tc=sS}catch(e){}}W={usingClientEntryPoint:!1,Events:[rK,rY,rX,eV,eW,lW]},B=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!sv(t))throw Error(d(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:T,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},H=function(e,t){if(!sv(e))throw Error(d(299));var n=!1,r="",o=sh;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=sl(e,1,!1,null,null,n,!1,r,o),e[rB]=t.current,ry(8===e.nodeType?e.parentNode:e),new sm(t)},G=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e9(t))?null:e.stateNode},q=function(e){return lB(e)},Q=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!0,n)},K=function(e,t,n){if(!sv(e))throw Error(d(405));var r=null!=n&&n.hydratedSources||null,o=!1,i="",a=sh;if(null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=su(t,null,e,1,null!=n?n:null,o,!1,i,a),e[rB]=t.current,ry(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new sg(t)},Y=function(e,t,n){if(!sy(t))throw Error(d(200));return sw(null,e,t,!1,n)},X=function(e){if(!sy(e))throw Error(d(40));return!!e._reactRootContainer&&(lB(function(){sw(null,null,e,!1,function(){e._reactRootContainer=null,e[rB]=null})}),!0)},Z=lW,J=function(e,t,n,r){if(!sy(n))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return sw(e,t,n,!1,r)},ee="18.2.0-next-9e3b772b8-20220608"}),m.register("4LCdk",function(e,t){e.exports=m("8BKFp")}),m.register("8BKFp",function(e,t){function r(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<a(o,t))e[r]=t,e[n]=o,n=r;else break}}function o(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>a(s,n))u<o&&0>a(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>a(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(n(e.exports,"unstable_now",function(){return l},function(e){return l=e}),n(e.exports,"unstable_IdlePriority",function(){return s},function(e){return s=e}),n(e.exports,"unstable_ImmediatePriority",function(){return u},function(e){return u=e}),n(e.exports,"unstable_LowPriority",function(){return c},function(e){return c=e}),n(e.exports,"unstable_NormalPriority",function(){return d},function(e){return d=e}),n(e.exports,"unstable_Profiling",function(){return f},function(e){return f=e}),n(e.exports,"unstable_UserBlockingPriority",function(){return p},function(e){return p=e}),n(e.exports,"unstable_cancelCallback",function(){return h},function(e){return h=e}),n(e.exports,"unstable_continueExecution",function(){return m},function(e){return m=e}),n(e.exports,"unstable_forceFrameRate",function(){return g},function(e){return g=e}),n(e.exports,"unstable_getCurrentPriorityLevel",function(){return v},function(e){return v=e}),n(e.exports,"unstable_getFirstCallbackNode",function(){return y},function(e){return y=e}),n(e.exports,"unstable_next",function(){return b},function(e){return b=e}),n(e.exports,"unstable_pauseExecution",function(){return w},function(e){return w=e}),n(e.exports,"unstable_requestPaint",function(){return x},function(e){return x=e}),n(e.exports,"unstable_runWithPriority",function(){return k},function(e){return k=e}),n(e.exports,"unstable_scheduleCallback",function(){return S},function(e){return S=e}),n(e.exports,"unstable_shouldYield",function(){return E},function(e){return E=e}),n(e.exports,"unstable_wrapCallback",function(){return C},function(e){return C=e}),"object"==typeof performance&&"function"==typeof performance.now){var l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,C,_,R=performance;l=function(){return R.now()}}else{var P=Date,T=P.now();l=function(){return P.now()-T}}var N=[],O=[],j=1,A=null,D=3,z=!1,I=!1,M=!1,F="function"==typeof setTimeout?setTimeout:null,L="function"==typeof clearTimeout?clearTimeout:null,$="undefined"!=typeof setImmediate?setImmediate:null;function U(e){for(var t=o(O);null!==t;){if(null===t.callback)i(O);else if(t.startTime<=e)i(O),t.sortIndex=t.expirationTime,r(N,t);else break;t=o(O)}}function V(e){if(M=!1,U(e),!I){if(null!==o(N))I=!0,J(W);else{var t=o(O);null!==t&&ee(V,t.startTime-e)}}}function W(e,t){I=!1,M&&(M=!1,L(G),G=-1),z=!0;var n=D;try{for(U(t),A=o(N);null!==A&&(!(A.expirationTime>t)||e&&!K());){var r=A.callback;if("function"==typeof r){A.callback=null,D=A.priorityLevel;var a=r(A.expirationTime<=t);t=l(),"function"==typeof a?A.callback=a:A===o(N)&&i(N),U(t)}else i(N);A=o(N)}if(null!==A)var s=!0;else{var u=o(O);null!==u&&ee(V,u.startTime-t),s=!1}return s}finally{A=null,D=n,z=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var B=!1,H=null,G=-1,q=5,Q=-1;function K(){return!(l()-Q<q)}function Y(){if(null!==H){var e=l();Q=e;var t=!0;try{t=H(!0,e)}finally{t?_():(B=!1,H=null)}}else B=!1}if("function"==typeof $)_=function(){$(Y)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,Z=X.port2;X.port1.onmessage=Y,_=function(){Z.postMessage(null)}}else _=function(){F(Y,0)};function J(e){H=e,B||(B=!0,_())}function ee(e,t){G=F(function(){e(l())},t)}s=5,u=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){I||z||(I=!0,J(W))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<e?Math.floor(1e3/e):5},v=function(){return D},y=function(){return o(N)},b=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},w=function(){},x=function(){},k=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},S=function(e,t,n){var i=l();switch(n="object"==typeof n&&null!==n&&"number"==typeof(n=n.delay)&&0<n?i+n:i,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:j++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>i?(e.sortIndex=n,r(O,e),null===o(N)&&e===o(O)&&(M?(L(G),G=-1):M=!0,ee(V,n-i))):(e.sortIndex=a,r(N,e),I||z||(I=!0,J(W))),e},E=K,C=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}}),m.register("7ORd6",function(e,t){!/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.36
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js *//////////////////////////////////////////////////////////////////////////////////
function(n,r){//////////////
// Constants
/////////////
var o="function",i="undefined",a="object",l="string",s="major",u="model",c="name",d="type",f="vendor",p="version",h="architecture",m="console",g="mobile",v="tablet",y="smarttv",b="wearable",w="embedded",x="Amazon",k="Apple",S="ASUS",E="BlackBerry",C="Browser",_="Chrome",R="Firefox",P="Google",T="Huawei",N="Microsoft",O="Motorola",j="Opera",A="Samsung",D="Sharp",z="Sony",I="Xiaomi",M="Zebra",F="Facebook",L="Chromium OS",$="Mac OS",U=function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2==0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},V=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},W=function(e,t){return typeof e===l&&-1!==B(t).indexOf(B(e))},B=function(e){return e.toLowerCase()},H=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===i?e:e.substring(0,350)},G=function(e,t){// loop through all regexes maps
for(var n,i,l,s,u,c,d=0;d<t.length&&!u;){var f=t[d],p=t[d+1];// odd sequence (1,3,5,..)
// try matching uastring with regexes
for(n=i=0;n<f.length&&!u&&f[n];)if(u=f[n++].exec(e))for(l=0;l<p.length;l++)c=u[++i],typeof(s=p[l])===a&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:3===s.length?typeof s[1]!==o||s[1].exec&&s[1].test?this[s[0]]=c?c.replace(s[1],s[2]):r:this[s[0]]=c?s[1].call(this,c,s[2]):r:4===s.length&&(this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):r):this[s]=c||r;d+=2}},q=function(e,t){for(var n in t)// check if current value is array
if(typeof t[n]===a&&t[n].length>0){for(var o=0;o<t[n].length;o++)if(W(t[n][o],e))return"?"===n?r:n}else if(W(t[n],e))return"?"===n?r:n;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i// Chrome for Android/iOS
],[p,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i// Microsoft Edge
],[p,[c,"Edge"]],[// Presto based
/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i// Opera
],[c,p],[/opios[\/ ]+([\w\.]+)/i// Opera mini on iphone >= 8.0
],[p,[c,j+" Mini"]],[/\bopr\/([\w\.]+)/i// Opera Webkit
],[p,[c,j]],[// Mixed
/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,// Trident based
/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,// Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,// Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i// Weibo
],[c,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i// UCBrowser
],[p,[c,"UC"+C]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[p,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i// WeChat
],[p,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i// Konqueror
],[p,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i// IE11
],[p,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i// Yandex
],[p,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i// Avast/AVG Secure Browser
],[[c,/(.+)/,"$1 Secure "+C],p],[/\bfocus\/([\w\.]+)/i// Firefox Focus
],[p,[c,R+" Focus"]],[/\bopt\/([\w\.]+)/i// Opera Touch
],[p,[c,j+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i// Coc Coc Browser
],[p,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i// Dolphin
],[p,[c,"Dolphin"]],[/coast\/([\w\.]+)/i// Opera Coast
],[p,[c,j+" Coast"]],[/miuibrowser\/([\w\.]+)/i// MIUI Browser
],[p,[c,"MIUI "+C]],[/fxios\/([-\w\.]+)/i// Firefox for iOS
],[p,[c,R]],[/\bqihu|(qi?ho?o?|360)browser/i// 360
],[[c,"360 "+C]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+C],p],[/(comodo_dragon)\/([\w\.]+)/i// Comodo Dragon
],[[c,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i// QQBrowser/Baidu App/2345 Browser
],[c,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i// LinkedIn App for iOS & Android
],[c],[// WebView
/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i// Facebook App for iOS & Android
],[[c,F],p],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i// Chromium/Instagram/Snapchat
],[c,p],[/\bgsa\/([\w\.]+) .*safari\//i// Google Search Appliance on iOS
],[p,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i// TikTok
],[p,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i// Chrome Headless
],[p,[c,_+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i// Chrome WebView
],[[c,_+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i// Android Browser
],[p,[c,"Android "+C]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i// Chrome/OmniWeb/Arora/Tizen/Nokia
],[c,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i// Mobile Safari
],[p,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i// Safari & Safari Mobile
],[p,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i// Safari < 3.0
],[c,[p,q,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,p],[// Gecko based
/(navigator|netscape\d?)\/([-\w\.]+)/i// Netscape
],[[c,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i// Firefox Reality
],[p,[c,R+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,// IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,// Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,// Other
/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,// Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
/(links) \(([\w\.]+)/i,/panasonic;(viera)/i// Panasonic Viera
],[c,p],[/(cobalt)\/([\w\.]+)/i// Cobalt
],[c,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i// AMD64 (x64)
],[[h,"amd64"]],[/(ia32(?=;))/i// IA32 (quicktime)
],[[h,B]],[/((?:i[346]|x)86)[;\)]/i// IA32 (x86)
],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i// ARM64
],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i// ARMHF
],[[h,"armhf"]],[// PocketPC mistakenly identified as PowerPC
/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i// PowerPC
],[[h,/ower/,"",B]],[/(sun4\w)[;\)]/i// SPARC
],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,B]]],device:[[//////////////////////////
// MOBILES & TABLETS
/////////////////////////
// Samsung
/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,A],[d,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,A],[d,g]],[// Apple
/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i// iPod/iPhone
],[u,[f,k],[d,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,k],[d,v]],[/(macintosh);/i],[u,[f,k]],[// Sharp
/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,D],[d,g]],[// Huawei
/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,T],[d,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[f,T],[d,g]],[// Xiaomi
/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i// Xiaomi Mi
],[[u,/_/g," "],[f,I],[d,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i// Mi Pad tablets
],[[u,/_/g," "],[f,I],[d,v]],[// OPPO
/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[d,g]],[// Vivo
/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[d,g]],[// Realme
/\b(rmx[12]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[d,g]],[// Motorola
/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,O],[d,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,O],[d,v]],[// LG
/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,"LG"],[d,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,"LG"],[d,g]],[// Lenovo
/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[d,v]],[// Nokia
/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[d,g]],[// Google
/(pixel c)\b/i// Google Pixel C
],[u,[f,P],[d,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i// Google Pixel
],[u,[f,P],[d,g]],[// Sony
/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,z],[d,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,z],[d,v]],[// OnePlus
/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[d,g]],[// Amazon
/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i// Kindle Fire HD
],[u,[f,x],[d,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i// Fire Phone
],[[u,/(.+)/g,"Fire Phone $1"],[f,x],[d,g]],[// BlackBerry
/(playbook);[-\w\),; ]+(rim)/i// BlackBerry PlayBook
],[u,f,[d,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i// BlackBerry 10
],[u,[f,E],[d,g]],[// Asus
/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,S],[d,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,S],[d,g]],[// HTC
/(nexus 9)/i// HTC Nexus 9
],[u,[f,"HTC"],[d,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,// ZTE
/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i// Alcatel/GeeksPhone/Nexian/Panasonic/Sony
],[f,[u,/_/g," "],[d,g]],[// Acer
/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[d,v]],[// Meizu
/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[d,g]],[// MIXED
/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,// BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i// OPPO
],[f,u,[d,g]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i// Vodafone
],[f,u,[d,v]],[/(surface duo)/i// Surface Duo
],[u,[f,N],[d,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i// Fairphone
],[u,[f,"Fairphone"],[d,g]],[/(u304aa)/i// AT&T
],[u,[f,"AT&T"],[d,g]],[/\bsie-(\w*)/i// Siemens
],[u,[f,"Siemens"],[d,g]],[/\b(rct\w+) b/i// RCA Tablets
],[u,[f,"RCA"],[d,v]],[/\b(venue[\d ]{2,7}) b/i// Dell Venue Tablets
],[u,[f,"Dell"],[d,v]],[/\b(q(?:mv|ta)\w+) b/i// Verizon Tablet
],[u,[f,"Verizon"],[d,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i// Barnes & Noble Tablet
],[u,[f,"Barnes & Noble"],[d,v]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[d,v]],[/\b(k88) b/i// ZTE K Series Tablet
],[u,[f,"ZTE"],[d,v]],[/\b(nx\d{3}j) b/i// ZTE Nubia
],[u,[f,"ZTE"],[d,g]],[/\b(gen\d{3}) b.+49h/i// Swiss GEN Mobile
],[u,[f,"Swiss"],[d,g]],[/\b(zur\d{3}) b/i// Swiss ZUR Tablet
],[u,[f,"Swiss"],[d,v]],[/\b((zeki)?tb.*\b) b/i// Zeki Tablets
],[u,[f,"Zeki"],[d,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i// Dragon Touch Tablet
],[[f,"Dragon Touch"],u,[d,v]],[/\b(ns-?\w{0,9}) b/i// Insignia Tablets
],[u,[f,"Insignia"],[d,v]],[/\b((nxa|next)-?\w{0,9}) b/i// NextBook Tablets
],[u,[f,"NextBook"],[d,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i// Voice Xtreme Phones
],[[f,"Voice"],u,[d,g]],[/\b(lvtel\-)?(v1[12]) b/i// LvTel Phones
],[[f,"LvTel"],u,[d,g]],[/\b(ph-1) /i// Essential PH-1
],[u,[f,"Essential"],[d,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i// Envizen Tablets
],[u,[f,"Envizen"],[d,v]],[/\b(trio[-\w\. ]+) b/i// MachSpeed Tablets
],[u,[f,"MachSpeed"],[d,v]],[/\btu_(1491) b/i// Rotor Tablets
],[u,[f,"Rotor"],[d,v]],[/(shield[\w ]+) b/i// Nvidia Shield Tablets
],[u,[f,"Nvidia"],[d,v]],[/(sprint) (\w+)/i// Sprint Phones
],[f,u,[d,g]],[/(kin\.[onetw]{3})/i// Microsoft Kin
],[[u,/\./g," "],[f,N],[d,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i// Zebra
],[u,[f,M],[d,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,M],[d,g]],[///////////////////
// SMARTTVS
///////////////////
/smart-tv.+(samsung)/i// Samsung
],[f,[d,y]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,A],[d,y]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i// LG SmartTV
],[[f,"LG"],[d,y]],[/(apple) ?tv/i// Apple TV
],[f,[u,k+" TV"],[d,y]],[/crkey/i// Google Chromecast
],[[u,_+"cast"],[f,P],[d,y]],[/droid.+aft(\w+)( bui|\))/i// Fire TV
],[u,[f,x],[d,y]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i// Sharp
],[u,[f,D],[d,y]],[/(bravia[\w ]+)( bui|\))/i// Sony
],[u,[f,z],[d,y]],[/(mitv-\w{5}) bui/i// Xiaomi
],[u,[f,I],[d,y]],[/Hbbtv.*(technisat) (.*);/i// TechniSAT
],[f,u,[d,y]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i// HbbTV devices
],[[f,H],[u,H],[d,y]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i// SmartTV from Unidentified Vendors
],[[d,y]],[///////////////////
// CONSOLES
///////////////////
/(ouya)/i,/(nintendo) ([wids3utch]+)/i// Nintendo
],[f,u,[d,m]],[/droid.+; (shield) bui/i// Nvidia
],[u,[f,"Nvidia"],[d,m]],[/(playstation [345portablevi]+)/i// Playstation
],[u,[f,z],[d,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i// Microsoft Xbox
],[u,[f,N],[d,m]],[///////////////////
// WEARABLES
///////////////////
/((pebble))app/i// Pebble
],[f,u,[d,b]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i// Apple Watch
],[u,[f,k],[d,b]],[/droid.+; (glass) \d/i// Google Glass
],[u,[f,P],[d,b]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,M],[d,b]],[/(quest( 2| pro)?)/i// Oculus Quest
],[u,[f,F],[d,b]],[///////////////////
// EMBEDDED
///////////////////
/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i// Tesla
],[f,[d,w]],[/(aeobc)\b/i// Echo Dot
],[u,[f,x],[d,w]],[////////////////////
// MIXED (GENERIC)
///////////////////
/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i// Android Phones from Unidentified Vendors
],[u,[d,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i// Android Tablets from Unidentified Vendors
],[u,[d,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i// Unidentifiable Tablet
],[[d,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i// Unidentifiable Mobile
],[[d,g]],[/(android[-\w\. ]{0,9});.+buil/i// Generic Android Device
],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i// EdgeHTML
],[p,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i// Blink
],[p,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i// Gecko
],[p,c]],os:[[// Windows
/microsoft (windows) (vista|xp)/i// Windows (iTunes)
],[c,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[p,q,Q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[p,q,Q]],[// iOS/macOS
/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i// Mac OS
],[[c,$],[p,/_/g,"."]],[// Mobile OSes
/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i// Android-x86/HarmonyOS
],[p,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i// Series 40
],[c,p],[/\(bb(10);/i// BlackBerry 10
],[p,[c,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i// Symbian
],[p,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i// Firefox OS
],[p,[c,R+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i// WebOS
],[p,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i// watchOS
],[p,[c,"watchOS"]],[// Google Chromecast
/crkey\/([\d\.]+)/i// Google Chromecast
],[p,[c,_+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i// Chromium OS
],[[c,L],p],[// Smart TVs
/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,// Console
/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,// Other
/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,// Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i// Haiku
],[c,p],[/(sunos) ?([\w\.\d]*)/i// Solaris
],[[c,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i// UNIX
],[c,p]]},Y=function(e,t){if(typeof e===a&&(t=e,e=r),!(this instanceof Y))return new Y(e,t).getResult();var m=typeof n!==i&&n.navigator?n.navigator:r,y=e||(m&&m.userAgent?m.userAgent:""),b=m&&m.userAgentData?m.userAgentData:r,w=t?U(K,t):K,x=m&&m.userAgent==y;return this.getBrowser=function(){var e,t={};return t[c]=r,t[p]=r,G.call(t,y,w.browser),t[s]=typeof(e=t[p])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:r,x&&m&&m.brave&&typeof m.brave.isBrave==o&&(t[c]="Brave"),t},this.getCPU=function(){var e={};return e[h]=r,G.call(e,y,w.cpu),e},this.getDevice=function(){var e={};return e[f]=r,e[u]=r,e[d]=r,G.call(e,y,w.device),x&&!e[d]&&b&&b.mobile&&(e[d]=g),x&&"Macintosh"==e[u]&&m&&typeof m.standalone!==i&&m.maxTouchPoints&&m.maxTouchPoints>2&&(e[u]="iPad",e[d]=v),e},this.getEngine=function(){var e={};return e[c]=r,e[p]=r,G.call(e,y,w.engine),e},this.getOS=function(){var e={};return e[c]=r,e[p]=r,G.call(e,y,w.os),x&&!e[c]&&b&&"Unknown"!=b.platform&&(e[c]=b.platform.replace(/chrome os/i,L).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return y},this.setUA=function(e){return y=typeof e===l&&e.length>350?H(e,350):e,this},this.setUA(y),this};Y.VERSION="1.0.36",Y.BROWSER=V([c,p,s]),Y.CPU=V([h]),Y.DEVICE=V([u,f,d,m,g,y,v,b,w]),Y.ENGINE=Y.OS=V([c,p]),typeof t!==i?(e.exports&&(t=e.exports=Y),t.UAParser=Y):typeof define===o&&define.amd?define(function(){return Y}):typeof n!==i&&(n.UAParser=Y);// jQuery/Zepto specific (optional)
// Note:
//   In AMD env the global scope should be kept clean, but jQuery is an exception.
//   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
//   and we should catch that.
var X=typeof n!==i&&(n.jQuery||n.Zepto);if(X&&!X.ua){var Z=new Y;X.ua=Z.getResult(),X.ua.get=function(){return Z.getUA()},X.ua.set=function(e){Z.setUA(e);var t=Z.getResult();for(var n in t)X.ua[n]=t[n]}}}("object"==typeof window?window:this)}),m.register("2tbKl",function(e,t){var n=m("c3YnH");function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return i.PropTypes=i,i}}),m.register("c3YnH",function(e,t){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),m.register("g4WQO",function(e,t){n(e.exports,"AsyncMode",function(){return r},function(e){return r=e}),n(e.exports,"ConcurrentMode",function(){return o},function(e){return o=e}),n(e.exports,"ContextConsumer",function(){return i},function(e){return i=e}),n(e.exports,"ContextProvider",function(){return a},function(e){return a=e}),n(e.exports,"Element",function(){return l},function(e){return l=e}),n(e.exports,"ForwardRef",function(){return s},function(e){return s=e}),n(e.exports,"Fragment",function(){return u},function(e){return u=e}),n(e.exports,"Lazy",function(){return c},function(e){return c=e}),n(e.exports,"Memo",function(){return d},function(e){return d=e}),n(e.exports,"Portal",function(){return f},function(e){return f=e}),n(e.exports,"Profiler",function(){return p},function(e){return p=e}),n(e.exports,"StrictMode",function(){return h},function(e){return h=e}),n(e.exports,"Suspense",function(){return m},function(e){return m=e}),n(e.exports,"isAsyncMode",function(){return g},function(e){return g=e}),n(e.exports,"isConcurrentMode",function(){return v},function(e){return v=e}),n(e.exports,"isContextConsumer",function(){return y},function(e){return y=e}),n(e.exports,"isContextProvider",function(){return b},function(e){return b=e}),n(e.exports,"isElement",function(){return w},function(e){return w=e}),n(e.exports,"isForwardRef",function(){return x},function(e){return x=e}),n(e.exports,"isFragment",function(){return k},function(e){return k=e}),n(e.exports,"isLazy",function(){return S},function(e){return S=e}),n(e.exports,"isMemo",function(){return E},function(e){return E=e}),n(e.exports,"isPortal",function(){return C},function(e){return C=e}),n(e.exports,"isProfiler",function(){return _},function(e){return _=e}),n(e.exports,"isStrictMode",function(){return R},function(e){return R=e}),n(e.exports,"isSuspense",function(){return P},function(e){return P=e}),n(e.exports,"isValidElementType",function(){return T},function(e){return T=e}),n(e.exports,"typeOf",function(){return N},function(e){return N=e});var r,o,i,a,l,s,u,c,d,f,p,h,m,g,v,y,b,w,x,k,S,E,C,_,R,P,T,N,O="function"==typeof Symbol&&Symbol.for,j=O?Symbol.for("react.element"):60103,A=O?Symbol.for("react.portal"):60106,D=O?Symbol.for("react.fragment"):60107,z=O?Symbol.for("react.strict_mode"):60108,I=O?Symbol.for("react.profiler"):60114,M=O?Symbol.for("react.provider"):60109,F=O?Symbol.for("react.context"):60110,L=O?Symbol.for("react.async_mode"):60111,$=O?Symbol.for("react.concurrent_mode"):60111,U=O?Symbol.for("react.forward_ref"):60112,V=O?Symbol.for("react.suspense"):60113,W=O?Symbol.for("react.suspense_list"):60120,B=O?Symbol.for("react.memo"):60115,H=O?Symbol.for("react.lazy"):60116,G=O?Symbol.for("react.block"):60121,q=O?Symbol.for("react.fundamental"):60117,Q=O?Symbol.for("react.responder"):60118,K=O?Symbol.for("react.scope"):60119;function Y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case j:switch(e=e.type){case L:case $:case D:case I:case z:case V:return e;default:switch(e=e&&e.$$typeof){case F:case U:case H:case B:case M:return e;default:return t}}case A:return t}}}function X(e){return Y(e)===$}r=L,o=$,i=F,a=M,l=j,s=U,u=D,c=H,d=B,f=A,p=I,h=z,m=V,g=function(e){return X(e)||Y(e)===L},v=X,y=function(e){return Y(e)===F},b=function(e){return Y(e)===M},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===j},x=function(e){return Y(e)===U},k=function(e){return Y(e)===D},S=function(e){return Y(e)===H},E=function(e){return Y(e)===B},C=function(e){return Y(e)===A},_=function(e){return Y(e)===I},R=function(e){return Y(e)===z},P=function(e){return Y(e)===V},T=function(e){return"string"==typeof e||"function"==typeof e||e===D||e===$||e===I||e===z||e===V||e===W||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===B||e.$$typeof===M||e.$$typeof===F||e.$$typeof===U||e.$$typeof===q||e.$$typeof===Q||e.$$typeof===K||e.$$typeof===G)},N=Y}),m.register("frWs0",function(e,t){n(e.exports,"default",function(){return i});/* global window */var r,o=m("2o9g9");r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==d?d:e;var i=(0,o.default)(r)}),m.register("2o9g9",function(e,t){n(e.exports,"default",function(){return r});function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}}),m.register("8TKuU",function(e,t){var n=m("dnnhb"),r=m("lAPp0"),o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?n.Buffer:void 0,l=a?a.isBuffer:void 0;e.exports=l||r}),m.register("dnnhb",function(e,t){var n=m("8vz42"),r="object"==typeof self&&self&&self.Object===Object&&self,o=n||r||Function("return this")();e.exports=o}),m.register("8vz42",function(e,t){/** Detect free variable `global` from Node.js. */var n="object"==typeof d&&d&&d.Object===Object&&d;e.exports=n}),m.register("lAPp0",function(e,t){e.exports=/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function(){return!1}}),m.register("1mm29",function(e,t){var n=m("8vz42"),r=t&&!t.nodeType&&t,o=r&&e&&!e.nodeType&&e,i=o&&o.exports===r&&n.process,a=function(){try{// Use `util.types` for Node.js 10+.
var e=o&&o.require&&o.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a});var g={};g=m("0qhf8"),m("bh6RR");var v={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),u8=(v=m("foRq4")).createRoot,v.hydrateRoot,m("bh6RR"),m("bh6RR"),m("bh6RR");/**
 * lucide-react v0.288.0 - ISC
 *//**
 * lucide-react v0.288.0 - ISC
 */var y=m("bh6RR"),b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(e,t)=>{let n=(0,y.forwardRef)(({color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:a,...l},s)=>(0,y.createElement)("svg",{ref:s,...b,width:r,height:r,stroke:n,strokeWidth:i?24*Number(o)/Number(r):o,className:`lucide lucide-${w(e)}`,...l},[...t.map(([e,t])=>(0,y.createElement)(e,t)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n},k=x("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}/* -------------------------------------------------------------------------------------------------
 * createContextScope
 * -----------------------------------------------------------------------------------------------*/function C(e,t=[]){let n=[],r=()=>{let t=n.map(e=>/*#__PURE__*/(0,y.createContext)(e));return function(n){let r=(null==n?void 0:n[e])||t;return(0,y.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[/* -----------------------------------------------------------------------------------------------
   * createContext
   * ---------------------------------------------------------------------------------------------*/function(t,r){let o=/*#__PURE__*/(0,y.createContext)(r),i=n.length;function a(t){let{scope:n,children:r,...a}=t,l=(null==n?void 0:n[e][i])||o,s=(0,y.useMemo)(()=>a,Object.values(a));return/*#__PURE__*/(0,y.createElement)(l.Provider,{value:s},r)}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let l=(null==a?void 0:a[e][i])||o,s=(0,y.useContext)(l);if(s)return s;if(void 0!==r)return r;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${n}\` must be used within \`${t}\``)}]},/* -------------------------------------------------------------------------------------------------
 * composeContextScopes
 * -----------------------------------------------------------------------------------------------*/function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{// We are calling a hook inside a callback which React warns against to avoid inconsistent
// renders, however, scoping doesn't have render side effects so we ignore the rule.
// eslint-disable-next-line react-hooks/rules-of-hooks
let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return(0,y.useMemo)(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */function _(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */function R(...e){// eslint-disable-next-line react-hooks/exhaustive-deps
return(0,y.useCallback)(_(...e),e)}var y=(m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"));/* -------------------------------------------------------------------------------------------------
 * Slot
 * -----------------------------------------------------------------------------------------------*/const P=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{children:n,...r}=e,o=(0,y.Children).toArray(n),i=o.find(O);if(i){// the new element to render is the one passed as a child of `Slottable`
let e=i.props.children,n=o.map(t=>t!==i?t:// because the new element will be the one rendered, we are only interested
    // in grabbing its children (`newElement.props.children`)
    (0,y.Children).count(e)>1?(0,y.Children).only(null):/*#__PURE__*/(0,y.isValidElement)(e)?e.props.children:null);return/*#__PURE__*/(0,y.createElement)(T,S({},r,{ref:t}),/*#__PURE__*/(0,y.isValidElement)(e)?/*#__PURE__*/(0,y.cloneElement)(e,void 0,n):null)}return/*#__PURE__*/(0,y.createElement)(T,S({},r,{ref:t}),n)});P.displayName="Slot";/* -------------------------------------------------------------------------------------------------
 * SlotClone
 * -----------------------------------------------------------------------------------------------*/const T=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{children:n,...r}=e;return/*#__PURE__*/(0,y.isValidElement)(n)?/*#__PURE__*/(0,y.cloneElement)(n,{...function(e,t){// all child props should override
let n={...t};for(let r in t){let o=e[r],i=t[r],a=/^on[A-Z]/.test(r);a?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?_(t,n.ref):n.ref}):(0,y.Children).count(n)>1?(0,y.Children).only(null):null});T.displayName="SlotClone";/* -------------------------------------------------------------------------------------------------
 * Slottable
 * -----------------------------------------------------------------------------------------------*/const N=({children:e})=>/*#__PURE__*/(0,y.createElement)(y.Fragment,null,e);/* ---------------------------------------------------------------------------------------------- */function O(e){return/*#__PURE__*/(0,y.isValidElement)(e)&&e.type===N}// We have resorted to returning slots directly rather than exposing primitives that can then
// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.
// This is because we encountered issues with generic types that cannot be statically analysed
// due to creating them dynamically via createCollection.
function j(e){/* -----------------------------------------------------------------------------------------------
   * CollectionProvider
   * ---------------------------------------------------------------------------------------------*/let t=e+"CollectionProvider",[n,r]=C(t),[o,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=e+"CollectionSlot",l=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{scope:n,children:r}=e,o=i(a,n),l=R(t,o.collectionRef);return /*@__PURE__*/f(y).createElement(P,{ref:l},r)}),s=e+"CollectionItemSlot",u="data-radix-collection-item",c=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{scope:n,children:r,...o}=e,a=/*@__PURE__*/f(y).useRef(null),l=R(t,a),c=i(s,n);return /*@__PURE__*/f(y).useEffect(()=>(c.itemMap.set(a,{ref:a,...o}),()=>void c.itemMap.delete(a))),/*@__PURE__*/f(y).createElement(P,{[u]:"",ref:l},r)});return[{Provider:e=>{let{scope:t,children:n}=e,r=/*@__PURE__*/f(y).useRef(null),i=/*@__PURE__*/f(y).useRef(new Map).current;return /*@__PURE__*/f(y).createElement(o,{scope:t,itemMap:i,collectionRef:r},n)},Slot:l,ItemSlot:c},/* -----------------------------------------------------------------------------------------------
   * useCollection
   * ---------------------------------------------------------------------------------------------*/function(t){let n=i(e+"CollectionConsumer",t),r=/*@__PURE__*/f(y).useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${u}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return r},r]}var y=(m("bh6RR"),m("bh6RR"));/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */const A=(null==globalThis?void 0:globalThis.document)?y.useLayoutEffect:()=>{},D=y["useId".toString()]||(()=>void 0);let z=0;function I(e){let[t,n]=y.useState(D());// React versions older than 18 will have client-side ids only.
return A(()=>{e||n(e=>null!=e?e:String(z++))},[e]),e||(t?`radix-${t}`:"")}var y=m("bh6RR");// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/const M=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=/*#__PURE__*/(0,y.forwardRef)((e,n)=>{let{asChild:r,...o}=e,i=r?P:t;return(0,y.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),/*#__PURE__*/(0,y.createElement)(i,S({},o,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */function F(e,t){e&&(0,v.flushSync)(()=>e.dispatchEvent(t))}/**
 * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
 * prop or avoid re-executing effects when passed as a dependency
 */function L(e){let t=(0,y.useRef)(e);return(0,y.useEffect)(()=>{t.current=e}),(0,y.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function $({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=(0,y.useState)(e),[r]=n,o=(0,y.useRef)(r),i=L(t);return(0,y.useEffect)(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,a=i?e:r,l=L(n),s=(0,y.useCallback)(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l]);return[a,s]}var y=(m("bh6RR"),m("bh6RR"),m("bh6RR"));const U=/*#__PURE__*/(0,y.createContext)(void 0);/* -----------------------------------------------------------------------------------------------*/function V(e){let t=(0,y.useContext)(U);return e||t||"ltr"}const W="rovingFocusGroup.onEntryFocus",B={bubbles:!1,cancelable:!0},H="RovingFocusGroup",[G,q,Q]=j(H),[K,Y]=C(H,[Q]),[X,Z]=K(H),J=/*#__PURE__*/(0,y.forwardRef)((e,t)=>/*#__PURE__*/(0,y.createElement)(G.Provider,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/(0,y.createElement)(G.Slot,{scope:e.__scopeRovingFocusGroup},/*#__PURE__*/(0,y.createElement)(ee,S({},e,{ref:t}))))),ee=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:s,onEntryFocus:u,...c}=e,d=(0,y.useRef)(null),f=R(t,d),p=V(i),[h=null,m]=$({prop:a,defaultProp:l,onChange:s}),[g,v]=(0,y.useState)(!1),b=L(u),w=q(n),x=(0,y.useRef)(!1),[k,C]=(0,y.useState)(0);return(0,y.useEffect)(()=>{let e=d.current;if(e)return e.addEventListener(W,b),()=>e.removeEventListener(W,b)},[b]),/*#__PURE__*/(0,y.createElement)(X,{scope:n,orientation:r,dir:p,loop:o,currentTabStopId:h,onItemFocus:(0,y.useCallback)(e=>m(e),[m]),onItemShiftTab:(0,y.useCallback)(()=>v(!0),[]),onFocusableItemAdd:(0,y.useCallback)(()=>C(e=>e+1),[]),onFocusableItemRemove:(0,y.useCallback)(()=>C(e=>e-1),[])},/*#__PURE__*/(0,y.createElement)(M.div,S({tabIndex:g||0===k?-1:0,"data-orientation":r},c,{ref:f,style:{outline:"none",...e.style},onMouseDown:E(e.onMouseDown,()=>{x.current=!0}),onFocus:E(e.onFocus,e=>{// We normally wouldn't need this check, because we already check
// that the focus is on the current target and not bubbling to it.
// We do this because Safari doesn't focus buttons when clicked, and
// instead, the wrapper will get focused and not through a bubbling event.
let t=!x.current;if(e.target===e.currentTarget&&t&&!g){let t=new CustomEvent(W,B);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=w().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===h),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);er(o)}}x.current=!1}),onBlur:E(e.onBlur,()=>v(!1))})))}),et=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:i,...a}=e,l=I(),s=i||l,u=Z("RovingFocusGroupItem",n),c=u.currentTabStopId===s,d=q(n),{onFocusableItemAdd:f,onFocusableItemRemove:p}=u;return(0,y.useEffect)(()=>{if(r)return f(),()=>p()},[r,f,p]),/*#__PURE__*/(0,y.createElement)(G.ItemSlot,{scope:n,id:s,focusable:r,active:o},/*#__PURE__*/(0,y.createElement)(M.span,S({tabIndex:c?0:-1,"data-orientation":u.orientation},a,{ref:t,onMouseDown:E(e.onMouseDown,e=>{// We prevent focusing non-focusable items on `mousedown`.
// Even though the item has tabIndex={-1}, that only means take it out of the tab order.
r?u.onItemFocus(s):e.preventDefault()}),onFocus:E(e.onFocus,()=>u.onItemFocus(s)),onKeyDown:E(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){u.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return en[o]}(e,u.orientation,u.dir);if(void 0!==t){e.preventDefault();let o=d().filter(e=>e.focusable),i=o.map(e=>e.ref.current);if("last"===t)i.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&i.reverse();let o=i.indexOf(e.currentTarget);i=u.loop?(n=i,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):i.slice(o+1)}/**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */setTimeout(()=>er(i))}})})))}),en={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function er(e){let t=document.activeElement;for(let n of e)// if focus is already where we want to go, we don't want to keep going through the candidates
if(n===t||(n.focus(),document.activeElement!==t))return}var y=m("bh6RR");const eo=e=>{let{present:t,children:n}=e,r=/* -------------------------------------------------------------------------------------------------
 * usePresence
 * -----------------------------------------------------------------------------------------------*/function(e){var t;let[n,r]=(0,y.useState)(),o=(0,y.useRef)({}),i=(0,y.useRef)(e),a=(0,y.useRef)("none"),l=e?"mounted":"unmounted",[s,u]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,y.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},l));return(0,y.useEffect)(()=>{let e=ei(o.current);a.current="mounted"===s?e:"none"},[s]),A(()=>{let t=o.current,n=i.current,r=n!==e;if(r){let r=a.current,o=ei(t);e?u("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?u("UNMOUNT"):n&&r!==o?u("ANIMATION_OUT"):u("UNMOUNT"),i.current=e}},[e,u]),A(()=>{if(n){/**
       * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
       * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
       * make sure we only trigger ANIMATION_END for the currently active animation.
       */let e=e=>{let t=ei(o.current),r=t.includes(e.animationName);e.target===n&&r&&// By manually flushing we ensure they sync within a frame, removing the flash.
(0,v.flushSync)(()=>u("ANIMATION_END"))},t=e=>{e.target===n&&(a.current=ei(o.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}u("ANIMATION_END")},[n,u]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,y.useCallback)(e=>{e&&(o.current=getComputedStyle(e)),r(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):(0,y.Children).only(n),i=R(r.ref,o.ref),a="function"==typeof n;return a||r.isPresent?/*#__PURE__*/(0,y.cloneElement)(o,{ref:i}):null};/* -----------------------------------------------------------------------------------------------*/function ei(e){return(null==e?void 0:e.animationName)||"none"}eo.displayName="Presence";/* -------------------------------------------------------------------------------------------------
 * Tabs
 * -----------------------------------------------------------------------------------------------*/const ea="Tabs",[el,es]=C(ea,[Y]),eu=Y(),[ec,ed]=el(ea),ef=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",dir:l,activationMode:s="automatic",...u}=e,c=V(l),[d,f]=$({prop:r,onChange:o,defaultProp:i});return/*#__PURE__*/(0,y.createElement)(ec,{scope:n,baseId:I(),value:d,onValueChange:f,orientation:a,dir:c,activationMode:s},/*#__PURE__*/(0,y.createElement)(M.div,S({dir:c,"data-orientation":a},u,{ref:t})))}),ep=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,i=ed("TabsList",n),a=eu(n);return/*#__PURE__*/(0,y.createElement)(J,S({asChild:!0},a,{orientation:i.orientation,dir:i.dir,loop:r}),/*#__PURE__*/(0,y.createElement)(M.div,S({role:"tablist","aria-orientation":i.orientation},o,{ref:t})))}),eh=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,disabled:o=!1,...i}=e,a=ed("TabsTrigger",n),l=eu(n),s=eg(a.baseId,r),u=ev(a.baseId,r),c=r===a.value;return/*#__PURE__*/(0,y.createElement)(et,S({asChild:!0},l,{focusable:!o,active:c}),/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button",role:"tab","aria-selected":c,"aria-controls":u,"data-state":c?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:s},i,{ref:t,onMouseDown:E(e.onMouseDown,e=>{// only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
// but not when the control key is pressed (avoiding MacOS right click)
o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(r)}),onKeyDown:E(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(r)}),onFocus:E(e.onFocus,()=>{// handle "automatic" activation if necessary
// ie. activate tab following focus
let e="manual"!==a.activationMode;c||o||!e||a.onValueChange(r)})})))}),em=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,forceMount:o,children:i,...a}=e,l=ed("TabsContent",n),s=eg(l.baseId,r),u=ev(l.baseId,r),c=r===l.value,d=(0,y.useRef)(c);return(0,y.useEffect)(()=>{let e=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(e)},[]),/*#__PURE__*/(0,y.createElement)(eo,{present:o||c},({present:n})=>/*#__PURE__*/(0,y.createElement)(M.div,S({"data-state":c?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":s,hidden:!n,id:u,tabIndex:0},a,{ref:t,style:{...e.style,animationDuration:d.current?"0s":void 0}}),n&&i))});/* ---------------------------------------------------------------------------------------------- */function eg(e,t){return`${e}-trigger-${t}`}function ev(e,t){return`${e}-content-${t}`}function ey(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r}var eb=/^\[(.+)\]$/;function ew(e,t){var n=e;return t.split("-").forEach(function(e){n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n}var ex=/\s+/;/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */function ek(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){if("string"==typeof t)return t;for(var n,r="",o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);return r}(e))&&(r&&(r+=" "),r+=t);return r}function eS(e){var t=function(t){return t[e]||[]};return t.isThemeGetter=!0,t}var eE=/^\[(?:([a-z-]+):)?(.+)\]$/i,eC=/^\d+\/\d+$/,e_=/*#__PURE__*/new Set(["px","full","screen"]),eR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eP=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,eT=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function eN(e){return eI(e)||e_.has(e)||eC.test(e)||eO(e)}function eO(e){return eW(e,"length",eB)}function ej(e){return eW(e,"size",eH)}function eA(e){return eW(e,"position",eH)}function eD(e){return eW(e,"url",eG)}function ez(e){return eW(e,"number",eI)}function eI(e){return!Number.isNaN(Number(e))}function eM(e){return e.endsWith("%")&&eI(e.slice(0,-1))}function eF(e){return eq(e)||eW(e,"number",eq)}function eL(e){return eE.test(e)}function e$(){return!0}function eU(e){return eR.test(e)}function eV(e){return eW(e,"",eQ)}function eW(e,t,n){var r=eE.exec(e);return!!r&&(r[1]?r[1]===t:n(r[2]))}function eB(e){return eP.test(e)}function eH(){return!1}function eG(e){return e.startsWith("url(")}function eq(e){return Number.isInteger(Number(e))}function eQ(e){return eT.test(e)}var eK=function(){for(var e,t,n,r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];var a=function(r){var i=o[0];return t=(e=function(e){var t,n,r,o,i,a,l,s,u,c,d;return{cache:// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function o(o,i){n.set(o,i),++t>e&&(t=0,r=n,n=new Map)}return{get:function(e){var t=n.get(e);return void 0!==t?t:void 0!==(t=r.get(e))?(o(e,t),t):void 0},set:function(e,t){n.has(e)?n.set(e,t):o(e,t)}}}(e.cacheSize),splitModifiers:(n=1===(t=e.separator||":").length,r=t[0],o=t.length,function(e){for(var i,a=[],l=0,s=0,u=0;u<e.length;u++){var c=e[u];if(0===l){if(c===r&&(n||e.slice(u,u+o)===t)){a.push(e.slice(s,u)),s=u+o;continue}if("/"===c){i=u;continue}}"["===c?l++:"]"===c&&l--}var d=0===a.length?e:e.substring(s),f=d.startsWith("!"),p=f?d.substring(1):d;return{modifiers:a,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}),...(s=e.theme,u=e.prefix,c={nextPart:new Map,validators:[]},(d=Object.entries(e.classGroups),u?d.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):d).forEach(function(e){var t=e[0];(function e(t,n,r,o){t.forEach(function(t){if("string"==typeof t){(""===t?n:ew(n,t)).classGroupId=r;return}if("function"==typeof t){if(t.isThemeGetter){e(t(o),n,r,o);return}n.validators.push({validator:t,classGroupId:r});return}Object.entries(t).forEach(function(t){var i=t[0];e(t[1],ew(n,i),r,o)})})})(e[1],c,t,s)}),i=e.conflictingClassGroups,l=void 0===(a=e.conflictingClassGroupModifiers)?{}:a,{getClassGroupId:function(e){var t=e.split("-");return""===t[0]&&1!==t.length&&t.shift(),function e(t,n){if(0===t.length)return n.classGroupId;var r=t[0],o=n.nextPart.get(r),i=o?e(t.slice(1),o):void 0;if(i)return i;if(0!==n.validators.length){var a=t.join("-");return n.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(t,c)||function(e){if(eb.test(e)){var t=eb.exec(e)[1],n=t?.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}(e)},getConflictingClassGroupIds:function(e,t){var n=i[e]||[];return t&&l[e]?[].concat(n,l[e]):n}})}}(o.slice(1).reduce(function(e,t){return t(e)},i()))).cache.get,n=e.cache.set,a=l,l(r)};function l(r){var o,i,a,l,s,u=t(r);if(u)return u;var c=(i=(o=e).splitModifiers,a=o.getClassGroupId,l=o.getConflictingClassGroupIds,s=new Set,r.trim().split(ex).map(function(e){var t=i(e),n=t.modifiers,r=t.hasImportantModifier,o=t.baseClassName,l=t.maybePostfixModifierPosition,s=a(l?o.substring(0,l):o),u=!!l;if(!s){if(!l||!(s=a(o)))return{isTailwindClass:!1,originalClassName:e};u=!1}var c=/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */(function(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(e){"["===e[0]?(t.push.apply(t,n.sort().concat([e])),n=[]):n.push(e)}),t.push.apply(t,n.sort()),t})(n).join(":");return{isTailwindClass:!0,modifierId:r?c+"!":c,classGroupId:s,originalClassName:e,hasPostfixModifier:u}}).reverse()// Last class in conflict wins, so we need to filter conflicting classes in reverse order.
.filter(function(e){if(!e.isTailwindClass)return!0;var t=e.modifierId,n=e.classGroupId,r=e.hasPostfixModifier,o=t+n;return!s.has(o)&&(s.add(o),l(n,r).forEach(function(e){return s.add(t+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return n(r,c),c}return function(){return a(ek.apply(null,arguments))}}(function(){var e=eS("colors"),t=eS("spacing"),n=eS("blur"),r=eS("brightness"),o=eS("borderColor"),i=eS("borderRadius"),a=eS("borderSpacing"),l=eS("borderWidth"),s=eS("contrast"),u=eS("grayscale"),c=eS("hueRotate"),d=eS("invert"),f=eS("gap"),p=eS("gradientColorStops"),h=eS("gradientColorStopPositions"),m=eS("inset"),g=eS("margin"),v=eS("opacity"),y=eS("padding"),b=eS("saturate"),w=eS("scale"),x=eS("sepia"),k=eS("skew"),S=eS("space"),E=eS("translate"),C=function(){return["auto","contain","none"]},_=function(){return["auto","hidden","clip","visible","scroll"]},R=function(){return["auto",eL,t]},P=function(){return[eL,t]},T=function(){return["",eN]},N=function(){return["auto",eI,eL]},O=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},j=function(){return["solid","dashed","dotted","double","none"]},A=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},D=function(){return["start","end","center","between","around","evenly","stretch"]},z=function(){return["","0",eL]},I=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},M=function(){return[eI,ez]},F=function(){return[eI,eL]};return{cacheSize:500,theme:{colors:[e$],spacing:[eN],blur:["none","",eU,eL],brightness:M(),borderColor:[e],borderRadius:["none","","full",eU,eL],borderSpacing:P(),borderWidth:T(),contrast:M(),grayscale:z(),hueRotate:F(),invert:z(),gap:P(),gradientColorStops:[e],gradientColorStopPositions:[eM,eO],inset:R(),margin:R(),opacity:M(),padding:P(),saturate:M(),scale:M(),sepia:z(),skew:F(),space:P(),translate:P()},classGroups:{// Layout
/**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */aspect:[{aspect:["auto","square","video",eL]}],/**
       * Container
       * @see https://tailwindcss.com/docs/container
       */container:["container"],/**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */columns:[{columns:[eU]}],/**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */"break-after":[{"break-after":I()}],/**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */"break-before":[{"break-before":I()}],/**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],/**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */"box-decoration":[{"box-decoration":["slice","clone"]}],/**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */box:[{box:["border","content"]}],/**
       * Display
       * @see https://tailwindcss.com/docs/display
       */display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],/**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */float:[{float:["right","left","none"]}],/**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */clear:[{clear:["left","right","both","none"]}],/**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */isolation:["isolate","isolation-auto"],/**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],/**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */"object-position":[{object:[].concat(O(),[eL])}],/**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */overflow:[{overflow:_()}],/**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-x":[{"overflow-x":_()}],/**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */"overflow-y":[{"overflow-y":_()}],/**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */overscroll:[{overscroll:C()}],/**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-x":[{"overscroll-x":C()}],/**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */"overscroll-y":[{"overscroll-y":C()}],/**
       * Position
       * @see https://tailwindcss.com/docs/position
       */position:["static","fixed","absolute","relative","sticky"],/**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */inset:[{inset:[m]}],/**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-x":[{"inset-x":[m]}],/**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */"inset-y":[{"inset-y":[m]}],/**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */start:[{start:[m]}],/**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */end:[{end:[m]}],/**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */top:[{top:[m]}],/**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */right:[{right:[m]}],/**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */bottom:[{bottom:[m]}],/**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */left:[{left:[m]}],/**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */visibility:["visible","invisible","collapse"],/**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */z:[{z:["auto",eF]}],// Flexbox and Grid
/**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */basis:[{basis:R()}],/**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],/**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],/**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */flex:[{flex:["1","auto","initial","none",eL]}],/**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */grow:[{grow:z()}],/**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */shrink:[{shrink:z()}],/**
       * Order
       * @see https://tailwindcss.com/docs/order
       */order:[{order:["first","last","none",eF]}],/**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */"grid-cols":[{"grid-cols":[e$]}],/**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start-end":[{col:["auto",{span:["full",eF]},eL]}],/**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */"col-start":[{"col-start":N()}],/**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */"col-end":[{"col-end":N()}],/**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */"grid-rows":[{"grid-rows":[e$]}],/**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start-end":[{row:["auto",{span:[eF]},eL]}],/**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */"row-start":[{"row-start":N()}],/**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */"row-end":[{"row-end":N()}],/**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],/**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */"auto-cols":[{"auto-cols":["auto","min","max","fr",eL]}],/**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */"auto-rows":[{"auto-rows":["auto","min","max","fr",eL]}],/**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */gap:[{gap:[f]}],/**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */"gap-x":[{"gap-x":[f]}],/**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */"gap-y":[{"gap-y":[f]}],/**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */"justify-content":[{justify:["normal"].concat(D())}],/**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */"justify-items":[{"justify-items":["start","end","center","stretch"]}],/**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],/**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */"align-content":[{content:["normal"].concat(D(),["baseline"])}],/**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */"align-items":[{items:["start","end","center","baseline","stretch"]}],/**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],/**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */"place-content":[{"place-content":[].concat(D(),["baseline"])}],/**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],/**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */"place-self":[{"place-self":["auto","start","end","center","stretch"]}],// Spacing
/**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */p:[{p:[y]}],/**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */px:[{px:[y]}],/**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */py:[{py:[y]}],/**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ps:[{ps:[y]}],/**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */pe:[{pe:[y]}],/**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */pt:[{pt:[y]}],/**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */pr:[{pr:[y]}],/**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */pb:[{pb:[y]}],/**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */pl:[{pl:[y]}],/**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */m:[{m:[g]}],/**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */mx:[{mx:[g]}],/**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */my:[{my:[g]}],/**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ms:[{ms:[g]}],/**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */me:[{me:[g]}],/**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */mt:[{mt:[g]}],/**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */mr:[{mr:[g]}],/**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */mb:[{mb:[g]}],/**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ml:[{ml:[g]}],/**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */"space-x":[{"space-x":[S]}],/**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-x-reverse":["space-x-reverse"],/**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */"space-y":[{"space-y":[S]}],/**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */"space-y-reverse":["space-y-reverse"],// Sizing
/**
       * Width
       * @see https://tailwindcss.com/docs/width
       */w:[{w:["auto","min","max","fit",eL,t]}],/**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */"min-w":[{"min-w":["min","max","fit",eL,eN]}],/**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[eU]},eU,eL]}],/**
       * Height
       * @see https://tailwindcss.com/docs/height
       */h:[{h:[eL,t,"auto","min","max","fit"]}],/**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */"min-h":[{"min-h":["min","max","fit",eL,eN]}],/**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */"max-h":[{"max-h":[eL,t,"min","max","fit"]}],// Typography
/**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */"font-size":[{text:["base",eU,eO]}],/**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */"font-smoothing":["antialiased","subpixel-antialiased"],/**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */"font-style":["italic","not-italic"],/**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ez]}],/**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */"font-family":[{font:[e$]}],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-normal":["normal-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-ordinal":["ordinal"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-slashed-zero":["slashed-zero"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-figure":["lining-nums","oldstyle-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-spacing":["proportional-nums","tabular-nums"],/**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */"fvn-fraction":["diagonal-fractions","stacked-fractons"],/**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",eL]}],/**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */"line-clamp":[{"line-clamp":["none",eI,ez]}],/**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */leading:[{leading:["none","tight","snug","normal","relaxed","loose",eL,eN]}],/**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */"list-image":[{"list-image":["none",eL]}],/**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */"list-style-type":[{list:["none","disc","decimal",eL]}],/**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */"list-style-position":[{list:["inside","outside"]}],/**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */"placeholder-color":[{placeholder:[e]}],/**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */"placeholder-opacity":[{"placeholder-opacity":[v]}],/**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */"text-alignment":[{text:["left","center","right","justify","start","end"]}],/**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */"text-color":[{text:[e]}],/**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */"text-opacity":[{"text-opacity":[v]}],/**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */"text-decoration":["underline","overline","line-through","no-underline"],/**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */"text-decoration-style":[{decoration:[].concat(j(),["wavy"])}],/**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */"text-decoration-thickness":[{decoration:["auto","from-font",eN]}],/**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */"underline-offset":[{"underline-offset":["auto",eL,eN]}],/**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */"text-decoration-color":[{decoration:[e]}],/**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */"text-transform":["uppercase","lowercase","capitalize","normal-case"],/**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */"text-overflow":["truncate","text-ellipsis","text-clip"],/**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */indent:[{indent:P()}],/**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",eL]}],/**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],/**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */break:[{break:["normal","words","all","keep"]}],/**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */hyphens:[{hyphens:["none","manual","auto"]}],/**
       * Content
       * @see https://tailwindcss.com/docs/content
       */content:[{content:["none",eL]}],// Backgrounds
/**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */"bg-attachment":[{bg:["fixed","local","scroll"]}],/**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */"bg-clip":[{"bg-clip":["border","padding","content","text"]}],/**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */"bg-opacity":[{"bg-opacity":[v]}],/**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */"bg-origin":[{"bg-origin":["border","padding","content"]}],/**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */"bg-position":[{bg:[].concat(O(),[eA])}],/**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],/**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */"bg-size":[{bg:["auto","cover","contain",ej]}],/**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},eD]}],/**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */"bg-color":[{bg:[e]}],/**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from-pos":[{from:[h]}],/**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via-pos":[{via:[h]}],/**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to-pos":[{to:[h]}],/**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-from":[{from:[p]}],/**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-via":[{via:[p]}],/**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */"gradient-to":[{to:[p]}],// Borders
/**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */rounded:[{rounded:[i]}],/**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-s":[{"rounded-s":[i]}],/**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-e":[{"rounded-e":[i]}],/**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-t":[{"rounded-t":[i]}],/**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-r":[{"rounded-r":[i]}],/**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-b":[{"rounded-b":[i]}],/**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-l":[{"rounded-l":[i]}],/**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ss":[{"rounded-ss":[i]}],/**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-se":[{"rounded-se":[i]}],/**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-ee":[{"rounded-ee":[i]}],/**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-es":[{"rounded-es":[i]}],/**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tl":[{"rounded-tl":[i]}],/**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-tr":[{"rounded-tr":[i]}],/**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-br":[{"rounded-br":[i]}],/**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */"rounded-bl":[{"rounded-bl":[i]}],/**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */"border-w":[{border:[l]}],/**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-x":[{"border-x":[l]}],/**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-y":[{"border-y":[l]}],/**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-s":[{"border-s":[l]}],/**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-e":[{"border-e":[l]}],/**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-t":[{"border-t":[l]}],/**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-r":[{"border-r":[l]}],/**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-b":[{"border-b":[l]}],/**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */"border-w-l":[{"border-l":[l]}],/**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */"border-opacity":[{"border-opacity":[v]}],/**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */"border-style":[{border:[].concat(j(),["hidden"])}],/**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x":[{"divide-x":[l]}],/**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-x-reverse":["divide-x-reverse"],/**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y":[{"divide-y":[l]}],/**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */"divide-y-reverse":["divide-y-reverse"],/**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */"divide-opacity":[{"divide-opacity":[v]}],/**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */"divide-style":[{divide:j()}],/**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */"border-color":[{border:[o]}],/**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-x":[{"border-x":[o]}],/**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-y":[{"border-y":[o]}],/**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-t":[{"border-t":[o]}],/**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-r":[{"border-r":[o]}],/**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-b":[{"border-b":[o]}],/**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */"border-color-l":[{"border-l":[o]}],/**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */"divide-color":[{divide:[o]}],/**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */"outline-style":[{outline:[""].concat(j())}],/**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */"outline-offset":[{"outline-offset":[eL,eN]}],/**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */"outline-w":[{outline:[eN]}],/**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */"outline-color":[{outline:[e]}],/**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w":[{ring:T()}],/**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */"ring-w-inset":["ring-inset"],/**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */"ring-color":[{ring:[e]}],/**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */"ring-opacity":[{"ring-opacity":[v]}],/**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */"ring-offset-w":[{"ring-offset":[eN]}],/**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */"ring-offset-color":[{"ring-offset":[e]}],// Effects
/**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */shadow:[{shadow:["","inner","none",eU,eV]}],/**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */"shadow-color":[{shadow:[e$]}],/**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */opacity:[{opacity:[v]}],/**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */"mix-blend":[{"mix-blend":A()}],/**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */"bg-blend":[{"bg-blend":A()}],// Filters
/**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */filter:[{filter:["","none"]}],/**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */blur:[{blur:[n]}],/**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */brightness:[{brightness:[r]}],/**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */contrast:[{contrast:[s]}],/**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */"drop-shadow":[{"drop-shadow":["","none",eU,eL]}],/**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */grayscale:[{grayscale:[u]}],/**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */"hue-rotate":[{"hue-rotate":[c]}],/**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */invert:[{invert:[d]}],/**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */saturate:[{saturate:[b]}],/**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */sepia:[{sepia:[x]}],/**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */"backdrop-filter":[{"backdrop-filter":["","none"]}],/**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */"backdrop-blur":[{"backdrop-blur":[n]}],/**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */"backdrop-brightness":[{"backdrop-brightness":[r]}],/**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */"backdrop-contrast":[{"backdrop-contrast":[s]}],/**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */"backdrop-grayscale":[{"backdrop-grayscale":[u]}],/**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],/**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */"backdrop-invert":[{"backdrop-invert":[d]}],/**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */"backdrop-opacity":[{"backdrop-opacity":[v]}],/**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */"backdrop-saturate":[{"backdrop-saturate":[b]}],/**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */"backdrop-sepia":[{"backdrop-sepia":[x]}],// Tables
/**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */"border-collapse":[{border:["collapse","separate"]}],/**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing":[{"border-spacing":[a]}],/**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-x":[{"border-spacing-x":[a]}],/**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */"border-spacing-y":[{"border-spacing-y":[a]}],/**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */"table-layout":[{table:["auto","fixed"]}],/**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */caption:[{caption:["top","bottom"]}],// Transitions and Animation
/**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */transition:[{transition:["none","all","","colors","opacity","shadow","transform",eL]}],/**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */duration:[{duration:F()}],/**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ease:[{ease:["linear","in","out","in-out",eL]}],/**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */delay:[{delay:F()}],/**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */animate:[{animate:["none","spin","ping","pulse","bounce",eL]}],// Transforms
/**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */transform:[{transform:["","gpu","none"]}],/**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */scale:[{scale:[w]}],/**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */"scale-x":[{"scale-x":[w]}],/**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */"scale-y":[{"scale-y":[w]}],/**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */rotate:[{rotate:[eF,eL]}],/**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */"translate-x":[{"translate-x":[E]}],/**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */"translate-y":[{"translate-y":[E]}],/**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */"skew-x":[{"skew-x":[k]}],/**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */"skew-y":[{"skew-y":[k]}],/**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",eL]}],// Interactivity
/**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */accent:[{accent:["auto",e]}],/**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */appearance:["appearance-none"],/**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",eL]}],/**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */"caret-color":[{caret:[e]}],/**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */"pointer-events":[{"pointer-events":["none","auto"]}],/**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */resize:[{resize:["none","y","x",""]}],/**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */"scroll-behavior":[{scroll:["auto","smooth"]}],/**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-m":[{"scroll-m":P()}],/**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mx":[{"scroll-mx":P()}],/**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-my":[{"scroll-my":P()}],/**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ms":[{"scroll-ms":P()}],/**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-me":[{"scroll-me":P()}],/**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mt":[{"scroll-mt":P()}],/**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mr":[{"scroll-mr":P()}],/**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-mb":[{"scroll-mb":P()}],/**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */"scroll-ml":[{"scroll-ml":P()}],/**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-p":[{"scroll-p":P()}],/**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-px":[{"scroll-px":P()}],/**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-py":[{"scroll-py":P()}],/**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-ps":[{"scroll-ps":P()}],/**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pe":[{"scroll-pe":P()}],/**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pt":[{"scroll-pt":P()}],/**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pr":[{"scroll-pr":P()}],/**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pb":[{"scroll-pb":P()}],/**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */"scroll-pl":[{"scroll-pl":P()}],/**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */"snap-align":[{snap:["start","end","center","align-none"]}],/**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */"snap-stop":[{snap:["normal","always"]}],/**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-type":[{snap:["none","x","y","both"]}],/**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */"snap-strictness":[{snap:["mandatory","proximity"]}],/**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],/**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */select:[{select:["none","text","all","auto"]}],/**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */"will-change":[{"will-change":["auto","scroll","contents","transform",eL]}],// SVG
/**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */fill:[{fill:[e,"none"]}],/**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */"stroke-w":[{stroke:[eN,ez]}],/**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */stroke:[{stroke:[e,"none"]}],// Accessibility
/**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function eY(...e){return eK(ey(e))}const eX=(e,t)=>Math.floor(Math.random()*(t-e))+e,eZ=(e,t,n=1)=>{let r=[];void 0===t&&(t=e,e=0);for(let o=e;o<t;o+=n)r.push(o);return r},eJ=e=>{let t=e.length,n;// While there remain elements to shuffle.
for(;t>0;)// Pick a remaining element.
n=Math.floor(Math.random()*t),t--,// And swap it with the current element.
[e[t],e[n]]=[e[n],e[t]];return e},e0=(e,t)=>{let n=[];for(let r=0;r<t.length;r+=e){let o=t.slice(r,r+e);n.push(o)}return n},e1=(e,t)=>[...e].filter(e=>!t.includes(e)),e2=(e,t)=>{// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
let n=e1(e,t);return 0===n.length&&e.length===t.length},e3=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(ep,{ref:n,className:eY("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));e3.displayName=ep.displayName;const e4=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(eh,{ref:n,className:eY("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));e4.displayName=eh.displayName;const e5=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(em,{ref:n,className:eY("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));e5.displayName=em.displayName;var y=(m("bh6RR"),m("bh6RR"),m("bh6RR"));/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/const e6="Collapsible",[e9,e8]=C(e6),[e7,te]=e9(e6),tt=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:r,defaultOpen:o,disabled:i,onOpenChange:a,...l}=e,[s=!1,u]=$({prop:r,defaultProp:o,onChange:a});return/*#__PURE__*/(0,y.createElement)(e7,{scope:n,disabled:i,contentId:I(),open:s,onOpenToggle:(0,y.useCallback)(()=>u(e=>!e),[u])},/*#__PURE__*/(0,y.createElement)(M.div,S({"data-state":ta(s),"data-disabled":i?"":void 0},l,{ref:t})))}),tn=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...r}=e,o=te("CollapsibleTrigger",n);return/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":ta(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled},r,{ref:t,onClick:E(e.onClick,o.onOpenToggle)}))}),tr="CollapsibleContent",to=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{forceMount:n,...r}=e,o=te(tr,e.__scopeCollapsible);return/*#__PURE__*/(0,y.createElement)(eo,{present:n||o.open},({present:e})=>/*#__PURE__*/(0,y.createElement)(ti,S({},r,{ref:t,present:e})))}),ti=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:r,children:o,...i}=e,a=te(tr,n),[l,s]=(0,y.useState)(r),u=(0,y.useRef)(null),c=R(t,u),d=(0,y.useRef)(0),f=d.current,p=(0,y.useRef)(0),h=p.current,m=a.open||l,g=(0,y.useRef)(m),v=(0,y.useRef)();return(0,y.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),A(()=>{let e=u.current;if(e){v.current=v.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();d.current=t.height,p.current=t.width,g.current||(e.style.transitionDuration=v.current.transitionDuration,e.style.animationName=v.current.animationName),s(r)}/**
     * depends on `context.open` because it will change to `false`
     * when a close is triggered but `present` will be `false` on
     * animation end (so when close finishes). This allows us to
     * retrieve the dimensions *before* closing.
     */},[a.open,r]),/*#__PURE__*/(0,y.createElement)(M.div,S({"data-state":ta(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!m},i,{ref:c,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":h?`${h}px`:void 0,...e.style}}),m&&o)});/* -----------------------------------------------------------------------------------------------*/function ta(e){return e?"open":"closed"}/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/const tl="Accordion",ts=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[tu,tc,td]=j(tl),[tf,tp]=C(tl,[td,e8]),th=e8(),tm=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{type:n,...r}=e;return /*@__PURE__*/f(y).createElement(tu.Provider,{scope:e.__scopeAccordion},"multiple"===n?/*@__PURE__*/f(y).createElement(tx,S({},r,{ref:t})):/*@__PURE__*/f(y).createElement(tw,S({},r,{ref:t})))});tm.propTypes={type(e){let t=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===e.type&&"string"==typeof t?Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===e.type&&Array.isArray(t)?Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};/* -----------------------------------------------------------------------------------------------*/const[tg,tv]=tf(tl),[ty,tb]=tf(tl,{collapsible:!1}),tw=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},collapsible:i=!1,...a}=e,[l,s]=$({prop:n,defaultProp:r,onChange:o});return /*@__PURE__*/f(y).createElement(tg,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:s,onItemClose:/*@__PURE__*/f(y).useCallback(()=>i&&s(""),[i,s])},/*@__PURE__*/f(y).createElement(ty,{scope:e.__scopeAccordion,collapsible:i},/*@__PURE__*/f(y).createElement(tE,S({},a,{ref:t}))))}),tx=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{value:n,defaultValue:r,onValueChange:o=()=>{},...i}=e,[a=[],l]=$({prop:n,defaultProp:r,onChange:o}),s=/*@__PURE__*/f(y).useCallback(e=>l((t=[])=>[...t,e]),[l]),u=/*@__PURE__*/f(y).useCallback(e=>l((t=[])=>t.filter(t=>t!==e)),[l]);return /*@__PURE__*/f(y).createElement(tg,{scope:e.__scopeAccordion,value:a,onItemOpen:s,onItemClose:u},/*@__PURE__*/f(y).createElement(ty,{scope:e.__scopeAccordion,collapsible:!0},/*@__PURE__*/f(y).createElement(tE,S({},i,{ref:t}))))}),[tk,tS]=tf(tl),tE=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{__scopeAccordion:n,disabled:r,dir:o,orientation:i="vertical",...a}=e,l=/*@__PURE__*/f(y).useRef(null),s=R(l,t),u=tc(n),c=V(o),d="ltr"===c,p=E(e.onKeyDown,e=>{var t;if(!ts.includes(e.key))return;let n=e.target,r=u().filter(e=>{var t;return!(null!==(t=e.ref.current)&&void 0!==t&&t.disabled)}),o=r.findIndex(e=>e.ref.current===n),a=r.length;if(-1===o)return;// Prevents page scroll while user is navigating
e.preventDefault();let l=o,s=a-1,c=()=>{(l=o+1)>s&&(l=0)},f=()=>{(l=o-1)<0&&(l=s)};switch(e.key){case"Home":l=0;break;case"End":l=s;break;case"ArrowRight":"horizontal"===i&&(d?c():f());break;case"ArrowDown":"vertical"===i&&c();break;case"ArrowLeft":"horizontal"===i&&(d?f():c());break;case"ArrowUp":"vertical"===i&&f()}let p=l%a;null===(t=r[p].ref.current)||void 0===t||t.focus()});return /*@__PURE__*/f(y).createElement(tk,{scope:n,disabled:r,direction:o,orientation:i},/*@__PURE__*/f(y).createElement(tu.Slot,{scope:n},/*@__PURE__*/f(y).createElement(M.div,S({},a,{"data-orientation":i,ref:s,onKeyDown:r?void 0:p}))))}),tC="AccordionItem",[t_,tR]=tf(tC),tP=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{__scopeAccordion:n,value:r,...o}=e,i=tS(tC,n),a=tv(tC,n),l=th(n),s=I(),u=r&&a.value.includes(r)||!1,c=i.disabled||e.disabled;return /*@__PURE__*/f(y).createElement(t_,{scope:n,open:u,disabled:c,triggerId:s},/*@__PURE__*/f(y).createElement(tt,S({"data-orientation":i.orientation,"data-state":tA(u)},l,o,{ref:t,disabled:c,open:u,onOpenChange:e=>{e?a.onItemOpen(r):a.onItemClose(r)}})))}),tT=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tS(tl,n),i=tR("AccordionHeader",n);return /*@__PURE__*/f(y).createElement(M.h3,S({"data-orientation":o.orientation,"data-state":tA(i.open),"data-disabled":i.disabled?"":void 0},r,{ref:t}))}),tN="AccordionTrigger",tO=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tS(tl,n),i=tR(tN,n),a=tb(tN,n),l=th(n);return /*@__PURE__*/f(y).createElement(tu.ItemSlot,{scope:n},/*@__PURE__*/f(y).createElement(tn,S({"aria-disabled":i.open&&!a.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId},l,r,{ref:t})))}),tj=/*@__PURE__*/f(y).forwardRef((e,t)=>{let{__scopeAccordion:n,...r}=e,o=tS(tl,n),i=tR("AccordionContent",n),a=th(n);return /*@__PURE__*/f(y).createElement(to,S({role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation},a,r,{ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});/* -----------------------------------------------------------------------------------------------*/function tA(e){return e?"open":"closed"}/**
 * lucide-react v0.288.0 - ISC
 */const tD=x("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),tz=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(tP,{ref:n,className:eY("border-b",e),...t}));tz.displayName="AccordionItem";const tI=/*#__PURE__*/y.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(tT,{className:"flex",children:/*#__PURE__*/(0,g.jsxs)(tO,{ref:r,className:eY("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[t,/*#__PURE__*/(0,g.jsx)(tD,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));tI.displayName=tO.displayName;const tM=/*#__PURE__*/y.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(tj,{ref:r,className:eY("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",e),...n,children:/*#__PURE__*/(0,g.jsx)("div",{className:"pb-4 pt-0",children:t})}));tM.displayName=tj.displayName;var y=(m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"));const tF="dismissableLayer.update",tL=/*#__PURE__*/(0,y.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),t$=/*#__PURE__*/(0,y.forwardRef)((t,n)=>{var r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:s,onDismiss:u,...c}=t,d=(0,y.useContext)(tL),[f,p]=(0,y.useState)(null),h=null!==(r=null==f?void 0:f.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,m]=(0,y.useState)({}),g=R(n,e=>p(e)),v=Array.from(d.layers),[b]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),w=v.indexOf(b),x=f?v.indexOf(f):-1,k=d.layersWithOutsidePointerEventsDisabled.size>0,C=x>=w,_=/* -----------------------------------------------------------------------------------------------*//**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=L(e),r=(0,y.useRef)(!1),o=(0,y.useRef)(()=>{});return(0,y.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){tW("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}/**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with cancellations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{// ensures we check React component tree (not just DOM tree)
onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));!C||n||(null==a||a(e),null==s||s(e),e.defaultPrevented||null==u||u())},h),P=/**
 * Listens for when focus happens outside a react subtree.
 * Returns props to pass to the root (node) of the subtree we want to check.
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=L(e),r=(0,y.useRef)(!1);return(0,y.useEffect)(()=>{let e=e=>{e.target&&!r.current&&tW("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...d.branches].some(e=>e.contains(t));n||(null==l||l(e),null==s||s(e),e.defaultPrevented||null==u||u())},h);return!/**
 * Listens for when the escape key is down
 */function(e,t=null==globalThis?void 0:globalThis.document){let n=L(e);(0,y.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{let t=x===d.layers.size-1;t&&(null==i||i(e),!e.defaultPrevented&&u&&(e.preventDefault(),u()))},h),(0,y.useEffect)(()=>{if(f)return o&&(0===d.layersWithOutsidePointerEventsDisabled.size&&(e=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),tV(),()=>{o&&1===d.layersWithOutsidePointerEventsDisabled.size&&(h.body.style.pointerEvents=e)}},[f,h,o,d]),/**
   * We purposefully prevent combining this effect with the `disableOutsidePointerEvents` effect
   * because a change to `disableOutsidePointerEvents` would remove this layer from the stack
   * and add it to the end again so the layering order wouldn't be _creation order_.
   * We only want them to be removed from context stacks when unmounted.
   */(0,y.useEffect)(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),tV())},[f,d]),(0,y.useEffect)(()=>{let e=()=>m({});return document.addEventListener(tF,e),()=>document.removeEventListener(tF,e)},[]),/*#__PURE__*/(0,y.createElement)(M.div,S({},c,{ref:g,style:{pointerEvents:k?C?"auto":"none":void 0,...t.style},onFocusCapture:E(t.onFocusCapture,P.onFocusCapture),onBlurCapture:E(t.onBlurCapture,P.onBlurCapture),onPointerDownCapture:E(t.onPointerDownCapture,_.onPointerDownCapture)}))}),tU=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=(0,y.useContext)(tL),r=(0,y.useRef)(null),o=R(t,r);return(0,y.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),/*#__PURE__*/(0,y.createElement)(M.div,S({},e,{ref:o}))});function tV(){let e=new CustomEvent(tF);document.dispatchEvent(e)}function tW(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?F(o,i):o.dispatchEvent(i)}var y=m("bh6RR");const tB="focusScope.autoFocusOnMount",tH="focusScope.autoFocusOnUnmount",tG={bubbles:!1,cancelable:!0},tq=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...a}=e,[l,s]=(0,y.useState)(null),u=L(o),c=L(i),d=(0,y.useRef)(null),f=R(t,e=>s(e)),p=(0,y.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,y.useEffect)(()=>{if(r){function e(e){if(p.paused||!l)return;let t=e.target;l.contains(t)?d.current=t:tY(d.current,{select:!0})}function t(e){if(p.paused||!l)return;let t=e.relatedTarget;// A `focusout` event with a `null` `relatedTarget` will happen in at least two cases:
//
// 1. When the user switches app/tabs/windows/the browser itself loses focus.
// 2. In Google Chrome, when the focused element is removed from the DOM.
//
// We let the browser do its thing here because:
//
// 1. The browser already keeps a memory of what's focused for when the page gets refocused.
// 2. In Google Chrome, if we try to focus the deleted focused element (as per below), it
//    throws the CPU to 100%, so we avoid doing anything for this reason here too.
null===t||l.contains(t)||tY(d.current,{select:!0});// If the focus has moved to an actual legitimate element (`relatedTarget !== null`)
}// When the focused element gets removed from the DOM, browsers move focus
document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(// back to the document.body. In this case, we move focus to the container
// to keep focus trapped correctly.
function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&tY(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,p.paused]),(0,y.useEffect)(()=>{if(l){tX.add(p);let e=document.activeElement,t=l.contains(e);if(!t){let t=new CustomEvent(tB,tG);l.addEventListener(tB,u),l.dispatchEvent(t),t.defaultPrevented||(/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*//**
 * Attempts focusing the first element in a list of candidates.
 * Stops when focus has actually moved.
 */function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(tY(r,{select:t}),document.activeElement!==n)return}(tQ(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&tY(l))}return()=>{l.removeEventListener(tB,u),// We need to delay the focus a little to get around it for now.
// See: https://github.com/facebook/react/issues/17894
setTimeout(()=>{let t=new CustomEvent(tH,tG);l.addEventListener(tH,c),l.dispatchEvent(t),t.defaultPrevented||tY(null!=e?e:document.body,{select:!0}),// we need to remove the listener after we `dispatchEvent`
l.removeEventListener(tH,c),tX.remove(p)},0)}}},[l,u,c,p]);let h=(0,y.useCallback)(e=>{if(!n&&!r||p.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=/**
 * Returns the first and last tabbable elements inside a container.
 */function(e){let t=tQ(e),n=tK(t,e),r=tK(t.reverse(),e);return[n,r]}(t),a=r&&i;a?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&tY(i,{select:!0})):(e.preventDefault(),n&&tY(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,p.paused]);return/*#__PURE__*/(0,y.createElement)(M.div,S({tabIndex:-1},a,{ref:f,onKeyDown:h}))});/**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function tQ(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}/**
 * Returns the first visible element in a list.
 * NOTE: Only checks visibility up to the `container`.
 */function tK(e,t){for(let n of e)// we stop checking if it's hidden at the `container` level (excluding)
if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;// we stop at `upTo` (excluding it)
e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function tY(e,{select:t=!1}={}){// only focus if that element is focusable
if(e&&e.focus){var n;let r=document.activeElement;// NOTE: we prevent scrolling on focus, to minimize jarring transitions for users
e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}/* -------------------------------------------------------------------------------------------------
 * FocusScope stack
 * -----------------------------------------------------------------------------------------------*/const tX=(t=[],{add(e){// pause the currently active focus scope (at the top of the stack)
let n=t[0];e!==n&&(null==n||n.pause()),// remove in case it already exists (because we'll re-add it at the top of the stack)
(t=tZ(t,e)).unshift(e)},remove(e){var n;null===(n=(t=tZ(t,e))[0])||void 0===n||n.resume()}});function tZ(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var y=m("bh6RR");const tJ=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...o}=e;return r?/*@__PURE__*/f(v).createPortal(/*#__PURE__*/(0,y.createElement)(M.div,S({},o,{ref:t})),r):null});var y=m("bh6RR");/** Number of components which have requested interest to have focus guards */let t0=0;/**
 * Injects a pair of focus guards at the edges of the whole DOM tree
 * to ensure `focusin` & `focusout` events can be caught consistently.
 */function t1(){(0,y.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:t2()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:t2()),t0++,()=>{1===t0&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),t0--}},[])}function t2(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */var t3=function(){return(t3=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function t4(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function t5(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var y=(m("bh6RR"),m("bh6RR")),t6="right-scroll-bar-position",t9="width-before-scroll-bar",y=m("bh6RR"),t8=(void 0===u3&&(u3={}),(void 0===u4&&(u4=function(e){return e}),u5=[],u6=!1,u9={read:function(){if(u6)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return u5.length?u5[u5.length-1]:null},useMedium:function(e){var t=u4(e,u6);return u5.push(t),function(){u5=u5.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(u6=!0;u5.length;){var t=u5;u5=[],t.forEach(e)}u5={push:function(t){return e(t)},filter:function(){return u5}}},assignMedium:function(e){u6=!0;var t=[];if(u5.length){var n=u5;u5=[],n.forEach(e),t=u5}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),u5={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),u5}}}}).options=t3({async:!0,ssr:!1},u3),u9),t7=function(){},ne=y.forwardRef(function(e,t){var n,r,o,i=y.useRef(null),a=y.useState({onScrollCapture:t7,onWheelCapture:t7,onTouchMoveCapture:t7}),l=a[0],s=a[1],u=e.forwardProps,c=e.children,d=e.className,f=e.removeScrollBar,p=e.enabled,h=e.shards,m=e.sideCar,g=e.noIsolation,v=e.inert,b=e.allowPinchZoom,w=e.as,x=void 0===w?"div":w,k=t4(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),S=(n=[i,t],r=function(e){return n.forEach(function(t){return"function"==typeof t?t(e):t&&(t.current=e),t})},// update callback
(o=(0,y.useState)(function(){return{// value
value:null,// last callback
callback:r,// "memoized" public interface
facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),E=t3(t3({},k),l);return y.createElement(y.Fragment,null,p&&y.createElement(m,{sideCar:t8,removeScrollBar:f,shards:h,noIsolation:g,inert:v,setCallbacks:s,allowPinchZoom:!!b,lockRef:i}),u?y.cloneElement(y.Children.only(c),t3(t3({},E),{ref:S})):y.createElement(x,t3({},E,{className:d,ref:S}),c))});ne.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},ne.classNames={fullWidth:t9,zeroRight:t6};var y=m("bh6RR"),nt=function(e){var t=e.sideCar,n=t4(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return y.createElement(r,t3({},n))};nt.isSideCarExport=!0;var y=(m("bh6RR"),m("bh6RR"),m("bh6RR")),nn=function(){var e=0,t=null;return{add:function(n){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=u7||("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var r,o;(r=t).styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),o=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},nr=function(){var e=nn();return function(t,n){y.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},no=function(){var e=nr();return function(t){return e(t.styles,t.dynamic),null}},ni={left:0,top:0,right:0,gap:0},na=function(e){return parseInt(e||"",10)||0},nl=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[na(n),na(r),na(o)]},ns=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return ni;var t=nl(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},nu=no(),nc=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(t6," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(t9," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(t6," .").concat(t6," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(t9," .").concat(t9," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},nd=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,i=y.useMemo(function(){return ns(o)},[o]);return y.createElement(nu,{styles:nc(i,!t,o,n?"":"!important")})},nf=!1;if("undefined"!=typeof window)try{var np=Object.defineProperty({},"passive",{get:function(){return nf=!0,!0}});// @ts-ignore
window.addEventListener("test",np,np),// @ts-ignore
window.removeEventListener("test",np,np)}catch(e){nf=!1}var nh=!!nf&&{passive:!1},nm=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&// contains scroll inside self
!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},ng=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),nv(e,n)){var r=ny(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body)return!1},nv=function(e,t){return"v"===e?nm(t,"overflowY"):nm(t,"overflowX")},ny=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},nb=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),l=a*r,s=n.target,u=t.contains(s),c=!1,d=l>0,f=0,p=0;do{var h=ny(e,s),m=h[0],g=h[1]-h[2]-a*m;(m||g)&&nv(e,s)&&(f+=g,p+=m),s=s.parentNode}while(!u&&s!==document.body||// self content
u&&(t.contains(s)||t===s))return d&&(o&&0===f||!o&&l>f)?c=!0:!d&&(o&&0===p||!o&&-l>p)&&(c=!0),c},nw=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},nx=function(e){return[e.deltaX,e.deltaY]},nk=function(e){return e&&"current"in e?e.current:e},nS=0,nE=[],nC=(t8.useMedium(function(e){var t=y.useRef([]),n=y.useRef([0,0]),r=y.useRef(),o=y.useState(nS++)[0],i=y.useState(function(){return no()})[0],a=y.useRef(e);y.useEffect(function(){a.current=e},[e]),y.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=t5([e.lockRef.current],(e.shards||[]).map(nk),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=y.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=nw(e),l=n.current,s="deltaX"in e?e.deltaX:l[0]-i[0],u="deltaY"in e?e.deltaY:l[1]-i[1],c=e.target,d=Math.abs(s)>Math.abs(u)?"h":"v";// allow horizontal touch move on Range inputs. They will not cause any scroll
if("touches"in e&&"h"===d&&"range"===c.type)return!1;var f=ng(d,c);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ng(d,c)),!f)return!1;if(!r.current&&"changedTouches"in e&&(s||u)&&(r.current=o),!o)return!0;var p=r.current||o;return nb(p,t,e,"h"===p?s:u,!0)},[]),s=y.useCallback(function(e){if(nE.length&&nE[nE.length-1]===i){var n="deltaY"in e?nx(e):nw(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];// self event, and should be canceled
if(r&&r.should){e.cancelable&&e.preventDefault();return}// outside or shard event
if(!r){var o=(a.current.shards||[]).map(nk).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),u=y.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),c=y.useCallback(function(e){n.current=nw(e),r.current=void 0},[]),d=y.useCallback(function(t){u(t.type,nx(t),t.target,l(t,e.lockRef.current))},[]),f=y.useCallback(function(t){u(t.type,nw(t),t.target,l(t,e.lockRef.current))},[]);y.useEffect(function(){return nE.push(i),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",s,nh),document.addEventListener("touchmove",s,nh),document.addEventListener("touchstart",c,nh),function(){nE=nE.filter(function(e){return e!==i}),document.removeEventListener("wheel",s,nh),document.removeEventListener("touchmove",s,nh),document.removeEventListener("touchstart",c,nh)}},[]);var p=e.removeScrollBar,h=e.inert;return y.createElement(y.Fragment,null,h?y.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?y.createElement(nd,{gapMode:"margin"}):null)}),nt),n_=y.forwardRef(function(e,t){return y.createElement(ne,t3({},e,{ref:t,sideCar:nC}))});n_.classNames=ne.classNames;var nR=new WeakMap,nP=new WeakMap,nT={},nN=0,nO=function(e){return e&&(e.host||nO(e.parentNode))},nj=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=nO(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});nT[n]||(nT[n]=new WeakMap);var i=nT[n],a=[],l=new Set,s=new Set(o),u=function(e){!e||l.has(e)||(l.add(e),u(e.parentNode))};o.forEach(u);var c=function(e){!e||s.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))c(e);else{var t=e.getAttribute(r),o=null!==t&&"false"!==t,s=(nR.get(e)||0)+1,u=(i.get(e)||0)+1;nR.set(e,s),i.set(e,u),a.push(e),1===s&&o&&nP.set(e,!0),1===u&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}})};return c(t),l.clear(),nN++,function(){a.forEach(function(e){var t=nR.get(e)-1,o=i.get(e)-1;nR.set(e,t),i.set(e,o),t||(nP.has(e)||e.removeAttribute(r),nP.delete(e)),o||e.removeAttribute(n)}),--nN||(// clear
nR=new WeakMap,nR=new WeakMap,nP=new WeakMap,nT={})}},nA=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(// we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10
r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),nj(r,o,n,"aria-hidden")):function(){return null}};/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/const nD="Dialog",[nz,nI]=C(nD),[nM,nF]=nz(nD),nL=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogTrigger",n),i=R(t,o.triggerRef);return/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":n1(o.open)},r,{ref:i,onClick:E(e.onClick,o.onOpenToggle)}))}),n$="DialogPortal",[nU,nV]=nz(n$,{forceMount:void 0}),nW="DialogOverlay",nB=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=nV(nW,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nF(nW,e.__scopeDialog);return i.modal?/*#__PURE__*/(0,y.createElement)(eo,{present:r||i.open},/*#__PURE__*/(0,y.createElement)(nH,S({},o,{ref:t}))):null}),nH=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF(nW,n);return/*#__PURE__*/(0,y.createElement)(n_,{as:P,allowPinchZoom:!0,shards:[o.contentRef]},/*#__PURE__*/(0,y.createElement)(M.div,S({"data-state":n1(o.open)},r,{ref:t// We re-enable pointer-events prevented by `Dialog.Content` to allow scrolling the overlay.
,style:{pointerEvents:"auto",...r.style}})))}),nG="DialogContent",nq=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=nV(nG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,i=nF(nG,e.__scopeDialog);return/*#__PURE__*/(0,y.createElement)(eo,{present:r||i.open},i.modal?/*#__PURE__*/(0,y.createElement)(nQ,S({},o,{ref:t})):/*#__PURE__*/(0,y.createElement)(nK,S({},o,{ref:t})))}),nQ=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=nF(nG,e.__scopeDialog),r=(0,y.useRef)(null),o=R(t,n.contentRef,r);return(0,y.useEffect)(()=>{let e=r.current;if(e)return nA(e)},[]),/*#__PURE__*/(0,y.createElement)(nY,S({},e,{ref:o// we make sure focus isn't trapped once `DialogContent` has been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:E(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:E(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;// it is effectively as if we right-clicked the `Overlay`.
r&&e.preventDefault()})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:E(e.onFocusOutside,e=>e.preventDefault())}))}),nK=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=nF(nG,e.__scopeDialog),r=(0,y.useRef)(!1),o=(0,y.useRef)(!1);return/*#__PURE__*/(0,y.createElement)(nY,S({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),nY=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...a}=e,l=nF(nG,n),s=(0,y.useRef)(null),u=R(t,s);return t1(),/*#__PURE__*/(0,y.createElement)(y.Fragment,null,/*#__PURE__*/(0,y.createElement)(tq,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,y.createElement)(t$,S({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":n1(l.open)},a,{ref:u,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),nX="DialogTitle",nZ=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF(nX,n);return/*#__PURE__*/(0,y.createElement)(M.h2,S({id:o.titleId},r,{ref:t}))}),nJ=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogDescription",n);return/*#__PURE__*/(0,y.createElement)(M.p,S({id:o.descriptionId},r,{ref:t}))}),n0=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,o=nF("DialogClose",n);return/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button"},r,{ref:t,onClick:E(e.onClick,()=>o.onOpenChange(!1))}))});/* -----------------------------------------------------------------------------------------------*/function n1(e){return e?"open":"closed"}const[n2,n3]=function(e,t){let n=/*#__PURE__*/(0,y.createContext)(t);function r(e){let{children:t,...r}=e,o=(0,y.useMemo)(()=>r,Object.values(r));// Only re-memoize when prop values change
return/*#__PURE__*/(0,y.createElement)(n.Provider,{value:o},t)}return r.displayName=e+"Provider",[r,function(r){let o=(0,y.useContext)(n);if(o)return o;if(void 0!==t)return t;// if a defaultContext wasn't specified, it's a required context.
throw Error(`\`${r}\` must be used within \`${e}\``)}]}("DialogTitleWarning",{contentName:nG,titleName:nX,docsSlug:"dialog"}),n4=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!0}=e,l=(0,y.useRef)(null),s=(0,y.useRef)(null),[u=!1,c]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,y.createElement)(nM,{scope:t,triggerRef:l,contentRef:s,contentId:I(),titleId:I(),descriptionId:I(),open:u,onOpenChange:c,onOpenToggle:(0,y.useCallback)(()=>c(e=>!e),[c]),modal:a},n)},n5=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=nF(n$,t);return/*#__PURE__*/(0,y.createElement)(nU,{scope:t,forceMount:n},(0,y.Children).map(r,e=>/*#__PURE__*/(0,y.createElement)(eo,{present:n||i.open},/*#__PURE__*/(0,y.createElement)(tJ,{asChild:!0,container:o},e))))},[n6,n9]=C("AlertDialog",[nI]),n8=nI(),n7=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n8(n);return/*#__PURE__*/(0,y.createElement)(nL,S({},o,r,{ref:t}))}),re=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n8(n);return/*#__PURE__*/(0,y.createElement)(nB,S({},o,r,{ref:t}))}),rt="AlertDialogContent",[rn,rr]=n6(rt),ro=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,children:r,...o}=e,i=n8(n),a=(0,y.useRef)(null),l=R(t,a),s=(0,y.useRef)(null);return/*#__PURE__*/(0,y.createElement)(n2,{contentName:rt,titleName:ri,docsSlug:"alert-dialog"},/*#__PURE__*/(0,y.createElement)(rn,{scope:n,cancelRef:s},/*#__PURE__*/(0,y.createElement)(nq,S({role:"alertdialog"},i,o,{ref:l,onOpenAutoFocus:E(o.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=s.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault()}),/*#__PURE__*/(0,y.createElement)(N,null,r),!1)))}),ri="AlertDialogTitle",ra=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n8(n);return/*#__PURE__*/(0,y.createElement)(nZ,S({},o,r,{ref:t}))}),rl=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n8(n);return/*#__PURE__*/(0,y.createElement)(nJ,S({},o,r,{ref:t}))}),rs=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,o=n8(n);return/*#__PURE__*/(0,y.createElement)(n0,S({},o,r,{ref:t}))}),ru=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeAlertDialog:n,...r}=e,{cancelRef:o}=rr("AlertDialogCancel",n),i=n8(n),a=R(t,o);return/*#__PURE__*/(0,y.createElement)(n0,S({},i,r,{ref:a}))});var y=m("bh6RR");const rc=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,rd=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return ey(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:i}=t,a=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let a=rc(t)||rc(r);return o[e][a]}),l=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),s=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...l}[t]):({...i,...l})[t]===n})?[...e,n,r]:e},[]);return ey(e,a,s,null==n?void 0:n.class,null==n?void 0:n.className)},rf=rd("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",submit:"bg-slate-500 text-destructive-foreground hover:bg-slate-500/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",share:"border-solid bg-fuchsia-400	basis-1/2 hover:bg-fuchsia-400/80"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",deselectallsize:"h-10 py-2",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),rp=/*#__PURE__*/y.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...o},i)=>{let a=r?P:"button";return/*#__PURE__*/(0,g.jsx)(a,{className:eY(rf({variant:t,size:n,className:e})),ref:i,...o})});rp.displayName="Button";const rh=e=>{let{__scopeAlertDialog:t,...n}=e,r=n8(t);return/*#__PURE__*/(0,y.createElement)(n4,S({},r,n,{modal:!0}))},rm=e=>{let{__scopeAlertDialog:t,...n}=e,r=n8(t);return/*#__PURE__*/(0,y.createElement)(n5,S({},r,n))},rg=/*#__PURE__*/y.forwardRef(({className:e,children:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(re,{className:eY("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...n,ref:r}));rg.displayName=re.displayName;const rv=/*#__PURE__*/y.forwardRef(({className:e,handleMouseDownOnOverlay:t,...n},r)=>/*#__PURE__*/(0,g.jsxs)(rm,{children:[/*#__PURE__*/(0,g.jsx)(rg,{onMouseDown:t}),/*#__PURE__*/(0,g.jsx)(ro,{ref:r,className:eY("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",e),...n})]}));rv.displayName=ro.displayName;const ry=({className:e,...t})=>/*#__PURE__*/(0,g.jsx)("div",{className:eY("flex flex-col space-y-2 text-center sm:text-left",e),...t});ry.displayName="AlertDialogHeader";const rb=({className:e,...t})=>/*#__PURE__*/(0,g.jsx)("div",{className:eY("flex flex-row gap-x-4 justify-center",e),...t});rb.displayName="AlertDialogFooter";const rw=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(ra,{ref:n,className:eY("text-lg font-semibold",e),...t}));rw.displayName=ra.displayName;const rx=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(rl,{ref:n,className:eY("text-sm text-muted-foreground",e),...t}));rx.displayName=rl.displayName;const rk=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(rs,{ref:n,className:eY(rf(),e),...t}));rk.displayName=rs.displayName;const rS=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(ru,{ref:n,className:eY(rf({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));rS.displayName=ru.displayName;var rE=function({title:e="title",trigger:t,initiallyOpen:n=!0,footerElements:r,children:o,actionButtonText:i="Continue",showActionButton:a=!0}){let[l,s]=/*@__PURE__*/f(y).useState(n);function u(){s(!1)}return /*@__PURE__*/f(y).useEffect(()=>{s(n)},[n]),/*#__PURE__*/(0,g.jsxs)(rh,{open:l,onOpenChange:s,children:[!!t&&/*#__PURE__*/(0,g.jsx)(n7,{children:t}),/*#__PURE__*/(0,g.jsxs)(rv,{handleMouseDownOnOverlay:u,onEscapeKeyDown:u,onCloseAutoFocus:e=>{e.preventDefault()},children:[/*#__PURE__*/(0,g.jsxs)(ry,{children:[/*#__PURE__*/(0,g.jsx)(rw,{children:e}),/*#__PURE__*/(0,g.jsx)(rx,{children:o})]}),/*#__PURE__*/(0,g.jsxs)(rb,{children:[r,a&&/*#__PURE__*/(0,g.jsx)(rk,{onClick:()=>s(!1),children:i})]})]})]})},rC=function(){return/*#__PURE__*/(0,g.jsx)(rE,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(k,{className:"mr-4"}),initiallyOpen:!1,actionButtonText:"Got It!",children:/*#__PURE__*/(0,g.jsxs)(ef,{defaultValue:"how-to-play",children:[/*#__PURE__*/(0,g.jsxs)(e3,{className:"grid w-full grid-cols-2",children:[/*#__PURE__*/(0,g.jsx)(e4,{value:"how-to-play",children:"How To Play"}),/*#__PURE__*/(0,g.jsx)(e4,{value:"about-us",children:"About Us"})]}),/*#__PURE__*/(0,g.jsxs)(e5,{value:"how-to-play",children:[" ",/*#__PURE__*/(0,g.jsxs)(tm,{type:"single",collapsible:!0,className:"w-full",children:[/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-1",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"What's The Goal?"}),/*#__PURE__*/(0,g.jsx)(tM,{children:"Find groups of items or names that share something in common."})]}),/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-2",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"How Do I Play?"}),/*#__PURE__*/(0,g.jsx)(tM,{children:"Select the items and tap 'Submit' to check if your guess matches one of the answer categories."})]}),/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-3",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"How Many Tries Do I Get?"}),/*#__PURE__*/(0,g.jsx)(tM,{children:"You can make 4 mistakes before the game ends."})]})]})]}),/*#__PURE__*/(0,g.jsxs)(e5,{value:"about-us",children:[" ",/*#__PURE__*/(0,g.jsxs)(tm,{type:"single",collapsible:!0,className:"w-full",children:[/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-1",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"Who Are Y'all?"}),/*#__PURE__*/(0,g.jsxs)(tM,{children:["This project is brought to you by andcomputers, feel free to subscribe to our writing and other experiments."," ",/*#__PURE__*/(0,g.jsx)("a",{href:"https://andcomputers.io/",target:"_blank",className:"underline font-bold",children:"Check out our writing here."})]})]}),/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-2",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"How Can I Support?"}),/*#__PURE__*/(0,g.jsxs)(tM,{children:[/*#__PURE__*/(0,g.jsx)("p",{className:"mb-1",children:"If you'd like to support feel free!"}),/*#__PURE__*/(0,g.jsxs)("ul",{className:"list-disc",children:[/*#__PURE__*/(0,g.jsxs)("li",{children:[/*#__PURE__*/(0,g.jsx)("p",{children:"Help us make an upcoming puzzle by "}),/*#__PURE__*/(0,g.jsx)("a",{href:"mailto:jcp@mail.andcomputers.io",target:"_blank",className:"underline font-bold",children:"emailing the team."})]}),/*#__PURE__*/(0,g.jsxs)("li",{children:[/*#__PURE__*/(0,g.jsx)("p",{className:"mt-2 mb-1",children:"Help us pay for servers & time:"}),/*#__PURE__*/(0,g.jsxs)("ul",{children:[/*#__PURE__*/(0,g.jsxs)("li",{children:[" ","- One-time contribution via"," ",/*#__PURE__*/(0,g.jsx)("a",{href:"https://buy.stripe.com/7sIg1Udac6xZegodQR",target:"_blank",className:"underline font-bold",children:"Stripe."})]}),/*#__PURE__*/(0,g.jsxs)("li",{children:[" ","- Recurring contributions via"," ",/*#__PURE__*/(0,g.jsx)("a",{href:"https://www.patreon.com/andcomputers",target:"_blank",className:"underline font-bold",children:"Patreon."})]})]})]})]})]})]}),/*#__PURE__*/(0,g.jsxs)(tz,{value:"item-3",children:[/*#__PURE__*/(0,g.jsx)(tI,{children:"Any Other Projects to Check Out?"}),/*#__PURE__*/(0,g.jsx)(tM,{children:/*#__PURE__*/(0,g.jsxs)("div",{className:"grid grid-flow-row",children:[/*#__PURE__*/(0,g.jsx)("p",{children:"Just a few! "}),/*#__PURE__*/(0,g.jsx)("a",{href:"https://andcomputers.io/",target:"_blank",className:"underline font-bold",children:"- Our writing and thoughts are here."}),/*#__PURE__*/(0,g.jsx)("a",{href:"https://blacktwitter.io/",target:"_blank",className:"underline font-bold",children:"- BlackTwitter"}),/*#__PURE__*/(0,g.jsx)("a",{href:"https://blackwords.andcomputers.io/",target:"_blank",className:"underline font-bold",children:"- Black Wordle"})]})})]})]})]})]})})},r_=function(){return/*#__PURE__*/(0,g.jsxs)("header",{children:[/*#__PURE__*/(0,g.jsx)("h1",{className:"font-space-mono",children:"Connections"}),/*#__PURE__*/(0,g.jsx)(rC,{})]})},y=m("bh6RR");function rR({gameData:e}){let t=e.length,n=[];for(let r=0;r<t;r++)e[r]?.words?n.push(e[r].words):n.push(e[r]);return n.flat()}function rP({gameData:e}){let t;t=e[0]?.words?e[0].words.length:e[0].length;let n=rR({gameData:e});return e0(t,eJ(n))}const rT=(e,t)=>{let n;let r={},o=((n=[]).push("\uD83D\uDFE9"),n.push("\uD83D\uDFE8"),n.push("\uD83D\uDFEA"),n.push("\uD83D\uDFE6"),n),i=e.length,a=[];for(let t=0;t<i;t++){a.push(e[t].words);let n=e[t].difficulty;e[t].words.map(e=>r[e]=n)}let l=[];for(let e=0;e<t.length;e++){let n=t[e],i=n.map(e=>r[e]),a=i.map(e=>{switch(e){case 1:return o[0];case 2:return o[1];case 3:return o[2];case 4:return o[3]}}).join("");l.push(a)}return`${l.join("\n")}`};var y=(m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR"));const rN=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{pressed:n,defaultPressed:r=!1,onPressedChange:o,...i}=e,[a=!1,l]=$({prop:n,onChange:o,defaultProp:r});return/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button","aria-pressed":a,"data-state":a?"on":"off","data-disabled":e.disabled?"":void 0},i,{ref:t,onClick:E(e.onClick,()=>{e.disabled||l(!a)})}))}),rO=rd("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors lg:hover:bg-muted lg:hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-300/70 data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border-solid border border-input bg-transparent lg:hover:bg-accent lg:hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),rj=/*#__PURE__*/y.forwardRef(({className:e,variant:t,size:n,...r},o)=>/*#__PURE__*/(0,g.jsx)(rN,{ref:o,className:eY(rO({variant:t,size:n,className:e})),...r}));rj.displayName=rN.displayName;var y=(m("bh6RR"),m("bh6RR"));function rA(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function rD(e){return(rD="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rz(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function rI(e){rz(1,arguments);var t=Object.prototype.toString.call(e);return(// Clone the date
e instanceof Date||"object"===rD(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(// eslint-disable-next-line no-console
console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),// eslint-disable-next-line no-console
console.warn(Error().stack)),new Date(NaN)))}function rM(e,t){rz(2,arguments);var n=rI(e),r=rA(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */function rF(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function rL(e){rz(1,arguments);var t=rI(e);return t.setHours(0,0,0,0),t}// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function r$(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function rU(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return(e<0?"-":"")+n}var rV={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},rW=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,rB=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,rH=/^([+-])(\d{2})(?::?(\d{2}))?$/;function rG(e){return e?parseInt(e):1}function rq(e){return e&&parseFloat(e.replace(",","."))||0}// Validation functions
// February is null to handle the leap year (using ||)
var rQ=[31,null,31,30,31,30,31,31,30,31,30,31];function rK(e){return e%400==0||e%4==0&&e%100!=0}var rY={};n(rY,"extract",function(){return r7}),n(rY,"parse",function(){return oe}),n(rY,"stringify",function(){return ot}),n(rY,"parseUrl",function(){return on}),n(rY,"stringifyUrl",function(){return or}),n(rY,"pick",function(){return oo}),n(rY,"exclude",function(){return oi});const rX="%[a-f0-9]{2}",rZ=RegExp("("+rX+")|([^%]+?)","gi"),rJ=RegExp("("+rX+")+","gi");function r0(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let n=e.indexOf(t);return -1===n?[]:[e.slice(0,n),e.slice(n+t.length)]}const r1=e=>null==e,r2=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),r3=Symbol("encodeFragmentIdentifier");function r4(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function r5(e,t){return t.encode?t.strict?r2(e):encodeURIComponent(e):e}function r6(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{// Try the built in decoder first
return decodeURIComponent(e)}catch{// Fallback to a more advanced decoder
return function(e){// Keep track of all the replacements and prefill the map with the `BOM`
let t={"%FE%FF":"��","%FF%FE":"��"},n=rJ.exec(e);for(;n;){try{// Decode as big chunks as possible
t[n[0]]=decodeURIComponent(n[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(rZ)||[];for(let n=1;n<t.length;n++)t=(e=(function e(t,n){try{// Try to decode the entire string first
return[decodeURIComponent(t.join(""))]}catch{// Do nothing
}if(1===t.length)return t;n=n||1;// Split the array in 2 parts
let r=t.slice(0,n),o=t.slice(n);return Array.prototype.concat.call([],e(r),e(o))})(t,n).join("")).match(rZ)||[];return e}}(n[0]);e!==n[0]&&(t[n[0]]=e)}n=rJ.exec(e)}// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
t["%C2"]="�";let r=Object.keys(t);for(let n of r)e=e.replace(RegExp(n,"g"),t[n]);return e}(e)}}(e):e}function r9(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function r8(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function r7(e){e=r9(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function oe(e,t){r4((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){r[e]=n;return}void 0===r[e]&&(r[e]={}),r[e][t[1]]=n};case"bracket":return(e,n,r)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){r[e]=n;return}if(void 0===r[e]){r[e]=[n];return}r[e]=[...r[e],n]};case"colon-list-separator":return(e,n,r)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){r[e]=n;return}if(void 0===r[e]){r[e]=[n];return}r[e]=[...r[e],n]};case"comma":case"separator":return(t,n,r)=>{let o="string"==typeof n&&n.includes(e.arrayFormatSeparator),i="string"==typeof n&&!o&&r6(n,e).includes(e.arrayFormatSeparator);n=i?r6(n,e):n;let a=o||i?n.split(e.arrayFormatSeparator).map(t=>r6(t,e)):null===n?n:r6(n,e);r[t]=a};case"bracket-separator":return(t,n,r)=>{let o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o){r[t]=n?r6(n,e):n;return}let i=null===n?[]:n.split(e.arrayFormatSeparator).map(t=>r6(t,e));if(void 0===r[t]){r[t]=i;return}r[t]=[...r[t],...i]};default:return(e,t,n)=>{if(void 0===n[e]){n[e]=t;return}n[e]=[...[n[e]].flat(),t]}}}(t),r=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return r;for(let o of e.split("&")){if(""===o)continue;let e=t.decode?o.replace(/\+/g," "):o,[i,a]=r0(e,"=");void 0===i&&(i=e),// Missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
a=void 0===a?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?a:r6(a,t),n(r6(i,t),a,r)}for(let[e,n]of Object.entries(r))if("object"==typeof n&&null!==n)for(let[e,r]of Object.entries(n))n[e]=r8(r,t);else r[e]=r8(n,t);return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((e,t)=>{let n=r[t];return n&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}function ot(e,t){if(!e)return"";r4((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let n=n=>t.skipNull&&r1(e[n])||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{let o=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r5(t,e),"[",o,"]"].join("")]:[...n,[r5(t,e),"[",r5(o,e),"]=",r5(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r5(t,e),"[]"].join("")]:[...n,[r5(t,e),"[]=",r5(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[r5(t,e),":list="].join("")]:[...n,[r5(t,e),":list=",r5(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?r:(// Translate null to an empty string so that it doesn't serialize as 'null'
        o=null===o?"":o,0===r.length)?[[r5(n,e),t,r5(o,e)].join("")]:[[r,r5(o,e)].join(e.arrayFormatSeparator)]}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,r5(t,e)]:[...n,[r5(t,e),"=",r5(r,e)].join("")]}}(t),o={};for(let[t,r]of Object.entries(e))n(t)||(o[t]=r);let i=Object.keys(o);return!1!==t.sort&&i.sort(t.sort),i.map(n=>{let o=e[n];return void 0===o?"":null===o?r5(n,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?r5(n,t)+"[]":o.reduce(r(n),[]).join("&"):r5(n,t)+"="+r5(o,t)}).filter(e=>e.length>0).join("&")}function on(e,t){t={decode:!0,...t};let[n,r]=r0(e,"#");return void 0===n&&(n=e),{url:n?.split("?")?.[0]??"",query:oe(r7(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:r6(r,t)}:{}}}function or(e,t){t={encode:!0,strict:!0,[r3]:!0,...t};let n=r9(e.url).split("?")[0]||"",r=r7(e.url),o={...oe(r,{sort:!1}),...e.query},i=ot(o,t);i&&(i=`?${i}`);let a=function(e){let t="",n=e.indexOf("#");return -1!==n&&(t=e.slice(n)),t}(e.url);if(e.fragmentIdentifier){let r=new URL(n);r.hash=e.fragmentIdentifier,a=t[r3]?r.hash:`#${e.fragmentIdentifier}`}return`${n}${i}${a}`}function oo(e,t,n){n={parseFragmentIdentifier:!0,[r3]:!1,...n};let{url:r,query:o,fragmentIdentifier:i}=on(e,n);return or({url:r,query:function(e,t){let n={};if(Array.isArray(t))for(let r of t){let t=Object.getOwnPropertyDescriptor(e,r);t?.enumerable&&Object.defineProperty(n,r,t)}else for(let r of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,r);if(o.enumerable){let i=e[r];t(r,i,e)&&Object.defineProperty(n,r,o)}}return n}(o,t),fragmentIdentifier:i},n)}function oi(e,t,n){let r=Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n);return oo(e,r,n)}// Connections puzzles for the home arcade. Each puzzle is 4 groups of 4 words,
// difficulty 1 (easy) -> 4 (tricky). Text only (no imageSrc) so nothing loads
// over the network. A couple are personalized inside-jokes. The game picks one
// per week by date; the Random/Previous buttons hop between them.
const oa=[// 1 — gentle opener
[{category:"Citrus fruits",words:["Lime","Lemon","Orange","Grapefruit"],difficulty:1},{category:"___ + board",words:["Key","Card","Skate","Surf"],difficulty:2},{category:"Shades of blue",words:["Navy","Teal","Azure","Cobalt"],difficulty:3},{category:"Famous Toms",words:["Hanks","Cruise","Holland","Brady"],difficulty:4}],// 2 — light & general (cats + naps vibe, nothing niche)
[{category:"Cats in pop culture",words:["Garfield","Felix","Tom","Salem"],difficulty:1},{category:"Ways to nap",words:["Siesta","Snooze","Catnap","Doze"],difficulty:2},{category:"Shades of purple",words:["Lilac","Plum","Lavender","Mauve"],difficulty:3},{category:"Dog breeds",words:["Beagle","Boxer","Poodle","Corgi"],difficulty:4}],// 3 — breakfast & co.
[{category:"Breakfast foods",words:["Bacon","Waffle","Omelet","Cereal"],difficulty:1},{category:"___ + fly",words:["Butter","Dragon","Fire","May"],difficulty:2},{category:"Hot drinks",words:["Coffee","Cocoa","Cider","Chai"],difficulty:3},{category:"Card games",words:["Bridge","Hearts","Spades","Rummy"],difficulty:4}],// 4 — weather & people
[{category:"Bodies of water",words:["Lake","Pond","River","Bay"],difficulty:1},{category:"___ + storm",words:["Brain","Thunder","Sand","Snow"],difficulty:2},{category:"Shades of green",words:["Olive","Mint","Forest","Jade"],difficulty:3},{category:"Famous Chrises",words:["Pratt","Evans","Hemsworth","Rock"],difficulty:4}],// 5 — music
[{category:"String instruments",words:["Violin","Cello","Harp","Banjo"],difficulty:1},{category:"___ + stick",words:["Drum","Chop","Lip","Yard"],difficulty:2},{category:"The Beatles",words:["John","Paul","George","Ringo"],difficulty:3},{category:"Dances",words:["Tango","Waltz","Salsa","Rumba"],difficulty:4}],// 6 — animals & things
[{category:"Big cats",words:["Lion","Tiger","Leopard","Cougar"],difficulty:1},{category:"___ + house",words:["Green","Light","Ware","Doll"],difficulty:2},{category:"Pasta shapes",words:["Penne","Ziti","Rotini","Fusilli"],difficulty:3},{category:"Car brands",words:["Tesla","Honda","Subaru","Mazda"],difficulty:4}],// 7 — colors, theatre
[{category:"Rainbow colors",words:["Red","Orange","Indigo","Violet"],difficulty:1},{category:"___ + berry",words:["Blue","Straw","Black","Rasp"],difficulty:2},{category:"Pizza toppings",words:["Pepperoni","Mushroom","Olive","Onion"],difficulty:3},{category:"Shakespeare plays",words:["Hamlet","Macbeth","Othello","Tempest"],difficulty:4}],// 8 — personalized: cozy / tea / craft
[{category:"Cozy things",words:["Blanket","Candle","Slippers","Fireplace"],difficulty:1},{category:"Types of tea",words:["Green","Black","Oolong","Herbal"],difficulty:2},{category:"Knitting & crochet",words:["Yarn","Needle","Stitch","Skein"],difficulty:3},{category:"Synonyms for cozy",words:["Snug","Comfy","Warm","Toasty"],difficulty:4}],// 9 — sky & games
[{category:"Disney princesses",words:["Belle","Ariel","Jasmine","Moana"],difficulty:1},{category:"___ + light",words:["Moon","Spot","Flash","Sun"],difficulty:2},{category:"Planets",words:["Mars","Venus","Saturn","Neptune"],difficulty:3},{category:"Board games",words:["Sorry","Risk","Clue","Trouble"],difficulty:4}],// 10 — sports
[{category:"Sports with a ball",words:["Tennis","Golf","Soccer","Bowling"],difficulty:1},{category:"___ + ball",words:["Base","Basket","Foot","Odd"],difficulty:2},{category:"Olympic sports",words:["Fencing","Rowing","Archery","Judo"],difficulty:3},{category:"Chess pieces",words:["King","Queen","Bishop","Knight"],difficulty:4}],// 11 — sweets & spice
[{category:"Ice cream flavors",words:["Vanilla","Chocolate","Strawberry","Pistachio"],difficulty:1},{category:"___ + cake",words:["Cup","Pan","Cheese","Fish"],difficulty:2},{category:"Candy bars",words:["Twix","Snickers","KitKat","Crunch"],difficulty:3},{category:"Spices",words:["Cumin","Paprika","Nutmeg","Ginger"],difficulty:4}],// 12 — outdoors & night sky
[{category:"Trees",words:["Oak","Maple","Birch","Pine"],difficulty:1},{category:"___ + fall",words:["Water","Rain","Night","Pit"],difficulty:2},{category:"Constellations",words:["Orion","Lyra","Draco","Leo"],difficulty:3},{category:"Small birds",words:["Robin","Sparrow","Finch","Wren"],difficulty:4}]],ol=()=>rL(Date.now()),os=new Date(2023,9,23),ou=e=>{let t=rL(e),n=function(e,t){rz(2,arguments);var n=rI(e),r=rI(t),o=r$(n,r),i=Math.abs(function(e,t){rz(2,arguments);var n=rL(e),r=rL(t);// Round the number of days to the nearest integer
// because the number of milliseconds in a day is not constant
// (e.g. it's different in the day of the daylight saving time clock shift)
return Math.round((n.getTime()-rF(n)-(r.getTime()-rF(r)))/864e5)}(n,r));n.setDate(n.getDate()-o*i);// Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
// If so, result must be decreased by 1 in absolute value
var a=Number(r$(n,r)===-o),l=o*(i-a);// Prevent negative zero
return 0===l?0:l}(t,os)%7;return rM(t,-n)},oc=e=>rM(ou(e),7),od=e=>{let t=os,n=-1;console.log(os);do n++,t=rM(t,7);while(t<=e)return n},of=e=>{if(e<0)throw Error("Invalid index");return oa[e%oa.length]},op=()=>{let e=rY.parse(window.location.search);if(e&&"p"in e){let t=parseInt(e.p,10);if(!isNaN(t)){let e=oa.length;return(t%e+e)%e}}return null},oh=e=>{try{if(e<ol()){window.location.href="/?d="+function(e,t){rz(1,arguments);var n,r,o=rI(e);if(isNaN(o.getTime()))throw RangeError("Invalid time value");var i=String(null!==(n=null==t?void 0:t.format)&&void 0!==n?n:"extended"),a=String(null!==(r=null==t?void 0:t.representation)&&void 0!==r?r:"complete");if("extended"!==i&&"basic"!==i)throw RangeError("format must be 'extended' or 'basic'");if("date"!==a&&"time"!==a&&"complete"!==a)throw RangeError("representation must be 'date', 'time', or 'complete'");var l="",s="",u="extended"===i?"-":"";// Representation is either 'date' or 'complete'
if("time"!==a){var c=rU(o.getDate(),2),d=rU(o.getMonth()+1,2),f=rU(o.getFullYear(),4);// yyyyMMdd or yyyy-MM-dd.
l="".concat(f).concat(u).concat(d).concat(u).concat(c)}// Representation is either 'time' or 'complete'
if("date"!==a){// Add the timezone.
var p=o.getTimezoneOffset();if(0!==p){var h=Math.abs(p),m=rU(Math.floor(h/60),2),g=rU(h%60,2);s="".concat(p<0?"+":"-").concat(m,":").concat(g)}else s="Z";var v=rU(o.getHours(),2),y=rU(o.getMinutes(),2),b=rU(o.getSeconds(),2),w=""===l?"":"T",x=[v,y,b].join("extended"===i?":":"");// HHmmss or HH:mm:ss.
l="".concat(l).concat(w).concat(x).concat(s)}return l}(e,{representation:"date"});return}}catch(e){console.log(e)}window.location.href="/"},om=()=>{// https://github.com/cwackerfuss/react-wordle/pull/505
let e=rY.parse(window.location.search);return null===e||!("d"in e)},{puzzleAnswers:og,puzzleGameDate:ov,puzzleIndex:oy,dateOfNextPuzzle:ob}=(e=>{let t=oc(e),n=op(),r=null!==n?n:od(e),o=of(r);return console.log("index for today: ",r),{puzzleAnswers:o,puzzleGameDate:e,puzzleIndex:r,dateOfNextPuzzle:t.valueOf()}})((()=>{if(om())return ol();let e=rY.parse(window.location.search);try{let t=rL(function(e,t){rz(1,arguments);var n,r,o,i=rA(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==i&&1!==i&&0!==i)throw RangeError("additionalDigits must be 0, 1 or 2");if(!("string"==typeof e||"[object String]"===Object.prototype.toString.call(e)))return new Date(NaN);var a=function(e){var t,n={},r=e.split(rV.dateTimeDelimiter);// The regex match should only return at maximum two array elements.
// [date], [time], or [date, time].
if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],rV.timeZoneDelimiter.test(n.date)&&(n.date=e.split(rV.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var o=rV.timezone.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e);if(a.date){var l=function(e,t){var n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);// Invalid ISO-formatted year
if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;// either year or century is null, not both
return{year:null===i?o:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(a.date,i);r=function(e,t){// Invalid ISO-formatted year
if(null===t)return new Date(NaN);var n,r,o=e.match(rW);// Invalid ISO-formatted string
if(!o)return new Date(NaN);var i=!!o[4],a=rG(o[1]),l=rG(o[2])-1,s=rG(o[3]),u=rG(o[4]),c=rG(o[5])-1;if(i)return u>=1&&u<=53&&c>=0&&c<=6?((n=new Date(0)).setUTCFullYear(t,0,4),r=n.getUTCDay()||7,n.setUTCDate(n.getUTCDate()+((u-1)*7+c+1-r)),n):new Date(NaN);var d=new Date(0);return l>=0&&l<=11&&s>=1&&s<=(rQ[l]||(rK(t)?29:28))&&a>=1&&a<=(rK(t)?366:365)?(d.setUTCFullYear(t,l,Math.max(a,s)),d):new Date(NaN)}(l.restDateString,l.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var s=r.getTime(),u=0;if(a.time&&isNaN(u=function(e){var t=e.match(rB);if(!t)return NaN;// Invalid ISO-formatted time
var n=rq(t[1]),r=rq(t[2]),o=rq(t[3]);return(24===n?0===r&&0===o:o>=0&&o<60&&r>=0&&r<60&&n>=0&&n<25)?36e5*n+6e4*r+1e3*o:NaN}(a.time)))return new Date(NaN);if(a.timezone){if(isNaN(o=function(e){if("Z"===e)return 0;var t=e.match(rH);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return o>=0&&o<=59?n*(36e5*r+6e4*o):NaN}(a.timezone)))return new Date(NaN)}else{var c=new Date(s+u),d=new Date(0);return d.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),d.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),d}return new Date(s+u+o)}(e.d?.toString()));return(t>=ol()||t<os)&&oh(ol()),t}catch(e){return console.log(e),ol()}})()),ow=/*@__PURE__*/f(y).createContext();var ox=function({children:e}){let[t,n]=/*@__PURE__*/f(y).useState(og),r=t[0].words.length,o=t.length;return/*#__PURE__*/(0,g.jsx)(ow.Provider,{value:{gameData:t,numCategories:o,categorySize:r},children:e})};const ok="gameState",oS=e=>{localStorage.setItem(ok,JSON.stringify(e))},oE=()=>{let e=localStorage.getItem(ok);return e?JSON.parse(e):null},oC=/*@__PURE__*/f(y).createContext();var o_=function({children:e}){let{gameData:t}=/*@__PURE__*/f(y).useContext(ow),[n,r]=/*@__PURE__*/f(y).useState([]),[o,i]=/*@__PURE__*/f(y).useState(()=>{let e=oE();return(console.log("checking game state!",{loadedState:e,gd1:t,gd2:e?.gameData}),!function({gd1:e,gd2:t}){if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.lengthl;n++)if(!e2(e.words[n],t.words[n]))return!1;return!0}({gd1:t,gd2:e?.gameData})||!function({gameData:e,submittedGuesses:t}){let n=rR({gameData:e}),r=rR({gameData:t});if(0===t.length)return!1;let o=r.every(e=>n.includes(e));return o}({gameData:t,submittedGuesses:e?.submittedGuesses}))?[]:(Array.isArray(e?.submittedGuesses)&&r(e.submittedGuesses),Array.isArray(e?.solvedGameData))?e.solvedGameData:[]}),[a,l]=/*@__PURE__*/f(y).useState(!1),[s,u]=/*@__PURE__*/f(y).useState(!1),[c,d]=/*@__PURE__*/f(y).useState([]),p=n.length-o.length;return /*@__PURE__*/f(y).useEffect(()=>{o.length===t.length&&(l(!0),u(!0)),oS({submittedGuesses:n,solvedGameData:o,gameData:t})},[o]),/*@__PURE__*/f(y).useEffect(()=>{p>=4&&(l(!0),u(!1)),oS({submittedGuesses:n,solvedGameData:o,gameData:t})},[n]),/*#__PURE__*/(0,g.jsx)(oC.Provider,{value:{isGameOver:a,isGameWon:s,numMistakesUsed:p,solvedGameData:o,setSolvedGameData:i,submittedGuesses:n,setSubmittedGuesses:r,guessCandidate:c,setGuessCandidate:d},children:e})},oR=function({word:e,fullCandidateSize:t}){let{guessCandidate:n,setGuessCandidate:r}=/*@__PURE__*/f(y).useContext(oC),[o,i]=/*@__PURE__*/f(y).useState(!!n.includes(e)),a=n.length==t;return /*@__PURE__*/f(y).useEffect(()=>{i(!!n.includes(e))},[n]),/*#__PURE__*/(0,g.jsx)(rj,{className:"_9XSUmq_growShrink select-none",variant:"outline",pressed:o,onClick:function(){if(o){// remove from candidateGuess
let t=n.filter(t=>t!==e);r(t),// set state to *not* selected
i(!1)}else a||(// add to candidateGuess array
r([...n,e]),// set state to *selected*
i(!0))},children:/*#__PURE__*/(0,g.jsx)("p",{style:{fontSize://const fontSizeByWordLength = 9characters works with 0.6rem
function(e){let t=e.length,n=1;return t>7?(n-=.1*(t-7),n=Math.max(.5,n),`${n}em`):null}(e)},className:"font-space-mono uppercase sm:text-xs md:text-xs",children:e})})},y=m("bh6RR"),oP=Object.defineProperty,oT={};((e,t)=>{for(var n in t)oP(e,n,{get:t[n],enumerable:!0})})(oT,{assign:()=>o9,colors:()=>o4,createStringInterpolator:()=>ce,skipAnimation:()=>o5,to:()=>ct,willAdvance:()=>o6});// ../rafz/dist/react-spring_rafz.modern.mjs
var oN=oG(),oO=e=>oV(e,oN),oj=oG();oO.write=e=>oV(e,oj);var oA=oG();oO.onStart=e=>oV(e,oA);var oD=oG();oO.onFrame=e=>oV(e,oD);var oz=oG();oO.onFinish=e=>oV(e,oz);var oI=[];oO.setTimeout=(e,t)=>{let n=oO.now()+t,r=()=>{let e=oI.findIndex(e=>e.cancel==r);~e&&oI.splice(e,1),o$-=~e?1:0},o={time:n,handler:e,cancel:r};return oI.splice(oM(n),0,o),o$+=1,oW(),o};var oM=e=>~(~oI.findIndex(t=>t.time>e)||~oI.length);oO.cancel=e=>{oA.delete(e),oD.delete(e),oz.delete(e),oN.delete(e),oj.delete(e)},oO.sync=e=>{oU=!0,oO.batchedUpdates(e),oU=!1},oO.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,oO.onStart(n)}return r.handler=e,r.cancel=()=>{oA.delete(n),t=null},r};var oF="undefined"!=typeof window?window.requestAnimationFrame:()=>{};oO.use=e=>oF=e,oO.now="undefined"!=typeof performance?()=>performance.now():Date.now,oO.batchedUpdates=e=>e(),oO.catch=console.error,oO.frameLoop="always",oO.advance=()=>{"demand"!==oO.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):oH()};var oL=-1,o$=0,oU=!1;function oV(e,t){oU?(t.delete(e),e(0)):(t.add(e),oW())}function oW(){oL<0&&(oL=0,"demand"!==oO.frameLoop&&oF(oB))}function oB(){~oL&&(oF(oB),oO.batchedUpdates(oH))}function oH(){let e=oL;oL=oO.now();let t=oM(oL);if(t&&(oq(oI.splice(0,t),e=>e.handler()),o$-=t),!o$){oL=-1;return}oA.flush(),oN.flush(e?Math.min(64,oL-e):16.667),oD.flush(),oj.flush(),oz.flush()}function oG(){let e=/* @__PURE__ */new Set,t=e;return{add(n){o$+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(o$-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=/* @__PURE__ */new Set,o$-=t.size,oq(t,t=>t(n)&&e.add(t)),o$+=e.size,t=e)}}}function oq(e,t){e.forEach(e=>{try{t(e)}catch(e){oO.catch(e)}})}// src/helpers.ts
function oQ(){}var oK=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),oY={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function oX(e,t){if(oY.arr(e)){if(!oY.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var oZ=(e,t)=>e.forEach(t);function oJ(e,t,n){if(oY.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(let r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var o0=e=>oY.und(e)?[]:oY.arr(e)?e:[e];function o1(e,t){if(e.size){let n=Array.from(e);e.clear(),oZ(n,t)}}var o2=(e,...t)=>o1(e,e=>e(...t)),o3=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),o4=null,o5=!1,o6=oQ,o9=e=>{e.to&&(ct=e.to),e.now&&(oO.now=e.now),void 0!==e.colors&&(o4=e.colors),null!=e.skipAnimation&&(o5=e.skipAnimation),e.createStringInterpolator&&(ce=e.createStringInterpolator),e.requestAnimationFrame&&oO.use(e.requestAnimationFrame),e.batchedUpdates&&(oO.batchedUpdates=e.batchedUpdates),e.willAdvance&&(o6=e.willAdvance),e.frameLoop&&(oO.frameLoop=e.frameLoop)},o8=/* @__PURE__ */new Set,o7=[],ie=[],it=0,ir={get idle(){return!o8.size&&!o7.length},/** Advance the given animation on every frame until idle. */start(e){it>e.priority?(o8.add(e),oO.onStart(io)):(ii(e),oO(il))},advance:/** Advance all animations by the given time. */il,/** Call this when an animation's priority changes. */sort(e){if(it)oO.onFrame(()=>ir.sort(e));else{let t=o7.indexOf(e);~t&&(o7.splice(t,1),ia(e))}},/**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */clear(){o7=[],o8.clear()}};function io(){o8.forEach(ii),o8.clear(),oO(il)}function ii(e){o7.includes(e)||ia(e)}function ia(e){o7.splice(function(e,t){let n=e.findIndex(t);return n<0?e.length:n}(o7,t=>t.priority>e.priority),0,e)}function il(e){let t=ie;for(let n=0;n<o7.length;n++){let r=o7[n];it=r.priority,r.idle||(o6(r),r.advance(e),r.idle||t.push(r))}return it=0,(ie=o7).length=0,(o7=t).length>0}// src/clamp.ts
var is="[-+]?\\d*\\.?\\d+",iu=is+"%";function ic(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var id=RegExp("rgb"+ic(is,is,is)),ip=RegExp("rgba"+ic(is,is,is,is)),ih=RegExp("hsl"+ic(is,iu,iu)),im=RegExp("hsla"+ic(is,iu,iu,is)),ig=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,iv=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,iy=/^#([0-9a-fA-F]{6})$/,ib=/^#([0-9a-fA-F]{8})$/;function iw(e,t,n){return(n<0&&(n+=1),n>1&&(n-=1),n<1/6)?e+(t-e)*6*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ix(e,t,n){let r=n<.5?n*(1+t):n+t-n*t,o=2*n-r,i=iw(o,r,e+1/3),a=iw(o,r,e),l=iw(o,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*l)<<8}function ik(e){let t=parseInt(e,10);return t<0?0:t>255?255:t}function iS(e){let t=parseFloat(e);return(t%360+360)%360/360}function iE(e){let t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function iC(e){let t=parseFloat(e);return t<0?0:t>100?1:t/100}// src/colorToRgba.ts
function i_(e){let t;let n="number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=iy.exec(e))?parseInt(t[1]+"ff",16)>>>0:o4&&void 0!==o4[e]?o4[e]:(t=id.exec(e))?(ik(t[1])<<24|// r
ik(t[2])<<16|// g
ik(t[3])<<8|// b
255)>>>// a
0:(t=ip.exec(e))?(ik(t[1])<<24|// r
ik(t[2])<<16|// g
ik(t[3])<<8|// b
iE(t[4]))>>>// a
0:(t=ig.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
"ff",16)>>>0:(t=ib.exec(e))?parseInt(t[1],16)>>>0:(t=iv.exec(e))?parseInt(t[1]+t[1]+// r
t[2]+t[2]+// g
t[3]+t[3]+// b
t[4]+t[4],16)>>>0:(t=ih.exec(e))?(255|ix(iS(t[1]),iC(t[2]),iC(t[3])))>>>// a
0:(t=im.exec(e))?(ix(iS(t[1]),iC(t[2]),iC(t[3]))|iE(t[4]))>>>// a
0:null;if(null===n)return e;n=n||0;let r=(4278190080&n)>>>24,o=(16711680&n)>>>16,i=(65280&n)>>>8,a=(255&n)/255;return`rgba(${r}, ${o}, ${i}, ${a})`}// src/createInterpolator.ts
var iR=(e,t,n)=>{if(oY.fun(e))return e;if(oY.arr(e))return iR({range:e,output:t,extrapolate:n});if(oY.str(e.output[0]))return ce(e);let r=e.output,o=e.range||[0,1],i=e.extrapolateLeft||e.extrapolate||"extend",a=e.extrapolateRight||e.extrapolate||"extend",l=e.easing||(e=>e);return t=>{let n=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(t,o);return function(e,t,n,r,o,i,a,l,s){let u=s?s(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===l)return u;"clamp"===l&&(u=n)}return r===o?r:t===n?e<=t?r:o:(t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t),u=i(u),r===-1/0?u=-u:o===1/0?u+=r:u=u*(o-r)+r,u)}(t,o[n],o[n+1],r[n],r[n+1],l,i,a,e.map)}},iP=Symbol.for("FluidValue.get"),iT=Symbol.for("FluidValue.observers"),iN=e=>!!(e&&e[iP]),iO=e=>e&&e[iP]?e[iP]():e,ij=e=>e[iT]||null;function iA(e,t){let n=e[iT];n&&n.forEach(e=>{e.eventObserved?e.eventObserved(t):e(t)})}var iD=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");iz(this,e)}},iz=(e,t)=>iF(e,iP,t);function iI(e,t){if(e[iP]){let n=e[iT];n||iF(e,iT,n=/* @__PURE__ */new Set),!n.has(t)&&(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function iM(e,t){let n=e[iT];if(n&&n.has(t)){let r=n.size-1;r?n.delete(t):e[iT]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var iF=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),iL=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i$=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,iU=RegExp(`(${iL.source})(%|[a-z]+)`,"i"),iV=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,iW=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,iB=e=>{let[t,n]=iH(e);if(!t||o3())return e;let r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){let e=window.getComputedStyle(document.documentElement).getPropertyValue(n);if(e)return e}else if(n&&iW.test(n))return iB(n);else if(n)return n;return e},iH=e=>{let t=iW.exec(e);if(!t)return[,];let[,n,r]=t;return[n,r]},iG=(e,t,n,r,o)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,iq=e=>{cn||(cn=o4?RegExp(`(${Object.keys(o4).join("|")})(?!\\w)`,"g"):/^\b$/);let t=e.output.map(e=>iO(e).replace(iW,iB).replace(i$,i_).replace(cn,i_)),n=t.map(e=>e.match(iL).map(Number)),r=n[0].map((e,t)=>n.map(e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})),o=r.map(t=>iR({...e,output:t}));return e=>{let n=!iU.test(t[0])&&t.find(e=>iU.test(e))?.replace(iL,""),r=0;return t[0].replace(iL,()=>`${o[r++](e)}${n||""}`).replace(iV,iG)}},iQ="react-spring: ",iK=e=>{let t=!1;if("function"!=typeof e)throw TypeError(`${iQ}once requires a function parameter`);return(...n)=>{t||(e(...n),t=!0)}},iY=iK(console.warn),iX=iK(console.warn);// src/isAnimatedString.ts
function iZ(e){return oY.str(e)&&("#"==e[0]||/\d/.test(e)||// Do not identify a CSS variable as an AnimatedString if its SSR
!o3()&&iW.test(e)||e in(o4||{}))}var iJ=o3()?y.useEffect:y.useLayoutEffect,i0=()=>{let e=(0,y.useRef)(!1);return iJ(()=>(e.current=!0,()=>{e.current=!1}),[]),e};// src/hooks/useForceUpdate.ts
function i1(){let e=(0,y.useState)()[1],t=i0();return()=>{t.current&&e(Math.random())}}var i2=e=>(0,y.useEffect)(e,i3),i3=[];function i4(e){let t=(0,y.useRef)();return(0,y.useEffect)(()=>{t.current=e}),t.current}// src/Animated.ts
var y=(m("bh6RR"),m("bh6RR")),i5=Symbol.for("Animated:node"),i6=e=>!!e&&e[i5]===e,i9=e=>e&&e[i5],i8=(e,t)=>oK(e,i5,t),i7=e=>e&&e[i5]&&e[i5].getPayload(),ae=class{constructor(){i8(this,this)}/** Get every `AnimatedValue` used by this node. */getPayload(){return this.payload||[]}},at=class extends ae{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,oY.num(this._value)&&(this.lastPosition=this._value)}/** @internal */static create(e){return new at(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return oY.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){let{done:e}=this;this.done=!1,oY.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},an=class extends at{constructor(e){super(0),this._string=null,this._toString=iR({output:[e,e]})}/** @internal */static create(e){return new an(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(oY.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=iR({output:[this.getValue(),e]})),this._value=0,super.reset()}},ar={dependencies:null},ao=class extends ae{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){let t={};return oJ(this.source,(n,r)=>{i6(n)?t[r]=n.getValue(e):iN(n)?t[r]=iO(n):e||(t[r]=n)}),t}/** Replace the raw object data */setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&oZ(this.payload,e=>e.reset())}/** Create a payload set. */_makePayload(e){if(e){let t=/* @__PURE__ */new Set;return oJ(e,this._addToPayload,t),Array.from(t)}}/** Add to a payload set. */_addToPayload(e){ar.dependencies&&iN(e)&&ar.dependencies.add(e);let t=i7(e);t&&oZ(t,e=>this.add(e))}},ai=class extends ao{constructor(e){super(e)}/** @internal */static create(e){return new ai(e)}getValue(){return this.source.map(e=>e.getValue())}setValue(e){let t=this.getPayload();return e.length==t.length?t.map((t,n)=>t.setValue(e[n])).some(Boolean):(super.setValue(e.map(aa)),!0)}};function aa(e){let t=iZ(e)?an:at;return t.create(e)}function al(e){let t=i9(e);return t?t.constructor:oY.arr(e)?ai:iZ(e)?an:at}var as=(e,t)=>{let n=// re-rendered on every animation frame.
!oY.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,y.forwardRef)((r,o)=>{let i=(0,y.useRef)(null),a=n&&// eslint-disable-next-line react-hooks/rules-of-hooks
(0,y.useCallback)(e=>{i.current=(o&&(oY.fun(o)?o(e):o.current=e),e)},[o]),[l,s]=function(e,t){let n=/* @__PURE__ */new Set;return ar.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)}),e=new ao(e),ar.dependencies=null,[e,n]}(r,t),u=i1(),c=()=>{let e=i.current;if(n&&!e)return;let r=!!e&&t.applyAnimatedValues(e,l.getValue(!0));!1===r&&u()},d=new au(c,s),f=(0,y.useRef)();iJ(()=>(f.current=d,oZ(s,e=>iI(e,d)),()=>{f.current&&(oZ(f.current.deps,e=>iM(e,f.current)),oO.cancel(f.current.update))})),(0,y.useEffect)(c,[]),i2(()=>()=>{let e=f.current;oZ(e.deps,t=>iM(t,e))});let p=t.getComponentProps(l.getValue());return /* @__PURE__ */y.createElement(e,{...p,ref:a})})},au=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&oO.write(this.update)}},ac=Symbol.for("AnimatedComponent"),ad=e=>oY.str(e)?e:e&&oY.str(e.displayName)?e.displayName:oY.fun(e)&&e.name||null;function af(e,...t){return oY.fun(e)?e(...t):e}var ap=(e,t)=>!0===e||!!(t&&e&&(oY.fun(e)?e(t):o0(e).includes(t))),ah=(e,t)=>oY.obj(e)?t&&e[t]:e,am=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,ag=e=>e,av=(e,t=ag)=>{let n=ay;e.default&&!0!==e.default&&(n=Object.keys(e=e.default));let r={};for(let o of n){let n=t(e[o],o);oY.und(n)||(r[o]=n)}return r},ay=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ab={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,// Transition props
items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,// Internal props
keys:1,callId:1,parentId:1};function aw(e){let t=function(e){let t={},n=0;if(oJ(e,(e,r)=>{!ab[r]&&(t[r]=e,n++)}),n)return t}(e);if(t){let n={to:t};return oJ(e,(e,r)=>r in t||(n[r]=e)),n}return{...e}}function ax(e){return e=iO(e),oY.arr(e)?e.map(ax):iZ(e)?oT.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function ak(e){return oY.fun(e)||oY.arr(e)&&oY.obj(e[0])}// src/AnimationConfig.ts
var aS={tension:170,friction:26,mass:1,damping:1,easing:e=>e,clamp:!1},aE=class{constructor(){/**
     * The initial velocity of one or more values.
     *
     * @default 0
     */this.velocity=0,Object.assign(this,aS)}};function aC(e,t){if(oY.und(t.decay)){let n=!oY.und(t.tension)||!oY.und(t.friction);!n&&oY.und(t.frequency)&&oY.und(t.damping)&&oY.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}// src/Animation.ts
var a_=[],aR=class{constructor(){this.changed=!1,this.values=a_,this.toValues=null,this.fromValues=a_,this.config=new aE,this.immediate=!1}};function aP(e,{key:t,props:n,defaultProps:r,state:o,actions:i}){return new Promise((a,l)=>{let s,u;let c=ap(n.cancel??r?.cancel,t);if(c)p();else{oY.und(n.pause)||(o.paused=ap(n.pause,t));let e=r?.pause;!0!==e&&(e=o.paused||ap(e,t)),s=af(n.delay||0,t),e?(o.resumeQueue.add(f),i.pause()):(i.resume(),f())}function d(){o.resumeQueue.add(f),o.timeouts.delete(u),u.cancel(),s=u.time-oO.now()}function f(){s>0&&!oT.skipAnimation?(o.delayed=!0,u=oO.setTimeout(p,s),o.pauseQueue.add(d),o.timeouts.add(u)):p()}function p(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(d),o.timeouts.delete(u),e<=(o.cancelId||0)&&(c=!0);try{i.start({...n,callId:e,cancel:c},a)}catch(e){l(e)}}})}// src/AnimationResult.ts
var aT=(e,t)=>1==t.length?t[0]:t.some(e=>e.cancelled)?aj(e.get()):t.every(e=>e.noop)?aN(e.get()):aO(e.get(),t.every(e=>e.finished)),aN=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),aO=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),aj=e=>({value:e,cancelled:!0,finished:!1});// src/runAsync.ts
function aA(e,t,n,r){let{callId:o,parentId:i,onRest:a}=t,{asyncTo:l,promise:s}=n;return i||e!==l||t.reset?n.promise=(async()=>{let u,c,d;n.asyncId=o,n.asyncTo=e;let f=av(t,(e,t)=>"onRest"===t?void 0:e),p=new Promise((e,t)=>(u=e,c=t)),h=e=>{let t=o<=(n.cancelId||0)&&aj(r)||// The async `to` prop was replaced.
o!==n.asyncId&&aO(r,!1);if(t)throw e.result=t,c(e),e},m=(e,t)=>{let i=new az,a=new aI;return(async()=>{if(oT.skipAnimation)throw aD(n),a.result=aO(r,!1),c(a),a;h(i);let l=oY.obj(e)?{...e}:{...t,to:e};l.parentId=o,oJ(f,(e,t)=>{oY.und(l[t])&&(l[t]=e)});let s=await r.start(l);return h(i),n.paused&&await new Promise(e=>{n.resumeQueue.add(e)}),s})()};if(oT.skipAnimation)return aD(n),aO(r,!1);try{let t;t=oY.arr(e)?(async e=>{for(let t of e)await m(t)})(e):Promise.resolve(e(m,r.stop.bind(r))),await Promise.all([t.then(u),p]),d=aO(r.get(),!0,!1)}catch(e){if(e instanceof az)d=e.result;else if(e instanceof aI)d=e.result;else throw e}finally{o==n.asyncId&&(n.asyncId=i,n.asyncTo=i?l:void 0,n.promise=i?s:void 0)}return oY.fun(a)&&oO.batchedUpdates(()=>{a(d,r,r.item)}),d})():s}function aD(e,t){o1(e.timeouts,e=>e.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var az=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},aI=class extends Error{constructor(){super("SkipAnimationSignal")}},aM=e=>e instanceof aL,aF=1,aL=class extends iD{constructor(){super(...arguments),this.id=aF++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}/** Get the current value */get(){let e=i9(this);return e&&e.getValue()}/** Create a spring that maps our value to another value */to(...e){return oT.to(this,e)}/** @deprecated Use the `to` method instead. */interpolate(...e){return iY(`${iQ}The "interpolate" function is deprecated in v9 (use "to" instead)`),oT.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}/** Called when the first child is added. */_attach(){}/** Called when the last child is removed. */_detach(){}/** Tell our children about our new value */_onChange(e,t=!1){iA(this,{type:"change",parent:this,value:e,idle:t})}/** Tell our children about our new priority */_onPriorityChange(e){this.idle||ir.sort(this),iA(this,{type:"priority",parent:this,priority:e})}},a$=Symbol.for("SpringPhase"),aU=e=>(1&e[a$])>0,aV=e=>(2&e[a$])>0,aW=e=>(4&e[a$])>0,aB=(e,t)=>t?e[a$]|=3:e[a$]&=-3,aH=(e,t)=>t?e[a$]|=4:e[a$]&=-5,aG=class extends aL{constructor(e,t){if(super(),/** The animation state */this.animation=new aR,/** Some props have customizable default values */this.defaultProps={},/** The state for `runAsync` calls */this._state={paused:!1,delayed:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The promise resolvers of pending `start` calls */this._pendingCalls=/* @__PURE__ */new Set,/** The counter for tracking `scheduleProps` calls */this._lastCallId=0,/** The last `scheduleProps` call that changed the `to` prop */this._lastToId=0,this._memoizedDuration=0,!oY.und(e)||!oY.und(t)){let n=oY.obj(e)?{...e}:{...t,from:e};oY.und(n.default)&&(n.default=!0),this.start(n)}}/** Equals true when not advancing on each frame. */get idle(){return!(aV(this)||this._state.asyncTo)||aW(this)}get goal(){return iO(this.animation.to)}get velocity(){let e=i9(this);return e instanceof at?e.lastVelocity||0:e.getPayload().map(e=>e.lastVelocity||0)}/**
   * When true, this value has been animated at least once.
   */get hasAnimated(){return aU(this)}/**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */get isAnimating(){return aV(this)}/**
   * When true, all current and future animations are paused.
   */get isPaused(){return aW(this)}/**
   *
   *
   */get isDelayed(){return this._state.delayed}/** Advance the current animation by a number of milliseconds */advance(e){let t=!0,n=!1,r=this.animation,{toValues:o}=r,{config:i}=r,a=i7(r.to);!a&&iN(r.to)&&(o=o0(iO(r.to))),r.values.forEach((l,s)=>{if(l.done)return;let u=l.constructor==an?1:a?a[s].lastPosition:o[s],c=r.immediate,d=u;if(!c){let t;if(d=l.lastPosition,i.tension<=0){l.done=!0;return}let n=l.elapsedTime+=e,o=r.fromValues[s],a=null!=l.v0?l.v0:l.v0=oY.arr(i.velocity)?i.velocity[s]:i.velocity,f=i.precision||(o==u?.005:Math.min(1,.001*Math.abs(u-o)));if(oY.und(i.duration)){if(i.decay){let e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*n);d=o+a/(1-e)*(1-r),c=Math.abs(l.lastPosition-d)<=f,t=a*r}else{t=null==l.lastVelocity?a:l.lastVelocity;let n=i.restVelocity||f/10,r=i.clamp?0:i.bounce,s=!oY.und(r),p=o==u?l.v0>0:o<u,h=Math.ceil(e/1);for(let e=0;e<h&&!(!(Math.abs(t)>n)&&(c=Math.abs(u-d)<=f));++e){s&&(d==u||d>u==p)&&(t=-t*r,d=u);let e=-(1e-6*i.tension)*(d-u),n=-(.001*i.friction)*t,o=(e+n)/i.mass;t+=1*o,d+=1*t}}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,l.durationProgress>0&&(l.elapsedTime=i.duration*l.durationProgress,n=l.elapsedTime+=e)),r=(r=(i.progress||0)+n/this._memoizedDuration)>1?1:r<0?0:r,l.durationProgress=r),t=((d=o+i.easing(r)*(u-o))-l.lastPosition)/e,c=1==r}l.lastVelocity=t,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[s].done&&(c=!1),c?l.done=!0:t=!1,l.setValue(d,i.round)&&(n=!0)});let l=i9(this),s=l.getValue();if(t){let e=iO(r.to);(s!==e||n)&&!i.decay?(l.setValue(e),this._onChange(e)):n&&i.decay&&this._onChange(s),this._stop()}else n&&this._onChange(s)}/** Set the current value, while stopping the current animation */set(e){return oO.batchedUpdates(()=>{this._stop(),this._focus(e),this._set(e)}),this}/**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */pause(){this._update({pause:!0})}/** Resume the animation if paused. */resume(){this._update({pause:!1})}/** Skip to the end of the current animation. */finish(){if(aV(this)){let{to:e,config:t}=this.animation;oO.batchedUpdates(()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()})}return this}/** Push props into the pending queue. */update(e){let t=this.queue||(this.queue=[]);return t.push(e),this}start(e,t){let n;return oY.und(e)?(n=this.queue||[],this.queue=[]):n=[oY.obj(e)?e:{...t,to:e}],Promise.all(n.map(e=>{let t=this._update(e);return t})).then(e=>aT(this,e))}/**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */stop(e){let{to:t}=this.animation;return this._focus(this.get()),aD(this._state,e&&this._lastCallId),oO.batchedUpdates(()=>this._stop(t,e)),this}/** Restart the animation. */reset(){this._update({reset:!0})}/** @internal */eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}/**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */_prepareNode(e){let t=this.key||"",{to:n,from:r}=e;(null==(n=oY.obj(n)?n[t]:n)||ak(n))&&(n=void 0),null==(r=oY.obj(r)?r[t]:r)&&(r=void 0);let o={to:n,from:r};return aU(this)||(e.reverse&&([n,r]=[r,n]),r=iO(r),oY.und(r)?i9(this)||this._set(n):this._set(r)),o}/** Every update is processed by this method before merging. */_update({...e},t){let{key:n,defaultProps:r}=this;e.default&&Object.assign(r,av(e,(e,t)=>/^on/.test(t)?ah(e,n):e)),aZ(this,e,"onProps"),aJ(this,"onProps",e,this);let o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");let i=this._state;return aP(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{aW(this)||(aH(this,!0),o2(i.pauseQueue),aJ(this,"onPause",aO(this,aq(this,this.animation.to)),this))},resume:()=>{aW(this)&&(aH(this,!1),aV(this)&&this._resume(),o2(i.resumeQueue),aJ(this,"onResume",aO(this,aq(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then(n=>{if(e.loop&&n.finished&&!(t&&n.noop)){let t=aQ(e);if(t)return this._update(t,!0)}return n})}/** Merge props into the current animation */_merge(e,t,n){if(t.cancel)return this.stop(!0),n(aj(this));let r=!oY.und(e.to),o=!oY.und(e.from);if(r||o){if(!(t.callId>this._lastToId))return n(aj(this));this._lastToId=t.callId}let{key:i,defaultProps:a,animation:l}=this,{to:s,from:u}=l,{to:c=s,from:d=u}=e;o&&!r&&(!t.default||oY.und(c))&&(c=d),t.reverse&&([c,d]=[d,c]);let f=!oX(d,u);f&&(l.from=d),d=iO(d);let p=!oX(c,s);p&&this._focus(c);let h=ak(t.to),{config:m}=l,{decay:g,velocity:v}=m;(r||o)&&(m.velocity=0),t.config&&!h&&function(e,t,n){for(let r in n&&(aC(n={...n},t),t={...n,...t}),aC(e,t),Object.assign(e,t),aS)null==e[r]&&(e[r]=aS[r]);let{frequency:r,damping:o}=e,{mass:i}=e;oY.und(r)||(r<.01&&(r=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*o*i/r)}(m,af(t.config,i),t.config!==a.config?af(a.config,i):void 0);let y=i9(this);if(!y||oY.und(c))return n(aO(this,!0));let b=oY.und(t.reset)?o&&!t.default:!oY.und(d)&&ap(t.reset,i),w=b?d:this.get(),x=ax(c),k=oY.num(x)||oY.arr(x)||iZ(x),S=!h&&(!k||ap(a.immediate||t.immediate,i));if(p){let e=al(c);if(e!==y.constructor){if(S)y=this._set(x);else throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`)}}let E=y.constructor,C=iN(c),_=!1;if(!C){let e=b||!aU(this)&&f;(p||e)&&(C=!(_=oX(ax(w),x))),(oX(l.immediate,S)||S)&&oX(m.decay,g)&&oX(m.velocity,v)||(C=!0)}if(_&&aV(this)&&(l.changed&&!b?C=!0:C||this._stop(s)),!h&&((C||iN(s))&&(l.values=y.getPayload(),l.toValues=iN(c)?null:E==an?[1]:o0(x)),l.immediate==S||(l.immediate=S,S||b||this._set(s)),C)){let{onRest:e}=l;oZ(aX,e=>aZ(this,t,e));let r=aO(this,aq(this,s));o2(this._pendingCalls,r),this._pendingCalls.add(n),l.changed&&oO.batchedUpdates(()=>{l.changed=!b,e?.(r,this),b?af(a.onRest,r):l.onStart?.(r,this)})}b&&this._set(w),h?n(aA(t.to,t,this._state,this)):C?this._start():aV(this)&&!p?this._pendingCalls.add(n):n(aN(w))}/** Update the `animation.to` value, which might be a `FluidValue` */_focus(e){let t=this.animation;e!==t.to&&(ij(this)&&this._detach(),t.to=e,ij(this)&&this._attach())}_attach(){let e=0,{to:t}=this.animation;iN(t)&&(iI(t,this),aM(t)&&(e=t.priority+1)),this.priority=e}_detach(){let{to:e}=this.animation;iN(e)&&iM(e,this)}/**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */_set(e,t=!0){let n=iO(e);if(!oY.und(n)){let e=i9(this);if(!e||!oX(n,e.getValue())){let r=al(n);e&&e.constructor==r?e.setValue(n):i8(this,r.create(n)),e&&oO.batchedUpdates(()=>{this._onChange(n,t)})}}return i9(this)}_onStart(){let e=this.animation;e.changed||(e.changed=!0,aJ(this,"onStart",aO(this,aq(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),af(this.animation.onChange,e,this)),af(this.defaultProps.onChange,e,this),super._onChange(e,t)}// This method resets the animation state (even if already animating) to
// ensure the latest from/to range is used, and it also ensures this spring
// is added to the frameloop.
_start(){let e=this.animation;i9(this).reset(iO(e.to)),e.immediate||(e.fromValues=e.values.map(e=>e.lastPosition)),aV(this)||(aB(this,!0),aW(this)||this._resume())}_resume(){oT.skipAnimation?this.finish():ir.start(this)}/**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */_stop(e,t){if(aV(this)){aB(this,!1);let n=this.animation;oZ(n.values,e=>{e.done=!0}),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),iA(this,{type:"idle",parent:this});let r=t?aj(this.get()):aO(this.get(),aq(this,e??n.to));o2(this._pendingCalls,r),n.changed&&(n.changed=!1,aJ(this,"onRest",r,this))}}};function aq(e,t){let n=ax(t),r=ax(e.get());return oX(r,n)}function aQ(e,t=e.loop,n=e.to){let r=af(t);if(r){let o=!0!==r&&aw(r),i=(o||e).reverse,a=!o||o.reset;return aK({...e,loop:t,// Avoid updating default props when looping.
default:!1,// Never loop the `pause` prop.
pause:void 0,// For the "reverse" prop to loop as expected, the "to" prop
// must be undefined. The "reverse" prop is ignored when the
// "to" prop is an array or function.
to:!i||ak(n)?n:void 0,// Ignore the "from" prop except on reset.
from:a?e.from:void 0,reset:a,// The "loop" prop can return a "useSpring" props object to
// override any of the original props.
...o})}}function aK(e){let{to:t,from:n}=e=aw(e),r=/* @__PURE__ */new Set;return oY.obj(t)&&aY(t,r),oY.obj(n)&&aY(n,r),e.keys=r.size?Array.from(r):null,e}function aY(e,t){oJ(e,(e,n)=>null!=e&&t.add(n))}var aX=["onStart","onRest","onChange","onPause","onResume"];function aZ(e,t,n){e.animation[n]=t[n]!==am(t,n)?ah(t[n],e.key):void 0}function aJ(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var a0=["onStart","onChange","onRest"],a1=1,a2=class{constructor(e,t){this.id=a1++,/** The animated values */this.springs={},/** The queue of props passed to the `update` method. */this.queue=[],/** The counter for tracking `scheduleProps` calls */this._lastAsyncId=0,/** The values currently being animated */this._active=/* @__PURE__ */new Set,/** The values that changed recently */this._changed=/* @__PURE__ */new Set,/** Equals false when `onStart` listeners can be called */this._started=!1,/** State used by the `runAsync` function */this._state={paused:!1,pauseQueue:/* @__PURE__ */new Set,resumeQueue:/* @__PURE__ */new Set,timeouts:/* @__PURE__ */new Set},/** The event queues that are flushed once per frame maximum */this._events={onStart:/* @__PURE__ */new Map,onChange:/* @__PURE__ */new Map,onRest:/* @__PURE__ */new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}/**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(e=>e.idle&&!e.isDelayed&&!e.isPaused)}get item(){return this._item}set item(e){this._item=e}/** Get the current values of our springs */get(){let e={};return this.each((t,n)=>e[n]=t.get()),e}/** Set the current values without animating. */set(e){for(let t in e){let n=e[t];oY.und(n)||this.springs[t].set(n)}}/** Push an update onto the queue of each value. */update(e){return e&&this.queue.push(aK(e)),this}/**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */start(e){let{queue:t}=this;return(e?t=o0(e).map(aK):this.queue=[],this._flush)?this._flush(this,t):(a7(this,t),a3(this,t))}/** @internal */stop(e,t){if(!!e!==e&&(t=e),t){let n=this.springs;oZ(o0(t),t=>n[t].stop(!!e))}else aD(this._state,this._lastAsyncId),this.each(t=>t.stop(!!e));return this}/** Freeze the active animation in time */pause(e){if(oY.und(e))this.start({pause:!0});else{let t=this.springs;oZ(o0(e),e=>t[e].pause())}return this}/** Resume the animation if paused. */resume(e){if(oY.und(e))this.start({pause:!1});else{let t=this.springs;oZ(o0(e),e=>t[e].resume())}return this}/** Call a function once per spring value */each(e){oJ(this.springs,e)}/** @internal Called at the end of every animation frame */_onFrame(){let{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,o=this._changed.size>0;(r&&!this._started||o&&!this._started)&&(this._started=!0,o1(e,([e,t])=>{t.value=this.get(),e(t,this,this._item)}));let i=!r&&this._started,a=o||i&&n.size?this.get():null;o&&t.size&&o1(t,([e,t])=>{t.value=a,e(t,this,this._item)}),i&&(this._started=!1,o1(n,([e,t])=>{t.value=a,e(t,this,this._item)}))}/** @internal */eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}oO.onFrame(this._onFrame)}};function a3(e,t){return Promise.all(t.map(t=>a4(e,t))).then(t=>aT(e,t))}async function a4(e,t,n){let{keys:r,to:o,from:i,loop:a,onRest:l,onResolve:s}=t,u=oY.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);let c=oY.arr(o)||oY.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):oZ(a0,n=>{let r=t[n];if(oY.fun(r)){let o=e._events[n];t[n]=({finished:e,cancelled:t})=>{let n=o.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):o.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}});let d=e._state;!d.paused===t.pause?(d.paused=t.pause,o2(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);let f=(r||Object.keys(e.springs)).map(n=>e.springs[n].start(t)),p=!0===t.cancel||!0===am(t,"cancel");(c||p&&d.asyncId)&&f.push(aP(++e._lastAsyncId,{props:t,state:d,actions:{pause:oQ,resume:oQ,start(t,n){p?(aD(d,e._lastAsyncId),n(aj(e))):(t.onRest=l,n(aA(c,t,d,e)))}}})),d.paused&&await new Promise(e=>{d.resumeQueue.add(e)});let h=aT(e,await Promise.all(f));if(a&&h.finished&&!(n&&h.noop)){let n=aQ(t,a,o);if(n)return a7(e,[n]),a4(e,n,!0)}return s&&oO.batchedUpdates(()=>s(h,e,e.item)),h}function a5(e,t){let n={...e.springs};return t&&oZ(o0(t),e=>{oY.und(e.keys)&&(e=aK(e)),oY.obj(e.to)||(e={...e,to:void 0}),a8(n,e,e=>a9(e))}),a6(e,n),n}function a6(e,t){oJ(t,(t,n)=>{e.springs[n]||(e.springs[n]=t,iI(t,e))})}function a9(e,t){let n=new aG;return n.key=e,t&&iI(n,t),n}function a8(e,t,n){t.keys&&oZ(t.keys,r=>{let o=e[r]||(e[r]=n(r));o._prepareNode(t)})}function a7(e,t){oZ(t,t=>{a8(e.springs,t,t=>a9(t,e))})}var le=({children:e,...t})=>{let n=(0,y.useContext)(lt),r=t.pause||!!n.pause,o=t.immediate||!!n.immediate;t=function(e,t){let[n]=(0,y.useState)(()=>({inputs:t,result:e()})),r=(0,y.useRef)(),o=r.current,i=o;if(i){let n=!!(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs));n||(i={inputs:t,result:e()})}else i=n;return(0,y.useEffect)(()=>{r.current=i,o==n&&(n.inputs=n.result=void 0)},[i]),i.result}(()=>({pause:r,immediate:o}),[r,o]);let{Provider:i}=lt;return /* @__PURE__ */y.createElement(i,{value:t},e)},lt=(Object.assign(le,y.createContext({})),le.Provider._context=le,le.Consumer._context=le,le);le.Provider=lt.Provider,le.Consumer=lt.Consumer;var ln=()=>{let e=[],t=function(t){iX(`${iQ}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);let r=[];return oZ(e,(e,o)=>{if(oY.und(t))r.push(e.start());else{let i=n(t,e,o);i&&r.push(e.start(i))}}),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){let n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return oZ(e,e=>e.pause(...arguments)),this},t.resume=function(){return oZ(e,e=>e.resume(...arguments)),this},t.set=function(t){oZ(e,(e,n)=>{let r=oY.fun(t)?t(n,e):t;r&&e.set(r)})},t.start=function(t){let n=[];return oZ(e,(e,r)=>{if(oY.und(t))n.push(e.start());else{let o=this._getProps(t,e,r);o&&n.push(e.start(o))}}),n},t.stop=function(){return oZ(e,e=>e.stop(...arguments)),this},t.update=function(t){return oZ(e,(e,n)=>e.update(this._getProps(t,e,n))),this};let n=function(e,t,n){return oY.fun(e)?e(n,t):e};return t._getProps=n,t},lr=class extends aL{constructor(e,t){super(),this.source=e,/** Equals false when in the frameloop */this.idle=!0,/** The inputs which are currently animating */this._active=/* @__PURE__ */new Set,this.calc=iR(...t);let n=this._get(),r=al(n);i8(this,r.create(n))}advance(e){let t=this._get(),n=this.get();oX(t,n)||(i9(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&li(this._active)&&la(this)}_get(){let e=oY.arr(this.source)?this.source.map(iO):o0(iO(this.source));return this.calc(...e)}_start(){this.idle&&!li(this._active)&&(this.idle=!1,oZ(i7(this),e=>{e.done=!1}),oT.skipAnimation?(oO.batchedUpdates(()=>this.advance()),la(this)):ir.start(this))}// Observe our sources only when we're observed.
_attach(){let e=1;oZ(o0(this.source),t=>{iN(t)&&iI(t,this),aM(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))}),this.priority=e,this._start()}// Stop observing our sources once we have no observers.
_detach(){oZ(o0(this.source),e=>{iN(e)&&iM(e,this)}),this._active.clear(),la(this)}/** @internal */eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=o0(this.source).reduce((e,t)=>Math.max(e,(aM(t)?t.priority:0)+1),0))}};function lo(e){return!1!==e.idle}function li(e){return!e.size||Array.from(e).every(lo)}function la(e){e.idle||(e.idle=!0,oZ(i7(e),e=>{e.done=!0}),iA(e,{type:"idle",parent:e}))}oT.assign({createStringInterpolator:iq,to:(e,t)=>new lr(e,t)}),ir.advance;// src/applyAnimatedValues.ts
var ll=/^--/,ls={},lu={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lc=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),ld=["Webkit","Ms","Moz","O"];lu=Object.keys(lu).reduce((e,t)=>(ld.forEach(n=>e[lc(n,t)]=e[t]),e),lu);var lf=/^(matrix|translate|scale|rotate|skew)/,lp=/^(translate)/,lh=/^(rotate|skew)/,lm=(e,t)=>oY.num(e)&&0!==e?e+t:e,lg=(e,t)=>oY.arr(e)?e.every(e=>lg(e,t)):oY.num(e)?e===t:parseFloat(e)===t,lv=class extends ao{constructor({x:e,y:t,z:n,...r}){let o=[],i=[];(e||t||n)&&(o.push([e||0,t||0,n||0]),i.push(e=>[`translate3d(${e.map(e=>lm(e,"px")).join(",")})`,// prettier-ignore
    lg(e,0)])),oJ(r,(e,t)=>{if("transform"===t)o.push([e||""]),i.push(e=>[e,""===e]);else if(lf.test(t)){if(delete r[t],oY.und(e))return;let n=lp.test(t)?"px":lh.test(t)?"deg":"";o.push(o0(e)),i.push("rotate3d"===t?([e,t,r,o])=>[`rotate3d(${e},${t},${r},${lm(o,n)})`,lg(o,0)]:e=>[`${t}(${e.map(e=>lm(e,n)).join(",")})`,lg(e,t.startsWith("scale")?1:0)])}}),o.length&&(r.transform=new ly(o,i)),super(r)}},ly=class extends iD{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return oZ(this.inputs,(n,r)=>{let o=iO(n[0]),[i,a]=this.transforms[r](oY.arr(o)?o:n.map(iO));e+=" "+i,t=t&&a}),t?"none":e}// Start observing our inputs once we have an observer.
observerAdded(e){1==e&&oZ(this.inputs,e=>oZ(e,e=>iN(e)&&iI(e,this)))}// Stop observing our inputs once we have no observers.
observerRemoved(e){0==e&&oZ(this.inputs,e=>oZ(e,e=>iN(e)&&iM(e,this)))}eventObserved(e){"change"==e.type&&(this._value=null),iA(this,e)}};oT.assign({batchedUpdates:v.unstable_batchedUpdates,createStringInterpolator:iq,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var lb=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=e=>new ao(e),getComponentProps:r=e=>e}={})=>{let o={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{let t=ad(e)||"Anonymous";return(e=oY.str(e)?i[e]||(i[e]=as(e,o)):e[ac]||(e[ac]=as(e,o))).displayName=`Animated(${t})`,e};return oJ(e,(t,n)=>{oY.arr(e)&&(n=ad(t)),i[n]=i(t)}),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr",// SVG
"circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;let n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:o,scrollTop:i,scrollLeft:a,viewBox:l,...s}=t,u=Object.values(s),c=Object.keys(s).map(t=>n||e.hasAttribute(t)?t:ls[t]||(ls[t]=t.replace(/([A-Z])/g,e=>"-"+e.toLowerCase())));for(let t in void 0!==o&&(e.textContent=o),r)if(r.hasOwnProperty(t)){var d;let n=null==(d=r[t])||"boolean"==typeof d||""===d?"":"number"!=typeof d||0===d||ll.test(t)||lu.hasOwnProperty(t)&&lu[t]?(""+d).trim():d+"px";ll.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach((t,n)=>{e.setAttribute(t,u[n])}),void 0!==i&&(e.scrollTop=i),void 0!==a&&(e.scrollLeft=a),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new lv(e),// eslint-disable-next-line @typescript-eslint/no-unused-vars
getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}).animated,y=(m("bh6RR"),m("bh6RR"),m("bh6RR"));const lw=["top","right","bottom","left"],lx=Math.min,lk=Math.max,lS=Math.round,lE=Math.floor,lC=e=>({x:e,y:e}),l_={left:"right",right:"left",bottom:"top",top:"bottom"},lR={start:"end",end:"start"};function lP(e,t){return"function"==typeof e?e(t):e}function lT(e){return e.split("-")[0]}function lN(e){return e.split("-")[1]}function lO(e){return"x"===e?"y":"x"}function lj(e){return"y"===e?"height":"width"}function lA(e){return["top","bottom"].includes(lT(e))?"y":"x"}function lD(e){return e.replace(/start|end/g,e=>lR[e])}function lz(e){return e.replace(/left|right|bottom|top/g,e=>l_[e])}function lI(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function lM(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function lF(e,t,n){let r,{reference:o,floating:i}=e,a=lA(t),l=lO(lA(t)),s=lj(l),u=lT(t),c="y"===a,d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[s]/2-i[s]/2;switch(u){case"top":r={x:d,y:o.y-i.height};break;case"bottom":r={x:d,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:f};break;case"left":r={x:o.x-i.width,y:f};break;default:r={x:o.x,y:o.y}}switch(lN(t)){case"start":r[l]-=p*(n&&c?-1:1);break;case"end":r[l]+=p*(n&&c?-1:1)}return r}/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */const lL=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),s=await (null==a.isRTL?void 0:a.isRTL(t)),u=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:d}=lF(u,r,s),f=r,p={},h=0;for(let n=0;n<l.length;n++){let{name:i,fn:m}=l[n],{x:g,y:v,data:y,reset:b}=await m({x:c,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:u,platform:a,elements:{reference:e,floating:t}});if(c=null!=g?g:c,d=null!=v?v:d,p={...p,[i]:{...p[i],...y}},b&&h<=50){h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(u=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),{x:c,y:d}=lF(u,f,s)),n=-1;continue}}return{x:c,y:d,placement:f,strategy:o,middlewareData:p}};/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */async function l$(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=lP(t,e),h=lI(p),m=l[f?"floating"===d?"reference":"floating":d],g=lM(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===d?{...a.floating,x:r,y:o}:a.reference,y=await (null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await (null==i.isElement?void 0:i.isElement(y))&&await (null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},w=lM(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:y,strategy:s}):v);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */const lU=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:a,elements:l,middlewareData:s}=t,{element:u,padding:c=0}=lP(e,t)||{};if(null==u)return{};let d=lI(c),f={x:n,y:r},p=lO(lA(o)),h=lj(p),m=await a.getDimensions(u),g="y"===p,v=g?"clientHeight":"clientWidth",y=i.reference[h]+i.reference[p]-f[p]-i.floating[h],b=f[p]-i.reference[p],w=await (null==a.getOffsetParent?void 0:a.getOffsetParent(u)),x=w?w[v]:0;// DOM platform can return `window` as the `offsetParent`.
    x&&await (null==a.isElement?void 0:a.isElement(w))||(x=l.floating[v]||i.floating[h]);// If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    let k=x/2-m[h]/2-1,S=lx(d[g?"top":"left"],k),E=lx(d[g?"bottom":"right"],k),C=x-m[h]-E,_=x/2-m[h]/2+(y/2-b/2),R=lk(S,lx(_,C)),P=!s.arrow&&null!=lN(o)&&_!=R&&i.reference[h]/2-(_<S?S:E)-m[h]/2<0,T=P?_<S?_-S:_-C:0;return{[p]:f[p]+T,data:{[p]:R,centerOffset:_-R-T,...P&&{alignmentOffset:T}},reset:P}}});function lV(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function lW(e){return lw.some(t=>e[t]>=0)}// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function lB(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),a=lT(n),l=lN(n),s="y"===lA(n),u=["left","top"].includes(a)?-1:1,c=i&&s?-1:1,d=lP(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&"number"==typeof h&&(p="end"===l?-1*h:h),s?{x:p*c,y:f*u}:{x:f*u,y:p*c}}function lH(e){return lQ(e)?(e.nodeName||"").toLowerCase():"#document"}function lG(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function lq(e){var t;return null==(t=(lQ(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function lQ(e){return e instanceof Node||e instanceof lG(e).Node}function lK(e){return e instanceof Element||e instanceof lG(e).Element}function lY(e){return e instanceof HTMLElement||e instanceof lG(e).HTMLElement}function lX(e){return(// Browsers without `ShadowRoot` support.
"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof lG(e).ShadowRoot))}function lZ(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=l2(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function lJ(e){let t=l0(),n=l2(e);// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function l0(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function l1(e){return["html","body","#document"].includes(lH(e))}function l2(e){return lG(e).getComputedStyle(e)}function l3(e){return lK(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function l4(e){if("html"===lH(e))return e;let t=e.assignedSlot||// DOM Element detected.
e.parentNode||// ShadowRoot detected.
lX(e)&&e.host||// Fallback.
lq(e);return lX(t)?t.host:t}function l5(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=l4(t);return l1(n)?t.ownerDocument?t.ownerDocument.body:t.body:lY(n)&&lZ(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=lG(o);return i?t.concat(a,a.visualViewport||[],lZ(o)?o:[],a.frameElement&&n?l5(a.frameElement):[]):t.concat(o,l5(o,[],n))}function l6(e){let t=l2(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=lY(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,l=lS(n)!==i||lS(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function l9(e){return lK(e)?e:e.contextElement}function l8(e){let t=l9(e);if(!lY(t))return lC(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=l6(t),a=(i?lS(n.width):n.width)/r,l=(i?lS(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}const l7=lC(0);function se(e){let t=lG(e);return l0()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:l7}function st(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),a=l9(e),l=lC(1);t&&(r?lK(r)&&(l=l8(r)):l=l8(e));let s=(void 0===(o=n)&&(o=!1),r&&(!o||r===lG(a))&&o)?se(a):lC(0),u=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,d=i.width/l.x,f=i.height/l.y;if(a){let e=lG(a),t=r&&lK(r)?lG(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=l8(n),t=n.getBoundingClientRect(),r=l2(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;u*=e.x,c*=e.y,d*=e.x,f*=e.y,u+=o,c+=i,n=lG(n).frameElement}}return lM({width:d,height:f,x:u,y:c})}function sn(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
return st(lq(e)).left+l3(e).scrollLeft}function sr(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=lG(e),r=lq(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;let e=l0();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,n);else if("document"===t)r=// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function(e){let t=lq(e),n=l3(e),r=e.ownerDocument.body,o=lk(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=lk(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+sn(e),l=-n.scrollTop;return"rtl"===l2(r).direction&&(a+=lk(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:l}}(lq(e));else if(lK(t))r=// Returns the inner client rect, subtracting scrollbars if present.
function(e,t){let n=st(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=lY(e)?l8(e):lC(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,s=o*i.x,u=r*i.y;return{width:a,height:l,x:s,y:u}}(t,n);else{let n=se(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return lM(r)}function so(e,t){return lY(e)&&"fixed"!==l2(e).position?t?t(e):e.offsetParent:null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function si(e,t){let n=lG(e);if(!lY(e))return n;let r=so(e,t);for(;r&&["table","td","th"].includes(lH(r))&&"static"===l2(r).position;)r=so(r,t);return r&&("html"===lH(r)||"body"===lH(r)&&"static"===l2(r).position&&!lJ(r))?n:r||function(e){let t=l4(e);for(;lY(t)&&!l1(t);){if(lJ(t))return t;t=l4(t)}return null}(e)||n}const sa=async function(e){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||si,i=this.getDimensions;return{reference:function(e,t,n){let r=lY(t),o=lq(t),i="fixed"===n,a=st(e,!0,i,t),l={scrollLeft:0,scrollTop:0},s=lC(0);if(r||!r&&!i){if(("body"!==lH(t)||lZ(o))&&(l=l3(t)),r){let e=st(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=sn(o))}return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},sl={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=lY(n),i=lq(n);if(n===i)return t;let a={scrollLeft:0,scrollTop:0},l=lC(1),s=lC(0);if((o||!o&&"fixed"!==r)&&(("body"!==lH(n)||lZ(i))&&(a=l3(n)),lY(n))){let e=st(n);l=l8(n),s.x=e.x+n.clientLeft,s.y=e.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-a.scrollLeft*l.x+s.x,y:t.y*l.y-a.scrollTop*l.y+s.y}},getDocumentElement:lq,getClippingRect:// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i="clippingAncestors"===n?// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function(e,t){let n=t.get(e);if(n)return n;let r=l5(e,[],!1).filter(e=>lK(e)&&"body"!==lH(e)),o=null,i="fixed"===l2(e).position,a=i?l4(e):e;// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
for(;lK(a)&&!l1(a);){let t=l2(a),n=lJ(a);n||"fixed"!==t.position||(o=null);let l=i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||lZ(a)&&!n&&function e(t,n){let r=l4(t);return!(r===n||!lK(r)||l1(r))&&("fixed"===l2(r).position||e(r,n))}(e,a);l?r=r.filter(e=>e!==a):o=t,a=l4(a)}return t.set(e,r),r}(t,this._c):[].concat(n),a=[...i,r],l=a[0],s=a.reduce((e,n)=>{let r=sr(t,n,o);return e.top=lk(r.top,e.top),e.right=lx(r.right,e.right),e.bottom=lx(r.bottom,e.bottom),e.left=lk(r.left,e.left),e},sr(t,l,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:si,getElementRects:sa,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return l6(e)},getScale:l8,isElement:lK,isRTL:function(e){return"rtl"===l2(e).direction}},ss=(e,t,n)=>{// This caches the expensive `getClippingElementAncestors` function so that
// multiple lifecycle resets re-use the same result. It only lives for a
// single call. If other functions become expensive, we can add them as well.
let r=new Map,o={platform:sl,...n},i={...o.platform,_c:r};return lL(e,t,{...o,platform:i})};var y=m("bh6RR");/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */const su=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;if(n&&({}).hasOwnProperty.call(n,"current")){if(null!=n.current)return lU({element:n.current,padding:r}).fn(t)}else if(n)return lU({element:n,padding:r}).fn(t);return{}}});var sc="undefined"!=typeof document?y.useLayoutEffect:y.useEffect;// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function sd(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!sd(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!sd(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function sf(e){if("undefined"==typeof window)return 1;let t=e.ownerDocument.defaultView||window;return t.devicePixelRatio||1}function sp(e,t){let n=sf(e);return Math.round(t*n)/n}function sh(e){let t=y.useRef(e);return sc(()=>{t.current=e}),t}var y=m("bh6RR");const sm=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{children:n,width:r=10,height:o=5,...i}=e;return/*#__PURE__*/(0,y.createElement)(M.svg,S({},i,{ref:t,width:r,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:/*#__PURE__*/(0,y.createElement)("polygon",{points:"0,0 30,0 15,10"}))});var y=m("bh6RR");/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/const sg="Popper",[sv,sy]=C(sg),[sb,sw]=sv(sg),sx=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...o}=e,i=sw("PopperAnchor",n),a=(0,y.useRef)(null),l=R(t,a);return(0,y.useEffect)(()=>{// Consumer can anchor the popper to something that isn't
// a DOM node e.g. pointer position, so we override the
// `anchorRef` with their virtual ref in this case.
i.onAnchorChange((null==r?void 0:r.current)||a.current)}),r?null:/*#__PURE__*/(0,y.createElement)(M.div,S({},o,{ref:l}))}),sk="PopperContent",[sS,sE]=sv(sk),sC=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{var n,r,o,i,a,l,s,u,c,d,f,p,h,m;let{__scopePopper:g,side:b="bottom",sideOffset:w=0,align:x="center",alignOffset:k=0,arrowPadding:E=0,avoidCollisions:C=!0,collisionBoundary:_=[],collisionPadding:P=0,sticky:T="partial",hideWhenDetached:N=!1,updatePositionStrategy:O="optimized",onPlaced:j,...D}=e,z=sw(sk,g),[I,F]=(0,y.useState)(null),$=R(t,e=>F(e)),[U,V]=(0,y.useState)(null),W=function(e){let[t,n]=(0,y.useState)(void 0);return A(()=>{if(e){// provide size as early as possible
n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;// iron out differences between browsers
r=t.inlineSize,o=t.blockSize}else // for browsers that don't support `borderBoxSize`
// we calculate it ourselves to get the correct border box.
r=e.offsetWidth,o=e.offsetHeight;n({width:r,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(U),B=null!==(n=null==W?void 0:W.width)&&void 0!==n?n:0,H=null!==(r=null==W?void 0:W.height)&&void 0!==r?r:0,G="number"==typeof P?P:{top:0,right:0,bottom:0,left:0,...P},q=Array.isArray(_)?_:[_],Q=q.length>0,K={padding:G,boundary:q.filter(sR),// with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
altBoundary:Q},{refs:Y,floatingStyles:X,placement:Z,isPositioned:J,middlewareData:ee}=/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/react
 */function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:s,open:u}=e,[c,d]=y.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[f,p]=y.useState(r);sd(f,r)||p(r);let[h,m]=y.useState(null),[g,b]=y.useState(null),w=y.useCallback(e=>{e!=E.current&&(E.current=e,m(e))},[m]),x=y.useCallback(e=>{e!==C.current&&(C.current=e,b(e))},[b]),k=i||h,S=a||g,E=y.useRef(null),C=y.useRef(null),_=y.useRef(c),R=sh(s),P=sh(o),T=y.useCallback(()=>{if(!E.current||!C.current)return;let e={placement:t,strategy:n,middleware:f};P.current&&(e.platform=P.current),ss(E.current,C.current,e).then(e=>{let t={...e,isPositioned:!0};N.current&&!sd(_.current,t)&&(_.current=t,v.flushSync(()=>{d(t)}))})},[f,t,n,P]);sc(()=>{!1===u&&_.current.isPositioned&&(_.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[u]);let N=y.useRef(!1);sc(()=>(N.current=!0,()=>{N.current=!1}),[]),sc(()=>{if(k&&(E.current=k),S&&(C.current=S),k&&S){if(R.current)return R.current(k,S,T);T()}},[k,S,T,R]);let O=y.useMemo(()=>({reference:E,floating:C,setReference:w,setFloating:x}),[w,x]),j=y.useMemo(()=>({reference:k,floating:S}),[k,S]),A=y.useMemo(()=>{let e={position:n,left:0,top:0};if(!j.floating)return e;let t=sp(j.floating,c.x),r=sp(j.floating,c.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...sf(j.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,l,j.floating,c.x,c.y]);return y.useMemo(()=>({...c,update:T,refs:O,elements:j,floatingStyles:A}),[c,T,O,j,A])}({// default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
strategy:"fixed",placement:b+("center"!==x?"-"+x:""),whileElementsMounted:(...e)=>{let t=/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:u=!1}=r,c=l9(e),d=i||a?[...c?l5(c):[],...l5(t)]:[];d.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)});let f=c&&s?// https://samthor.au/2021/observing-dom/
function(e,t){let n,r=null,o=lq(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return!function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();let{left:u,top:c,width:d,height:f}=e.getBoundingClientRect();if(l||t(),!d||!f)return;let p=lE(c),h=lE(o.clientWidth-(u+d)),m=lE(o.clientHeight-(c+f)),g=lE(u),v={rootMargin:-p+"px "+-h+"px "+-m+"px "+-g+"px",threshold:lk(0,lx(1,s))||1},y=!0;function b(e){let t=e[0].intersectionRatio;if(t!==s){if(!y)return a();t?a(!1,t):n=setTimeout(()=>{a(!1,1e-7)},100)}y=!1}// Older browsers don't support a `document` as the root and will throw an
// error.
try{r=new IntersectionObserver(b,{...v,// Handle <iframe>s
root:o.ownerDocument})}catch(e){r=new IntersectionObserver(b,v)}r.observe(e)}(!0),i}(c,n):null,p=-1,h=null;l&&(h=new ResizeObserver(e=>{let[r]=e;r&&r.target===c&&h&&(// Prevent update loops when using the `size` middleware.
// https://github.com/floating-ui/floating-ui/issues/1740
h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{h&&h.observe(t)})),n()}),c&&!u&&h.observe(c),h.observe(t));let m=u?st(e):null;return u&&function t(){let r=st(e);m&&(r.x!==m.x||r.y!==m.y||r.width!==m.width||r.height!==m.height)&&n(),m=r,o=requestAnimationFrame(t)}(),n(),()=>{d.forEach(e=>{i&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)}),f&&f(),h&&h.disconnect(),h=null,u&&cancelAnimationFrame(o)}}(...e,{animationFrame:"always"===O});return t},elements:{reference:z.anchor},middleware:[{name:"offset",options:c={mainAxis:w+H,alignmentAxis:k},async fn(e){let{x:t,y:n}=e,r=await lB(e,c);return{x:t+r.x,y:n+r.y,data:r}}},C&&{name:"shift",options:f={mainAxis:!0,crossAxis:!1,limiter:"partial"===T?(void 0===d&&(d={}),{options:d,fn(e){let{x:t,y:n,placement:r,rects:o,middlewareData:i}=e,{offset:a=0,mainAxis:l=!0,crossAxis:s=!0}=lP(d,e),u={x:t,y:n},c=lA(r),f=lO(c),p=u[f],h=u[c],m=lP(a,e),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){let e="y"===f?"height":"width",t=o.reference[f]-o.floating[e]+g.mainAxis,n=o.reference[f]+o.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(s){var v,y;let e="y"===f?"width":"height",t=["top","left"].includes(lT(r)),n=o.reference[c]-o.floating[e]+(t&&(null==(v=i.offset)?void 0:v[c])||0)+(t?0:g.crossAxis),a=o.reference[c]+o.reference[e]+(t?0:(null==(y=i.offset)?void 0:y[c])||0)-(t?g.crossAxis:0);h<n?h=n:h>a&&(h=a)}return{[f]:p,[c]:h}}}):void 0,...K},async fn(e){let{x:t,y:n,placement:r}=e,{mainAxis:o=!0,crossAxis:i=!1,limiter:a={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=lP(f,e),s={x:t,y:n},u=await l$(e,l),c=lA(lT(r)),d=lO(c),p=s[d],h=s[c];if(o){let e=p+u["y"===d?"top":"left"],t=p-u["y"===d?"bottom":"right"];p=lk(e,lx(p,t))}if(i){let e="y"===c?"top":"left",t="y"===c?"bottom":"right",n=h+u[e],r=h-u[t];h=lk(n,lx(h,r))}let m=a.fn({...e,[d]:p,[c]:h});return{...m,data:{x:m.x-t,y:m.y-n}}}},C&&{name:"flip",options:p={...K},async fn(e){var t,n,r,o,i;let{placement:a,middlewareData:l,rects:s,initialPlacement:u,platform:c,elements:d}=e,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:m,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:y=!0,...b}=lP(p,e);// If a reset by the arrow was caused due to an alignment offset being
// added, we should skip any logic now since `flip()` has already done its
// work.
// https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
if(null!=(t=l.arrow)&&t.alignmentOffset)return{};let w=lT(a),x=lT(u)===u,k=await (null==c.isRTL?void 0:c.isRTL(d.floating)),S=m||(x||!y?[lz(u)]:function(e){let t=lz(e);return[lD(e),t,lD(t)]}(u));m||"none"===v||S.push(...function(e,t,n,r){let o=lN(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(lT(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(lD)))),i}(u,y,v,k));let E=[u,...S],C=await l$(e,b),_=[],R=(null==(n=l.flip)?void 0:n.overflows)||[];if(f&&_.push(C[w]),h){let e=function(e,t,n){void 0===n&&(n=!1);let r=lN(e),o=lO(lA(e)),i=lj(o),a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=lz(a)),[a,lz(a)]}(a,s,k);_.push(C[e[0]],C[e[1]])}// One or more sides is overflowing.
if(R=[...R,{placement:a,overflows:_}],!_.every(e=>e<=0)){let e=((null==(r=l.flip)?void 0:r.index)||0)+1,t=E[e];if(t)return{data:{index:e,overflows:R},reset:{placement:t}};// First, find the candidates that fit on the mainAxis side of overflow,
// then find the placement that fits the best on the main crossAxis side.
let n=null==(o=R.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;// Otherwise fallback.
if(!n)switch(g){case"bestFit":{let e=null==(i=R.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:i[0];e&&(n=e);break}case"initialPlacement":n=u}if(a!==n)return{reset:{placement:n}}}return{}}},{name:"size",options:h={...K,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width",`${n}px`),a.setProperty("--radix-popper-available-height",`${r}px`),a.setProperty("--radix-popper-anchor-width",`${o}px`),a.setProperty("--radix-popper-anchor-height",`${i}px`)}},async fn(e){let t,n;let{placement:r,rects:o,platform:i,elements:a}=e,{apply:l=()=>{},...s}=lP(h,e),u=await l$(e,s),c=lT(r),d=lN(r),f="y"===lA(r),{width:p,height:m}=o.floating;"top"===c||"bottom"===c?(t=c,n=d===(await (null==i.isRTL?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(n=c,t="end"===d?"top":"bottom");let g=m-u[t],v=p-u[n],y=!e.middlewareData.shift,b=g,w=v;if(f){let e=p-u.left-u.right;w=d||y?lx(v,e):e}else{let e=m-u.top-u.bottom;b=d||y?lx(g,e):e}if(y&&!d){let e=lk(u.left,0),t=lk(u.right,0),n=lk(u.top,0),r=lk(u.bottom,0);f?w=p-2*(0!==e||0!==t?e+t:lk(u.left,u.right)):b=m-2*(0!==n||0!==r?n+r:lk(u.top,u.bottom))}await l({...e,availableWidth:w,availableHeight:b});let x=await i.getDimensions(a.floating);return p!==x.width||m!==x.height?{reset:{rects:!0}}:{}}},U&&su({element:U,padding:E}),sP({arrowWidth:B,arrowHeight:H}),N&&{name:"hide",options:m={strategy:"referenceHidden",...K},async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=lP(m,e);switch(n){case"referenceHidden":{let n=await l$(e,{...r,elementContext:"reference"}),o=lV(n,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:lW(o)}}}case"escaped":{let n=await l$(e,{...r,altBoundary:!0}),o=lV(n,t.floating);return{data:{escapedOffsets:o,escaped:lW(o)}}}default:return{}}}}]}),[et,en]=sT(Z),er=L(j);A(()=>{J&&(null==er||er())},[J,er]);let eo=null===(o=ee.arrow)||void 0===o?void 0:o.x,ei=null===(i=ee.arrow)||void 0===i?void 0:i.y,ea=(null===(a=ee.arrow)||void 0===a?void 0:a.centerOffset)!==0,[el,es]=(0,y.useState)();return A(()=>{I&&es(window.getComputedStyle(I).zIndex)},[I]),/*#__PURE__*/(0,y.createElement)("div",{ref:Y.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:J?X.transform:"translate(0, -200%)",// keep off the page when measuring
minWidth:"max-content",zIndex:el,"--radix-popper-transform-origin":[null===(l=ee.transformOrigin)||void 0===l?void 0:l.x,null===(s=ee.transformOrigin)||void 0===s?void 0:s.y].join(" ")}// Floating UI interally calculates logical alignment based the `dir` attribute on
,dir:e.dir},/*#__PURE__*/(0,y.createElement)(sS,{scope:g,placedSide:et,onArrowChange:V,arrowX:eo,arrowY:ei,shouldHideArrow:ea},/*#__PURE__*/(0,y.createElement)(M.div,S({"data-side":et,"data-align":en},D,{ref:$,style:{...D.style,// if the PopperContent hasn't been placed yet (not all measurements done)
// we prevent animations so that users's animation don't kick in too early referring wrong sides
animation:J?void 0:"none",// hide the content if using the hide middleware and should be hidden
opacity:null!==(u=ee.hide)&&void 0!==u&&u.referenceHidden?0:void 0}}))))}),s_={top:"bottom",right:"left",bottom:"top",left:"right"};/* -----------------------------------------------------------------------------------------------*/function sR(e){return null!==e}const sP=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,a;let{placement:l,rects:s,middlewareData:u}=t,c=(null===(n=u.arrow)||void 0===n?void 0:n.centerOffset)!==0,d=c?0:e.arrowWidth,f=c?0:e.arrowHeight,[p,h]=sT(l),m={start:"0%",center:"50%",end:"100%"}[h],g=(null!==(r=null===(o=u.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+d/2,v=(null!==(i=null===(a=u.arrow)||void 0===a?void 0:a.y)&&void 0!==i?i:0)+f/2,y="",b="";return"bottom"===p?(y=c?m:`${g}px`,b=`${-f}px`):"top"===p?(y=c?m:`${g}px`,b=`${s.floating.height+f}px`):"right"===p?(y=`${-f}px`,b=c?m:`${v}px`):"left"===p&&(y=`${s.floating.width+f}px`,b=c?m:`${v}px`),{data:{x:y,y:b}}}});function sT(e){let[t,n="center"]=e.split("-");return[t,n]}const sN=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,y.useState)(null);return/*#__PURE__*/(0,y.createElement)(sb,{scope:t,anchor:r,onAnchorChange:o},n)},sO="Popover",[sj,sA]=C(sO,[sy]),sD=sy(),[sz,sI]=sj(sO),sM=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopePopover:n,...r}=e,o=sI("PopoverTrigger",n),i=sD(n),a=R(t,o.triggerRef),l=/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":sG(o.open)},r,{ref:a,onClick:E(e.onClick,o.onOpenToggle)}));return o.hasCustomAnchor?l:/*#__PURE__*/(0,y.createElement)(sx,S({asChild:!0},i),l)}),sF="PopoverPortal",[sL,s$]=sj(sF,{forceMount:void 0}),sU="PopoverContent",sV=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=s$(sU,e.__scopePopover),{forceMount:r=n.forceMount,...o}=e,i=sI(sU,e.__scopePopover);return/*#__PURE__*/(0,y.createElement)(eo,{present:r||i.open},i.modal?/*#__PURE__*/(0,y.createElement)(sW,S({},o,{ref:t})):/*#__PURE__*/(0,y.createElement)(sB,S({},o,{ref:t})))}),sW=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=sI(sU,e.__scopePopover),r=(0,y.useRef)(null),o=R(t,r),i=(0,y.useRef)(!1);return(0,y.useEffect)(()=>{let e=r.current;if(e)return nA(e)},[]),/*#__PURE__*/(0,y.createElement)(n_,{as:P,allowPinchZoom:!0},/*#__PURE__*/(0,y.createElement)(sH,S({},e,{ref:o// we make sure we're not trapping once it's been closed
,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:E(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),i.current||null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:E(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;i.current=r},{checkForDefaultPrevented:!1})// When focus is trapped, a `focusout` event may still happen.
,onFocusOutside:E(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})))}),sB=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let n=sI(sU,e.__scopePopover),r=(0,y.useRef)(!1),o=(0,y.useRef)(!1);return/*#__PURE__*/(0,y.createElement)(sH,S({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var i,a;null===(i=e.onCloseAutoFocus)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current||null===(a=n.triggerRef.current)||void 0===a||a.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var i,a;null===(i=e.onInteractOutside)||void 0===i||i.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));// As the trigger is already setup to close, without doing so would
// cause it to close and immediately open.
let l=t.target,s=null===(a=n.triggerRef.current)||void 0===a?void 0:a.contains(l);s&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}}))}),sH=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:c,...d}=e,f=sI(sU,n),p=sD(n);return t1(),/*#__PURE__*/(0,y.createElement)(tq,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i},/*#__PURE__*/(0,y.createElement)(t$,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:c,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onDismiss:()=>f.onOpenChange(!1)},/*#__PURE__*/(0,y.createElement)(sC,S({"data-state":sG(f.open),role:"dialog",id:f.contentId},p,d,{ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});/* -----------------------------------------------------------------------------------------------*/function sG(e){return e?"open":"closed"}const sq=e=>{let{__scopePopover:t,forceMount:n,children:r,container:o}=e,i=sI(sF,t);return/*#__PURE__*/(0,y.createElement)(sL,{scope:t,forceMount:n},/*#__PURE__*/(0,y.createElement)(eo,{present:n||i.open},/*#__PURE__*/(0,y.createElement)(tJ,{asChild:!0,container:o},r)))},sQ=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:a=!1}=e,l=sD(t),s=(0,y.useRef)(null),[u,c]=(0,y.useState)(!1),[d=!1,f]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,y.createElement)(sN,l,/*#__PURE__*/(0,y.createElement)(sz,{scope:t,contentId:I(),triggerRef:s,open:d,onOpenChange:f,onOpenToggle:(0,y.useCallback)(()=>f(e=>!e),[f]),hasCustomAnchor:u,onCustomAnchorAdd:(0,y.useCallback)(()=>c(!0),[]),onCustomAnchorRemove:(0,y.useCallback)(()=>c(!1),[]),modal:a},n))},sK=/*#__PURE__*/y.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},o)=>/*#__PURE__*/(0,g.jsx)(sq,{children:/*#__PURE__*/(0,g.jsx)(sV,{ref:o,align:t,sideOffset:n,className:eY("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));sK.displayName=sV.displayName,m("bh6RR");const sY=rd("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function sX({className:e,variant:t,...n}){return/*#__PURE__*/(0,g.jsx)("div",{className:eY(sY({variant:t}),e),...n})}function sZ({words:e}){return/*#__PURE__*/(0,g.jsx)("div",{className:"grid grid-cols-4 gap-4",children:e.map(t=>/*#__PURE__*/(0,g.jsx)(oR,{word:t,fullCandidateSize:e.length},t))})}function sJ({...e}){let t=`${{1:"rgb(74 222 128)",2:"rgb(251 191 36)",3:"rgb(129 140 248)",4:"rgb(34 211 238)"}[e.difficulty]}`,[n,r]=/*@__PURE__*/f(y).useState(!1),o=// src/hooks/useSpring.ts
function(e,t){let n=oY.fun(e),[[r],o]=// src/hooks/useSprings.ts
function(e,t,n){let r=oY.fun(t)&&t;r&&!n&&(n=[]);let o=(0,y.useMemo)(()=>r||3==arguments.length?ln():void 0,[]),i=(0,y.useRef)(0),a=i1(),l=(0,y.useMemo)(()=>({ctrls:[],queue:[],flush(e,t){let n=a5(e,t),r=i.current>0&&!l.queue.length&&!Object.keys(n).some(t=>!e.springs[t]);return r?a3(e,t):new Promise(r=>{a6(e,n),l.queue.push(()=>{r(a3(e,t))}),a()})}}),[]),s=(0,y.useRef)([...l.ctrls]),u=[],c=i4(e)||0;function d(e,n){for(let o=e;o<n;o++){let e=s.current[o]||(s.current[o]=new a2(null,l.flush)),n=r?r(o,e):t[o];n&&(u[o]=function(e){let t=aK(e);return oY.und(t.default)&&(t.default=av(t)),t}(n))}}(0,y.useMemo)(()=>{oZ(s.current.slice(e,c),e=>{e.ref?.delete(e),o?.delete(e),e.stop(!0)}),s.current.length=e,d(c,e)},[e]),(0,y.useMemo)(()=>{d(0,Math.min(c,e))},n);let f=s.current.map((e,t)=>a5(e,u[t])),p=(0,y.useContext)(le),h=i4(p),m=p!==h&&function(e){for(let t in e)return!0;return!1}(p);iJ(()=>{i.current++,l.ctrls=s.current;let{queue:e}=l;e.length&&(l.queue=[],oZ(e,e=>e())),oZ(s.current,(e,t)=>{o?.add(e),m&&e.start({default:p});let n=u[t];if(n){var r;(r=n.ref)&&e.ref!==r&&(e.ref?.delete(e),r.add(e),e.ref=r),e.ref?e.queue.push(n):e.start(n)}})}),i2(()=>()=>{oZ(l.ctrls,e=>e.stop(!0))});let g=f.map(e=>({...e}));return o?[g,o]:g}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,o]:r}({from:{opacity:0,transform:"translateY(100%)"},to:{opacity:1,transform:"translateY(0%)"},delay:250}),i=null!=e.imageSrc;return/*#__PURE__*/(0,g.jsx)(lb.div,{style:o,children:i?/*#__PURE__*/(0,g.jsxs)(sQ,{children:[/*#__PURE__*/(0,g.jsx)(sM,{asChild:!0,children:/*#__PURE__*/(0,g.jsxs)("div",{className:"cursor-pointer hover:animate-pulse shadow-md",style:{backgroundColor:t,borderRadius:8},onClick:()=>r(!0),children:[!n&&/*#__PURE__*/(0,g.jsx)(sX,{className:"animate-pulse absolute top-0 right-0 mr-2 mt-2",children:"View More"}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-bold pt-2 pl-4",children:e.category}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-thin pb-2 pl-4",children:e.words.join(", ")})]})}),/*#__PURE__*/(0,g.jsx)(sK,{children:/*#__PURE__*/(0,g.jsx)("div",{children:/*#__PURE__*/(0,g.jsx)("img",{src:e.imageSrc})})})]}):/*#__PURE__*/(0,g.jsxs)("div",{style:{backgroundColor:t,borderRadius:8},children:[/*#__PURE__*/(0,g.jsx)("p",{className:"font-bold pt-2 pl-4",children:e.category}),/*#__PURE__*/(0,g.jsx)("p",{className:"font-thin pb-2 pl-4",children:e.words.join(", ")})]})})}var s0=function({gameRows:e,shouldGridShake:t,setShouldGridShake:n}){let{submittedGuesses:r,isGameOver:o,isGameWon:i,solvedGameData:a}=/*@__PURE__*/f(y).useContext(oC),{gameData:l}=/*@__PURE__*/f(y).useContext(ow);/*@__PURE__*/f(y).useEffect(()=>{let e=window.setTimeout(()=>{n(!1);// this timeout should probably be calculated since it depends on animation values for the grid shake
},2e3);// cleanup timeout
return()=>window.clearTimeout(e)},[r]);let s=!o,u=s&&a.length>0;return/*#__PURE__*/(0,g.jsxs)("div",{children:[(o&&i||u)&&/*#__PURE__*/(0,g.jsx)("div",{className:"grid gap-y-2 pb-2",children:a.map(e=>/*#__PURE__*/(0,g.jsx)(sJ,{...e},e.category))}),s&&/*#__PURE__*/(0,g.jsx)("div",{className:`grid gap-y-2 ${t?"Lj2Yua_shake":""}`,children:e.map((e,t)=>/*#__PURE__*/(0,g.jsx)(sZ,{words:e},t))}),o&&!i&&/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-y-2 pb-2",children:[/*#__PURE__*/(0,g.jsx)("p",{children:"The answer categories are below."}),l.map(e=>/*#__PURE__*/(0,g.jsx)(sJ,{...e},e.category))]})]})},y=m("bh6RR");/**
 * lucide-react v0.288.0 - ISC
 */const s1=x("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s2=x("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);function s3({isUsed:e}){return/*#__PURE__*/(0,g.jsx)("div",{children:e?/*#__PURE__*/(0,g.jsx)(s2,{className:"h-4 w-4 mt-1 stroke-neutral-400"}):/*#__PURE__*/(0,g.jsx)(s1,{className:"h-4 w-4 mt-1 fill-green-300 stroke-cyan-300"})})}var s4=function(){let{numMistakesUsed:e}=/*@__PURE__*/f(y).useContext(oC),t=eZ(4);return/*#__PURE__*/(0,g.jsxs)("div",{className:"flex flex-row gap-x-4 justify-center",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-base",children:"Mistakes Remaining: "}),t.map(t=>/*#__PURE__*/(0,g.jsx)(s3,{isUsed:t<e},t))]})},y=(m("bh6RR"),m("bh6RR"),m("bh6RR"),m("bh6RR")),s5={};//
s5=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;// Test for A's keys different from B.
for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0};var s6="-ms-",s9="-moz-",s8="-webkit-",s7="comm",ue="rule",ut="decl",un="@keyframes",ur=Math.abs,uo=String.fromCharCode,ui=Object.assign;function ua(e,t){return(e=t.exec(e))?e[0]:e}function ul(e,t,n){return e.replace(t,n)}function us(e,t){return e.indexOf(t)}function uu(e,t){return 0|e.charCodeAt(t)}function uc(e,t,n){return e.slice(t,n)}function ud(e){return e.length}function uf(e,t){return t.push(e),e}function up(e,t){return e.filter(function(e){return!ua(e,t)})}var uh=1,um=1,ug=0,uv=0,uy=0,ub="";function uw(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:uh,column:um,length:a,return:"",siblings:l}}function ux(e,t){return ui(uw("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function uk(e){for(;e.root;)e=ux(e.root,{children:[e]});uf(e,e.siblings)}function uS(){return uy=uv<ug?uu(ub,uv++):0,um++,10===uy&&(um=1,uh++),uy}function uE(){return uu(ub,uv)}function uC(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function u_(e){var t,n;return(t=uv-1,n=function e(t){for(;uS();)switch(uy){case t:return uv;case 34:case 39:34!==t&&39!==t&&e(uy);break;case 40:41===t&&e(t);break;case 92:uS()}return uv}(91===e?e+2:40===e?e+1:e),uc(ub,t,n)).trim()}function uR(e,t,n,r,o,i,a,l,s,u,c,d){for(var f=o-1,p=0===o?i:[""],h=p.length,m=0,g=0,v=0;m<r;++m)for(var y=0,b=uc(e,f+1,f=ur(g=a[m])),w=e;y<h;++y)(w=(g>0?p[y]+" "+b:ul(b,/&\f/g,p[y])).trim())&&(s[v++]=w);return uw(e,t,n,0===o?ue:l,s,u,c,d)}function uP(e,t,n,r,o){return uw(e,t,n,ut,uc(e,0,r),uc(e,r+1,-1),r,o)}function uT(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function uN(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case ut:return e.return=e.return||e.value;case s7:return"";case un:return e.return=e.value+"{"+uT(e.children,r)+"}";case ue:if(!ud(e.value=e.props.join(",")))return""}return ud(n=uT(e.children,r))?e.return=e.value+"{"+n+"}":""}function uO(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ut:e.return=function e(t,n,r){var o;switch(o=n,45^uu(t,0)?(((o<<2^uu(t,0))<<2^uu(t,1))<<2^uu(t,2))<<2^uu(t,3):0){case 5103:return s8+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s8+t+t;case 4789:return s9+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s8+t+s9+t+s6+t+t;case 5936:switch(uu(t,n+11)){case 114:return s8+t+s6+ul(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s8+t+s6+ul(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s8+t+s6+ul(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return s8+t+s6+t+t;case 6165:return s8+t+s6+"flex-"+t+t;case 5187:return s8+t+ul(t,/(\w+).+(:[^]+)/,s8+"box-$1$2"+s6+"flex-$1$2")+t;case 5443:return s8+t+s6+"flex-item-"+ul(t,/flex-|-self/g,"")+(ua(t,/flex-|baseline/)?"":s6+"grid-row-"+ul(t,/flex-|-self/g,""))+t;case 4675:return s8+t+s6+"flex-line-pack"+ul(t,/align-content|flex-|-self/g,"")+t;case 5548:return s8+t+s6+ul(t,"shrink","negative")+t;case 5292:return s8+t+s6+ul(t,"basis","preferred-size")+t;case 6060:return s8+"box-"+ul(t,"-grow","")+s8+t+s6+ul(t,"grow","positive")+t;case 4554:return s8+ul(t,/([^-])(transform)/g,"$1"+s8+"$2")+t;case 6187:return ul(ul(ul(t,/(zoom-|grab)/,s8+"$1"),/(image-set)/,s8+"$1"),t,"")+t;case 5495:case 3959:return ul(t,/(image-set\([^]*)/,s8+"$1$`$1");case 4968:return ul(ul(t,/(.+:)(flex-)?(.*)/,s8+"box-pack:$3"+s6+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s8+t+t;case 4200:if(!ua(t,/flex-|baseline/))return s6+"grid-column-align"+uc(t,n)+t;break;case 2592:case 3360:return s6+ul(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,ua(e.props,/grid-\w+-end/)}))return~us(t+(r=r[n].value),"span")?t:s6+ul(t,"-start","")+t+s6+"grid-row-span:"+(~us(r,"span")?ua(r,/\d+/):+ua(r,/\d+/)-+ua(t,/\d+/))+";";return s6+ul(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return ua(e.props,/grid-\w+-start/)})?t:s6+ul(ul(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ul(t,/(.+)-inline(.+)/,s8+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ud(t)-1-n>6)switch(uu(t,n+1)){case 109:if(45!==uu(t,n+4))break;case 102:return ul(t,/(.+:)(.+)-([^]+)/,"$1"+s8+"$2-$3$1"+s9+(108==uu(t,n+3)?"$3":"$2-$3"))+t;case 115:return~us(t,"stretch")?e(ul(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return ul(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,o,i,a,l){return s6+n+":"+r+l+(o?s6+n+"-span:"+(i?a:+a-+r)+l:"")+t});case 4949:if(121===uu(t,n+6))return ul(t,":",":"+s8)+t;break;case 6444:switch(uu(t,45===uu(t,14)?18:11)){case 120:return ul(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s8+(45===uu(t,14)?"inline-":"")+"box$3$1"+s8+"$2$3$1"+s6+"$2box$3")+t;case 100:return ul(t,":",":"+s6)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ul(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case un:return uT([ux(e,{value:ul(e.value,"@","@"+s8)})],r);case ue:if(e.length)return(n=e.props).map(function(t){switch(ua(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":uk(ux(e,{props:[ul(t,/:(read-\w+)/,":"+s9+"$1")]})),uk(ux(e,{props:[t]})),ui(e,{props:up(n,r)});break;case"::placeholder":uk(ux(e,{props:[ul(t,/:(plac\w+)/,":"+s8+"input-$1")]})),uk(ux(e,{props:[ul(t,/:(plac\w+)/,":"+s9+"$1")]})),uk(ux(e,{props:[ul(t,/:(plac\w+)/,s6+"input-$1")]})),uk(ux(e,{props:[t]})),ui(e,{props:up(n,r)})}return""}).join("")}}var uj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},uA={},uD=uA={};function uz(){throw Error("setTimeout has not been defined")}function uI(){throw Error("clearTimeout has not been defined")}function uM(e){if(cr===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((cr===uz||!cr)&&setTimeout)return cr=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cr(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cr.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cr.call(this,e,0)}}}!function(){try{cr="function"==typeof setTimeout?setTimeout:uz}catch(e){cr=uz}try{co="function"==typeof clearTimeout?clearTimeout:uI}catch(e){co=uI}}();var uF=[],uL=!1,u$=-1;function uU(){uL&&ci&&(uL=!1,ci.length?uF=ci.concat(uF):u$=-1,uF.length&&uV())}function uV(){if(!uL){var e=uM(uU);uL=!0;for(var t=uF.length;t;){for(ci=uF,uF=[];++u$<t;)ci&&ci[u$].run();u$=-1,t=uF.length}ci=null,uL=!1,function(e){if(co===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((co===uI||!co)&&clearTimeout)return co=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
co(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return co.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return co.call(this,e)}}}(e)}}// v8 likes predictible objects
function uW(e,t){this.fun=e,this.array=t}function uB(){}uD.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];uF.push(new uW(e,t)),1!==uF.length||uL||uM(uV)},uW.prototype.run=function(){this.fun.apply(null,this.array)},uD.title="browser",uD.browser=!0,uD.env={},uD.argv=[],uD.version="",uD.versions={},uD.on=uB,uD.addListener=uB,uD.once=uB,uD.off=uB,uD.removeListener=uB,uD.removeAllListeners=uB,uD.emit=uB,uD.prependListener=uB,uD.prependOnceListener=uB,uD.listeners=function(e){return[]},uD.binding=function(e){throw Error("process.binding is not supported")},uD.cwd=function(){return"/"},uD.chdir=function(e){throw Error("process.chdir is not supported")},uD.umask=function(){return 0};var uH=(void 0!==uA&&uA.env,"data-styled"),uG="undefined"!=typeof window&&"HTMLElement"in window,uq=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:(void 0!==uA&&uA.env,void 0!==uA&&uA.env,!1)),uQ=Object.freeze([]),uK=Object.freeze({}),uY=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uX=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uZ=/(^-|-$)/g;function uJ(e){return e.replace(uX,"-").replace(uZ,"")}var u0=/(a)(d)/gi,u1=function(e){return String.fromCharCode(e+(e>25?39:97))};function u2(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=u1(t%52)+n;return(u1(t%52)+n).replace(u0,"$1-$2")}var u3,u4,u5,u6,u9,u8,u7,ce,ct,cn,cr,co,ci,ca,cl=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cs=function(e){return cl(5381,e)};function cu(e){return"string"==typeof e}var cc="function"==typeof Symbol&&Symbol.for,cd=cc?Symbol.for("react.memo"):60115,cf=cc?Symbol.for("react.forward_ref"):60112,cp={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ch={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cg=((ca={})[cf]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ca[cd]=cm,ca);function cv(e){return("type"in e&&e.type.$$typeof)===cd?cm:"$$typeof"in e?cg[e.$$typeof]:cp}var cy=Object.defineProperty,cb=Object.getOwnPropertyNames,cw=Object.getOwnPropertySymbols,cx=Object.getOwnPropertyDescriptor,ck=Object.getPrototypeOf,cS=Object.prototype;function cE(e){return"function"==typeof e}function cC(e){return"object"==typeof e&&"styledComponentId"in e}function c_(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cR(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function cP(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cT(e,t){Object.defineProperty(e,"toString",{value:t})}function cN(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var cO=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw cN(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),cj=new Map,cA=new Map,cD=1,cz=function(e){if(cj.has(e))return cj.get(e);for(;cA.has(cD);)cD++;var t=cD++;return cj.set(e,t),cA.set(t,e),t},cI=function(e,t){cj.set(e,t),cA.set(t,e)},cM="style[".concat(uH,"][").concat("data-styled-version",'="').concat("6.1.0",'"]'),cF=new RegExp("^".concat(uH,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cL=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},c$=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(cF);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(cI(c,u),cL(e,c,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function cU(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var cV=function(e){var t,n=document.head,r=e||n,o=document.createElement("style"),i=(t=Array.from(r.querySelectorAll("style[".concat(uH,"]"))))[t.length-1],a=void 0!==i?i.nextSibling:null;o.setAttribute(uH,"active"),o.setAttribute("data-styled-version","6.1.0");var l=cU();return l&&o.setAttribute("nonce",l),r.insertBefore(o,a),o},cW=function(){function e(e){this.element=cV(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw cN(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),cB=function(){function e(e){this.element=cV(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),cH=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),cG=uG,cq={isServer:!uG,useCSSOMInjection:!uq},cQ=function(){function e(e,t,n){void 0===e&&(e=uK),void 0===t&&(t={});var r=this;this.options=t3(t3({},cq),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&uG&&cG&&(cG=!1,function(e){for(var t=document.querySelectorAll(cM),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(uH)&&(c$(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),cT(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++)(function(n){var o=cA.get(n);if(void 0!==o){var i=e.names.get(o),a=t.getGroup(n);if(void 0!==i&&0!==a.length){var l="".concat(uH,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat("/*!sc*/\n")}}})(o);return r}(r)})}return e.registerId=function(e){return cz(e)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(t3(t3({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n,r;return this.tag||(this.tag=(n=(t=this.options).useCSSOMInjection,r=t.target,e=t.isServer?new cH(r):n?new cW(r):new cB(r),new cO(e)))},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(cz(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(cz(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(cz(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cK=/&/g,cY=/^\s*\/\/.*$/gm;function cX(e){var t,n,r,o=void 0===e?uK:e,i=o.options,a=void 0===i?uK:i,l=o.plugins,s=void 0===l?uQ:l,u=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push(function(e){e.type===ue&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(cK,n).replace(r,u))}),a.prefix&&c.push(uO),c.push(uN);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=RegExp("\\".concat(n,"\\b"),"g");var s,u,d,f,p,h=e.replace(cY,""),m=(p=function e(t,n,r,o,i,a,l,s,u){for(var c,d=0,f=0,p=l,h=0,m=0,g=0,v=1,y=1,b=1,w=0,x="",k=i,S=a,E=o,C=x;y;)switch(g=w,w=uS()){case 40:if(108!=g&&58==uu(C,p-1)){-1!=us(C+=ul(u_(w),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:C+=u_(w);break;case 9:case 10:case 13:case 32:C+=function(e){for(;uy=uE();)if(uy<33)uS();else break;return uC(e)>2||uC(uy)>3?"":" "}(g);break;case 92:C+=function(e,t){for(var n;--t&&uS()&&!(uy<48)&&!(uy>102)&&(!(uy>57)||!(uy<65))&&(!(uy>70)||!(uy<97)););return n=uv+(t<6&&32==uE()&&32==uS()),uc(ub,e,n)}(uv-1,7);continue;case 47:switch(uE()){case 42:case 47:uf(uw(c=function(e,t){for(;uS();)if(e+uy===57)break;else if(e+uy===84&&47===uE())break;return"/*"+uc(ub,t,uv-1)+"*"+uo(47===e?e:uS())}(uS(),uv),n,r,s7,uo(uy),uc(c,2,-2),0,u),u);break;default:C+="/"}break;case 123*v:s[d++]=ud(C)*b;case 125*v:case 59:case 0:switch(w){case 0:case 125:y=0;case 59+f:-1==b&&(C=ul(C,/\f/g,"")),m>0&&ud(C)-p&&uf(m>32?uP(C+";",o,r,p-1,u):uP(ul(C," ","")+";",o,r,p-2,u),u);break;case 59:C+=";";default:if(uf(E=uR(C,n,r,d,f,i,s,x,k=[],S=[],p,a),a),123===w){if(0===f)e(C,n,E,E,k,a,p,s,S);else switch(99===h&&110===uu(C,3)?100:h){case 100:case 108:case 109:case 115:e(t,E,E,o&&uf(uR(t,E,E,0,0,i,s,x,i,k=[],p,S),S),i,S,p,s,o?k:S);break;default:e(C,E,E,E,[""],S,0,s,S)}}}d=f=m=0,v=b=1,x=C="",p=l;break;case 58:p=1+ud(C),m=g;default:if(v<1){if(123==w)--v;else if(125==w&&0==v++&&125==(uy=uv>0?uu(ub,--uv):0,um--,10===uy&&(um=1,uh--),uy))continue}switch(C+=uo(w),w*v){case 38:b=f>0?1:(C+="\f",-1);break;case 44:s[d++]=(ud(C)-1)*b,b=1;break;case 64:45===uE()&&(C+=u_(uS())),h=uE(),f=p=ud(x=C+=function(e){for(;!uC(uE());)uS();return uc(ub,e,uv)}(uv)),w++;break;case 45:45===g&&2==ud(C)&&(v=0)}}return a}("",null,null,null,[""],(f=d=i||o?"".concat(i," ").concat(o," { ").concat(h," }"):h,uh=um=1,ug=ud(ub=f),uv=0,d=[]),0,[0],d),ub="",p);a.namespace&&(m=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(m,a.namespace));var g=[];return uT(m,(u=(s=c.concat(function(e){var t;!e.root&&(e=e.return)&&(t=e,g.push(t))})).length,function(e,t,n,r){for(var o="",i=0;i<u;i++)o+=s[i](e,t,n,r)||"";return o})),g};return d.hash=s.length?s.reduce(function(e,t){return t.name||cN(15),cl(e,t.name)},5381).toString():"",d}var cZ=new cQ,cJ=cX(),c0=/*@__PURE__*/f(y).createContext({shouldForwardProp:void 0,styleSheet:cZ,stylis:cJ}),c1=(c0.Consumer,/*@__PURE__*/f(y).createContext(void 0));function c2(){return(0,y.useContext)(c0)}function c3(e){var t=(0,y.useState)(e.stylisPlugins),n=t[0],r=t[1],o=c2().styleSheet,i=(0,y.useMemo)(function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,y.useMemo)(function(){return cX({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,y.useEffect)(function(){/*@__PURE__*/f(s5)(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,y.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return /*@__PURE__*/f(y).createElement(c0.Provider,{value:l},/*@__PURE__*/f(y).createElement(c1.Provider,{value:a},e.children))}var c4=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=cJ);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,cT(this,function(){throw cN(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=cJ),this.name+e.hash},e}();function c5(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var c6=function(e){return null==e||!1===e||""===e},c9=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!c6(r)&&(Array.isArray(r)&&r.isCss||cE(r)?t.push("".concat(c5(n),":"),r,";"):cP(r)?t.push.apply(t,t5(t5(["".concat(n," {")],c9(r),!1),["}"],!1)):t.push("".concat(c5(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in uj||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function c8(e,t,n,r){return c6(e)?[]:cC(e)?[".".concat(e.styledComponentId)]:cE(e)?!cE(e)||e.prototype&&e.prototype.isReactComponent||!t?[e]:c8(e(t),t,n,r):e instanceof c4?n?(e.inject(n,r),[e.getName(r)]):[e]:cP(e)?c9(e):Array.isArray(e)?Array.prototype.concat.apply(uQ,e.map(function(e){return c8(e,t,n,r)})):[e.toString()]}function c7(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cE(n)&&!cC(n))return!1}return!0}var de=cs("6.1.0"),dt=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&c7(e),this.componentId=t,this.baseHash=cl(de,t),this.baseStyle=n,cQ.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash){if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=c_(r,this.staticRulesId);else{var o=cR(c8(this.rules,e,t,n)),i=u2(cl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=c_(r,i),this.staticRulesId=i}}else{for(var l=cl(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=cR(c8(c,e,t,n));l=cl(l,d+u),s+=d}}if(s){var f=u2(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=c_(r,f)}}return r},e}(),dn=/*@__PURE__*/f(y).createContext(void 0);dn.Consumer;var dr={};function di(e,t,n){var r,o,i,a,l=cC(e),s=!cu(e),u=t.attrs,c=void 0===u?uQ:u,d=t.componentId,p=void 0===d?(r=t.displayName,o=t.parentComponentId,dr[i="string"!=typeof r?"sc":uJ(r)]=(dr[i]||0)+1,a="".concat(i,"-").concat(u2(cs("6.1.0"+i+dr[i])>>>0)),o?"".concat(o,"-").concat(a):a):d,h=(void 0===t.displayName&&(cu(e)||e.displayName||e.name),t.displayName&&t.componentId?"".concat(uJ(t.displayName),"-").concat(t.componentId):t.componentId||p),m=l&&e.attrs?e.attrs.concat(c).filter(Boolean):c,g=t.shouldForwardProp;if(l&&e.shouldForwardProp){var v=e.shouldForwardProp;if(t.shouldForwardProp){var b=t.shouldForwardProp;g=function(e,t){return v(e,t)&&b(e,t)}}else g=v}var w=new dt(n,h,l?e.componentStyle:void 0),x=/*@__PURE__*/f(y).forwardRef(function(e,t){return function(e,t,n){var r,o,i=e.attrs,a=e.componentStyle,l=e.defaultProps,s=e.foldedComponentIds,u=e.styledComponentId,c=e.target,d=/*@__PURE__*/f(y).useContext(dn),p=c2(),h=e.shouldForwardProp||p.shouldForwardProp,m=function(e,t,n){for(var r,o=t3(t3({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=cE(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?c_(o[l],a[l]):"style"===l?t3(t3({},o[l]),a[l]):a[l]}return t.className&&(o.className=c_(o.className,t.className)),o}(i,t,(void 0===(r=l)&&(r=uK),t.theme!==r.theme&&t.theme||d||r.theme||uK)),g=m.as||c,v={};for(var b in m)void 0===m[b]||"$"===b[0]||"as"===b||"theme"===b||("forwardedAs"===b?v.as=m.forwardedAs:h&&!h(b,g)||(v[b]=m[b]));var w=(o=c2(),a.generateAndInjectStyles(m,o.styleSheet,o.stylis)),x=c_(s,u);return w&&(x+=" "+w),m.className&&(x+=" "+m.className),v[cu(g)&&!uY.has(g)?"class":"className"]=x,v.ref=n,(0,y.createElement)(g,v)}(x,e,t)});return x.attrs=m,x.componentStyle=w,x.shouldForwardProp=g,x.foldedComponentIds=l?c_(e.foldedComponentIds,e.styledComponentId):"",x.styledComponentId=h,x.target=l?e.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=l?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)(function e(t,n,r){if(void 0===r&&(r=!1),!r&&!cP(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)t[o]=e(t[o],n[o]);else if(cP(n))for(var o in n)t[o]=e(t[o],n[o]);return t})(e,t[r],!0);return e}({},e.defaultProps,t):t}}),cT(x,function(){return".".concat(x.styledComponentId)}),s&&function e(t,n,r){if("string"!=typeof n){if(cS){var o=ck(n);o&&o!==cS&&e(t,o,r)}var i=cb(n);cw&&(i=i.concat(cw(n)));for(var a=cv(t),l=cv(n),s=0;s<i.length;++s){var u=i[s];if(!(u in ch||r&&r[u]||l&&u in l||a&&u in a)){var c=cx(n,u);try{cy(t,u,c)}catch(e){}}}}return t}(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function da(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var dl=function(e){return Object.assign(e,{isCss:!0})};function ds(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return cE(e)||cP(e)?dl(c8(da(uQ,t5([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?c8(e):dl(c8(da(e,t)))}var du=function(e){return function e(t,n,r){if(void 0===r&&(r=uK),!n)throw cN(1,n);var o=function(e){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return t(n,r,ds.apply(void 0,t5([e],o,!1)))};return o.attrs=function(o){return e(t,n,t3(t3({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return e(t,n,t3(t3({},r),o))},o}(di,e)};function dc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=cR(ds.apply(void 0,t5([e],t,!1))),o=u2(cs(r)>>>0);return new c4(o,r)}uY.forEach(function(e){du[e]=du(e)}),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=c7(e),cQ.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(cR(c8(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&cQ.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=cU(),r=cR([n&&'nonce="'.concat(n,'"'),"".concat(uH,'="true"'),"".concat("data-styled-version",'="').concat("6.1.0",'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw cN(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw cN(2);var t,n=((t={})[uH]="",t["data-styled-version"]="6.1.0",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=cU();return r&&(n.nonce=r),[/*@__PURE__*/f(y).createElement("style",t3({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new cQ({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw cN(2);return /*@__PURE__*/f(y).createElement(c3,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw cN(3)}}();// https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
var y=m("bh6RR");const dd="(prefers-reduced-motion: no-preference)",df="undefined"==typeof window,dp=()=>!!df||!window.matchMedia(dd).matches;var dh=function(){let[e,t]=/*@__PURE__*/f(y).useState(dp);return /*@__PURE__*/f(y).useEffect(()=>{let e=window.matchMedia(dd),n=e=>{t(!e.matches)};return e.addEventListener?e.addEventListener("change",n):e.addListener(n),()=>{e.removeEventListener?e.removeEventListener("change",n):e.removeListener(n)}},[]),e},y=m("bh6RR");const dm=(e,t)=>Math.floor(Math.random()*(t-e))+e;var dg=(e,t,n)=>{let r=/*@__PURE__*/f(y).useRef(null),o=/*@__PURE__*/f(y).useRef(e);/*@__PURE__*/f(y).useEffect(()=>{o.current=e},[e]),/*@__PURE__*/f(y).useEffect(()=>{if("number"==typeof t&&"number"==typeof n){let e=()=>{let i=dm(t,n);r.current=window.setTimeout(()=>{o.current(),e()},i)};e()}return()=>window.clearTimeout(r.current)},[t,n]);let i=/*@__PURE__*/f(y).useCallback(function(){window.clearTimeout(r.current)},[]);return i};const dv="#FFC700",dy=e=>{let t={id:String(eX(1e4,99999)),createdAt:Date.now(),color:e,size:eX(10,20),style:{top:eX(0,100)+"%",left:eX(0,100)+"%",zIndex:3}};return t},db=({size:e,color:t,style:n})=>/*#__PURE__*/(0,g.jsx)(dS,{style:n,children:/*#__PURE__*/(0,g.jsx)(dE,{width:e,height:e,viewBox:"0 0 68 68",fill:"none",children:/*#__PURE__*/(0,g.jsx)("path",{d:"M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z",fill:t})})}),dw=dc`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`,dx=dc`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`,dk=du.span`
  display: inline-block;
  position: relative;
`,dS=du.span`
  position: absolute;
  display: block;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${dw} 700ms forwards;
  }
`,dE=du.svg`
  display: block;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${dx} 1000ms linear;
  }
`,dC=du.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;var d_=({color:e=dv,children:t,...n})=>{let[r,o]=/*@__PURE__*/f(y).useState(()=>eZ(3).map(()=>dy(e))),i=dh();return dg(()=>{let t=dy(e),n=Date.now(),i=r.filter(e=>{let t=n-e.createdAt;return t<750});i.push(t),o(i)},i?null:50,i?null:450),/*#__PURE__*/(0,g.jsxs)(dk,{...n,children:[r.map(e=>/*#__PURE__*/(0,g.jsx)(db,{color:e.color,size:e.size,style:e.style},e.id)),/*#__PURE__*/(0,g.jsx)(dC,{children:t})]})},y=m("bh6RR");let dR=0;const dP=new Map,dT=e=>{if(dP.has(e))return;let t=setTimeout(()=>{dP.delete(e),dA({type:"REMOVE_TOAST",toastId:e})},1e6);dP.set(e,t)},dN=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?dT(n):e.toasts.forEach(e=>{dT(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},dO=[];let dj={toasts:[]};function dA(e){dj=dN(dj,e),dO.forEach(e=>{e(dj)})}function dD({...e}){let t=(dR=(dR+1)%Number.MAX_VALUE).toString(),n=()=>dA({type:"DISMISS_TOAST",toastId:t});return dA({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||n()}}}),{id:t,dismiss:n,update:e=>dA({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function dz(){let[e,t]=y.useState(dj);return y.useEffect(()=>(dO.push(t),()=>{let e=dO.indexOf(t);e>-1&&dO.splice(e,1)}),[e]),{...e,toast:dD,dismiss:e=>dA({type:"DISMISS_TOAST",toastId:e})}}var dI=m("7ORd6");// Share logic from here: https://github.com/cwackerfuss/react-wordle/blob/main/src/lib/share.ts
const dM=["mobile","smarttv","wearable"],dF=new dI.UAParser,dL=dF.getBrowser(),d$=dF.getDevice(),dU=(e,t,n,r,o=!0)=>{let i=window.location.href,a=`Connections #${oy}

`+rT(e,t,!0)+`${o?"\n\n"+i:""}`,l={text:a},s=!1;try{dV(l)&&(navigator.share(l),s=!0)}catch(e){s=!1}try{s||(navigator.clipboard?navigator.clipboard.writeText(a).then(n).catch(r):r())}catch(e){r()}},dV=e=>dL.name?.toUpperCase().indexOf("FIREFOX")===-1&&-1!==dM.indexOf(d$.type??"")&&navigator.canShare&&navigator.canShare(e)&&navigator.share;var dW=function({buttonText:e="Share",className:t=""}){let{gameData:n}=/*@__PURE__*/f(y).useContext(ow),{submittedGuesses:r}=/*@__PURE__*/f(y).useContext(oC),{toast:o}=dz();function i(){o({label:"Notification",title:"",description:"Copied to clipboard!"})}function a(){o({label:"Notification",title:"",description:"Was unable to copy to clipboard / share."})}return/*#__PURE__*/(0,g.jsx)(d_,{children:/*#__PURE__*/(0,g.jsx)(rp,{className:eY(t,"w-full"),variant:"share",onClick:()=>dU(n,r,i,a,!0),children:e})})};m("bh6RR");var y=m("bh6RR"),dB={};function dH(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function dG(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dq(e,t,n){return t&&dG(e.prototype,t),n&&dG(e,n),e}function dQ(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&dY(e,t)}function dK(e){return(dK=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function dY(e,t){return(dY=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function dX(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r,o=dK(e);if(t){var i=dK(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return(n=r)&&("object"==typeof n||"function"==typeof n)?n:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)}}function dZ(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function dJ(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=String(e);if(0===n)return r;var o=r.match(/(.*?)([0-9]+)(.*)/),i=o?o[1]:"",a=o?o[3]:"",l=o?o[2]:r,s=l.length>=n?l:(((function(e){if(Array.isArray(e))return dZ(e)})(t=Array(n))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return dZ(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dZ(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+l).slice(-1*n);return"".concat(i).concat(s).concat(a)}// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
dB=m("2tbKl")();var d0={daysInHours:!1,zeroPadTime:2},d1=function(e){dQ(n,e);var t=dX(n);function n(){var e;return dH(this,n),e=t.apply(this,arguments),e.state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval(function(){0==e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState(function(e){return{count:e.count-1}})},1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState(function(e){return{count:e.count+t}},e.startCountdown)},e}return dq(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,y.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(y.Component);d1.propTypes={count:dB.number,children:dB.element,onComplete:dB.func};var d2=function(e){dQ(n,e);var t=dX(n);function n(e){var r;if(dH(this,n),(r=t.call(this,e)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=(0,y.createRef)(),r.tick=function(){var e=r.calcTimeDelta(),t=e.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(e,void 0,t)},r.start=function(){if(!r.isStarted()){var e=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=e?r.calcOffsetStartTimestamp()-e:0;var t=r.calcTimeDelta();r.setTimeDeltaState(t,"STARTED",r.props.onStart),r.props.controlled||t.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},e.date){var o=r.calcTimeDelta();r.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return dq(n,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date===e.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,n=e.now,r=e.precision,o=e.controlled,i=e.overtime;return function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,i=n.precision,a=n.controlled,l=n.offsetTime,s=n.overtime;t="string"==typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,a||(t+=void 0===l?0:l);var u=a?t:t-o(),c=Math.round(1e3*parseFloat(((s?u:Math.max(0,u))/1e3).toFixed(Math.min(20,Math.max(0,void 0===i?0:i))))),d=Math.abs(c)/1e3;return{total:c,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:c<=0}}(t,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,n){var r=this;if(this.mounted){var o=e.completed&&!this.state.timeDelta.completed,i=e.completed&&"STARTED"===t;return o&&!this.props.overtime&&this.clearTimer(),this.setState(function(n){var o=t||n.status;return e.completed&&!r.props.overtime?o="COMPLETED":t||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:e,status:o}},function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||i)&&r.props.onComplete(e,i)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e,t,n,r,o,i,a,l,s,u,c,d=this.props,f=d.daysInHours,p=d.zeroPadTime,h=d.zeroPadDays,m=this.state.timeDelta;return Object.assign(Object.assign({},m),{api:this.getApi(),props:this.props,formatted:(e=m.days,t=m.hours,n=m.minutes,r=m.seconds,i=(o=Object.assign(Object.assign({},d0),{daysInHours:f,zeroPadTime:p,zeroPadDays:h})).daysInHours,a=o.zeroPadTime,s=void 0===(l=o.zeroPadDays)?a:l,u=Math.min(2,a),c=i?dJ(t+24*e,a):dJ(t,u),{days:i?"":dJ(e,s),hours:c,minutes:dJ(n,u),seconds:dJ(r,u)})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,n=e.children,r=e.onComplete;return(0,y.createElement)(d1,{ref:this.legacyCountdownRef,count:t,onComplete:r},n)}var o=this.props,i=o.className,a=o.overtime,l=o.children,s=o.renderer,u=this.getRenderProps();if(s)return s(u);if(l&&this.state.timeDelta.completed&&!a)return(0,y.cloneElement)(l,{countdown:u});var c=u.formatted,d=c.days,f=c.hours,p=c.minutes,h=c.seconds;return(0,y.createElement)("span",{className:i},u.total<0?"-":"",d,d?":":"",f,":",p,":",h)}}]),n}(y.Component);d2.defaultProps=Object.assign(Object.assign({},d0),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),d2.propTypes={date:(0,dB.oneOfType)([(0,dB.instanceOf)(Date),dB.string,dB.number]),daysInHours:dB.bool,zeroPadTime:dB.number,zeroPadDays:dB.number,controlled:dB.bool,intervalDelay:dB.number,precision:dB.number,autoStart:dB.bool,overtime:dB.bool,className:dB.string,children:dB.element,renderer:dB.func,now:dB.func,onMount:dB.func,onStart:dB.func,onPause:dB.func,onStop:dB.func,onTick:dB.func,onComplete:dB.func};// Renderer callback with condition
const d3=({days:e,hours:t,minutes:n,seconds:r,completed:o})=>{//ChatGPT Assisted
// Render a countdown
if(o)return/*#__PURE__*/(0,g.jsx)("span",{className:"font-[600]",children:"New Game Available! Refresh Your Browser."});let i=[];e>0&&i.push(`${e} Day${e>1?"s":""}`),t>0&&i.push(`${t} Hour${t>1?"s":""}`),n>0&&i.push(`${n} Minute${n>1?"s":""}`);// Create a sentence based on the time parts
let a="Next Puzzle Released in ";// Create a sentence based on the time parts
return i.length>2?a+=i.slice(0,-1).join(", ")+`, and ${i.slice(-1)}`:2==i.length?a+=`${i[0]} and ${i[1]}`:a+=i[0],/*#__PURE__*/(0,g.jsx)("div",{children:a})};var d4=function(){return/*#__PURE__*/(0,g.jsx)("div",{className:"flex flex-row place-content-center mt-4",children:/*#__PURE__*/(0,g.jsx)(d2,{className:"text-lg text-gray-900",renderer:d3,date:ob,intervalDelay:1e3})})},d5=function({open:e}){let{gameData:t}=/*@__PURE__*/f(y).useContext(ow);return/*#__PURE__*/(0,g.jsxs)(rE,{title:"You lost.",initiallyOpen:e,footerElements:/*#__PURE__*/(0,g.jsx)(dW,{}),showActionButton:!1,children:[/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-y-2",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-lg font-[500] text-center",children:"Better luck next time. The correct answers are below."}),t.map(e=>/*#__PURE__*/(0,g.jsx)(sJ,{...e},e.category))]}),/*#__PURE__*/(0,g.jsx)(d4,{})]})},y=m("bh6RR"),d6=function({open:e,submittedGuesses:t}){let{gameData:n}=/*@__PURE__*/f(y).useContext(ow);return/*#__PURE__*/(0,g.jsxs)(rE,{title:"You won the game!",initiallyOpen:e,footerElements:/*#__PURE__*/(0,g.jsx)(dW,{}),showActionButton:!1,children:[/*#__PURE__*/(0,g.jsx)("p",{children:"Great job, share your results!"}),/*#__PURE__*/(0,g.jsxs)("div",{className:"justify-center",children:[/*#__PURE__*/(0,g.jsxs)("span",{className:"text-center whitespace-pre",children:["\n",rT(n,t)]}),/*#__PURE__*/(0,g.jsx)(d4,{})]})]})},y=(m("bh6RR"),m("bh6RR"));const d9="horizontal",d8=["horizontal","vertical"],d7=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{decorative:n,orientation:r=d9,...o}=e,i=fe(r)?r:d9;return/*#__PURE__*/(0,y.createElement)(M.div,S({"data-orientation":i},n?{role:"none"}:{"aria-orientation":"vertical"===i?i:void 0,role:"separator"},o,{ref:t}))});function fe(e){return d8.includes(e)}d7.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!fe(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${d9}\`.`):null}};const ft=/*#__PURE__*/y.forwardRef(({className:e,orientation:t="horizontal",decorative:n=!0,...r},o)=>/*#__PURE__*/(0,g.jsx)(d7,{ref:o,decorative:n,orientation:t,className:eY("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...r}));ft.displayName=d7.displayName;var y=m("bh6RR"),fn={},fr={},fo=Math.ceil,fi=Math.max;fr=/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */function(e,t,n,r){for(var o=-1,i=fi(fo((t-e)/(n||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=n;return a};var fa={},fl={};fl=/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function(e,t){return e===t||e!=e&&t!=t};var fs={},fu={},fc={},fd={},ff=m("dnnhb");fd=ff.Symbol;var fp={},fh=Object.prototype,fm=fh.hasOwnProperty,fg=fh.toString,fv=fd?fd.toStringTag:void 0;fp=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=fm.call(e,fv),n=e[fv];try{e[fv]=void 0;var r=!0}catch(e){}var o=fg.call(e);return r&&(t?e[fv]=n:delete e[fv]),o};var fy={},fb=Object.prototype.toString;fy=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return fb.call(e)};/** Built-in value references. */var fw=fd?fd.toStringTag:void 0;fc=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":fw&&fw in Object(e)?fp(e):fy(e)};var fx={};fx=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fu=/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function(e){if(!fx(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=fc(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var fk={};fk=/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},fs=/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function(e){return null!=e&&fk(e.length)&&!fu(e)};var fS={},fE=/^(?:0|[1-9]\d*)$/;fS=/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&fE.test(e))&&e>-1&&e%1==0&&e<t},fa=/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function(e,t,n){if(!fx(n))return!1;var r=typeof t;return("number"==r?!!(fs(n)&&fS(t,n.length)):"string"==r&&t in n)&&fl(n[t],e)};var fC={},f_={},fR={},fP={},fT=/\s/;fP=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&fT.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var fN=/^\s+/;fR=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,fP(e)+1).replace(fN,""):e};var fO={},fj={};fj=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},fO=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||fj(e)&&"[object Symbol]"==fc(e)};/** Used as references for various `Number` constants. */var fA=0/0,fD=/^[-+]0x[0-9a-f]+$/i,fz=/^0b[01]+$/i,fI=/^0o[0-7]+$/i,fM=parseInt;f_=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(fO(e))return fA;if(fx(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=fx(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=fR(e);var n=fz.test(e);return n||fI.test(e)?fM(e.slice(2),n?2:8):fD.test(e)?fA:+e};/** Used as references for various `Number` constants. */var fF=1/0;function fL(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}fC=/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function(e){return e?(e=f_(e))===fF||e===-fF?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0},fn=function(e,t,n){return n&&"number"!=typeof n&&fa(e,t,n)&&(t=n=void 0),// Ensure the sign of `-0` is preserved.
e=fC(e),void 0===t?(t=e,e=0):t=fC(t),n=void 0===n?e<t?1:-1:fC(n),fr(e,t,n,void 0)};var y=m("bh6RR"),f$={},fU={};fU=m("g4WQO");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var fV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fW={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fB={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fH={};function fG(e){return(// React v16.11 and below
fU.isMemo(e)?fB:fH[e.$$typeof]||fV)}fH[fU.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fH[fU.Memo]=fB;var fq=Object.defineProperty,fQ=Object.getOwnPropertyNames,fK=Object.getOwnPropertySymbols,fY=Object.getOwnPropertyDescriptor,fX=Object.getPrototypeOf,fZ=Object.prototype;f$=function e(t,n,r){if("string"!=typeof n){// don't hoist over string (html) components
if(fZ){var o=fX(n);o&&o!==fZ&&e(t,o,r)}var i=fQ(n);fK&&(i=i.concat(fK(n)));for(var a=fG(t),l=fG(n),s=0;s<i.length;++s){var u=i[s];if(!fW[u]&&!(r&&r[u])&&!(l&&l[u])&&!(a&&a[u])){var c=fY(n,u);try{// Avoid failures from read-only properties
fq(t,u,c)}catch(e){}}}}return t};var y=m("bh6RR"),fJ={};function f0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f1(){return(f1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f2(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}Object.defineProperty(fJ,"__esModule",{value:!0}),fJ.default=function(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")};var f3=(0,y.createContext)(),f4={context:f3,withTheme:function(e){var t=/*@__PURE__*/f(y).forwardRef(function(t,n){return /*@__PURE__*/f(y).createElement(f3.Consumer,null,function(r){return /*@__PURE__*/f(y).createElement(e,f1({theme:r,ref:n},t))})});return /*@__PURE__*/f(f$)(t,e),t},useTheme:function(){return /*@__PURE__*/f(y).useContext(f3)},ThemeProvider:/*#__PURE__*/function(e){function t(){for(var t,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return f0(f2(f2(t=e.call.apply(e,[this].concat(r))||this)),"cachedTheme",void 0),f0(f2(f2(t)),"lastOuterTheme",void 0),f0(f2(f2(t)),"lastTheme",void 0),f0(f2(f2(t)),"renderProvider",function(e){var n=t.props.children;return /*@__PURE__*/f(y).createElement(f3.Provider,{value:t.getTheme(e)},n)}),t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e;var n=t.prototype;return(// Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
n.getTheme=function(e){if(this.props.theme!==this.lastTheme||e!==this.lastOuterTheme||!this.cachedTheme){if(this.lastOuterTheme=e,this.lastTheme=this.props.theme,"function"==typeof this.lastTheme){var t=this.props.theme;this.cachedTheme=t(e)}else{var n=this.props.theme;this.cachedTheme=e?f1({},e,n):n}}return this.cachedTheme},n.render=function(){return this.props.children?/*@__PURE__*/f(y).createElement(f3.Consumer,null,this.renderProvider):null},t)}(/*@__PURE__*/f(y).Component)};f4.withTheme,f4.ThemeProvider,f4.useTheme;var f5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f6=("undefined"==typeof window?"undefined":f5(window))==="object"&&("undefined"==typeof document?"undefined":f5(document))==="object"&&9===document.nodeType,f9=function(e,t){};function f8(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,function(e){var t=function(e,t){if("object"!==rD(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==rD(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===rD(t)?t:String(t)}(r.key),r)}}function f7(e,t,n){return t&&f8(e.prototype,t),n&&f8(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t){return(pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function pt(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pe(e,t)}function pn(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var pr={}.constructor;/**
 * Create a rule instance.
 */function po(e,t,n){void 0===e&&(e="unnamed");var r=n.jss,o=function e(t){if(null==t||"object"!=typeof t)return t;if(Array.isArray(t))return t.map(e);if(t.constructor!==pr)return t;var n={};for(var r in t)n[r]=e(t[r]);return n}(t);return r.plugins.onCreateRule(e,o,n)||(e[0],null)// It is an at-rule and it has no instance.
}var pi=function(e,t){for(var n="",r=0;// Remove !important from the value, it will be readded later.
r<e.length&&"!important"!==e[r];r++)n&&(n+=t),n+=e[r];return n},pa=function(e){if(!Array.isArray(e))return e;var t="";// Support space separated values via `[['5px', '10px']]`.
if(Array.isArray(e[0]))for(var n=0;n<e.length&&"!important"!==e[n];n++)t&&(t+=", "),t+=pi(e[n]," ");else t=pi(e,", ");// Add !important, because it was ignored.
return"!important"===e[e.length-1]&&(t+=" !important"),t};function pl(e){return e&&!1===e.format?{linebreak:"",space:""}:{linebreak:"\n",space:" "}}/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */function ps(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}/**
 * Converts a Rule to CSS string.
 */function pu(e,t,n){void 0===n&&(n={});var r="";if(!t)return r;var o=n.indent,i=void 0===o?0:o,a=t.fallbacks;!1===n.format&&(i=-1/0);var l=pl(n),s=l.linebreak,u=l.space;if(e&&i++,a){// Array syntax {fallbacks: [{prop: value}]}
if(Array.isArray(a))for(var c=0;c<a.length;c++){var d=a[c];for(var f in d){var p=d[f];null!=p&&(r&&(r+=s),r+=ps(f+":"+u+pa(p)+";",i))}}else for(var h in a){var m=a[h];null!=m&&(r&&(r+=s),r+=ps(h+":"+u+pa(m)+";",i))}}for(var g in t){var v=t[g];null!=v&&"fallbacks"!==g&&(r&&(r+=s),r+=ps(g+":"+u+pa(v)+";",i))}// Allow empty style in this case, because properties will be added dynamically.
return(r||n.allowEmpty)&&e?(i--,r&&(r=""+s+r+s),ps(""+e+u+"{"+r,i)+ps("}",i)):r// When rule is being stringified before selector was defined.
}var pc=/([[\].#*$><+~=|^:(),"'`\s])/g,pd="undefined"!=typeof CSS&&CSS.escape,pf=function(e){return pd?pd(e):e.replace(pc,"\\$1")},pp=/*#__PURE__*/function(){function e(e,t,n){this.type="style",this.isProcessed=!1;var r=n.sheet,o=n.Renderer;this.key=e,this.options=n,this.style=t,r?this.renderer=r.renderer:o&&(this.renderer=new o)}return e.prototype.prop=function(e,t,n){// It's a getter.
if(void 0===t)return this.style[e];// Don't do anything if the value has not changed.
var r=!!n&&n.force;if(!r&&this.style[e]===t)return this;var o=t;n&&!1===n.process||(o=this.options.jss.plugins.onChangeValue(t,e,this));var i=null==o||!1===o,a=e in this.style;if(i&&!a&&!r)return this;// We are going to remove this value.
var l=i&&a;if(l?delete this.style[e]:this.style[e]=o,this.renderable&&this.renderer)return l?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,o),this;var s=this.options.sheet;return s&&s.attached,this},e}(),ph=/*#__PURE__*/function(e){function t(t,n,r){o=e.call(this,t,n,r)||this;var o,i=r.selector,a=r.scoped,l=r.sheet,s=r.generateId;return i?o.selectorText=i:!1!==a&&(o.id=s(pn(pn(o)),l),o.selectorText="."+pf(o.id)),o}pt(t,e);/**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */var n=t.prototype;return(/**
   * Apply rule to an element inline.
   */n.applyTo=function(e){var t=this.renderer;if(t){var n=this.toJSON();for(var r in n)t.setProperty(e,r,n[r])}return this}/**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */,n.toJSON=function(){var e={};for(var t in this.style){var n=this.style[t];"object"!=typeof n?e[t]=n:Array.isArray(n)&&(e[t]=pa(n))}return e}/**
   * Generates a CSS string.
   */,n.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?S({},e,{allowEmpty:!0}):e;return pu(this.selectorText,this.style,n)},f7(t,[{key:"selector",set:function(e){if(e!==this.selectorText){this.selectorText=e;var t=this.renderer,n=this.renderable;n&&t&&!t.setSelector(n,e)&&t.replaceRule(n,this)}},get:function(){return this.selectorText}}]),t)}(pp),pm={indent:1,children:!0},pg=/@([\w-]+)/,pv=/*#__PURE__*/function(){function e(e,t,n){this.type="conditional",this.isProcessed=!1,this.key=e;var r=e.match(pg);for(var o in this.at=r?r[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new pz(S({},n,{parent:this})),t)this.rules.add(o,t[o]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r?(this.options.jss.plugins.onProcessRule(r),r):null}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Generates a CSS string.
   */,t.toString=function(e){void 0===e&&(e=pm);var t=pl(e).linebreak;if(null==e.indent&&(e.indent=pm.indent),null==e.children&&(e.children=pm.children),!1===e.children)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+t+n+t+"}":""},e}(),py=/@container|@media|@supports\s+/,pb={indent:1,children:!0},pw=/@keyframes\s+([\w-]+)/,px=/*#__PURE__*/function(){function e(e,t,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var r=e.match(pw);r&&r[1]?this.name=r[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var o=n.scoped,i=n.sheet,a=n.generateId;for(var l in this.id=!1===o?this.name:pf(a(this,i)),this.rules=new pz(S({},n,{parent:this})),t)this.rules.add(l,t[l],S({},n,{parent:this}));this.rules.process()}return e.prototype.toString=function(e){void 0===e&&(e=pb);var t=pl(e).linebreak;if(null==e.indent&&(e.indent=pb.indent),null==e.children&&(e.children=pb.children),!1===e.children)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+t+n+t),this.at+" "+this.id+" {"+n+"}"},e}(),pk=/@keyframes\s+/,pS=/\$([\w-]+)/g,pE=function(e,t){return"string"==typeof e?e.replace(pS,function(e,n){return n in t?t[n]:e}):e},pC=function(e,t,n){var r=e[t],o=pE(r,n);o!==r&&(e[t]=o)},p_=/*#__PURE__*/function(e){function t(){return e.apply(this,arguments)||this}return pt(t,e),/**
   * Generates a CSS string.
   */t.prototype.toString=function(e){var t=this.options.sheet,n=t&&t.options.link?S({},e,{allowEmpty:!0}):e;return pu(this.key,this.style,n)},t}(pp),pR=/*#__PURE__*/function(){function e(e,t,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){var t=pl(e).linebreak;if(Array.isArray(this.style)){for(var n="",r=0;r<this.style.length;r++)n+=pu(this.at,this.style[r]),this.style[r+1]&&(n+=t);return n}return pu(this.at,this.style,e)},e}(),pP=/@font-face/,pT=/*#__PURE__*/function(){function e(e,t,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}return e.prototype.toString=function(e){return pu(this.key,this.style,e)},e}(),pN=/*#__PURE__*/function(){function e(e,t,n){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=n}return e.prototype.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+="\n");return t}return this.key+" "+this.value+";"},e}(),pO={"@charset":!0,"@import":!0,"@namespace":!0},pj=[{onCreateRule:function(e,t,n){return"@"===e[0]||n.parent&&"keyframes"===n.parent.type?null:new ph(e,t,n)}},{onCreateRule:function(e,t,n){return py.test(e)?new pv(e,t,n):null}},{onCreateRule:function(e,t,n){return"string"==typeof e&&pk.test(e)?new px(e,t,n):null},// Animation name ref replacer.
onProcessStyle:function(e,t,n){return"style"===t.type&&n&&("animation-name"in e&&pC(e,"animation-name",n.keyframes),"animation"in e&&pC(e,"animation",n.keyframes)),e},onChangeValue:function(e,t,n){var r=n.options.sheet;if(!r)return e;switch(t){case"animation":case"animation-name":return pE(e,r.keyframes);default:return e}}},{onCreateRule:function(e,t,n){return n.parent&&"keyframes"===n.parent.type?new p_(e,t,n):null}},{onCreateRule:function(e,t,n){return pP.test(e)?new pR(e,t,n):null}},{onCreateRule:function(e,t,n){return"@viewport"===e||"@-ms-viewport"===e?new pT(e,t,n):null}},{onCreateRule:function(e,t,n){return e in pO?new pN(e,t,n):null}}],pA={process:!0},pD={force:!0,process:!0},pz=/*#__PURE__*/function(){// Rules registry for access by .get() method.
// It contains the same rule registered by name and by selector.
// Original styles object.
// Used to ensure correct rules order.
function e(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}/**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */var t=e.prototype;return t.add=function(e,t,n){var r=this.options,o=r.parent,i=r.sheet,a=r.jss,l=r.Renderer,s=r.generateId,u=r.scoped,c=S({classes:this.classes,parent:o,sheet:i,jss:a,Renderer:l,generateId:s,scoped:u,name:e,keyframes:this.keyframes,selector:void 0},n),d=e;e in this.raw&&(d=e+"-d"+this.counter++),// We need to save the original decl before creating the rule
// because cache plugin needs to use it as a key to return a cached rule.
this.raw[d]=t,d in this.classes&&(c.selector="."+pf(this.classes[d]));var f=po(d,t,c);if(!f)return null;this.register(f);var p=void 0===c.index?this.index.length:c.index;return this.index.splice(p,0,f),f}/**
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */,t.replace=function(e,t,n){var r=this.get(e),o=this.index.indexOf(r);r&&this.remove(r);var i=n;return -1!==o&&(i=S({},n,{index:o})),this.add(e,t,i)}/**
   * Get a rule by name or selector.
   */,t.get=function(e){return this.map[e]}/**
   * Delete a rule.
   */,t.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.index.indexOf(e)}/**
   * Run `onProcessRule()` plugins on every rule.
   */,t.process=function(){var e=this.options.jss.plugins;// We need to clone array because if we modify the index somewhere else during a loop
// we end up with very hard-to-track-down side effects.
this.index.slice(0).forEach(e.onProcessRule,e)}/**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */,t.register=function(e){this.map[e.key]=e,e instanceof ph?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof px&&this.keyframes&&(this.keyframes[e.name]=e.id)}/**
   * Unregister a rule.
   */,t.unregister=function(e){delete this.map[e.key],e instanceof ph?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof px&&delete this.keyframes[e.name]}/**
   * Update the function values with a new data.
   */,t.update=function(){if("string"==typeof(arguments.length<=0?void 0:arguments[0])?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,n);else for(var e,t,n,r=0;r<this.index.length;r++)this.updateOne(this.index[r],t,n)}/**
   * Execute plugins, update rule props.
   */,t.updateOne=function(t,n,r){void 0===r&&(r=pA);var o=this.options,i=o.jss.plugins,a=o.sheet;// It is a rules container like for e.g. ConditionalRule.
if(t.rules instanceof e){t.rules.update(n,r);return}var l=t.style;if(i.onUpdate(n,t,a,r),r.process&&l&&l!==t.style){for(var s in // We need to run the plugins in case new `style` relies on syntax plugins.
i.onProcessStyle(t.style,t,a),t.style){var u=t.style[s];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
u!==l[s]&&t.prop(s,u,pD)}// Remove props.
for(var c in l){var d=t.style[c],f=l[c];// We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.
null==d&&d!==f&&t.prop(c,null,pD)}}}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){for(var t="",n=this.options.sheet,r=!!n&&n.options.link,o=pl(e).linebreak,i=0;i<this.index.length;i++){var a=this.index[i].toString(e);// No need to render an empty rule.
(a||r)&&(t&&(t+=o),t+=a)}return t},e}(),pI=/*#__PURE__*/function(){function e(e,t){for(var n in this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=S({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new pz(this.options),e)this.rules.add(n,e[n]);this.rules.process()}/**
   * Attach renderable to the render tree.
   */var t=e.prototype;return t.attach=function(){return this.attached||(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy()),this}/**
   * Remove renderable from render tree.
   */,t.detach=function(){return this.attached&&(this.renderer&&this.renderer.detach(),this.attached=!1),this}/**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */,t.addRule=function(e,t,n){var r=this.queue;// Plugins can create rules.
this.attached&&!r&&(this.queue=[]);var o=this.rules.add(e,t,n);return o?((this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&(r?r.push(o):(this.insertRule(o),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o):null}/**
   * Replace a rule in the current stylesheet.
   */,t.replaceRule=function(e,t,n){var r=this.rules.get(e);if(!r)return this.addRule(e,t,n);var o=this.rules.replace(e,t,n);return(o&&this.options.jss.plugins.onProcessRule(o),this.attached)?this.deployed&&this.renderer&&(o?r.renderable&&this.renderer.replaceRule(r.renderable,o):this.renderer.deleteRule(r)):// We will redeploy the sheet once user will attach it.
this.deployed=!1,o}/**
   * Insert rule into the StyleSheet
   */,t.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)}/**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */,t.addRules=function(e,t){var n=[];for(var r in e){var o=this.addRule(r,e[r],t);o&&n.push(o)}return n}/**
   * Get a rule by name or selector.
   */,t.getRule=function(e){return this.rules.get(e)}/**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */,t.deleteRule=function(e){var t="object"==typeof e?e:this.rules.get(e);return!!t&&// Style sheet was created without link: true and attached, in this case we
// won't be able to remove the CSS rule from the DOM.
(!this.attached||!!t.renderable)&&(this.rules.remove(t),!this.attached||!t.renderable||!this.renderer||this.renderer.deleteRule(t.renderable))}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Deploy pure CSS string to a renderable.
   */,t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this}/**
   * Update the function values with a new data.
   */,t.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this}/**
   * Updates a single rule.
   */,t.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this}/**
   * Convert rules to a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),pM=/*#__PURE__*/function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return(/**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */t.onCreateRule=function(e,t,n){for(var r=0;r<this.registry.onCreateRule.length;r++){var o=this.registry.onCreateRule[r](e,t,n);if(o)return o}return null}/**
   * Call `onProcessRule` hooks.
   */,t.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}}/**
   * Call `onProcessStyle` hooks.
   */,t.onProcessStyle=function(e,t,n){for(var r=0;r<this.registry.onProcessStyle.length;r++)t.style=this.registry.onProcessStyle[r](t.style,t,n)}/**
   * Call `onProcessSheet` hooks.
   */,t.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)}/**
   * Call `onUpdate` hooks.
   */,t.onUpdate=function(e,t,n,r){for(var o=0;o<this.registry.onUpdate.length;o++)this.registry.onUpdate[o](e,t,n,r)}/**
   * Call `onChangeValue` hooks.
   */,t.onChangeValue=function(e,t,n){for(var r=e,o=0;o<this.registry.onChangeValue.length;o++)r=this.registry.onChangeValue[o](r,t,n);return r}/**
   * Register a plugin.
   */,t.use=function(e,t){void 0===t&&(t={queue:"external"});var n=this.plugins[t.queue];// Avoids applying same plugin twice, at least based on ref.
-1===n.indexOf(e)&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(e,t){for(var n in t)n in e&&e[n].push(t[n]);return e},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e)}(),pF=new/*#__PURE__*/(function(){function e(){this.registry=[]}var t=e.prototype;return(/**
   * Register a Style Sheet.
   */t.add=function(e){var t=this.registry,n=e.options.index;if(-1===t.indexOf(e)){if(0===t.length||n>=this.index){t.push(e);return}// Find a position.
for(var r=0;r<t.length;r++)if(t[r].options.index>n){t.splice(r,0,e);return}}}/**
   * Reset the registry.
   */,t.reset=function(){this.registry=[]}/**
   * Remove a Style Sheet.
   */,t.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)}/**
   * Convert all attached sheets to a CSS string.
   */,t.toString=function(e){for(var t=void 0===e?{}:e,n=t.attached,r=fL(t,["attached"]),o=pl(r).linebreak,i="",a=0;a<this.registry.length;a++){var l=this.registry[a];(null==n||l.attached===n)&&(i&&(i+=o),i+=l.toString(r))}return i},f7(e,[{key:"index",/**
     * Current highest index number.
     */get:function(){return 0===this.registry.length?0:this.registry[this.registry.length-1].options.index}}]),e)}()),pL="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),p$="2f1acc6c3a606b082e5eef5e54414ffb";null==pL[p$]&&(pL[p$]=0);// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
var pU=pL[p$]++,pV=function(e){void 0===e&&(e={});var t=0;return function(n,r){t+=1;var o="",i="";return(r&&(r.options.classNamePrefix&&(i=r.options.classNamePrefix),null!=r.options.jss.id&&(o=String(r.options.jss.id))),e.minify)?""+(i||"c")+pU+o+t:i+n.key+"-"+pU+(o?"-"+o:"")+"-"+t}},pW=function(e){var t;return function(){return t||(t=e()),t}},pB=function(e,t){try{// Support CSSTOM.
if(e.attributeStyleMap)return e.attributeStyleMap.get(t);return e.style.getPropertyValue(t)}catch(e){// IE may throw if property is unknown.
return""}},pH=function(e,t,n){try{var r=n;// Support CSSTOM.
if(Array.isArray(n)&&(r=pa(n)),e.attributeStyleMap)e.attributeStyleMap.set(t,r);else{var o=r?r.indexOf("!important"):-1,i=o>-1?r.substr(0,o-1):r;e.style.setProperty(t,i,o>-1?"important":"")}}catch(e){// IE may throw if property is unknown.
return!1}return!0},pG=function(e,t){try{// Support CSSTOM.
e.attributeStyleMap?e.attributeStyleMap.delete(t):e.style.removeProperty(t)}catch(e){}},pq=function(e,t){// Currently works in chrome only.
return e.selectorText=t,e.selectorText===t},pQ=pW(function(){return document.querySelector("head")}),pK=pW(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),pY=function(e,t,n){try{"insertRule"in e?e.insertRule(t,n):"appendRule"in e&&e.appendRule(t)}catch(e){return!1}return e.cssRules[n]},pX=function(e,t){var n=e.cssRules.length;// In case previous insertion fails, passed index might be wrong
return void 0===t||t>n?n:t},pZ=function(){var e=document.createElement("style");// Without it, IE will have a broken source order specificity if we
return(// insert rules after we insert the style tag.
// It seems to kick-off the source order specificity algorithm.
e.textContent="\n",e)},pJ=/*#__PURE__*/function(){// Will be empty if link: true option is not set, because
// it is only for use together with insertRule API.
function e(e){this.getPropertyValue=pB,this.setProperty=pH,this.removeProperty=pG,this.setSelector=pq,this.hasInsertedRules=!1,this.cssRules=[],e&&pF.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,r=t.meta,o=t.element;this.element=o||pZ(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),r&&this.element.setAttribute("data-meta",r);var i=pK();i&&this.element.setAttribute("nonce",i)}/**
   * Insert style element into render tree.
   */var t=e.prototype;return t.attach=function(){// In the case the element node is external and it is already in the DOM.
if(!this.element.parentNode&&this.sheet){!/**
 * Insert style element into the DOM.
 */function(e,t){var n=t.insertionPoint,r=/**
 * Find a node before which we can insert the sheet.
 */function(e){var t=pF.registry;if(t.length>0){// Try to insert before the next higher sheet.
var n=/**
 * Find attached sheet with an index higher than the passed one.
 */function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(// Otherwise insert after the last attached.
(n=/**
 * Find attached sheet with the highest index.
 */function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}(t,e))&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}// Try to find a comment placeholder if registry is empty.
var r=e.insertionPoint;if(r&&"string"==typeof r){var o=/**
 * Find a comment with "jss" inside.
 */function(e){for(var t=pQ(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(8===r.nodeType&&r.nodeValue.trim()===e)return r}return null}(r);if(o)return{parent:o.parentNode,node:o.nextSibling};// If user specifies an insertion point and it can't be found in the document -
}return!1}(t);if(!1!==r&&r.parent){r.parent.insertBefore(e,r.node);return}// Works with iframes and any node types.
if(n&&"number"==typeof n.nodeType){var o=n.parentNode;o&&o.insertBefore(e,n.nextSibling);return}pQ().appendChild(e)}(this.element,this.sheet.options);// When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
// most browsers create a new CSSStyleSheet, except of all IEs.
var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}}/**
   * Remove style element from render tree.
   */,t.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent="\n")}}/**
   * Inject CSS string into element.
   */,t.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent="\n"+e.toString()+"\n"}}/**
   * Insert RuleList into an element.
   */,t.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)}/**
   * Insert a rule into element.
   */,t.insertRule=function(e,t,n){if(void 0===n&&(n=this.element.sheet),e.rules){var r=n;if("conditional"===e.type||"keyframes"===e.type){var o=pX(n,t);// We need to render the container without children first.
if(!1===(r=pY(n,e.toString({children:!1}),o)))return!1;this.refCssRule(e,o,r)}return this.insertRules(e.rules,r),r}var i=e.toString();if(!i)return!1;var a=pX(n,t),l=pY(n,i,a);return!1!==l&&(this.hasInsertedRules=!0,this.refCssRule(e,a,l),l)},t.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof pI&&this.cssRules.splice(t,0,n)}/**
   * Delete a rule.
   */,t.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return -1!==n&&(t.deleteRule(n),this.cssRules.splice(n,1),!0)}/**
   * Get index of a CSS Rule.
   */,t.indexOf=function(e){return this.cssRules.indexOf(e)}/**
   * Generate a new CSS rule and replace the existing one.
   */,t.replaceRule=function(e,t){var n=this.indexOf(e);return -1!==n&&(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))}/**
   * Get all rules elements.
   */,t.getRules=function(){return this.element.sheet.cssRules},e}(),p0=0,p1=/*#__PURE__*/function(){function e(e){this.id=p0++,this.version="10.10.0",this.plugins=new pM,this.options={id:{minify:!1},createGenerateId:pV,Renderer:f6?pJ:null,plugins:[]},this.generateId=pV({minify:!1});for(var t=0;t<pj.length;t++)this.plugins.use(pj[t],{queue:"internal"});this.setup(e)}/**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */var t=e.prototype;return t.setup=function(e){return void 0===e&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=S({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),null!=e.insertionPoint&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this}/**
   * Create a Style Sheet.
   */,t.createStyleSheet=function(e,t){void 0===t&&(t={});var n=t.index;"number"!=typeof n&&(n=0===pF.index?0:pF.index+1);var r=new pI(e,S({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(r),r}/**
   * Detach the Style Sheet and remove it from the registry.
   */,t.removeStyleSheet=function(e){return e.detach(),pF.remove(e),this}/**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */,t.createRule=function(e,t,n){// Enable rule without name for inline styles.
if(void 0===t&&(t={}),void 0===n&&(n={}),"object"==typeof e)return this.createRule(void 0,e,t);var r=S({},n,{name:e,jss:this,Renderer:this.options.Renderer});r.generateId||(r.generateId=this.generateId),r.classes||(r.classes={}),r.keyframes||(r.keyframes={});var o=po(e,t,r);return o&&this.plugins.onProcessRule(o),o}/**
   * Register plugin. Passed function will be invoked with a rule instance.
   */,t.use=function(){for(var e=this,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){e.plugins.use(t)}),this},e}(),p2=function(e){return new p1(e)},p3=/*#__PURE__*/function(){function e(){this.length=0,this.sheets=new WeakMap}var t=e.prototype;return t.get=function(e){var t=this.sheets.get(e);return t&&t.sheet},t.add=function(e,t){this.sheets.has(e)||(this.length++,this.sheets.set(e,{sheet:t,refs:0}))},t.manage=function(e){var t=this.sheets.get(e);if(t)return 0===t.refs&&t.sheet.attach(),t.refs++,t.sheet;f9(!1,"[JSS] SheetsManager: can't find sheet to manage")},t.unmanage=function(e){var t=this.sheets.get(e);t?t.refs>0&&(t.refs--,0===t.refs&&t.sheet.detach()):f9(!1,"SheetsManager: can't find sheet to unmanage")},f7(e,[{key:"size",get:function(){return this.length}}]),e}(),p4="object"==typeof CSS&&null!=CSS&&"number"in CSS;p2();var p5=Date.now(),p6="fnValues"+p5,p9="fnStyle"+ ++p5,p8=m("frWs0"),p7=function(e){return e&&e[p8.default]&&e===e[0,p8.default]()},he=/;\n/,ht=function(e){for(var t={},n=e.split(he),r=0;r<n.length;r++){var o=(n[r]||"").trim();if(o){var i=o.indexOf(":");if(-1!==i){var a=o.substr(0,i).trim(),l=o.substr(i+1).trim();t[a]=l}}}return t},hn=function(e){"string"==typeof e.style&&(e.style=ht(e.style))},hr="@global",ho="@global ",hi=/*#__PURE__*/function(){function e(e,t,n){for(var r in this.type="global",this.at=hr,this.isProcessed=!1,this.key=e,this.options=n,this.rules=new pz(S({},n,{parent:this})),t)this.rules.add(r,t[r]);this.rules.process()}/**
   * Get a rule.
   */var t=e.prototype;return t.getRule=function(e){return this.rules.get(e)}/**
   * Create and register rule, run plugins.
   */,t.addRule=function(e,t,n){var r=this.rules.add(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Replace rule, run plugins.
   */,t.replaceRule=function(e,t,n){var r=this.rules.replace(e,t,n);return r&&this.options.jss.plugins.onProcessRule(r),r}/**
   * Get index of a rule.
   */,t.indexOf=function(e){return this.rules.indexOf(e)}/**
   * Generates a CSS string.
   */,t.toString=function(e){return this.rules.toString(e)},e}(),ha=/*#__PURE__*/function(){function e(e,t,n){this.type="global",this.at=hr,this.isProcessed=!1,this.key=e,this.options=n;var r=e.substr(ho.length);this.rule=n.jss.createRule(r,t,S({},n,{parent:this}))}return e.prototype.toString=function(e){return this.rule?this.rule.toString(e):""},e}(),hl=/\s*,\s*/g;function hs(e,t){for(var n=e.split(hl),r="",o=0;o<n.length;o++)r+=t+" "+n[o].trim(),n[o+1]&&(r+=", ");return r}var hu=function(e){return e&&"object"==typeof e&&!Array.isArray(e)},hc="extendCurrValue"+Date.now(),hd=/\s*,\s*/g,hf=/&/g,hp=/\$([\w-]+)/g,hh=/[A-Z]/g,hm=/^ms-/,hg={};function hv(e){return"-"+e.toLowerCase()}var hy=function(e){if(hg.hasOwnProperty(e))return hg[e];var t=e.replace(hh,hv);return hg[e]=hm.test(t)?"-"+t:t};/**
 * Convert camel cased property names to dash separated.
 */function hb(e){var t={};for(var n in e)t[0===n.indexOf("--")?n:hy(n)]=e[n];return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(hb):t.fallbacks=hb(e.fallbacks)),t}var hw=p4&&CSS?CSS.px:"px",hx=p4&&CSS?CSS.ms:"ms",hk=p4&&CSS?CSS.percent:"%";/**
 * Clones the object and adds a camel cased property version.
 */function hS(e){var t=/(-[a-z])/g,n=function(e){return e[1].toUpperCase()},r={};for(var o in e)r[o]=e[o],r[o.replace(t,n)]=e[o];return r}var hE=hS({// Animation properties
"animation-delay":hx,"animation-duration":hx,// Background properties
"background-position":hw,"background-position-x":hw,"background-position-y":hw,"background-size":hw,// Border Properties
border:hw,"border-bottom":hw,"border-bottom-left-radius":hw,"border-bottom-right-radius":hw,"border-bottom-width":hw,"border-left":hw,"border-left-width":hw,"border-radius":hw,"border-right":hw,"border-right-width":hw,"border-top":hw,"border-top-left-radius":hw,"border-top-right-radius":hw,"border-top-width":hw,"border-width":hw,"border-block":hw,"border-block-end":hw,"border-block-end-width":hw,"border-block-start":hw,"border-block-start-width":hw,"border-block-width":hw,"border-inline":hw,"border-inline-end":hw,"border-inline-end-width":hw,"border-inline-start":hw,"border-inline-start-width":hw,"border-inline-width":hw,"border-start-start-radius":hw,"border-start-end-radius":hw,"border-end-start-radius":hw,"border-end-end-radius":hw,// Margin properties
margin:hw,"margin-bottom":hw,"margin-left":hw,"margin-right":hw,"margin-top":hw,"margin-block":hw,"margin-block-end":hw,"margin-block-start":hw,"margin-inline":hw,"margin-inline-end":hw,"margin-inline-start":hw,// Padding properties
padding:hw,"padding-bottom":hw,"padding-left":hw,"padding-right":hw,"padding-top":hw,"padding-block":hw,"padding-block-end":hw,"padding-block-start":hw,"padding-inline":hw,"padding-inline-end":hw,"padding-inline-start":hw,// Mask properties
"mask-position-x":hw,"mask-position-y":hw,"mask-size":hw,// Width and height properties
height:hw,width:hw,"min-height":hw,"max-height":hw,"min-width":hw,"max-width":hw,// Position properties
bottom:hw,left:hw,top:hw,right:hw,inset:hw,"inset-block":hw,"inset-block-end":hw,"inset-block-start":hw,"inset-inline":hw,"inset-inline-end":hw,"inset-inline-start":hw,// Shadow properties
"box-shadow":hw,"text-shadow":hw,// Column properties
"column-gap":hw,"column-rule":hw,"column-rule-width":hw,"column-width":hw,// Font and text properties
"font-size":hw,"font-size-delta":hw,"letter-spacing":hw,"text-decoration-thickness":hw,"text-indent":hw,"text-stroke":hw,"text-stroke-width":hw,"word-spacing":hw,// Motion properties
motion:hw,"motion-offset":hw,// Outline properties
outline:hw,"outline-offset":hw,"outline-width":hw,// Perspective properties
perspective:hw,"perspective-origin-x":hk,"perspective-origin-y":hk,// Transform properties
"transform-origin":hk,"transform-origin-x":hk,"transform-origin-y":hk,"transform-origin-z":hk,// Transition properties
"transition-delay":hx,"transition-duration":hx,// Alignment properties
"vertical-align":hw,"flex-basis":hw,// Some random properties
"shape-margin":hw,size:hw,gap:hw,// Grid properties
grid:hw,"grid-gap":hw,"row-gap":hw,"grid-row-gap":hw,"grid-column-gap":hw,"grid-template-rows":hw,"grid-template-columns":hw,"grid-auto-rows":hw,"grid-auto-columns":hw,// Not existing properties.
// Used to avoid issues with jss-plugin-expand integration.
"box-shadow-x":hw,"box-shadow-y":hw,"box-shadow-blur":hw,"box-shadow-spread":hw,"font-line-height":hw,"text-shadow-x":hw,"text-shadow-y":hw,"text-shadow-blur":hw});/**
 * Recursive deep style passing function
 */function hC(e,t,n){if(null==t)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=hC(e,t[r],n);else if("object"==typeof t){if("fallbacks"===e)for(var o in t)t[o]=hC(o,t[o],n);else for(var i in t)t[i]=hC(e+"-"+i,t[i],n)}else if("number"==typeof t&&!1===isNaN(t)){var a=n[e]||hE[e];// Add the unit if available, except for the special case of 0px.
return a&&!(0===t&&a===hw)?"function"==typeof a?a(t).toString():""+t+a:t.toString()}return t}var h_=/**
 * Add unit to numeric values.
 */function(e){void 0===e&&(e={});var t=hS(e);return{onProcessStyle:function(e,n){if("style"!==n.type)return e;for(var r in e)e[r]=hC(r,e[r],t);return e},onChangeValue:function(e,n){return hC(n,e,t)}}},hR={"background-size":!0,"background-position":!0,border:!0,"border-bottom":!0,"border-left":!0,"border-top":!0,"border-right":!0,"border-radius":!0,"border-image":!0,"border-width":!0,"border-style":!0,"border-color":!0,"box-shadow":!0,flex:!0,margin:!0,padding:!0,outline:!0,"transform-origin":!0,transform:!0,transition:!0},hP={position:!0,// background-position
size:!0// background-size
},hT={padding:{top:0,right:0,bottom:0,left:0},margin:{top:0,right:0,bottom:0,left:0},background:{attachment:null,color:null,image:null,position:null,repeat:null},border:{width:null,style:null,color:null},"border-top":{width:null,style:null,color:null},"border-right":{width:null,style:null,color:null},"border-bottom":{width:null,style:null,color:null},"border-left":{width:null,style:null,color:null},outline:{width:null,style:null,color:null},"list-style":{type:null,position:null,image:null},transition:{property:null,duration:null,"timing-function":null,timingFunction:null,// Needed for avoiding comilation issues with jss-plugin-camel-case
delay:null},animation:{name:null,duration:null,"timing-function":null,timingFunction:null,// Needed to avoid compilation issues with jss-plugin-camel-case
delay:null,"iteration-count":null,iterationCount:null,// Needed to avoid compilation issues with jss-plugin-camel-case
direction:null,"fill-mode":null,fillMode:null,// Needed to avoid compilation issues with jss-plugin-camel-case
"play-state":null,playState:null// Needed to avoid compilation issues with jss-plugin-camel-case
},"box-shadow":{x:0,y:0,blur:0,spread:0,color:null,inset:null},"text-shadow":{x:0,y:0,blur:null,color:null}},hN={border:{radius:"border-radius",image:"border-image",width:"border-width",style:"border-style",color:"border-color"},"border-bottom":{width:"border-bottom-width",style:"border-bottom-style",color:"border-bottom-color"},"border-top":{width:"border-top-width",style:"border-top-style",color:"border-top-color"},"border-left":{width:"border-left-width",style:"border-left-style",color:"border-left-color"},"border-right":{width:"border-right-width",style:"border-right-style",color:"border-right-color"},background:{size:"background-size",image:"background-image"},font:{style:"font-style",variant:"font-variant",weight:"font-weight",stretch:"font-stretch",size:"font-size",family:"font-family",lineHeight:"line-height",// Needed to avoid compilation issues with jss-plugin-camel-case
"line-height":"line-height"},flex:{grow:"flex-grow",basis:"flex-basis",direction:"flex-direction",wrap:"flex-wrap",flow:"flex-flow",shrink:"flex-shrink"},align:{self:"align-self",items:"align-items",content:"align-content"},grid:{"template-columns":"grid-template-columns",templateColumns:"grid-template-columns","template-rows":"grid-template-rows",templateRows:"grid-template-rows","template-areas":"grid-template-areas",templateAreas:"grid-template-areas",template:"grid-template","auto-columns":"grid-auto-columns",autoColumns:"grid-auto-columns","auto-rows":"grid-auto-rows",autoRows:"grid-auto-rows","auto-flow":"grid-auto-flow",autoFlow:"grid-auto-flow",row:"grid-row",column:"grid-column","row-start":"grid-row-start",rowStart:"grid-row-start","row-end":"grid-row-end",rowEnd:"grid-row-end","column-start":"grid-column-start",columnStart:"grid-column-start","column-end":"grid-column-end",columnEnd:"grid-column-end",area:"grid-area",gap:"grid-gap","row-gap":"grid-row-gap",rowGap:"grid-row-gap","column-gap":"grid-column-gap",columnGap:"grid-column-gap"}};/**
 * Convert object to array.
 */function hO(e,t,n,r,o){if(!(hT[t]||hN[t]))return[];var i=[];// Check if exists any non-standard property
// Pass throught all standart props
if(hN[t]&&(e=/**
 * Convert custom properties values to styles adding them to rule directly
 */function(e,t,n,r){for(var o in n){var i=n[o];// If current property doesn't exist already in rule - add new one
if(void 0!==e[o]&&(r||!t.prop(i))){var a,l=hj(((a={})[i]=e[o],a),t)[i];// Add style directly in rule
r?t.style.fallbacks[i]=l:t.style[i]=l}// Delete converted property to avoid double converting
delete e[o]}return e}(e,n,hN[t],r)),Object.keys(e).length)for(var a in hT[t]){if(e[a]){Array.isArray(e[a])?i.push(null===hP[a]?e[a]:e[a].join(" ")):i.push(e[a]);continue}// Add default value from props config.
null!=hT[t][a]&&i.push(hT[t][a])}return!i.length||o?i:[i]}/**
 * Detect if a style needs to be converted.
 */function hj(e,t,n){for(var r in e){var o=e[r];if(Array.isArray(o)){if(!Array.isArray(o[0])){if("fallbacks"===r){for(var i=0;i<e.fallbacks.length;i++)e.fallbacks[i]=hj(e.fallbacks[i],t,!0);continue}e[r]=/**
 * Convert array to nested array, if needed
 */function e(t,n,r,o){return null==r[n]?t:0===t.length?[]:Array.isArray(t[0])?e(t[0],n,r,o):"object"==typeof t[0]?t.map(function(e){return hO(e,n,o,!1,!0)}):[t]}(o,r,hR,t),e[r].length||delete e[r]}}else if("object"==typeof o){if("fallbacks"===r){e.fallbacks=hj(e.fallbacks,t,!0);continue}e[r]=hO(o,r,t,n),e[r].length||delete e[r]}else""===e[r]&&delete e[r]}return e}function hA(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}// Export javascript style and css style vendor prefixes.
var hD="",hz="",hI="",hM="",hF=f6&&"ontouchstart"in document.documentElement;if(f6){// Order matters. We need to check Webkit the last one because
// other vendors use to add Webkit prefixes to some properties
var hL={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},h$=document.createElement("p").style;for(var hU in hL)if(hU+"Transform" in h$){hD=hU,hz=hL[hU];break}"Webkit"===hD&&"msHyphens"in h$&&(hD="ms",hz=hL.ms,hM="edge"),"Webkit"===hD&&"-apple-trailing-word"in h$&&(hI="apple")}/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */var hV={js:hD,css:hz,vendor:hI,browser:hM,isTouch:hF},hW=/[-\s]+(.)?/g;/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */function hB(e,t){return t?t.toUpperCase():""}/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function hH(e){return e.replace(hW,hB)}/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function hG(e){return hH("-"+e)}var hq={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"// 'align-self' is handled by 'align-self' plugin.
},hQ={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},hK=Object.keys(hQ),hY=function(e){return hV.css+e},hX=[{noPrefill:["appearance"],supportedProperty:function(e){return"appearance"===e&&("ms"===hV.js?"-webkit-"+e:hV.css+e)}},{noPrefill:["color-adjust"],supportedProperty:function(e){return"color-adjust"===e&&("Webkit"===hV.js?hV.css+"print-"+e:e)}},{noPrefill:["mask"],supportedProperty:function(e,t){if(!/^mask/.test(e))return!1;if("Webkit"===hV.js){var n="mask-image";if(hH(n) in t)return e;if(hV.js+hG(n) in t)return hV.css+e}return e}},{noPrefill:["text-orientation"],supportedProperty:function(e){return"text-orientation"===e&&("apple"!==hV.vendor||hV.isTouch?e:hV.css+e)}},{noPrefill:["transform"],supportedProperty:function(e,t,n){return"transform"===e&&(n.transform?e:hV.css+e)}},{noPrefill:["transition"],supportedProperty:function(e,t,n){return"transition"===e&&(n.transition?e:hV.css+e)}},{noPrefill:["writing-mode"],supportedProperty:function(e){return"writing-mode"===e&&("Webkit"===hV.js||"ms"===hV.js&&"edge"!==hV.browser?hV.css+e:e)}},{noPrefill:["user-select"],supportedProperty:function(e){return"user-select"===e&&("Moz"===hV.js||"ms"===hV.js||"apple"===hV.vendor?hV.css+e:e)}},{supportedProperty:function(e,t){return!!/^break-/.test(e)&&("Webkit"===hV.js?"WebkitColumn"+hG(e) in t&&hV.css+"column-"+e:"Moz"===hV.js&&"page"+hG(e) in t&&"page-"+e)}},{supportedProperty:function(e,t){if(!/^(border|margin|padding)-inline/.test(e))return!1;if("Moz"===hV.js)return e;var n=e.replace("-inline","");return hV.js+hG(n) in t&&hV.css+n}},{supportedProperty:function(e,t){return hH(e) in t&&e}},{supportedProperty:function(e,t){var n=hG(e);// Return custom CSS variable without prefixing.
return"-"===e[0]||"-"===e[0]&&"-"===e[1]?e:hV.js+n in t?hV.css+e:"Webkit"!==hV.js&&"Webkit"+n in t&&"-webkit-"+e// Return already prefixed value without prefixing.
}},{supportedProperty:function(e){return"scroll-snap"===e.substring(0,11)&&("ms"===hV.js?""+hV.css+e:e)}},{supportedProperty:function(e){return"overscroll-behavior"===e&&("ms"===hV.js?hV.css+"scroll-chaining":e)}},{supportedProperty:function(e,t){var n=hq[e];return!!n&&hV.js+hG(n) in t&&hV.css+n}},{supportedProperty:function(e,t,n){var r=n.multiple;if(hK.indexOf(e)>-1){var o=hQ[e];if(!Array.isArray(o))return hV.js+hG(o) in t&&hV.css+o;if(!r)return!1;for(var i=0;i<o.length;i++)if(!(hV.js+hG(o[0]) in t))return!1;return o.map(hY)}return!1}}],hZ=hX.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),hJ=hX.filter(function(e){return e.noPrefill}).reduce(function(e,t){var n;return e.push.apply(e,function(e){if(Array.isArray(e))return hA(e)}(n=t.noPrefill)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return hA(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hA(e,t)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e},[]),h0={};// Support old flex spec from 2012.
if(f6){u=document.createElement("p");// We test every property on vendor prefix requirement.
// Once tested, result is cached. It gives us up to 70% perf boost.
// http://jsperf.com/element-style-object-access-vs-plain-object
//
// Prefill cache with known css properties to reduce amount of
// properties we need to feature test at runtime.
// http://davidwalsh.name/vendor-prefix
var h1=window.getComputedStyle(document.documentElement,"");for(var h2 in h1)isNaN(h2)||(h0[h1[h2]]=h1[h2]);// Properties that cannot be correctly detected using the
// cache prefill method.
hJ.forEach(function(e){return delete h0[e]})}/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */function h3(e,t){// For server-side rendering.
if(void 0===t&&(t={}),!u)return e;// Remove cache for benchmark tests or return property from the cache.
if(null!=h0[e])return h0[e];("transition"===e||"transform"===e)&&(t[e]=e in u.style);// Find a plugin for current prefix property.
for(var n=0;n<hZ.length&&(h0[e]=hZ[n](e,u.style,t),!h0[e]);n++);// Reset styles for current property.
// Firefox can even throw an error for invalid properties, e.g., "0".
try{u.style[e]=""}catch(e){return!1}return h0[e]}var h4={},h5={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},h6=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */function h9(e,t,n){return"var"===t?"var":"all"===t?"all":"all"===n?", all":(t?h3(t):", "+h3(n))||t||n}/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */function h8(e,t){// For server-side rendering.
var n=t;if(!c||"content"===e)return t;// It is a string or a number as a string like '1'.
// We want only prefixable values here.
// eslint-disable-next-line no-restricted-globals
if("string"!=typeof n||!isNaN(parseInt(n,10)))return n;// Create cache key for current value.
var r=e+n;// Remove cache for benchmark tests or return value from cache.
if(null!=h4[r])return h4[r];// IE can even throw an error in some cases, for e.g. style.content = 'bar'.
try{// Test value as it is.
c.style[e]=n}catch(e){return(// Return false if value not supported.
h4[r]=!1,!1)}// If 'transition' or 'transition-property' property.
if(h5[e])n=n.replace(h6,h9);else if(""===c.style[e]&&("-ms-flex"===// Value with a vendor prefix.
(n=hV.css+n)&&(c.style[e]="-ms-flexbox"),c.style[e]=n,""===c.style[e]))return h4[r]=!1,!1;// Reset styles for current property.
return c.style[e]="",h4[r]=n,h4[r]}f6&&(c=document.createElement("p"));var h7=/**
 * Sort props by length.
 */function(){var e=function(e,t){return e.length===t.length?e>t?1:-1:e.length-t.length};return{onProcessStyle:function(t,n){if("style"!==n.type)return t;for(var r={},o=Object.keys(t).sort(e),i=0;i<o.length;i++)r[o[i]]=t[o[i]];return r}}},me=function(e){var t;return void 0===e&&(e={}),{plugins:[{onCreateRule:function(e,t,n){if("function"!=typeof t)return null;var r=po(e,{},n);return r[p9]=t,r},onProcessStyle:function(e,t){// We need to extract function values from the declaration, so that we can keep core unaware of them.
// We need to do that only once.
// We don't need to extract functions on each style update, since this can happen only once.
// We don't support function values inside of function rules.
if(p6 in t||p9 in t)return e;var n={};for(var r in e){var o=e[r];"function"==typeof o&&(delete e[r],n[r]=o)}return t[p6]=n,e},onUpdate:function(e,t,n,r){var o=t[p9];// If we have a style function, the entire rule is dynamic and style object
// will be returned from that function.
o&&// Empty object will remove all currently defined props
// in case function rule returns a falsy value.
(t.style=o(e)||{});var i=t[p6];// If we have a fn values map, it is a rule with function values.
if(i)for(var a in i)t.prop(a,i[a](e),r)}},(t=e.observable,{onCreateRule:function(e,n,r){if(!p7(n))return null;var o=po(e,{},r);// TODO
return(// Call `stream.subscribe()` returns a subscription, which should be explicitly
// unsubscribed from when we know this sheet is no longer needed.
n.subscribe(function(e){for(var n in e)o.prop(n,e[n],t)}),o)},onProcessRule:function(e){if(!e||"style"===e.type){var n=e.style,r=function(r){var o=n[r];if(!p7(o))return"continue";delete n[r],o.subscribe({next:function(n){e.prop(r,n,t)}})};for(var o in n)if("continue"===r(o))continue}}}),{onProcessRule:hn},{onCreateRule:function(e,t,n){if(!e)return null;if(e===hr)return new hi(e,t,n);if("@"===e[0]&&e.substr(0,ho.length)===ho)return new ha(e,t,n);var r=n.parent;return r&&("global"===r.type||r.options.parent&&"global"===r.options.parent.type)&&(n.scoped=!1),n.selector||!1!==n.scoped||(n.selector=e),null},onProcessRule:function(e,t){"style"===e.type&&t&&(function(e,t){var n=e.options,r=e.style,o=r?r[hr]:null;if(o){for(var i in o)t.addRule(i,o[i],S({},n,{selector:hs(i,e.selector)}));delete r[hr]}}(e,t),function(e,t){var n=e.options,r=e.style;for(var o in r)if("@"===o[0]&&o.substr(0,hr.length)===hr){var i=hs(o.substr(hr.length),e.selector);t.addRule(i,r[o],S({},n,{selector:i})),delete r[o]}}(e,t))}},{onProcessStyle:function(e,t,n){return"extend"in e?/**
 * Recursively extend styles.
 */function e(t,n,r,o){return void 0===o&&(o={}),function(t,n,r,o){if("string"==typeof t.extend){if(!r)return;var i=r.getRule(t.extend);if(!i||i===n)return;var a=i.options.parent;a&&e(a.rules.raw[t.extend],n,r,o);return}// Extend using an array.
if(Array.isArray(t.extend)){for(var l=0;l<t.extend.length;l++){var s=t.extend[l];e("string"==typeof s?S({},t,{extend:s}):t.extend[l],n,r,o)}return}// Extend is a style object.
for(var u in t.extend){if("extend"===u){e(t.extend.extend,n,r,o);continue}if(hu(t.extend[u])){u in o||(o[u]={}),e(t.extend[u],n,r,o[u]);continue}o[u]=t.extend[u]}}(t,n,r,o),function(t,n,r,o){// Copy base style.
for(var i in t)if("extend"!==i){if(hu(o[i])&&hu(t[i])){e(t[i],n,r,o[i]);continue}if(hu(t[i])){o[i]=e(t[i],n,r);continue}o[i]=t[i]}}(t,n,r,o),o}(e,t,n):e},onChangeValue:function(e,t,n){if("extend"!==t)return e;// Value is empty, remove properties set previously.
if(null==e||!1===e){for(var r in n[hc])n.prop(r,null);return n[hc]=null,null}if("object"==typeof e){for(var o in e)n.prop(o,e[o]);n[hc]=e}// Make sure we don't set the value in the core.
return null}},{onProcessStyle:function(e,t,n){if("style"!==t.type)return e;var r,o,i=t.options.parent;for(var a in e){var l=-1!==a.indexOf("&"),s="@"===a[0];if(l||s){if(r=function(e,t,n){// Options has been already created, now we only increase index.
if(n)return S({},n,{index:n.index+1});var r=e.options.nestingLevel;r=void 0===r?1:r+1;var o=S({},e.options,{nestingLevel:r,index:t.indexOf(e)+1// We don't need the parent name to be set options for chlid.
});return delete o.name,o}(t,i,r),l){var u=function(e,t){for(var n=t.split(hd),r=e.split(hd),o="",i=0;i<n.length;i++)for(var a=n[i],l=0;l<r.length;l++){var s=r[l];o&&(o+=", "),o+=-1!==s.indexOf("&")?s.replace(hf,a):a+" "+s}return o}(a,t.selector);// Lazily create the ref replacer function just once for
o||(o=// Get a function to be used for $ref replacement.
function(e,t){return function(n,r){var o=e.getRule(r)||t&&t.getRule(r);return o?o.selector:r}}(i,n)),u=u.replace(hp,o);var c=t.key+"-"+a;"replaceRule"in i?i.replaceRule(c,e[a],S({},r,{selector:u})):i.addRule(c,e[a],S({},r,{selector:u}))}else s&&i.addRule(a,{},r).addRule(t.key,e[a],{selector:t.selector});delete e[a]}}return e}},{onProcessStyle:function(e,t){return"composes"in e&&(/**
 * Set selector.
 *
 * @param original rule
 * @param className class string
 * @return flag indicating function was successfull or not
 */function e(t,n){// Skip falsy values
if(!n)return!0;// Support array of class names `{composes: ['foo', 'bar']}`
if(Array.isArray(n)){for(var r=0;r<n.length;r++)if(!e(t,n[r]))return!1;return!0}// Support space separated class names `{composes: 'foo bar'}`
if(n.indexOf(" ")>-1)return e(t,n.split(" "));var o=t.options.parent;// It is a ref to a local rule.
if("$"===n[0]){var i=o.getRule(n.substr(1));return!!i&&i!==t&&(o.classes[t.key]+=" "+o.classes[i.key],!0)}return o.classes[t.key]+=" "+n,!0}(t,e.composes),delete e.composes),e}},{onProcessStyle:function(e){if(Array.isArray(e)){// Handle rules like @font-face, which can have multiple styles in an array
for(var t=0;t<e.length;t++)e[t]=hb(e[t]);return e}return hb(e)},onChangeValue:function(e,t,n){if(0===t.indexOf("--"))return e;var r=hy(t);// There was no camel case in place
return t===r?e:(n.prop(r,e),null)}},h_(e.defaultUnit),{onProcessStyle:function(e,t){if(!e||"style"!==t.type)return e;if(Array.isArray(e)){// Pass rules one by one and reformat them
for(var n=0;n<e.length;n++)e[n]=hj(e[n],t);return e}return hj(e,t)}},{onProcessRule:function(e){if("keyframes"===e.type){var t;e.at=// Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
"-"===(t=e.at)[1]||"ms"===hV.js?t:"@"+hV.css+"keyframes"+t.substr(10)// No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
}},onProcessStyle:function(e,t){return"style"!==t.type?e:function e(t){for(var n in t){var r=t[n];if("fallbacks"===n&&Array.isArray(r)){t[n]=r.map(e);continue}var o=!1,i=h3(n);i&&i!==n&&(o=!0);var a=!1,l=h8(i,pa(r));l&&l!==r&&(a=!0),(o||a)&&(o&&delete t[n],t[i||n]=l||r)}return t}(e)},onChangeValue:function(e,t){return h8(t,pa(e))||e}},h7()]}},mt=p2(me()),mn=function(e){void 0===e&&(e=mt);var t,n=new Map,r=0,o=function(){return(!t||t.rules.index.length>1e4)&&(t=e.createStyleSheet().attach()),t};function i(){// eslint-disable-next-line prefer-rest-params
var e=arguments,t=JSON.stringify(e),i=n.get(t);// We can avoid the need for stringification with a babel plugin,
if(i)return i.className;var a=[];// Flatten arguments which can be
// - style objects
// - array of style objects
// - arrays of style objects
for(var l in e){var s=e[l];if(!Array.isArray(s)){a.push(s);continue}for(var u=0;u<s.length;u++)a.push(s[u])}for(var c={},d=[],f=0;f<a.length;f++){var p=a[f];if(p){var h=p;// It can be a class name that css() has previously generated.
if("string"==typeof p){// eslint-disable-next-line no-shadow
var m=n.get(p);m&&(m.labels.length&&d.push.apply(d,m.labels),h=m.style)}h.label&&-1===d.indexOf(h.label)&&d.push(h.label),Object.assign(c,h)}}delete c.label;var g=(0===d.length?"css":d.join("-"))+"-"+r++;o().addRule(g,c);var v=o().classes[g],y={style:c,labels:d,className:v};return n.set(t,y),n.set(v,y),v}// For testing only.
return i.getSheet=o,i}(),mr=Number.MIN_SAFE_INTEGER||-1e9,mo=(0,y.createContext)({classNamePrefix:"",disableStylesGeneration:!1,isSSR:!f6}),mi=new Map,ma=function(e,t){// If `managers` map is present in the context, we use it in order to
// let JssProvider reset them when new response has to render server-side.
var n=e.managers;if(n)return n[t]||(n[t]=new p3),n[t];var r=mi.get(t);return r||(r=new p3,mi.set(t,r)),r},ml=function(e){var t=e.sheet,n=e.context,r=e.index,o=e.theme;t&&(ma(n,r).manage(o),n.registry&&n.registry.add(t))},ms=function(e){e.sheet&&ma(e.context,e.index).unmanage(e.theme)},mu=p2(me()),mc=new WeakMap,md=function(e){return mc.get(e)},mf=function(e,t){mc.set(e,t)},mp=function(e){var t=e.styles;return"function"!=typeof t?t:t(e.theme)},mh=function(e){if(!e.context.disableStylesGeneration){var t,n,r,o,i=ma(e.context,e.index),a=i.get(e.theme);if(a)return a;var l=e.context.jss||mu,s=mp(e),u=/**
 * Extracts a styles object with only props that contain function values.
 */function e(t){var n=null;for(var r in t){var o=t[r],i=typeof o;if("function"===i)n||(n={}),n[r]=o;else if("object"===i&&null!==o&&!Array.isArray(o)){var a=e(o);a&&(n||(n={}),n[r]=a)}}return n}(s),c=l.createStyleSheet(s,(t=null!==u,e.context.id&&null!=e.context.id.minify&&(n=e.context.id.minify),r=e.context.classNamePrefix||"",e.name&&!n&&(r+=e.name.replace(/\s/g,"-")+"-"),o="",e.name&&(o=e.name+", "),o+="function"==typeof e.styles?"Themed":"Unthemed",S({},e.sheetOptions,{index:e.index,meta:o,classNamePrefix:r,link:t,generateId:e.sheetOptions&&e.sheetOptions.generateId?e.sheetOptions.generateId:e.context.generateId})));return mf(c,{dynamicStyles:u,styles:s}),i.add(e.theme,c),c}},mm=function(e,t){// Loop over each dynamic rule and remove the dynamic rule
// We can't just remove the whole sheet as this has all of the rules for every component instance
for(var n in t)e.deleteRule(t[n])},mg=function(e,t,n){// Loop over each dynamic rule and update it
// We can't just update the whole sheet as this has all of the rules for every component instance
for(var r in n)t.updateOne(n[r],e)},mv=function(e,t){var n=md(e);if(n){var r={};// Loop over each dynamic rule and add it to the stylesheet
for(var o in n.dynamicStyles)for(var i=e.rules.index.length,a=e.addRule(o,n.dynamicStyles[o]),l=i;l<e.rules.index.length;l++){var s=e.rules.index[l];e.updateOne(s,t),// can correctly concat the dynamic class with the static one
r[a===s?o:s.key]=s}return r}},my=function(e,t){if(!t)return e.classes;var n=md(e);if(!n)return e.classes;var r={};for(var o in n.styles)r[o]=e.classes[o],o in t&&(r[o]+=" "+e.classes[t[o].key]);return r};function mb(e){return e?y.useEffect:/*@__PURE__*/f(y).useInsertionEffect||y.useLayoutEffect}var mw={},mx=function(e,t){void 0===t&&(t={});var n=t,r=n.index,o=void 0===r?mr++:r,i=n.theming,a=n.name,l=fL(n,["index","theming","name"]),s=i&&i.context||f3,u={};return function(t){var n,r=(0,y.useRef)(!0),i=(0,y.useContext)(mo),c=(n=t&&t.theme,"function"==typeof e&&(n||(0,y.useContext)(s))||mw),d=(0,y.useMemo)(function(){var n=mh({context:i,styles:e,name:a,theme:c,index:o,sheetOptions:l});return n&&i.isSSR&&ml({index:o,context:i,sheet:n,theme:c}),[n,n?mv(n,t):null]},[i,c]),f=d[0],p=d[1];mb(i.isSSR)(function(){// We only need to update the rules on a subsequent update and not in the first mount
f&&p&&!r.current&&mg(t,f,p)},[t]),mb(i.isSSR)(function(){return f&&ml({index:o,context:i,sheet:f,theme:c}),function(){f&&(ms({index:o,context:i,sheet:f,theme:c}),p&&mm(f,p))}},[f]);var h=(0,y.useMemo)(function(){return f&&p?my(f,p):u},[f,p]);return(0,y.useDebugValue)(h),(0,y.useDebugValue)(c===mw?"No theme":c),(0,y.useEffect)(function(){r.current=!1}),h}};Symbol("react-jss-styled"),void 0===l&&(l=mn);var mk={},ff=m("dnnhb"),mS={};mS=/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function(e){var t=fC(e),n=t%1;return t==t?n?t-n:t:0};var mE={},mC={},m_={};m_=/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o};var mR={};mR=Array.isArray;/** Used as references for various `Number` constants. */var mP=1/0,mT=fd?fd.prototype:void 0,mN=mT?mT.toString:void 0;mC=/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function e(t){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof t)return t;if(mR(t))return m_(t,e)+"";if(fO(t))return mN?mN.call(t):"";var n=t+"";return"0"==n&&1/t==-mP?"-0":n},mE=/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function(e){return null==e?"":mC(e)};/* Built-in method references for those with the same name as other `lodash` methods. */var mO=ff.isFinite,mj=Math.min;o=Math.round,mk=function(e,t){if(e=f_(e),(t=null==t?0:mj(mS(t),292))&&mO(e)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var n=(mE(e)+"e").split("e"),r=o(n[0]+"e"+(+n[1]+t));return+((n=(mE(r)+"e").split("e"))[0]+"e"+(+n[1]-t))}return o(e)};var mA={},mD={},mz={},mI={},mM={},mF={};mF=/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function(){this.__data__=[],this.size=0};var mL={},m$={};m$=/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function(e,t){for(var n=e.length;n--;)if(fl(e[n][0],t))return n;return -1};/** Built-in value references. */var mU=Array.prototype.splice;mL=/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=m$(t,e);return!(n<0)&&(n==t.length-1?t.pop():mU.call(t,n,1),--this.size,!0)};var mV={};mV=/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__,n=m$(t,e);return n<0?void 0:t[n][1]};var mW={};mW=/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return m$(this.__data__,e)>-1};var mB={};/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function mH(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mB=/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function(e,t){var n=this.__data__,r=m$(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},// Add methods to `ListCache`.
mH.prototype.clear=mF,mH.prototype.delete=mL,mH.prototype.get=mV,mH.prototype.has=mW,mH.prototype.set=mB,mM=mH;var mG={};mG=/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function(){this.__data__=new mM,this.size=0};var mq={};mq=/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var mQ={};mQ=/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return this.__data__.get(e)};var mK={};mK=/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return this.__data__.has(e)};var mY={},mX={},mZ={},mJ={},m0={},m1={},ff=m("dnnhb");m1=ff["__core-js_shared__"];/** Used to detect methods masquerading as native. */var m2=(s=/[^.]+$/.exec(m1&&m1.keys&&m1.keys.IE_PROTO||""))?"Symbol(src)_1."+s:"";m0=/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function(e){return!!m2&&m2 in e};var m3={},m4=Function.prototype.toString;m3=/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function(e){if(null!=e){try{return m4.call(e)}catch(e){}try{return e+""}catch(e){}}return""};/** Used to detect host constructors (Safari). */var m5=/^\[object .+?Constructor\]$/,m6=Object.prototype,m9=Function.prototype.toString,m8=m6.hasOwnProperty,m7=RegExp("^"+m9.call(m8).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");mJ=/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function(e){return!(!fx(e)||m0(e))&&(fu(e)?m7:m5).test(m3(e))};var ge={};ge=/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function(e,t){return null==e?void 0:e[t]},mZ=/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function(e,t){var n=ge(e,t);return mJ(n)?n:void 0};var ff=m("dnnhb");mX=mZ(ff,"Map");var gt={},gn={},gr={},go={},gi={};gi=mZ(Object,"create"),go=/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function(){this.__data__=gi?gi(null):{},this.size=0};var ga={};ga=/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t};var gl={},gs=Object.prototype.hasOwnProperty;gl=/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){var t=this.__data__;if(gi){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return gs.call(t,e)?t[e]:void 0};var gu={},gc=Object.prototype.hasOwnProperty;gu=/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){var t=this.__data__;return gi?void 0!==t[e]:gc.call(t,e)};var gd={};/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function gf(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}gd=/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=gi&&void 0===t?"__lodash_hash_undefined__":t,this},// Add methods to `Hash`.
gf.prototype.clear=go,gf.prototype.delete=ga,gf.prototype.get=gl,gf.prototype.has=gu,gf.prototype.set=gd,gr=gf,gn=/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function(){this.size=0,this.__data__={hash:new gr,map:new(mX||mM),string:new gr}};var gp={},gh={},gm={};gm=/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},gh=/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function(e,t){var n=e.__data__;return gm(t)?n["string"==typeof t?"string":"hash"]:n.map},gp=/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function(e){var t=gh(this,e).delete(e);return this.size-=t?1:0,t};var gg={};gg=/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function(e){return gh(this,e).get(e)};var gv={};gv=/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e){return gh(this,e).has(e)};var gy={};/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function gb(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function gw(e){var t=this.__data__=new mM(e);this.size=t.size}gy=/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function(e,t){var n=gh(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `MapCache`.
gb.prototype.clear=gn,gb.prototype.delete=gp,gb.prototype.get=gg,gb.prototype.has=gv,gb.prototype.set=gy,gt=gb,mY=/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function(e,t){var n=this.__data__;if(n instanceof mM){var r=n.__data__;if(!mX||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new gt(r)}return n.set(e,t),this.size=n.size,this},// Add methods to `Stack`.
gw.prototype.clear=mG,gw.prototype.delete=mq,gw.prototype.get=mQ,gw.prototype.has=mK,gw.prototype.set=mY,mI=gw;var gx={},gk={},gS={};gS=/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var gE={};/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function gC(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new gt;++t<n;)this.add(e[t])}gE=/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function(e){return this.__data__.has(e)},// Add methods to `SetCache`.
gC.prototype.add=gC.prototype.push=gS,gC.prototype.has=gE,gk=gC;var g_={};g_=/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var gR={};gR=/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function(e,t){return e.has(t)},gx=/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;// Check that cyclic values are equal.
var u=i.get(e),c=i.get(t);if(u&&c)return u==t&&c==e;var d=-1,f=!0,p=2&n?new gk:void 0;// Ignore non-index properties.
for(i.set(e,t),i.set(t,e);++d<l;){var h=e[d],m=t[d];if(r)var g=a?r(m,h,d,t,e,i):r(h,m,d,e,t,i);if(void 0!==g){if(g)continue;f=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(p){if(!g_(t,function(e,t){if(!gR(p,t)&&(h===e||o(h,e,n,r,i)))return p.push(t)})){f=!1;break}}else if(!(h===m||o(h,m,n,r,i))){f=!1;break}}return i.delete(e),i.delete(t),f};var gP={},gT={},ff=m("dnnhb");gT=ff.Uint8Array;var gN={};gN=/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n};var gO={};gO=/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n};/** Used to convert symbols to primitives and strings. */var gj=fd?fd.prototype:void 0,gA=gj?gj.valueOf:void 0;gP=/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!i(new gT(e),new gT(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return fl(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case"[object Map]":var l=gN;case"[object Set]":var s=1&r;if(l||(l=gO),e.size!=t.size&&!s)break;// Assume cyclic values are equal.
var u=a.get(e);if(u)return u==t;r|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=gx(l(e),l(t),r,o,i,a);return a.delete(e),c;case"[object Symbol]":if(gA)return gA.call(e)==gA.call(t)}return!1};var gD={},gz={},gI={},gM={};gM=/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},gI=/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e,t,n){var r=t(e);return mR(e)?r:gM(r,n(e))};var gF={},gL={};gL=/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var g$={};g$=/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function(){return[]};/** Built-in value references. */var gU=Object.prototype.propertyIsEnumerable,gV=Object.getOwnPropertySymbols;gF=gV?function(e){return null==e?[]:(e=Object(e),gL(gV(e),function(t){return gU.call(e,t)}))}:g$;var gW={},gB={},gH={};gH=/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var gG={},gq={};gq=/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function(e){return fj(e)&&"[object Arguments]"==fc(e)};/** Used for built-in method references. */var gQ=Object.prototype,gK=gQ.hasOwnProperty,gY=gQ.propertyIsEnumerable;gG=gq(function(){return arguments}())?gq:function(e){return fj(e)&&gK.call(e,"callee")&&!gY.call(e,"callee")};var gX=m("8TKuU"),gZ={},gJ={},g0={};g0["[object Float32Array]"]=g0["[object Float64Array]"]=g0["[object Int8Array]"]=g0["[object Int16Array]"]=g0["[object Int32Array]"]=g0["[object Uint8Array]"]=g0["[object Uint8ClampedArray]"]=g0["[object Uint16Array]"]=g0["[object Uint32Array]"]=!0,g0["[object Arguments]"]=g0["[object Array]"]=g0["[object ArrayBuffer]"]=g0["[object Boolean]"]=g0["[object DataView]"]=g0["[object Date]"]=g0["[object Error]"]=g0["[object Function]"]=g0["[object Map]"]=g0["[object Number]"]=g0["[object Object]"]=g0["[object RegExp]"]=g0["[object Set]"]=g0["[object String]"]=g0["[object WeakMap]"]=!1,gJ=/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function(e){return fj(e)&&fk(e.length)&&!!g0[fc(e)]};var g1={};g1=/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function(e){return function(t){return e(t)}};var g2=m("1mm29"),g3=g2&&g2.isTypedArray;gZ=g3?g1(g3):gJ;/** Used to check objects for own properties. */var g4=Object.prototype.hasOwnProperty;gB=/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function(e,t){var n=mR(e),r=!n&&gG(e),o=!n&&!r&&gX(e),i=!n&&!r&&!o&&gZ(e),a=n||r||o||i,l=a?gH(e.length,String):[],s=l.length;for(var u in e)(t||g4.call(e,u))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==u||// Node.js 0.10 has enumerable non-index properties on buffers.
o&&("offset"==u||"parent"==u)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||// Skip index properties.
fS(u,s)))&&l.push(u);return l};var g5={},g6={},g9=Object.prototype;g6=/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||g9)};var g8={};i=Object.keys,a=Object,g8=function(e){return i(a(e))};/** Used to check objects for own properties. */var g7=Object.prototype.hasOwnProperty;g5=/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function(e){if(!g6(e))return g8(e);var t=[];for(var n in Object(e))g7.call(e,n)&&"constructor"!=n&&t.push(n);return t},gW=/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function(e){return fs(e)?gB(e):g5(e)},gz=/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function(e){return gI(e,gW,gF)};/** Used to check objects for own properties. */var ve=Object.prototype.hasOwnProperty;gD=/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=1&n,l=gz(e),s=l.length;if(s!=gz(t).length&&!a)return!1;for(var u=s;u--;){var c=l[u];if(!(a?c in t:ve.call(t,c)))return!1}// Check that cyclic values are equal.
var d=i.get(e),f=i.get(t);if(d&&f)return d==t&&f==e;var p=!0;i.set(e,t),i.set(t,e);for(var h=a;++u<s;){var m=e[c=l[u]],g=t[c];if(r)var v=a?r(g,m,c,t,e,i):r(m,g,c,e,t,i);// Recursively compare objects (susceptible to call stack limits).
if(!(void 0===v?m===g||o(m,g,n,r,i):v)){p=!1;break}h||(h="constructor"==c)}if(p&&!h){var y=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
y!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(e),i.delete(t),p};var vt={},vn={},ff=m("dnnhb");vn=mZ(ff,"DataView");var vr={},ff=m("dnnhb");vr=mZ(ff,"Promise");var vo={},ff=m("dnnhb");vo=mZ(ff,"Set");var vi={},ff=m("dnnhb");vi=mZ(ff,"WeakMap");/** `Object#toString` result references. */var va="[object Map]",vl="[object Promise]",vs="[object Set]",vu="[object WeakMap]",vc="[object DataView]",vd=m3(vn),vf=m3(mX),vp=m3(vr),vh=m3(vo),vm=m3(vi),vg=fc;(vn&&vg(new vn(new ArrayBuffer(1)))!=vc||mX&&vg(new mX)!=va||vr&&vg(vr.resolve())!=vl||vo&&vg(new vo)!=vs||vi&&vg(new vi)!=vu)&&(vg=function(e){var t=fc(e),n="[object Object]"==t?e.constructor:void 0,r=n?m3(n):"";if(r)switch(r){case vd:return vc;case vf:return va;case vp:return vl;case vh:return vs;case vm:return vu}return t}),vt=vg;var gX=m("8TKuU"),vv="[object Arguments]",vy="[object Array]",vb="[object Object]",vw=Object.prototype.hasOwnProperty;mz=/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function(e,t,n,r,o,i){var a=mR(e),l=mR(t),s=a?vy:vt(e),u=l?vy:vt(t);s=s==vv?vb:s,u=u==vv?vb:u;var c=s==vb,d=u==vb,f=s==u;if(f&&gX(e)){if(!gX(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new mI),a||gZ(e)?gx(e,t,n,r,o,i):gP(e,t,s,n,r,o,i);if(!(1&n)){var p=c&&vw.call(e,"__wrapped__"),h=d&&vw.call(t,"__wrapped__");if(p||h){var m=p?e.value():e,g=h?t.value():t;return i||(i=new mI),o(m,g,n,r,i)}}return!!f&&(i||(i=new mI),gD(e,t,n,r,o,i))},mD=/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function e(t,n,r,o,i){return t===n||(null!=t&&null!=n&&(fj(t)||fj(n))?mz(t,n,r,o,e,i):t!=t&&n!=n)},mA=/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function(e,t){return mD(e,t)};/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vx=function(){return(vx=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},vk=function(e,t,n,r,o){return(e-t)*(o-r)/(n-t)+r},vS=function(e,t){var n=e+t;return n>360?n-360:n},vE=function(){return Math.random()>.5},vC=[0,0,1],v_=[// dual axis rotations (a bit more realistic)
[1,1,0],[1,0,1],[0,1,1],// single axis rotations (a bit dumber)
[1,0,0],[0,1,0],vC],vR=v_.reduce(function(e,t,n){var r;return vx(vx({},e),((r={})["@keyframes rotation-".concat(n)]={"50%":{transform:"rotate3d(".concat(t.map(function(e){return e/2}).join(),", 180deg)")},"100%":{transform:"rotate3d(".concat(t.join(),", 360deg)")}},r))},{}),vP=function(e,t,n){var r=e.reduce(function(e,t,r){var o,i=vk(Math.abs(vS(t,90)-180),0,180,-n/2,n/2);return vx(vx({},e),((o={})["@keyframes x-axis-".concat(r)]={to:{transform:"translateX(".concat(i,"px)")}},o))},{});return vx({"@keyframes y-axis":{to:{transform:"translateY(".concat("string"==typeof t?t:"".concat(t,"px"),")")}}},r)},vT=function(e,t,n,r,o){var i,a=Math.round(Math.random()*(v_.length-1)),l=t-Math.round(1e3*Math.random()),s=!/*@__PURE__*/f(mA)(v_[a],vC)&&vE(),u=.1>Math.random()?/*@__PURE__*/f(mk)(.25*Math.random(),2):0,c=-1*u,d=/*@__PURE__*/f(mk)(Math.abs(vk(Math.abs(vS(e.degree,90)-180),0,180,-1,1)),4),p=/*@__PURE__*/f(mk)(.5*Math.random(),4),h=/*@__PURE__*/f(mk)(Math.random()*n*(vE()?1:-1),4),m=/*@__PURE__*/f(mk)(Math.max(vk(Math.abs(e.degree-180),0,180,n,-n),0),4);return(i={})["&#confetti-particle-".concat(o)]={animation:"$x-axis-".concat(o," ").concat(l,"ms forwards cubic-bezier(").concat(u,", ").concat(c,", ").concat(u,", ").concat(d,")"),"& > div":{width:s?r:Math.round(4*Math.random())+r/2,height:s?r:Math.round(2*Math.random())+r,animation:"$y-axis ".concat(l,"ms forwards cubic-bezier(").concat(p,", ").concat(h,", ").concat(.5,", ").concat(m,")"),"&:after":vx({backgroundColor:e.color,animation:"$rotation-".concat(a," ").concat(Math.round(600*Math.random()+200),"ms infinite linear")},s?{borderRadius:"50%"}:{})}},i},vN=function(e){var t=e.particles,n=e.duration,r=e.height,o=e.width,i=e.force,a=e.particleSize,l=t.reduce(function(e,t,r){return vx(vx({},e),vT(t,n,i,a,r))},{});return mx(vx(vx(vx({},vR),vP(t.map(function(e){return e.degree}),r,o)),{container:{width:0,height:0,position:"relative"},screen:{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"hidden",pointerEvents:"none"},particle:vx(vx({},l),{"& > div":{position:"absolute",left:0,top:0,"&:after":{content:"''",display:"block",width:"100%",height:"100%"}}})}),{name:"confetti-explosion"})},vO=["#FFC700","#FF0000","#2E3191","#41BBC7"],vj=function(e,t){var n=360/e;return /*@__PURE__*/f(fn)(e).map(function(e){return{color:t[e%t.length],degree:n*e}})};function vA(e){var t=e.particleCount,n=e.duration,r=void 0===n?2200:n,o=e.colors,i=e.particleSize,a=e.force,l=e.height,s=e.width,u=e.zIndex,c=e.onComplete,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}(e,["particleCount","duration","colors","particleSize","force","height","width","zIndex","onComplete"]),f=y.useState(),p=f[0],h=f[1],m=vj(void 0===t?100:t,void 0===o?vO:o),b=vN({particles:m,duration:r,particleSize:void 0===i?12:i,force:void 0===a?.5:a,width:void 0===s?1e3:s,height:void 0===l?"120vh":l})(),w=y.useCallback(function(e){if(e){var t=e.getBoundingClientRect();h({top:t.top,left:t.left})}},[]);return y.useEffect(function(){if("function"==typeof c){var e=setTimeout(c,r);return function(){return clearTimeout(e)}}},[r,c]),(0,g.jsx)("div",vx({ref:w,className:b.container},d,{children:p&&(0,v.createPortal)((0,g.jsx)("div",vx({className:b.screen},u?{style:{zIndex:u}}:null,{children:(0,g.jsx)("div",vx({style:{position:"absolute",top:p.top,left:p.left}},{children:m.map(function(e,t){return(0,g.jsx)("div",vx({id:"confetti-particle-".concat(t),className:b.particle},{children:(0,g.jsx)("div",{})}),e.degree)})}))})),document.body)}))}var y=m("bh6RR");/**
 * lucide-react v0.288.0 - ISC
 */const vD=x("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),vz=x("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]),vI=x("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);var vM=function({shuffledRows:e,setShuffledRows:t,setGridShake:n}){let{isGameOver:r,guessCandidate:o,setGuessCandidate:i,submittedGuesses:a,setSubmittedGuesses:l,solvedGameData:s,setSolvedGameData:u}=/*@__PURE__*/f(y).useContext(oC),{gameData:c,categorySize:d}=/*@__PURE__*/f(y).useContext(ow),{toast:p}=dz();return/*#__PURE__*/(0,g.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[/*#__PURE__*/(0,g.jsxs)(rp,{disabled:r,variant:"secondary",onClick:()=>t(rP({gameData:e})),children:[/*#__PURE__*/(0,g.jsx)(vz,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Shuffle"})]}),/*#__PURE__*/(0,g.jsxs)(rp,{size:"deselectallsize",disabled:r,variant:"secondary",onClick:function(){i([])},children:[/*#__PURE__*/(0,g.jsx)(vI,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Deselect All"})]}),/*#__PURE__*/(0,g.jsxs)(rp,{variant:"submit",onClick:function(){// check that its a valid guess by size
if(o.length!==d)return;// check that the guess hasnt already been submitted previously
if(function({submittedGuesses:e,guessCandidate:t}){for(let n=0;n<e.length;n++){let r=e[n];if(e2(t,r))return!0}return!1}({submittedGuesses:a,guessCandidate:o})){p({label:"Notification",title:"Repeated Guess",description:"You previously made this guess!"});return}// add guess to state
l([...a,o]);// check if the guess is correct
let{isCorrect:e,correctWords:t,correctCategory:r,isGuessOneAway:f,correctDifficulty:h,correctImageSrc:m}=function({gameData:e,guessCandidate:t}){let n=!1,r="",o="",i=null,a=!1,l=null,s=[];for(let u=0;u<e.length;u++){if(r=e[u].words,o=e[u].category,l=e[u].difficulty,i=e[u].imageSrc,e2(t,r))return{isCorrect:n=!0,correctWords:r,correctCategory:o,isGuessOneAway:a,correctDifficulty:l,correctImageSrc:i};{// check size of difference, were doing this twice, but no need to optimize for tiny arrays
let e=e1(t,r).length;// store how far off their guess was from category
s.push(e)}}return{isCorrect:n,correctWords:r,correctCategory:o,isGuessOneAway:a=1===Math.min(...s),correctImageSrc:i}}({guessCandidate:o,gameData:c});// if the guess is correct:
// set it as solved in game data
e?(u([...s,{category:r,words:t,difficulty:h,imageSrc:m}]),i([])):(// Shake the grid to give feedback that they were wrong
n(!0),f&&p({label:"Notification",title:"Close Guess",description:"You were one guess away from correctly guessing a category!"}))},disabled:r||o.length!==d,children:[/*#__PURE__*/(0,g.jsx)(vD,{className:"h-4 w-4 mr-2",strokeWidth:1}),/*#__PURE__*/(0,g.jsx)("p",{className:"select-none",children:"Submit"})]})]})},y=m("bh6RR"),vF=function(){let{submittedGuesses:e}=/*@__PURE__*/f(y).useContext(oC),{gameData:t}=/*@__PURE__*/f(y).useContext(ow);return/*#__PURE__*/(0,g.jsx)(rE,{title:"",trigger:/*#__PURE__*/(0,g.jsx)(rp,{variant:"submit",className:"w-full",children:"View Results"}),initiallyOpen:!1,showActionButton:!1,footerElements:/*#__PURE__*/(0,g.jsx)(dW,{buttonText:"Share Your Score!"}),children:/*#__PURE__*/(0,g.jsxs)("div",{className:"flex flex-col place-content-center",children:[/*#__PURE__*/(0,g.jsx)("p",{className:"text-center font-[600]",children:"Your Guesses Are Represented Below"}),/*#__PURE__*/(0,g.jsxs)("span",{className:"text-center whitespace-pre mb-2",children:["\n",rT(t,e)]}),/*#__PURE__*/(0,g.jsx)(d4,{})]})})},vL=function(){let{gameData:e,categorySize:t,numCategories:n}=/*@__PURE__*/f(y).useContext(ow),{submittedGuesses:r,solvedGameData:o,isGameOver:i,isGameWon:a}=/*@__PURE__*/f(y).useContext(oC),[l,s]=/*@__PURE__*/f(y).useState(rP({gameData:e})),[u,c]=/*@__PURE__*/f(y).useState(!1),[d,p]=/*@__PURE__*/f(y).useState(!1),[h,m]=/*@__PURE__*/f(y).useState(!1);return /*@__PURE__*/f(y).useEffect(()=>{let t=o.map(e=>e.category),n=e.filter(e=>!t.includes(e.category));n.length>0&&s(rP({gameData:n}))},[o]),/*@__PURE__*/f(y).useEffect(()=>{if(!i)return;let e=window.setTimeout(()=>{c(!0),//unmount confetti after modal opens
m(!1)},a?2e3:250);return a&&m(!0),()=>window.clearTimeout(e)},[i]),/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[/*#__PURE__*/(0,g.jsxs)("h3",{className:"text-xl text-center mt-4",children:["Create ",n," groups of ",t]}),/*#__PURE__*/(0,g.jsxs)("div",{className:"game-wrapper",children:[i&&a?/*#__PURE__*/(0,g.jsx)(d6,{open:u,submittedGuesses:r}):/*#__PURE__*/(0,g.jsx)(d5,{open:u,submittedGuesses:r}),/*#__PURE__*/(0,g.jsx)(s0,{gameRows:l,shouldGridShake:d,setShouldGridShake:p}),h&&i&&/*#__PURE__*/(0,g.jsx)("div",{className:"grid place-content-center",children:/*#__PURE__*/(0,g.jsx)(vA,{particleCount:100,force:.8,duration:2500})}),/*#__PURE__*/(0,g.jsx)(ft,{}),i?/*#__PURE__*/(0,g.jsx)(vF,{}):/*#__PURE__*/(0,g.jsxs)(g.Fragment,{children:[/*#__PURE__*/(0,g.jsx)(s4,{}),/*#__PURE__*/(0,g.jsx)(vM,{shuffledRows:l,setShuffledRows:s,setGridShake:p})]})]})]})},y=(m("bh6RR"),m("bh6RR"),m("bh6RR"));const v$=/*#__PURE__*/(0,y.forwardRef)((e,t)=>/*#__PURE__*/(0,y.createElement)(M.span,S({},e,{ref:t,style:{// See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),vU="ToastProvider",[vV,vW,vB]=j("Toast"),[vH,vG]=C("Toast",[vB]),[vq,vQ]=vH(vU),vK=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:a}=e,[l,s]=(0,y.useState)(null),[u,c]=(0,y.useState)(0),d=(0,y.useRef)(!1),f=(0,y.useRef)(!1);return/*#__PURE__*/(0,y.createElement)(vV.Provider,{scope:t},/*#__PURE__*/(0,y.createElement)(vq,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:s,onToastAdd:(0,y.useCallback)(()=>c(e=>e+1),[]),onToastRemove:(0,y.useCallback)(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:f},a))};vK.propTypes={label(e){if(e.label&&"string"==typeof e.label&&!e.label.trim()){let e=`Invalid prop \`label\` supplied to \`${vU}\`. Expected non-empty \`string\`.`;return Error(e)}return null}};const vY=["F8"],vX="toast.viewportPause",vZ="toast.viewportResume",vJ=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,hotkey:r=vY,label:o="Notifications ({hotkey})",...i}=e,a=vQ("ToastViewport",n),l=vW(n),s=(0,y.useRef)(null),u=(0,y.useRef)(null),c=(0,y.useRef)(null),d=(0,y.useRef)(null),f=R(t,d,a.onViewportChange),p=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),h=a.toastCount>0;(0,y.useEffect)(()=>{let e=e=>{var t;// we use `event.code` as it is consistent regardless of meta keys that were pressed.
// for example, `event.key` for `Control+Alt+t` is `†` and `t !== †`
let n=r.every(t=>e[t]||e.code===t);n&&(null===(t=d.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),(0,y.useEffect)(()=>{let e=s.current,t=d.current;if(h&&e&&t){let n=()=>{if(!a.isClosePausedRef.current){let e=new CustomEvent(vX);t.dispatchEvent(e),a.isClosePausedRef.current=!0}},r=()=>{if(a.isClosePausedRef.current){let e=new CustomEvent(vZ);t.dispatchEvent(e),a.isClosePausedRef.current=!1}},o=t=>{let n=!e.contains(t.relatedTarget);n&&r()},i=()=>{let t=e.contains(document.activeElement);t||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[h,a.isClosePausedRef]);let m=(0,y.useCallback)(({tabbingDirection:e})=>{let t=l(),n=t.map(t=>{let n=t.ref.current,r=[n,.../**
 * Returns a list of potential tabbable candidates.
 *
 * NOTE: This is only a close approximation. For example it doesn't take into account cases like when
 * elements are not visible. This cannot be worked out easily by just reading a property, but rather
 * necessitate runtime knowledge (computed styles, etc). We deal with these cases separately.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
 * Credit: https://github.com/discord/focus-layers/blob/master/src/util/wrapFocus.tsx#L1
 */function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP// `.tabIndex` is not the same as the `tabindex` attribute. It works on the
}});for(;n.nextNode();)t.push(n.currentNode);// we do not take into account the order of nodes with positive `tabIndex` as it
// hinders accessibility to have tab order different from visual order.
return t}(n)];return"forwards"===e?r:r.reverse()});return("forwards"===e?n.reverse():n).flat()},[l]);return(0,y.useEffect)(()=>{let e=d.current;// We programmatically manage tabbing as we are unable to influence
// the source order with portals, this allows us to reverse the
// tab order so that it runs from most recent toast to least
if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey,r="Tab"===t.key&&!n;if(r){var o,i,a;let n=document.activeElement,r=t.shiftKey,l=t.target===e;// proxy focus out to the preceding document
if(l&&r){null===(o=u.current)||void 0===o||o.focus();return}let s=m({tabbingDirection:r?"backwards":"forwards"}),d=s.findIndex(e=>e===n);yo(s.slice(d+1))?t.preventDefault():// If we can't focus that means we're at the edges so we
// proxy to the corresponding exit point and let the browser handle
// tab/shift+tab keypress and implicitly pass focus to the next valid element in the document
r?null===(i=u.current)||void 0===i||i.focus():null===(a=c.current)||void 0===a||a.focus()}};// Toasts are not in the viewport React tree so we need to bind DOM events
return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[l,m]),/*#__PURE__*/(0,y.createElement)(tU,{ref:s,role:"region","aria-label":o.replace("{hotkey}",p)// Ensure virtual cursor from landmarks menus triggers focus/blur for pause/resume
,tabIndex:-1// incase list has size when empty (e.g. padding), we remove pointer events so
,style:{pointerEvents:h?void 0:"none"}},h&&/*#__PURE__*/(0,y.createElement)(v0,{ref:u,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"forwards"});yo(e)}}),/*#__PURE__*/(0,y.createElement)(vV.Slot,{scope:n},/*#__PURE__*/(0,y.createElement)(M.ol,S({tabIndex:-1},i,{ref:f}))),h&&/*#__PURE__*/(0,y.createElement)(v0,{ref:c,onFocusFromOutsideViewport:()=>{let e=m({tabbingDirection:"backwards"});yo(e)}}))}),v0=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=vQ("ToastFocusProxy",n);return/*#__PURE__*/(0,y.createElement)(v$,S({"aria-hidden":!0,tabIndex:0},o,{ref:t// Avoid page scrolling when focus is on the focus proxy
,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget,o=!(null!==(t=i.viewport)&&void 0!==t&&t.contains(n));o&&r()}}))}),v1="Toast",v2=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{forceMount:n,open:r,defaultOpen:o,onOpenChange:i,...a}=e,[l=!0,s]=$({prop:r,defaultProp:o,onChange:i});return/*#__PURE__*/(0,y.createElement)(eo,{present:n||l},/*#__PURE__*/(0,y.createElement)(v5,S({open:l},a,{ref:t,onClose:()=>s(!1),onPause:L(e.onPause),onResume:L(e.onResume),onSwipeStart:E(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:E(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${n}px`)}),onSwipeCancel:E(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:E(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${n}px`),s(!1)})})))}),[v3,v4]=vH(v1,{onClose(){}}),v5=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:o,open:i,onClose:a,onEscapeKeyDown:l,onPause:s,onResume:u,onSwipeStart:c,onSwipeMove:d,onSwipeCancel:f,onSwipeEnd:p,...h}=e,m=vQ(v1,n),[g,b]=(0,y.useState)(null),w=R(t,e=>b(e)),x=(0,y.useRef)(null),k=(0,y.useRef)(null),C=o||m.duration,_=(0,y.useRef)(0),P=(0,y.useRef)(C),T=(0,y.useRef)(0),{onToastAdd:N,onToastRemove:O}=m,j=L(()=>{var e;// focus viewport if focus is within toast to read the remaining toast
// count to SR users and ensure focus isn't lost
let t=null==g?void 0:g.contains(document.activeElement);t&&(null===(e=m.viewport)||void 0===e||e.focus()),a()}),A=(0,y.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(T.current),_.current=new Date().getTime(),T.current=window.setTimeout(j,e))},[j]);(0,y.useEffect)(()=>{let e=m.viewport;if(e){let t=()=>{A(P.current),null==u||u()},n=()=>{let e=new Date().getTime()-_.current;P.current=P.current-e,window.clearTimeout(T.current),null==s||s()};return e.addEventListener(vX,n),e.addEventListener(vZ,t),()=>{e.removeEventListener(vX,n),e.removeEventListener(vZ,t)}}},[m.viewport,C,s,u,A]),// we include `open` in deps because closed !== unmounted when animating
// so it could reopen before being completely unmounted
(0,y.useEffect)(()=>{i&&!m.isClosePausedRef.current&&A(C)},[i,C,m.isClosePausedRef,A]),(0,y.useEffect)(()=>(N(),()=>O()),[N,O]);let D=(0,y.useMemo)(()=>g?function e(t){let n=[],r=Array.from(t.childNodes);// This allows SR VO to naturally pause break between nodes while announcing.
    return r.forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(g):null,[g]);return m.viewport?/*#__PURE__*/(0,y.createElement)(y.Fragment,null,D&&/*#__PURE__*/(0,y.createElement)(v6,{__scopeToast:n// Toasts are always role=status to avoid stuttering issues with role=alert in SRs.
,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0},D),/*#__PURE__*/(0,y.createElement)(v3,{scope:n,onClose:j},/*#__PURE__*/(0,v.createPortal)(/*#__PURE__*/(0,y.createElement)(vV.ItemSlot,{scope:n},/*#__PURE__*/(0,y.createElement)(t$,{asChild:!0,onEscapeKeyDown:E(l,()=>{m.isFocusedToastEscapeKeyDownRef.current||j(),m.isFocusedToastEscapeKeyDownRef.current=!1})},/*#__PURE__*/(0,y.createElement)(M.li,S({// Ensure toasts are announced as status list or status when focused
role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":m.swipeDirection},h,{ref:w,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:E(e.onKeyDown,e=>{"Escape"!==e.key||(null==l||l(e.nativeEvent),e.nativeEvent.defaultPrevented||(m.isFocusedToastEscapeKeyDownRef.current=!0,j()))}),onPointerDown:E(e.onPointerDown,e=>{0===e.button&&(x.current={x:e.clientX,y:e.clientY})}),onPointerMove:E(e.onPointerMove,e=>{if(!x.current)return;let t=e.clientX-x.current.x,n=e.clientY-x.current.y,r=!!k.current,o=["left","right"].includes(m.swipeDirection),i=["left","up"].includes(m.swipeDirection)?Math.min:Math.max,a=o?i(0,t):0,l=o?0:i(0,n),s="touch"===e.pointerType?10:2,u={x:a,y:l},f={originalEvent:e,delta:u};r?(k.current=u,yn("toast.swipeMove",d,f,{discrete:!1})):yr(u,m.swipeDirection,s)?(k.current=u,yn("toast.swipeStart",c,f,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>s||Math.abs(n)>s)&&(x.current=null)}),onPointerUp:E(e.onPointerUp,e=>{let t=k.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),k.current=null,x.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};yr(t,m.swipeDirection,m.swipeThreshold)?yn("toast.swipeEnd",p,r,{discrete:!0}):yn("toast.swipeCancel",f,r,{discrete:!0}),// Prevent click event from triggering on items within the toast when
// pointer up is part of a swipe gesture
n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),m.viewport))):null});v5.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){let e=`Invalid prop \`type\` supplied to \`${v1}\`. Expected \`foreground | background\`.`;return Error(e)}return null}};/* -----------------------------------------------------------------------------------------------*/const v6=e=>{let{__scopeToast:t,children:n,...r}=e,o=vQ(v1,t),[i,a]=(0,y.useState)(!1),[l,s]=(0,y.useState)(!1);return function(e=()=>{}){let t=L(e);A(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>a(!0)),(0,y.useEffect)(()=>{let e=window.setTimeout(()=>s(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:/*#__PURE__*/(0,y.createElement)(tJ,{asChild:!0},/*#__PURE__*/(0,y.createElement)(v$,r,i&&/*#__PURE__*/(0,y.createElement)(y.Fragment,null,o.label," ",n)))},v9=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,y.createElement)(M.div,S({},r,{ref:t}))}),v8=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return/*#__PURE__*/(0,y.createElement)(M.div,S({},r,{ref:t}))}),v7=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{altText:n,...r}=e;return n?/*#__PURE__*/(0,y.createElement)(yt,{altText:n,asChild:!0},/*#__PURE__*/(0,y.createElement)(ye,S({},r,{ref:t}))):null});v7.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};const ye=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e,o=v4("ToastClose",n);return/*#__PURE__*/(0,y.createElement)(yt,{asChild:!0},/*#__PURE__*/(0,y.createElement)(M.button,S({type:"button"},r,{ref:t,onClick:E(e.onClick,o.onClose)})))}),yt=/*#__PURE__*/(0,y.forwardRef)((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return/*#__PURE__*/(0,y.createElement)(M.div,S({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},o,{ref:t}))});/* ---------------------------------------------------------------------------------------------- */function yn(e,t,n,{discrete:r}){let o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?F(o,i):o.dispatchEvent(i)}const yr=(e,t,n=0)=>{let r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function yo(e){let t=document.activeElement;return e.some(e=>// if focus is already where we want to go, we don't want to keep going through the candidates
    e===t||(e.focus(),document.activeElement!==t))}/**
 * lucide-react v0.288.0 - ISC
 */const yi=x("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ya=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(tJ,{className:"fixed z-[200]",children:/*#__PURE__*/(0,g.jsx)(vJ,{ref:n,className:eY("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t})}));ya.displayName=vJ.displayName;const yl=rd("group pointer-events-auto z-160 relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),ys=/*#__PURE__*/y.forwardRef(({className:e,variant:t,...n},r)=>/*#__PURE__*/(0,g.jsx)(v2,{ref:r,className:eY(yl({variant:t}),e),...n}));ys.displayName=v2.displayName;const yu=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(v7,{ref:n,className:eY("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));yu.displayName=v7.displayName;const yc=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(ye,{ref:n,className:eY("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:/*#__PURE__*/(0,g.jsx)(yi,{className:"h-4 w-4"})}));yc.displayName=ye.displayName;const yd=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(v9,{ref:n,className:eY("text-sm font-semibold",e),...t}));yd.displayName=v9.displayName;const yf=/*#__PURE__*/y.forwardRef(({className:e,...t},n)=>/*#__PURE__*/(0,g.jsx)(v8,{ref:n,className:eY("text-sm opacity-90",e),...t}));function yp(){let{toasts:e}=dz();return/*#__PURE__*/(0,g.jsxs)(vK,{children:[e.map(function({id:e,title:t,description:n,action:r,...o}){return/*#__PURE__*/(0,g.jsxs)(ys,{...o,children:[/*#__PURE__*/(0,g.jsxs)("div",{className:"grid gap-1",children:[t&&/*#__PURE__*/(0,g.jsx)(yd,{children:t}),n&&/*#__PURE__*/(0,g.jsx)(yf,{children:n})]}),r,/*#__PURE__*/(0,g.jsx)(yc,{})]},e)}),/*#__PURE__*/(0,g.jsx)(ya,{})]})}yf.displayName=v8.displayName;const yh=u8(document.querySelector("#root"));yh.render(/*#__PURE__*/(0,g.jsx)(function(){return/*#__PURE__*/(0,g.jsx)(ox,{children:/*#__PURE__*/(0,g.jsx)(o_,{children:/*#__PURE__*/(0,g.jsxs)("div",{className:"wrapper",children:[/*#__PURE__*/(0,g.jsx)(yp,{}),/*#__PURE__*/(0,g.jsx)(r_,{}),/*#__PURE__*/(0,g.jsx)(vL,{})]})})})},{}));//# sourceMappingURL=index.bc101f4d.js.map

//# sourceMappingURL=index.bc101f4d.js.map
